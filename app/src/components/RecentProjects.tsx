type ProjectEntry = {
  title: string;
  category: string;
  description: string;
  startDate?: string;
  startLabel?: string;
  summary?: string;
  highlights?: string[];
  tools: string[];
  href: string;
  linkLabel: string;
};

const recentProjects: ProjectEntry[] = [
  {
    title: "Anjo contra violência doméstica",
    category: "Impacto social",
    description:
      "Idealização de um aplicativo voltado à proteção de mulheres e famílias em situações de violência doméstica em Belém do Pará, com foco em acolhimento, denúncia e apoio comunitário.",
    tools: ["UX", "Segurança", "IA", "Impacto social"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver perfil do idealizador",
  },
  {
    title: "GACFOOD",
    category: "SaaS para bares e restaurantes",
    description:
      "Ecossistema de software para bares e restaurantes, incluindo GACFOOD, GACFOOD Compras, GACFOOD Reservas e GACFOOD Entregas, centralizando operação, compras, reservas e logística de entregas.",
    tools: ["B2B", "Marketplace", "Operação", "Logística", "PostgreSQL 18"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver solução em contexto",
  },
  {
    title: "Radio Serrana WEB FM",
    category: "Rádio digital com IA",
    description:
      "Plataforma de rádio digital com programação assistida por IA para curadoria de conteúdo e experiência de audiência mais dinâmica e automatizada.",
    tools: ["Streaming", "IA Generativa", "Automação", "Conteúdo"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver mais sobre o projeto",
  },
  {
    title: "Radio Samaúma WEB FM",
    category: "Rádio digital com IA",
    description:
      "Sistema de rádio digital com programação inteligente, automação operacional e melhor experiência para gestão de conteúdo e audiência.",
    tools: ["Streaming", "IA", "Programação", "Audiência"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver mais sobre o projeto",
  },
  {
    title: "StudioHair",
    category: "Aplicativo de gestão",
    description:
      "Aplicativo de gestão para salões de beleza, com foco em agendamento, operação, clientes, serviços e produtividade da equipe.",
    tools: ["Beauty-tech", "Agendamentos", "Gestão", "Clientes"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver projeto de gestão",
  },
  {
    title: "RADAR SEGURO",
    category: "Colaboração em tempo real",
    description:
      "Aplicativo colaborativo por mapas em tempo real para compartilhamento de ocorrências de violência, riscos e problemas locais em comunidades.",
    tools: ["Mapas", "Comunidade", "Tempo real", "Segurança"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver projeto de mapa social",
  },
  {
    title: "AQUIAOLADO",
    category: "Marketplace local",
    description:
      "Portal de profissionais e serviços por região, conectando pessoas a qualificações, avaliações e serviços locais com melhor descoberta.",
    tools: ["Marketplace", "Localização", "Avaliações", "Serviços"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver plataforma por região",
  },
  {
    title: "PALCONET",
    category: "Descoberta de artistas",
    description:
      "Plataforma criada para informar tudo sobre músicos e bandas, com compartilhamento por QR Code de releases, repertório e agenda de shows.",
    tools: ["QR Code", "Musica", "Agenda", "Conteúdo"],
    href: "https://www.linkedin.com/in/marcos-a-machado/",
    linkLabel: "Ver experiência de descoberta",
  },
  {
    title: "Stack de IA aplicada",
    category: "Ferramentas e IA",
    description:
      "Uso de ChatGPT, Claude Code, Manus, VS Code, PostgreSQL 18, Gemini AI, Lovable e Base44 para acelerar construção, prototipagem e execução de produtos digitais.",
    tools: ["ChatGPT", "Claude Code", "Manus", "VS Code", "Gemini AI", "Lovable", "Base44"],
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
