import type { FormEvent } from "react";
import { RecentProjects } from "./RecentProjects";

export function AboutSection() {
  return (
    <section id="sobre" className="content-section about-section">
      <div className="section-heading">
        <p className="section-kicker">Sobre</p>
        <h2>Atendimento técnico com visão de operação e qualidade.</h2>
      </div>
      <div className="about-content">
        <p>
          Profissional de TI com mais de 25 anos de experiência em suporte,
          implantação de sistemas, automação comercial, redes, infraestrutura e
          atendimento a usuários e clientes.
        </p>
        <p>
          Ao longo da carreira, atuei em ambientes de restaurantes, varejo,
          empresas de tecnologia e serviços de TI, com foco em estabilidade,
          SLA, treinamento e resolução de problemas em ambientes reais e com
          alto volume de demandas.
        </p>
        <div className="impact-grid" aria-label="Resultados profissionais">
          <article className="impact-item">
            <strong>25+</strong>
            <span>anos de experiência em TI e suporte técnico</span>
          </article>
          <article className="impact-item">
            <strong>N1/N2</strong>
            <span>atendimento em suporte técnico e gestão de chamados</span>
          </article>
          <article className="impact-item">
            <strong>Delivery</strong>
            <span>integração com iFood, Keeta e Rappi em operação comercial</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="content-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Experiência e atuação</p>
        <h2 id="projects-title">Projetos e entregas</h2>
        <p>
          Ideação, desenvolvimento e execução de projetos digitais com foco em
          produto, IA, operação, segurança, comunidade e soluções de impacto
          real para negócios e usuários.
        </p>
      </div>
      <RecentProjects />
      <p className="project-group-label">Visão geral de soluções digitais</p>
      <div className="project-grid">
        <article className="project-card">
          <p className="project-category">IA e produto</p>
          <h3>Anjo contra violência doméstica</h3>
          <p>
            Conceito de aplicativo voltado à proteção e suporte em situações de
            violência doméstica, com foco em acolhimento e segurança comunitária.
          </p>
          <ul className="project-tags" aria-label="Tecnologias utilizadas">
            {["UX", "Segurança", "IA", "Impacto social"].map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
        <article className="project-card">
          <p className="project-category">SaaS e operação</p>
          <h3>GACFOOD e seus módulos</h3>
          <p>
            Ecossistema para bares e restaurantes com operações de compras,
            reservas, entregas e gestão do negócio em uma mesma solução.
          </p>
          <ul className="project-tags" aria-label="Tecnologias utilizadas">
            {[
              "GACFOOD",
              "Compras",
              "Reservas",
              "Entregas",
              "Logística",
            ].map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export function buildContactMailto({
  name,
  email,
  message,
}: ContactMessage): string {
  const body = [`Nome: ${name}`, `Email: ${email}`, "", "Mensagem:", message].join(
    "\n",
  );
  const query = new URLSearchParams({
    subject: "Contato pelo portfólio",
    body,
  });

  return `mailto:manager.marcos.paulo@gmail.com?${query.toString()}`;
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    throw new TypeError("Os campos do formulário de contato são inválidos.");
  }

  window.location.href = buildContactMailto({ name, email, message });
}

export function ContactSection() {
  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-card">
        <div className="contact-copy">
          <p className="section-kicker">Vamos conversar</p>
          <h2 id="contact-title">Entre em contato</h2>
          <p>
            Para falar sobre suporte técnico, implantação de sistemas, redes,
            automação comercial e infraestrutura, use os canais abaixo.
          </p>
          <div className="contact-links">
            <a href="mailto:manager.marcos.paulo@gmail.com">
              <span aria-hidden="true">✉</span>
              manager.marcos.paulo@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-a-machado/"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">in</span>
              LinkedIn
            </a>
            <a href="https://wa.me/5521974860902" target="_blank" rel="noreferrer">
              <span aria-hidden="true">↗</span>
              WhatsApp
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          aria-label="Envie uma mensagem"
          onSubmit={handleContactSubmit}
        >
          <div className="form-field">
            <label htmlFor="contact-name">Seu nome</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={80}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Seu e-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              maxLength={4000}
              required
            />
          </div>
          <button className="contact-submit" type="submit">
            Abrir aplicativo de e-mail
            <span aria-hidden="true">↗</span>
          </button>
          <p className="contact-form-note">
            O botão abre seu aplicativo de e-mail com os dados preenchidos. A
            mensagem só é enviada por você.
          </p>
        </form>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            MM
          </span>
          <span>
            <strong>Marcos Paulo Antunes Machado</strong>
            <small>Analista de TI</small>
          </span>
        </a>
        <a className="back-to-top" href="#inicio">
          Voltar ao início <span aria-hidden="true">↑</span>
        </a>
      </div>
      <nav className="footer-navigation" aria-label="Navegação do rodapé">
        {[
          ["#inicio", "Início"],
          ["#sobre", "Sobre"],
          ["#formacao", "Educação"],
          ["#competencias", "Skills"],
          ["#trajetoria", "Carreira"],
          ["#projetos", "Projetos"],
          ["#publicacoes", "Publicações"],
          ["#contato", "Contato"],
        ].map(([href, label]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Marcos Paulo Antunes Machado. Todos os
          direitos reservados.
        </p>
        <p>Analista de TI · Rio de Janeiro – RJ</p>
        <nav className="footer-social" aria-label="Redes sociais no rodapé">
          <a
            href="https://www.linkedin.com/in/marcos-a-machado/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.5H7v11H3.4zm5.9 0h3.4V11h.1a3.7 3.7 0 0 1 3.3-1.8c3.5 0 4.2 2.3 4.2 5.3v6h-3.6v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.3z" />
            </svg>
          </a>
          <a href="mailto:manager.marcos.paulo@gmail.com" aria-label="E-mail">
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
          </a>
          <a
            href="https://wa.me/5521974860902"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer"
          >
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
          </a>
        </nav>
      </div>
    </footer>
  );
}
