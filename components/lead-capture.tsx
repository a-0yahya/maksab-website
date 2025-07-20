"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Calendar, Phone } from "lucide-react"

export function LeadCapture() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: ""
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            We've received your inquiry and will contact you within 24 hours.
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-maksab-green hover:bg-maksab-green/90">
              <Download className="h-4 w-4 mr-2" />
              Download Our Guide
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="bg-gradient-to-br from-maksab-blue to-maksab-blue/90 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation with our financial experts. No commitment required.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-maksab-green" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-maksab-green" />
                <span>Customized solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-maksab-green" />
                <span>Proven track record</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-maksab-green" />
                <span>Global expertise</span>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Get Your Free Consultation</CardTitle>
              <CardDescription className="text-blue-100">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                  />
                  <Input
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                  />
                </div>
                
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                />
                
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                />
                
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                />
                
                <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial-advisory">Financial Advisory</SelectItem>
                    <SelectItem value="business-consulting">Business Consulting</SelectItem>
                    <SelectItem value="risk-management">Risk Management</SelectItem>
                    <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                    <SelectItem value="transaction-advisory">Transaction Advisory</SelectItem>
                    <SelectItem value="tax-advisory">Tax Advisory</SelectItem>
                    <SelectItem value="legal-advisory">Legal Advisory</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Project Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1M</SelectItem>
                    <SelectItem value="over-1m">Over $1M</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea
                  placeholder="Tell us about your project or challenges..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-100"
                />
                
                <Button type="submit" className="w-full bg-maksab-green hover:bg-maksab-green/90">
                  Get Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 