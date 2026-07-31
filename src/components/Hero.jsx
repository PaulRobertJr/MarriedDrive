import Monogram from './Monogram.jsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Overlay sobre a foto do casal. A imagem fica definida em Hero.css
          (background-image) e pode ser trocada por outra foto. */}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <Monogram size="clamp(5rem, 16vw, 8rem)" />
        <h1 className="hero__title">Geibson &amp; Lauren</h1>
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
