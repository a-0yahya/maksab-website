import { Shield, Lock, CheckCircle, Award } from "lucide-react"

export function SecurityBadges() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Compliance</h3>
          <p className="text-sm text-gray-600">Your data security and privacy are our top priorities</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">SSL Secured</span>
            <span className="text-xs text-gray-500">256-bit encryption</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">GDPR Compliant</span>
            <span className="text-xs text-gray-500">Data protection</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">ISO 27001</span>
            <span className="text-xs text-gray-500">Information security</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">Certified</span>
            <span className="text-xs text-gray-500">Financial services</span>
          </div>
        </div>
      </div>
    </div>
  )
} 