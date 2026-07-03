"use client";

import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Martin",
      title: "Directrice, Salon Beauté Prestige",
      quote:
        "Nous avons enfin une image de marque à la hauteur de notre ambition. Le travail de MB PUB a transformé notre visibilité locale en vraie opportunité commerciale.",
      rating: 5,
    },
    {
      name: "Thomas Dupont",
      title: "Propriétaire, Restaurant La Table",
      quote:
        "Le branding et la signalétique ont immédiatement renforcé notre identité. Les clients nous reconnaissent mieux et nous recommandent plus facilement.",
      rating: 5,
    },
    {
      name: "Isabelle Leclerc",
      title: "Gérante, Boutique Mode",
      quote:
        "Le niveau de professionnalisme et de créativité est remarquable. Chaque support, du site au print, est pensé avec précision et élégance.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-4 text-4xl font-display font-bold text-foreground md:text-5xl">
            Ce que nos clients disent de notre travail.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Des entreprises qui ont choisi la précision, la créativité et
            l’impact visuel pour se distinguer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-[1.5rem] border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mb-6 text-base leading-8 text-foreground">
                “{testimonial.quote}”
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-primary/20 bg-primary/5 p-8">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="mb-2 text-4xl font-display font-bold text-primary">
                +300
              </p>
              <p className="text-sm text-muted-foreground">
                clients satisfaits
              </p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-display font-bold text-primary">
                98%
              </p>
              <p className="text-sm text-muted-foreground">de satisfaction</p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-display font-bold text-primary">
                +10 ans
              </p>
              <p className="text-sm text-muted-foreground">d&apos;expérience</p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-display font-bold text-primary">
                Toute l’Algérie
              </p>
              <p className="text-sm text-muted-foreground">
                interventions réalisées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
