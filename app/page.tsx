import Footer from "@/components/Footer"
import Blogs from "@/components/Blogs"
import Stats from "@/components/Stats"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import CoreValues from "@/components/CoreValues"
import WellBeing from "@/components/WellBeing"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Portfolio />
      <WellBeing/>
      <CoreValues />
      <Blogs />
      <Footer />
    </div>
  )
}
