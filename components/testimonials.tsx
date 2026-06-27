"use client";

import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Martin",
      title: "Directrice, Salon Beauté Prestige",
      image: "👩‍💼",
      quote:
        "Avant MB PUB, nos réseaux sociaux stagnaient. En 3 mois, nous avons triplé nos demandes de rendez-vous. Merci pour cette transformation !",
      rating: 5,
    },
    {
      name: "Thomas Dupont",
      title: "Propriétaire, Restaurant La Table",
      image: "👨‍💼",
      quote:
        "L'enseigne et le branding qu'ils ont créés reflètent parfaitement notre vision. Les clients nous trouvent facilement et adorent notre identité visuelle.",
      rating: 5,
    },
    {
      name: "Isabelle Leclerc",
      title: "Gérante, Boutique Mode",
      image: "👩‍💼",
      quote:
        "Solution complète incroyable ! Entre le site web, Instagram et les affiches, notre visibilité a explosé. ROI très rapide.",
      rating: 5,
    },
    {
      name: "Marc Beaumont",
      title: "Directeur, Garage Auto",
      image: "👨‍💼",
      quote:
        "Les wraps sur nos véhicules font sensation en ville. La qualité et le service de MB PUB sont vraiment professionnels.",
      rating: 5,
    },
    {
      name: "Claire Rossi",
      title: "CEO, Cabinet Médical",
      image: "👩‍💼",
      quote:
        "Enfin une agence qui comprend les besoins spécifiques des services. Très réactifs et créatifs.",
      rating: 5,
    },
    {
      name: "Antoine Lefevre",
      title: "Propriétaire, Hôtel Boutique",
      image: "👨‍💼",
      quote:
        "Grâce à leurs campagnes digitales et aux photos professionnelles, notre taux d'occupation s'est amélioré de façon significative.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Ce que nos clients disent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plus de 500 entreprises nous font confiance pour transformer leur
            marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.image}</span>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-display font-bold text-primary mb-2">
                200+
              </p>
              <p className="text-sm text-muted-foreground">
                Clients satisfaits
              </p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary mb-2">
                98%
              </p>
              <p className="text-sm text-muted-foreground">
                Taux de satisfaction
              </p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary mb-2">
                7+
              </p>
              <p className="text-sm text-muted-foreground">
                Années d&apos;expérience
              </p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary mb-2">
                1000+
              </p>
              <p className="text-sm text-muted-foreground">Projets réussis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
