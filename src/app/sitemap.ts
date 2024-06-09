import { MetadataRoute } from 'next';

const rootUrl = 'https://verbalscripts.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${rootUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },

    {
      url: `${rootUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${rootUrl}/industry`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${rootUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${rootUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${rootUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
