const experiences = [
  {
    role: "Frontend Developer",
    company: "Infoembalses",
    period: "Ene 2026",
    description:
      "Portal web de visualización de datos que muestra el estado y nivel de los embalses en España mediante dashboards e información actualizada de recursos hídricos.",
    tech: ["Next.js", "TypeScript", "Vitest"],
  },
  {
    role: "Frontend Developer",
    company: "QuickMock",
    period: "Oct 2025",
    description:
      "Herramienta web gratuita y de código abierto para crear mockups de interfaz de usuario de baja fidelidad con función de arrastrar y soltar. Ideal para las etapas iniciales de diseño y prototipado.",
    tech: ["React", "React Konva", "TypeScript", "Vitest"],
  },
  {
    role: "Consultor",
    company: "Minsait",
    period: "Oct 2024 - Abr 2025",
    description:
      "Desarrollo de aplicaciones web en SAPUI5 Fiori enfocado en el front end usando JavaScript, XML como maquetación, GitHub para control de versiones y Jira para control de tareas.",
    tech: ["SAPUI5/Fiori", "JavaScript", "XML"],
  },
  {
    role: "Advanced App Engineering Analyst",
    company: "Accenture España",
    period: "Sept 2022 - Ago 2024",
    description:
      "Desarrollo de aplicaciones web en SAPUI5 Fiori. Colaboración principal con clientes internacionales participando en las tomas de decisiones del desarrollo.",
    tech: ["SAPUI5/Fiori", "JavaScript", "GitHub", "Jira"],
  },
  {
    role: "Programador SAP",
    company: "Accenture",
    period: "Oct 2020 - Sept 2022",
    description:
      "Desarrollo de aplicaciones web en SAPUI5 Fiori enfocado en el front end usando JavaScript como lenguaje principal, XML, GitHub y Jira.",
    tech: ["SAPUI5/Fiori", "JavaScript", "XML"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Experiencia</h2>
        <div className="w-16 h-0.5 bg-accent mb-12" />

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <div key={exp.company + exp.period} className="relative md:pl-10">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background hidden md:block -translate-x-[5px]" />

                <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted font-mono">{exp.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-3">{exp.company}</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono bg-accent/10 text-accent px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
