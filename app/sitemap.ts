import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mbpub31.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/services', '/portfolio', '/process', '/faq', '/contact']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
