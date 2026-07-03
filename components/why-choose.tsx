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
      title: "Approche complète",
      description:
        "Un positionnement digital et physique aligné pour une image cohérente et impactante.",
    },
    {
      icon: Users,
      title: "Expertise locale",
      description:
        "Nous comprenons les besoins spécifiques des entreprises qui veulent se démarquer sur leur territoire.",
    },
    {
      icon: Zap,
      title: "Résultats mesurables",
      description:
        "Des décisions guidées par des objectifs concrets, des indicateurs et une logique de performance.",
    },
    {
      icon: Award,
      title: "Design premium",
      description:
        "Des créations soignées, modernes et capables de refléter la qualité de votre marque.",
    },
    {
      icon: Headphones,
      title: "Accompagnement sur mesure",
      description:
        "Un interlocuteur dédié à votre projet, de la première idée au résultat final.",
    },
    {
      icon: CheckCircle2,
      title: "Processus éprouvé",
      description:
        "Une méthode fiable, testée et pensée pour les entreprises ambitieuses.",
    },
  ];

  return (
    <section className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-4xl font-display font-bold text-foreground md:text-5xl">
            Pourquoi les entreprises nous choisissent.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Parce que nous allions créativité, qualité de production et
            stratégie commerciale pour créer une vraie différence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group rounded-[1.5rem] border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="leading-7 text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-foreground">
            Prêt à donner à votre marque une nouvelle dimension ?
          </p>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Commençons ensemble
          </a>
        </div>
      </div>
    </section>
  );
}
