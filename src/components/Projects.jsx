import taskflow from "../assets/taskflow.png";
import interflow from "../assets/interflow.png";
import zihinAtlasi from "../assets/zihin-atlası.png";
import personelIzin from "../assets/personel-izin.png";
import spreadsheet from "../assets/spreatsheet.png";
import kriptoTakip from "../assets/kriptotakip.png";
import muzikCalar from "../assets/muzik-calar.png";
import tasKagitMakas from "../assets/tas-kagit-makas.png";

const featuredProjects = [
  {
    title: "TaskFlow",
    image: taskflow,
    github: "https://github.com/Goncayvz/React-dashboard-app",
    tech: "React • Tailwind • Context API",
  },
  {
    title: "InterviewFlow",
    image: interflow,
    github: "#",
    tech: "React • JavaScript • Router",
  },
  {
    title: "Zihin Atlası",
    image: zihinAtlasi,
    github: "#",
    tech: "React • PHP • MySQL",
  },
  {
    title: "Personel İzin Sistemi",
    image: personelIzin,
    github: "#",
    tech: "FastAPI • SQLite",
  },
];

const otherProjects = [
  {
    title: "Kripto Takip",
    image: kriptoTakip,
  },
  {
    title: "Spreadsheet",
    image: spreadsheet,
  },
  {
    title: "Müzik Çalar",
    image: muzikCalar,
  },
  {
    title: "Taş Kağıt Makas",
    image: tasKagitMakas,
  },
];

function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Featured <span className="text-blue-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.tech}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-4xl font-bold mt-32 mb-12">
        Other <span className="text-purple-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherProjects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
