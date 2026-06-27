"use client";

import {
  Globe,
  Share2,
  Zap,
  Palette,
  MapPin,
  FileText,
  QrCode,
  Signpost,
  AlertCircle,
  Flag,
  Truck,
  Printer,
  Eye,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
export function Services() {
  const digitalServices = [
    {
      icon: Globe,
      title: "Création de sites web",
      description:
        "Sites modernes et conversants optimisés pour votre audience",
    },
    {
      icon: Share2,
      title: "Gestion des réseaux sociaux",
      description: "Stratégie et contenu pour engager votre communauté",
    },
    {
      icon: Zap,
      title: "Publicité Facebook & Instagram",
      description: "Campagnes ciblées pour générer des leads qualifiés",
    },
    {
      icon: Palette,
      title: "Branding & identité visuelle",
      description: "Logos, charte graphique et design cohérent",
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      description: "Optimisation pour la recherche locale",
    },
    {
      icon: FileText,
      title: "Création de contenu",
      description: "Articles, vidéos et visuels professionnels",
    },
    {
      icon: QrCode,
      title: "QR codes & solutions innovantes",
      description: "Connectez vos clients offline à votre présence online",
    },
  ];

  const physicalServices = [
    {
      icon: Signpost,
      title: "Enseignes commerciales",
      description: "Signalétique visible et impactante pour votre façade",
    },
    {
      icon: AlertCircle,
      title: "Signalétique intérieure",
      description: "Wayfinding et informations directives",
    },
    {
      icon: Flag,
      title: "Bannières publicitaires",
      description: "Bâches et supports flexibles personnalisés",
    },
    {
      icon: Truck,
      title: "Branding véhicules",
      description: "Wraps et adhésifs pour vos véhicules",
    },
    {
      icon: Printer,
      title: "Impression marketing",
      description: "Cartes, flyers, dépliants et brochures",
    },
    {
      icon: Eye,
      title: "Affichage extérieur",
      description: "Panneaux et structures publicitaires durables",
    },
  ];

  const ServiceCard = ({
    Icon,
    title,
    description,
  }: {
    Icon: any;
    title: string;
    description: string;
  }) => (
    <div className="group p-6 rounded-lg border border-border bg-background hover:border-primary hover:shadow-lg transition-all">
      <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className=" relative text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions complètes pour votre visibilité digitale et physique
          </p>
        </div>

        {/* Digital Solutions */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              Solutions Digitales
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                Icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Physical Solutions */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Eye className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              Solutions Physiques
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicalServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                Icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
