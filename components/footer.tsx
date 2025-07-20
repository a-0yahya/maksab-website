import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="MAKSAB Logo" width={120} height={40} className="h-10 w-auto" />
            <p className="text-gray-300 text-sm">
              Connecting you to financial excellence through comprehensive advisory services and lasting impact.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-white transition-colors">Financial Advisory</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Business Consulting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Risk Management</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Transaction Advisory</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Tax Advisory</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-maksab-green" />
                <span>info@maksab.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-maksab-green" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-maksab-green" />
                <span>Global Offices</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full bg-maksab-green hover:bg-maksab-green/90">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Legal Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Compliance Badges */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Compliance & Certifications</h4>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">ISO 27001</div>
                    <div className="text-xs text-maksab-green">Certified</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">GDPR</div>
                    <div className="text-xs text-maksab-green">Compliant</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">SOC 2</div>
                    <div className="text-xs text-maksab-green">Type II</div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">SSL</div>
                    <div className="text-xs text-maksab-green">Secured</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Legal & Compliance</h4>
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
                <div className="space-y-2">
                  <Link href="/privacy-policy" className="block hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="block hover:text-white transition-colors">Terms of Service</Link>
                  <Link href="/cookie-policy" className="block hover:text-white transition-colors">Cookie Policy</Link>
                  <Link href="/disclaimer" className="block hover:text-white transition-colors">Disclaimer</Link>
                </div>
                <div className="space-y-2">
                  <Link href="/risk-disclosure" className="block hover:text-white transition-colors">Risk Disclosure</Link>
                  <Link href="/regulatory-info" className="block hover:text-white transition-colors">Regulatory Info</Link>
                  <Link href="/complaints" className="block hover:text-white transition-colors">Complaints</Link>
                  <Link href="/accessibility" className="block hover:text-white transition-colors">Accessibility</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 MAKSAB Financial Services. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              <span className="mr-4">Regulated by Financial Services Authority</span>
              <span>License #: FSA123456</span>
            </div>
          </div>
        </div>
      </div>

      {/* Important Disclaimers */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-xs text-gray-500 space-y-2">
            <p>
              <strong>Risk Warning:</strong> Past performance does not guarantee future results. Investment values can go down as well as up. 
              You may lose some or all of your invested capital.
            </p>
            <p>
              <strong>Regulatory Notice:</strong> MAKSAB Financial Services is authorized and regulated by the Financial Services Authority. 
              Our services are not suitable for all investors. Please ensure you understand the risks involved.
            </p>
            <p>
              <strong>Data Protection:</strong> We are committed to protecting your personal data in accordance with GDPR and other applicable data protection laws.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 