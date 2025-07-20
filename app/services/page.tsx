import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Users, Calculator, CheckCircle, Target, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollAnimation } from "@/components/scroll-animation"
import { EnhancedNavigation } from "@/components/enhanced-navigation"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <EnhancedNavigation currentPath="/services" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-maksab-blue to-maksab-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Advisory Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive financial, business, risk, digital transformation, tax, and legal advisory services designed
              to make an impact that truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Financial Advisory */}
            <ScrollAnimation delay={200}>
              <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-blue/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-maksab-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-maksab-blue">Financial Advisory</CardTitle>
                      <Badge className="bg-maksab-green/10 text-maksab-green hover:bg-maksab-green/20">
                        Core Service
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6">
                    Navigate global shifts in behaviors, expectations, and markets with innovative financial solutions.
                    We foster stable and inclusive growth through innovation and transformation.
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Strategic financial planning and analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Investment strategy optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Financial transformation initiatives</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Market insights and ecosystem connections</span>
                    </div>
                  </div>
                  <Button className="w-full bg-maksab-blue hover:bg-maksab-blue/90">Learn More</Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Business Consulting */}
            <ScrollAnimation delay={400}>
              <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-green/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-maksab-green" />
                    </div>
                    <CardTitle className="text-2xl text-maksab-blue">Business Consulting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6">
                    Unlock your full potential by optimizing operations, strategies, and leadership. We create tailored
                    solutions that drive sustainable growth and enhance competitiveness.
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Operations optimization and efficiency</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Strategic planning and execution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Leadership development programs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Performance improvement initiatives</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-maksab-blue text-maksab-blue hover:bg-maksab-blue hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Risk Advisory */}
            <ScrollAnimation delay={600}>
              <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-blue/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-maksab-blue" />
                    </div>
                    <CardTitle className="text-2xl text-maksab-blue">Risk Advisory</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6">
                    Comprehensive risk advisory services that help identify, assess, and manage potential risks. Ensure
                    your business is well-prepared to navigate challenges and make informed decisions.
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Financial risk assessment and management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Operational risk mitigation strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Regulatory compliance guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Crisis management and contingency planning</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-maksab-blue text-maksab-blue hover:bg-maksab-blue hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Digital Transformation */}
            <ScrollAnimation delay={800}>
              <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-green/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-maksab-green" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-maksab-blue">Digital Transformation</CardTitle>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Innovation Focus</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6">
                    Guide businesses through adopting and integrating digital solutions that streamline operations,
                    enhance customer experiences, and unlock new growth opportunities.
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Digital strategy development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Technology integration and automation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Customer experience enhancement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Digital capability building</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-maksab-blue text-maksab-blue hover:bg-maksab-blue hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Transaction Advisory */}
            <ScrollAnimation delay={1000}>
              <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-blue/10 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-maksab-blue" />
                    </div>
                    <CardTitle className="text-2xl text-maksab-blue">Transaction Advisory</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6">
                    Expert advisory services for mergers, acquisitions, and complex business transactions. We provide
                    insights on financial structuring, due diligence, and valuation for successful deals.
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Mergers and acquisitions guidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Due diligence and valuation services</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Financial structuring optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Deal execution and integration support</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-maksab-blue text-maksab-blue hover:bg-maksab-blue hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Tax Advisory */}
            <ScrollAnimation delay={1200}>
              <Card className="border-0 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-green/10 rounded-lg flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-maksab-green" />
                    </div>
                    <CardTitle className="text-2xl text-maksab-blue">Tax Advisory</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-6">
                    Navigate the complex and ever-changing tax landscape with strategies that enhance tax management
                    while ensuring compliance with Indonesian and international regulations.
                  </CardDescription>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Tax strategy development and optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>International tax compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Tax risk management and planning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green" />
                      <span>Business growth tax strategies</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-maksab-blue text-maksab-blue hover:bg-maksab-blue hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <ScrollAnimation delay={200}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-xl text-gray-600">How we deliver lasting impact through meaningful connections</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect",
                  description:
                    "We build meaningful connections with clients, understanding their unique challenges and goals.",
                },
                {
                  step: "02",
                  title: "Analyze",
                  description:
                    "Our experts provide in-depth analysis using global expertise and cutting-edge technology.",
                },
                {
                  step: "03",
                  title: "Transform",
                  description: "We develop and implement tailored solutions that drive sustainable improvements.",
                },
                {
                  step: "04",
                  title: "Impact",
                  description: "We ensure lasting impact through continuous support and capability building.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-maksab-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-maksab-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Interactive FAQ Section */}
      <ScrollAnimation delay={400}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Get answers to common questions about our advisory services</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What makes MAKSAB's advisory approach different?",
                  answer:
                    "We focus on building meaningful connections and delivering holistic solutions that create lasting value. Our global network and expertise ensure we bring the best of MAKSAB to every client engagement.",
                },
                {
                  question: "How do you ensure sustainable improvements?",
                  answer:
                    "We strengthen client capabilities through knowledge transfer, capability building, and continuous support. Our approach focuses on empowering your team to maintain and build upon the improvements we implement together.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "We serve leading organizations across various industries worldwide, from financial services and manufacturing to technology and healthcare. Our global expertise allows us to adapt our solutions to any sector.",
                },
                {
                  question: "How do you measure success?",
                  answer:
                    "Success is measured by the lasting, meaningful improvements in our clients' performance. We focus on tangible outcomes that drive sustainable growth and competitive advantage.",
                },
                {
                  question: "What is your approach to digital transformation?",
                  answer:
                    "We guide businesses through comprehensive digital transformation that goes beyond technology adoption. Our approach includes strategy development, capability building, and ensuring your organization stays ahead in an increasingly digital world.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-maksab-blue hover:text-maksab-green transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation delay={600}>
        <section className="py-20 bg-maksab-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact That Matters?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with our global network of experts and discover how we can help you achieve lasting, meaningful
              improvements in performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-maksab-green hover:bg-maksab-green/90">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-maksab-blue bg-transparent"
                >
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="MAKSAB Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                Connecting the dots to help you achieve more through expert advisory services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Advisory Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Financial Advisory</li>
                <li>Business Consulting</li>
                <li>Risk Advisory</li>
                <li>Digital Transformation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Global Network</li>
                <li>Expert Advisory</li>
                <li>info@maksab.com</li>
                <li>Lasting Impact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MAKSAB. Connecting the dots, going beyond expectations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
