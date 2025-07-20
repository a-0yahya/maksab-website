import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, Users, Globe } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/logo.png" alt="MAKSAB Logo" width={120} height={40} className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-600 hover:text-maksab-blue font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-maksab-blue font-medium">
                  About Us
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-maksab-blue font-medium">
                  Services
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-maksab-blue font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <Button className="bg-maksab-blue hover:bg-maksab-blue/90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-maksab-blue to-maksab-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy and data protection are fundamental to our commitment to excellence and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600">
                <strong>Last updated:</strong> January 15, 2024
              </p>
              <p className="text-gray-600">
                MAKSAB Financial Services ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-maksab-blue" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Company information and job title</li>
                    <li>Financial information relevant to our services</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Information</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-maksab-blue" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide and improve our financial advisory services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send newsletters and marketing materials (with your consent)</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Protect against fraud and ensure security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-maksab-blue" />
                  Data Storage and Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-maksab-blue" />
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Under applicable data protection laws, you have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-maksab-blue" />
                  International Data Transfers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As a global financial services provider, we may transfer your personal information to countries outside your residence. We ensure such transfers comply with applicable data protection laws and implement appropriate safeguards, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>Standard contractual clauses</li>
                  <li>Adequacy decisions</li>
                  <li>Certification schemes</li>
                  <li>Other approved transfer mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-maksab-blue" />
                  Cookies and Tracking Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We use cookies and similar technologies to enhance your browsing experience and analyze website usage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">Required for website functionality and security</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">Help us understand how visitors use our website</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">Used for targeted advertising and content</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Preference Cookies</h4>
                      <p className="text-sm text-gray-600">Remember your settings and preferences</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@maksab.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> MAKSAB Financial Services, Global Offices</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="bg-maksab-blue hover:bg-maksab-blue/90">
                  Contact Our Privacy Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 