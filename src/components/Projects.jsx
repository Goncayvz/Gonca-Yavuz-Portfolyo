import { useState } from "react";
import { motion } from "framer-motion";
import interflow from "../assets/interflow.png";
import kriptoTakip from "../assets/kriptotakip.png";
import muzikCalar from "../assets/muzik-calar.png";
import personelIzin from "../assets/personel-izin.png";
import spreadsheet from "../assets/spreatsheet.png";
import tasKagitMakas from "../assets/tas-kagit-makas.png";
import taskflow from "../assets/taskflow.png";
import zihinAtlasi from "../assets/zihin-atlası.png";

const filters = ["All", "React", "Backend", "JavaScript"];

const projects = [
  {
    title: "TaskFlow",
    image: taskflow,
    github: "https://github.com/Goncayvz/TaskFlow-app",
    tech: "React • Tailwind • Context API",
    description: "Dashboard yapısı, görev yönetimi ve kullanıcı odaklı arayüz çalışması.",
    category: "React",
  },
  {
    title: "InterviewFlow",
    image: interflow,
    github: "https://github.com/Goncayvz/interviewflow",
    tech: "React • JavaScript • Router",
    description: "Teknik mülakat pratiği için akış odaklı modern web arayüzü.",
    category: "React",
  },
  {
    title: "Zihin Atlası",
    image: zihinAtlasi,
    github: "https://github.com/Goncayvz/zihin-atlasi-blog",
    tech: "React • PHP • MySQL",
    description: "Blog mantığı, veri yönetimi ve içerik odaklı sayfa deneyimi.",
    category: "Backend",
  },
  {
    title: "Personel İzin Sistemi",
    image: personelIzin,
    github: "https://github.com/Goncayvz/Personel-izin-sistemi",
    tech: "FastAPI • SQLite",
    description: "Personel izin süreçleri için backend ve veritabanı odaklı uygulama.",
    category: "Backend",
  },
  {
    title: "Kripto Takip",
    image: kriptoTakip,
    github: "https://github.com/Goncayvz/live-crypto-chart",
    tech: "Python • API • Chart",
    description: "Canlı kripto verilerini takip etmeye yönelik grafik uygulaması.",
    category: "Backend",
  },
  {
    title: "Spreadsheet",
    image: spreadsheet,
    github: "https://github.com/Goncayvz/-JavaScript-Spreadsheet-Application",
    tech: "JavaScript • HTML • CSS",
    description: "Tarayıcı içinde çalışan spreadsheet mantığına sahip JavaScript uygulaması.",
    category: "JavaScript",
  },
  {
    title: "Müzik Çalar",
    image: muzikCalar,
    github: "https://github.com/Goncayvz/music-player-app",
    tech: "JavaScript • HTML • CSS",
    description: "Modern oynatıcı kontrollerine sahip müzik çalar arayüzü.",
    category: "JavaScript",
  },
  {
    title: "Taş Kağıt Makas",
    image: tasKagitMakas,
    github: "https://github.com/Goncayvz/javascript-game-",
    tech: "JavaScript • Game UI",
    description: "Klasik oyun mantığını web arayüzüne taşıyan küçük JavaScript projesi.",
    category: "JavaScript",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-5 py-12 text-white sm:px-6 md:py-16"
    >
      <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-sm">
            Portfolio
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
        </div>

        <div className="flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-[150px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[160px] lg:h-[150px]"
            />

            <div className="p-4">
              <div className="mb-2.5 flex items-center justify-between gap-3">
                <h3 className="text-base font-bold md:text-lg">{project.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                  {project.category}
                </span>
              </div>
              <p className="text-xs leading-5 text-gray-300 sm:text-sm">
                {project.description}
              </p>
              <p className="mt-2.5 text-xs text-gray-400">{project.tech}</p>
              <p className="mt-3 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                View on GitHub
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
