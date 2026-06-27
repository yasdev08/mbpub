'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Quel est le coût d\'un projet avec MB PUB ?',
      answer: 'Les tarifs varient selon la complexité et la portée du projet. Nos solutions vont de 500€ pour des services spécifiques à 15 000€+ pour des solutions complètes intégrées. Nous proposons toujours un devis transparent et sans engagement.'
    },
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'Cela dépend du type de service. Les campagnes publicitaires peuvent générer des résultats en 2-3 semaines. Le SEO et les changements organiques prennent 2-3 mois. Nous vous fournirons un timeline précis lors de la consultation.'
    },
    {
      question: 'Travaillez-vous avec les petites entreprises ?',
      answer: 'Absolument ! Nous avons spécialisé pour accompagner les petites et moyennes entreprises locales. Votre taille n\'est pas un problème, c\'est notre spécialité.'
    },
    {
      question: 'Pouvez-vous combiner digital et physique ?',
      answer: 'Oui, c\'est notre force ! Nous créons des stratégies marketing cohérentes qui intègrent votre présence online et offline pour maximiser votre impact.'
    },
    {
      question: 'Y a-t-il un contrat à long terme obligatoire ?',
      answer: 'Non. Nous proposons des engagements flexibles. Vous pouvez commencer par un projet unique ou choisir un accompagnement mensuel. La confiance se gagne, pas se force.'
    },
    {
      question: 'Comment suivre la performance de mes campagnes ?',
      answer: 'Nous fournissons des rapports mensuels détaillés avec KPIs, analytics et insights. Vous avez accès à un tableau de bord en temps réel pour certains services digitaux.'
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Toutes vos questions trouvent une réponse
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted/30 transition-colors"
              >
                <h3 className="font-display font-semibold text-lg text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 ml-4 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/10 border-t border-border">
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="mt-16 text-center bg-primary/5 border border-primary/20 rounded-xl p-8">
          <p className="text-lg font-medium text-foreground mb-4">
            Vous n&apos;avez pas trouvé la réponse ?
          </p>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-block"
          >
            Contactez-nous directement
          </a>
        </div>
      </div>
    </section>
  )
}
