const fs = require('fs');
const path = require('path');

const siteUrl =
  process.env.REACT_APP_SITE_URL || 'https://nathpestmanagement.in';

let site;
try {
  site = new URL(siteUrl);
} catch {
  throw new Error('REACT_APP_SITE_URL must be an absolute URL, such as https://example.com.');
}

if (!['http:', 'https:'].includes(site.protocol) || site.pathname !== '/' || site.search || site.hash) {
  throw new Error('REACT_APP_SITE_URL must be a site origin without a path, query, or fragment.');
}

const routes = ['/', '/about', '/services', '/projects', '/contacts'];
const xmlEscape = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => {
    const location = xmlEscape(new URL(route, site.origin).href);
    return `  <url><loc>${location}</loc></url>`;
  }),
  '</urlset>',
  '',
].join('\n');

const buildDirectory = path.resolve(__dirname, '..', 'build');
fs.writeFileSync(path.join(buildDirectory, 'sitemap.xml'), sitemap);

const robotsPath = path.join(buildDirectory, 'robots.txt');
const robots = fs.readFileSync(robotsPath, 'utf8').replace(/\n*Sitemap:.*$/gm, '');
fs.writeFileSync(robotsPath, `${robots.trimEnd()}\nSitemap: ${site.origin}/sitemap.xml\n`);
