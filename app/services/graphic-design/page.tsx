import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Palette, Layers, ImageIcon, FileText, Share2, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function GraphicDesignPage() {
  const services = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Logo & Brand Identity",
      description: "Create memorable logos and comprehensive brand identity systems",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography Selection", "Brand Assets"],
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Digital Graphics",
      description: "Eye-catching graphics for websites, social media, and digital marketing",
      features: ["Website Banners", "Social Media Graphics", "Ad Creatives", "Email Headers", "Web Icons"],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Print Design",
      description: "Professional print materials that make a lasting impression",
      features: ["Brochures", "Flyers & Leaflets", "Business Cards", "Posters", "Packaging Design"],
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design for websites and mobile applications",
      features: ["Website Mockups", "Mobile App Design", "User Interface Design", "Wireframing", "Prototyping"],
    },
  ]

  const designTypes = [
    {
      category: "Brand Identity",
      items: [
        "Logo Design & Variations",
        "Business Card Design",
        "Letterhead & Stationery",
        "Brand Style Guides",
        "Corporate Identity Packages",
      ],
    },
    {
      category: "Digital Marketing",
      items: [
        "Social Media Post Designs",
        "Facebook & Instagram Covers",
        "Google Ads Banners",
        "Email Newsletter Templates",
        "Website Hero Banners",
      ],
    },
    {
      category: "Print Materials",
      items: ["Brochures & Catalogs", "Flyers & Leaflets", "Posters & Banners", "Magazine Layouts", "Packaging Design"],
    },
    {
      category: "Web & Mobile",
      items: [
        "Website Mockups",
        "Landing Page Design",
        "Mobile App Interfaces",
        "Dashboard Designs",
        "E-commerce Layouts",
      ],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Brief",
      description:
        "Understanding your brand, target audience, and design requirements to create a comprehensive creative brief.",
    },
    {
      step: "02",
      title: "Research & Inspiration",
      description:
        "Analyzing market trends, competitor designs, and gathering inspiration for unique creative concepts.",
    },
    {
      step: "03",
      title: "Concept Development",
      description: "Creating initial design concepts and exploring different creative directions for your project.",
    },
    {
      step: "04",
      title: "Design & Refinement",
      description: "Developing chosen concepts into polished designs with attention to detail and brand consistency.",
    },
    {
      step: "05",
      title: "Review & Finalization",
      description: "Collaborative review process with revisions to ensure the final design exceeds expectations.",
    },
    {
      step: "06",
      title: "Delivery & Support",
      description: "Delivering final files in all required formats with ongoing support for implementation.",
    },
  ]

  const benefits = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative Excellence",
      description: "Award-winning designs that capture attention and communicate your brand message effectively",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Brand Consistency",
      description: "Cohesive design systems that maintain brand integrity across all touchpoints",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Multi-Platform Ready",
      description: "Designs optimized for both digital and print applications with proper file formats",
    },
  ]

  const industries = [
    "Technology & Software",
    "Healthcare & Medical",
    "Education & Training",
    "Retail & E-commerce",
    "Real Estate",
    "Food & Beverage",
    "Finance & Banking",
    "Non-Profit Organizations",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Graphic Design</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Creative Design That Tells Your Story
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From logos to complete brand identities, we create visually stunning designs that capture your brand
              essence and connect with your audience. Let your brand stand out with professional graphic design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Design Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive graphic design solutions to elevate your brand and communicate your message effectively
              across all platforms.
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

      {/* Design Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Design</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From digital graphics to print materials, we cover all your design needs with creativity and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{type.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collaborative approach that ensures every design project meets your expectations and achieves your
              goals.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Design Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine creativity with strategy to deliver designs that not only look great but also drive results for
              your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our design expertise spans across various industries, helping businesses of all sizes create impactful
              visual identities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">See Our Work in Action</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our portfolio of successful design projects and see how we've helped businesses create powerful
                visual identities that drive engagement and growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>500+ Successful Design Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>98% Client Satisfaction Rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Award-Winning Creative Team</span>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Brand?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your design needs and create visuals that make your brand unforgettable. Get started with
                a free consultation.
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Get Free Design Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring Your Vision to Life</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you need a complete brand identity or specific design assets, we're here to help you create visuals
            that make an impact.
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
