import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMetadata = {
  '/': {
    title: 'Pest Control in Pune & Ahmednagar | Nath Pest Management',
    description:
      'Nath Pest Management provides residential and commercial pest control in Pune and Ahmednagar, Maharashtra. Request an inspection and service advice.',
  },
  '/about': {
    title: 'About Nath Pest Management | Pest Control in Maharashtra',
    description:
      'Learn about Nath Pest Management, our integrated pest management services, trained technicians, and residential and commercial pest control in Maharashtra.',
  },
  '/services': {
    title: 'Pest Control Services in Pune & Ahmednagar | Nath Pest',
    description:
      'Explore pest management services for cockroaches, termites, mosquitoes, rodents, bed bugs, flies, lizards, birds, and other pests.',
  },
  '/projects': {
    title: 'Pest Management Projects | Nath Pest Management',
    description:
      'View pest management and sanitation projects for homes, education centers, warehouses, hospitals, and commercial facilities.',
  },
  '/contacts': {
    title: 'Contact Nath Pest Management | Pune & Ahmednagar',
    description:
      'Contact Nath Pest Management to ask about pest control services in Pune and Ahmednagar, Maharashtra, or request an inspection.',
  },
  '/404': {
    title: 'Page Not Found | Nath Pest Management',
    description: 'The page you requested could not be found.',
    noIndex: true,
  },
};

function setMetaTag(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function SEO() {
  const { pathname } = useLocation();
  const normalizedPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const metadata = pageMetadata[normalizedPath] || pageMetadata['/404'];

  useEffect(() => {
    document.title = metadata.title;
    setMetaTag('name', 'description', metadata.description);
    setMetaTag('name', 'robots', metadata.noIndex ? 'noindex, nofollow' : 'index, follow');
    setMetaTag('property', 'og:title', metadata.title);
    setMetaTag('property', 'og:description', metadata.description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('name', 'twitter:card', 'summary');
    setMetaTag('name', 'twitter:title', metadata.title);
    setMetaTag('name', 'twitter:description', metadata.description);

    const configuredSiteUrl = process.env.REACT_APP_SITE_URL;
    const isLocalHost =
      !configuredSiteUrl && ['localhost', '127.0.0.1'].includes(window.location.hostname);
    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (isLocalHost || metadata.noIndex) {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
      return;
    }

    const canonicalOrigin = configuredSiteUrl
      ? new URL(configuredSiteUrl).origin
      : window.location.origin;
    const canonicalUrl = `${canonicalOrigin}${normalizedPath === '/' ? '' : normalizedPath}`;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', `${canonicalOrigin}/nathpestlogo.jpeg`);
    setMetaTag('name', 'twitter:image', `${canonicalOrigin}/nathpestlogo.jpeg`);
  }, [metadata, normalizedPath]);

  return null;
}

export default SEO;
