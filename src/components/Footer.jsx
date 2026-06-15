import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-20 border-t border-blue-300/25 bg-slate-950 px-6 py-8 text-white shadow-[0_-18px_60px_rgba(37,99,235,0.12)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold">
            Gonca <span className="text-blue-400">Yavuz</span>
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Frontend-Focused Full-Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://github.com/Goncayvz"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 no-underline transition hover:border-blue-300/50 hover:bg-blue-500/15 hover:text-blue-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gonca-yavuz-350716327/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 no-underline transition hover:border-blue-300/50 hover:bg-blue-500/15 hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:goncayvz1903@gmail.com"
            aria-label="Send email"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 no-underline transition hover:border-blue-300/50 hover:bg-blue-500/15 hover:text-blue-300"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-slate-300">
          &copy; 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
