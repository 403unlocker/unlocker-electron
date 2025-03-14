const domainRegex = /^(?![a-zA-Z]+:\/\/).+/;

function strictProtocol(url: string) {
  url = url.trim();

  if (domainRegex.test(url)) {
    return `https://${url}`;
  }

  if (url.startsWith("http://")) {
    return url.replace("http://", "https://");
  }

  return url;
}

export { strictProtocol };
