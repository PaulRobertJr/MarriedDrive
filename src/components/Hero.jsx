import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Overlay escuro sutil (placeholder). Quando a foto do casal estiver
          disponível, troque background-color por background-image no CSS:
          background-image: url('/assets/casal.jpg'); */}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <svg
          className="hero__monogram"
          viewBox="0 0 120 120"
          role="img"
          aria-label="Monograma Lauren e Geibson"
        >
          <circle className="hero__monogram-ring" cx="60" cy="60" r="56" />
          <circle
            className="hero__monogram-ring hero__monogram-ring--inner"
            cx="60"
            cy="60"
            r="51"
          />
          <text
            className="hero__monogram-text"
            x="60"
            y="72"
            textAnchor="middle"
            letterSpacing="3"
          >
            L &amp; G
          </text>
        </svg>

        <h1 className="hero__title">Lauren &amp; Geibson</h1>
        <p className="hero__date">01 de novembro de 2026</p>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-label">role para baixo</span>
        <svg
          className="hero__scroll-arrow"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 5v14m0 0 6-6m-6 6-6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
