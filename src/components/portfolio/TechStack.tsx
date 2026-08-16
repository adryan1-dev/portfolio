import { techGroups } from "@/config/portfolio";
import { TechIcon } from "./tech-icons";

export function TechStack() {
  return (
    <div>
      <h2 className="text-3xl font-bold sm:text-4xl">Tecnologias</h2>
      <div className="mt-8 space-y-7">
        {techGroups.map((group) => (
          <div key={group.label}>
            <p className="text-sm font-medium text-muted-foreground">{group.label}</p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
              {group.items.map((tech) => (
                <li key={tech.slug} className="group relative">
                  <span className="flex items-center gap-2 text-foreground">
                    <TechIcon slug={tech.slug} />
                    <span className="text-sm">{tech.name}</span>
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
