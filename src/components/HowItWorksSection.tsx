import { useEffect, useRef } from "react";
import { MessageSquare, Cog, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us Your Needs",
    description: "Share your shop details, current challenges, and goals. We'll craft a custom plan just for you.",
    color: "bg-pastel-pink",
  },
  {
    icon: Cog,
    number: "02",
    title: "We Set Everything Up",
    description: "Our team installs and configures everything like POS, inventory, loyalty programs in under 48 hours.",
    color: "bg-pastel-mint",
  },
  {
    icon: PartyPopper,
    number: "03",
    title: "Start Serving Smarter",
    description: "Go live with confidence. We train your staff and provide ongoing support to ensure smooth operations.",
    color: "bg-pastel-lavender",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        });
        gsap.utils.toArray<HTMLElement>(".step-card").forEach((el, i) => {
          tl.fromTo(el, { y: 60, opacity: 0, scale: 0.9 }, {
            y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)",
          }, i * 0.25);
        });
        const line = sectionRef.current.querySelector(".step-line");
        if (line) {
          tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power2.out" }, 0);
        }
      });
    });
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 md:py-28 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your shop.
          </p>
        </div>
        <div className="relative">
          <div className="step-line hidden md:block absolute top-24 left-[15%] right-[15%] h-1 bg-primary/20 origin-left rounded-full" />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, number, title, description, color }) => (
              <div key={number} className="step-card text-center">
                <div className={`w-20 h-20 ${color} rounded-full mx-auto mb-6 flex items-center justify-center relative`}>
                  <Icon className="w-8 h-8 text-foreground" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold flex items-center justify-center">
                    {number}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-[var(--font-heading)] text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
