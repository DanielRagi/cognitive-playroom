import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameDemo } from "@/components/game-demo"

export default function PlayDemo() {
  return (
    <div className="min-h-screen bg-[#0d2425] text-[#ffffff] flex flex-col">
      <Header />
      <GameDemo />
      <Footer />
    </div>
  )
}

