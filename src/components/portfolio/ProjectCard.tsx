import { memo } from "react";
import { Construction, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/config/portfolio";
import { isPlaceholderUrl } from "@/lib/urls";

type ProjectCardProps = {
  project: Project;
  isSelected: boolean;
};

const linkClass =
  "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none";

export const ProjectCard = memo(function ProjectCard({ project, isSelected }: ProjectCardProps) {
  if (project.upcoming) {
    return (
      <article
        className={`glass-panel flex h-full min-h-[22rem] flex-col items-center justify-center overflow-hidden rounded-2xl border-dashed px-6 py-10 text-center transition-all duration-500 motion-reduce:transition-none ${
          isSelected ? "border-primary/40 shadow-[var(--glow-primary)]" : "hover:border-primary/25"
        }`}
        aria-label="Projeto em construção"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-secondary/40 text-primary">
          <Construction className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </article>
    );
  }

  return (
    <article
      className={`glass-panel group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 motion-reduce:transition-none ${
        isSelected ? "border-primary/40 shadow-[var(--glow-primary)]" : "hover:border-primary/25"
      }`}
    >
      {project.image ? (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={`Capa do projeto ${project.title}`}
            loading="lazy"
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        {project.technologies.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          <ProjectLink
            href={project.liveUrl}
            className={`${linkClass} bg-primary text-primary-foreground hover:brightness-110 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 motion-reduce:active:scale-100`}
            icon={ExternalLink}
            label="Ver projeto"
          />
          <ProjectLink
            href={project.repoUrl}
            className={`${linkClass} border border-border text-foreground hover:border-primary/50 hover:text-primary active:scale-95 motion-reduce:active:scale-100`}
            icon={Github}
            label="GitHub"
          />
        </div>
      </div>
    </article>
  );
});

type ProjectLinkProps = {
  href: string;
  className: string;
  icon: typeof ExternalLink;
  label: string;
};

function ProjectLink({ href, className, icon: Icon, label }: ProjectLinkProps) {
  if (isPlaceholderUrl(href)) {
    return (
      <span aria-disabled="true" className={`${className} cursor-not-allowed opacity-50`}>
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
