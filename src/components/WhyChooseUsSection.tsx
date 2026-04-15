import { useEffect, useRef } from "react";
import { Award, Rocket, Users, TrendingUp, ShieldCheck, Clock } from "lucide-react";

const reasons = [
  { icon: Award, title: "Industry Experts", description: "10+ years helping dessert businesses thrive with technology." },
  { icon: Rocket, title: "Fast Deployment", description: "Get up and running in under 48 hours with full support." },
  { icon: Users, title: "500+ Happy Shops", description: "Trusted by ice cream brands across the country." },
  { icon: TrendingUp, title: "Proven Results", description: "Average 35% increase in efficiency within the first month." },
  { icon: ShieldCheck, title: "Data Security", description: "Enterprise-grade encryption for all your business data." },
  { icon: Clock, title: "99.9% Uptime", description: "Reliable systems that never let you down during peak hours." },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.utils.toArray<HTMLElement>(".why-card").forEach((el, i) => {
          gsap.fromTo(el, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.6, delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
    });
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            Why <span className="text-gradient-primary">Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just sell software — we partner with you for long-term success.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="why-card flex items-start gap-4 bg-card rounded-2xl p-6 shadow-md border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-pastel-sky flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-base font-bold font-[var(--font-heading)] text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
