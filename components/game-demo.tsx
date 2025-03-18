"use client"

import { useState } from "react"
import Link from "next/link"

export function GameDemo() {
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <main className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">Play Demo</h1>

        <div className="bg-[#0a1d1e] rounded-lg p-4 mb-8">
          {!gameStarted ? (
            <div className="flex flex-col items-center justify-center py-16">
              <p className="text-xl font-light text-center mb-8 max-w-lg">
                This demo showcases cognitive exercises designed to stimulate brain activity in people with early-stage
                Alzheimer&apos;s disease.
              </p>
              <button
                onClick={() => setGameStarted(true)}
                className="whitespace-nowrap bg-[#d9d9d9] text-[#0d2425] font-bold px-12 py-4 rounded-full hover:opacity-90 transition-opacity text-xl"
              >
                START GAME
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="aspect-video bg-[#081718] rounded-md flex items-center justify-center mb-4">
                <div className="text-center">
                  <p className="text-xl font-light mb-4">Game Demo Interface</p>
                  <p className="font-light text-[#d9d9d9] mb-6">Complete the pattern matching exercise</p>
                  <div className="flex justify-center gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="w-16 h-16 bg-[#d9d9d9] rounded-md flex items-center justify-center text-[#0d2425] font-bold cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button onClick={() => setGameStarted(false)} className="text-[#d9d9d9] hover:underline font-black">
                  &lt; Back to instructions
                </button>
                <div className="font-light text-sm">
                  Score: <span className="font-bold">0</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0a1d1e] rounded-lg p-6">
            <h2 className="text-xl font-black mb-4">How to Play</h2>
            <ul className="space-y-2 font-light">
              <li>• Follow the pattern shown on screen</li>
              <li>• Click the tiles in the correct sequence</li>
              <li>• Complete as many patterns as possible</li>
              <li>• Difficulty increases with each level</li>
            </ul>
          </div>

          <div className="bg-[#0a1d1e] rounded-lg p-6">
            <h2 className="text-xl font-black mb-4">Research Benefits</h2>
            <p className="font-light mb-4">This game helps improve:</p>
            <ul className="space-y-2 font-light">
              <li>• Short-term memory</li>
              <li>• Pattern recognition</li>
              <li>• Cognitive processing speed</li>
              <li>• Attention and focus</li>
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

