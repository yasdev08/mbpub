"use client";

import Image from "next/image";
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
  Sparkles,
} from "lucide-react";

export function Services() {
  const digitalServices = [
    {
      icon: Globe,
      title: "Impression numérique",
      description:
        "Supports digitaux élégants, performants et alignés avec votre identité de marque.",
      image: "/resto.jpg",
    },
    {
      icon: Share2,
      title: "Enseignes lumineuses LED",
      description:
        "Visibilité de nuit et impact visuel renforcé pour votre façade.",
      image: "/placeholder.svg",
    },
    {
      icon: Zap,
      title: "Branding & identité",
      description:
        "Logos, chartes graphiques et univers visuel cohérent sur tous vos supports.",
      image: "/placeholder-user.jpg",
    },
    {
      icon: Palette,
      title: "Signalétique professionnelle",
      description:
        "Signalisation intérieure et extérieure pensée pour guider et séduire.",
      image: "/logo.png",
    },
    {
      icon: MapPin,
      title: "Habillage de véhicules",
      description:
        "Une mobilité publicitaire discrète, élégante et fortement mémorable.",
      image: "/placeholder.jpg",
    },
    {
      icon: FileText,
      title: "Impression grand format",
      description:
        "Affiches, bâches et supports de grande taille pour des campagnes impactantes.",
      image: "/placeholder.jpg",
    },
    {
      icon: QrCode,
      title: "Création graphique",
      description:
        "Design sur mesure pour vos supports print, web et événementiels.",
      image: "/placeholder.jpg",
    },
  ];

  const physicalServices = [
    {
      icon: Signpost,
      title: "Enseignes commerciales",
      description: "Signalétique visible et impactante pour votre façade.",
      image: "/placeholder.jpg",
    },
    {
      icon: AlertCircle,
      title: "Signalétique intérieure",
      description:
        "Wayfinding, panneaux et indications pensées pour fluidifier l’expérience.",
      image: "/placeholder.jpg",
    },
    {
      icon: Flag,
      title: "Bannières publicitaires",
      description:
        "Bâches et supports flexibles au rendu premium et personnalisable.",
      image: "/placeholder.jpg",
    },
    {
      icon: Truck,
      title: "Branding véhicules",
      description:
        "Wraps et adhésifs pour transformer votre flotte en support de visibilité.",
      image: "/placeholder.jpg",
    },
    {
      icon: Printer,
      title: "Impression marketing",
      description:
        "Cartes, flyers, dépliants et brochures parfaitement maîtrisés.",
      image: "/placeholder.jpg",
    },
    {
      icon: Eye,
      title: "Affichage extérieur",
      description: "Panneaux et structures publicitaires durables et élégants.",
      image: "/placeholder.jpg",
    },
  ];

  const ServiceCard = ({
    Icon,
    title,
    description,
    image,
  }: {
    Icon: any;
    title: string;
    description: string;
    image?: string;
  }) => (
    <div className="group overflow-hidden rounded-[1.5rem] border border-border bg-white/80 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl">
      {image ? (
        <div className="relative h-40 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="p-7">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-7 text-muted-foreground">{description}</p>
      </div>
    </div>
  );

  return (
    <section
      id="services"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#fff9f5_100%)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles size={16} />
            Solutions de communication premium
          </div>
          <h2 className="mb-4 text-4xl font-display font-bold text-foreground md:text-5xl">
            Un accompagnement complet pour votre image et votre visibilité.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            De la création graphique aux installations, nous concevons des
            expériences visuelles cohérentes, professionnelles et mémorables.
          </p>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-border bg-white/80 p-8 shadow-sm">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <Sparkles size={16} />
              Présence visuelle à l’image de votre ambition
            </div>
            <h3 className="mb-3 text-2xl font-display font-bold text-foreground">
              Des supports professionnels, pensés pour marquer les esprits.
            </h3>
            <p className="text-base leading-8 text-muted-foreground">
              Du print à la signalétique, chaque création est pensée pour être
              visible, mémorable et cohérente avec votre identité.
            </p>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] border border-border bg-white/80 p-3 shadow-sm">
            <Image
              src="/resto.jpg"
              alt="Exemple de support publicitaire et signalétique"
              fill
              className="rounded-[1.4rem] object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              Solutions digitales & créatives
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {digitalServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                Icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              Solutions physiques & impact
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {physicalServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                Icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
