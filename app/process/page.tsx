import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/final-cta'
import { CheckCircle2, Users, BarChart3, Rocket, Zap, Target } from 'lucide-react'

export const metadata = {
  title: 'Notre Process - MB PUB | Méthodologie Marketing',
  description: 'Découvrez notre approche méthodique et professionnelle pour la réussite de vos projets marketing.',
}

export default function ProcessPage() {
  const steps = [
    {
      number: 1,
      icon: Target,
      title: 'Diagnostic & Stratégie',
      description: 'Nous analysons votre situation actuelle, vos objectifs et votre marché pour créer une stratégie personnalisée.',
      points: [
        'Audit complet de votre présence digitale',
        'Analyse de la concurrence',
        'Définition des KPIs',
        'Création d\'une stratégie sur mesure'
      ]
    },
    {
      number: 2,
      icon: Users,
      title: 'Planification & Design',
      description: 'Nous développons un plan d\'action détaillé et créons des contenus visuels attractifs.',
      points: [
        'Création du cahier des charges',
        'Design des supports visuels',
        'Planification des campagnes',
        'Validation avec le client'
      ]
    },
    {
      number: 3,
      icon: Zap,
      title: 'Implémentation',
      description: 'Mise en place de toutes les solutions digitales et physiques selon votre plan.',
      points: [
        'Développement et déploiement',
        'Lancement des campagnes',
        'Mise en place des outils',
        'Formation de votre équipe'
      ]
    },
    {
      number: 4,
      icon: BarChart3,
      title: 'Suivi & Optimisation',
      description: 'Nous mesurons les résultats et optimisons continuellement votre stratégie.',
      points: [
        'Suivi quotidien des performances',
        'Rapports mensuels détaillés',
        'Optimisations continues',
        'Ajustements stratégiques'
      ]
    },
    {
      number: 5,
      icon: Rocket,
      title: 'Croissance & Scaling',
      description: 'Une fois les résultats validés, nous augmentons l\'impact de vos campagnes.',
      points: [
        'Augmentation des investissements',
        'Expansion géographique',
        'Nouvelles campagnes',
        'Diversification des canaux'
      ]
    }
  ]

  const qualities = [
    {
      icon: CheckCircle2,
      title: 'Transparent',
      description: 'Rapports détaillés et communications régulières sur tous les projets'
    },
    {
      icon: Users,
      title: 'Collaboratif',
      description: 'Votre équipe fait partie de nos processus de réflexion'
    },
    {
      icon: Target,
      title: 'Orienté Résultats',
      description: 'Chaque action est guidée par les objectifs commerciaux mesurables'
    },
    {
      icon: Zap,
      title: 'Innovant',
      description: 'Toujours à la pointe des dernières tendances et technologies'
    }
  ]

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Notre Méthodologie
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Un processus structuré et éprouvé pour garantir la réussite de vos projets marketing.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Timeline line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-20 w-1 h-20 bg-primary/20" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Step number circle */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="flex-grow bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3 mb-3">
                        <Icon className="text-primary flex-shrink-0 mt-1" size={24} />
                        <h3 className="text-2xl font-display font-bold">{step.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why This Approach */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Pourquoi cette approche fonctionne</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => {
              const Icon = quality.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground text-sm">{quality.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
