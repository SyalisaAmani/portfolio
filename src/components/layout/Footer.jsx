function Footer() {
    const currentYear = new Date().getFullYear()

    return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

        {/* Logo */}
        <p className="font-heading text-lg font-bold">
          Syalisa<span className="text-primary">.</span>
        </p>

        {/* Copyright */}
        <p className="text-center text-sm text-text-secondary">
          © {currentYear} Syalisa. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#top"
          className="text-sm text-text-secondary transition-colors hover:text-primary"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}

export default Footer