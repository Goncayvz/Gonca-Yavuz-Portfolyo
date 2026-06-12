import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const techStack = ["React", "JavaScript", "Tailwind CSS", "FastAPI"];

const heroHighlights = [
  ["Eğitim", "Kırklareli Üniversitesi mezunu"],
  ["Odak", "Frontend Developer kariyer yolu"],
  ["Projeler", "TaskFlow, InterviewFlow, Zihin Atlası"],
];

const floatingAccents = [
  "left-[12%] top-[18%] h-2 w-2 bg-cyan-300",
  "left-[46%] top-[14%] h-1.5 w-1.5 bg-emerald-300",
  "right-[18%] top-[24%] h-2.5 w-2.5 bg-rose-300",
  "bottom-[24%] left-[20%] h-1.5 w-1.5 bg-amber-200",
  "bottom-[18%] right-[28%] h-2 w-2 bg-blue-300",
];

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24 });

  const glowX = useTransform(smoothX, [-0.5, 0.5], [-36, 36]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-28, 28]);
  const cursorX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);
  const cursorY = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"]);
  const avatarX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const avatarY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const cursorGlow = useMotionTemplate`radial-gradient(circle at ${cursorX} ${cursorY}, rgba(34, 211, 238, 0.28), rgba(16, 185, 129, 0.18) 18%, rgba(251, 113, 133, 0.13) 34%, transparent 58%)`;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] px-4 pb-14 pt-24 text-white sm:px-6 sm:pb-16 sm:pt-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,#22d3ee2b,transparent_30%),radial-gradient(circle_at_82%_28%,#fb718522,transparent_28%),radial-gradient(circle_at_55%_85%,#10b9811f,transparent_30%),linear-gradient(180deg,#020617_0%,#071427_55%,#050816_100%)]"
      ></div>
      <div className="star-field" aria-hidden="true"></div>
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,#22d3ee24_70deg,transparent_135deg,#10b98120_210deg,#fb71851c_280deg,transparent_360deg)] blur-3xl"
      ></motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(125,211,252,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.28)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]"
      ></motion.div>
      <motion.div
        aria-hidden="true"
        style={{ background: cursorGlow }}
        className="pointer-events-none absolute inset-0 opacity-90 mix-blend-screen"
      ></motion.div>
      {floatingAccents.map((accent, index) => (
        <motion.span
          key={accent}
          aria-hidden="true"
          animate={{ y: [-10, 10, -10], opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 3.6 + index * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute rounded-full shadow-[0_0_22px_currentColor] ${accent}`}
        ></motion.span>
      ))}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="absolute left-0 top-28 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl"
      ></motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="absolute bottom-12 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
      ></motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 sm:mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.85)]"></span>
            Frontend Developer fırsatlarına açık
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            Merhaba, ben Gonca Yavuz.
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              React ile sade, hızlı ve kullanıcı odaklı arayüzler geliştiriyorum.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Bilgisayar Programcılığı mezunu, frontend odaklı bir geliştiriciyim.
            React, JavaScript, Tailwind CSS ve REST API yapılarıyla gerçek
            ihtiyaçlara dokunan, responsive ve temiz web uygulamaları üretiyorum.
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

          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex justify-center rounded-full bg-blue-500 px-7 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Projelerimi Gör
            </a>

            <a
              href="#contact"
              className="inline-flex justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white/10"
            >
              İletişime Geç
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-3 lg:mx-0">
            {heroHighlights.map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-md"
              >
                <p className="text-sm font-semibold text-blue-300">{title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-300">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex justify-center gap-5 text-2xl lg:justify-start">
            <a
              href="https://github.com/Goncayvz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="no-underline transition hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gonca-yavuz-350716327/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="no-underline transition hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:goncayvz1903@gmail.com"
              aria-label="Send email"
              className="no-underline transition hover:text-blue-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <motion.div
            aria-hidden="true"
            style={{ x: glowX, y: glowY }}
            className="absolute inset-4 rounded-full bg-blue-500/20 blur-[80px]"
          ></motion.div>

          <motion.div
            style={{
              x: avatarX,
              y: avatarY,
              rotateX,
              rotateY,
              transformPerspective: 900,
            }}
            className="relative z-10 mx-auto aspect-square overflow-hidden rounded-full border border-blue-300/25 bg-white/[0.04] p-2 shadow-[0_30px_120px_rgba(37,99,235,0.28)] backdrop-blur-md will-change-transform"
          >
            <img
              src={avatar}
              alt="Gonca Yavuz"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </motion.div>

          <div className="relative z-20 mt-4 grid gap-3 sm:absolute sm:inset-x-0 sm:bottom-6 sm:mt-0 sm:grid-cols-2 sm:px-6">
            <div className="rounded-2xl border border-blue-300/20 bg-[#111936]/85 p-4 text-left shadow-2xl backdrop-blur-md">
              <p className="text-sm text-gray-300">Current focus</p>
              <p className="mt-1 font-semibold text-blue-200">
                React, UI polish & API integrations
              </p>
            </div>

            <div className="rounded-2xl border border-blue-300/20 bg-[#111936]/85 p-4 text-left shadow-2xl backdrop-blur-md">
              <p className="text-3xl font-bold text-blue-400">8+</p>
              <p className="text-sm text-gray-300">Portfolio projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
