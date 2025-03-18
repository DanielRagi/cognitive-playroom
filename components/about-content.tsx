import Image from "next/image"
import Link from "next/link"

export function AboutContent() {
  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            Cognitive Videogame: Research Result in Cognitive Stimulation for Early-Stage Alzheimer&apos;s Disease.
          </h1>
          <p className="text-lg font-light italic">
            This is the result of an academic research initiative led by Politécnico Colombiano Jaime Isaza Cadavid and
            Universidad de Antioquia, aimed at strengthening primary cognitive abilities in people with Alzheimer&apos;s
            disease.
          </p>
        </header>

        <div className="mb-10 bg-[#d9d9d9] overflow-hidden">
          <Image
            src="/blog-img.png?placeholder.svg?height=400&width=1000"
            alt="Cognitive game interface showing pattern matching exercise"
            width={1000}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4">Why this project?</h2>
          <p className="font-light mb-4">
            This project was developed as part of a research initiative involving Politécnico Colombiano Jaime Isaza
            Cadavid and Universidad de Antioquia, funded by the Ministry of Science, Technology, and Innovation
            (MinTIC). Cognitive stimulation is a key non-pharmacological approach to Alzheimer&apos;s treatment.
            However, traditional therapies can often be unenaging or difficult to access, especially for individuals
            living in remote areas or facing mobility challenges. That&apos;s why we developed an interactive video game
            that not only provides cognitive benefits but is also accessible from any computer with an internet
            connection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4">Who is this game for?</h2>
          <p className="font-light mb-4">
            This game is designed for patients in the early stages of Alzheimer&apos;s, meaning those who can still
            read, interact with a computer, and follow guided tasks. The goal is to slow down cognitive decline by
            providing engaging and effective mental training. Developed with input from experts in neuroscience,
            psychology, and Alzheimer&apos;s patient care, this game ensures that every mechanic is backed by scientific
            principles of cognitive stimulation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4">Research results</h2>
          <p className="font-light mb-4">
            During testing, early-stage Alzheimer&apos;s patients interacted with the game and showed high acceptance.
            Even those with little or no prior computer experience found it easy and engaging, which helps encourage
            long-term adherence to cognitive stimulation therapy. Caregivers also observed increased patient interest, a
            crucial factor in ensuring consistent engagement with the game over time.
          </p>
          <p className="font-light mb-4">
            You can visit the research paper by clicking{" "}
            <Link target="_blank" href="https://doi.org/10.54941/ahfe1004501" className="font-black hover:underline">
              here
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-black mb-4">Where can I play it?</h2>
          <p className="font-light mb-4">
            You can currently try a demo of the research-based video game on this website. For privacy and
            confidentiality reasons, the full version cannot be publicly released at this time.
          </p>
          <div className="mt-6">
            <Link
              href="/play"
              className="whitespace-nowrap bg-[#d9d9d9] text-[#0d2425] font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity inline-block"
            >
              PLAY DEMO
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}

