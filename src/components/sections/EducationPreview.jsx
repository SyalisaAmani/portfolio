
import { useState, useEffect } from 'react'
import { GraduationCap, Award, X, ZoomIn } from 'lucide-react'
import BNSP from '../../assets/images/sertificates/BNSP.webp'
import Revou from '../../assets/images/sertificates/RevoU.webp'
import { useLanguage } from '../../context/useLanguage'
import translations from '../../data/translations'

const certifications = [
  {
    id: 1,
    name: 'Software Engineering Bootcamp',
    issuer: 'RevoU Indonesia',
    date: 'Oktober 2026',
    description:
      'Program intensif pengembangan perangkat lunak yang membahas dasar pemrograman, pengembangan web, dan praktik software engineering.',
    image: Revou,
  },
  {
    id: 2,
    name: 'Basic Office Operator',
    issuer: 'BNSP',
    date: '2023',
    description:
      'Sertifikasi kompetensi pengoperasian aplikasi perkantoran, meliputi Microsoft Word, Excel, dan PowerPoint.',
    image: BNSP,
  },
]

function EducationPreview() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const { language } = useLanguage()
  const t = translations[language].education
  const localizedCertifications = certifications.map((certificate) => {
  const certificateTranslation =
    certificate.id === 1 ? t.certificates.revou : t.certificates.bnsp

  return {
    ...certificate,
    ...certificateTranslation,
  }
})

  useEffect(() => {
    if (!selectedCertificate) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCertificate])

  return (
    <section id="education" className="section-container">
      {/* Section Heading */}
      <div className="mb-14 flex flex-col items-center text-center">
        <h2 className="w-full bg-linear-to-r from-[#4ade80] via-[#d1fae5] to-[#f87171] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
          {t.title}
        </h2>

        <p className="mt-5 w-full max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
          {t.description}
        </p>

        <div className="mt-6 h-0.75 w-16 rounded-full bg-linear-to-r from-[#4ade80] to-[#ef4444]" />
      </div>

      {/* Education */}
      <div className="mb-14">
        <div className="mb-6 flex items-center justify-center gap-3">
          <GraduationCap size={23} className="text-primary" />
          <h3 className="text-xl font-semibold text-white">
            {t.educationLabel}
          </h3>
        </div>

        <div className="group relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#202328]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_35px_rgba(74,222,128,0.08)] md:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-mono text-xs tracking-widest text-primary/70">
                2021 — 2025
              </span>

              <h4 className="mt-3 text-xl font-bold text-white">
                UIN Walisongo Semarang
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                {t.degree}
              </p>
            </div>

            <div className="w-fit rounded-xl border border-primary/20 bg-primary/5 px-5 py-3">
              <p className="font-mono text-xs text-gray-400">
                GPA
              </p>
              <p className="mt-1 text-2xl font-bold text-[#86efac]">
                3.88
                <span className="text-sm font-normal text-gray-500">
                  /4.00
                </span>
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linaer-to-r from-[#4ade80] via-[#86efac] to-[#ef4444] opacity-60" />
        </div>
      </div>

      {/* Certifications */}
      <div>
        <div className="mb-6 flex items-center justify-center gap-3">
          <Award size={23} className="text-primary" />
          <h3 className="text-xl font-semibold text-white">
            {t.certificateLabel}
          </h3>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
          {localizedCertifications.map((certificate, index) => (
            <article
              key={certificate.id}
              className="group relative w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#202328]/80 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_12px_35px_rgba(74,222,128,0.10)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-primary/70">
                  CERTIFICATE / {String(index + 1).padStart(2, '0')}
                </span>

                <Award
                  size={18}
                  className="text-primary/70"
                />
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="group/image relative block aspect-4/3 w-full overflow-hidden rounded-xl border border-white/10 bg-[#17191D] p-2"
                aria-label={`${t.viewCertificate} ${certificate.name}`}
              >
                <img
                  src={certificate.image}
                  alt={`Sertifikat ${certificate.name}`}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover/image:scale-105"
                />

                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/image:bg-black/40">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 transition-opacity duration-300 group-hover/image:opacity-100"
                  />
                </span>
              </button>

              <div className="relative z-10 mt-5">
                <h4 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-[#86efac]">
                  {certificate.name}
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  {certificate.issuer}
                </p>

                <p className="mt-3 font-mono text-xs text-[#86efac]">
                  {certificate.date}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {certificate.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-[#4ade80] via-[#86efac] to-[#ef4444] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Sertifikat ${selectedCertificate.name}`}
            className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#202328] p-5 shadow-2xl md:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:border-primary/40 hover:text-primary"
              aria-label={t.closeCertificate}
            >
              <X size={20} />
            </button>

            <div className="flex min-h-55 items-center justify-center rounded-xl bg-[#17191D] p-3 pt-12 md:min-h-100">
              <img
                src={selectedCertificate.image}
                alt={`${t.viewCertificate} ${selectedCertificate.name}`}
                className="max-h-[65vh] max-w-full rounded-lg object-contain"
              />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-lg font-semibold text-white">
                {selectedCertificate.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {selectedCertificate.issuer} · {selectedCertificate.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default EducationPreview
