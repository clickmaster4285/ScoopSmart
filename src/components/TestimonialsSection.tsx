import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Sweet Scoops Cafe",
    text: "ScoopSmart completely transformed how we run our shop. Orders are faster, inventory is automated, and our customers love the loyalty rewards!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Manager, Gelato Garden",
    text: "We reduced our wait times by 60% after switching to ScoopSmart's POS system. Peak hours are no longer a nightmare — they're our best revenue moments.",
    rating: 5,
  },
  {
    name: "Maria Lopez",
    role: "Founder, Creamery Bliss",
    text: "The mobile ordering feature alone paid for itself in the first week. Customers pre-order, we prepare, and everyone's happy. Absolutely worth it!",
    rating: 5,
  },
  {
    name: "James Park",
    role: "Owner, Frost & Co",
    text: "Their support team is incredible. Any issue gets resolved within hours, and the system has been rock-solid since day one. Best investment we've made.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      if (cardRef.current) {
        gsap.fromTo(cardRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
      }
    });
  }, [current]);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.fromTo(sectionRef.current.querySelector(".testi-heading")!, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        });
      });
    });
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-28 gradient-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 testi-heading">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            What Our <span className="text-gradient-primary">Clients Say</span>
          </h2>
        </div>
        <div ref={cardRef} className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border text-center relative">
          <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
            "{t.text}"
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="font-bold font-[var(--font-heading)] text-foreground">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-pastel-pink/30 transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-border"}`} />
            ))}
          </div>
          <button onClick={next} className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-pastel-pink/30 transition-colors">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
