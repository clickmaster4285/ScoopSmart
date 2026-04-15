import { useEffect, useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current) return;
        gsap.utils.toArray<HTMLElement>(".contact-animate").forEach((el, i) => {
          gsap.fromTo(el, { y: 40, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      });
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="contact-animate text-3xl md:text-5xl font-bold font-[var(--font-heading)] text-foreground mb-6">
              Let's Talk <span className="text-gradient-primary">Ice Cream</span>
            </h2>
            <p className="contact-animate text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your shop? Drop us a message and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hello@scoopsmart.com" },
                { icon: MapPin, text: "123 Dessert Lane, Sweet City, SC 12345" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="contact-animate flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-animate bg-card rounded-2xl p-8 shadow-xl border border-border space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your shop..."
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {submitted ? "Message Sent! ✅" : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
