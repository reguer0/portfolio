const projects = [
  {
    title: "GitHubTracker",
    description:
      "Aplicación full stack para rastrear y visualizar actividad de GitHub, con arquitectura cliente-servidor y base de datos MongoDB.",
    tech: ["React", "Vite", "Express", "MongoDB", "TypeScript"],
    links: {
      github: "https://github.com/reguer0/GitHubTracker",
    },
  },
  {
    title: "QuickMock",
    description:
      "Herramienta open-source para crear mockups de baja fidelidad con drag-and-drop. Ideal para prototipado rápido en etapas tempranas de diseño.",
    tech: ["React", "React Konva", "TypeScript", "Vitest"],
    links: {
      demo: "https://www.quickmock.net/",
    },
  },
  {
    title: "Dashboard",
    description:
      "Aplicación de dashboard con autenticación, visualización de datos interactiva y gestión de contenido en tiempo real.",
    tech: ["Next.js", "Supabase", "Recharts", "Tailwind CSS"],
    links: {
      github: "https://github.com/reguer0/dashboard",
    },
  },
  {
    title: "Manga Downloader",
    description:
      "Aplicación web para descargar manga de forma sencilla, con interfaz limpia y funcionamiento directo desde el navegador.",
    tech: ["React", "Vite"],
    links: {
      demo: "https://manga-dowloader.vercel.app/",
    },
  },
  {
    title: "Buscador de Películas",
    description:
      "Aplicación de búsqueda de películas con routing dinámico, resultados en tiempo real y diseño responsive.",
    tech: ["React", "TypeScript", "React Router"],
    links: {
      demo: "https://buscadordepeliculas-six.vercel.app/",
    },
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
        <div className="w-16 h-0.5 bg-accent mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-background border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label="Demo"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono bg-accent/10 text-accent px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
