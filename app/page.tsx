import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, CheckCircle, Star, Target, Globe } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ParallaxSection } from "@/components/parallax-section"
import { FloatingElements } from "@/components/floating-elements"
import { Testimonials } from "@/components/testimonials"
import { TeamMembers } from "@/components/team-members"
import { LeadCapture } from "@/components/lead-capture"
import { Footer } from "@/components/footer"
import { SecurityBadges } from "@/components/security-badges"

import { Analytics } from "@/components/analytics"
import { StructuredData, financialServiceSchema } from "@/components/structured-data"
import { DynamicHero } from "@/components/dynamic-hero"
import { EnhancedNavigation, FloatingContactButton } from "@/components/enhanced-navigation"
import { InteractiveServiceShowcase, AnimatedStatistics, InteractiveTimeline, AnimatedProgressBar } from "@/components/interactive-elements"
import { StaggerContainer, StaggerItem, ParallaxScroll } from "@/components/smooth-scroll"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Analytics */}
      <Analytics />
      

      
      {/* Structured Data */}
      <StructuredData data={financialServiceSchema} />

      {/* Enhanced Navigation */}
      <EnhancedNavigation currentPath="/" />

      {/* Main Content */}
      <main id="main-content">
      {/* Dynamic Hero Section */}
      <DynamicHero />

        {/* Security Badges Section */}
        <SecurityBadges />

        {/* Interactive Service Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer>
              <StaggerItem>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    Discover our comprehensive range of financial services designed to drive your success
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <InteractiveServiceShowcase />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Animated Statistics Section */}
        <section className="py-20 bg-gradient-to-br from-maksab-blue  text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer>
              <StaggerItem>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
                  <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                    Trusted by clients worldwide to deliver exceptional results
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <AnimatedStatistics />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer>
              <StaggerItem>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                    From humble beginnings to global financial leadership
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="max-w-4xl mx-auto">
                  <InteractiveTimeline />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Redesigned Expertise Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="expertise-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="1" fill="currentColor" className="text-maksab-blue"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#expertise-pattern)"/>
              </svg>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <StaggerContainer>
              <StaggerItem>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive financial solutions backed by decades of industry experience and proven methodologies
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Financial Advisory */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-maksab-blue to-maksab-blue/90 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="w-12 h-12 bg-maksab-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="h-6 w-6 text-maksab-blue" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Advisory</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Strategic financial planning, wealth management, and investment strategies tailored to your unique goals and circumstances.
                      </p>
                    </div>
                  </div>

                  {/* Risk Management */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-maksab-green to-maksab-green/90 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="w-12 h-12 bg-maksab-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-6 w-6 text-maksab-green" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Management</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Comprehensive risk assessment, compliance frameworks, and regulatory adherence to protect your financial interests.
                      </p>
                    </div>
                  </div>

                  {/* Business Consulting */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-maksab-blue to-maksab-blue/90 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="w-12 h-12 bg-maksab-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Target className="h-6 w-6 text-maksab-blue" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Consulting</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Strategic business transformation, operational optimization, and performance improvement initiatives for sustainable growth.
                      </p>
                    </div>
                  </div>

                  {/* Digital Innovation */}
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-maksab-green to-maksab-green/90 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                      <div className="w-12 h-12 bg-maksab-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="h-6 w-6 text-maksab-green" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Innovation</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Digital transformation strategies, market analysis, and global operations optimization for the modern business landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="mt-16 text-center">
                  <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-gray-50 rounded-2xl px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-maksab-green rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Certified Professionals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-maksab-blue rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Industry Recognition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-maksab-green rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Global Network</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-maksab-blue rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Proven Results</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

      {/* Purpose & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Purpose & Mission</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We help clients achieve lasting, meaningful improvements in their performance while building a firm that
                attracts, develops, and retains top talent committed to financial excellence.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-in-left" delay={200}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-maksab-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-maksab-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-maksab-blue mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To help clients achieve distinctive, lasting improvements in their financial performance while
                      building a great firm that attracts, develops, and retains financial health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-maksab-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-maksab-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-maksab-blue mb-2">Global Impact</h3>
                    <p className="text-gray-600">
                      By collaborating with leaders across the globe, we're making a positive impact that truly matters,
                      connecting with our clients, teams, and communities.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={400}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-maksab-blue mb-6">What Sets Us Apart</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-maksab-green flex-shrink-0" />
                    <span className="text-gray-700">Holistic solutions that create lasting value</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-maksab-green flex-shrink-0" />
                    <span className="text-gray-700">Relationships founded on trust and mutual respect</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-maksab-green flex-shrink-0" />
                    <span className="text-gray-700">Top-management approach for lasting impact</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-maksab-green flex-shrink-0" />
                    <span className="text-gray-700">Global network bringing the best of MAKSAB</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Team Members Section */}
        <TeamMembers />

        {/* Lead Capture Section */}
        <LeadCapture />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  )
}
