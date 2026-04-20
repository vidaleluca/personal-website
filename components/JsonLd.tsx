export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luca Vidale",
    givenName: "Luca",
    familyName: "Vidale",
    jobTitle: "Head of Innovation",
    url: "https://vidalelu.ca",
    image: "https://vidalelu.ca/profile.jpg",
    email: "mailto:hey@vidalelu.ca",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milano",
      addressCountry: "IT",
    },
    worksFor: {
      "@type": "Organization",
      name: "Engineering Group",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Università degli Studi di Padova",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/vidaleluca",
    ],
    knowsAbout: [
      "Innovation Management",
      "Product Strategy",
      "Digital Transformation",
      "Startup Execution",
      "Exit Strategy",
      "Cloud Architecture",
      "AI",
      "IoT",
    ],
    knowsLanguage: ["it", "en"],
    description:
      "Imprenditore tecnologico e innovation leader con track record di exit industriale. Head of Innovation in Engineering Group.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Luca Vidale",
    url: "https://vidalelu.ca",
    inLanguage: ["it-IT", "en-US"],
    author: { "@type": "Person", name: "Luca Vidale" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
