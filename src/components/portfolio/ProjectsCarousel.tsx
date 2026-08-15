import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/config/portfolio";
import { ProjectCard } from "./ProjectCard";

const COUNT = projects.length;
const REEL_COPIES = 3;
const START_INDEX = COUNT;
const reelSlides = Array.from({ length: REEL_COPIES }, (_, copy) =>
  projects.map((project) => ({ project, copy })),
).flat();

const navButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/40 text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100";

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    startIndex: START_INDEX,
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  const syncIndex = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap() % COUNT);
  }, [emblaApi]);

  const wrapToMiddleCopy = useCallback(() => {
    if (!emblaApi) return;
    const snap = emblaApi.selectedScrollSnap();
    if (snap < COUNT) {
      emblaApi.scrollTo(snap + COUNT, true);
    } else if (snap >= COUNT * 2) {
      emblaApi.scrollTo(snap - COUNT, true);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    syncIndex();
    emblaApi.on("select", syncIndex);
    emblaApi.on("reInit", syncIndex);
    emblaApi.on("settle", wrapToMiddleCopy);
    return () => {
      emblaApi.off("select", syncIndex);
      emblaApi.off("reInit", syncIndex);
      emblaApi.off("settle", wrapToMiddleCopy);
    };
  }, [emblaApi, syncIndex, wrapToMiddleCopy]);

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
              aria-label="Projeto anterior"
              className={navButtonClass}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo projeto"
              className={navButtonClass}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <ul className="flex touch-pan-y gap-6">
            {reelSlides.map(({ project, copy }, index) => {
              const isSelected = index % COUNT === selected;
              return (
                <li
                  key={`${project.title}-${copy}`}
                  className={`min-w-0 shrink-0 basis-[88%] sm:basis-[65%] lg:basis-[46%] ${
                    isSelected ? "opacity-100" : "opacity-55"
                  }`}
                >
                  <ProjectCard project={project} isSelected={isSelected} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => emblaApi?.scrollTo(START_INDEX + index)}
              aria-label={
                project.upcoming
                  ? "Ir para o projeto em construção"
                  : `Ir para o projeto ${project.title}`
              }
              aria-current={selected === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none ${
                selected === index ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
