import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CaseStudySection from "@/components/CaseStudySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ScoopSmart — Smart Digital Solutions for Ice Cream Shops" },
      { name: "description", content: "Manage orders, inventory, and customers effortlessly with ScoopSmart's smart POS, mobile ordering, and loyalty programs for ice cream shops." },
      { property: "og:title", content: "ScoopSmart — Serve Happiness in Every Scoop" },
      { property: "og:description", content: "Smart digital solutions that help ice cream shops operate faster and serve better experiences." },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PainPointsSection />
      <SolutionsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <CaseStudySection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}
