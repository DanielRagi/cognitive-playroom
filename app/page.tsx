import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d2425] text-[#ffffff] flex flex-col">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-black">
          <Link href="/">
            Cognitive
            <br />
            Playroom
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-8 font-normal">
            <li>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link href="/play" className="hover:opacity-80 transition-opacity">
                Play
              </Link>
            </li>
            <li>
              <Link href="/research" className="hover:opacity-80 transition-opacity">
                Research
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-80 transition-opacity">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
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
            <div>
              <Link
                href="/play"
                className="inline-block bg-[#d9d9d9] text-[#0d2425] font-bold px-8 py-3 rounded-full mb-4 hover:opacity-90 transition-opacity"
              >
                PLAY DEMO
              </Link>
              <div className="space-y-1 mt-2 font-black">
                <p>
                  <Link href="/research" className="hover:underline">
                    &gt; View research publication
                  </Link>
                </p>
                <p>
                  <Link href="/info" className="hover:underline">
                    &gt; Aditional information
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 text-center font-light">
        <p>
          Developed by: <span className="font-bold">Daniel Ramirez</span>
        </p>
        <p>
          <Link href="https://www.danielramirez.pro/" className="hover:underline text-sm opacity-80">
            https://www.danielramirez.pro/
          </Link>
        </p>
      </footer>
    </div>
  )
}

