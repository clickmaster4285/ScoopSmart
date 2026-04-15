import { useEffect, useRef } from "react";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import caseStudy from "@/assets/case-study.jpg";

const stats = [
  { icon: TrendingUp, value: "45%", label: "Sales Increase" },
  { icon: Users, value: "2x", label: "Customer Retention" },
  { icon: Clock, value: "60%", label: "Faster Service" },
  { icon: DollarSign, value: "30%", label: "Cost Reduction" },
];

export default function CaseStudySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.utils.toArray<HTMLElement>(".case-animate").forEach((el, i) => {
          gsap.fromTo(el, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
        const img = sectionRef.current.querySelector(".case-img");
        if (img) {
          gsap.fromTo(img, { y: 20 }, {
            y: -20,
            scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        }
      });
    });
  }, []);

  return (
    <section id="case-study" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 case-animate">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            Success <span className="text-gradient-primary">Story</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="case-animate">
            <img
              src={caseStudy}
              alt="Happy customers at Frosty Delights"
              loading="lazy"
              width={1200}
              height={800}
              className="case-img rounded-2xl shadow-xl w-full object-cover aspect-[3/2]"
            />
          </div>
          <div>
            <h3 className="case-animate text-2xl font-bold font-[var(--font-heading)] text-foreground mb-4">
              How "Frosty Delights" Doubled Their Revenue
            </h3>
            <p className="case-animate text-muted-foreground leading-relaxed mb-6">
              Frosty Delights was a small neighborhood ice cream shop struggling with long wait times, inventory loss, and manual billing. After implementing our Smart POS and inventory management system, they saw dramatic improvements within the first 3 months.
            </p>
            <p className="case-animate text-muted-foreground leading-relaxed mb-8">
              Their customers now order ahead via mobile, the loyalty program brought back 65% of first-time visitors, and inventory waste dropped by 30%. Today, they've expanded to 3 locations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="case-animate bg-card rounded-xl p-4 border border-border text-center">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold font-[var(--font-heading)] text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
