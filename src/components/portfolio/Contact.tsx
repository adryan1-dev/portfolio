import { profile } from "@/config/portfolio";
import { contactLinks } from "./contact-links";

export function Contact() {
  return (
    <section id="contato" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Vamos construir algo juntos?</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Tem uma ideia, um produto ou uma vaga em aberto? Podemos conversar.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted-foreground">{profile.availability}</p>
      </div>
    </section>
  );
}
