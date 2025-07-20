import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Ahmed Hassan",
    position: "Managing Partner",
    credentials: ["CFA", "PhD Finance", "MBA"],
    experience: "20+ years",
    expertise: ["Financial Strategy", "Investment Management", "Risk Assessment"],
    image: "/placeholder-user.jpg",
    bio: "Leading MAKSAB's strategic initiatives with over two decades of experience in global financial markets."
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "Head of Advisory Services",
    credentials: ["CPA", "CMA", "MBA"],
    experience: "15+ years",
    expertise: ["Business Consulting", "Financial Planning", "Digital Transformation"],
    image: "/placeholder-user.jpg",
    bio: "Expert in driving organizational transformation and implementing sustainable growth strategies."
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "Risk Management Director",
    credentials: ["FRM", "PRM", "MSc Risk Management"],
    experience: "12+ years",
    expertise: ["Risk Assessment", "Compliance", "Crisis Management"],
    image: "/placeholder-user.jpg",
    bio: "Specialized in developing comprehensive risk management frameworks for multinational corporations."
  },
  {
    id: 4,
    name: "Dr. Lisa Chen",
    position: "Digital Transformation Lead",
    credentials: ["PhD Computer Science", "PMP", "ITIL"],
    experience: "18+ years",
    expertise: ["Digital Strategy", "Technology Integration", "Process Automation"],
    image: "/placeholder-user.jpg",
    bio: "Pioneering digital transformation initiatives that drive operational excellence and competitive advantage."
  }
]

export function TeamMembers() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings together decades of experience in financial services, 
            business consulting, and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-maksab-blue font-medium mb-2">{member.position}</p>
                  
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {member.credentials.map((credential) => (
                      <Badge key={credential} variant="secondary" className="text-xs">
                        {credential}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{member.experience} Experience</p>
                  
                  <div className="text-left">
                    <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                    
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-900">Expertise:</p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {member.expertise.map((skill) => (
                          <li key={skill} className="flex items-center">
                            <span className="w-1 h-1 bg-maksab-green rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-maksab-blue to-maksab-green text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Team?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm">Professional Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 