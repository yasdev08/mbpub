'use client'

import { MessageSquare, Brain, Wrench, Rocket } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Consultation',
      description: 'Écoute active de vos objectifs, défis et vision pour votre entreprise'
    },
    {
      number: 2,
      icon: Brain,
      title: 'Stratégie',
      description: 'Analyse approfondie et création d\'un plan marketing personnalisé'
    },
    {
      number: 3,
      icon: Wrench,
      title: 'Production',
      description: 'Création de tous les éléments digitaux et physiques'
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Installation / Lancement',
      description: 'Mise en place et optimisation continue pour des résultats maximaux'
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Notre Processus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une approche structurée et efficace pour transformer votre marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent -z-10"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                {/* Step Card */}
                <div className="bg-background border-2 border-primary rounded-xl p-8 text-center">
                  {/* Step Number Circle */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-lg border-4 border-background">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-4">
                    <Icon className="w-10 h-10 text-primary mx-auto" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <p className="text-lg font-medium text-foreground mb-4">
            Chaque projet est unique et mérite une attention particulière
          </p>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-block"
          >
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  )
}
