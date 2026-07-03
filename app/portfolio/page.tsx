import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Découvrez nos réalisations marketing et succès clients. Portfolio complet de projets digitaux et physiques.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Restaurant "La Maison"',
      category: "Restauration",
      tags: ["Web", "Social Media", "Signalétique"],
      description:
        "Refonte complète de la présence digitale et mise en place de campaigns réseaux sociaux",
      results: "+450% de réservations en ligne",
      image: "/portfolio/restaurant.jpg",
    },
    {
      id: 2,
      title: 'Boutique Fitness "Power Zone"',
      category: "Fitness",
      tags: ["Branding", "Web", "Email Marketing"],
      description:
        "Création d'identité visuelle et mise en place d'une stratégie d'acquisition",
      results: "+280 membres en 6 mois",
      image: "/portfolio/fitness.jpg",
    },
    {
      id: 3,
      title: 'Cabinet de Consulting "Expert Business"',
      category: "Services B2B",
      tags: ["SEO", "Content", "LinkedIn"],
      description:
        "Stratégie de content marketing et leadership thought leadership",
      results: "+150 leads qualifiés",
      image: "/portfolio/consulting.jpg",
    },
    {
      id: 4,
      title: 'E-Commerce "Fashion Boutique"',
      category: "E-Commerce",
      tags: ["Web", "Email", "Google Ads"],
      description:
        "Plateforme e-commerce complète avec stratégie de conversion",
      results: "+600k€ de ventes annuelles",
      image: "/portfolio/ecommerce.jpg",
    },
    {
      id: 5,
      title: 'Salon Beauté "Élégance"',
      category: "Beauté",
      tags: ["Réseaux Sociaux", "Enseignes", "Branding"],
      description:
        "Refonte complète du branding et présence Instagram dynamique",
      results: "+380% d'engagement social",
      image: "/portfolio/beauty.jpg",
    },
    {
      id: 6,
      title: 'Cabinet Dentaire "Smile Clinic"',
      category: "Santé",
      tags: ["Web", "Google My Business", "Email"],
      description: "Optimisation locale et gestion de réputation en ligne",
      results: "+95 nouveaux patients",
      image: "/portfolio/dental.jpg",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Notre Portfolio
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Découvrez nos réalisations et les succès que nous avons créés pour
            nos clients.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group cursor-pointer"
              >
                {/* Placeholder for image */}
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-48 flex items-center justify-center overflow-hidden relative">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-primary opacity-20">
                      {project.category.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-display font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-bold text-primary flex items-center gap-2">
                      {project.results}
                      <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold mb-2">150+</div>
              <p className="text-lg opacity-90">Projets réalisés</p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">45M€</div>
              <p className="text-lg opacity-90">
                Revenus générés pour nos clients
              </p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold mb-2">25+</div>
              <p className="text-lg opacity-90">Secteurs d&apos;activité</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
