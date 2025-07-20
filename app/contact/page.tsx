"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { EnhancedNavigation } from "@/components/enhanced-navigation"



export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this data to your backend
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDateSelection = (date: string) => {
    setSelectedDate(date)
  }

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
  }

  const handleBooking = () => {
    let message = "Hi MAKSAB, I want to have a consultation."
    
    if (selectedDate && selectedTime) {
      message = `Hi MAKSAB, I want to have a consultation on ${selectedDate} at ${selectedTime}.`
    } else if (selectedDate) {
      message = `Hi MAKSAB, I want to have a consultation on ${selectedDate}.`
    } else if (selectedTime) {
      message = `Hi MAKSAB, I want to have a consultation at ${selectedTime}.`
    }
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, '_blank')
  }

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <EnhancedNavigation currentPath="/contact" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-maksab-blue to-maksab-blue/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to take control of your financial future? Get in touch with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInAnimation} initial="initial" animate="animate">
              <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-maksab-blue">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-maksab-blue/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-maksab-blue/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                                          <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-maksab-blue/50"
                      />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                                          <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="transition-all duration-200 focus:ring-2 focus:ring-maksab-blue/50"
                      />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-maksab-blue/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investment-management">Investment Management</SelectItem>
                        <SelectItem value="financial-planning">Financial Planning</SelectItem>
                        <SelectItem value="wealth-management">Wealth Management</SelectItem>
                        <SelectItem value="corporate-finance">Corporate Finance</SelectItem>
                        <SelectItem value="risk-management">Risk Management</SelectItem>
                        <SelectItem value="tax-planning">Tax Planning</SelectItem>
                        <SelectItem value="general-consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                                          <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your financial goals and how we can help..."
                        className="transition-all duration-200 focus:ring-2 focus:ring-maksab-blue/50"
                      />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-maksab-blue hover:bg-maksab-blue/90 transition-all duration-200 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
              </Card>
            </motion.div>

            {/* Enhanced Live Chat Widget */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-maksab-green to-maksab-green/90 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <CardTitle className="text-white">Chat with an Expert</CardTitle>
                </div>
                <CardDescription className="text-green-100">
                  Get instant answers to your questions from our financial experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm text-green-100">💬 "How can I start investing with $10,000?"</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm text-green-100">💬 "What's the best retirement strategy for my age?"</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm text-green-100">💬 "How do I plan for my children's education?"</p>
                  </div>
                  <Button 
                    onClick={() => window.open('https://wa.me/1234567890?text=Hi%20MAKSAB,%20I%20need%20financial%20advice', '_blank')}
                    className="w-full bg-white text-maksab-green hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 font-semibold"
                  >
                    💬 Start WhatsApp Chat
                  </Button>
                  <div className="text-center">
                    <p className="text-xs text-green-100">Available: Mon-Fri 8AM-6PM, Sat 9AM-2PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>



      {/* Interactive Appointment Booking */}
      <section className="py-20 bg-gradient-to-br from-maksab-blue to-maksab-blue/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Consultation</h2>
            <p className="text-xl text-blue-100">Choose a convenient time for your 30-minute financial consultation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-maksab-blue">Available Time Slots</CardTitle>
                <CardDescription>Select your preferred date and time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {["Mon 15", "Tue 16", "Wed 17", "Thu 18", "Fri 19", "Sat 20"].map((date, index) => (
                    <Button
                      key={index}
                      onClick={() => handleDateSelection(date)}
                      variant={selectedDate === date ? "default" : "outline"}
                      className={`text-sm transition-all duration-200 hover:scale-105 ${
                        selectedDate === date ? "bg-maksab-blue" : "border-maksab-blue text-maksab-blue hover:bg-maksab-blue hover:text-white"
                      }`}
                    >
                      {date}
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM"].map((time, index) => (
                    <Button
                      key={index}
                      onClick={() => handleTimeSelection(time)}
                      variant={selectedTime === time ? "default" : "outline"}
                      className={`border-maksab-green text-maksab-green hover:bg-maksab-green hover:text-white bg-transparent transition-all duration-200 hover:scale-105 ${
                        selectedTime === time ? "bg-maksab-green text-white" : ""
                      }`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-maksab-blue">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                                      <div className="w-8 h-8 bg-maksab-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-maksab-blue font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-maksab-blue">Financial Assessment</h4>
                    <p className="text-gray-600 text-sm">Review your current financial situation and goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary font-bold text-sm">2</span>
                  </div>
                  <div>
                                          <h4 className="font-semibold text-maksab-blue">Strategy Discussion</h4>
                    <p className="text-gray-600 text-sm">Explore potential strategies and solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                                      <div className="w-8 h-8 bg-maksab-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                          <span className="text-maksab-blue font-bold text-sm">3</span>
                  </div>
                  <div>
                                          <h4 className="font-semibold text-maksab-blue">Next Steps</h4>
                    <p className="text-gray-600 text-sm">Outline a clear path forward for your financial future</p>
                  </div>
                </div>
                <Button 
                  onClick={handleBooking}
                  disabled={!selectedDate && !selectedTime}
                  className={`w-full mt-6 transition-all duration-200 hover:scale-105 ${
                    selectedDate || selectedTime 
                      ? "bg-maksab-green hover:bg-maksab-green/90 text-white" 
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  📅 {selectedDate && selectedTime ? `Book ${selectedDate} at ${selectedTime}` : "Select Date & Time"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about our services and process</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the minimum investment amount?",
                answer:
                  "Our minimum investment varies by service. For investment management, we typically require a minimum of $100,000. However, we offer financial planning services starting at lower amounts. Contact us to discuss your specific situation.",
              },
              {
                question: "How do you charge for your services?",
                answer:
                  "Our fee structure is transparent and varies by service. Investment management typically uses an asset-based fee model, while financial planning may use hourly or project-based fees. We'll discuss all fees upfront during your consultation.",
              },
              {
                question: "How often will we meet to review my portfolio?",
                answer:
                  "We typically schedule quarterly reviews with our clients, though this can be adjusted based on your preferences and needs. We're also available for additional meetings as market conditions or your circumstances change.",
              },
              {
                question: "Are you a fiduciary?",
                answer:
                  "Yes, we are a registered investment advisor and act as a fiduciary. This means we are legally obligated to act in your best interests at all times and provide advice that is suitable for your specific situation.",
              },
              {
                question: "What makes MAKSAB different from other financial advisors?",
                answer:
                  "Our comprehensive approach combines investment management with holistic financial planning. We focus on building long-term relationships and provide personalized service with a dedicated team approach for each client.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-maksab-blue">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <p className="text-gray-400">Your trusted partner in financial success and wealth management.</p>
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
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Investment Management</li>
                <li>Financial Planning</li>
                <li>Wealth Management</li>
                <li>Corporate Finance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Financial District</li>
                <li>New York, NY 10004</li>
                <li>+1 (555) 123-4567</li>
                <li>info@maksab.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MAKSAB Financial Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
