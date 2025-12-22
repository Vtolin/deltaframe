"use client";
import Image from "next/image";
import useInView from "../hooks/useInView";
import Footer from "../components/Footer";
import Taskbar from "../components/Taskbar";

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

const items = [
  { src: "/p1.jpg", ratio: "aspect-[4/5]", title: "Wedding — Intimate" },
  { src: "/p2.jpg", ratio: "aspect-video", title: "Motorsport — Track Day" },
  { src: "/p3.jpg", ratio: "aspect-[9/16]", title: "Portrait — Editorial" },
  { src: "/p4.jpg", ratio: "aspect-[21/9]", title: "Commercial — Brand" },
  { src: "/p5.jpg", ratio: "aspect-[3/4]", title: "Wedding — Moment" },
  { src: "/p6.jpg", ratio: "aspect-square", title: "Lifestyle" },
];

export default function PortfolioPage() {
  return (
  <>
    <Taskbar />
    <main className="font-sans antialiased">
      {/* 1. Editorial Intro */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Animated animation="fade-in">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-6">
              Portfolio
            </h1>
          </Animated>
          <Animated animation="fade-in" delay={200}>
            <p className="text-gray-600 text-lg max-w-2xl">
              Pilihan karya yang mewakili pendekatan visual, karakter, dan
              konsistensi Delta Frame.
            </p>
          </Animated>
        </div>
      </section>

      {/* 2. Adaptive Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {items.map((item, index) => (
              <Animated key={index} delay={index * 100}>
                <div className="group relative break-inside-avoid overflow-hidden rounded-xl bg-gray-100">
                  <div className={`${item.ratio} relative overflow-hidden`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.title}
                      </p>
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
