import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChoose } from "@/components/why-choose";
import { Process } from "@/components/process";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "MB PUB propose des services marketing digital et publicité physique pour renforcer votre visibilité et générer des résultats concrets.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
