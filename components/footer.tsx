"use client";

import { Mail, Phone, MapPin, Link2, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">MB PUB</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Votre partenaire marketing complète pour transformer votre
              visibilité online et offline.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://lnk.bio/mbpub31"
                target="_blank"
                className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors"
                aria-label="Link"
              >
                <Link2 size={20} />
              </a>
              <a
                href="/contact"
                className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors"
                aria-label="Contact"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="/services"
                className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors"
                aria-label="Services"
              >
                <Heart size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Solutions Digitales
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Solutions Physiques
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Entreprise
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  className="hover:text-white transition-colors"
                >
                  Notre approche
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Réalisations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+213553924419"
                  className="hover:text-white transition-colors"
                >
                  +213 (0)5 53 92 44 19
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:mbpublicite31@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  mbpublicite31@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/GsDDfKhLBH9o9u4fA"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  <span>
                    29 Rue Colonel Chabou aek Maraval
                    <br />
                    31000 Oran
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© 2026 MB PUB. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="/contact" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="/faq" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="/services" className="hover:text-white transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
