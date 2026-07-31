import Monogram from './Monogram.jsx'
import './Invitation.css'

function Invitation() {
  return (
    <section className="invitation">
      <div className="invitation__divider" aria-hidden="true">
        <span className="invitation__divider-line" />
        <Monogram size="2.5rem" />
        <span className="invitation__divider-line" />
      </div>

      <p className="invitation__text">
        Depois de tantas histórias juntas, começamos uma nova — e queremos
        guardar cada momento que vocês registrarem com a gente. Suba aqui as
        fotos que tirar da festa.
      </p>
    </section>
  )
}

export default Invitation
