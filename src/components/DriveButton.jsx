import useInView from "../hooks/useInView.js";
import "./DriveButton.css";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1T8H4zoBhc9jxAiV98T4nfD4MRvDp-Uf2";

function DriveButton() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className={`drive${inView ? " drive--visible" : ""}`}>
      <p className="drive__hint">
        Clique no botão abaixo para acessar nosso álbum compartilhado
      </p>
      <a
        className="drive__button"
        href={DRIVE_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="drive__button-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 16V4m0 0 4 4m-4-4-4 4" />
          <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
        </svg>
        Enviar minhas fotos
      </a>
    </section>
  );
}

export default DriveButton;
