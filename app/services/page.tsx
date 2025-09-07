import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Code2,
  ShoppingCart,
  Package,
  Cloud,
  Wrench,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Search,
  Facebook,
  Linkedin,
  Mail,
  Palette,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Complete IT solutions for your business growth. From website development to digital marketing, we provide
              end-to-end services to establish and scale your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional IT services tailored to help businesses succeed in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Website Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">
                  Custom static & dynamic websites built with modern technologies like PHP Laravel, ReactJS, and NextJS.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    PHP Laravel Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    ReactJS & NextJS Solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Responsive & SEO-optimized
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Graphic Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">
                  Professional graphic design services including logos, banners, mockups, and social media designs.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Logo & Banner Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Website & Mobile Mockups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Social Media Graphics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>E-commerce Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">
                  Complete e-commerce solutions on Shopify, WordPress, and Magento platforms optimized for conversions.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Shopify Store Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    WordPress WooCommerce
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Magento Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>E-commerce Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">
                  Product listing and account management on major marketplaces to expand your reach and sales.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Amazon & Flipkart Listing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Meesho & IndiaMart Setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Account Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cloud Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">
                  Secure cloud hosting solutions with AWS, Google Cloud, and DigitalOcean for scalability and uptime.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    AWS & Google Cloud
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    SSL & Security Setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Backup & Performance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Website Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">
                  Comprehensive maintenance services to keep your website secure, updated, and performing optimally.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Regular Updates & Backups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Security Monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Speed Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-pretty">
                  Complete digital marketing solutions including SEO, SEM, SMM, and paid advertising campaigns.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    SEO & SEM Services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Social Media Marketing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Google & Meta Ads
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Graphic Design Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Graphic Design Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional visual design solutions to enhance your brand identity and marketing materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="h-5 w-5 text-primary mr-2" />
                  Brand Identity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Logo Design & Branding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Business Card Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Letterhead & Stationery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-2" />
                  Digital Marketing Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Banner & Ad Designs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Social Media Graphics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Email Templates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Smartphone className="h-5 w-5 text-primary mr-2" />
                  UI/UX Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Website Mockups
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Mobile App Designs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    Brochures & Leaflets
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Marketing Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Digital Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive digital marketing solutions to grow your online presence and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">SEO & Content Marketing</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Search className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Search Engine Optimization (SEO)</strong>
                    <p className="text-muted-foreground text-sm">Improve your website's visibility in search results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Search Engine Marketing (SEM)</strong>
                    <p className="text-muted-foreground text-sm">
                      Targeted paid search campaigns for immediate results
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Smartphone className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Social Media Marketing (SMM)</strong>
                    <p className="text-muted-foreground text-sm">Engage your audience across social platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Email & SMS Campaigns</strong>
                    <p className="text-muted-foreground text-sm">Direct marketing to nurture leads and customers</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Paid Advertising Management</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="flex items-center mb-2">
                    <Facebook className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold">Meta Ads</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Facebook & Instagram advertising campaigns</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center mb-2">
                    <Search className="h-5 w-5 text-red-600 mr-2" />
                    <span className="font-semibold">Google Ads</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Search and display advertising on Google</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 bg-red-600 rounded mr-2"></div>
                    <span className="font-semibold">Pinterest Ads</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Visual advertising for lifestyle brands</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center mb-2">
                    <Linkedin className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="font-semibold">LinkedIn Ads</span>
                  </div>
                  <p className="text-sm text-muted-foreground">B2B advertising and lead generation</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures quality results and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm text-pretty">
                We discuss your project requirements, goals, and timeline to create a detailed plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Design & Planning</h3>
              <p className="text-muted-foreground text-sm text-pretty">
                Create wireframes, mockups, and technical specifications for your approval.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Development</h3>
              <p className="text-muted-foreground text-sm text-pretty">
                Build your website using best practices and provide regular progress updates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Launch & Support</h3>
              <p className="text-muted-foreground text-sm text-pretty">
                Deploy your website and provide ongoing support and maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Let's discuss your project and create a website that drives results for your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">
              Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
