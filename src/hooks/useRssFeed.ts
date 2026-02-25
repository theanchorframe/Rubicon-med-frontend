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

// TODO: Replace with real GoHighLevel RSS feed URL
const RSS_FEED_URL = "";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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
      item.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/", "encoded")[0]?.textContent ||
      item.querySelector("description")?.textContent ||
      "";
    const description = item.querySelector("description")?.textContent || "";
    const pubDate = item.querySelector("pubDate")?.textContent || "";

    const plainExcerpt = stripHtml(description || contentEncoded).slice(0, 200);

    posts.push({
      title,
      slug: generateSlug(title),
      excerpt: plainExcerpt + (plainExcerpt.length >= 200 ? "…" : ""),
      content: contentEncoded,
      pubDate,
      author: "Rob Miraglia",
      link,
    });
  });

  return posts;
}

// Mock data used when no RSS feed URL is configured
const MOCK_POSTS: BlogPost[] = [
  {
    title: "Navigating FDA Approval: A Strategic Guide for MedTech Startups",
    slug: "navigating-fda-approval-strategic-guide-medtech-startups",
    excerpt:
      "The FDA approval process can be daunting for emerging MedTech companies. In this article, we break down the key milestones and strategic decisions that can accelerate your path to market…",
    content:
      "<h2>Understanding the FDA Landscape</h2><p>The FDA approval process can be daunting for emerging MedTech companies. In this article, we break down the key milestones and strategic decisions that can accelerate your path to market.</p><p>From pre-submission meetings to 510(k) clearance, each step requires careful planning, clinical evidence, and a deep understanding of the regulatory environment.</p><h2>Key Strategies</h2><ul><li>Start with a clear predicate device strategy</li><li>Engage with the FDA early through pre-submission meetings</li><li>Build a robust clinical evidence package</li><li>Plan for post-market surveillance from day one</li></ul><p>By approaching the process strategically, companies can reduce time to market by 30-40% compared to ad-hoc approaches.</p>",
    pubDate: "Mon, 10 Feb 2026 09:00:00 GMT",
    author: "Rob Miraglia",
    link: "",
  },
  {
    title: "Market Segmentation in Cardiovascular Devices: Finding Your Niche",
    slug: "market-segmentation-cardiovascular-devices-finding-your-niche",
    excerpt:
      "The cardiovascular device market is projected to reach $72 billion by 2028. But size alone doesn't guarantee success. Effective market segmentation is the key to identifying and capturing the right opportunities…",
    content:
      "<h2>The Cardiovascular Landscape</h2><p>The cardiovascular device market is projected to reach $72 billion by 2028. But size alone doesn't guarantee success. Effective market segmentation is the key to identifying and capturing the right opportunities.</p><h2>Segmentation Frameworks</h2><p>We recommend a three-dimensional segmentation approach that considers clinical need, economic value, and competitive intensity. This framework helps companies prioritize segments where they can win.</p><p>Successful companies don't just enter a market—they own a segment. Understanding procedure volumes, reimbursement dynamics, and physician preferences at a granular level is what separates market leaders from also-rans.</p>",
    pubDate: "Thu, 23 Jan 2026 14:30:00 GMT",
    author: "Rob Miraglia",
    link: "",
  },
  {
    title: "Building a Launch Strategy That Actually Works in MedTech",
    slug: "building-launch-strategy-that-actually-works-medtech",
    excerpt:
      "Most MedTech product launches underperform not because of the product, but because of the strategy. Here's how to build a launch plan grounded in clinical evidence and market reality…",
    content:
      "<h2>Why Launches Fail</h2><p>Most MedTech product launches underperform not because of the product, but because of the strategy. A well-engineered device means nothing if the go-to-market plan doesn't resonate with physicians, hospital systems, and payers.</p><h2>The Rubicon Approach</h2><p>Our launch framework focuses on three pillars: clinical differentiation, economic justification, and channel execution. Each pillar must be addressed with equal rigor.</p><p>We've seen companies achieve 2-3x faster adoption rates by investing in pre-launch KOL engagement, targeted clinical data generation, and value-based pricing models that align with hospital economics.</p>",
    pubDate: "Sat, 04 Jan 2026 11:00:00 GMT",
    author: "Rob Miraglia",
    link: "",
  },
];

export function useRssFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFeed() {
      // If no feed URL is configured, use mock data
      if (!RSS_FEED_URL) {
        setPosts(MOCK_POSTS);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(RSS_FEED_URL);
        if (!res.ok) throw new Error(`Failed to fetch RSS feed: ${res.status}`);
        const xml = await res.text();
        const parsed = parseRssXml(xml);
        setPosts(parsed);
      } catch (err: any) {
        console.error("RSS feed error:", err);
        setError(err.message);
        // Fallback to mock data on error
        setPosts(MOCK_POSTS);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return { posts, loading, error };
}
