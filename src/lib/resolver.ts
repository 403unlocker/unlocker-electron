import https from "https";
import { IncomingMessage } from "http";
import { Resolver } from "dns/promises";

const resolver = new Resolver();
const defaultServers = resolver.getServers();

/**
 * Using this function you can check if the url resources are forbidden or not.
 * @param dns - This function will make request to the url using provided dns server.
 * @param url - Desired url to make request to it using provided dns server.
 * @returns `true` if the resources are forbidden, otherwise `false`.
 */
async function isForbidden(dns: string, url: string | URL): Promise<boolean> {
  url = new URL(url);
  resolver.setServers([dns]);

  try {
    const addresses = await resolver.resolve4(url.hostname);
    const ip = addresses[0];

    return new Promise<boolean>((resolve) => {
      const requestOptions: https.RequestOptions = {
        port: 443,
        hostname: ip,
        method: "HEAD",
        path: url.pathname,
        headers: { Host: url.hostname },
      };

      const responseHandler = (res: IncomingMessage) =>
        resolve(res.statusCode === 403);

      const request = https.request(requestOptions, responseHandler);
      request.on("error", () => resolve(true));
      request.end();
    });
  } catch (error) {
    console.error("DNS Resolution Error:", error);
    return true;
  } finally {
    resolver.setServers(defaultServers);
  }
}

export { isForbidden };
