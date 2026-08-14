import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsCarousel } from "@/components/portfolio/ProjectsCarousel";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adryan Chaves | Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfólio de Adryan Chaves, desenvolvedor Full Stack. Aplicações web modernas com React, Node.js, Python e PostgreSQL.",
      },
      { property: "og:title", content: "Adryan Chaves | Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfólio de Adryan Chaves: tecnologias, projetos em destaque e contato para oportunidades e colaborações.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <ProjectsCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
