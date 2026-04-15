import { IceCream, Heart, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Company: ["About", "Pain Points", "Solutions", "Services"],
    Resources: ["Why Us", "How It Works", "Case Study", "Testimonials"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Blog"],
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 pt-16 pb-8 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection("hero")}>
              <IceCream className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-xl font-bold font-[var(--font-heading)] text-white">
                ScoopSmart
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Revolutionizing ice cream shop management with smart POS, inventory tracking, and customer loyalty solutions.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>marketing@clickmasters.pk</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+92 333-1116842</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan</span>
              </div>
            </div>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-full"
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p className="text-white/40">
                © {currentYear} ScoopSmart. All rights reserved.
              </p>
              <p className="text-white/40">
                Designed by <span className="text-primary hover:text-primary/80 transition-colors">ClickMasters</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}