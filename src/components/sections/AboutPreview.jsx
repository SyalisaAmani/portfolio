import { useEffect, useState } from 'react'
import { useLanguage } from '../../context/useLanguage'
import translations from '../../data/translations'

function AboutPreview() {
  const [displayedText, setDisplayedText] = useState('')
  const { language } = useLanguage()
  const t = translations [language].about
  const aboutText = t.description

  useEffect(() => {
    let index = 0

    const typingInterval = setInterval(() => {
      index += 1
      setDisplayedText(aboutText.slice(0, index))

      if (index >= aboutText.length) {
        clearInterval(typingInterval)
      }
    }, 60)

    return () => clearInterval(typingInterval)
  }, [aboutText])

  return (
    <section id="about" className="section-container">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* Section Label */}
        <span className="mb-10 font-mono text-xs tracking-[0.3em] text-primary/60">
          {t.label}
        </span>

        {/* Quote */}
        <div className="about-quote-float relative px-5">

          {/* Opening Quote */}
          <span className="absolute -left-2 -top-12 font-serif text-6xl text-primary/30 md:-left-8 md:-top-14 md:text-8xl">
            “
          </span>

          <blockquote
            aria-label={aboutText}
            className="font-mono text-base leading-loose text-[#86efac] drop-shadow-[0_0_12px_rgba(74,222,128,0.15)] md:text-xl md:leading-[2.2]"
          >
            {displayedText}
            <span className="typing-cursor ml-1 inline-block text-primary">
              |
            </span>
          </blockquote>

          {/* Closing Quote */}
          <span className="absolute -bottom-14 -right-2 font-serif text-6xl text-primary/30 md:-bottom-16 md:-right-8 md:text-8xl">
            ”
          </span>

        </div>

        {/* Decorative Line */}
        <div className="mt-20 h-0.5 w-20 rounded-full bg-linear-to-r from-transparent via-[#4ade80] to-transparent" />

      </div>
    </section>
  )
}

export default AboutPreview
