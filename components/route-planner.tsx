"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation, Clock, DollarSign, Shield, Zap, Bus, Train, Car } from "lucide-react"

export function RoutePlanner() {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [showRoutes, setShowRoutes] = useState(false)

  const routes = [
    {
      id: 1,
      type: "Metro + Bus",
      duration: "32 min",
      cost: "₹45",
      safety: "High",
      environmental: "Excellent",
      steps: ["Walk to Metro Station (5 min)", "Blue Line to Central (18 min)", "Bus 45A to Destination (9 min)"],
      icon: <Train className="w-5 h-5" />,
    },
    {
      id: 2,
      type: "Direct Bus",
      duration: "45 min",
      cost: "₹25",
      safety: "Medium",
      environmental: "Good",
      steps: ["Walk to Bus Stop (3 min)", "Bus 120 Direct Route (42 min)"],
      icon: <Bus className="w-5 h-5" />,
    },
    {
      id: 3,
      type: "Auto + Metro",
      duration: "28 min",
      cost: "₹85",
      safety: "High",
      environmental: "Good",
      steps: ["Auto to Metro Station (8 min)", "Green Line Express (20 min)"],
      icon: <Car className="w-5 h-5" />,
    },
  ]

  const handlePlanRoute = () => {
    if (origin && destination) {
      setShowRoutes(true)
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Plan Your Smart Route</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get personalized route suggestions optimized for safety, cost, and time across all transport modes
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="w-5 h-5" />
              Route Planner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-green-500" />
                <Input
                  placeholder="Enter origin (e.g., Connaught Place)"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-red-500" />
                <Input
                  placeholder="Enter destination (e.g., Cyber City)"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Tabs defaultValue="balanced" className="mb-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="fastest">Fastest</TabsTrigger>
                <TabsTrigger value="cheapest">Cheapest</TabsTrigger>
                <TabsTrigger value="safest">Safest</TabsTrigger>
                <TabsTrigger value="balanced">Balanced</TabsTrigger>
              </TabsList>
            </Tabs>

            <Button onClick={handlePlanRoute} className="w-full bg-blue-600 hover:bg-blue-700">
              <Zap className="w-4 h-4 mr-2" />
              Get Smart Routes
            </Button>
          </CardContent>
        </Card>

        {showRoutes && (
          <div className="grid gap-6">
            <h3 className="text-2xl font-semibold text-gray-800">Recommended Routes</h3>
            {routes.map((route) => (
              <Card key={route.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {route.icon}
                      <div>
                        <h4 className="font-semibold text-lg">{route.type}</h4>
                        <div className="flex gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {route.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            {route.cost}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={route.safety === "High" ? "default" : "secondary"}>
                        <Shield className="w-3 h-3 mr-1" />
                        {route.safety} Safety
                      </Badge>
                      <Badge variant="outline" className="text-green-600">
                        {route.environmental}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {route.steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {step}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    Select This Route
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
