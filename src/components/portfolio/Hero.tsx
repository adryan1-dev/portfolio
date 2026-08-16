import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/config/portfolio";
import { TechStack } from "./TechStack";

const ctaClass =
  "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none";

export function Hero() {
  return (
    <section className="px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0">
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-primary sm:text-2xl">{profile.role}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.bio}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {profile.cvAvailable ? (
                <a
                  href={profile.cvUrl}
                  download="resume_082026.pdf"
                  className={`${ctaClass} group bg-primary text-primary-foreground hover:brightness-110 active:translate-y-0`}
                >
                  <Download
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                    aria-hidden="true"
                  />
                  Baixar CV
                </a>
              ) : null}
              <a
                href="#projetos"
                className={`${ctaClass} border border-border bg-secondary/40 text-foreground hover:border-primary/50 hover:bg-secondary`}
              >
                Ver projetos
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-elevated)]">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={1024}
                height={1280}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
