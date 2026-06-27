"use client";

import {
  CheckCircle2,
  Target,
  Users,
  Zap,
  Award,
  Headphones,
} from "lucide-react";

export function WhyChoose() {
  const reasons = [
    {
      icon: Target,
      title: "Solution complète",
      description: "Digital et physique intégrés pour une stratégie cohérente",
    },
    {
      icon: Users,
      title: "Expertise locale",
      description:
        "Nous comprenons les besoins des entreprises de votre région",
    },
    {
      icon: Zap,
      title: "Résultats mesurables",
      description: "Rapports détaillés et ROI transparent",
    },
    {
      icon: Award,
      title: "Design professionnel",
      description: "Travail premium qui reflète la qualité de votre marque",
    },
    {
      icon: Headphones,
      title: "Accompagnement personnalisé",
      description: "Team dédiée à votre succès",
    },
    {
      icon: CheckCircle2,
      title: "Processus éprouvé",
      description: "7 ans d'expérience et 200+ clients satisfaits",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Pourquoi choisir MB PUB ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes le partenaire marketing que votre entreprise mérite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-xl border border-border bg-white hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground mb-6">
            Prêt à transformer votre présence marketing ?
          </p>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 inline-block"
          >
            Commençons ensemble
          </a>
        </div>
      </div>
    </section>
  );
}
