import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CFO",
    company: "TechCorp Global",
    content: "MAKSAB transformed our financial strategy and helped us achieve 40% growth in just 18 months. Their expertise and dedication are unmatched.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions",
    content: "The risk advisory services from MAKSAB saved us millions in potential losses. Their proactive approach and deep industry knowledge are invaluable.",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Director of Operations",
    company: "Green Energy Co",
    content: "MAKSAB's digital transformation guidance helped us modernize our entire operation. The results exceeded our expectations.",
    rating: 5,
    image: "/placeholder-user.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by global leaders who have achieved remarkable results with our guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <Quote className="h-8 w-8 text-maksab-blue/20 mb-4" />
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="text-sm text-maksab-blue">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md">
            <span className="text-sm font-medium text-gray-700 mr-2">Trusted by</span>
            <div className="flex space-x-4">
              <span className="text-lg font-bold text-maksab-blue">500+</span>
              <span className="text-gray-500">|</span>
              <span className="text-lg font-bold text-maksab-blue">50+</span>
              <span className="text-gray-500">|</span>
              <span className="text-lg font-bold text-maksab-blue">15+</span>
            </div>
            <span className="text-sm text-gray-700 ml-2">Clients | Countries | Years</span>
          </div>
        </div>
      </div>
    </section>
  )
} 