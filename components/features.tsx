import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, DollarSign, Shield, Leaf, Smartphone, AlertTriangle, Navigation, Star } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: "Unified Navigation Platform",
      description:
        "One app for metro, buses, trains, autos, and ride-sharing. No more switching between multiple apps.",
      problem: "Lack of Unified Platform",
    },
    {
      icon: <Navigation className="w-8 h-8 text-green-500" />,
      title: "Smart Route Optimization",
      description:
        "AI-powered routing that considers real-time traffic, public transport schedules, and your preferences.",
      problem: "Unoptimized Routes",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Women Safety Features",
      description:
        "Well-lit routes, crowd density info, emergency contacts, and safe zone recommendations for night travel.",
      problem: "Pedestrian Safety",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "Cost-Smart Suggestions",
      description: "Compare fares across all transport modes and get the most economical route suggestions.",
      problem: "Expensive Travel",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Real-Time Updates",
      description: "Live traffic updates, transport delays, and dynamic re-routing to save your time.",
      problem: "Traffic Congestion",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Eco-Friendly Options",
      description: "Carbon footprint tracking and green transport recommendations to reduce environmental impact.",
      problem: "Environmental Impact",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      title: "Offline Emergency Mode",
      description: "Essential route information and emergency contacts available even without internet connection.",
      problem: "Offline Travel Help",
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: "Reliable Service Info",
      description: "Real user ratings, service reliability scores, and transparent pricing for all transport options.",
      problem: "Unreliable Services",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Solving Urban Transport Challenges</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SmartCommute addresses every major pain point in urban transportation with intelligent, user-centric
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {feature.icon}
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-2 py-1 rounded">
                  <AlertTriangle className="w-3 h-3" />
                  Solves: {feature.problem}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
