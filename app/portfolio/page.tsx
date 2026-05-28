"use client";
import Image from "next/image";
import Footer from "../components/Footer";
import Taskbar from "../components/Taskbar";

interface PortfolioItem {
  src: string;
  title: string;
  width: number;
  height: number;
  id: number ;
}

const items: PortfolioItem[] = [
  { src: "/photos/p1.jpeg", title: "Model — Portrait", width: 800, height: 1000, id: 1 },
  { src: "/photos/p4.jpeg", title: "Candid", width: 1200, height: 800, id: 2 },
  { src: "/photos/p8.jpeg", title: "Event coverage", width: 900, height: 600, id: 3 },
  { src: "/photos/p13.jpeg", title: "Bike", width: 1000, height: 1000, id: 4 },
  { src: "/photos/p11.jpg", title: "Candid Portrait", width: 800, height: 1067, id: 5 },
  { src: "/photos/p2.jpeg", title: "Event shot", width: 1200, height: 900, id: 6 },

  { src: "/photos/p6.jpeg", title: "Event coverage", width: 1400, height: 800, id: 7 },
  { src: "/photos/p9.jpeg", title: "Automotive", width: 1000, height: 750, id: 8 },
  { src: "/photos/p17.jpeg", title: "Portrait", width: 900, height: 1200, id: 9 },
  
  { src: "/photos/p16.jpg", title: "Superbike", width: 1200, height: 675, id: 10 },
  { src: "/photos/p3.jpeg", title: "Fast Action — Panning", width: 1100, height: 800, id: 11 },
  { src: "/photos/p151.png", title: "Automotive", width: 800, height: 1200, id: 12 },
  
  { src: "/photos/p12.jpeg", title: "Wide angle shot", width: 1000, height: 1000, id: 13 },
  { src: "/photos/p14.jpg", title: "Automotive", width: 1200, height: 900, id: 14 },
  { src: "/photos/p19.jpeg", title: "Model Portrait", width: 800, height:1200, id: 15 },
];

export default function PortfolioPage() {
  return (
    <>
      <Taskbar /> ""
      <main className="font-sans antialiased">
        {/* 1. Editorial Intro */}
        <section className="py-32 md:py-40 bg-white">
          <div className="max-w-6xl mx-auto px-6">
           
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-6">
                Portfolio
              </h1>
            
              <p className="text-gray-600 text-lg max-w-2xl">
                Pilihan karya yang mewakili pendekatan visual, karakter, dan
                konsistensi Delta Frame.
              </p>
          
          </div>
        </section>

        {/* 2. Adaptive Grid */}
        <section className="pb-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {items.map((item, index) => (
                <div key={item.id || item.src || index} className="group relative break-inside-avoid overflow-hidden rounded-xl bg-gray-100">
                  <div className="group relative break-inside-avoid overflow-hidden rounded-xl bg-gray-100">
                    {/* Image Container */}
                    <div className="relative">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
               </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}