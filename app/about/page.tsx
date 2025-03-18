import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d2425] text-[#ffffff] flex flex-col">
      <Header />
      <AboutContent />
      <Footer />
    </div>
  )
}

