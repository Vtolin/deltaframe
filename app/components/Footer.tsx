import Link from "next/link";
import useInView from "../hooks/useInView";

export default function Footer() {
  const Animated = ({ 
    children, 
    className = "", 
    delay = 0, 
    animation = "fade-up" 
  }: {
    children: React.ReactNode
    className?: string
    delay?: number
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
    )
  }
    return (
<footer className="bg-gray-900 text-white py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">

    <Animated animation="fade-up">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl mb-4">
          Delta Frame
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Fotografi & Videografi untuk momen, cerita, dan energi yang tak terlupakan.
        </p>
      </div>
    </Animated>

    <Animated animation="fade-up" delay={200}>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Link href="/contact" className="cursor-pointer border border-white px-8 py-3 text-sm uppercase tracking-wider transition hover:bg-white hover:text-gray-900">
          Hubungi Kami
        </Link>
        <Link href="/portfolio" className="cursor-pointer border border-white/40 px-8 py-3 text-sm uppercase tracking-wider text-gray-300 transition hover:border-white hover:text-white">
          Lihat Portofolio
        </Link>
      </div>
    </Animated>

    <Animated animation="fade-up" delay={400}>
      <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Delta Frame. All rights reserved.
      </div>
    </Animated>

  </div>
</footer>

    )
}
