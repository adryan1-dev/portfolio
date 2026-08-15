import {
  siCss,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
} from "simple-icons/icons";

const iconMap = {
  html5: siHtml5,
  css: siCss,
  javascript: siJavascript,
  react: siReact,
  nodedotjs: siNodedotjs,
  express: siExpress,
  python: siPython,
  postgresql: siPostgresql,
  git: siGit,
  github: siGithub,
  docker: siDocker,
} as const;

type TechSlug = keyof typeof iconMap;

export function TechIcon({ slug }: { slug: string }) {
  const icon = iconMap[slug as TechSlug];
  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      aria-hidden="true"
      className="h-6 w-6 opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:h-7 sm:w-7 motion-reduce:transition-none"
    >
      <path d={icon.path} fill="currentColor" className="text-foreground" />
    </svg>
  );
}
