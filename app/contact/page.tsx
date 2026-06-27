"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "05 53 92 44 19",
      link: "tel:+213553924419",
    },
    {
      icon: Mail,
      title: "Email",
      value: "mbpublicite31@gmail.com",
      link: "mailto:mbpublicite31@gmail.com",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "29 Rue Colonel Chabou aek Maraval, Oran",
      link: "https://maps.app.goo.gl/GsDDfKhLBH9o9u4fA",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun-Ven: 9h-18h\nSam: 10h-14h",
      link: "#",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            Parlons de Votre Projet
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Contactez notre équipe pour une consultation gratuite et découvrez
            comment nous pouvons transformer votre visibilité.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow group"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {info.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Form and Map Row */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-display font-bold mb-6">
                Envoyez-nous un Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Votre Entreprise"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="jean@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="+33 (0)1 23 45 67 89"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  >
                    <option value="">Sélectionnez un sujet...</option>
                    <option value="Services Digitales">
                      Services Digitales
                    </option>
                    <option value="Services Physiques">
                      Services Physiques
                    </option>
                    <option value="Services Complets">Services Complets</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                  Envoyer le Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                    Merci ! Nous avons reçu votre message et vous répondrons
                    très bientôt.
                  </div>
                )}
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                <h3 className="text-xl font-display font-bold mb-4">
                  Délais de Réponse
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous traitons toutes les demandes dans les 24 heures
                  ouvrables. Pour les urgences, appelez-nous directement.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                <h3 className="text-xl font-display font-bold mb-4">
                  Consultation Gratuite
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nous proposons une consultation gratuite d&apos;une heure pour
                  discuter de votre projet et définir la meilleure approche.
                </p>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
                <h3 className="text-xl font-display font-bold mb-4">
                  Suivez-Nous
                </h3>
                <p className="text-muted-foreground mb-4">
                  Pour des conseils marketing et des cas d&apos;étude, suivez MB
                  PUB sur les réseaux sociaux.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
