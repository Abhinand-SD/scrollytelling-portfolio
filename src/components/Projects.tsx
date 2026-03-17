export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A headless shopify experience built with Next.js, featuring dynamic 3D product configured.",
      tags: ["Next.js", "Three.js", "Tailwind"]
    },
    {
      title: "Fintech Dashboard",
      description: "Real-time analytics dashboard with WebSockets and complex data visualization.",
      tags: ["React", "D3", "Framer Motion"]
    },
    {
      title: "Creative Agency Portfolio",
      description: "Award-winning studio site with custom WebGL shaders and smooth page transitions.",
      tags: ["WebGL", "GSAP", "Next.js"]
    },
    {
      title: "AI Writing Assistant",
      description: "Web application wrapping complex LLM capabilities into a fast, minimal interface.",
      tags: ["OpenAI", "TypeScript", "Vercel SDK"]
    }
  ];

  return (
    <section className="relative z-20 min-h-screen bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 inline-block relative">
          Selected Work
          <div className="absolute -bottom-4 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-2xl p-8 
                         bg-white/[0.03] backdrop-blur-xl border border-white/10
                         hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500
                         hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-emerald-500/0 to-blue-500/0 
                              group-hover:from-blue-500/10 group-hover:to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white/90 mb-4">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-4 py-1.5 rounded-full text-sm font-medium
                                 bg-white/5 border border-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
