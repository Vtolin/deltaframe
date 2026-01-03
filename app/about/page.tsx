"use client";
import Taskbar from "../components/Taskbar";
import useInView from "../hooks/useInView";
import Footer from "../components/Footer";

const Animated = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-in";
}) => {
  const { ref, inView } = useInView();

  const baseClasses =
    "transition-all duration-700 ease-out will-change-transform";
  const visibleClasses = "opacity-100 translate-x-0 translate-y-0 scale-100";
  const hiddenClasses = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-left": "opacity-0 -translate-x-12",
    "fade-right": "opacity-0 translate-x-12",
    "fade-in": "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${
        inView ? visibleClasses : hiddenClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function AboutPage() {
  return (
    <>
    <Taskbar />
    <main className="font-sans antialiased">
      {/* 1. Minimal Hero / Intro (No Image) */}
      <section className="relative py-32 md:py-40 lg:py-48 bg-white h-screen min-h-[500px] max-h-[1600px] flex items-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Animated animation="fade-in">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-6">
              Tentang Delta Frame
            </h1>
          </Animated>

          <Animated animation="fade-in" delay={200}>
            <p className="text-gray-500 uppercase tracking-widest text-sm">
              Studio Fotografi & Film
            </p>
          </Animated>

          <Animated animation="fade-in" delay={400}>
            <div className="w-24 h-px bg-gray-300 mx-auto mt-10" />
          </Animated>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <Animated animation="fade-up" className="md:col-span-1">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
              Filosofi Kami
            </h2>
          </Animated>

          <Animated animation="fade-up" delay={200} className="md:col-span-2">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bagi kami, visual bukan sekadar estetika. Ia adalah bahasa, cara
              paling jujur untuk menyampaikan emosi, atmosfer, dan cerita tanpa
              perlu banyak kata.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Delta Frame dibangun dengan keyakinan bahwa setiap momen pantas
              diperlakukan dengan niat, ketelitian, dan rasa hormat terhadap
              cerita di baliknya.
            </p>
          </Animated>
        </div>
      </section>

      {/* 3. What We Believe In */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Animated animation="fade-up">
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                Apa yang Kami Junjung
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl">
                Nilai-nilai yang membentuk cara kami bekerja dan berkarya.
              </p>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Autentisitas",
                desc: "Kami menghindari visual yang berlebihan. Yang kami cari adalah kejujuran dalam setiap frame.",
              },
              {
                title: "Presisi",
                desc: "Detail kecil sering kali menjadi pembeda antara karya biasa dan karya yang berkesan.",
              },
              {
                title: "Konsistensi",
                desc: "Setiap klien, setiap proyek, mendapatkan standar kualitas yang sama.",
              },
            ].map((item, i) => (
              <Animated key={item.title} animation="fade-up" delay={i * 150}>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="font-serif text-2xl text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Animated animation="fade-up">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Cara Kami Bekerja
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Setiap proyek dimulai dengan memahami kebutuhan dan karakter klien.
              Kami tidak memaksakan gaya, melainkan membentuk visual yang relevan
              dengan cerita yang ingin disampaikan.
            </p>
          </Animated>

          <Animated animation="fade-up" delay={200}>
            <ul className="space-y-6">
              {["Diskusi & perencanaan matang", "Produksi dengan pendekatan sinematik", "Editing presisi & berkarakter"].map(
                (step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-gray-900">0{i + 1}</span>
                    <p className="text-gray-600 text-lg">{step}</p>
                  </li>
                )
              )}
            </ul>
          </Animated>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
