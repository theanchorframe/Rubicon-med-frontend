import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");
const SITE_URL = "https://image-to-web-form.lovable.app";

// 1. Drop your GHL RSS URL right here:
const GHL_RSS_URL =
  "https://rss-link.com/feed/0SrLbfkrz5jjCYFZSekh?blogId=xGZaTlixtX1nL58fVk37&limit=25&loadContent=true";

const staticRoutes = ["/", "/blog", "/about", "/services", "/privacy-policy", "/terms-of-service"];

const routeMeta = {
  "/": {
    title: "MedTech Product Launch Experts | Rubicon Medical",
    description: "MedTech consulting for product strategy, launch planning, market validation, KOL research, forecasting, and commercial growth.",
    type: "website",
  },
  "/blog": {
    title: "MedTech Strategy Blog | Rubicon Medical",
    description: "Field-tested perspectives on MedTech market validation, KOL strategy, product launches, and commercial growth.",
    type: "blog",
  },
  "/about": {
    title: "About Rob Miraglia | Rubicon Medical",
    description: "Meet Rob Miraglia, a MedTech and Pharma strategy consultant with 25+ years of clinical insight and commercial leadership.",
    type: "profile",
  },
  "/services": {
    title: "MedTech Consulting Services | Rubicon Medical",
    description: "Explore product evaluation, market research, KOL programs, launch strategy, roadmapping, pricing, forecasting, and modeling services.",
    type: "website",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Rubicon Medical",
    description: "Read the Rubicon Medical privacy policy for information about data collection, usage, disclosure, and privacy rights.",
    type: "website",
  },
  "/terms-of-service": {
    title: "Terms of Service | Rubicon Medical",
    description: "Read the Rubicon Medical terms of service for website and consulting service usage information.",
    type: "website",
  },
};

function escapeHtml(value = "") {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function stripHtml(html = "") {
  return html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
}

function readTag(item, tag) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match?.[1]?.replace(/^<!\[CDATA\[|\]\]>$/g, "").trim() || "";
}

function extractSlugFromLink(link) {
  try {
    const urlObj = new URL(link);
    const parts = urlObj.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || "";
  } catch {
    return link.split("/").filter(Boolean).pop() || "";
  }
}

function parseRssXml(xml) {
  return [...xml.matchAll(/<item[\s\S]*?<\/item>/gi)].map(([item]) => {
    const title = stripHtml(readTag(item, "title"));
    const link = readTag(item, "link");
    const contentEncoded = readTag(item, "content:encoded");
    const description = readTag(item, "description");
    const content = contentEncoded || description;
    const plainExcerpt = stripHtml(description || content).slice(0, 200);
    return {
      title,
      slug: extractSlugFromLink(link),
      excerpt: plainExcerpt + (plainExcerpt.length >= 200 ? "…" : ""),
      content,
      pubDate: readTag(item, "pubDate"),
      author: "Rob Miraglia",
      link,
      image: item.match(/<enclosure[^>]+type=["']image[^"']*["'][^>]+url=["']([^"']+)["']/i)?.[1] || item.match(/<media:content[^>]+url=["']([^"']+)["']/i)?.[1] || content.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] || "",
      category: stripHtml(readTag(item, "category")),
    };
  });
}

function getMeta(route, posts) {
  const post = posts.find((entry) => route === `/blog/${entry.slug}`);
  if (post) {
    return {
      title: `${post.title} | Rubicon Medical`,
      description: post.excerpt || stripHtml(post.content).slice(0, 155),
      type: "article",
      image: post.image,
      publishedTime: post.pubDate,
    };
  }
  return routeMeta[route] || routeMeta["/"];
}

function schemaFor(route, meta, posts) {
  const base = { "@context": "https://schema.org" };
  const post = posts.find((entry) => route === `/blog/${entry.slug}`);
  if (post) {
    return { ...base, "@type": "BlogPosting", headline: post.title, description: meta.description, datePublished: post.pubDate, author: { "@type": "Person", name: post.author }, publisher: { "@type": "Organization", name: "Rubicon Medical Marketing & Strategy Consultants" }, mainEntityOfPage: `${SITE_URL}${route}` };
  }
  if (route === "/") {
    return { ...base, "@type": "Organization", name: "Rubicon Medical Marketing & Strategy Consultants", url: SITE_URL, founder: { "@type": "Person", name: "Rob Miraglia" }, sameAs: [] };
  }
  return { ...base, "@type": "WebPage", name: meta.title, description: meta.description, url: `${SITE_URL}${route}` };
}

function injectSeo(html, route, posts) {
  const meta = getMeta(route, posts);
  const canonical = `${SITE_URL}${route === "/" ? "" : route}`;
  const image = meta.image || `${SITE_URL}/og-image.png`;
  const seo = `\n    <title>${escapeHtml(meta.title)}</title>\n    <meta name="description" content="${escapeHtml(meta.description)}" />\n    <link rel="canonical" href="${canonical}" />\n    <meta property="og:title" content="${escapeHtml(meta.title)}" />\n    <meta property="og:description" content="${escapeHtml(meta.description)}" />\n    <meta property="og:type" content="${meta.type === "article" ? "article" : "website"}" />\n    <meta property="og:url" content="${canonical}" />\n    <meta property="og:image" content="${image}" />\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />\n    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />\n    <meta name="twitter:image" content="${image}" />\n    <script type="application/ld+json">${JSON.stringify(schemaFor(route, meta, posts))}</script>`;
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/, "")
    .replace(/\s*<meta name="description"[\s\S]*?>/, "")
    .replace(/\s*<meta property="og:[\s\S]*?>/g, "")
    .replace(/\s*<meta name="twitter:[\s\S]*?>/g, "")
    .replace("</head>", `${seo}\n  </head>`);
}

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

      const filePath = url === "/" ? "dist/index.html" : `dist${url}/index.html`;
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
