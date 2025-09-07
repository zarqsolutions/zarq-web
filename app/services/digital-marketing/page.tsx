import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Search, Target, TrendingUp, Users, BarChart3, ArrowRight, Globe } from "lucide-react"
import Link from "next/link"

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's organic visibility and ranking on search engines",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Search Engine Marketing (SEM)",
      description: "Drive immediate traffic and conversions through paid search campaigns",
      features: ["Google Ads", "Bing Ads", "Keyword Bidding", "Ad Copy Creation", "Landing Page Optimization"],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Media Marketing (SMM)",
      description: "Build brand awareness and engage with your audience on social platforms",
      features: [
        "Content Strategy",
        "Community Management",
        "Influencer Marketing",
        "Social Analytics",
        "Brand Building",
      ],
    },
  ]

  const platforms = [
    {
      name: "Meta Ads",
      description: "Facebook & Instagram advertising campaigns",
      features: ["Audience Targeting", "Creative Development", "Campaign Optimization", "Conversion Tracking"],
      logo: "📘",
    },
    {
      name: "Google Ads",
      description: "Search, Display, and YouTube advertising",
      features: ["Search Campaigns", "Display Network", "YouTube Ads", "Shopping Campaigns"],
      logo: "🔍",
    },
    {
      name: "LinkedIn Ads",
      description: "B2B marketing and professional networking",
      features: ["Sponsored Content", "Lead Generation", "Message Ads", "Dynamic Ads"],
      logo: "💼",
    },
    {
      name: "Pinterest Ads",
      description: "Visual discovery and shopping campaigns",
      features: ["Shopping Ads", "Video Pins", "Carousel Ads", "Idea Pins"],
      logo: "📌",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Strategy Development",
      description:
        "Analyzing your business goals, target audience, and competitive landscape to create a comprehensive digital marketing strategy.",
    },
    {
      step: "02",
      title: "Campaign Setup",
      description:
        "Setting up tracking, creating compelling ad creatives, and configuring campaigns across chosen platforms.",
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "Launching campaigns with continuous monitoring and real-time adjustments for optimal performance.",
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Analyzing performance data to optimize campaigns and scale successful strategies for maximum ROI.",
    },
    {
      step: "05",
      title: "Report & Refine",
      description: "Providing detailed reports and insights to refine strategies for continuous improvement.",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Increased Traffic",
      description: "Drive more qualified visitors to your website through targeted campaigns",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Better Conversions",
      description: "Convert more visitors into customers with optimized landing pages and funnels",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Measurable ROI",
      description: "Track and measure the return on investment for every marketing dollar spent",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Brand Awareness",
      description: "Build strong brand recognition and trust in your target market",
    },
  ]

  const metrics = [
    { label: "Average Traffic Increase", value: "150%" },
    { label: "Conversion Rate Improvement", value: "85%" },
    { label: "Cost Per Acquisition Reduction", value: "40%" },
    { label: "Client Retention Rate", value: "95%" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Digital Marketing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Grow Your Business with Data-Driven Marketing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Reach your target audience, increase conversions, and maximize ROI with our comprehensive digital
              marketing services. From SEO to paid advertising, we drive results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Growing Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Digital Marketing Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to help your business reach its full potential online.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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

      {/* Platforms Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advertising Platforms We Master</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create and manage high-performing campaigns across all major advertising platforms to maximize your
              reach and ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-2">{platform.logo}</div>
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Marketing Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to digital marketing that delivers consistent results and continuous growth.
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Digital Marketing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on delivering measurable results that directly impact your business growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak for themselves. See how we've helped businesses achieve remarkable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create a digital marketing strategy that drives real results for your business. Get started with a
                free consultation and discover your growth potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  <Link href="/services">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="bg-primary-foreground/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">What You Get:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Comprehensive marketing audit</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Custom strategy development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Performance tracking & reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
