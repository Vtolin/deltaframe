"use client";

import Taskbar from "../components/Taskbar";
import Footer from "../components/Footer";
import useInView from "../hooks/useInView";
import { useForm, ValidationError } from "@formspree/react";

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


function ContactForm() {
  const [state, handleSubmit] = useForm("xqezyqoq");

  if (state.succeeded) {
    return (
      <Animated animation="fade-in">
        <div className="py-20 text-center">
          <p className="font-serif text-3xl text-gray-900 mb-4">
            Terima kasih
          </p>
          <p className="text-gray-600 text-lg">
            Pesan Anda telah kami terima.  
            Kami akan segera menghubungi Anda.
          </p>
        </div>
      </Animated>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="_gotcha" className="hidden" />

      <div>
        <label className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
          Nama
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border-b border-gray-300 bg-transparent py-3 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
          placeholder="Nama Anda"
        />
      </div>

      <div>
        <label className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border-b border-gray-300 bg-transparent py-3 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
          placeholder="email@anda.com"
        />
        <ValidationError field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
          Pesan
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full border-b border-gray-300 bg-transparent py-3 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors resize-none"
          placeholder="Ceritakan proyek atau kebutuhan Anda"
        />
        <ValidationError field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-block mt-6 bg-gray-900 text-white px-10 py-4 text-sm font-medium tracking-wider uppercase transition-all hover:-translate-y-1 hover:shadow-lg disabled:opacity-50"
      >
        {state.submitting ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}



export default function ContactPage() {
  return (
    <>
      <Taskbar />

      <main className="font-sans antialiased">
        {/* Intro */}
        <section className="py-32 md:py-40 bg-white mb-[-150px]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <Animated animation="fade-in">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-6">
                Hubungi Kami
              </h1>
            </Animated>
            <Animated animation="fade-in" delay={200}>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Ceritakan kebutuhan Anda. Kami akan merespons dengan pendekatan
                yang personal dan terarah.
              </p>
            </Animated>
            <Animated animation="fade-in" delay={400}>
              <div className="w-24 h-px bg-gray-300 mx-auto mt-10" />
            </Animated>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 md:py-32 max-w-6xl mx-auto px-6 -mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            <Animated animation="fade-up">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">
                  Mari Terhubung
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Kami terbuka untuk proyek fotografi, videografi, kolaborasi
                  kreatif, maupun pertanyaan umum.
                </p>

                <ul className="space-y-6">
                  <li>
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Email
                    </p>
                    <p className="text-gray-900 text-lg">
                      DeltaFramesStudio@gmail.com
                    </p>
                  </li>
                  <li>
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                      WhatsApp
                    </p>
                    <p className="text-gray-900 text-lg">
                      +62 8570 5243 706
                    </p>
                  </li>
                  <li>
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">
                      Lokasi
                    </p>
                    <p className="text-gray-900 text-lg">Indonesia</p>
                  </li>
                </ul>
              </div>
            </Animated>

            <Animated animation="fade-up" delay={200}>
              <ContactForm />
            </Animated>
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Animated animation="fade-in">
              <p className="font-serif text-3xl md:text-4xl text-gray-950 italic">
                "Setiap cerita dimulai dari percakapan sederhana."
              </p>
            </Animated>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
