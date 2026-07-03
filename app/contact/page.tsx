import type { Metadata } from "next";
import ContactPageClient from "@/components/contact-page-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez MB PUB pour un projet de marketing digital, publicité physique ou branding à Oran.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
