import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      color: "blue",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "Responsive Design",
        "Cross-Browser Compatibility",
      ],
    },
    {
      title: "Backend",
      color: "purple",
      skills: [
        "C#",
        "PHP",
        "FastAPI",
        "Express.js",
        "REST API Development",
        "RESTful Services",
        "CRUD Applications",
      ],
    },
    {
      title: "Database",
      color: "cyan",
      skills: ["MySQL", "PostgreSQL", "SQLite"],
    },
    {
      title: "Software Engineering",
      color: "emerald",
      skills: [
        "Git",
        "GitHub",
        "Agile/Scrum",
        "Component-Based Architecture",
        "State Management",
        "Context API",
      ],
    },
    {
      title: "Testing & Tools",
      color: "pink",
      skills: ["Vitest", "Postman", "VS Code", "Recharts"],
    },
  ];

  const colorClasses = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-400/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-400/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-400/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-400/20",
    pink: "text-pink-400 bg-pink-500/10 border-pink-400/20",
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl px-5 py-12 text-white sm:px-6 md:py-16"
    >
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl md:mb-10 md:text-4xl">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
          >
            <h3
              className={`mb-4 text-lg font-bold md:text-xl ${
                colorClasses[group.color].split(" ")[0]
              }`}
            >
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-3 py-1.5 text-xs sm:text-sm ${colorClasses[group.color]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
