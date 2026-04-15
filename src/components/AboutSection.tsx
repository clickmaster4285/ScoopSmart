import { useEffect, useRef } from "react";
import { Sparkles, Zap, Shield } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.utils.toArray<HTMLElement>(".about-animate").forEach((el, i) => {
          gsap.fromTo(el, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
        const img = sectionRef.current.querySelector(".about-img");
        if (img) {
          gsap.fromTo(img, { y: 30 }, {
            y: -30,
            scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        }
      });
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="about-animate text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-6">
              Smart Solutions for <span className="text-gradient-primary">Sweet Success</span>
            </h2>
            <p className="about-animate text-lg text-muted-foreground leading-relaxed mb-8">
              We build smart digital solutions that help ice cream shops operate faster and serve better experiences. From small dessert corners to growing brands, our systems simplify operations, reduce waste, and improve customer satisfaction.
            </p>
            <p className="about-animate text-lg text-muted-foreground leading-relaxed mb-8">
              With powerful POS, cloud tools, and automation, we help you stay cool even during peak hours.
            </p>
            <div className="about-animate flex flex-wrap gap-4">
              {[
                { icon: Sparkles, label: "Innovation First" },
                { icon: Zap, label: "Lightning Fast" },
                { icon: Shield, label: "Reliable & Secure" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-pastel-pink/30 rounded-full px-4 py-2">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-animate relative">
            <img
              src={aboutTeam}
              alt="Our team serving ice cream"
              loading="lazy"
              width={1200}
              height={600}
              className="about-img rounded-2xl shadow-xl w-full object-cover aspect-[2/1]"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl gradient-pink-mint opacity-60" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full gradient-lavender-sky opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
