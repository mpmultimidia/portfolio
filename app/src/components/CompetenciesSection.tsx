const competencyGroups = [
  {
    title: "Suporte e atendimento",
    skills: [
      "Suporte técnico N1 e N2",
      "Atendimento a usuários e clientes",
      "Gestão de chamados",
      "Acompanhamento de SLA",
      "Incidentes e filas de suporte",
      "Atendimento presencial e remoto",
      "Relacionamento com fornecedores",
    ],
  },
  {
    title: "Implantação e treinamento",
    skills: [
      "Implantação de sistemas",
      "Configuração de parâmetros",
      "Treinamento de usuários",
      "Automação comercial",
      "Certificados digitais",
      "VPN e telefonia IP",
      "Softphones e ramais",
    ],
  },
  {
    title: "Infraestrutura e redes",
    skills: [
      "Redes cabeadas e sem fio",
      "Administração de redes",
      "Servidores e infraestrutura",
      "Windows Server",
      "Linux Ubuntu",
      "CFTV e segurança eletrônica",
      "Backup e monitoramento",
    ],
  },
  {
    title: "Sistemas e integrações",
    skills: [
      "Firebird",
      "SQL Server",
      "MySQL",
      "Microsoft Access",
      "FoxPro",
      "ServiceNow",
      "iFood",
      "Keeta",
      "Rappi",
      "Sistemas de faturamento e estoque",
      "DRE e relatórios gerenciais",
    ],
  },
];

const professionalSkills = [
  "Supervisão de equipe técnica",
  "Gestão de fornecedores",
  "Atendimento ao cliente",
  "Controle de SLA",
  "Resolução de incidentes",
  "Organização de suporte",
  "Planejamento e execução de implantação",
  "Administração de rede e infraestrutura",
  "Treinamento de usuários",
  "Acompanhamento de KPIs",
  "Boa comunicação técnica",
  "Trabalho em equipe",
];

export function CompetenciesSection() {
  return (
    <section
      id="competencias"
      className="content-section competencies-section"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Conhecimentos e atuação</p>
        <h2 id="skills-title">Skills &amp; competências</h2>
        <p>
          Atuação em suporte técnico, automação comercial, redes, infraestrutura
          e implantação de sistemas em ambientes corporativos e comerciais.
        </p>
      </div>
      <div className="skills-grid">
        <article className="skills-panel technical-skills">
          <div className="skills-panel-heading">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
              <circle cx="8" cy="5" r="2" fill="var(--surface)" />
              <circle cx="16" cy="12" r="2" fill="var(--surface)" />
              <circle cx="10" cy="19" r="2" fill="var(--surface)" />
            </svg>
            <h3>Conhecimentos técnicos</h3>
          </div>
          {competencyGroups.map((group) => (
            <div className="skill-category" key={group.title}>
              <h4>{group.title}</h4>
              <ul className="competency-tags">
                {group.skills.slice(0, 7).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              {group.skills.length > 7 && (
                <details className="additional-skills">
                  <summary>
                    {group.skills.length - 7} outras competências
                  </summary>
                  <ul className="competency-tags">
                    {group.skills.slice(7).map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </article>
        <article className="skills-panel professional-skills">
          <div className="skills-panel-heading">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M9 9h.01M15 9h.01M8.5 14c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2" />
            </svg>
            <h3>Competências profissionais</h3>
          </div>
          <ul className="professional-skill-tags">
            {professionalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <p className="skills-note">
            Resolução prática, suporte de excelência e execução estável em TI.
          </p>
        </article>
      </div>
    </section>
  );
}
