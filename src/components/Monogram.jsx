import './Monogram.css'

function Monogram({ size = '8rem' }) {
  return (
    <svg
      className="monogram"
      style={{ width: size }}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Monograma Lauren e Geibson"
    >
      <circle className="monogram__ring" cx="60" cy="60" r="56" />
      <circle
        className="monogram__ring monogram__ring--inner"
        cx="60"
        cy="60"
        r="51"
      />
      <text
        className="monogram__text"
        x="60"
        y="72"
        textAnchor="middle"
        letterSpacing="3"
      >
        L &amp; G
      </text>
    </svg>
  )
}

export default Monogram
