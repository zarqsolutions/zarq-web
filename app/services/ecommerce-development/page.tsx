import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingCart, CreditCard, Truck, Shield, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EcommerceDevelopmentPage() {
  const platforms = [
    {
      name: "Shopify",
      description: "Complete Shopify store setup and customization",
      features: ["Custom Themes", "App Integration", "Payment Setup", "SEO Optimization"],
    },
    {
      name: "WooCommerce",
      description: "WordPress-based e-commerce solutions",
      features: ["Custom Development", "Plugin Integration", "Payment Gateways", "Inventory Management"],
    },
    {
      name: "Custom Solutions",
      description: "Tailored e-commerce platforms built from scratch",
      features: ["Unique Features", "Scalable Architecture", "API Integration", "Admin Dashboard"],
    },
    {
      name: "Magento",
      description: "Enterprise-level e-commerce development",
      features: ["Multi-store Setup", "B2B Features", "Advanced Catalog", "Performance Optimization"],
    },
  ]

  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Product Management",
      description: "Advanced catalog management with variants, categories, and inventory tracking",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Integration",
      description: "Multiple payment gateways including PayPal, Stripe, Razorpay, and more",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Shipping Solutions",
      description: "Integrated shipping calculators and logistics partner connections",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & SSL",
      description: "Bank-level security with SSL certificates and PCI compliance",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reports",
      description: "Comprehensive sales reports and customer behavior analytics",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description: "Understanding your products, target market, and business model to design the perfect solution.",
    },
    {
      step: "02",
      title: "Platform Selection",
      description: "Choosing the right e-commerce platform based on your requirements and budget.",
    },
    {
      step: "03",
      title: "Design & UX",
      description: "Creating user-friendly designs that maximize conversions and enhance shopping experience.",
    },
    {
      step: "04",
      title: "Development & Integration",
      description: "Building your store with payment gateways, shipping, and third-party integrations.",
    },
    {
      step: "05",
      title: "Testing & Launch",
      description: "Thorough testing of all functionalities before launching your online store.",
    },
    {
      step: "06",
      title: "Training & Support",
      description: "Training your team and providing ongoing support for smooth operations.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">E-commerce Development</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Build Your Online Store That Sells
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Create powerful e-commerce websites that drive sales and grow your business. From Shopify to custom
              solutions, we build stores that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Store</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/ecommerce-services">E-commerce Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">E-commerce Platforms We Work With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in multiple e-commerce platforms to find the perfect fit for your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Essential E-commerce Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every online store we build includes these essential features to ensure success and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our E-commerce Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we follow a systematic approach to build your perfect online store.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our E-commerce Solutions?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Mobile-First Design</h3>
                    <p className="text-muted-foreground">Optimized for mobile shopping with responsive design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">SEO Optimized</h3>
                    <p className="text-muted-foreground">Built-in SEO features to rank higher in search results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Fast Loading</h3>
                    <p className="text-muted-foreground">Optimized for speed to reduce cart abandonment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Scalable Architecture</h3>
                    <p className="text-muted-foreground">Built to grow with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Selling Online?</h3>
              <p className="text-muted-foreground mb-6">
                Get a custom quote for your e-commerce project. We'll analyze your requirements and provide a detailed
                proposal.
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Your Online Store Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful online businesses. Let's build your e-commerce store that drives sales and
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
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
