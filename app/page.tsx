import { Hero } from "@/components/hero"
import { RoutePlanner } from "@/components/route-planner"
import { Features } from "@/components/features"
import { SafetyFeatures } from "@/components/safety-features"
import { Stats } from "@/components/stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Hero />
      <RoutePlanner />
      <Features />
      <SafetyFeatures />
      <Stats />
    </div>
  )
}
