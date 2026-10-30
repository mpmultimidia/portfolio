const recommendations = [
  {
    text: "Profissional com forte senso de responsabilidade, atendimento e solução de problemas em ambientes de suporte técnico e infraestrutura.",
    author: "Perfil profissional",
  },
  {
    text: "Experiência consolidada em apoio a usuários, implantação de sistemas, manutenção de redes e suporte a negócios de varejo e restaurantes.",
    author: "Visão de carreira",
  },
  {
    text: "Atuação prática em automação comercial, certificação digital, SLAs, integração de delivery e operação de TI em campo.",
    author: "Áreas de atuação",
  },
  {
    text: "Perfil técnico com boa comunicação, organização de demandas e capacidade de atuar em diferentes níveis de suporte e infraestrutura.",
    author: "Competências",
  },
  {
    text: "Foco em atendimento, estabilidade operacional e execução eficiente de tarefas críticas em ambientes corporativos.",
    author: "Resumo profissional",
  },
  {
    text: "Atenção à qualidade, processos e suporte contínuo, essencial para ambientes com alta demanda e SLA rigoroso.",
    author: "Perfil técnico",
  },
];

export function RecommendationsSection() {
  return (
    <section
      className="content-section recommendations-section"
      aria-labelledby="recommendations-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Resumo</p>
        <h2 id="recommendations-title">Perfil profissional</h2>
        <p>Competências e qualidades que reforçam a atuação em suporte, infraestrutura e implantação.</p>
      </div>
      <div className="recommendation-grid">
        {recommendations.map(({ text, author }) => (
          <article className="recommendation-card" key={author}>
            <blockquote>
              <p>“{text}”</p>
            </blockquote>
            <p className="recommendation-author">{author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
