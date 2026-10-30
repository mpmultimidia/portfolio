interface Experience {
  title: string;
  company: string;
  periodStart: string;
  startDate: string;
  periodEnd: string;
  endDate?: string;
  current?: boolean;
  employmentType?: string;
  location?: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Analista de Suporte de Sistemas",
    company: "Altec Sistemas e Tecnologia",
    periodStart: "fev/2025",
    startDate: "2025-02",
    periodEnd: "mai/2026",
    endDate: "2026-05",
    employmentType: "Tempo integral",
    description:
      "Prestou suporte a clientes em sistemas de automação comercial utilizados por restaurantes e lojas.",
    achievements: [
      "Atendeu demandas de impressoras de cupom, impressoras de produção, redes e plataformas de delivery, incluindo iFood, Keeta e Rappi.",
      "Orientou usuários em rotinas de estoque, faturamento, relatórios gerenciais e DRE.",
      "Realizou instalação e configuração de certificados digitais, tratativas de SLA, implantação e treinamento de sistemas.",
    ],
  },
  {
    title: "Analista de TI",
    company: "Grupo Irajá",
    periodStart: "ago/2022",
    startDate: "2022-08",
    periodEnd: "jun/2024",
    endDate: "2024-06",
    description:
      "Controlou e abriu chamados relativos a ocorrências e falhas no sistema de automação comercial Teknisa e em soluções de segurança eletrônica.",
    achievements: [
      "Administrou contas de e-mail e registros de domínio do grupo.",
      "Acompanhou serviços prestados por fornecedores terceirizados de TI.",
      "Atuou no controle e gerenciamento de rede e segurança.",
    ],
  },
  {
    title: "Analista de TI | Técnico de Suporte Nível II",
    company: "TIVIT – Cliente SulAmérica",
    periodStart: "ago/2019",
    startDate: "2019-08",
    periodEnd: "ago/2022",
    endDate: "2022-08",
    description:
      "Prestou suporte técnico presencial a usuários e utilizou ServiceNow para gestão de chamados.",
    achievements: [
      "Acompanhou SLA, distribuiu chamados para técnicos Nível I e elaborou relatórios por fila.",
      "Configurou ramais IP, softphone Avaya, VPN Check Point e IBM Lotus Notes.",
      "Atuou em laboratório de TI com reparo de notebooks, aplicação de imagens e suporte a periféricos.",
      "Participou de projetos de atualização de Wi‑Fi e migração de Windows 7 para Windows 10.",
    ],
  },
  {
    title: "Analista de TI",
    company: "MP System",
    periodStart: "jan/2007",
    startDate: "2007-01",
    periodEnd: "dez/2017",
    endDate: "2017-12",
    description:
      "Realizou instalação, configuração e manutenção de sistemas e equipamentos de informática.",
    achievements: [
      "Desenvolveu e acompanhou projetos de redes cabeadas e sem fio.",
      "Atuou em instalações de câmeras de segurança, alarmes, sonorização e telefonia.",
      "Prestou suporte técnico e participou da comercialização de equipamentos.",
    ],
  },
  {
    title: "Supervisor de Suporte Técnico – Filial Rio de Janeiro",
    company: "Altec Sistemas e Tecnologia",
    periodStart: "abr/2011",
    startDate: "2011-04",
    periodEnd: "jan/2013",
    endDate: "2013-01",
    description:
      "Supervisionou e gerenciou o atendimento de suporte a clientes e as atividades da equipe técnica.",
    achievements: [
      "Conduziu instalação, configuração e treinamento do sistema próprio da empresa.",
      "Acompanhou infraestrutura de cabeamento de rede e redes sem fio em ambiente Windows.",
      "Atuou em planejamento e controle de estoque e financeiro.",
    ],
  },
  {
    title: "Suporte Técnico de Tecnologia da Informação – Nível II",
    company: "GRDJ Informática",
    periodStart: "ago/2006",
    startDate: "2006-08",
    periodEnd: "mar/2008",
    endDate: "2008-03",
    description:
      "Atuou em administração de redes, instalação, configuração e manutenção de computadores e sistemas corporativos.",
    achievements: [
      "Apoiou planejamento de estoque e controle financeiro.",
      "Realizou consultas e manipulação de banco de dados por scripts em Firebird/SQL.",
    ],
  },
];

export function JourneySection() {
  return (
    <section
      id="trajetoria"
      className="content-section journey-section"
      aria-label="Trajetória profissional"
    >
      <div className="section-heading">
        <p className="section-kicker">Experiência profissional</p>
        <h2>Trajetória profissional</h2>
        <p>
          Mais de 25 anos de atuação em suporte técnico, implantação de
          sistemas, redes, automação comercial e infraestrutura de TI.
        </p>
      </div>
      <ol className="experience-list" aria-label="Experiências profissionais">
        {experiences.map((experience, index) => (
          <li
            className={`experience-item experience-item--${index % 2 === 0 ? "right" : "left"}`}
            key={`${experience.company}-${experience.title}`}
          >
            <article>
              <p className="experience-period">
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
                <time dateTime={experience.startDate}>{experience.periodStart}</time>
                {" – "}
                {experience.endDate ? (
                  <time dateTime={experience.endDate}>{experience.periodEnd}</time>
                ) : (
                  <span>{experience.periodEnd}</span>
                )}
              </p>
              <div className="experience-heading">
                <h3>{experience.title}</h3>
                <p className="experience-company">
                  {experience.company}
                  {experience.employmentType && ` · ${experience.employmentType}`}
                </p>
                {experience.location && (
                  <p className="experience-location">{experience.location}</p>
                )}
              </div>
              <p className="experience-intro">{experience.description}</p>
              {experience.achievements.length > 0 && (
                <ul className="experience-achievements">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
