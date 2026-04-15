import { useEffect, useRef } from "react";
import { Monitor, BarChart3, Heart, Smartphone } from "lucide-react";
import solutionPos from "@/assets/solution-pos.jpg";
import solutionMobile from "@/assets/solution-mobile.jpg";
import solutionInv from "@/assets/img4.webp";
import solutionLoyality from "@/assets/img3.webp";
const solutions = [
  {
    icon: Monitor,
    title: "Smart POS System",
    description: "Fast and accurate billing with touch-screen simplicity. Process orders in seconds, not minutes. Auto-calculate combos, discounts, and taxes.",
    image: solutionPos,
  },
  {
    icon: BarChart3,
    title: "Inventory Tracking",
    description: "Real-time stock monitoring that alerts you before supplies run low. Track every flavor, topping, and cone with precision to reduce wastage by up to 40%.",
    image: solutionInv,
  },
  {
    icon: Heart,
    title: "Loyalty Programs",
    description: "Built-in reward systems that keep customers coming back. Digital punch cards, birthday rewards, and personalized offers boost retention by 3x.",
    image: solutionLoyality,
  },
  {
    icon: Smartphone,
    title: "Mobile Ordering",
    description: "Let customers order and pay from their phones before they arrive. Skip the line, reduce wait times, and serve more customers during peak hours.",
    image: solutionMobile,
  },
];

export default function SolutionsSection() {
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
        gsap.utils.toArray<HTMLElement>(".solution-card").forEach((el, i) => {
          gsap.fromTo(el, { x: i % 2 === 0 ? -60 : 60, opacity: 0 }, {
            x: 0, opacity: 1, duration: 0.8, delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
    });
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-heading">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            Solutions That <span className="text-gradient-primary">Actually Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature is built to solve a real problem for ice cream shops.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map(({ icon: Icon, title, description, image }, i) => (
            <div key={title} className="solution-card bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-primary/30 transition-colors group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-pastel-pink flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-[var(--font-heading)] text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
                </div>
              </div>
              {image && (
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="mt-6 w-full h-52 object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
