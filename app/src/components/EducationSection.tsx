export function EducationSection() {
  return (
    <section
      id="formacao"
      className="content-section education-section"
      aria-labelledby="education-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Formação</p>
        <h2 id="education-title">Formação acadêmica</h2>
        <p>
          Formação em Computação e Administração com foco em infraestrutura,
          sistemas e gestão de TI.
        </p>
      </div>
      <article className="education-card">
        <div className="education-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m2 9 10-5 10 5-10 5L2 9Z" />
            <path d="M6 11v5c3.5 2.7 8.5 2.7 12 0v-5M22 9v6" />
          </svg>
        </div>
        <div className="education-card-heading">
          <div>
            <h3>Ciência da Computação</h3>
            <p>Universidade Estácio de Sá</p>
          </div>
          <p className="education-period">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 10h18" />
            </svg>
            <span>Curso não concluído</span>
          </p>
        </div>
      </article>
      <article className="education-card">
        <div className="education-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m2 9 10-5 10 5-10 5L2 9Z" />
            <path d="M6 11v5c3.5 2.7 8.5 2.7 12 0v-5M22 9v6" />
          </svg>
        </div>
        <div className="education-card-heading">
          <div>
            <h3>Técnico em Administração de Empresas</h3>
            <p>Escola Técnica Juscelino Kubitschek</p>
          </div>
          <p className="education-period">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 10h18" />
            </svg>
            <span>Com ênfase em Informática</span>
          </p>
        </div>
      </article>
    </section>
  );
}
