"use client"

import { useState } from "react"
import Link from "next/link"

export function GameDemo() {
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <main className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">Play Demo</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-light text-center mb-8">
            This demo showcases cognitive exercises designed to stimulate brain activity in people with early-stage
            Alzheimer&apos;s disease.
          </p>
        </div>

        <div className="bg-[#0a1d1e] rounded-lg p-4 mb-8">
          TODO
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0a1d1e] rounded-lg p-6">
            <h2 className="text-xl font-black mb-4">How to Play</h2>
            <ul className="space-y-2 font-light">
              <li>• Follow the instructions shown on screen</li>
              <li>• Complete as many challenges as possible</li>
              <li>• Difficulty increases with each level</li>
              <li>• This is a demo, no data is stored.</li>
            </ul>
          </div>

          <div className="bg-[#0a1d1e] rounded-lg p-6">
            <h2 className="text-xl font-black mb-4">Research Benefits</h2>
            <p className="font-light mb-4">This game helps improve:</p>
            <ul className="space-y-2 font-light">
              <li>• Short-term memory</li>
              <li>• Attention and focus</li>
              <li>• Executive function</li>
              <li>• Problem solving</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/research" className="font-black hover:underline">
            &gt; View full research publication
          </Link>
        </div>
      </div>
    </main>
  )
}

