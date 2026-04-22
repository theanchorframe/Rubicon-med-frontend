import type { BlogPost } from "@/lib/blogFeed";

let prerenderPosts: BlogPost[] = [];

export function setPrerenderPosts(posts: BlogPost[]) {
  prerenderPosts = posts;
}

export function getPrerenderPosts(): BlogPost[] {
  if (prerenderPosts.length > 0) return prerenderPosts;
  if (typeof window !== "undefined") {
    return (window as typeof window & { __BLOG_POSTS__?: BlogPost[] }).__BLOG_POSTS__ || [];
  }
  return [];
}