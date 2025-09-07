import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, Zap, Globe, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WebsiteDevelopmentPage() {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Vue.js",
    "PHP",
    "Node.js",
    "Python",
    "WordPress",
    "Bootstrap",
    "Tailwind CSS",
  ]

  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Loading",
      description: "Optimized code and assets for lightning-fast performance",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User-Friendly",
      description: "Intuitive navigation and excellent user experience",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements, target audience, and business goals to create a comprehensive project plan.",
    },
    {
      step: "02",
      title: "Design & Wireframing",
      description:
        "Our designers create mockups and wireframes that align with your brand identity and user expectations.",
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers bring the design to life using modern technologies and best coding practices.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Rigorous testing across devices and browsers before deploying your website to production.",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly.",
    },
  ]

  const websiteTypes = [
    {
      title: "Business Websites",
      description: "Professional corporate websites that establish your online presence and credibility.",
      features: ["Company Profile", "Service Pages", "Contact Forms", "Blog Integration"],
    },
    {
      title: "Portfolio Websites",
      description: "Showcase your work and skills with stunning portfolio websites.",
      features: ["Gallery Layouts", "Project Showcases", "Client Testimonials", "Resume Integration"],
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive conversions.",
      features: ["Lead Capture Forms", "A/B Testing Ready", "Analytics Integration", "Mobile Optimized"],
    },
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built to meet your specific business requirements.",
      features: ["Custom Functionality", "Database Integration", "User Authentication", "API Development"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Website Development</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Professional Website Development Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Transform your ideas into powerful, responsive websites that drive business growth. We create custom
              solutions tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Website Development?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative design to deliver websites that not only look great but
              perform exceptionally.
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

      {/* Website Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Types of Websites We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple business websites to complex web applications, we have the expertise to bring your vision to
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
              expectations.
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

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We stay current with the latest technologies to deliver modern, scalable, and maintainable websites.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/services">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
