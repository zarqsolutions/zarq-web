import ClientHomePage from "./ClientHomePage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZarQ Solutions - Professional Website Development & Digital Marketing Services Since 2017",
  description:
    "Leading IT services company offering website development, e-commerce solutions, cloud hosting, SEO, and digital marketing. 8+ years experience serving businesses worldwide with innovative web solutions.",
  keywords:
    "website development, web design, e-commerce development, digital marketing, SEO services, cloud hosting, PHP Laravel, ReactJS, NextJS, Shopify development, WordPress development, IT services, web development company, online marketing, website maintenance",
  authors: [{ name: "ZarQ Solutions" }],
  creator: "ZarQ Solutions",
  publisher: "ZarQ Solutions",
  robots: "index, follow",
  openGraph: {
    title: "ZarQ Solutions - Professional Website Development & Digital Marketing Services",
    description:
      "Transform your business with our expert web development and digital marketing services. Established 2017, serving clients worldwide with innovative solutions.",
    type: "website",
    locale: "en_US",
    url: "https://zarqsolutions.com",
    siteName: "ZarQ Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZarQ Solutions - Professional IT Services Since 2017",
    description:
      "Website development, e-commerce, and digital marketing services. Transform your business online with our expert solutions.",
  },
  alternates: {
    canonical: "https://zarqsolutions.com",
  },
}

export default function HomePage() {
  return <ClientHomePage />
}
