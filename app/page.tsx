"use client";
import Taskbar from "./components/Taskbar";
import Image from "next/image";
import Footer from "./components/Footer";
import useInView from "./hooks/useInView";
import Link from "next/link";
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

const galleryItems = [
  {
    src: "/portfolio/photo.jpg",
    height: "h-96",
    category: "Event Coverage",
    title: "School concert",
  },
  {
    src: "/portfolio/photo1.jpg",
    height: "h-80",
    category: "Fast Action",
    title: "Porsche Cayman Speeding",
  },
  {
    src: "/portfolio/photo2.jpg",
    height: "h-96",
    category: "Portrait",
    title: "Candid Shot",
  },
  {
    src: "/portfolio/photo3.jpg",
    height: "h-80",
    category: "Special Moments",
    title: "Group Shot",
  },
  {
    src: "/portfolio/photo4.jpg",
    height: "h-96",
    category: "Automotive",
    title: "Cinematic Shots",
  },
  {
    src: "/portfolio/photo5.jpg",
    height: "h-80",
    category: "Sports Photography",
    title: "Candid shots of participants",
  },
];

export default function Home() {
  return (
    <>
      <Taskbar />
      <main className="font-sans antialiased">
        {/* 1. Hero Section */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="/1217(1).mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center text-white">
              <Animated animation="fade-in">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-3 sm:mb-4">
                  Delta Frame
                </h1>
              </Animated>

              <Animated animation="fade-in" delay={200}>
                <p className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide uppercase mb-6 sm:mb-8">
                  Fotografi & Film
                </p>
              </Animated>

              <Animated animation="fade-in" delay={400}>
                <div className="w-20 sm:w-24 h-px bg-white/60 mx-auto mb-6 sm:mb-8"></div>
              </Animated>

              <Animated animation="fade-in" delay={600}>
                <p className="font-light text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
                  Mengabadikan momen paling berharga dengan keindahan yang abadi
                </p>
              </Animated>

              <Animated animation="fade-in" delay={800}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <Link href={"/portfolio"} className="cursor-pointer group relative overflow-hidden bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-h-11">
                    <span className="relative z-10">Lihat Portofolio</span>
                    <span className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                  <Link href={"/contact"} className="cursor-pointer group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 min-h-11">
                    Hubungi Kami
                  </Link>
                </div>
              </Animated>
            </div>
          </div>
        </section>

        {/* 2. Testimonial Section(not used yet) */}
        {/* <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Animated animation="fade-up">
              <div className="text-center">
                <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-gray-800 max-w-4xl mx-auto px-2">
                  ""
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mt-3 sm:mt-4">
                 
                </p>
              </div>
            </Animated>
          </div>
        </section> */}

        {/* 3.About Section */}
        <section className="py-16 md:py-24 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <Animated animation="fade-up">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-gray-900">
                  Merangkai Cerita Visual
                </h2>
              </Animated>

              <Animated animation="fade-up" delay={200}>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Kami adalah studio fotografi dan videografi yang
                  berfokus pada pengabadian momen-momen berharga. Mulai dari
                  pernikahan intim hingga acara motorsport komersial, kami
                  memadukan keahlian teknis dengan visi artistik.
                </p>
              </Animated>

              <Animated animation="fade-up" delay={400}>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Setiap karya dibuat dengan niat, emosi, dan komitmen penuh
                  terhadap kualitas untuk menceritakan kisah Anda secara
                  autentik dan berkelas.
                </p>
              </Animated>

              <Animated animation="fade-up" delay={600}>
                <Link
                  href={"about"}
                  className="group inline-flex items-center text-gray-900 font-medium pb-2 border-b-2 border-gray-900 transition-all hover:text-gray-600 hover:border-gray-600 cursor-pointer"
                >
                  Pelajari Lebih Lanjut
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </Animated>
            </div>

            <Animated
              animation="fade-left"
              delay={300}
              className="order-1 md:order-2"
            >
              <div className="relative group">
                <div className="relative aspect-4/5 max-w-md mx-auto md:max-w-none">
                  <Image
                    src="/test.jpg"
                    alt="Photo 1"
                    fill
                    className="object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Floating stat card, Hidden on mobile to avoid overlap(not used yet) */}

                {/*<div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                  <p className="text-2xl lg:text-3xl font-serif text-gray-900"> </p>
                  <p className="text-xs lg:text-sm text-gray-600"> </p>
                </div>*/}
              </div>
            </Animated>
          </div>
        </section>

        {/* 4. Service section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Animated animation="fade-up" delay={0}>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-3 md:mb-4 text-gray-900">
                  Layanan Kami
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Solusi visual menyeluruh yang disesuaikan dengan kebutuhan
                  Anda
                </p>
              </div>
            </Animated>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Fotografi Pernikahan",
                  desc: "Foto romantis, natural, dan timeless untuk hari istimewa Anda (Sudah Termasuk Editing)",
                  price: "Mulai dari Rp700,000",
                },
                {
                  title: "Videografi",
                  desc: "Film sinematik yang menghidupkan momen (Sudah Termasuk Editing)",
                  price: "Mulai dari Rp1,000,000",
                },
                {
                  title: "Sesi Potret",
                  desc: "Branding pribadi, keluarga, dan lifestyle (Sudah Termasuk Editing)",
                  price: "Mulai dari Rp400,000",
                },
                {
                  title: "Acara & Event",
                  desc: "Acara selebrasi dan perayaan spesial (Sudah Termasuk Editing)",
                  price: "Mulai dari Rp900,000",
                },
                {
                  title: "Liputan Motorsport",
                  desc: "Liputan profesional terfokus untuk event balap & otomotif (Sudah Termasuk Editing)",
                  price: "Mulai dari Rp1,700,000",
                },
                {
                  title: "Editing",
                  desc: "Layanan Retouching & color grading profesional",
                  price: "Mulai dari Rp75,000",
                },
              ].map((service, index) => (
                <Animated
                  key={service.title}
                  delay={100 + index * 100}
                  animation="fade-up"
                >
                  <div className="group bg-white p-6 lg:p-8 rounded-xl border border-gray-200 sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1 cursor-pointer h-full">
                    <div className="mb-5 lg:mb-6">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                        <svg
                          className="w-7 h-7 lg:w-8 lg:h-8 text-gray-600 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl lg:text-2xl mb-2 lg:mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3 lg:mb-4 text-sm sm:text-base">
                        {service.desc}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {service.price}
                      </p>
                    </div>
                    {/* <button className="text-sm font-medium text-gray-900 pb-1 border-b-2 border-gray-900 transition-all duration-300 group-hover:text-gray-600 group-hover:border-gray-600">
                      Learn More
                    </button> */}
                  </div>
                </Animated>
              ))}
            </div>

            {/*<Animated animation="fade-up" delay={800}>
              <div className="text-center mt-12 md:mt-16">
                <Link href={"services"} className=" cursor-pointer bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 md:hover:-translate-y-1 hover:shadow-lg min-h-11">
                  Lihat Semua Paket
                </Link>
              </div> 
            </Animated>*/}
          </div>
        </section>

        {/* 5. Portfolio section, Masonry Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <Animated animation="fade-up" delay={0}>
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-normal mb-4 text-gray-900">
                  Galeri Pilihan
                </h2>
                <p className="text-gray-600 text-lg">
                  Koleksi momen favorit yang kami abadikan
                </p>
              </div>
            </Animated>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Animated
                  key={item.src}
                  delay={100 + index * 100}
                  animation="fade-up"
                >
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                    <div
                      className={`${item.height} relative overflow-hidden bg-gray-200`}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />

                      {/* Image */}
                      <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-110">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          priority={index === 0}
                          className="object-cover"
                          sizes="
                (max-width: 768px) 100vw,
                (max-width: 1024px) 50vw,
                33vw
              "
                        />
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xs uppercase tracking-wider mb-2">
                            {item.category}
                          </p>
                          <h3 className="font-serif text-2xl">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
