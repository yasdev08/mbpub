"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(222,48,13,0.12),_transparent_42%),linear-gradient(135deg,#fffaf7_0%,#ffffff_100%)] px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.45)_100%)]" />
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur">
            <Sparkles size={16} />
            Communication visuelle premium pour entreprises ambitieuses
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-display font-bold leading-[0.95] text-foreground md:text-6xl lg:text-7xl">
              Donnez à votre marque une présence qui fait rayonner votre
              activité.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Nous accompagnons les entreprises avec des solutions de branding,
              d’impression, de signalétique et de communication visuelle qui
              renforcent la confiance et accélèrent les conversions.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Demander un devis
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-8 py-4 font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5"
            >
              Découvrir nos réalisations
            </a>
          </div>

          <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-display font-bold text-primary">
                +500
              </p>
              <p className="text-sm text-muted-foreground">projets réalisés</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-primary">
                +10 ans
              </p>
              <p className="text-sm text-muted-foreground">d&apos;expérience</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-primary">
                +300
              </p>
              <p className="text-sm text-muted-foreground">
                clients satisfaits
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white/70 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur">
            <Image
              src="/hero.jpg"
              alt="Équipe MB PUB travaillant sur une installation de signalétique et de communication visuelle"
              width={900}
              height={1100}
              className="h-[580px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
