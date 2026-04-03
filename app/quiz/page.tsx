import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import WhatYouDiscover from "@/components/WhatYouDiscover"
import Identification from "@/components/Identification"
import About from "@/components/About"
import ImportantPoint from "@/components/ImportantPoint"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-[#0F1728]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhatYouDiscover />
      <Identification />
      <About /> 
      <ImportantPoint />
      <FinalCTA />
      <Footer />
    </main>
  )
}