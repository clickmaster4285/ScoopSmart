import { useEffect, useRef } from "react";
import { Clock, Thermometer, Calculator, AlertTriangle } from "lucide-react";
import painQueues from "@/assets/pain-queues.jpg";
import painInventory from "@/assets/pain-inventory.jpg";

const painPoints = [
  {
    icon: Clock,
    title: "Long Queues",
    description: "Customers wait too long during rush hours, leading to frustration and lost sales. Slow service means fewer scoops sold.",
    image: painQueues,
    color: "bg-pastel-pink",
  },
  {
    icon: Thermometer,
    title: "Melting Inventory",
    description: "Without proper tracking, stock melts away before it's sold. Manual inventory counts waste time and miss critical shortages.",
    image: painInventory,
    color: "bg-pastel-mint",
  },
  {
    icon: Calculator,
    title: "Billing Errors",
    description: "Manual calculations lead to pricing mistakes, incorrect change, and unhappy customers. Every error costs you money and trust.",
    image: null,
    color: "bg-pastel-lavender",
  },
  {
    icon: AlertTriangle,
    title: "Peak Hour Chaos",
    description: "When the rush hits, everything breaks down — orders mix up, staff scrambles, and the customer experience suffers.",
    image: null,
    color: "bg-pastel-sky",
  },
];

export default function PainPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.fromTo(sectionRef.current.querySelector(".section-heading")!, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        });
        gsap.utils.toArray<HTMLElement>(".pain-card").forEach((el, i) => {
          gsap.fromTo(el, { y: 60, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
    });
  }, []);

  return (
    <section id="pain-points" ref={sectionRef} className="py-20 md:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-heading">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            Challenges You <span className="text-gradient-primary">Know Too Well</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Running an ice cream shop isn't always sweet. These common problems hurt your business daily.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map(({ icon: Icon, title, description, image, color }, i) => (
            <div key={title} className="pain-card bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border group">
              {image ? (
                <img src={image} alt={title} loading="lazy" width={800} height={800} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className={`w-full h-48 ${color} flex items-center justify-center`}>
                  <Icon className="w-16 h-16 text-foreground/30" />
                </div>
              )}
              <div className="p-6">
                <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-bold font-[var(--font-heading)] text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
