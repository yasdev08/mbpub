"use client";

import { ArrowRight, Phone, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-primary px-4 py-24 text-primary-foreground sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-display font-bold md:text-5xl">
            Prêt à donner une nouvelle dimension à votre image de marque ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-primary-foreground/90">
            Accompagnons votre entreprise avec des solutions professionnelles
            d’impression, de signalétique et de communication visuelle.
          </p>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <a
            href="tel:+213553924419"
            className="rounded-[1.25rem] border border-white/20 bg-white/10 p-6 transition-all hover:bg-white/20"
          >
            <div className="mb-2 flex items-center gap-3">
              <Phone size={22} />
              <span className="font-display font-semibold">Nous appeler</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              +213 (0)5 53 92 44 19
            </p>
          </a>

          <a
            href="mailto:mbpublicite31@gmail.com"
            className="rounded-[1.25rem] border border-white/20 bg-white/10 p-6 transition-all hover:bg-white/20"
          >
            <div className="mb-2 flex items-center gap-3">
              <Mail size={22} />
              <span className="font-display font-semibold">Nous écrire</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              mbpublicite31@gmail.com
            </p>
          </a>
        </div>

        <div className="rounded-[2rem] bg-white/95 p-8 text-foreground shadow-2xl md:p-12">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+213 6 12 34 56 78"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Service souhaité
                </label>
                <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Sélectionnez une option</option>
                  <option>Impression numérique</option>
                  <option>Enseignes lumineuses LED</option>
                  <option>Branding & signalétique</option>
                  <option>Solution complète</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                placeholder="Parlez-nous de votre projet..."
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Demander mon devis gratuitement
              <ArrowRight size={18} />
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Nous répondons à toutes les demandes dans les 24 heures.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
