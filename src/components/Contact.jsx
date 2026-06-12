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
      className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-white"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Contact
          </p>

          <h2 className="text-5xl font-bold leading-tight md:text-6xl">
            Let's build something{" "}
            <span className="text-blue-400">useful.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            I'm currently open to Frontend Developer, Full Stack Developer and
            Software Developer opportunities. You can reach me directly by email
            or through my developer profiles.
          </p>

          <a
            href="mailto:goncayvz1903@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            <FaEnvelope />
            Send Email
          </a>

          <a
            href="/GONCA_YAVUZ_Junior_Software_Developer.pdf"
            download
            className="ml-0 mt-3 inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-semibold text-blue-100 transition hover:bg-blue-500 hover:text-white sm:ml-3 sm:mt-8"
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
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 no-underline backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_18px_50px_rgba(59,130,246,0.14)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-400">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold">{link.title}</h3>
                <p className="mt-2 break-words text-gray-300 transition group-hover:text-white">
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
