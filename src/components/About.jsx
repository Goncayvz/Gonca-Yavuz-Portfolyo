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
      className="mx-auto max-w-7xl px-6 py-16 text-white md:py-24"
    >
      <div className="mb-10 max-w-3xl md:mb-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          About Me
        </p>

        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          I care about clean interfaces, practical code and steady improvement.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8">
          <p className="text-base leading-7 text-gray-300 md:text-lg md:leading-8">
            Merhaba, ben Gonca Yavuz. Kırklareli Üniversitesi Bilgisayar
            Programcılığı bölümünden mezun oldum. Frontend geliştirme alanında
            uzmanlaşmaya odaklanıyor, React ve modern web teknolojileri ile
            kullanıcı odaklı uygulamalar geliştiriyorum.
          </p>

          <p className="mt-5 text-base leading-7 text-gray-300 md:mt-6 md:text-lg md:leading-8">
            TaskFlow, InterviewFlow, Zihin Atlası ve Personel İzin Sistemi gibi
            projelerde dashboard arayüzleri, API entegrasyonu, veritabanı
            mantığı ve responsive tasarım pratikleri üzerine çalıştım.
          </p>

          <p className="mt-5 text-base leading-7 text-gray-300 md:mt-6 md:text-lg md:leading-8">
            Hedefim; öğrenmeye açık, kullanıcı deneyimini önemseyen ve modern
            web teknolojileriyle üretim yapan ekiplerde Frontend Developer
            olarak değer üretmek.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 md:mt-8">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3 text-sm text-blue-100 md:p-4"
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
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-blue-400/30 md:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                {label}
              </p>
              <p className="mt-3 text-lg font-bold text-gray-100 md:text-xl">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
