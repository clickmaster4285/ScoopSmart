import { useEffect, useRef, useState } from "react";
import { IceCream, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Pain Points", href: "#pain-points" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Study", href: "#case-study" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let gsapModule: typeof import("gsap") | null = null;
    import("gsap").then((mod) => {
      gsapModule = mod;
      if (navRef.current) {
        mod.gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      }
    });
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <IceCream className={`w-8 h-8 transition-all duration-300 ${
              !scrolled 
                ? "text-primary drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)]" 
                : "text-primary"
            }`} />
            <span className={`text-xl font-bold font-[var(--font-heading)] transition-all duration-300 ${
              !scrolled
                ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:0_0_8px_rgba(255,255,255,0.5)]"
                : "text-foreground"
            }`}>
              ScoopSmart
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  !scrolled
                    ? "text-white/90 hover:text-white [text-shadow:0_0_6px_rgba(255,255,255,0.4)] hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className={`transition-all duration-300 px-5 py-2 rounded-full text-sm font-semibold ${
                !scrolled
                  ? "bg-primary backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:border-white/50 shadow-[0_0_12px_rgba(255,255,255,0.3)] hover:shadow-[0_0_16px_rgba(255,255,255,0.5)]"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              Get Started
            </button>
          </div>

          <button
            className={`lg:hidden transition-all duration-300 ${
              !scrolled ? "text-white [text-shadow:0_0_6px_rgba(255,255,255,0.5)]" : "text-foreground"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-black hover:text-black/70 py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className="bg-primary backdrop-blur-sm text-white border border-white/30 px-5 py-2.5 rounded-full text-sm font-semibold mt-2 hover:bg-white/30 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}