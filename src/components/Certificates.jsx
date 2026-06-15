import { motion } from "framer-motion";

const certificates = [
  {
    title: "Frontend Fusion Bootcamp",
    issuer: "Techcareer.net",
  },
  {
    title: "IBM & Kodluyoruz Program",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "DevOps for Beginners Training",
    issuer: "Techcareer.net",
  },
  {
    title: "Web Development Training",
    issuer: "IEEE ITU Computer Society",
  },
];

function Certificates() {
  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-7xl px-6 py-16 text-white md:py-24"
    >
      <h2 className="mb-10 text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl">
        My <span className="text-purple-400">Certificates</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 md:p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
              {certificate.issuer}
            </p>
            <h3 className="mt-3 text-lg font-bold text-gray-100 md:text-xl">
              {certificate.title}
            </h3>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certificates;
