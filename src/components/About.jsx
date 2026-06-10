function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 text-white">
      <h2 className="text-4xl font-bold mb-10">
        About <span className="text-blue-400">Me</span>
      </h2>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
        <p className="text-gray-300 leading-8 text-lg">
          Merhaba, ben Gonca Yavuz. Kırklareli Üniversitesi
          Bilgisayar Programcılığı bölümünden mezun oldum.
          Frontend geliştirme alanında uzmanlaşmaya odaklanıyor,
          React ve modern web teknolojileri ile kullanıcı odaklı
          uygulamalar geliştiriyorum.
        </p>

        <p className="text-gray-300 leading-8 text-lg mt-6">
          TaskFlow, InterviewFlow, Zihin Atlası ve Personel İzin
          Sistemi gibi projeler geliştirerek kullanıcı deneyimi,
          responsive tasarım ve frontend mimarisi konularında
          deneyim kazandım.
        </p>

        <p className="text-gray-300 leading-8 text-lg mt-6">
          Hedefim; modern web teknolojileriyle çalışan,
          öğrenmeye açık ve kullanıcı deneyimini önemseyen
          ekiplerde Frontend Developer olarak kariyerime
          devam etmek.
        </p>
      </div>
    </section>
  );
}

export default About;