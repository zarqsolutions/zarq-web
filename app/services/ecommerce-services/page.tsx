import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Store, TrendingUp, Users, Package, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EcommerceServicesPage() {
  const marketplaces = [
    {
      name: "Amazon",
      description: "Complete Amazon seller account management and optimization",
      services: ["Product Listing", "PPC Campaigns", "Inventory Management", "Brand Registry"],
      logo: "🛒",
    },
    {
      name: "Flipkart",
      description: "Flipkart marketplace setup and growth strategies",
      services: ["Seller Registration", "Catalog Management", "Advertising", "Performance Analytics"],
      logo: "🛍️",
    },
    {
      name: "Meesho",
      description: "Meesho reseller program and product management",
      services: ["Product Upload", "Price Optimization", "Order Management", "Customer Support"],
      logo: "📱",
    },
    {
      name: "IndiaMart",
      description: "B2B marketplace presence and lead generation",
      services: ["Company Profile", "Product Catalog", "Lead Management", "Inquiry Handling"],
      logo: "🏭",
    },
  ]

  const services = [
    {
      icon: <Store className="h-6 w-6" />,
      title: "Store Setup & Management",
      description: "Complete marketplace account setup, verification, and ongoing management across all platforms.",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Product Listing & Optimization",
      description: "Professional product listings with SEO-optimized titles, descriptions, and high-quality images.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Marketing",
      description: "PPC campaigns, sponsored ads, and promotional strategies to boost visibility and sales.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Service",
      description: "24/7 customer support, review management, and maintaining seller ratings across platforms.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Brand Building",
      description: "Brand registry, enhanced brand content, and reputation management on marketplaces.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Marketplace Analysis",
      description: "Analyzing your products and identifying the best marketplaces for maximum reach and profitability.",
    },
    {
      step: "02",
      title: "Account Setup",
      description: "Complete registration, verification, and optimization of seller accounts across chosen platforms.",
    },
    {
      step: "03",
      title: "Product Catalog Creation",
      description: "Professional product listings with optimized content, images, and competitive pricing strategies.",
    },
    {
      step: "04",
      title: "Marketing & Promotion",
      description: "Implementing advertising campaigns and promotional strategies to increase visibility and sales.",
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description: "Continuous monitoring, optimization, and reporting on sales performance and growth metrics.",
    },
  ]

  const benefits = [
    "Increased Online Visibility",
    "Higher Sales Revenue",
    "Professional Brand Presence",
    "Competitive Advantage",
    "24/7 Customer Support",
    "Data-Driven Insights",
    "Inventory Management",
    "Multi-Platform Presence",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">E-commerce Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Grow Your Business on Top Marketplaces
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Expand your reach and boost sales with our comprehensive marketplace management services. We help you
              succeed on Amazon, Flipkart, Meesho, IndiaMart, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Selling Online</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/ecommerce-development">Build Your Store</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplaces Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Marketplaces We Manage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive management services across India's leading e-commerce marketplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketplaces.map((marketplace, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{marketplace.logo}</div>
                  <CardTitle className="text-xl">{marketplace.name}</CardTitle>
                  <CardDescription>{marketplace.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {marketplace.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our E-commerce Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive marketplace management services to maximize your online sales and brand presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Help You Succeed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures your success across multiple e-commerce marketplaces.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Benefits of Our Services</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with us to unlock the full potential of e-commerce marketplaces and grow your business online.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Expand Your Reach?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your products and create a marketplace strategy that drives sales and growth across
                multiple platforms.
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Selling on Multiple Marketplaces</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't limit your business to one platform. Let us help you succeed across all major e-commerce marketplaces
            in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
