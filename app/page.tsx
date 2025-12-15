"use client";
import Taskbar from "./components/Taskbar";
import Image from "next/image";
import Footer from "./components/Footer";
import useInView from "./hooks/useInView";

const Animated = ({ 
  children, 
  className = "", 
  delay = 0, 
  animation = "fade-up" 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-in";
}) => {
  const { ref, inView } = useInView();
  
  const baseClasses = "transition-all duration-700 ease-out will-change-transform";
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
      className={`${baseClasses} ${inView ? visibleClasses : hiddenClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Taskbar />
      <main className="font-sans antialiased">
        {/* 1. HERO SECTION */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            {/* Fixed Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center text-white">
              <Animated animation="fade-in" delay={0}>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-3 sm:mb-4">
                  Delta Frame
                </h1>
              </Animated>
              <Animated animation="fade-in" delay={200}>
                <p className="font-light text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide uppercase mb-6 sm:mb-8">
                  Photography & Film
                </p>
              </Animated>
              <Animated animation="fade-in" delay={400}>
                <div className="w-20 sm:w-24 h-px bg-white/60 mx-auto mb-6 sm:mb-8"></div>
              </Animated>
              <Animated animation="fade-in" delay={600}>
                <p className="font-light text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
                  Capturing life's most precious moments with timeless elegance
                </p>
              </Animated>
              <Animated animation="fade-in" delay={800}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <button className="group relative overflow-hidden bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:shadow-xl min-h-11">
                    <span className="relative z-10">View Portfolio</span>
                    <span className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                  <button className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-0.5 sm:hover:-translate-y-1 min-h-11">
                    Get In Touch
                  </button>
                </div>
              </Animated>
            </div>
          </div>
          
          {/* Scroll Indicator - Hidden on small screens */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce hidden sm:block">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* 2. TESTIMONIALS SECTION */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Animated animation="fade-up">
              <div className="text-center">
                <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-gray-800 max-w-4xl mx-auto px-2">
                  "Delta Frame captured our wedding day so beautifully. Every photo tells our story."
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mt-3 sm:mt-4">
                  — Sarah & Michael, 2024
                </p>
              </div>
            </Animated>
          </div>
        </section>

        {/* 3. ABOUT SECTION */}
        <section className="py-16 md:py-24 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <Animated animation="fade-up" delay={0}>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6 md:mb-8 text-gray-900">
                  Crafting Visual Stories
                </h2>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 md:mb-6">
                  We are a boutique photography and videography studio dedicated to capturing life's most precious moments. From intimate weddings to commercial motorsport events, we blend technical expertise with artistic vision.
                </p>
              </Animated>
              <Animated animation="fade-up" delay={400}>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-6 md:mb-8">
                  Our team specializes in creating stunning visuals that tell your unique story with timeless elegance. Every frame is crafted with intention, emotion, and an unwavering commitment to excellence.
                </p>
              </Animated>
              <Animated animation="fade-up" delay={600}>
                <button className="group inline-flex items-center text-gray-900 font-medium pb-2 border-b-2 border-gray-900 transition-all duration-300 hover:text-gray-600 hover:border-gray-600">
                  Learn More About Us
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Animated>
            </div>
            
            <Animated animation="fade-left" delay={300} className="order-1 md:order-2">
              <div className="relative group">
                <div className="relative aspect-4/5 max-w-md mx-auto md:max-w-none">
                  <Image
                    src="/about.jpg"
                    alt="Our Story - Professional photography team at work"
                    fill
                    className="object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Floating stat card - Hidden on mobile to avoid overlap */}
                <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                  <p className="text-2xl lg:text-3xl font-serif text-gray-900">500+</p>
                  <p className="text-xs lg:text-sm text-gray-600">Happy Couples</p>
                </div>
              </div>
            </Animated>
          </div>
        </section>

        {/* 4. SERVICES SECTION */}
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Animated animation="fade-up" delay={0}>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-3 md:mb-4 text-gray-900">
                  Our Services
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  Comprehensive visual storytelling tailored to your unique needs
                </p>
              </div>
            </Animated>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  title: "Wedding Photography", 
                  desc: "Romantic, candid, timeless shots that capture your love story",
                  price: "Starting at $3,500"
                },
                { 
                  title: "Videography", 
                  desc: "Cinematic films that bring your moments to motion",
                  price: "Starting at $4,500"
                },
                { 
                  title: "Portrait Sessions", 
                  desc: "Personal branding, family, and lifestyle photography",
                  price: "Starting at $650"
                },
                { 
                  title: "Event Coverage", 
                  desc: "Corporate events, celebrations, and special occasions",
                  price: "Custom Quote"
                },
                { 
                  title: "Motorsport Commercial", 
                  desc: "Specialized coverage for racing and automotive events",
                  price: "Custom Quote"
                },
                { 
                  title: "Editing & Post-Production", 
                  desc: "Professional retouching and color grading services",
                  price: "Per Project"
                },
              ].map((service, index) => (
                <Animated key={service.title} delay={100 + index * 100} animation="fade-up">
                  <div className="group bg-white p-6 lg:p-8 rounded-xl border border-gray-200 sm:hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1 cursor-pointer h-full">
                    <div className="mb-5 lg:mb-6">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                        <svg className="w-7 h-7 lg:w-8 lg:h-8 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl lg:text-2xl mb-2 lg:mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3 lg:mb-4 text-sm sm:text-base">{service.desc}</p>
                      <p className="text-sm font-medium text-gray-900">{service.price}</p>
                    </div>
                    <button className="text-sm font-medium text-gray-900 pb-1 border-b-2 border-gray-900 transition-all duration-300 group-hover:text-gray-600 group-hover:border-gray-600">
                      Learn More
                    </button>
                  </div>
                </Animated>
              ))}
            </div>

            <Animated animation="fade-up" delay={800}>
              <div className="text-center mt-12 md:mt-16">
                <button className="bg-gray-900 text-white px-8 md:px-10 py-3 md:py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 md:hover:-translate-y-1 hover:shadow-lg min-h-11">
                  View All Packages
                </button>
              </div>
            </Animated>
          </div>
        </section>

        {/* 5. PORTFOLIO PREVIEW - Masonry Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <Animated animation="fade-up" delay={0}>
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-normal mb-4 text-gray-900">
                  Recent Work
                </h2>
                <p className="text-gray-600 text-lg">
                  A curated selection of our favorite moments captured
                </p>
              </div>
            </Animated>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { height: "h-96", category: "Wedding", title: "Emma & James" },
                { height: "h-80", category: "Videography", title: "Elopement Film" },
                { height: "h-96", category: "Portrait", title: "Personal Branding" },
                { height: "h-80", category: "Motorsport", title: "Track Day" },
                { height: "h-96", category: "Event", title: "Corporate Gala" },
                { height: "h-80", category: "Wedding", title: "Destination Wedding" },
              ].map((item, index) => (
                <Animated key={index} delay={100 + index * 100} animation="fade-up">
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                    <div className={`${item.height} bg-gray-200 relative overflow-hidden`}>
                      {/* Replace with actual images */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"></div>
                      <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-110">
                        {/* <Image src={`/portfolio-${index}.jpg`} alt={item.title} fill className="object-cover" /> */}
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                        <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-xs uppercase tracking-wider mb-2">{item.category}</p>
                          <h3 className="font-serif text-2xl">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Animated>
              ))}
            </div>

            <Animated animation="fade-up" delay={800}>
              <div className="text-center mt-16">
                <button className="group inline-flex items-center text-gray-900 font-medium pb-2 border-b-2 border-gray-900 transition-all duration-300 hover:text-gray-600 hover:border-gray-600">
                  View Full Portfolio
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </Animated>
          </div>
        </section>
        {/* 6. INVESTMENT SECTION */}
        <section className="py-16 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Animated animation="fade-up" delay={0}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6 md:mb-8">
                Investment
              </h2>
            </Animated>
            <Animated animation="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-gray-300 mb-8 md:mb-12 leading-relaxed px-2">
                Photography and videography packages designed to preserve your most precious memories. 
                Each collection includes professional editing, an online gallery, and personal consultation.
              </p>
            </Animated>
            <Animated animation="fade-up" delay={400}>
              <button className="bg-white text-gray-900 px-8 md:px-10 py-3 md:py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 md:hover:-translate-y-1 hover:shadow-xl min-h-11">
                View Pricing
              </button>
            </Animated>
          </div>
        </section>
      </main>
    </>
  );
}