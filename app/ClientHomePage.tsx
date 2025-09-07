"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Code2,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Star,
  ShoppingCart,
  Cloud,
  Settings,
  TrendingUp,
  Target,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Pill,
  Stethoscope,
} from "lucide-react"

export default function ClientHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "Static & Dynamic Websites",
      description: "Professional websites built with modern technologies",
      icon: Code2,
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      icon: ShoppingCart,
    },
    {
      title: "Cloud Hosting Services",
      description: "Reliable and scalable hosting solutions",
      icon: Cloud,
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support and updates for your website",
      icon: Settings,
    },
    {
      title: "SEO & Digital Marketing",
      description: "Boost your online presence and rankings",
      icon: TrendingUp,
    },
    {
      title: "Paid Advertising",
      description: "Meta, Google, Pinterest & LinkedIn Ads",
      icon: Target,
    },
  ]

  const guaranteePoints = [
    {
      icon: Shield,
      title: "100% Secure Development",
      description: "SSL certificates and security best practices",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Projects delivered within agreed timelines",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Thorough testing before launch",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
    },
    {
      icon: Award,
      title: "Money-Back Guarantee",
      description: "100% satisfaction or full refund",
    },
  ]

  const brands = [
    "/abstract-tech-logo.png",
    "/abstract-startup-logo.png",
    "/ecommerce-brand-logo.png",
    "/healthcare-company-logo.png",
    "/education-platform-logo.png",
    "/finance-company-logo.png",
  ]

  const reviews = [
    {
      name: "Dr. Aliya",
      company: "Dentrixx.com (Dental Clinic)",
      rating: 5,
      review:
        "ZarQ Solutions delivered an exceptional website that exceeded our expectations. Professional team with great communication.",
    },
    {
      name: "Kiran Kumar",
      company: "Odespa.com (Shoppingcart)",
      rating: 5,
      review: "Our e-commerce site has increased sales by 300% since launch. Outstanding work and ongoing support.",
    },
    {
      name: "Eric Boler",
      company: "Jahda.com (E-commerce)",
      rating: 5,
      review: "The digital marketing services have transformed our online presence. Highly recommend their expertise.",
    },
  ]

  const readyMadeSoftware = [
    {
      title: "School Management System",
      description: "Complete solution for educational institutions",
      icon: GraduationCap,
      features: ["Student Management", "Fee Collection", "Attendance Tracking", "Report Generation"],
    },
    {
      title: "Learning Management System",
      description: "Online education platform with course management",
      icon: Users,
      features: ["Course Creation", "Student Progress", "Online Exams", "Certificates"],
    },
    {
      title: "Hospital Management Software",
      description: "Comprehensive healthcare management solution",
      icon: Stethoscope,
      features: ["Patient Records", "Appointment Scheduling", "Billing System", "Inventory Management"],
    },
    {
      title: "Pharmacy Application",
      description: "Complete pharmacy management system",
      icon: Pill,
      features: ["Medicine Inventory", "Prescription Management", "Sales Tracking", "Supplier Management"],
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Services Slider */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Building Digital Success
              <span className="text-primary"> Since 2017</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Professional website development and digital marketing services to grow your business online. From static
              websites to complex e-commerce solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Services Slider */}
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-lg border">
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="sm" onClick={prevSlide}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    {React.createElement(services[currentSlide].icon, { className: "h-8 w-8 text-primary" })}
                    <h3 className="text-xl font-semibold">{services[currentSlide].title}</h3>
                  </div>
                  <p className="text-muted-foreground">{services[currentSlide].description}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={nextSlide}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Guarantee Points */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Work Assurance Guarantee
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We stand behind our work with comprehensive guarantees and security measures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {guaranteePoints.map((point, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {React.createElement(point.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty">{point.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive digital solutions to grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {React.createElement(service.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty mb-4">{service.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We've had the privilege of working with amazing companies and supporting their digital growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={brand || "/placeholder.svg"}
                  alt={`Brand ${index + 1}`}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real feedback from businesses we've helped grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-Made Software */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Ready-Made Software Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Pre-built applications ready for deployment and customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {readyMadeSoftware.map((software, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {React.createElement(software.icon, { className: "h-6 w-6 text-primary" })}
                    </div>
                    <div>
                      <CardTitle>{software.title}</CardTitle>
                      <CardDescription>{software.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {software.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">Get Demo</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Grow Your Business Online?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Join hundreds of satisfied clients who have transformed their digital presence with our expert services.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
