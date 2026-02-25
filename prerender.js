import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

// 1. Drop your GHL RSS URL right here:
const GHL_RSS_URL =
  "https://rss-link.com/feed/0SrLbfkrz5jjCYFZSekh?blogId=xGZaTlixtX1nL58fVk37&limit=25&loadContent=true";

const staticRoutes = ["/", "/blog"];

(async () => {
  let dynamicRoutes = [];

  try {
    const response = await fetch(GHL_RSS_URL);
    const xmlText = await response.text();

    // Extract the links to create routes for each blog post
    const linkRegex = /<link>(.*?)<\/link>/g;
    let match;
    const links = [];

    while ((match = linkRegex.exec(xmlText)) !== null) {
      links.push(match[1]);
    }

    dynamicRoutes = links
      .filter((link) => link.includes("/blog/") && !link.endsWith("/blog"))
      .map((link) => {
        const urlObj = new URL(link);
        return urlObj.pathname;
      });

    console.log("Dynamic routes found:", dynamicRoutes);
  } catch (error) {
    console.error("Failed to fetch GHL RSS feed:", error);
  }

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  for (const url of allRoutes) {
    try {
      const appHtml = render(url);
      const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      const filePath = `dist${url === "/" ? "/index" : url}.html`;
      const dir = path.dirname(toAbsolute(filePath));

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(toAbsolute(filePath), html);
      console.log("pre-rendered:", filePath);
    } catch (e) {
      console.error(`Failed to prerender ${url}:`, e);
    }
  }
})();
