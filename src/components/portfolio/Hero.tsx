import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/config/portfolio";
import { TechStack } from "./TechStack";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {profile.greeting}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-gradient sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.bio}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={profile.cvUrl}
                download
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--glow-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Baixar CV
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
              >
                Ver projetos
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: "var(--gradient-accent)" }}
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-elevated)]">
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
