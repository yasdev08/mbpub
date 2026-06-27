"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Prêt à transformer votre marketing ?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Obtenez votre devis gratuit et personnalisé en moins de 24h
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="tel:+213553924419"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors border border-white/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <Phone size={24} />
              <span className="font-display font-semibold">Nous appeler</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              +213 (0)5 53 92 44 19
            </p>
          </a>

          <a
            href="mailto:mbpublicite31@gmail.com"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors border border-white/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <Mail size={24} />
              <span className="font-display font-semibold">Nous écrire</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              mbpublicite31@gmail.com
            </p>
          </a>
        </div>

        {/* Form CTA */}
        <div className="bg-white/95 rounded-xl p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Quel service vous intéresse ?
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Sélectionnez une option</option>
                  <option>Solutions Digitales</option>
                  <option>Solutions Physiques</option>
                  <option>Solution Complète</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                placeholder="Parlez-nous de votre projet..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-display font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Demander mon devis gratuitement
              <ArrowRight size={20} />
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Nous répondons à toutes les demandes dans les 24 heures
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
