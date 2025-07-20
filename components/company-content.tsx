"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Target, Users, Globe, TrendingUp, Shield, Zap, Award } from 'lucide-react'

// Company Information - Update this with real content from PDF
export const companyInfo = {
  name: "MAKSAB",
  tagline: "Connecting You to Financial Excellence",
  description: "At MAKSAB, we focus on building meaningful connections with our clients, teams, and communities. We help you achieve lasting improvements in financial performance while fostering excellence.",
  
  // Mission & Vision
  mission: "To help clients achieve distinctive, lasting improvements in their financial performance while building a great firm that attracts, develops, and retains financial health.",
  vision: "To be the leading financial advisory firm that creates lasting value through innovative solutions and trusted partnerships.",
  
  // Core Values
  values: [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering the highest quality service to our clients.",
      icon: Award
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of integrity and ethical behavior in all our relationships.",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously improve our services to meet evolving client needs.",
      icon: Zap
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration and building strong partnerships with our clients.",
      icon: Users
    }
  ],
  
  // Services - Update with real services from PDF
  services: [
    {
      title: "Financial Advisory",
      description: "Strategic financial planning and investment optimization for individuals and businesses.",
      icon: TrendingUp,
      features: [
        "Personal Financial Planning",
        "Investment Portfolio Management",
        "Retirement Planning",
        "Tax Optimization Strategies"
      ]
    },
    {
      title: "Business Consulting",
      description: "Comprehensive business advisory services to drive growth and operational excellence.",
      icon: Target,
      features: [
        "Strategic Planning",
        "Operational Efficiency",
        "Market Analysis",
        "Growth Strategy Development"
      ]
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for financial security.",
      icon: Shield,
      features: [
        "Risk Assessment",
        "Compliance Management",
        "Insurance Planning",
        "Crisis Management"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Technology integration and process automation for modern financial operations.",
      icon: Zap,
      features: [
        "Technology Integration",
        "Process Automation",
        "Digital Strategy",
        "Change Management"
      ]
    }
  ],
  
  // Statistics - Update with real numbers from PDF
  statistics: [
    { label: "Global Clients", value: 500, suffix: "+" },
    { label: "Countries Served", value: 25, suffix: "+" },
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Success Rate", value: 98, suffix: "%" }
  ],
  
  // Team Information - Update with real team details from PDF
  team: [
    {
      name: "Raeef Abdullah Mohammed Al Tamimi",
      position: "Founder & CEO",
      description: "Leading MAKSAB with over 15 years of experience in financial services and business consulting.",
      image: "/placeholder-user.jpg"
    }
    // Add more team members from PDF
  ],
  
  // Contact Information - Update with real contact details from PDF
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@maksab.com",
    address: "Your Company Address",
    website: "www.maksab.com"
  },
  
  // Company History - Update with real timeline from PDF
  history: [
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 25+ countries with new regional offices"
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description: "Launched AI-powered financial advisory platform"
    },
    {
      year: "2022",
      title: "Market Leadership",
      description: "Recognized as top financial advisory firm"
    },
    {
      year: "2021",
      title: "Foundation",
      description: "Established MAKSAB with core team of experts"
    }
  ]
}

// Company Content Components
export function CompanyHero() {
  return (
    <div className="space-y-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center px-4 py-2 bg-maksab-green/20 rounded-full text-sm font-medium text-maksab-green border border-maksab-green/30 backdrop-blur-sm">
          <span className="w-2 h-2 bg-maksab-green rounded-full mr-2 animate-pulse"></span>
          We connect the dots, going beyond expectations
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Connecting You to
          <span className="block text-maksab-green">Financial Excellence</span>
        </h1>
        <p className="text-xl text-blue-100 leading-relaxed">
          {companyInfo.description}
        </p>
      </motion.div>
    </div>
  )
}

export function CompanyMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Purpose & Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {companyInfo.mission}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-maksab-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-maksab-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-maksab-blue mb-2">Our Mission</h3>
                <p className="text-gray-600">{companyInfo.mission}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-maksab-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-maksab-green" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-maksab-blue mb-2">Our Vision</h3>
                <p className="text-gray-600">{companyInfo.vision}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-maksab-blue mb-6">What Sets Us Apart</h3>
            <div className="space-y-4">
              {companyInfo.values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-maksab-green flex-shrink-0" />
                  <span className="text-gray-700">{value.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function CompanyServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our comprehensive range of financial services designed to drive your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyInfo.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-maksab-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-maksab-blue" />
                  </div>
                  <CardTitle className="text-xl text-maksab-blue">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-maksab-green flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CompanyValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-maksab-blue to-maksab-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyInfo.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-blue-100">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CompanyTimeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From humble beginnings to global financial leadership
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maksab-blue to-maksab-green" />
            <div className="space-y-8">
              {companyInfo.history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="absolute left-2 w-4 h-4 bg-maksab-blue rounded-full border-4 border-white shadow-lg" />
                  <div className="ml-8 space-y-2">
                    <div className="text-sm font-bold text-maksab-blue">{item.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 