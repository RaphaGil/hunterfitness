import { MetadataRoute } from "next";

const baseUrl = "https://www.hunterfitness.co.uk";

const siteImages = [
  `${baseUrl}/images/12.jpeg`,
  `${baseUrl}/images/2.jpg`,
  `${baseUrl}/images/4.jpg`,
  `${baseUrl}/images/10.jpg`,
  `${baseUrl}/images/studio.jpg`,
  `${baseUrl}/images/9.jpg`,
  `${baseUrl}/images/hunterfitnesslogo.png`,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      images: siteImages,
    },
    {
      url: `${baseUrl}/personal-training-services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [`${baseUrl}/images/4.jpg`, `${baseUrl}/images/12.jpeg`],
    },
    {
      url: `${baseUrl}/personal-training-prices`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${baseUrl}/images/10.jpg`, `${baseUrl}/images/12.jpeg`],
    },
    {
      url: `${baseUrl}/studio`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${baseUrl}/images/studio.jpg`, `${baseUrl}/images/2.jpg`],
    },
    {
      url: `${baseUrl}/benefits`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];
}
