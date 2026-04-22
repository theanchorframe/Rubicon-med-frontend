import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { setPrerenderPosts } from './lib/prerenderData';
import type { BlogPost } from './lib/blogFeed';

export function render(url: string, posts: BlogPost[] = []) {
  setPrerenderPosts(posts);
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return html;
}
