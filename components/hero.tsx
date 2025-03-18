import Link from "next/link"

export function Hero() {
  return (
    <main className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl">
        <div className="text-6xl md:text-8xl font-black leading-tight">
          Cognitive
          <br />
          Playroom
        </div>
        <div className="max-w-md">
          <p className="text-xl md:text-2xl mb-8 font-light">
            A video game designed to stimulate cognition in people with early-stage Alzheimer&apos;s disease.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/play"
              className="whitespace-nowrap bg-[#d9d9d9] text-[#0d2425] font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              PLAY DEMO
            </Link>
            <div className="space-y-1 font-black">
              <p>
                <Link target="_blank" href="https://doi.org/10.54941/ahfe1004501" className="hover:underline">
                  &gt; View research publication
                </Link>
              </p>
              <p>
                <Link href="/about" className="hover:underline">
                  &gt; Aditional information
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

