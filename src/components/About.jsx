import { motion } from "framer-motion";

const highlights = [
  "React odaklı arayüz geliştirme",
  "Responsive ve kullanıcı dostu tasarım",
  "API entegrasyonu ve CRUD uygulamaları",
];

const quickFacts = [
  ["Education", "Kırklareli University"],
  ["Role", "Frontend-Focused Full-Stack Developer"],
  ["Location", "Türkiye"],
  ["Goal", "Frontend Developer career path"],
];

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-7xl px-6 py-24 text-white md:py-32"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          About Me
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
          I care about clean interfaces, practical code and steady improvement.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <p className="text-lg leading-8 text-gray-300">
            Merhaba, ben Gonca Yavuz. Kırklareli Üniversitesi Bilgisayar
            Programcılığı bölümünden mezun oldum. Frontend geliştirme alanında
            uzmanlaşmaya odaklanıyor, React ve modern web teknolojileri ile
            kullanıcı odaklı uygulamalar geliştiriyorum.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            TaskFlow, InterviewFlow, Zihin Atlası ve Personel İzin Sistemi gibi
            projelerde dashboard arayüzleri, API entegrasyonu, veritabanı
            mantığı ve responsive tasarım pratikleri üzerine çalıştım.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Hedefim; öğrenmeye açık, kullanıcı deneyimini önemseyen ve modern
            web teknolojileriyle üretim yapan ekiplerde Frontend Developer
            olarak değer üretmek.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm text-blue-100"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {quickFacts.map(([label, value]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-blue-400/30"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                {label}
              </p>
              <p className="mt-3 text-xl font-bold text-gray-100">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
