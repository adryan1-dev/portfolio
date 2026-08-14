import profilePhoto from "@/assets/profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

/**
 * Ponto único de configuração do portfólio.
 * Troque aqui: dados pessoais, links, CV, foto e projetos.
 */

export const profile = {
  greeting: "Olá, eu sou",
  name: "Adryan Chaves",
  role: "Full Stack Developer",
  bio: "Desenvolvo aplicações web modernas de ponta a ponta — interfaces rápidas e acessíveis no front-end, APIs sólidas e bem estruturadas no back-end. Foco em código limpo, performance e soluções completas que resolvem problemas reais.",
  photo: profilePhoto,
  photoAlt: "Retrato profissional de Adryan Chaves",
  /** Coloque o arquivo em public/cv.pdf para ativar o download. */
  cvUrl: "/cv.pdf",
  availability:
    "Disponível para oportunidades profissionais, projetos freelance e colaborações.",
};

export const links = {
  email: "adryanchaves@exemplo.com",
  github: "https://github.com/adryanchaves",
  linkedin: "https://www.linkedin.com/in/adryanchaves",
  whatsapp: "https://wa.me/5511999999999",
};

export type Tech = { name: string; slug: string };

/** slug = identificador do Simple Icons (cdn.simpleicons.org). */
export const techStack: Tech[] = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express.js", slug: "express" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Docker", slug: "docker" },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "Insight Analytics",
    description:
      "Painel de analytics em tempo real com visualizações interativas, filtros avançados e exportação de relatórios.",
    image: project1,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Nova Store",
    description:
      "E-commerce completo com carrinho persistente, checkout integrado a pagamentos e painel administrativo.",
    image: project2,
    technologies: ["React", "Express", "Stripe", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Orbit API",
    description:
      "API REST modular com autenticação JWT, cache, rate limiting e documentação automática.",
    image: project3,
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Taskflow",
    description:
      "Gerenciador de tarefas colaborativo com quadros kanban, atualizações em tempo real e modo offline.",
    image: project4,
    technologies: ["React", "Python", "FastAPI", "WebSocket"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
