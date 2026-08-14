import { profile } from "@/config/portfolio";
import { contactLinks } from "./contact-links";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <p className="min-w-0 text-xs text-muted-foreground sm:text-sm">
          © 2026 {profile.name}. Todos os direitos reservados.
        </p>
        <ul className="flex shrink-0 items-center gap-1">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
