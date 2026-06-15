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
      className="mx-auto max-w-6xl px-5 py-12 text-white sm:px-6 md:py-16"
    >
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl md:mb-10 md:text-4xl">
        My <span className="text-purple-400">Certificates</span>
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 md:p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300 sm:text-sm">
              {certificate.issuer}
            </p>
            <h3 className="mt-2 text-base font-bold text-gray-100 md:text-lg">
              {certificate.title}
            </h3>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certificates;
