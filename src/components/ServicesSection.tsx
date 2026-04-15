import { useEffect, useRef } from "react";
import { Settings, Plug, Headphones, Wrench, Cloud, GraduationCap } from "lucide-react";

const services = [
  { icon: Settings, title: "Complete Setup", description: "We handle end-to-end installation of POS hardware and software at your shop." },
  { icon: Plug, title: "Seamless Integration", description: "Connect all your existing tools — accounting, delivery apps, and payment gateways." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock technical assistance so you're never stuck during business hours." },
  { icon: Wrench, title: "Maintenance", description: "Regular updates and system health checks keep everything running smoothly." },
  { icon: Cloud, title: "Cloud Backup", description: "All your data safely stored in the cloud with automatic backups every hour." },
  { icon: GraduationCap, title: "Staff Training", description: "Hands-on training sessions for your team to get up to speed quickly." },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.utils.toArray<HTMLElement>(".service-card").forEach((el, i) => {
          gsap.fromTo(el, { y: 50, opacity: 0, scale: 0.95 }, {
            y: 0, opacity: 1, scale: 1, duration: 0.6, delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
    });
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide complete setup, integration, and support so your shop runs smoothly from day one.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="service-card bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-pastel-lavender flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold font-[var(--font-heading)] text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
