const recentProjects = [
  {
    title: "Implantação de sistemas para restaurantes e varejo",
    category: "Suporte e automação comercial",
    startDate: "2025-02",
    startLabel: "fev/2025",
    description:
      "Atuação na implantação, configuração e treinamento de sistemas de automação comercial, com foco em atendimento a clientes, operação e redução de falhas no uso diário.",
    summary:
      "Entrega de suporte técnico com acompanhamento de SLA e orientação para uso de faturamento, estoque e relatórios gerenciais.",
    highlights: [
      "Configuração e treinamentos de usuários",
      "Suporte a impressoras de cupom e produção",
      "Integração com iFood, Keeta e Rappi",
      "Acompanhamento de incidentes e SLA",
      "Documentação de rotinas e operação do cliente",
    ],
    tools: ["Automação comercial", "Delivery", "Sistemas de faturamento"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver perfil no LinkedIn",
  },
  {
    title: "Infraestrutura, redes e suporte técnico",
    category: "TI · infraestrutura",
    description:
      "Trabalho em redes cabeadas e sem fio, administração de infraestrutura, suporte a usuários, manutenção de computadores e responsabilidade sobre segurança eletrônica e monitoramento de ambientes.",
    tools: ["Redes", "Windows Server", "CFTV", "VPN", "Help desk"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver perfil profissional",
  },
];

export function RecentProjects() {
  return (
    <div className="recent-projects">
      <p className="project-group-label">Projetos e entregas relevantes</p>
      <div className="project-grid project-grid--recent">
        {recentProjects.map((project) => (
          <article
            className="project-card project-card--recent"
            key={project.title}
          >
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            {project.startDate && (
              <p className="project-period">
                <time dateTime={project.startDate}>{project.startLabel}</time>
                {" – "}
                <span>o momento</span>
              </p>
            )}
            <p className="project-description">{project.description}</p>
            {project.summary && (
              <p className="project-description">{project.summary}</p>
            )}
            {project.highlights && (
              <>
                <p className="project-highlights-label">
                  Destaques da atuação:
                </p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
            <a
              className="text-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </a>
            {project.tools.length > 0 && (
              <ul className="project-tags" aria-label="Ferramentas do projeto">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
