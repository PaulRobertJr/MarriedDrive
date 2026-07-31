import Monogram from './Monogram.jsx'
import useInView from '../hooks/useInView.js'
import './Invitation.css'

function Invitation() {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`invitation${inView ? ' invitation--visible' : ''}`}
    >
      <div className="invitation__divider" aria-hidden="true">
        <span className="invitation__divider-line" />
        <Monogram size="2.5rem" />
        <span className="invitation__divider-line" />
      </div>

      <p className="invitation__text">
        Chegou o grande dia! 01 de novembro de 2026 vai ficar marcado —
        literalmente, olha a data aí em cima — como o dia em que a gente
        disse sim de vez.
      </p>

      <div
        className="invitation__divider invitation__divider--middle"
        aria-hidden="true"
      >
        <span className="invitation__divider-line" />
        <Monogram size="2rem" />
        <span className="invitation__divider-line" />
      </div>

      <p className="invitation__text">
        E como toda festa boa merece um álbum à altura, queremos as fotos
        que você tirar: as bonitas, as trapalhadas e aquele vídeo bizarro da
        pista de dança. Sobe tudo aqui, bora?
      </p>
    </section>
  )
}

export default Invitation
