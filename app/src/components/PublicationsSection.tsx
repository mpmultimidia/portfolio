const publications = [
  {
    title: "Suporte técnico e atendimento em automação comercial",
    date: "Experiência profissional",
    dateTime: "2025",
    description:
      "Práticas de suporte, atendimento ao cliente, gestão de SLA e implantação de sistemas para restaurantes e varejo.",
    href: "https://www.linkedin.com/in/marcos-a-machado/",
  },
  {
    title: "Infraestrutura, redes e segurança eletrônica",
    date: "Experiência profissional",
    dateTime: "2022",
    description:
      "Acompanhamento de redes, infraestrutura, CFTV, segurança e suporte técnico em ambientes corporativos e comerciais.",
    href: "https://www.linkedin.com/in/marcos-a-machado/",
  },
];

export function PublicationsSection() {
  return (
    <section
      id="publicacoes"
      className="content-section publications-section"
      aria-label="Publicações"
    >
      <div className="section-heading">
        <p className="section-kicker">Áreas de atuação</p>
        <h2>Publicações e destaques</h2>
        <p>
          Temas diretamente ligados a suporte técnico, automação comercial,
          infraestrutura e otimização de operações.
        </p>
      </div>
      <div className="publication-grid">
        {publications.map(({ title, date, dateTime, description, href }) => (
          <article className="publication-card" key={title}>
            <p className="publication-date">
              <time dateTime={dateTime}>{date}</time>
            </p>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={href} target="_blank" rel="noreferrer">
              Ler mais
              <span aria-hidden="true"> ↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
