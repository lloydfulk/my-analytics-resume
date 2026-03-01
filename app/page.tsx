import { BarChart3, Code2, Cpu, Globe, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-20 lg:py-32">
        {/* Header Section */}
        <header className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System Status: Initializing Build
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Lloyd Fulk <span className="text-slate-500">/</span> Analytics
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            I'm building a data-driven portfolio to visualize my analytics skills. 
            Currently building data pipelines, UI components, and identifying example projects.
          </p>
        </header>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm group hover:border-cyan-500/50 transition-colors">
            <Code2 className="w-8 h-8 text-orange-500 mb-4" />
            <div className="text-3xl font-bold mb-1">42</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Project Repos</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm group hover:border-purple-500/50 transition-colors">
            <BarChart3 className="w-8 h-8 text-purple-500 mb-4" />
            <div className="text-3xl font-bold mb-1">98.4%</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Test Coverage</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm group hover:border-emerald-500/50 transition-colors">
            <Cpu className="w-8 h-8 text-emerald-500 mb-4" />
            <div className="text-3xl font-bold mb-1">0.4s</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Edge Latency</div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-16 space-y-12">

          <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center gap-2">
            <div className="h-1 w-8 bg-cyan-500 round-full" />
            Analytics Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ETL Category */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Extract, Transform, Load</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'Tableau Prep', 'Excel VBA', 'Juypter Notebooks', 'MariaDB/QuestDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Analysis Category */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Analysis, Reporting, Dashboards</h3>
              <div className="flex flex-wrap gap-2">
                {['Tableau Desktop', 'Tableau Server', 'Excel', 'ArcGIS', 'Visio', 'Grafana', 'Foundry'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center gap-2">
            <div className="h-1 w-8 bg-cyan-500 round-full" />
            Technical Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Category */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Cloud Category */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Backend & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PostgreSQL', 'Cloudflare Workers', 'Docker', 'Vercel'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300 hover:border-purple-500/50 hover:text-purple-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-slate-200 flex items-center gap-2">
            <div className="h-1 w-8 bg-cyan-500 round-full" />
            Database / Software Exposure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Database / Software Exposure Category */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {['AutoCAD', 'Revit', 'Photoshop/GIMP', 'PowerApps', 'SharePoint', 'OneStream', 'TRIRIGA', 'BUILDER SMS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300 hover:border-green-500/50 hover:text-green-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 text-slate-200 flex items-center gap-2">
            <div className="h-1 w-8 bg-emerald-500 rounded-full" />
            Featured Projects
          </h2>

          {/* FOR IMAGES LATER:: import Image from 'next/image';

              // Inside the project map...
              <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="/project-screenshot.jpg" 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div> 
          */}

          {/* wrapping the Title or the whole card in an <a> tag can create live links. */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              // iterating through projects, add additional projects here.
              {
                title: "XXXData Pipeline Optimizer",
                desc: "Automated ETL processes for a real-time analytics dashboard using Node.js and PostgreSQL.",
                metric: "-35% Latency",
                tech: ["Node.js", "Redis", "Docker"]
              },
              {
                title: "YYYPortfolio Analytics",
                desc: "A custom Next.js application that tracks and visualizes engineering contributions via GitHub API.",
                metric: "100ms Load Time",
                tech: ["Next.js", "Chart.js", "Tailwind"]
              }
            ].map((project) => (
              // all of the project card behavior. change behavior and appearance here.
              <div 
                key={project.title}
                className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-mono font-bold bg-emerald-500/10 text-emerald-500 rounded border border-emerald-500/20">
                      {project.metric}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-slate-600 bg-slate-800/50 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-10 text-slate-200 flex items-center gap-2">
            <div className="h-1 w-8 bg-blue-500 rounded-full" />
            Career Timeline
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
            {[
              // iterating through work experiences.
              {
                role: "Installations Program Admin",
                company: "Department of the Army",
                period: "2021 — Present",
                impact: "XXX Scaled data infrastructure to handle 1M+ daily events.",
                details: ["YYY Optimized SQL queries reducing server load by 30%", "ZZZ Architected a real-time monitoring dashboard for stakeholders"]
              },
              {
                role: "Pre-Design Engineer",
                company: "Smithsonian Institution",
                period: "2017 — 2021",
                impact: "XXXLed the migration from legacy PHP to Next.js/TypeScript.",
                details: ["YYYImproved SEO scores by 40% across all landing pages", "ZZZMentored 3 junior developers on modern React patterns"]
              },
              {
                role: "Transportation Engineer",
                company: "Maryland Highway Administration",
                period: "2015 — 2017",
                impact: "XXXBuilt 15+ responsive client sites using Tailwind CSS.",
                details: ["YYYReduced average site load time by 1.2s", "ZZZIntegrated third-party APIs for payment and authentication"]
              },
              {
                role: <>B.S. Civil Engineering<br />B.A. History of Architecture</>,
                company: "Syracuse University",
                period: "2011 — 2015",
                impact: "XXXBuilt 15+ responsive client sites using Tailwind CSS.",
                details: ["YYYReduced average site load time by 1.2s", "ZZZIntegrated third-party APIs for payment and authentication"]
              }
            ].map((job, index) => (
              // work experience behavior.
              <div key={job.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* The Dot on the Timeline */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                  {/* OPTION: Letter */}
                  {/* <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 text-blue-400 font-bold">
                    {job.company.charAt(0)}
                  </div> */}
                  {/* OPTION: Logo */}
                  {/* <div className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 bg-white overflow-hidden shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Image 
                      src={`/logos/${job.company.toLowerCase().replace(/\s+/g, '-')}.png`} 
                      alt={job.company}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div> */}
                </div>

                {/* The Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="font-bold text-lg text-white">{job.role}</h3>
                    <time className="font-mono text-xs text-blue-500 font-bold bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                      {job.period}
                    </time>
                  </div>
                  
                  <div className="text-sm font-semibold text-slate-400 mb-3">{job.company}</div>
                  
                  <p className="text-sm text-cyan-400 font-medium mb-4 italic">
                    &ldquo;{job.impact}&rdquo;
                  </p>

                  <ul className="space-y-2">
                    {job.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-500 flex gap-2">
                        <span className="text-blue-500">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Progress */}
        <div className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 mb-16">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h3 className="text-lg font-semibold">V1.0 Launch Progress</h3>
              <p className="text-sm text-slate-500">Refining responsive charts & deployment hooks</p>
            </div>
            <span className="text-cyan-400 font-mono">40%</span>
          </div>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full transition-all duration-1000" 
              style={{ width: '40%' }}
            />
          </div>
        </div>

        {/* Footer / Socials */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-800/50">
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a 
              href="https://www.linkedin.com/in/mlfulk/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            Powered by Next.js & Vercel Edge Runtime
          </p>
        </footer>
      </div>
    </main>
  );
}