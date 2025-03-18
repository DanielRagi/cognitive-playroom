import Link from "next/link"

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-6 text-center font-light">
      <p>
        Developed by: <span className="font-bold">Daniel Ramirez</span>
      </p>
      <p>
        <Link href="https://www.danielramirez.pro/" target="_blank" className="hover:underline text-sm opacity-80">
          https://www.danielramirez.pro/
        </Link>
      </p>
    </footer>
  )
}

