import { useState, useEffect } from "react";
import { parseRssXml, RSS_FEED_URL, type BlogPost } from "@/lib/blogFeed";
import { getPrerenderPosts } from "@/lib/prerenderData";

export function useRssFeed() {
  const initialPosts = getPrerenderPosts();
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [loading, setLoading] = useState(initialPosts.length === 0);
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
