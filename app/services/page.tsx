import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { FinalCTA } from "@/components/final-cta";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Mail,
  Share2,
  Zap,
  SignpostBig,
  Lightbulb,
  Type,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez nos services complets de marketing digital et publicité physique pour transformer votre visibilité commerciale.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const digitalServices = [
    {
      icon: Globe,
      title: "Web Design & Développement",
      description:
        "Sites web modernes et responsifs optimisés pour les conversions et le SEO.",
    },
    {
      icon: Smartphone,
      title: "Gestion Réseaux Sociaux",
      description:
        "Stratégies complètes sur Instagram, Facebook, TikTok et LinkedIn pour engager votre audience.",
    },
    {
      icon: TrendingUp,
      title: "SEO & SEM",
      description:
        "Augmentez votre visibilité en ligne avec nos stratégies de référencement et publicité Google.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Campagnes ciblées et automatisées pour fidéliser votre clientèle.",
    },
    {
      icon: Zap,
      title: "Publicité Digitale",
      description:
        "Campagnes performantes sur Facebook, Instagram, Google Ads et TikTok Ads.",
    },
    {
      icon: Share2,
      title: "Content Marketing",
      description:
        "Création de contenu engageant pour établir votre autorité dans votre domaine.",
    },
  ];

  const physicalServices = [
    {
      icon: SignpostBig,
      title: "Enseignes Commerciales",
      description:
        "Design et fabrication d'enseignes attractives pour votre point de vente.",
    },
    {
      icon: Lightbulb,
      title: "Signalétique Intérieure",
      description:
        "Panneaux et affichages pour une navigation claire et professionnelle.",
    },
    {
      icon: Type,
      title: "Branding Physique",
      description:
        "Cohérence visuelle complète entre vos supports numériques et physiques.",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Nos Services Complets
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Solutions intégrées de marketing digital et publicité physique pour
            propulser votre entreprise.
          </p>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-4">
            Solutions Digitales
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Transformez votre présence en ligne avec nos solutions marketing
            numériques.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Physical Services */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-4">
            Solutions Physiques
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Renforcez votre visibilité locale avec des supports professionnels
            et attractifs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {physicalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
