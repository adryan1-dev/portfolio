import profilePhoto from "@/assets/profile.jpg";
import deliverylensCover from "@/assets/deliverylens-cover.png";
import lbookCover from "@/assets/lbook-cover.png";
import { publicUrl } from "@/lib/urls";

/**
 * Ponto único de configuração do portfólio.
 * Troque aqui: dados pessoais, links, CV, foto e projetos.
 */

/** URL pública do site (canonical, OG, JSON-LD). Sobrescreva com VITE_SITE_URL. */
export const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined) ?? "https://adryanchaves.dev";

export const profile = {
  greeting: "Olá, eu sou",
  name: "Adryan Chaves",
  role: "Full Stack Developer",
  bio: "Desenvolvo aplicações web modernas de ponta a ponta — interfaces rápidas e acessíveis no front-end, APIs sólidas e bem estruturadas no back-end. Foco em código limpo, performance e soluções completas que resolvem problemas reais.",
  photo: profilePhoto,
  photoAlt: "Retrato profissional de Adryan Chaves",
  /** Arquivo servido de public/assets/resume_082026.pdf (cópia em assets/ na raiz). */
  cvUrl: publicUrl("assets/resume_082026.pdf"),
  cvAvailable: true,
  availability: "Disponível para oportunidades profissionais, projetos freelance e colaborações.",
};

export const links = {
  email: "adryanchaves@exemplo.com",
  github: "https://github.com/adryan1-dev",
  linkedin: "https://www.linkedin.com/in/adryanchaves",
  whatsapp: "https://wa.me/5511999999999",
};

export type Tech = { name: string; slug: string };

export type TechGroup = {
  label: string;
  items: Tech[];
};

export const techGroups: TechGroup[] = [
  {
    label: "Front-end",
    items: [
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "JavaScript", slug: "javascript" },
      { name: "React", slug: "react" },
    ],
  },
  {
    label: "Back-end",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Python", slug: "python" },
      { name: "PostgreSQL", slug: "postgresql" },
    ],
  },
  {
    label: "Infra",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Docker", slug: "docker" },
    ],
  },
];

/** Lista plana derivada dos grupos (SEO, JSON-LD). */
export const techStack: Tech[] = techGroups.flatMap((group) => group.items);

export type Project = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  upcoming?: boolean;
};

export const projects: Project[] = [
  {
    title: "DeliveryLens Analytics",
    description:
      "Pipeline de engenharia de dados que simula um sistema de delivery: consome uma API REST, processa em Python e persiste em PostgreSQL nas camadas Bronze, Silver e Gold para análises com SQL.",
    image: deliverylensCover,
    technologies: ["Python", "PostgreSQL", "SQL", "REST API"],
    liveUrl: "#",
    repoUrl: "https://github.com/adryan1-dev/DeliveryLens-Analytics",
  },
  {
    title: "Lbook",
    description:
      "Caderno pessoal de leituras: catalogar o que você tem, organizar por status, avaliar, escrever resenhas e acompanhar o progresso — tudo em uma Estante simples.",
    image: lbookCover,
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    liveUrl: "https://adryan1-dev.github.io/lbook/",
    repoUrl: "https://github.com/adryan1-dev/lbook",
  },
  {
    title: "Aguarde novo projeto...",
    description: "Algo novo está em construção. Em breve por aqui.",
    technologies: [],
    liveUrl: "#",
    repoUrl: "#",
    upcoming: true,
  },
];
