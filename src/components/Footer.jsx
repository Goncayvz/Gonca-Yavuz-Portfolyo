import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold">
            Gonca <span className="text-blue-400">Yavuz</span>
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Frontend-Focused Full-Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://github.com/Goncayvz"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-gray-300 transition hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gonca-yavuz-350716327/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-300 transition hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:goncayvz1903@gmail.com"
            aria-label="Send email"
            className="text-gray-300 transition hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Gonca Yavuz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
