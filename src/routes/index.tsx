import { createFileRoute } from "@tanstack/react-router";
import { links, profile, techStack } from "@/config/portfolio";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsCarousel } from "@/components/portfolio/ProjectsCarousel";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Adryan Chaves | Full Stack Developer";
const DESCRIPTION =
  "Portfólio de Adryan Chaves, desenvolvedor Full Stack. Aplicações web modernas com React, Node.js, Python, PostgreSQL e Docker.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Adryan Chaves, desenvolvedor full stack, software engineer, React, Node.js, Python, PostgreSQL, portfólio",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          description: profile.bio,
          email: `mailto:${links.email}`,
          url: "/",
          knowsAbout: techStack.map((tech) => tech.name),
          sameAs: [links.github, links.linkedin],
        }),
      },
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
