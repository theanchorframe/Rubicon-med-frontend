import { useState, useEffect } from "react";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  pubDate: string;
  author: string;
  link: string;
}

const RSS_FEED_URL =
  "https://rss-link.com/feed/0SrLbfkrz5jjCYFZSekh?blogId=xGZaTlixtX1nL58fVk37&limit=25&loadContent=true";

function extractSlugFromLink(link: string): string {
  try {
    const url = new URL(link);
    const parts = url.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || "";
  } catch {
    return link.split("/").filter(Boolean).pop() || "";
  }
}

function stripHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function parseRssXml(xml: string): BlogPost[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const items = doc.querySelectorAll("item");
  const posts: BlogPost[] = [];

  items.forEach((item) => {
    const title = item.querySelector("title")?.textContent || "";
    const link = item.querySelector("link")?.textContent || "";
    const contentEncoded =
      item.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/", "encoded")[0]?.textContent || "";
    const description = item.querySelector("description")?.textContent || "";
    const pubDate = item.querySelector("pubDate")?.textContent || "";

    const content = contentEncoded || description;
    const plainExcerpt = stripHtml(description || content).slice(0, 200);
    const slug = extractSlugFromLink(link);

    posts.push({
      title,
      slug,
      excerpt: plainExcerpt + (plainExcerpt.length >= 200 ? "…" : ""),
      content,
      pubDate,
      author: "Rob Miraglia",
      link,
    });
  });

  return posts;
}

export function useRssFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(RSS_FEED_URL);
        if (!res.ok) throw new Error(`Failed to fetch RSS feed: ${res.status}`);
        const xml = await res.text();
        const parsed = parseRssXml(xml);
        setPosts(parsed);
      } catch (err: any) {
        console.error("RSS feed error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return { posts, loading, error };
}
