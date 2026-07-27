const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Next.js", "SAPUI5/Fiori"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Java", "ASP.NET", "MySQL", "PL/SQL"],
  },
  {
    title: "Herramientas",
    skills: ["Git", "GitHub", "GitHub Actions", "Docker", "Jira", "Vitest"],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Habilidades</h2>
        <div className="w-16 h-0.5 bg-accent mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-surface border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-accent mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-background border border-border px-3 py-1.5 rounded-lg hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-surface border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-accent mb-4">Formación</h3>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-medium">Curso Superior Full Stack Developer FS2</p>
              <p className="text-sm text-muted">Deusto Formación · 2026</p>
            </div>
            <div>
              <p className="font-medium">Máster Front End</p>
              <p className="text-sm text-muted">Lemoncoders · 2025</p>
            </div>
            <div>
              <p className="font-medium">Grado Superior en Desarrollo de Aplicaciones Multiplataforma</p>
              <p className="text-sm text-muted">Elorrieta-Errekamari · 2017 - 2020</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-accent mb-3">Idiomas</h3>
            <div className="flex flex-col gap-2 text-muted">
              <p>Inglés — Nivel profesional</p>
              <p>Euskera — Nativo</p>
              <p>Español — Nativo</p>
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-accent mb-3">Ubicación</h3>
            <div className="flex flex-col gap-2 text-muted">
              <p>Pais Vasco, España</p>
              <p>Trabajo remoto / híbrido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
