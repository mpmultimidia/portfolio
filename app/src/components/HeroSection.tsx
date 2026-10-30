import profileImage from "../../../assets/img/portife2.jpg";

const expertise = [
  {
    label: "Suporte técnico N1/N2",
    icon: "M4 19V5m0 14h16M8 15l3-4 3 2 5-6",
  },
  {
    label: "Implantação de sistemas",
    icon: "M4 6h16v12H4zM4 10h16M8 15h3",
  },
  {
    label: "Automação comercial",
    icon: "M4 19V9h4v10m2 0V5h4v14m2 0v-7h4v7M2 20h20",
  },
  {
    label: "Redes e infraestrutura",
    icon: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm-8 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  },
  {
    label: "Delivery e integrações",
    icon: "M4 6h16v12H4zM4 10h16M8 15h3",
  },
  {
    label: "Impressoras fiscais",
    icon: "M7 6h10v5h2v8H5v-8h2V6Zm2 0V4h6v2m-2 7h2",
  },
  {
    label: "Certificados digitais",
    icon: "M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4",
  },
  {
    label: "Sistemas de faturamento",
    icon: "M5 5h14v14H5zM8 9h8M8 13h8M8 17h5",
  },
  {
    label: "CFTV e segurança",
    icon: "M4 17V7l8-4 8 4v10l-8 4-8-4Zm8-6v6m-4-3h8",
  },
  {
    label: "SQL Server",
    icon: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm-8 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6m-16 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  },
  {
    label: "Python",
    icon: "M9 3h6v4H9zm0 14h6v4H9zM5 8h14v8H5zm2 2v4h10v-4z",
  },
  {
    label: "Git + GitHub",
    icon: "M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 8v8m8-8v8m-8 0h8",
  },
];

function ExpertiseItems() {
  return expertise.map(({ label, icon }) => (
    <li className="expertise-item" key={label}>
      <svg
        className="expertise-icon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={icon} />
      </svg>
      <span>{label}</span>
    </li>
  ));
}

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-greeting">Olá, eu sou</p>
        <p className="portfolio-eyebrow">
          Analista de TI <span aria-hidden="true">·</span> Suporte técnico
          <span aria-hidden="true">·</span> Implantação de sistemas
          <span aria-hidden="true">·</span> Rio de Janeiro, RJ
        </p>
        <h1 id="hero-title">
          <span>Marcos Paulo</span>
          {" "}
          <span>Antunes Machado</span>
        </h1>
        <p className="portfolio-intro">
          Suporte técnico, automação comercial, redes, infraestrutura e
          implantação de sistemas com foco em atendimento, SLA e qualidade.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver experiência <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary" href="#contato">
            Entrar em contato
          </a>
        </div>
        <ul className="social-links" aria-label="Redes e contato">
          <li>
            <a
              href="https://www.linkedin.com/in/marcos-a-machado/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.5H7v11H3.4zm5.9 0h3.4V11h.1a3.7 3.7 0 0 1 3.3-1.8c3.5 0 4.2 2.3 4.2 5.3v6h-3.6v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.3z" />
              </svg>
              <span className="visually-hidden">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="mailto:manager.marcos.paulo@gmail.com">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span className="visually-hidden">Email</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5521974860902" target="_blank" rel="noreferrer">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
                <path d="M8 8.2c.5 3 2.3 4.8 5.3 5.4l1.1-1.2 2 .9c-.2 1.2-1.2 2.1-2.5 2-3.9-.4-6.9-3.4-7.3-7.3-.1-1.3.8-2.3 2-2.5l.9 2L8 8.2Z" />
              </svg>
              <span className="visually-hidden">WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>

      <aside className="profile-card" aria-label="Perfil profissional">
        <div className="profile-image-wrap">
          <img
            className="profile-image"
            src={profileImage}
            alt="Marcos Paulo Antunes Machado"
            fetchPriority="high"
          />
        </div>
        <div className="profile-details">
          <p className="profile-label">PERFIL PROFISSIONAL</p>
          <h2>Marcos Paulo Antunes Machado</h2>
          <p>Analista de TI · Suporte e implantação</p>
          <dl className="profile-facts">
            <div>
              <dt>Especialidade</dt>
              <dd>Suporte TI e sistemas</dd>
            </div>
            <div>
              <dt>Localização</dt>
              <dd>Rio de Janeiro – RJ</dd>
            </div>
            <div>
              <dt>Experiência</dt>
              <dd>+25 anos</dd>
            </div>
          </dl>
        </div>
      </aside>
    </section>
  );
}

export function ExpertiseStrip() {
  return (
    <section
      className="expertise-strip"
      aria-label="Tecnologias e competências"
    >
      <div className="expertise-track">
        <ul aria-label="Especialidades profissionais">
          <ExpertiseItems />
        </ul>
        <ul className="expertise-track-copy" aria-hidden="true">
          <ExpertiseItems />
        </ul>
      </div>
    </section>
  );
}
