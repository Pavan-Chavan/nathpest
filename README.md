# Nath Pest Management

React website for Nath Pest Management, providing information about pest control services in Pune and Ahmednagar, Maharashtra.

## Requirements

- Node.js and npm

## Run locally

```bash
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Test and build

```bash
npm test -- --watchAll=false
npm run build
```

The production-ready static site is written to `build/`. To preview it locally:

```bash
npx serve -s build
```

The `-s` option serves `index.html` for client-side routes. Configure the production host the same way so direct visits to `/about`, `/services`, `/projects`, and `/contacts` work.

## SEO and deployment

- Each active route has its own page title, description, robots directive, canonical URL, and Open Graph/Twitter metadata.
- The site includes LocalBusiness structured data and a robots file.
- The production domain is configured as `https://nathpestmanagement.in` in `.env.production`. `npm run build` uses it for canonical metadata, `build/sitemap.xml`, and the sitemap entry in `build/robots.txt`.
- If building for a different domain, set `REACT_APP_SITE_URL` in the deployment environment to that site's origin before running the build. It must include `https://` and must not contain a path, query, or fragment.

### Deploy the production build

1. Point `nathpestmanagement.in` to your static hosting provider and enable HTTPS.
2. Run the production build:

  ```bash
  npm ci
  npm run build
  ```

3. Configure the host's publish/output directory as `build/`, then deploy that directory (or its contents).
4. Configure a single-page-app fallback so unknown paths serve `index.html` with HTTP 200. This is needed for direct visits to `/about`, `/services`, `/projects`, and `/contacts`.
5. After deployment, verify `https://nathpestmanagement.in`, `https://nathpestmanagement.in/robots.txt`, and `https://nathpestmanagement.in/sitemap.xml`. Add the site to Google Search Console and submit the sitemap.

This project uses Create React App and renders pages in the browser. Route metadata is set when the app loads; for reliable previews in crawlers that do not execute JavaScript, consider adding static prerendering or server-side rendering.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Nath Pest Management |
| `/services` | Pest control services |
| `/projects` | Completed projects |
| `/contacts` | Contact and inquiry form |
