import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const techStack = ["React", "Tailwind CSS", "JavaScript", "FastAPI"];

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-6 pb-20 pt-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_35%),radial-gradient(circle_at_bottom_right,#a855f733,transparent_35%)]"></div>
      <div className="absolute left-10 top-24 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
            Available for Frontend & Full-Stack roles
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm Gonca. I build clean and responsive{" "}
            <span className="text-blue-400">web interfaces.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 lg:mx-0">
            Frontend-focused full-stack developer working with React, modern UI
            patterns and API-driven applications. I like turning practical ideas
            into polished, usable products.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              View Projects
            </a>
            <a
              href="/GONCA_YAVUZ_Junior_Software_Developer.pdf"
              download
              className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-semibold text-blue-100 transition hover:bg-blue-500 hover:text-white"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-blue-400/50 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-7 flex justify-center gap-5 text-2xl lg:justify-start">
            <a
              href="https://github.com/Goncayvz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="transition hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/gonca-yavuz-350716327/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:goncayvz1903@gmail.com"
              aria-label="Send email"
              className="transition hover:text-blue-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute -left-4 top-12 hidden rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:block">
            <p className="text-sm text-gray-300">Current focus</p>
            <p className="mt-1 font-semibold text-blue-200">React & UI polish</p>
          </div>

          <div className="absolute -right-4 bottom-16 hidden rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:block">
            <p className="text-3xl font-bold text-blue-400">10+</p>
            <p className="text-sm text-gray-300">Projects built</p>
          </div>

          <div className="relative mx-auto flex aspect-square items-center justify-center rounded-full border border-blue-400/40 bg-white/5 shadow-[0_0_110px_rgba(96,165,250,0.38)] backdrop-blur-md">
            <div className="absolute inset-[-14px] rounded-full border border-blue-400/20"></div>
            <div className="absolute inset-5 rounded-full border border-purple-400/30"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>

            <img
              src={avatar}
              alt="Gonca Yavuz"
              className="relative h-full w-full rounded-full border border-blue-400/30 object-cover shadow-[0_0_50px_rgba(96,165,250,0.35)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
