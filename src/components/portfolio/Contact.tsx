import { profile } from "@/config/portfolio";
import { contactLinks } from "./contact-links";

export function Contact() {
  return (
    <section id="contato" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Vamos construir algo juntos?</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Tem uma ideia, um produto para tirar do papel ou uma vaga em aberto? Fico feliz em
          conversar — respondo rápido.
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={label}
                className="group flex h-20 w-20 flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-secondary/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[var(--glow-primary)] focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0 sm:h-24 sm:w-24"
              >
                <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:h-7 sm:w-7 motion-reduce:transition-none" />
                <span className="text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground motion-reduce:transition-none">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-primary" />
          {profile.availability}
        </p>
      </div>
    </section>
  );
}
