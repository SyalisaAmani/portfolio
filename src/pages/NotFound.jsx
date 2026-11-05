import { useLanguage } from '../context/useLanguage'
import translations from '../data/translations'

function NotFound() {
  const { language } = useLanguage()
  const t = translations[language].notFound

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-mono tracking-[0.3em] text-green-400 mb-4">
          ERROR 404
        </p>

        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-white mb-3">
          {t.title}
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-8">
          {t.description}
        </p>

        <a
          href="/#home"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition-colors"
        >
          {t.button}
        </a>
      </div>
    </section>
  )
}

export default NotFound