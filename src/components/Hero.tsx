export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="text-accent font-mono text-sm mb-4">
            Hola, soy
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Gorka Reguero
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted font-light mb-8">
            Full Stack Developer
          </h2>
          <p className="text-muted leading-relaxed text-lg max-w-2xl mb-10">
            Desarrollador full stack con experiencia en grandes compañías y equipos
            internacionales, especializado en la creación de aplicaciones web
            escalables y de alto rendimiento. Formado en el ecosistema moderno
            del desarrollo web: React, TypeScript, Node.js, testing, patrones
            de arquitectura y diseño UX.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ver proyectos
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="https://reguer0.github.io/curriculum/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-accent text-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ver CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border border-border hover:border-accent text-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
