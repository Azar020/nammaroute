import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Phone, MapPin, Clock, AlertCircle } from "lucide-react"

export function SafetyFeatures() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Safety-First Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Especially designed with women's safety in mind, our platform prioritizes secure travel routes and emergency
            preparedness
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Shield className="w-6 h-6" />
                Women Safety Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Well-Lit Route Priority</h4>
                  <p className="text-sm text-gray-600">
                    Routes through well-lit areas and busy streets, especially for night travel
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Crowd Density Info</h4>
                  <p className="text-sm text-gray-600">
                    Real-time information about crowd levels in transport and walking areas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Emergency Contacts</h4>
                  <p className="text-sm text-gray-600">Quick access to emergency services and trusted contacts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Safe Hours Recommendations</h4>
                  <p className="text-sm text-gray-600">Optimal travel time suggestions based on safety data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <AlertCircle className="w-6 h-6" />
                Emergency Preparedness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Offline Emergency Mode</h4>
                <p className="text-sm text-orange-700">
                  Essential information available without internet: emergency contacts, nearest police stations,
                  hospitals, and basic route guidance
                </p>
              </div>
              <div className="space-y-3">
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  SOS Button Integration
                </Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  Live Location Sharing
                </Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  Safe Zone Identification
                </Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  24/7 Helpline Access
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
