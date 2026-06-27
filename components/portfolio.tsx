'use client'

import { Eye } from 'lucide-react'

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Boutique Locale',
      category: 'Digital',
      description: 'Site e-commerce + réseaux sociaux',
      stats: '+250% ventes online'
    },
    {
      id: 2,
      title: 'Cabaret Restaurant Prestige',
      category: 'Digital + Physique',
      description: 'Branding complet + signalétique',
      stats: '+40% réservations'
    },
    {
      id: 3,
      title: 'Salon de Beauté Moderne',
      category: 'Digital',
      description: 'Instagram ads + booking system',
      stats: '+300% demandes'
    },
    {
      id: 4,
      title: 'Garage Automobile Premium',
      category: 'Physique',
      description: 'Enseigne + wraps véhicules',
      stats: '+85% visibilité'
    },
    {
      id: 5,
      title: 'Cabinet Dentaire',
      category: 'Digital + Physique',
      description: 'Site web + Google Business',
      stats: '+120% patients'
    },
    {
      id: 6,
      title: 'Hôtel Boutique',
      category: 'Digital',
      description: 'Photos pro + campagnes ciblées',
      stats: '+95% taux occupation'
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Nos Réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous avons transformé le marketing de nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-muted rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:shadow-xl"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all"></div>

              {/* Content */}
              <div className="relative p-8 h-80 flex flex-col justify-between">
                {/* Category Badge */}
                <div className="inline-flex">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    {project.category}
                  </span>
                </div>

                {/* Middle Content */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Stats & CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Résultat</p>
                    <p className="text-lg font-display font-bold text-primary">
                      {project.stats}
                    </p>
                  </div>
                  <button
                    className="bg-primary text-primary-foreground p-3 rounded-full group-hover:scale-110 transition-transform"
                    aria-label="View project"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground mb-6">
            Voyez comment nous pouvons transformer votre entreprise
          </p>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 inline-block"
          >
            Voir votre cas
          </a>
        </div>
      </div>
    </section>
  )
}
