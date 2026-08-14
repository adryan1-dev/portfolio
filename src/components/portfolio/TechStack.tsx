import { techStack } from "@/config/portfolio";

export function TechStack() {
  return (
    <div className="glass-panel rounded-2xl px-5 py-6 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Tecnologias
      </p>
      <ul className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
        {techStack.map((tech) => (
          <li key={tech.slug} className="group relative">
            <div
              tabIndex={0}
              aria-label={tech.name}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--glow-primary)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-0 sm:h-14 sm:w-14"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={24}
                height={24}
                className="h-6 w-6 opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:h-7 sm:w-7"
              />
            </div>
            <span
              role="tooltip"
              className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-[var(--shadow-elevated)] transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {tech.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
