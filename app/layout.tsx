import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

// Importar Roboto con todos los pesos necesarios
const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Cognitive Playroom",
  description: "A video game designed to stimulate cognition in people with early-stage Alzheimer's disease."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto">{children}</body>
    </html>
  )
}



import './globals.css'