import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Globe } from '../components/Globe';
import { Frameworks } from '../components/Frameworks';
import SocialConstellation from '../components/SocialConstellation';
import ResumeModal from '../components/ResumeModal';

function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="about" className='section-spacing c-space'>
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(10rem,auto)] mt-12'>
        {/* Grid 1 */}
        <div className='flex items-end grid-cinematic-bg grid-1 p-6 md:p-8'>
          <img
            src="/assets/coding-pov.png"
            alt="Profile background"
            className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-30'
          />
          <div className="z-10 space-y-3">
            <p className="headtext text-2xl md:text-3xl font-bold text-white">Hi, I'm Shubhrajyoti Mohanty</p>
            <div className="subtext text-neutral-300 text-sm md:text-base leading-relaxed space-y-3">
              <p>
                An <span className="text-white font-medium">MCA student at MNNIT Allahabad</span> with a background in <span className="text-white font-medium">Physics Honours from Utkal University</span>.
              </p>
              <p>
                I enjoy building practical software and exploring how technology can solve real-world problems. Through my projects, I've gained hands-on experience with <span className="text-white font-medium">Python, SQL</span>, and the <span className="text-white font-medium">MERN stack</span>, while also exploring <span className="text-white font-medium">AI, Retrieval-Augmented Generation (RAG)</span>, and <span className="text-white font-medium">LangChain</span>.
              </p>
              <p>
                My work has given me practical exposure to building APIs, working with databases, developing full-stack applications, and analyzing data to solve problem-specific challenges. Alongside development, I've built a strong foundation in core computer science concepts including <span className="text-white font-medium">DBMS, OOP, Computer Networks, Operating Systems</span>, and <span className="text-white font-medium">Data Structures & Algorithms</span>.
              </p>
              <p className="text-white font-medium italic pt-1">
                "I'm currently looking for opportunities where I can apply these skills, continue learning, and contribute to meaningful software projects."
              </p>
            </div>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-[#06060e]' />
        </div>

        {/* Grid 2 — Profile portrait with social presence constellation */}
        <div className='grid-constellation-bg grid-2'>
          <SocialConstellation />
        </div>

        {/* Grid 3 */}
        <div className='grid-constellation-bg grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Time Zone</p>
            <p className='subtext'>
              <span className="text-gray-400 font-medium">
                I am based in <span className="text-white font-medium">India</span> (IST), open to opportunities <span className="text-white font-medium">worldwide</span>.
              </span>
              </p>
          </div>
          <figure className='absolute left-[30%] top-[10%]'>
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className='grid-cta-bg grid-4'>
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Hire Me?
            </p>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="relative z-10 px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              View Resume
            </button>
          </div>
        </div>

        {/* Grid 5 — Tech Stack & Core Competencies */}
        <div className='grid-starfield-bg grid-5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[32rem] md:max-h-full'>
          <div className="z-10 w-full mb-4">
            <p className="headtext text-xl md:text-2xl font-bold text-white mb-1">Tech Stack & Core Competencies</p>
            <p className="subtext text-xs md:text-sm text-neutral-400">
              Languages, frameworks, databases, AI tools, and core computer science concepts.
            </p>
          </div>

          <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {/* Languages */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-semibold text-lavender uppercase tracking-wider mb-1.5">Languages</p>
              <div className="flex flex-wrap gap-1.5">
                {["Java", "Python", "JavaScript"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">{tech}</span>
                ))}
              </div>
            </div>

            {/* Web */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-semibold text-aqua uppercase tracking-wider mb-1.5">Web</p>
              <div className="flex flex-wrap gap-1.5">
                {["HTML", "CSS", "React.js", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">{tech}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">Backend</p>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">{tech}</span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">Databases</p>
              <div className="flex flex-wrap gap-1.5">
                {["MongoDB", "SQL"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">{tech}</span>
                ))}
              </div>
            </div>

            {/* AI & Data */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1.5">AI & Data</p>
              <div className="flex flex-wrap gap-1.5">
                {["Generative AI", "LLMs", "RAG", "LangChain", "FAISS"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">{tech}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1.5">Tools</p>
              <div className="flex flex-wrap gap-1.5">
                {["Git", "GitHub", "VS Code", "Postman"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">{tech}</span>
                ))}
              </div>
            </div>

            {/* Concepts — Full Width */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm sm:col-span-2">
              <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1.5">Concepts</p>
              <div className="flex flex-wrap gap-1.5">
                {["DSA", "OOP", "DBMS", "OS", "Computer Networks", "HLD", "LLD"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/10 text-neutral-200 border border-white/5">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal — same AnimatePresence pattern as Projects */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal closeModal={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default About