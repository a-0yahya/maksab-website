"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, TrendingUp, Shield, Target, Globe, CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { EnhancedNavigation } from "@/components/enhanced-navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <EnhancedNavigation currentPath="/about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-maksab-blue to-maksab-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollAnimation animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About MAKSAB</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We connect the dots, going beyond expectations to help you achieve more through meaningful connections
                and lasting impact.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <ScrollAnimation animation="fade-in-up">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-lg text-gray-600 mb-6">
                  MAKSAB focuses on building meaningful connections—connecting with our clients, our team, and our
                  communities. By collaborating with leaders across the globe, we're making a positive impact that truly
                  matters.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our purpose is to help clients achieve lasting, meaningful improvements in their performance while
                  fostering a company that attracts, develops, and retains top talent committed to financial excellence.
                </p>
                <p className="text-lg text-gray-600">
                  At MAKSAB, we are guided by strong values that evolve with the times, shaping both our long-term
                  strategy and our daily approach to client service.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-maksab-blue mb-2">Global</div>
                    <div className="text-gray-600">Network</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-maksab-blue mb-2">Expert</div>
                    <div className="text-gray-600">Advisory</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-maksab-blue mb-2">Lasting</div>
                    <div className="text-gray-600">Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-maksab-blue mb-2">Excellence</div>
                    <div className="text-gray-600">Driven</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Mission & Purpose */}
      <ScrollAnimation animation="fade-in-up">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Purpose</h2>
              <p className="text-xl text-gray-600">Guided by strong values that shape our strategy and approach</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-maksab-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-maksab-blue" />
                  </div>
                  <CardTitle className="text-maksab-blue">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To help clients achieve distinctive, lasting improvements in their financial performance while
                    building a great firm that attracts, develops, and retains financial health.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-16 h-16 bg-maksab-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-maksab-green" />
                  </div>
                  <CardTitle className="text-maksab-blue">Our Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To help clients achieve lasting, meaningful improvements in their performance while fostering a
                    company that attracts, develops, and retains top talent committed to financial excellence.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Core Values */}
      <ScrollAnimation animation="fade-in-up">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-blue/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-maksab-blue" />
                    </div>
                    <CardTitle className="text-maksab-blue">Improve Our Clients' Performance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Focus on holistic solutions that create value</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Build lasting relationships founded on trust and mutual respect
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Take a top-management approach for lasting impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Strengthen client capabilities to ensure sustainable improvements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Leverage our global network to bring the best of MAKSAB</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-maksab-green/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-maksab-green" />
                    </div>
                    <CardTitle className="text-maksab-blue">Adhere to Highest Professional Standards</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Uphold ethical practices in all we do</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Put our clients' interests ahead of the firm's</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Maintain high standards of service and client care</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Safeguard client confidentiality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-maksab-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Preserve an independent and objective perspective</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* What We Do */}
      <ScrollAnimation animation="fade-in-up">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We provide a wide range of financial, business, risk, digital transformation, tax, and legal advisory
                services. We exist to make an impact that truly matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Financial Advisory",
                  description: "Navigate global shifts in behaviors and markets with innovative financial solutions.",
                  icon: TrendingUp,
                },
                {
                  title: "Business Consulting",
                  description: "Unlock your full potential by optimizing operations, strategies, and leadership.",
                  icon: Users,
                },
                {
                  title: "Risk Advisory",
                  description: "Comprehensive risk services to identify, assess, and manage potential risks.",
                  icon: Shield,
                },
                {
                  title: "Digital Transformation",
                  description: "Guide businesses through adopting digital solutions for growth.",
                  icon: Globe,
                },
                {
                  title: "Transaction Advisory",
                  description: "Expert guidance for mergers, acquisitions, and complex deals.",
                  icon: Target,
                },
                {
                  title: "Tax Advisory",
                  description: "Navigate complex tax landscapes with optimization strategies.",
                  icon: Award,
                },
              ].map((service, index) => (
                <Card key={index} className="border-0 shadow-lg hover:scale-105 transition-transform">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-maksab-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-maksab-blue" />
                    </div>
                    <CardTitle className="text-maksab-blue">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <section className="py-20 bg-maksab-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect the Dots?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our global network of experts help you achieve lasting, meaningful improvements in performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://wa.me/1234567890?text=Hi%20MAKSAB,%20I%20would%20like%20to%20book%20a%20free%20consultation', '_blank')}
              className="w-full bg-maksab-green hover:bg-maksab-green/90 text-white"
            >
              Book via WhatsApp
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-maksab-blue bg-transparent hover:scale-105 transition-transform"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/Logo.png"
                alt="MAKSAB Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert hover:scale-105 transition-transform"
              />
              <p className="text-gray-400">
                Connecting the dots to help you achieve more through meaningful partnerships.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white hover:scale-105 transition-transform">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white hover:scale-105 transition-transform">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white hover:scale-105 transition-transform">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white hover:scale-105 transition-transform">
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
              <h3 className="font-semibold mb-4">Our Impact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Global Network</li>
                <li>Expert Advisory</li>
                <li>Lasting Impact</li>
                <li>Excellence Driven</li>
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
