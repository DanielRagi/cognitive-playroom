import Link from "next/link"

export function Header() {
  return (
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
            <Link target="_blank" href="https://doi.org/10.54941/ahfe1004501" className="hover:opacity-80 transition-opacity">
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
  )
}

