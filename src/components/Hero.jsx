import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#050816] text-white flex items-center justify-center px-6 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_35%),radial-gradient(circle_at_bottom_right,#a855f733,transparent_35%)]"></div>

      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-7xl min-h-[700px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block absolute left-0 top-32 w-[360px] bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md shadow-2xl"
        >
          <p className="text-sm text-blue-300 mb-3">portfolio.config.js</p>
          <pre className="text-sm text-gray-200 leading-7">
{`const gonca = {
 role: "Frontend Developer",
 location: "Türkiye",
 focus: "React & UI/UX",
 currently: "Building cool things"
};`}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <div className="relative mx-auto w-80 h-80 md:w-[520px] md:h-[520px] rounded-full border border-blue-400/40 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_110px_rgba(96,165,250,0.45)]">
            <div className="absolute inset-[-14px] rounded-full border border-blue-400/20"></div>
            <div className="absolute inset-4 rounded-full border border-purple-400/30"></div>
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>

            <img
              src={avatar}
              alt="Gonca Yavuz"
              className="relative w-full h-full object-cover rounded-full border border-blue-400/30 shadow-[0_0_50px_rgba(96,165,250,0.35)]"
            />
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Gonca <span className="text-blue-400">Yavuz</span>
          </h1>

          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            Frontend-Focused Full-Stack Developer
          </p>

          <div className="flex justify-center gap-5 mt-6 text-2xl">
            <a href="https://github.com/Goncayvz" target="_blank" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gonca-yavuz-350716327/" target="_blank" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="mailto:goncayvz1903@gmail.com" className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:grid absolute right-0 top-36 grid-cols-1 gap-4 w-[230px]"
        >
          {[
            ["10+", "Projects"],
            ["15+", "Technologies"],
            ["2025", "Graduate"],
            ["∞", "Learning"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-xl"
            >
              <h3 className="text-3xl font-bold text-blue-400">{number}</h3>
              <p className="text-gray-300 text-sm mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;