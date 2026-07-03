"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPageClient() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      id: 1,
      question: "Quel est le budget minimum pour un projet ?",
      answer:
        "Notre gamme de services s'adapte à tous les budgets, de 5 000€ pour des projets ciblés à 50 000€+ pour des solutions complètes. Nous proposons une consultation gratuite pour définir l'offre adaptée à votre budget et objectifs.",
    },
    {
      id: 2,
      question: "Combien de temps faut-il pour voir les résultats ?",
      answer:
        "Les délais varient selon les services : les campagnes publicitaires génèrent des résultats en 2-4 semaines, tandis que le SEO demande 3-6 mois pour des résultats durables. Nous définissons des KPIs clairs dès le départ.",
    },
    {
      id: 3,
      question: "Pouvez-vous travailler avec mon équipe interne ?",
      answer:
        "Absolument ! Nous fonctionnons en mode collaboratif. Nous intégrons votre équipe à tous les processus et pouvons former vos collaborateurs pour assurer une transition en douceur.",
    },
    {
      id: 4,
      question: "Proposez-vous des contrats sans engagement ?",
      answer:
        "Oui, nous proposons des prestations ponctuelles ou des contrats mensuels avec possibilité de résiliation. Cependant, les résultats optimaux nécessitent généralement un engagement de 3 à 6 mois.",
    },
    {
      id: 5,
      question: "Quels secteurs d'activité gérez-vous ?",
      answer:
        "Nous avons de l'expérience dans plus de 25 secteurs : restauration, retail, services professionnels, fitness, beauté, immobilier, B2B, et bien d'autres. Notre approche s'adapte à chaque industrie.",
    },
    {
      id: 6,
      question: "Comment mesurez-vous le succès ?",
      answer:
        "Chaque projet démarre par la définition de KPIs spécifiques (ROI, leads, conversions, engagement, etc.). Nous fournissons des rapports détaillés mensuels avec tous les metrics et recommandations.",
    },
    {
      id: 7,
      question: "Effectuez-vous des contrats à long terme ?",
      answer:
        "Oui, nous proposons des partenariats long terme (6 mois, 1 an, 2 ans) avec des réductions et une meilleure flexibilité. C'est l'idéal pour une croissance durable.",
    },
    {
      id: 8,
      question: "Que se passe-t-il après un projet ?",
      answer:
        "Après le projet initial, nous proposons des services de maintenance et d'optimisation continue. Beaucoup de nos clients nous confient aussi de nouveaux projets à mesure qu'ils grandissent.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <main>
      <Navbar />

      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
                Questions Fréquentes
              </h1>
              <p className="text-xl opacity-90 max-w-2xl">
                Retrouvez les réponses aux questions les plus courantes sur nos
                services.
              </p>
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl">
              <Image
                src="/placeholder-logo.svg"
                alt="Visuel FAQ MB PUB"
                fill
                className="rounded-[1.1rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                >
                  <h3 className="text-lg font-display font-bold text-foreground pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`shrink-0 text-primary transition-transform ${
                      openItems.includes(item.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openItems.includes(item.id) && (
                  <div className="px-6 py-4 border-t border-border bg-muted/30">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary/5 border-2 border-primary rounded-lg text-center">
            <h3 className="text-2xl font-display font-bold mb-3">
              Vous avez d&apos;autres questions ?
            </h3>
            <p className="text-muted-foreground mb-6">
              N&apos;hésitez pas à nous contacter directement. Notre équipe est
              disponible pour répondre à toutes vos interrogations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
