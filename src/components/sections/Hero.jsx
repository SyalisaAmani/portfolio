import { ArrowUpRight, Mail } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { useLanguage } from '../../context/useLanguage'
import translations from '../../data/translations'

function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">

        {/* Name */}
        <Reveal delay={0}>
          <h1 className="hero-name">
            Syalisa
          </h1>
        </Reveal>

        {/* Profession */}
        <Reveal delay={0.2}>
          <p className="hero-role">
            {t.role}
          </p>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.4}>
          <p className="hero-tagline">
            {t.tagline}
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.6}>
          <div className="hero-actions">
            <a href="#projects" className="hero-button-primary">
              {t.viewProjects}
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="hero-button-secondary">
              {t.contactMe}
              <Mail size={17} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default Hero