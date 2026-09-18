export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description: "Full-stack web application",
      date: "2024",
    },
    {
      title: "Project Beta",
      description: "Mobile-first design system",
      date: "2024",
    },
    {
      title: "Project Gamma",
      description: "Real-time data visualization",
      date: "2023",
    },
  ];

  const skills = [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Performance",
  ];

  const contact = {
    email: "hello@example.com",
    github: "github.com/yourname",
    linkedin: "linkedin.com/in/yourname",
  };

  return (
    <div className="min-h-screen bg-[#1b6b3d] text-white">
      {/* Hero Section */}
      <section className="border-b-2 border-white/20 p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
              Prave
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 font-light">
              Full-stack developer & designer crafting elegant digital experiences
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-[#1b6b3d] font-semibold hover:bg-white/90 transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white/10 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="border-2 border-white/20 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold tracking-wider mb-4">ABOUT</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                I build responsive web applications with modern technologies. Focused on performance,
                accessibility, and user experience. Based in the digital space, coffee-powered.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-xs text-white/60">Available for opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b-2 border-white/20 p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="border-2 border-white/20 p-6 hover:border-white/40 transition group cursor-pointer"
              >
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-white/60">
                    {project.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white/90 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 group-hover:text-white/80 transition">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b-2 border-white/20 p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="border border-white/20 p-4 text-center hover:border-white/40 hover:bg-white/5 transition"
              >
                <p className="text-sm font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">CONTACT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-white/20 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4">Let's work together</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  I'm interested in freelance projects, full-time opportunities, and creative collaborations.
                  Feel free to reach out.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-xs text-white/50 font-mono">Response time: 24-48 hours</p>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="block border-2 border-white/20 p-6 hover:border-white/40 hover:bg-white/5 transition group"
              >
                <p className="text-xs font-bold tracking-wider text-white/60 group-hover:text-white/80 mb-2">
                  EMAIL
                </p>
                <p className="text-lg font-semibold group-hover:text-white/90">{contact.email}</p>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`https://${contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 p-4 hover:border-white/40 hover:bg-white/5 transition text-center group"
                >
                  <p className="text-xs font-bold tracking-wider text-white/60 group-hover:text-white/80">
                    GitHub
                  </p>
                </a>
                <a
                  href={`https://${contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 p-4 hover:border-white/40 hover:bg-white/5 transition text-center group"
                >
                  <p className="text-xs font-bold tracking-wider text-white/60 group-hover:text-white/80">
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-white/20 p-6 text-center text-xs text-white/50">
        <p>© 2024 Prave. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}
