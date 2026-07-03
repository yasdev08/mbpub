"use client";

import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Identité digitale pour boutique locale",
      category: "Branding & web",
      description:
        "Un univers visuel cohérent, un site moderne et une présence digitale pensée pour convertir.",
      stats: "+250% de visibilité",
      image: "/resto.jpg",
    },
    {
      id: 2,
      title: "Signalétique premium pour restaurant",
      category: "Signalétique",
      description:
        "Une façade et une communication intérieure qui rehaussent l’expérience client dès l’entrée.",
      stats: "+40% de réservations",
      image: "/placeholder-logo.png",
    },
    {
      id: 3,
      title: "Campagne visuelle pour salon de beauté",
      category: "Marketing visuel",
      description:
        "Des supports modernes et des créations pensées pour générer des demandes qualifiées.",
      stats: "+300% de demandes",
      image: "/placeholder-user.jpg",
    },
    {
      id: 4,
      title: "Habillage de flotte automobile",
      category: "Mobilité publicitaire",
      description:
        "Un véhicule transformé en ambassadeur de marque, visible partout où il passe.",
      stats: "+85% de notoriété",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Présence locale pour cabinet médical",
      category: "Digital & physique",
      description:
        "Une image de marque soignée associée à une stratégie locale performante.",
      stats: "+120% de prise de rendez-vous",
      image: "/logo.png",
    },
    {
      id: 6,
      title: "Communication visuelle d’hôtel boutique",
      category: "Événementiel & branding",
      description:
        "Une expérience visuelle cohérente, élégante et mémorable à chaque point de contact.",
      stats: "+95% de satisfaction",
      image: "/placeholder-logo.svg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-4xl font-display font-bold text-foreground md:text-5xl">
            Des réalisations qui renforcent la perception de votre marque.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Chaque projet combine créativité, stratégie et excellence
            d’exécution pour vous aider à gagner en visibilité.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {project.category}
                </div>
              </div>

              <div className="relative p-8">
                <h3 className="mb-2 font-display text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Résultat
                    </p>
                    <p className="font-display text-lg font-semibold text-primary">
                      {project.stats}
                    </p>
                  </div>
                  <button
                    className="rounded-full bg-primary p-3 text-primary-foreground transition-transform hover:scale-110"
                    aria-label={`Voir le projet ${project.title}`}
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-foreground">
            Votre prochain projet mérite une identité aussi forte que votre
            ambition.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Voir votre cas
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
