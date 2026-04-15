import { IceCream, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <IceCream className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold font-[var(--font-heading)] text-background">ScoopSmart</span>
          </div>
          <p className="text-sm text-background/60 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 fill-primary text-primary" /> for ice cream lovers everywhere
          </p>
          <p className="text-sm text-background/40">
            © 2026 ScoopSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
