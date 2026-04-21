export const LOCALES = ["it", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "it";

type Dict = {
  nav: { about: string; skills: string; experience: string; education: string; contact: string; cta: string };
  hero: {
    status: string;
    headline1: string;
    headline2a: string;
    headline2b: string;
    headline3a: string;
    headline3b: string;
    intro: string;
    location: string;
    currentRole: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { n: string; l: string }[];
    scrollHint: string;
  };
  about: {
    eyebrow: string;
    headingLead: string;
    headingEm: string;
    role: string;
    roleCompany: string;
    roleLabel: string;
    p1a: string; p1b: string; p1c: string;
    p2a: string; p2b: string; p2c: string;
    p3: string;
    focus: { k: string; v: string };
    languages: { k: string; v: string };
    highlights: { k: string; v: string };
    current: { k: string; v: string };
  };
  skills: {
    eyebrow: string;
    headingLead: string;
    headingEm: string;
    headingTail: string;
    description: string;
    items: { title: string; desc: string }[];
  };
  experience: {
    eyebrow: string;
    headingLead: string;
    headingEm: string;
    headingTail: string;
    linkedin: string;
    tags: { current: string; exit: string; closed: string };
    items: {
      company: string;
      role: string;
      period: string;
      location: string;
      tag: "CURRENT" | "EXIT" | "CLOSED" | "";
      description: string;
      skills: string[];
    }[];
  };
  education: {
    eyebrow: string;
    headingLead: string;
    headingEm: string;
    formation: string;
    masterTitle: string;
    masterField: string;
    bachelorTitle: string;
    bachelorField: string;
    university: string;
    languages: string;
    languagesList: { l: string; v: string; p: number }[];
  };
  contact: {
    eyebrow: string;
    headingLead: string;
    headingMid: string;
    headingTail: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    social: string;
    locationValue: string;
    phoneClickToReveal: string;
  };
  footer: { copyright: string; backToTop: string; managePreferences: string };
  consent: {
    title: string;
    body: string;
    accept: string;
    reject: string;
    manage: string;
    dismiss: string;
  };
};

export const dict: Record<Locale, Dict> = {
  it: {
    nav: {
      about: "About",
      skills: "Competenze",
      experience: "Esperienze",
      education: "Formazione",
      contact: "Contatti",
      cta: "Parliamone",
    },
    hero: {
      status: "Disponibile per advisory & ruoli di board",
      headline1: "Tech",
      headline2a: "&",
      headline2b: "innovazione",
      headline3a: "per",
      headline3b: "scalare.",
      intro:
        "Sono Luca Vidale: imprenditore tecnologico e innovation leader con background in ingegneria dell'informazione e un track record di startup cresciute fino all'exit industriale.",
      location: "Milano, Italia",
      currentRole: "Head of Innovation · Engineering Group",
      ctaPrimary: "Iniziamo a parlarne",
      ctaSecondary: "Vedi esperienze",
      stats: [
        { n: "2", l: "Exit industriali" },
        { n: "15+", l: "Anni da founder" },
        { n: "4", l: "Startup fondate" },
        { n: "∞", l: "Roadmap definite" },
      ],
      scrollHint: "Scorri",
    },
    about: {
      eyebrow: "01 — Chi sono",
      headingLead: "Costruttore di",
      headingEm: "imprese digitali.",
      role: "Head of Innovation,",
      roleCompany: "Engineering Group",
      roleLabel: "Ruolo attuale",
      p1a: "Imprenditore tecnologico e innovation leader con solido background in ingegneria dell'informazione e consolidata esperienza nella costruzione, crescita e valorizzazione di ",
      p1b: "imprese digitali",
      p1c: ".",
      p2a: "Ho fondato e guidato startup e aziende innovative operanti nello sviluppo di prodotti digitali, piattaforme web/mobile, soluzioni cloud, AI e tecnologie data-driven — contribuendo a percorsi di crescita culminati in ",
      p2b: "operazioni di exit industriale",
      p2c: ".",
      p3: "Attualmente guido l'individuazione di tecnologie emergenti, la definizione di roadmap innovative e la trasformazione della ricerca in soluzioni digitali scalabili e competitive per il Gruppo Engineering.",
      focus: { k: "Focus", v: "Product, tech & growth strategy per startup digitali" },
      languages: { k: "Lingue", v: "IT nativo · EN professional working" },
      highlights: { k: "Highlight", v: "Crispy Bacon · TechMass · EPIC Spin-Off" },
      current: { k: "Ruoli attuali", v: "Head of Innovation · Founding Board Member" },
    },
    skills: {
      eyebrow: "02 — Cosa faccio",
      headingLead: "Competenze",
      headingEm: "distintive",
      headingTail: "per crescita e valorizzazione.",
      description:
        "Sei aree di competenza dove trasformo visione strategica, scouting tecnologico e capacità operativa in risultati misurabili.",
      items: [
        { title: "Innovation Management", desc: "Scouting tecnologico, identificazione di trend emergenti e trasformazione della ricerca in soluzioni digitali scalabili." },
        { title: "Product & Tech Strategy", desc: "Definizione di roadmap, allineamento tra tecnologia e modello di business, product-market fit per startup e corporate." },
        { title: "Digital Platform Development", desc: "Piattaforme web, mobile e cloud ad alto contenuto innovativo, architetture scalabili e soluzioni data-driven." },
        { title: "Startup Execution", desc: "Costruzione di imprese digitali dalla validazione all'exit: team, prodotto, operations e positioning competitivo." },
        { title: "Data-Driven Architecture", desc: "Modelli data-driven, AI, IoT e architetture orientate a scalabilità, efficienza operativa e insight in tempo reale." },
        { title: "Exit & Growth Strategy", desc: "Percorsi di crescita, valorizzazione di asset digitali, preparazione a round seed/VC e operazioni industriali." },
      ],
    },
    experience: {
      eyebrow: "03 — Esperienze",
      headingLead: "Un percorso di",
      headingEm: "costruzione,",
      headingTail: "crescita ed exit.",
      linkedin: "LinkedIn",
      tags: { current: "ATTUALE", exit: "EXIT", closed: "CHIUSA" },
      items: [
        {
          company: "Engineering Group",
          role: "Head of Innovation",
          period: "Ott 2025 — ora",
          location: "Milano",
          tag: "CURRENT",
          description:
            "Guida della strategia di innovazione del Gruppo: identificazione di tecnologie emergenti capaci di trasformare i modelli di business dei clienti e coordinamento della roadmap tecnologica tra diversi centri di competenza.",
          skills: ["Innovation Strategy", "Tech Scouting", "Roadmap"],
        },
        {
          company: "crispy",
          role: "Founding Board Member",
          period: "Ott 2025 — ora",
          location: "—",
          tag: "CURRENT",
          description:
            "Supporto all'evoluzione strategica del modello di business, al monitoraggio delle performance e all'individuazione di nuove opportunità di innovazione e partnership.",
          skills: ["Board", "Strategy", "Partnerships"],
        },
        {
          company: "crispy (Crispy Bacon)",
          role: "CEO & Co-Founder",
          period: "Mar 2013 — Ott 2025",
          location: "Milano",
          tag: "EXIT",
          description:
            "Fondata e guidata Crispy Bacon trasformandola in un partner di riferimento nella digital transformation — UX/UI, sviluppo web/mobile, cloud e prodotti digitali. Scalato il business, consolidato il posizionamento competitivo, costruita un'organizzazione di rilievo nel panorama tech italiano. Percorso concluso con un'operazione di exit industriale.",
          skills: ["Digital Products", "UX/UI", "Cloud", "Exit"],
        },
        {
          company: "TechMass",
          role: "Co-Founder",
          period: "Mar 2017 — Gen 2019",
          location: "Germania",
          tag: "EXIT",
          description:
            "Sviluppo di una piattaforma MES plug-and-play per Industria 4.0, integrando software, IoT e cloud per la digitalizzazione dei processi produttivi. Roadmap tecnologica a supporto di un modello SaaS scalabile, orientato a efficienza operativa e raccolta dati in tempo reale.",
          skills: ["IoT", "SaaS", "Industry 4.0", "Exit"],
        },
        {
          company: "EPIC (University of Padova Spin-Off)",
          role: "Co-Founder",
          period: "Ott 2010 — Mar 2013",
          location: "Padova",
          tag: "CLOSED",
          description:
            "Co-fondatore di uno spin-off universitario focalizzato sullo sviluppo di una smart app georeferenziata con funzioni social e di prossimità. Prima esperienza imprenditoriale con forte componente di sperimentazione tecnologica e validazione d'uso.",
          skills: ["Mobile", "Geolocation", "Spin-off"],
        },
        {
          company: "Patavina Technologies",
          role: "Project Manager",
          period: "Giu 2011 — Gen 2013",
          location: "Padova",
          tag: "",
          description:
            "Gestione del piano di progetto, del team, dei rischi e della pianificazione operativa, con responsabilità di coordinamento e delivery.",
          skills: ["PM", "Delivery", "Coordination"],
        },
      ],
    },
    education: {
      eyebrow: "04 — Formazione",
      headingLead: "Formazione",
      headingEm: "& linguaggio.",
      formation: "Formazione",
      masterTitle: "Laurea Magistrale",
      masterField: "Information Engineering",
      bachelorTitle: "Laurea Triennale",
      bachelorField: "Information Engineering",
      university: "Università degli Studi di Padova",
      languages: "Lingue",
      languagesList: [
        { l: "Italiano", v: "Madrelingua", p: 100 },
        { l: "Inglese", v: "Professional working", p: 80 },
      ],
    },
    contact: {
      eyebrow: "05 — Contatti",
      headingLead: "Un progetto,",
      headingMid: "un posto in board",
      headingTail: "o una roadmap da disegnare?",
      description:
        "Scrivimi per advisory su tech strategy, ruoli di board, collaborazioni su startup digitali o progetti di innovazione. Rispondo di solito entro 48 ore.",
      email: "Email",
      phone: "Telefono",
      location: "Dove",
      social: "Social",
      locationValue: "Milano, IT",
      phoneClickToReveal: "Clicca per vedere",
    },
    footer: {
      copyright: "© {year} Luca Vidale. Costruito a Milano.",
      backToTop: "Torna su",
      managePreferences: "Preferenze cookie",
    },
    consent: {
      title: "Rispettiamo la tua privacy",
      body: "Uso cookie di analytics (Google Analytics) solo per capire come viene usato il sito. Nessun dato personale venduto, nessun cookie pubblicitario. Sta a te decidere.",
      accept: "Accetta",
      reject: "Rifiuta",
      manage: "Preferenze cookie",
      dismiss: "Chiudi",
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      status: "Open to advisory & board roles",
      headline1: "Tech",
      headline2a: "&",
      headline2b: "innovation",
      headline3a: "built to",
      headline3b: "scale.",
      intro:
        "I'm Luca Vidale — tech entrepreneur and innovation leader with a background in information engineering and a track record of building digital companies through to industrial exit.",
      location: "Milan, Italy",
      currentRole: "Head of Innovation · Engineering Group",
      ctaPrimary: "Start a conversation",
      ctaSecondary: "View experience",
      stats: [
        { n: "2", l: "Industrial exits" },
        { n: "15+", l: "Years as founder" },
        { n: "4", l: "Startups founded" },
        { n: "∞", l: "Roadmaps shaped" },
      ],
      scrollHint: "Scroll",
    },
    about: {
      eyebrow: "01 — About",
      headingLead: "Builder of",
      headingEm: "digital companies.",
      role: "Head of Innovation,",
      roleCompany: "Engineering Group",
      roleLabel: "Current role",
      p1a: "Tech entrepreneur and innovation leader with a solid background in information engineering and deep experience building, scaling and unlocking value from ",
      p1b: "digital companies",
      p1c: ".",
      p2a: "I've founded and led startups building digital products, web/mobile platforms, cloud solutions, AI and data-driven tech — contributing to growth journeys that ended in ",
      p2b: "industrial exits",
      p2c: ".",
      p3: "Today I lead the scouting of emerging technologies, the definition of innovation roadmaps and the transformation of research into scalable, competitive digital solutions for Engineering Group.",
      focus: { k: "Focus", v: "Product, tech & growth strategy for digital startups" },
      languages: { k: "Languages", v: "Native IT · Professional working EN" },
      highlights: { k: "Highlights", v: "Crispy Bacon · TechMass · EPIC Spin-Off" },
      current: { k: "Current roles", v: "Head of Innovation · Founding Board Member" },
    },
    skills: {
      eyebrow: "02 — What I do",
      headingLead: "Distinctive",
      headingEm: "capabilities",
      headingTail: "for growth and value creation.",
      description:
        "Six areas where I turn strategic vision, tech scouting and execution into measurable outcomes.",
      items: [
        { title: "Innovation Management", desc: "Tech scouting, identifying emerging trends and turning research into scalable digital solutions." },
        { title: "Product & Tech Strategy", desc: "Roadmap definition, tech–business model alignment, product–market fit for startups and enterprises." },
        { title: "Digital Platform Development", desc: "High-innovation web, mobile and cloud platforms with scalable, data-driven architectures." },
        { title: "Startup Execution", desc: "Building digital companies from validation to exit: team, product, operations and competitive positioning." },
        { title: "Data-Driven Architecture", desc: "Data-driven models, AI, IoT and architectures built for scalability, operational efficiency and real-time insight." },
        { title: "Exit & Growth Strategy", desc: "Growth paths, digital asset valorisation, seed/VC readiness and industrial exit operations." },
      ],
    },
    experience: {
      eyebrow: "03 — Experience",
      headingLead: "A journey of",
      headingEm: "building,",
      headingTail: "growth and exits.",
      linkedin: "LinkedIn",
      tags: { current: "CURRENT", exit: "EXIT", closed: "CLOSED" },
      items: [
        {
          company: "Engineering Group",
          role: "Head of Innovation",
          period: "Oct 2025 — now",
          location: "Milan",
          tag: "CURRENT",
          description:
            "Leading the Group's innovation strategy: identifying emerging technologies that can transform clients' business models and coordinating the technology roadmap across competency centres.",
          skills: ["Innovation Strategy", "Tech Scouting", "Roadmap"],
        },
        {
          company: "crispy",
          role: "Founding Board Member",
          period: "Oct 2025 — now",
          location: "—",
          tag: "CURRENT",
          description:
            "Supporting the strategic evolution of the business model, performance monitoring and the identification of new innovation and partnership opportunities.",
          skills: ["Board", "Strategy", "Partnerships"],
        },
        {
          company: "crispy (Crispy Bacon)",
          role: "CEO & Co-Founder",
          period: "Mar 2013 — Oct 2025",
          location: "Milan",
          tag: "EXIT",
          description:
            "Founded and led Crispy Bacon, turning it into a reference partner for digital transformation — UX/UI, web/mobile development, cloud and digital products. Scaled the business, consolidated competitive positioning and built a notable organisation in the Italian tech landscape. The journey ended with an industrial exit.",
          skills: ["Digital Products", "UX/UI", "Cloud", "Exit"],
        },
        {
          company: "TechMass",
          role: "Co-Founder",
          period: "Mar 2017 — Jan 2019",
          location: "Germany",
          tag: "EXIT",
          description:
            "Built a plug-and-play MES platform for Industry 4.0, integrating software, IoT and cloud to digitalise manufacturing. Shaped a technology roadmap supporting a scalable SaaS model focused on operational efficiency and real-time data collection.",
          skills: ["IoT", "SaaS", "Industry 4.0", "Exit"],
        },
        {
          company: "EPIC (University of Padova Spin-Off)",
          role: "Co-Founder",
          period: "Oct 2010 — Mar 2013",
          location: "Padua",
          tag: "CLOSED",
          description:
            "Co-founder of a university spin-off developing a geolocated smart app with social and proximity features. My first entrepreneurial experience, with strong technical experimentation and usage validation.",
          skills: ["Mobile", "Geolocation", "Spin-off"],
        },
        {
          company: "Patavina Technologies",
          role: "Project Manager",
          period: "Jun 2011 — Jan 2013",
          location: "Padua",
          tag: "",
          description:
            "Ran project planning, team, risk and operational scheduling — responsible for coordination and delivery.",
          skills: ["PM", "Delivery", "Coordination"],
        },
      ],
    },
    education: {
      eyebrow: "04 — Education",
      headingLead: "Education",
      headingEm: "& language.",
      formation: "Education",
      masterTitle: "Master's Degree",
      masterField: "Information Engineering",
      bachelorTitle: "Bachelor's Degree",
      bachelorField: "Information Engineering",
      university: "University of Padua",
      languages: "Languages",
      languagesList: [
        { l: "Italian", v: "Native", p: 100 },
        { l: "English", v: "Professional working", p: 80 },
      ],
    },
    contact: {
      eyebrow: "05 — Contact",
      headingLead: "Got a project,",
      headingMid: "a board seat",
      headingTail: "or a roadmap to shape?",
      description:
        "Write to me for tech strategy advisory, board roles, startup collaborations or innovation projects. I usually reply within 48 hours.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      social: "Social",
      locationValue: "Milan, IT",
      phoneClickToReveal: "Click to reveal",
    },
    footer: {
      copyright: "© {year} Luca Vidale. Built in Milan.",
      backToTop: "Back to top",
      managePreferences: "Cookie preferences",
    },
    consent: {
      title: "We respect your privacy",
      body: "This site uses analytics cookies (Google Analytics) only to understand how it's being used. No personal data sold, no ad cookies. Your call.",
      accept: "Accept",
      reject: "Reject",
      manage: "Cookie preferences",
      dismiss: "Close",
    },
  },
};
