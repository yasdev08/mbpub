"use client";

import { MessageSquare, Brain, Wrench, Rocket, ArrowRight } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Consultation",
      description:
        "Nous identifions vos besoins, votre positionnement et les opportunités de croissance à saisir.",
    },
    {
      number: 2,
      icon: Brain,
      title: "Conception graphique",
      description:
        "Nous élaborons une direction créative précise, cohérente et orientée résultat.",
    },
    {
      number: 3,
      icon: Wrench,
      title: "Fabrication",
      description:
        "Chaque support est produit avec un soin technique et esthétique exemplaire.",
    },
    {
      number: 4,
      icon: Rocket,
      title: "Installation",
      description:
        "Nous livrons, installons et accompagnons la mise en œuvre pour un impact durable.",
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-4xl font-display font-bold text-foreground md:text-5xl">
            Une méthode claire, élégante et efficace.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            De la première écoute à l’installation finale, chaque étape est
            pensée pour garantir une exécution impeccable.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-[1.5rem] border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                  {step.number}
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="mb-4 text-lg font-medium text-foreground">
            Chaque projet bénéficie d’un suivi attentif, d’une créativité
            maîtrisée et d’une qualité d’exécution premium.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Discutons de votre projet
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
