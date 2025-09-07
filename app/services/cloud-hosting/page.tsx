import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, Clock, ArrowRight, Database } from "lucide-react"
import Link from "next/link"

export default function CloudHostingPage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast Performance",
      description: "SSD storage and CDN integration for blazing-fast website loading speeds",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "SSL certificates, firewalls, and regular security updates to protect your data",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "99.9% Uptime Guarantee",
      description: "Reliable hosting infrastructure with minimal downtime and maximum availability",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Automated Backups",
      description: "Daily automated backups with easy restore options for complete peace of mind",
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "₹299",
      period: "/month",
      description: "Perfect for small websites and blogs",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "Free SSL Certificate",
        "Email Support",
        "Daily Backups",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "₹599",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "5 Websites",
        "50 GB SSD Storage",
        "500 GB Bandwidth",
        "Free SSL Certificate",
        "Priority Support",
        "Daily Backups",
        "CDN Integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹1,299",
      period: "/month",
      description: "For high-traffic websites",
      features: [
        "Unlimited Websites",
        "200 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "24/7 Phone Support",
        "Hourly Backups",
        "Advanced CDN",
        "Dedicated Resources",
      ],
      popular: false,
    },
  ]

  const benefits = [
    "99.9% Uptime SLA",
    "Free Website Migration",
    "24/7 Technical Support",
    "One-Click WordPress Install",
    "Advanced Caching",
    "DDoS Protection",
    "Global CDN Network",
    "Scalable Resources",
  ]

  const process = [
    {
      step: "01",
      title: "Choose Your Plan",
      description: "Select the hosting plan that best fits your website's needs and traffic requirements.",
    },
    {
      step: "02",
      title: "Setup & Migration",
      description: "We handle the complete setup and migrate your existing website at no additional cost.",
    },
    {
      step: "03",
      title: "Optimization",
      description: "Configure caching, CDN, and performance optimizations for maximum speed.",
    },
    {
      step: "04",
      title: "Go Live",
      description: "Your website goes live on our secure, high-performance hosting infrastructure.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Cloud Hosting</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Reliable Cloud Hosting That Scales
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Host your website on our high-performance cloud infrastructure with guaranteed uptime, advanced security,
              and lightning-fast speeds. Focus on your business while we handle the technical details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/website-maintenance">Website Maintenance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Cloud Hosting?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the power of enterprise-grade hosting with features designed to keep your website fast, secure,
              and always online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hosting Plans & Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect hosting plan for your needs. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-shadow ${plan.popular ? "ring-2 ring-primary" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <Link href="/contact">Choose Plan</Link>
                  </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Getting Started is Easy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From signup to going live, we make the hosting process simple and hassle-free.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Everything You Need Included</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our hosting plans come with all the essential features to keep your website running smoothly and
                securely.
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Help Choosing?</h3>
              <p className="text-muted-foreground mb-6">
                Our hosting experts are here to help you select the perfect plan for your website's needs and budget.
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Host Your Website?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their website hosting. Get started today with our
            reliable cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Hosting Today <ArrowRight className="ml-2 h-4 w-4" />
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
