import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Code2, Globe, Shield, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-primary">ZarQ Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Established in 2017, we are a team of passionate IT professionals committed to helping businesses grow
              through innovative website development and digital marketing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established in 2017, ZarQ Solutions emerged from a vision to empower businesses with comprehensive IT
                  solutions that drive growth and success in the digital landscape.
                </p>
                <p>
                  With over 8-10 years of experience in each domain, our team works remotely to provide top-notch
                  solutions in web design, development, e-commerce, cloud hosting, SEO, paid advertising, and more. We
                  believe in delivering quality that exceeds expectations.
                </p>
                <p>
                  Our mission is to empower businesses to build and scale their online presence efficiently and
                  affordably. We combine technical expertise with creative innovation to deliver solutions that not only
                  meet current needs but also prepare businesses for future growth.
                </p>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our commitment to excellence and client success sets us apart in the competitive IT services landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>100% Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  We implement industry-standard security practices and deliver reliable solutions that you can trust
                  for your business operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Round-the-clock technical support ensures your business operations run smoothly without any
                  interruptions or downtime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Experienced Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Our team averages 8-10 years of experience in each domain, bringing deep expertise to every project we
                  undertake.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fast Delivery & Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  We deliver projects on time without compromising on quality, ensuring you get the best value for your
                  investment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive IT solutions delivered by experienced professionals working remotely to serve clients
              globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Static & dynamic websites using PHP Laravel, ReactJS, NextJS, and modern web technologies for optimal
                  performance and user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>E-commerce Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Complete e-commerce development on Shopify, WordPress, Magento, and marketplace management for Amazon,
                  Flipkart, Meesho, and IndiaMart.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  SEO, SEM, SMM, and paid advertising campaigns on Google, Meta, Pinterest, and LinkedIn to drive
                  traffic and conversions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Remote Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our distributed team of experts works remotely to deliver world-class solutions with the flexibility and
              efficiency that modern businesses demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Code2 className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Development Team</CardTitle>
                <CardDescription>Full-Stack Developers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-pretty">
                  Experienced developers specializing in PHP Laravel, ReactJS, NextJS, and modern web technologies with
                  8+ years of expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Marketing Team</CardTitle>
                <CardDescription>Digital Marketing Specialists</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-pretty">
                  SEO experts and paid advertising specialists who drive measurable results across Google, Meta, and
                  other major platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Support Team</CardTitle>
                <CardDescription>Technical Support Specialists</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-pretty">
                  Dedicated support professionals providing 24/7 assistance to ensure your business operations run
                  smoothly at all times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
