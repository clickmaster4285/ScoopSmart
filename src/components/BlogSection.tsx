import { useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const blogs = [
  {
    image: hero1,
    title: "5 Ways to Speed Up Your Ice Cream Shop During Summer Rush",
    description: "Discover proven strategies to handle peak season like a pro and keep your customers happy even on the busiest days.",
    date: "Mar 12, 2026",
  },
  {
    image: hero2,
    title: "The Secret to Reducing Ice Cream Inventory Waste by 40%",
    description: "Learn how smart inventory tracking can save you thousands and ensure every scoop counts toward your bottom line.",
    date: "Feb 28, 2026",
  },
  {
    image: hero3,
    title: "Why Digital Loyalty Programs Are a Game Changer for Dessert Shops",
    description: "Turn first-time visitors into lifelong fans with reward systems that make your customers feel valued.",
    date: "Feb 15, 2026",
  },
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.utils.toArray<HTMLElement>(".blog-card").forEach((el, i) => {
          gsap.fromTo(el, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
    });
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            Latest from Our <span className="text-gradient-primary">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, insights, and stories to help your ice cream business thrive.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(({ image, title, description, date }) => (
            <div key={title} className="blog-card bg-card rounded-2xl overflow-hidden shadow-lg border border-border group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="overflow-hidden">
                <img src={image} alt={title} loading="lazy" width={1920} height={1080} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {date}
                </div>
                <h3 className="text-lg font-bold font-[var(--font-heading)] text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
