import type { Metadata } from "next";
import FAQPageClient from "@/components/faq-page-client";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Consultez les réponses aux questions fréquentes sur les services marketing de MB PUB.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
