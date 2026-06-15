import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    title: "Email",
    value: "goncayvz1903@gmail.com",
    href: "mailto:goncayvz1903@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "GitHub",
    value: "github.com/Goncayvz",
    href: "https://github.com/Goncayvz",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "Gonca Yavuz",
    href: "https://www.linkedin.com/in/gonca-yavuz-350716327/",
    icon: FaLinkedin,
  },
];

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative isolate overflow-hidden py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-slate-950/95"></div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-blue-300/25"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-[90vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Contact
          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-6xl">
            Let's build something{" "}
            <span className="text-blue-300">useful.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            I'm currently open to Frontend Developer, Full Stack Developer and
            Software Developer opportunities. You can reach me directly by email
            or through my developer profiles.
          </p>

          <a
            href="mailto:goncayvz1903@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
          >
            <FaEnvelope />
            Send Email
          </a>

          <a
            href="/GONCA_YAVUZ_Junior_Software_Developer.pdf"
            download
            className="ml-0 mt-3 inline-flex items-center gap-3 rounded-full border border-blue-300/50 bg-blue-500/15 px-6 py-3 font-semibold text-blue-50 transition hover:bg-blue-500 hover:text-white sm:ml-3 sm:mt-8"
          >
            Download CV
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group rounded-3xl border border-blue-200/25 bg-slate-900 p-6 no-underline shadow-[0_16px_45px_rgba(2,6,23,0.42)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:bg-slate-800 hover:shadow-[0_18px_50px_rgba(59,130,246,0.18)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-2xl text-blue-200">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-white">{link.title}</h3>
                <p className="mt-2 break-words text-slate-200 transition group-hover:text-white">
                  {link.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
