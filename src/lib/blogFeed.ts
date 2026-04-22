export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  pubDate: string;
  author: string;
  link: string;
  image: string;
  category: string;
}

export const RSS_FEED_URL =
  "https://rss-link.com/feed/0SrLbfkrz5jjCYFZSekh?blogId=xGZaTlixtX1nL58fVk37&limit=25&loadContent=true";

export function extractSlugFromLink(link: string): string {
  try {
    const url = new URL(link);
    const parts = url.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || "";
  } catch {
    return link.split("/").filter(Boolean).pop() || "";
  }
}

export function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function readTag(item: string, tag: string): string {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match?.[1]?.replace(/^<!\[CDATA\[|\]\]>$/g, "").trim() || "";
}

export function parseRssXml(xml: string): BlogPost[] {
  return [...xml.matchAll(/<item[\s\S]*?<\/item>/gi)].map(([item]) => {
    const title = stripHtml(readTag(item, "title"));
    const link = readTag(item, "link");
    const contentEncoded = readTag(item, "content:encoded");
    const description = readTag(item, "description");
    const content = contentEncoded || description;
    const plainExcerpt = stripHtml(description || content).slice(0, 200);
    const image =
      item.match(/<enclosure[^>]+type=["']image[^"']*["'][^>]+url=["']([^"']+)["']/i)?.[1] ||
      item.match(/<media:content[^>]+url=["']([^"']+)["']/i)?.[1] ||
      content.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] ||
      "";

    return {
      title,
      slug: extractSlugFromLink(link),
      excerpt: plainExcerpt + (plainExcerpt.length >= 200 ? "…" : ""),
      content,
      pubDate: readTag(item, "pubDate"),
      author: "Rob Miraglia",
      link,
      image,
      category: stripHtml(readTag(item, "category")),
    };
  });
}