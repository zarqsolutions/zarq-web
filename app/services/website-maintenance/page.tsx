import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, RefreshCw, Zap, Bug, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WebsiteMaintenancePage() {
  const services = [
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Regular Updates",
      description: "Keep your website current with the latest software and security updates",
      features: ["CMS Updates", "Plugin Updates", "Security Patches", "Performance Optimization"],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Monitoring",
      description: "24/7 security monitoring and protection against threats",
      features: ["Malware Scanning", "Firewall Management", "Security Audits", "Vulnerability Fixes"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Ensure your website loads fast and performs optimally",
      features: ["Speed Optimization", "Database Cleanup", "Image Compression", "Caching Setup"],
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: "Bug Fixes & Support",
      description: "Quick resolution of issues and ongoing technical support",
      features: ["Bug Fixes", "Compatibility Issues", "Broken Links", "Form Testing"],
    },
  ]

  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      description: "Essential maintenance for small websites",
      features: [
        "Monthly Updates",
        "Basic Security Monitoring",
        "Performance Reports",
        "Email Support",
        "1 Hour of Changes",
        "Monthly Backup",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹1,999",
      period: "/month",
      description: "Comprehensive maintenance for business websites",
      features: [
        "Weekly Updates",
        "Advanced Security Monitoring",
        "Performance Optimization",
        "Priority Support",
        "3 Hours of Changes",
        "Weekly Backups",
        "Uptime Monitoring",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹3,999",
      period: "/month",
      description: "Premium maintenance for mission-critical websites",
      features: [
        "Real-time Updates",
        "24/7 Security Monitoring",
        "Advanced Performance Tuning",
        "24/7 Phone Support",
        "10 Hours of Changes",
        "Daily Backups",
        "Emergency Response",
        "Dedicated Manager",
      ],
      popular: false,
    },
  ]

  const benefits = [
    "Improved Website Security",
    "Better Search Rankings",
    "Faster Loading Times",
    "Reduced Downtime",
    "Enhanced User Experience",
    "Regular Content Updates",
    "Technical Issue Resolution",
    "Peace of Mind",
  ]

  const process = [
    {
      step: "01",
      title: "Website Audit",
      description: "Comprehensive analysis of your website's current state, performance, and security vulnerabilities.",
    },
    {
      step: "02",
      title: "Maintenance Plan",
      description: "Create a customized maintenance schedule based on your website's specific needs and requirements.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute regular maintenance tasks including updates, backups, and security monitoring.",
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description:
        "Continuous monitoring with detailed monthly reports on website performance and maintenance activities.",
    },
  ]

  const maintenanceTasks = [
    {
      category: "Security",
      tasks: [
        "Malware scanning and removal",
        "Security plugin updates",
        "SSL certificate monitoring",
        "User access management",
        "Security audit reports",
      ],
    },
    {
      category: "Performance",
      tasks: [
        "Page speed optimization",
        "Database optimization",
        "Image compression",
        "Cache management",
        "CDN configuration",
      ],
    },
    {
      category: "Content",
      tasks: [
        "Content updates and edits",
        "Image and media updates",
        "Blog post management",
        "Product catalog updates",
        "Contact information updates",
      ],
    },
    {
      category: "Technical",
      tasks: [
        "Plugin and theme updates",
        "Broken link fixes",
        "Form functionality testing",
        "Browser compatibility checks",
        "Mobile responsiveness testing",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Website Maintenance</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Keep Your Website Running Perfectly
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Ensure your website stays secure, fast, and up-to-date with our comprehensive maintenance services. Focus
              on your business while we handle the technical details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Maintenance Plan</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services/cloud-hosting">Cloud Hosting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Maintenance Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive website maintenance to keep your site secure, fast, and functioning optimally at all times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Maintenance Tasks Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Maintain</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive maintenance covers every aspect of your website to ensure optimal performance and
              security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceTasks.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Maintenance Plans & Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the maintenance plan that fits your website's needs and budget. All plans include our core
              maintenance services.
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Maintenance Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to website maintenance that ensures your site stays secure, fast, and up-to-date.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Benefits of Regular Maintenance</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Regular website maintenance is essential for security, performance, and user experience. Here's what you
                gain with our maintenance services.
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Protect Your Investment?</h3>
              <p className="text-muted-foreground mb-6">
                Don't let your website become vulnerable or outdated. Start a maintenance plan today and ensure your
                site stays secure and performs optimally.
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Get Maintenance Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep Your Website in Perfect Shape</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait for problems to occur. Proactive maintenance keeps your website secure, fast, and always
            performing at its best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Maintenance Today <ArrowRight className="ml-2 h-4 w-4" />
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
