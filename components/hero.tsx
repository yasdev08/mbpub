"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-muted blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-balance">
                Transformez votre visibilité
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Solutions marketing complètes pour les entreprises locales. Du
                digital à la signalétique, nous créons une présence cohérente
                qui attire et fidélise vos clients.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 inline-flex items-center gap-2 w-fit"
              >
                Demander un devis
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors inline-flex items-center gap-2 w-fit"
              >
                Voir nos services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-display font-bold text-primary">
                  200+
                </p>
                <p className="text-sm text-muted-foreground">
                  Clients satisfaits
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">
                  7+
                </p>
                <p className="text-sm text-muted-foreground">
                  Ans d&apos;expérience
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">
                  98%
                </p>
                <p className="text-sm text-muted-foreground">
                  Satisfaction client
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="inline-block bg-primary/10 p-4 rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                </div>
                <p className="font-display font-semibold text-foreground">
                  Créativité + Stratégie
                </p>
                <p className="text-sm text-muted-foreground">
                  Résultats mesurables
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
