import { useEffect, useRef, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [hero1, hero2, hero3];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      const tl = gsap.timeline({ delay: 0.3 });
      if (headingRef.current) tl.fromTo(headingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
      if (subRef.current) tl.fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");
      if (btnRef.current) tl.fromTo(btnRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4");
    });
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Ice cream ${i + 1}`}
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-[var(--font-heading)] leading-tight mb-6"
          style={{ color: "white" }}
        >
          Serve Happiness in Every Scoop
        </h1>
        <p
          ref={subRef}
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Help your ice cream shop manage orders, inventory, and customers effortlessly with smart digital solutions.
        </p>
        <button
          ref={btnRef}
          onClick={scrollToContact}
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg"
        >
          Get Started Today
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary scale-125" : "bg-card/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
