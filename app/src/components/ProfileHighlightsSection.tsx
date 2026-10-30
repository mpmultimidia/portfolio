const services = [
  "Suporte técnico N1 e N2",
  "Implantação e treinamento de sistemas",
  "Automação comercial para restaurantes e varejo",
  "Gestão de chamados, incidentes e SLA",
  "Redes cabeadas e sem fio",
  "Infraestrutura de servidores e ambientes Windows",
  "Segurança eletrônica e CFTV",
  "Integrações com iFood, Keeta e Rappi",
  "Sistemas de faturamento, estoque e relatórios",
  "Administração de certificados digitais e VPN",
];

const credentials = [
  ["Scrum", "TIVIT Academy", "2022", "2022"],
  ["Azure", "TIVIT Academy", "2022", "2022"],
  ["LGPD", "TIVIT Academy", "2022", "2022"],
  ["Power BI", "TIVIT Academy", "2022", "2022"],
  ["Inteligência Artificial", "TIVIT Academy", "2022", "2022"],
  ["Código de Conduta", "TIVIT Academy", "2022", "2022"],
  ["Gerenciamento de Incidentes", "TIVIT Academy", "2022", "2022"],
  ["Gerenciamento de SLA", "TIVIT Academy", "2022", "2022"],
  ["Linux Básico", "TIVIT Academy", "2022", "2022"],
  ["MACOS2015 Básico/Intermediário", "TIVIT Academy", "2022", "2022"],
  ["Salesforce", "TIVIT Academy", "2022", "2022"],
  ["Phishing e Smishing", "TIVIT Academy", "2022", "2022"],
  ["Windows Server 2005/2008/2012", "Microsoft / suporte técnico", "2025", "2025"],
  ["Linux – Ubuntu", "Treinamento técnico", "2025", "2025"],
  ["Microsoft Office 2010/365", "Microsoft", "2025", "2025"],
  ["CFTV", "Especialização técnica", "2025", "2025"],
  ["Programação, operação e digitação em microcomputadores", "Formação técnica", "2025", "2025"],
  ["Mecanografia e processamento de dados", "Formação técnica", "2025", "2025"],
  ["Teoria de Marketing e Economia", "Formação técnica", "2025", "2025"],
  ["Firebird, SQL Server, MySQL, Access e FoxPro", "Banco de dados", "2025", "2025"],
].map(([title, provider, date, dateTime]) => ({
  title,
  provider,
  date,
  dateTime,
}));

export function ProfileHighlightsSection() {
  return (
    <section
      id="atuacao-ampliada"
      className="content-section profile-highlights-section"
      aria-labelledby="profile-highlights-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Atuação profissional</p>
        <h2 id="profile-highlights-title">Serviços e formação complementar</h2>
        <p>
          Atendimento técnico, implantação, suporte em infraestrutura e
          automação comercial com foco em eficiência operacional.
        </p>
      </div>

      <section className="profile-services" aria-label="Serviços prestados">
        <h3>Serviços prestados</h3>
        <ul className="service-tags">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section
        className="profile-learning"
        aria-label="Formação complementar em destaque"
      >
        <div className="profile-learning-heading">
          <h3>Cursos e credenciais</h3>
          <p>Conhecimentos técnicos e de formação complementares.</p>
        </div>
        <ul className="learning-grid">
          {credentials
            .slice(0, 6)
            .map(({ title, provider, date, dateTime }) => (
              <li className="learning-card" key={title}>
                <h4>{title}</h4>
                <p>{provider}</p>
                <time dateTime={dateTime}>{date}</time>
              </li>
            ))}
        </ul>
        <details className="additional-learning">
          <summary>Ver demais cursos e credenciais</summary>
          <ul className="learning-grid">
            {credentials
              .slice(6)
              .map(({ title, provider, date, dateTime }) => (
                <li className="learning-card" key={title}>
                  <h4>{title}</h4>
                  <p>{provider}</p>
                  <time dateTime={dateTime}>{date}</time>
                </li>
              ))}
          </ul>
        </details>
      </section>
    </section>
  );
}
