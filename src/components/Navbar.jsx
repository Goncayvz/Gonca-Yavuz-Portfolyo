import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Certificates", href: "#certificates", id: "certificates" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 text-white sm:px-6"
      >
        <a href="#home" className="shrink-0 text-base font-bold tracking-wide sm:text-lg">
          Gonca<span className="text-blue-400">.</span>
        </a>

        <div className="flex min-w-0 gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 text-xs sm:text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 transition sm:px-4 sm:py-2 ${
                activeSection === item.id
                  ? "bg-blue-500 text-white shadow-[0_0_24px_rgba(59,130,246,0.35)]"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
