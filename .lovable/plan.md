## Problem

Google and the browser tab still show **"Rubicon Medical: MedTech Product Launch Experts"** on the homepage even though `index.html` was already updated.

Root cause: the site is prerendered at build time by `prerender.js`. For the home route `/`, it injects its own `<title>` that overrides `index.html`:

```
"/": {
  title: "MedTech Product Launch Experts | Rubicon Medical",
  ...
}
```

That prerendered HTML is what Google crawls and what the browser tab shows on the live site. The Navbar component itself does not contain "Product Launch Experts" — what you're seeing "up top" is the browser tab title.

## Fix

Update `prerender.js` so the homepage metadata matches the rest of the site:

- `/` title → **"Rubicon Medical | MedTech Marketing & Strategy"**
- `/` description → rewrite to drop "launch planning" framing and match the marketing & strategy positioning, e.g.: *"MedTech marketing and strategy consulting: market validation, KOL research, roadmapping, forecasting, and commercial growth."*

No other routes change. After deploy, Google will re-crawl and update the snippet (can take a few days to a couple weeks).

## Confirm before I build

1. Use **"Rubicon Medical | MedTech Marketing & Strategy"** as the homepage title? (Matches Lovable settings while keeping the brand name for SEO.)
2. Keep the suggested new description above, or do you want to write it?
