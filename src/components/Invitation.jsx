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

      <p className="invitation__lead">Chegou o grande dia! ✨</p>

      <p className="invitation__text">
        O dia 01 de novembro de 2026 vai ficar para sempre na nossa memória.
        E queremos reviver cada momento pelos seus olhos!
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
        Fotografou? Filmou? Pegou aquele flagrante engraçado ou registrou um
        momento especial? Envie tudo por aqui! Vale as fotos lindas, os
        bastidores, as trapalhadas e até aquele vídeo caótico da pista de
        dança.
      </p>

      <p className="invitation__text">
        Mal podemos esperar para ver o casamento pela perspectiva de cada um
        de vocês. 🤎
      </p>

      <p className="invitation__signature">
        <span>Com carinho,</span>
        <span className="invitation__signature-name">Geibson &amp; Lauren</span>
      </p>
    </section>
  )
}

export default Invitation
