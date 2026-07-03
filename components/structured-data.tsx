import Script from "next/script";

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MB PUB",
  url: "https://mbpub31.com",
  logo: "https://mbpub31.com/logo1.png",
  sameAs: ["https://lnk.bio/mbpub31"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+213553924419",
      contactType: "customer service",
      email: "mbpublicite31@gmail.com",
      areaServed: "DZ",
      availableLanguage: ["French"],
    },
  ],
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MB PUB",
  image: "https://mbpub31.com/logo1.png",
  url: "https://mbpub31.com",
  telephone: "+213553924419",
  email: "mbpublicite31@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "29 Rue Colonel Chabou aek Maraval",
    addressLocality: "Oran",
    postalCode: "31000",
    addressCountry: "DZ",
  },
  priceRange: "$$$",
  description:
    "Agence marketing digitale et publicité physique spécialisée dans le branding, le web design, le SEO, les réseaux sociaux et l'enseigne commerciale.",
  areaServed: "Oran",
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MB PUB",
  url: "https://mbpub31.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mbpub31.com/contact",
    "query-input": "required name=search_term_string",
  },
};

export function StructuredData() {
  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationData)}
      </Script>
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessData)}
      </Script>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(websiteData)}
      </Script>
    </>
  );
}
