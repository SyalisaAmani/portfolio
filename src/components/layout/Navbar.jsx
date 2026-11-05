import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../../context/useLanguage'
import translations from '../../data/translations'

const navLinks = [
  { key: 'home', path: '#home' },
  { key: 'projects', path: '#projects' },
  { key: 'about', path: '#about' },
  { key: 'skills', path: '#skills' },
  { key: 'education', path: '#education' },
  { key: 'contact', path: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const handleNavigation = (event, path) => {
    event.preventDefault()
    setIsMenuOpen(false)

    const targetId = path.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      window.history.replaceState(null, '', path)
    } else {
      window.location.assign(`/${path}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#17191D]/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 py-5">

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between md:flex">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(event) => handleNavigation(event, link.path)}
                className="text-sm text-text-secondary transition-colors duration-300 hover:text-primary"
              >
                {translations[language].nav[link.key]}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setLanguage('id')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                language === 'id'
                  ? 'bg-primary text-[#17191D]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ID
            </button>

            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-[#17191D]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex justify-end md:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-text-primary hover:bg-elevated"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-5 flex flex-col gap-5 border-t border-white/10 pt-6 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(event) => handleNavigation(event, link.path)}
                className="text-sm text-text-secondary transition-colors hover:text-primary"
              >
                {translations[language].nav[link.key]}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 border-t border-white/10 pt-5">
              <span className="mr-2 text-xs text-gray-400">
                Language:
              </span>

              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                  language === 'id'
                    ? 'bg-primary text-[#17191D]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                ID
              </button>

              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-primary text-[#17191D]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}

      </nav>
    </header>
  )
}

export default Navbar