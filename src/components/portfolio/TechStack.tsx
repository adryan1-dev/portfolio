import { techGroups } from "@/config/portfolio";
import { TechIcon } from "./tech-icons";

const iconButtonClass =
  "flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/40 text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--glow-primary)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0 sm:h-14 sm:w-14";

export function TechStack() {
  return (
    <div className="glass-panel rounded-2xl px-5 py-6 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Tecnologias
      </p>
      <div className="mt-6 space-y-6">
        {techGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
              {group.label}
            </p>
            <ul className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              {group.items.map((tech) => (
                <li key={tech.slug} className="group relative">
                  <button type="button" aria-label={tech.name} className={iconButtonClass}>
                    <TechIcon slug={tech.slug} />
                  </button>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-[var(--shadow-elevated)] transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
                  >
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
