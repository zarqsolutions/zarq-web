import Link from "next/link"
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">ZarQ Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Since 2017, we've been empowering businesses through innovative website development, e-commerce solutions,
              and comprehensive digital marketing services. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <div className="space-y-2">
              <Link
                href="/services/website-development"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Website Development
              </Link>
              <Link
                href="/services/ecommerce-development"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                E-commerce Development
              </Link>
              <Link
                href="/services/ecommerce-services"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                E-commerce Services
              </Link>
              <Link
                href="/services/digital-marketing"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Digital Marketing
              </Link>
              <Link
                href="/services/graphic-design"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Graphic Design
              </Link>
              <Link
                href="/services/cloud-hosting"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Cloud Hosting
              </Link>
              <Link
                href="/services/website-maintenance"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Website Maintenance
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">zarqsolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+91-8686-109-631</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Remote Team - Serving Globally</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2017-2024 ZarQ Solutions. All rights reserved. Empowering businesses through innovative IT solutions since
            2017.
          </p>
        </div>
      </div>
    </footer>
  )
}
