# Portfólio — Adryan Chaves

Landing page única (rota `/`), dark mode por padrão, visual premium e técnico: fundo quase preto, destaque em ciano elétrico, tipografia moderna (Space Grotesk para títulos, DM Sans para texto), cards com glassmorphism discreto e animações sutis.

## Seções

**Hero (tela cheia)**
- Esquerda: "Olá, eu sou" / **Adryan Chaves** / Full Stack Developer / parágrafo curto sobre aplicações web modernas, interfaces e soluções completas.
- Botões: "Baixar CV" (primário, ícone de download, apontando para `/cv.pdf` — basta colocar o arquivo depois) e "Ver projetos" (secundário, scroll suave até a seção).
- Direita: foto profissional em moldura moderna com glow/anel sutil, sem distorção (imagem placeholder gerada, fácil de trocar).
- Faixa de tecnologias logo abaixo: HTML5, CSS3, JavaScript, React, Node.js, Express, Python, PostgreSQL, Git, GitHub, Docker — ícones oficiais (Simple Icons via SVG local) com tooltip do nome no hover.

**Projetos em destaque**
- Carrossel horizontal (Embla, já disponível no projeto) com cards grandes: capa, nome, descrição curta, chips de tecnologias, links "Ver projeto" e "GitHub".
- Setas de navegação, indicadores de posição, swipe no mobile, transições suaves e destaque visual do card ativo.
- 4 projetos fictícios com estrutura pronta para substituição.

**Contato**
- Título "Vamos construir algo juntos?" + texto curto de incentivo.
- Ícones grandes e interativos: Email, GitHub, LinkedIn, WhatsApp — cada um com hover animado e link real.
- Nota de disponibilidade para oportunidades, projetos e colaborações.

**Footer**
- "© 2026 Adryan Chaves. Todos os direitos reservados." + os mesmos ícones em versão compacta.

## Detalhes técnicos

- Componentes: `Hero`, `TechStack`, `ProjectsCarousel`, `Contact`, `Footer` em `src/components/portfolio/`.
- Arquivo único de configuração `src/config/portfolio.ts` com nome, bio, links (email, GitHub, LinkedIn, WhatsApp), caminho do CV, foto e lista de projetos — tudo editável em um só lugar.
- Tokens de cor/gradiente/glow em `src/styles.css` (oklch), `dark` aplicada por padrão no root; nenhuma cor hardcoded nos componentes.
- Fontes carregadas via `<link>` no `__root.tsx`.
- Acessibilidade: HTML semântico, um único H1, `aria-label` nos links de ícone, foco visível, alt em imagens; estados hover/focus/active em todos os interativos.
- SEO: `head()` próprio em `/` com título, descrição, og e twitter.
- Ícones: Lucide para UI, SVGs de marcas para o stack. Sem emojis.

## Placeholders a substituir depois
Foto (`src/assets/`), `public/cv.pdf`, capas e dados dos projetos, e os 4 links de contato — todos centralizados na config.
