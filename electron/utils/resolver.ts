import * as https from "node:https";
import { Resolver } from "dns/promises";
import type { IncomingMessage } from "http";

/**
 * Using this function you can check if the url resources are forbidden or not.
 * @param server - This function will make request to the url using provided dns server.
 * @param url - Desired url to make request to it using provided dns server.
 * @returns `true` if the resources are forbidden, otherwise `false`.
 */
async function isForbidden(
  name: string,
  url: string | URL,
  server: string
): Promise<DnsData> {
  const resolver = new Resolver();
  resolver.setServers([server]);

  url = new URL(url);

  try {
    const addresses = await resolver.resolve4(url.hostname);
    const ip = addresses[0];

    return new Promise<DnsData>((resolve) => {
      const requestOptions: https.RequestOptions = {
        port: 443,
        hostname: ip,
        method: "HEAD",
        path: url.pathname,
        headers: { Host: url.hostname },
      };

      const responseHandler = (res: IncomingMessage) => {
        const status = res.statusCode ?? -1;

        resolve({
          name,
          server,
          isOnline: 200 <= status && status < 300,
        });
      };

      const request = https.request(requestOptions, responseHandler);
      request.on("error", () => resolve({ name, server, isOnline: false }));
      request.end();
    });
  } catch (error) {
    console.error(`${server} - DNS Resolution Error:`, error);
    return { name, server, isOnline: false };
  }
}

export { isForbidden };
