import https from "https";
import { IncomingMessage } from "http";
import { Resolver } from "dns/promises";

/** in seconds */
const testTime = 10;

/**
 * Measure download speed using the provided dns server.
 * @param dns - This function will make request to the url using provided dns server.
 * @param url - Desired url to make request to it using provided dns server.
 * @returns `>= 0` if the test is successful, otherwise `-1`.
 */
async function getSpeed(dns: string, url: string | URL): Promise<number> {
  let fileSize = 0;
  url = new URL(url);
  const resolver = new Resolver();
  resolver.setServers([dns]);

  try {
    const addresses = await resolver.resolve4(url.hostname);
    const ip = addresses[0];

    return new Promise<number>((resolve) => {
      const requestOptions: https.RequestOptions = {
        port: 443,
        hostname: ip,
        method: "HEAD",
        path: url.pathname,
        headers: { Host: url.hostname },
      };

      const responseHandler = (res: IncomingMessage) => {
        const contentLength = res.headers["content-length"];
        if (contentLength === undefined) return resolve(-1);
        fileSize = parseInt(contentLength, 10);
        console.log(fileSize, testTime);
      };

      const request = https.request(requestOptions, responseHandler);
      request.on("error", () => resolve(-1));
      request.end();
    });
  } catch (error) {
    console.error("DNS Resolution Error:", error);
    return -1;
  }
}

export { getSpeed };
