import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/config/portfolio";

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projetos" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Portfólio
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Projetos em destaque</h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Projeto anterior"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/40 text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Próximo projeto"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/40 text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <ul className="flex touch-pan-y gap-6">
            {projects.map((project, index) => (
              <li
                key={project.title}
                className={`min-w-0 shrink-0 basis-[88%] transition-all duration-500 sm:basis-[65%] lg:basis-[46%] ${
                  selected === index ? "opacity-100" : "opacity-55"
                }`}
              >
                <article
                  className={`glass-panel group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 ${
                    selected === index
                      ? "border-primary/40 shadow-[var(--glow-primary)]"
                      : "hover:border-primary/25"
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Capa do projeto ${project.title}`}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
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
                    <div className="mt-6 flex flex-wrap gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver projeto
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir para o projeto ${project.title}`}
              aria-current={selected === index}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                selected === index ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
