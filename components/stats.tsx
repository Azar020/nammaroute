import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Users, Leaf, Clock } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: <TrendingDown className="w-8 h-8 text-green-500" />,
      value: "35%",
      label: "Reduction in Travel Time",
      description: "Average time saved through optimized routing",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      value: "2M+",
      label: "Active Users",
      description: "Commuters using SmartCommute daily",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      value: "40%",
      label: "Carbon Footprint Reduction",
      description: "Through public transport optimization",
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      value: "24/7",
      label: "Service Availability",
      description: "Round-the-clock support and updates",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Real Impact</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            SmartCommute is transforming urban mobility with measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-blue-100 mb-6">
            Join millions of smart commuters making cities more livable, sustainable, and safe
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">🚇 Metro Integration</div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">🚌 Bus Networks</div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">🚂 Train Services</div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">🚗 Auto & Ride-sharing</div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">🛡️ Safety First</div>
          </div>
        </div>
      </div>
    </section>
  )
}
