# Focus Astro Site (Starter)

Minimal Astro + MDX starter for an evidence-aware focus/ADHD affiliate content site.

## Quick start
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1) Push to a repo named whatever you like.
2) In `astro.config.mjs`, set:
   - `site: 'https://<username>.github.io'`
   - `base: '/<repo>'`  (replace `<repo>` with your repository name)
3) Push to `main`. The included workflow builds & publishes automatically.

### Custom domain
- Add a `public/CNAME` file containing your domain (e.g., `focus.example.com`).
- Update `site` in `astro.config.mjs` to `https://focus.example.com` and remove `base`.

## Content
- Write posts in `src/content/posts` as `.md` or `.mdx`.
- Frontmatter uses the `posts` collection schema in `src/content/config.ts`.
