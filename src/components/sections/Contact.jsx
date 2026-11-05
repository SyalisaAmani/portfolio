
import { Mail, MessageCircle, ArrowUpRight, Check, Copy, Code2 } from 'lucide-react'
import {
  InstagramIcon,
  LinkedinIcon,
} from '../ui/SocialIcons'
import { useState } from 'react'
import { useLanguage } from '../../context/useLanguage'
import translations from '../../data/translations'

function Contact() {
 const { language } = useLanguage()
 const t = translations[language].contact

  const email = 'syalisaamani17@gmail.com'
  const whatsapp = '6281234348475'

  const [isCopied, setIsCopied] = useState(false)

  const whatsappMessage = encodeURIComponent(t.whatsappMessage
  )

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Gagal menyalin email:', error)
    }
  }

  return (
    <section id="contact" className="section-container">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#202328]/80 px-6 py-16 text-center shadow-[0_15px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl md:px-12 md:py-20">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#ef4444]/10 blur-[100px]" />

        {/* Content */}
        <div className="relative z-10">

          <h2 className="mx-auto max-w-3xl bg-linear-to-r from-[#4ade80] via-[#d1fae5] to-[#f87171] bg-clip-text text-3xl font-bold leading-tight tracking-tight text-transparent md:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
            {t.description}
          </p>

          {/* Contact Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#4ade80] to-[#16a34a] px-6 py-3.5 text-sm font-semibold text-[#101712] shadow-[0_0_20px_rgba(74,222,128,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(74,222,128,0.35)]"
            >
              <Mail size={18} />
              {t.emailMe}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:text-[#86efac]"
            >
              {isCopied ? (
                <>
                  <Check size={17} />
                  {t.emailCopied}
                </>
              ) : (
                <>
                  <Copy size={17} />
                  {t.copyEmail}
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:text-[#86efac]"
            >
              <MessageCircle size={17} />
              {t.whatsapp}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <p className="mt-10 font-mono text-xs text-gray-500">
            {t.closing}
          </p>

          {/* Social Links */}
          <div className="mt-10 border-t border-white/10 pt-7">
            <p className="mb-5 font-mono text-xs tracking-widest text-gray-500">
              {t.socialLabel}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/syalisa-amani-fatiha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.linkedinLabel}
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
              >
                <LinkedinIcon size={18} color="currentColor" />
                LinkedIn
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://github.com/SyalisaAmani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.githubLabel}
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
              >
                <Code2 size={18} />
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://www.instagram.com/syalisa.fa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.instagramLabel}
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
              >
                <InstagramIcon size={18} color="currentColor" />
                Instagram
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-[#4ade80] to-[#ef4444]" />
      </div>
    </section>
  )
}

export default Contact
