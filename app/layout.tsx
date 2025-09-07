import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "ZarQ Solutions - Professional Website Development & Digital Marketing Services",
  description:
    "Established in 2017, ZarQ Solutions offers professional website development, e-commerce solutions, cloud hosting, and comprehensive digital marketing services. Specializing in PHP Laravel, ReactJS, NextJS, Shopify, and SEO optimization.",
  keywords:
    "website development, e-commerce, digital marketing, SEO, cloud hosting, PHP Laravel, ReactJS, NextJS, Shopify, WordPress, Magento",
  authors: [{ name: "ZarQ Solutions" }],
  creator: "ZarQ Solutions",
  publisher: "ZarQ Solutions",
  robots: "index, follow",
  openGraph: {
    title: "ZarQ Solutions - Professional IT Services Since 2017",
    description: "Empowering businesses through innovative website development and digital marketing solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZarQ Solutions - Professional IT Services",
    description: "Website development, e-commerce, and digital marketing services since 2017.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
