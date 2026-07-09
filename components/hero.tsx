import { Button } from "@/components/ui/button"
import { MapPin, Route, Shield, Clock, DollarSign, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smart<span className="text-yellow-300">Commute</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your unified platform for safe, smart, and sustainable urban travel
          </p>
          <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
            Connecting metro, buses, trains, and autos under one intelligent platform. Get optimized routes based on
            safety, cost, and time - especially designed with women's safety in mind.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10">
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Route className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Smart Routes</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Shield className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Safety First</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Clock className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Time Optimized</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <DollarSign className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Cost Effective</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Leaf className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Eco Friendly</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Unified Platform</span>
            </div>
          </div>

          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
            Start Your Smart Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
