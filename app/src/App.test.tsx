import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";
import { buildContactMailto } from "./components/PortfolioSections";

describe("portfolio application shell", () => {
  afterEach(() => {
    cleanup();
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("renders the current resume owner as the prominent page identity", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Marcos Paulo Antunes Machado/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Analista de TI/i).length).toBeGreaterThan(0);
  });

  it("provides navigation links whose targets exist on the page", () => {
    render(<App />);

    const navigation = screen.getByRole("navigation", {
      name: "Navegação principal",
    });

    for (const label of [
      "Sobre",
      "Carreira",
      "Projetos",
      "Publicações",
      "Contato",
      "Educação",
      "Skills",
    ]) {
      const link = within(navigation).getByRole("link", { name: label });
      const targetId = link.getAttribute("href")?.slice(1);
      expect(targetId).toBeTruthy();

      if (targetId) {
        expect(document.getElementById(targetId)).toBeInTheDocument();
      }
    }
  });

  it("uses the portfolio header and quick navigation for the current profile", () => {
    render(<App />);

    expect(
      screen.getByRole("link", {
        name: /Marcos Paulo Antunes Machado, início/i,
      }),
    ).toHaveTextContent("Portfólio");

    const quickNav = screen.getByRole("navigation", {
      name: "Navegação rápida",
    });
    for (const label of [
      "Início",
      "Sobre",
      "Educação",
      "Skills",
      "Carreira",
      "Contato",
    ]) {
      expect(within(quickNav).getByRole("link", { name: label })).toHaveAttribute(
        "href",
      );
    }
    expect(quickNav.querySelectorAll("svg")).toHaveLength(6);
  });

  it("renders the hero content and contact links with the actual profile details", () => {
    render(<App />);

    expect(screen.getByText("Olá, eu sou")).toBeInTheDocument();
    expect(
      screen.getAllByText(
        /Suporte técnico, automação comercial, redes, infraestrutura/i,
      ).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole("img", { name: "Marcos Paulo Antunes Machado" }),
    ).toBeInTheDocument();

    const socialLinks = screen.getByRole("list", { name: "Redes e contato" });
    expect(
      within(socialLinks).getByRole("link", { name: "LinkedIn" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/marcos-a-machado/");
    expect(
      within(socialLinks).getByRole("link", { name: "Email" }),
    ).toHaveAttribute("href", "mailto:manager.marcos.paulo@gmail.com");
    expect(
      within(socialLinks).getByRole("link", { name: "WhatsApp" }),
    ).toHaveAttribute("href", "https://wa.me/5521974860902");
  });

  it("shows the current technical expertise and experience sections", () => {
    render(<App />);

    const expertise = screen.getByRole("region", {
      name: "Tecnologias e competências",
    });
    const list = within(expertise).getByRole("list", {
      name: "Especialidades profissionais",
    });

    for (const skill of [
      "Suporte técnico N1/N2",
      "Implantação de sistemas",
      "Automação comercial",
      "Redes e infraestrutura",
      "Delivery e integrações",
      "SQL Server",
      "Python",
    ]) {
      expect(within(list).getByText(skill)).toBeInTheDocument();
    }

    const journey = screen.getByRole("region", {
      name: "Trajetória profissional",
    });
    expect(journey).toHaveTextContent("Analista de Suporte de Sistemas");
    expect(journey).toHaveTextContent("Altec Sistemas e Tecnologia");
    expect(journey).toHaveTextContent("iFood");
    expect(journey).toHaveTextContent("Keeta");
    expect(journey).toHaveTextContent("Rappi");
  });

  it("uses the system color preference when there is no saved theme", () => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: () => ({ matches: true }),
    });

    render(<App />);

    expect(document.documentElement).toHaveClass("dark");
    expect(
      screen.getByRole("button", { name: "Ativar tema claro" }),
    ).toBeInTheDocument();
  });

  it("toggles and persists the selected theme", () => {
    localStorage.setItem("theme", "light");
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Ativar tema escuro" }));

    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: "Ativar tema claro" }),
    ).toBeInTheDocument();
  });

  it("opens and closes the mobile navigation", () => {
    render(<App />);
    const menuButton = screen.getByRole("button", { name: "Abrir menu" });

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const navigation = screen.getByRole("navigation", {
      name: "Navegação principal",
    });
    fireEvent.click(within(navigation).getByRole("link", { name: "Projetos" }));
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("displays the real education, competence groups and service highlights", () => {
    render(<App />);

    const education = screen.getByRole("region", {
      name: "Formação acadêmica",
    });
    expect(
      within(education).getByRole("heading", { name: "Ciência da Computação" }),
    ).toBeInTheDocument();
    expect(
      within(education).getByText(/Universidade Estácio de Sá/i),
    ).toBeInTheDocument();
    expect(
      within(education).getByText(/Técnico em Administração de Empresas/i),
    ).toBeInTheDocument();

    const skills = screen.getByRole("region", { name: /Skills/i });
    expect(
      within(skills).getByRole("heading", { name: "Conhecimentos técnicos" }),
    ).toBeInTheDocument();
    expect(
      within(skills).getByRole("heading", { name: "Competências profissionais" }),
    ).toBeInTheDocument();
    expect(within(skills).getByText("Suporte técnico N1 e N2")).toBeInTheDocument();
    expect(within(skills).getByText("Windows Server")).toBeInTheDocument();

    const services = screen.getByRole("region", { name: "Serviços prestados" });
    expect(within(services).getByText("Suporte técnico N1 e N2")).toBeInTheDocument();
    expect(
      within(services).getByText("Automação comercial para restaurantes e varejo"),
    ).toBeInTheDocument();
  });

  it("shows the resume-focused learning credentials and expandable detail list", () => {
    render(<App />);

    const learning = screen.getByRole("region", {
      name: "Formação complementar em destaque",
    });
    expect(within(learning).getByText("Windows Server 2005/2008/2012")).toBeInTheDocument();
    expect(within(learning).getByText("CFTV")).toBeInTheDocument();
    expect(within(learning).getByText("Ver demais cursos e credenciais")).toBeInTheDocument();

    const summary = within(learning).getByText("Ver demais cursos e credenciais");
    expect(summary.parentElement).not.toHaveAttribute("open");
    fireEvent.click(summary);
    expect(summary.parentElement).toHaveAttribute("open");
    expect(within(learning).getByText("Firebird, SQL Server, MySQL, Access e FoxPro")).toBeInTheDocument();
  });

  it("offers a real mailto contact form with real personal contact details", () => {
    render(<App />);

    const form = screen.getByRole("form", { name: "Envie uma mensagem" });
    expect(within(form).getByLabelText("Seu nome")).toBeRequired();
    expect(within(form).getByLabelText("Seu e-mail")).toBeRequired();
    expect(within(form).getByLabelText("Mensagem")).toBeRequired();
    expect(within(form).getByLabelText("Mensagem")).toHaveAttribute("maxlength", "4000");

    expect(
      buildContactMailto({
        name: "Marcos & time",
        email: "teste@example.com",
        message: "Olá\nTenho interesse.",
      }),
    ).toBe(
      "mailto:manager.marcos.paulo@gmail.com?subject=Contato+pelo+portf%C3%B3lio&body=Nome%3A+Marcos+%26+time%0AEmail%3A+teste%40example.com%0A%0AMensagem%3A%0AOl%C3%A1%0ATenho+interesse.",
    );
  });

  it("provides footer navigation and real social destinations", () => {
    render(<App />);

    const footerNavigation = screen.getByRole("navigation", {
      name: "Navegação do rodapé",
    });
    for (const link of within(footerNavigation).getAllByRole("link")) {
      const targetId = link.getAttribute("href")?.slice(1);
      expect(targetId).toBeTruthy();
      expect(document.getElementById(targetId ?? "")).toBeInTheDocument();
    }

    const socialLinks = screen.getByRole("navigation", {
      name: "Redes sociais no rodapé",
    });
    expect(within(socialLinks).getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/marcos-a-machado/",
    );
    expect(within(socialLinks).getByRole("link", { name: "E-mail" })).toHaveAttribute(
      "href",
      "mailto:manager.marcos.paulo@gmail.com",
    );
    expect(within(socialLinks).getByRole("link", { name: "WhatsApp" })).toHaveAttribute(
      "href",
      "https://wa.me/5521974860902",
    );
  });

  it("features the requested digital product portfolio projects in the portfolio", () => {
    render(<App />);

    const projects = screen.getByRole("region", { name: "Projetos e entregas" });
    expect(projects).toHaveTextContent("Anjo contra violência doméstica");
    expect(projects).toHaveTextContent("GACFOOD");
    expect(projects).toHaveTextContent("Radio Serrana WEB FM");
    expect(projects).toHaveTextContent("StudioHair");
    expect(projects).toHaveTextContent("RADAR SEGURO");
    expect(projects).toHaveTextContent("AQUIAOLADO");
    expect(projects).toHaveTextContent("ChatGPT");
    expect(projects).toHaveTextContent("Lovable");
  });
});
