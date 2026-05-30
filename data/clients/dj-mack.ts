import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/didjay_mack/";
const soundCloudUrl = "https://soundcloud.com/didjay-mack";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/didjay-mack&color=%237C3AED&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const tikTokUrl = "https://www.tiktok.com/@didjaymack";
const instagramManagementUrl = "https://www.instagram.com/frenchsocacrew/";
const bookingEmail = "djmack.booking@gmail.com";
const whatsappHref = "https://wa.me/33685741516";
const heroImage = "/mack/gallery/hero-mack-portrait.jpeg";

const gallery = [
  {
    src: "/mack/gallery/gallery-mack-1.jpeg",
    alt: "DJ MACK live crowd moment",
    size: "md:col-span-2",
    position: "center 42%",
  },
  {
    src: "/mack/gallery/gallery-mack-2.jpeg",
    alt: "DJ MACK performing",
    position: "center 28%",
  },
  {
    src: "/mack/gallery/gallery-mack-3.jpeg",
    alt: "DJ MACK on stage",
    position: "center 35%",
  },
  {
    src: "/mack/gallery/gallery-mack-4.jpeg",
    alt: "DJ MACK portrait",
    position: "center 24%",
  },
  {
    src: "/mack/gallery/gallery-mack-7.jpeg",
    alt: "DJ MACK live event",
    size: "md:col-span-2",
    position: "center 30%",
  },
  {
    src: "/mack/gallery/gallery-mack-8.jpeg",
    alt: "DJ MACK Afro-Caribbean event",
    position: "center 26%",
  },
  {
    src: "/mack/gallery/gallery-mack-9.jpeg",
    alt: "DJ MACK stage energy",
    position: "center 30%",
  },
  {
    src: "/mack/gallery/gallery-mack-10.jpeg",
    alt: "DJ MACK press visual",
    position: "center 24%",
  },
];

const mackPressKitEn: PressKitConfig = {
  metadata: {
    title: "DJ MACK | International DJ & MC Press Kit",
    description:
      "Discover DJ MACK, Paris-based international DJ & MC, official host of Karukera One Love and a leading force in Europe's Afro-Caribbean scene.",
  },
  ui: {
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    galleryViewLabel: "View",
    galleryDownloadLabel: "Download",
    galleryCloseLabel: "Close gallery",
    galleryPreviousLabel: "Previous image",
    galleryNextLabel: "Next image",
  },
  artist: {
    name: "DJ MACK",
    stageLabel: "International DJ & MC - Paris - Worldwide",
    logo: {
      src: "",
      alt: "DJ MACK",
    },
  },
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "References", href: "#clubs" },
      { label: "Gallery", href: "#gallery" },
      { label: "Videos", href: "#videos" },
      { label: "SoundCloud", href: "#sound" },
      { label: "Action", href: "#brands" },
    ],
    cta: {
      label: "Book DJ MACK",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "Afro-Caribbean - Soca - Amapiano - Dancehall",
      title: "DJ MACK",
      accent: "International DJ & MC",
      description:
        "A leading force in Europe's Afro-Caribbean scene, DJ MACK bridges Congolese and Guadeloupean roots with global club energy, commanding every stage from the decks to the microphone.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "DJ MACK hero visual",
        badge: "DJ MACK",
        caption: "Paris to international stages",
        position: "center 34%",
      },
      ctas: [
        { label: "Book DJ MACK", href: "#contact", variant: "primary" },
        { label: "Listen", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "20 YEARS", label: "Career" },
        { value: "DJ & MC", label: "International format" },
        { value: "OFFICIAL HOST", label: "Karukera One Love" },
        { value: "PARIS", label: "Based" },
      ],
      proofline: "French Soca Crew - We Are Soca - Carnivals - Festivals",
    },
    interactive: {
      eyebrow: "Crowd control - Microphone energy - Global stages",
      title: "DJ MACK",
      accent: "LIVE",
      description:
        "As sharp on the turntables as he is on the mic, DJ MACK turns massive events into unified celebrations with a rare instinct for rhythm, timing and crowd connection.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "DJ MACK live",
        badge: "DJ MACK",
        caption: "Official host - DJ & MC",
        position: "center 34%",
      },
      ctas: [
        { label: "Videos", href: "#videos", variant: "primary" },
        { label: "Gallery", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "SOCA", label: "Caribbean pulse" },
        { value: "AFRO", label: "Amapiano & Afrobeats" },
        { value: "MC", label: "Live host energy" },
        { value: "WORLDWIDE", label: "International stages" },
      ],
      proofline: "Notting Hill - Miami - Berlin - Rotterdam - Geneva",
    },
    showcase: {
      eyebrow: "Europe's Afro-Caribbean scene",
      title: "DJ MACK",
      accent: "GLOBAL",
      description:
        "Born Stephane, DJ MACK brings together Congolese and Guadeloupean heritage with a performance language built for carnivals, festivals, clubs and high-energy cultural events.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "DJ MACK press photo",
        badge: "DJ MACK",
        caption: "Paris based - worldwide energy",
        position: "center 34%",
      },
      ctas: [
        { label: "Contact", href: "#contact", variant: "primary" },
        { label: "References", href: "#clubs", variant: "secondary" },
      ],
      stats: [
        { value: "15 YEARS", label: "French Soca Crew impact" },
        { value: "3 EDITIONS", label: "Karukera One Love host" },
        { value: "3 EDITIONS", label: "Ibiza Soca Festival" },
        { value: "FRANCE", label: "National tours" },
      ],
      proofline: "A Swiss army knife of live entertainment.",
    },
  },
  about: {
    eyebrow: "Bio",
    title: "Afro-Caribbean force,\nMC energy, global crowd instinct.",
    signatureLabel: "Signature",
    signatureQuote:
      "DJ MACK does not just play music. He commands the room.",
    supportingText:
      "A Paris-based international DJ & MC shaped by Congolese and Guadeloupean heritage.",
    tags: [
      "Soca",
      "Dancehall",
      "Amapiano",
      "Afrobeats",
      "Afro-Caribbean",
      "MC",
      "Carnivals",
      "Festivals",
    ],
    paragraphs: [
      "DJ MACK is a leading force in Europe's Afro-Caribbean scene. Born Stephane, he draws his unique energy from a rich dual heritage: Congolese and Guadeloupean.",
      "Proudly representing France on the global stage, he bridges two distinct musical worlds, delivering sets that highlight the hypnotic grooves of Afro music and the high-energy pulse of the Caribbean.",
      "A true Swiss army knife of live entertainment, he is as lethal on the turntables as he is on the microphone. His magnetic energy and exceptional MC skills have made him a highly sought-after talent by promoters worldwide.",
      "His unmatched crowd intuition led him to become the official host of the legendary Karukera One Love festival. As the official DJ of the pioneering French Soca Crew and co-founder of the We Are Soca movement, DJ MACK brings culture, rhythm and command to every stage.",
    ],
  },
  clubs: {
    eyebrow: "References",
    title: "Major carnivals,\ninternational stages.",
    description:
      "DJ MACK's contagious energy has taken him around the world, from major carnivals to sought-after Soca destinations and national club tours across France.",
    regions: [
      {
        title: "Major carnivals",
        icon: "globe",
        items: [
          "Notting Hill Carnival, London",
          "Miami Carnival",
          "Berlin Carnival",
          "Rotterdam Carnival",
          "Geneva Carnival",
        ],
      },
      {
        title: "International festivals",
        icon: "map-pin",
        items: [
          "Karukera One Love, Guadeloupe - Official Host, 3 editions",
          "Ibiza Soca Festival, Ibiza - 3 editions",
          "Ibiza Soca Festival, Malta",
          "Soca Mazza, Amsterdam",
          "Soca Mazza, Greece",
          "Soca Mazza, Gran Canaria",
        ],
      },
      {
        title: "France",
        icon: "map-pin",
        items: [
          "Intensive national tours",
          "Top clubs across France",
          "South of France performances",
          "Paris-based international bookings",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "SoundCloud",
    title: "DJ MACK\non SoundCloud.",
    paragraphs: [
      "Step into DJ MACK's sound: Soca, Dancehall, Amapiano, Afrobeats and Afro-Caribbean selections built for movement, celebration and crowd response.",
      "The SoundCloud profile is the quickest way to feel the bridge between Caribbean pulse and Afro groove that defines his live identity.",
    ],
    cta: {
      label: "Listen on SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "DJ MACK SoundCloud player",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Videos",
    title: "DJ MACK live.",
    description:
      "Selected clips showing DJ MACK's stage command, microphone energy and Afro-Caribbean crowd connection.",
    items: [
      {
        id: "dj-mack-video-1",
        title: "Live clip 01",
        description: "DJ MACK in action with crowd energy and MC presence.",
        src: "/mack/videos/video-1.mp4",
      },
      {
        id: "dj-mack-video-2",
        title: "Live clip 02",
        description: "A second live moment from the DJ MACK universe.",
        src: "/mack/videos/video-2.mp4",
      },
      {
        id: "dj-mack-video-3",
        title: "Live clip 03",
        description: "",
        src: "/mack/videos/video-3.mp4",
      },
    ],
  },
  spotify: {
    eyebrow: "Spotify",
    title: "DJ MACK playlists",
    description: "",
    playlists: [],
    badgeLabel: "DJ MACK playlists",
  },
  brands: {
    eyebrow: "",
    title: "Flyers as proof,\nscenes as receipts.",
    intro:
      "A blog-style wall of event flyers showing the movement behind the name: carnivals, Soca parties, club nights and cultural moments carried by DJ MACK's Afro-Caribbean identity.",
    supportingText:
      "Each visual works as proof of field presence: active communities, recurring formats and promoters who trust him to host, energize and connect the room.",
    categories: [],
    itemLabel: "",
    hideItemText: true,
    hideItemFrame: true,
    items: [
      { name: "Flyer 01", logo: "/mack/flyers/flyer-1.webp" },
      { name: "Flyer 02", logo: "/mack/flyers/flyer-2.jpg" },
      { name: "Flyer 03", logo: "/mack/flyers/flyer-3.jpg" },
      { name: "Flyer 04", logo: "/mack/flyers/flyer-4.jpg" },
    ],
    fit: {
      eyebrow: "Why it matters",
      title: "Built for rooms\nthat need ignition.",
      points: [
        "A DJ & MC profile that can host, drive transitions and keep the event narrative alive.",
        "A proven Afro-Caribbean identity across Soca, Dancehall, Amapiano and Afrobeats.",
        "International references that reassure promoters, festivals and cultural events.",
      ],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Booking & inquiries.",
    description:
      "For festivals, carnivals, club nights, private events and international bookings, contact DJ MACK's booking team.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "French Soca Crew",
        href: whatsappHref,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram management",
        value: "@frenchsocacrew",
        href: instagramManagementUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Gallery",
    description:
      "Press and live visuals for DJ MACK, excluding the hero image and focusing on performance, stage presence and Afro-Caribbean energy.",
    homepageTitle: "Visual proof",
    homepageCtaLabel: "Open gallery",
    images: gallery,
  },
  footer: {
    availabilityText:
      "Available for carnivals, festivals, clubs, private events and international Afro-Caribbean formats.",
    navigationLabel: "Navigation",
    socialLabel: "Socials",
    bookingLabel: "Booking",
    fullGalleryLabel: "Full gallery",
    allVideosLabel: "All videos",
  },
};

const mackPressKitFr: PressKitConfig = {
  ...mackPressKitEn,
  metadata: {
    title: "DJ MACK | Press kit DJ & MC international",
    description:
      "Découvrez DJ MACK, DJ & MC international basé à Paris, host officiel de Karukera One Love et figure de la scène afro-caribéenne européenne.",
  },
  ui: {
    openMenuLabel: "Ouvrir le menu",
    closeMenuLabel: "Fermer le menu",
    galleryViewLabel: "Voir",
    galleryDownloadLabel: "Télécharger",
    galleryCloseLabel: "Fermer la galerie",
    galleryPreviousLabel: "Image précédente",
    galleryNextLabel: "Image suivante",
  },
  navigation: {
    items: [
      { label: "Bio", href: "#about" },
      { label: "Références", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "SoundCloud", href: "#sound" },
      { label: "Action", href: "#brands" },
    ],
    cta: {
      label: "Booker DJ MACK",
      href: "#contact",
      variant: "primary",
    },
  },
  artist: {
    ...mackPressKitEn.artist,
    stageLabel: "DJ & MC international - Paris - Monde",
  },
  heroVariants: {
    impact: {
      ...mackPressKitEn.heroVariants.impact,
      eyebrow: "Afro-Caribéen - Soca - Amapiano - Dancehall",
      accent: "DJ & MC international",
      description:
        "Figure majeure de la scène afro-caribéenne européenne, DJ MACK relie ses racines congolaises et guadeloupéennes à une énergie club internationale, des platines au micro.",
      ctas: [
        { label: "Booker DJ MACK", href: "#contact", variant: "primary" },
        { label: "Écouter", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "20 ANS", label: "Carrière" },
        { value: "DJ & MC", label: "Format international" },
        { value: "HOST OFFICIEL", label: "Karukera One Love" },
        { value: "PARIS", label: "Base" },
      ],
      proofline: "French Soca Crew - We Are Soca - Carnavals - Festivals",
    },
    interactive: {
      ...mackPressKitEn.heroVariants.interactive,
      eyebrow: "Contrôle du public - Énergie micro - Scènes internationales",
      accent: "LIVE",
      description:
        "Aussi précis aux platines qu'au micro, DJ MACK transforme les grands événements en célébrations collectives avec un instinct rare du rythme, du timing et du public.",
      ctas: [
        { label: "Vidéos", href: "#videos", variant: "primary" },
        { label: "Galerie", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "SOCA", label: "Pulsation caribéenne" },
        { value: "AFRO", label: "Amapiano & Afrobeats" },
        { value: "MC", label: "Énergie live" },
        { value: "MONDE", label: "Scènes internationales" },
      ],
      proofline: "Notting Hill - Miami - Berlin - Rotterdam - Genève",
    },
    showcase: {
      ...mackPressKitEn.heroVariants.showcase,
      eyebrow: "Scène afro-caribéenne européenne",
      accent: "GLOBAL",
      description:
        "Né Stéphane, DJ MACK rassemble héritage congolais et guadeloupéen dans un langage de performance pensé pour carnavals, festivals, clubs et événements culturels à haute énergie.",
      ctas: [
        { label: "Contact", href: "#contact", variant: "primary" },
        { label: "Références", href: "#clubs", variant: "secondary" },
      ],
      stats: [
        { value: "15 ANS", label: "Impact French Soca Crew" },
        { value: "3 ÉDITIONS", label: "Host Karukera One Love" },
        { value: "3 ÉDITIONS", label: "Ibiza Soca Festival" },
        { value: "FRANCE", label: "Tournées nationales" },
      ],
      proofline: "Un couteau suisse du live entertainment.",
    },
  },
  about: {
    ...mackPressKitEn.about,
    eyebrow: "Bio",
    title: "Force afro-caribéenne,\nénergie MC, instinct global.",
    signatureQuote:
      "DJ MACK ne se contente pas de jouer de la musique. Il dirige la salle.",
    supportingText:
      "DJ & MC international basé à Paris, porté par un héritage congolais et guadeloupéen.",
    paragraphs: [
      "DJ MACK est une figure majeure de la scène afro-caribéenne européenne. Né Stéphane, il puise son énergie dans un double héritage congolais et guadeloupéen.",
      "Représentant la France sur la scène internationale, il relie deux mondes musicaux: les grooves afro, de l'Amapiano à l'Afrobeats, et l'intensité caribéenne de la Soca et du Dancehall.",
      "Aussi puissant aux platines qu'au micro, il transforme les grands événements en célébrations collectives grâce à une énergie magnétique et une vraie maîtrise MC.",
      "Host officiel du festival Karukera One Love, DJ officiel de French Soca Crew et cofondateur du mouvement We Are Soca, DJ MACK impose une présence culturelle, rythmique et scénique forte.",
    ],
  },
  clubs: {
    ...mackPressKitEn.clubs,
    eyebrow: "Références",
    title: "Carnavals majeurs,\nscènes internationales.",
    description:
      "L'énergie de DJ MACK l'a mené aux quatre coins du globe, des grands carnavals aux festivals Soca et aux tournées club en France.",
    regions: [
      {
        title: "Grands carnavals",
        icon: "globe",
        items: [
          "Notting Hill Carnival, Londres",
          "Miami Carnival",
          "Berlin Carnival",
          "Rotterdam Carnival",
          "Geneva Carnival",
        ],
      },
      {
        title: "Festivals internationaux",
        icon: "map-pin",
        items: [
          "Karukera One Love, Guadeloupe - Host officiel, 3 éditions",
          "Ibiza Soca Festival, Ibiza - 3 éditions",
          "Ibiza Soca Festival, Malte",
          "Soca Mazza, Amsterdam",
          "Soca Mazza, Grèce",
          "Soca Mazza, Gran Canaria",
        ],
      },
      {
        title: "France",
        icon: "map-pin",
        items: [
          "Tournées nationales intensives",
          "Clubs majeurs en France",
          "Performances dans le sud de la France",
          "Réservations internationales depuis Paris",
        ],
      },
    ],
  },
  sound: {
    ...mackPressKitEn.sound,
    title: "DJ MACK\nsur SoundCloud.",
    paragraphs: [
      "Entrez dans l'univers sonore de DJ MACK: Soca, Dancehall, Amapiano, Afrobeats et sélections afro-caribéennes pensées pour le mouvement.",
      "Son SoundCloud donne un accès direct au pont entre pulsation caribéenne et groove afro qui définit son identité live.",
    ],
    cta: {
      label: "Écouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Lecteur SoundCloud DJ MACK",
  },
  brands: {
    ...mackPressKitEn.brands,
    title: "Des flyers comme preuves,\ndes scènes comme terrain.",
    intro:
      "Un mur de flyers façon blog pour montrer le mouvement derrière le nom: carnavals, soirées Soca, clubs et événements culturels.",
    supportingText:
      "Chaque visuel documente une présence terrain: communautés actives, formats récurrents et promoteurs qui lui confient l'énergie de la salle.",
    fit: {
      eyebrow: "Pourquoi ca compte",
      title: "Pensé pour les salles\nqui ont besoin d'impact.",
      points: [
        "Un profil DJ & MC capable d'animer, guider les transitions et tenir le fil de l'événement.",
        "Une identité afro-caribéenne forte entre Soca, Dancehall, Amapiano et Afrobeats.",
        "Des références internationales qui rassurent promoteurs, festivals et événements culturels.",
      ],
    },
  },
  videos: {
    ...mackPressKitEn.videos,
    title: "DJ MACK en live.",
    description:
      "Une sélection d'extraits montrant la présence scénique, l'énergie micro et la connexion afro-caribéenne de DJ MACK avec le public.",
    items: [
      {
        id: "dj-mack-video-1",
        title: "Extrait live 01",
        description: "DJ MACK en action, entre énergie public et présence MC.",
        src: "/mack/videos/video-1.mp4",
      },
      {
        id: "dj-mack-video-2",
        title: "Extrait live 02",
        description: "Un deuxième moment live dans l'univers DJ MACK.",
        src: "/mack/videos/video-2.mp4",
      },
      {
        id: "dj-mack-video-3",
        title: "Extrait live 03",
        description: "",
        src: "/mack/videos/video-3.mp4",
      },
    ],
  },
  spotify: {
    ...mackPressKitEn.spotify,
    badgeLabel: "Playlists DJ MACK",
  },
  contact: {
    ...mackPressKitEn.contact,
    title: "Booking & demandes.",
    description:
      "Pour festivals, carnavals, clubs, événements privés et bookings internationaux, contactez l'équipe DJ MACK.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "French Soca Crew",
        href: whatsappHref,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Management Instagram",
        value: "@frenchsocacrew",
        href: instagramManagementUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    ...mackPressKitEn.gallery,
    title: "Galerie",
    description:
      "Sélection de visuels presse et live de DJ MACK, sans la photo hero, autour de la performance et de l'énergie afro-caribéenne.",
    homepageTitle: "Preuve visuelle",
    homepageCtaLabel: "Ouvrir la galerie",
  },
  footer: {
    availabilityText:
      "Disponible pour carnavals, festivals, clubs, événements privés et formats afro-caribéens internationaux.",
    navigationLabel: "Navigation",
    socialLabel: "Réseaux",
    bookingLabel: "Booking",
    fullGalleryLabel: "Galerie complète",
    allVideosLabel: "Toutes les vidéos",
  },
};

export const djMackEnClient: ClientConfig = {
  slug: "dj-mack-en",
  domain: "dj-mack.presskit.fr",
  vercelSubdomain: "dj-mack-en.vercel.app",
  name: "DJ MACK",
  tagline: "International DJ & MC - Afro-Caribbean - Paris based",
  city: "Paris",
  country: "France",
  category: "International DJ & MC / Soca / Afro-Caribbean",
  description: mackPressKitEn.metadata.description,
  longBio: mackPressKitEn.about.paragraphs.join(" "),
  heroImage,
  gallery,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
  },
  contact: {
    email: bookingEmail,
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Carnivals & festivals",
      description:
        "Afro-Caribbean DJ & MC energy for large-scale cultural stages and Soca-driven festival formats.",
    },
    {
      title: "Clubs & tours",
      description:
        "High-impact Soca, Dancehall, Amapiano and Afrobeats sets for clubs across France and abroad.",
    },
    {
      title: "Hosting & MC",
      description:
        "Microphone command, crowd guidance and event flow for formats that need a true host.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: mackPressKitEn.metadata.title,
    description: mackPressKitEn.metadata.description,
    keywords: [
      "DJ MACK",
      "Didjay Mack",
      "International DJ MC",
      "Soca DJ",
      "Afro-Caribbean DJ",
      "Karukera One Love host",
      "French Soca Crew",
      "DJ Paris",
    ],
    ogImage: heroImage,
  },
  defaultTheme: "violet",
  defaultVariant: "impact",
  pressKit: mackPressKitEn,
  languageSwitch: [
    { label: "FR", href: "/", clientSlug: "dj-mack" },
    { label: "EN", href: "/en", active: true },
  ],
};

export const djMackClient: ClientConfig = {
  ...djMackEnClient,
  slug: "dj-mack",
  domain: "dj-mack.presskit.fr",
  vercelSubdomain: "dj-mack.vercel.app",
  tagline: "DJ & MC international - Afro-Caribéen - basé à Paris",
  category: "DJ & MC international / Soca / Afro-Caribéen",
  description: mackPressKitFr.metadata.description,
  longBio: mackPressKitFr.about.paragraphs.join(" "),
  services: [
    {
      title: "Carnavals & festivals",
      description:
        "Énergie DJ & MC afro-caribéenne pour grandes scènes culturelles et formats festivals portés par la Soca.",
    },
    {
      title: "Clubs & tournées",
      description:
        "Sets Soca, Dancehall, Amapiano et Afrobeats à fort impact pour clubs en France et à l'international.",
    },
    {
      title: "Hosting & MC",
      description:
        "Présence micro, gestion du public et fluidité événementielle pour les formats qui ont besoin d'un vrai host.",
    },
  ],
  seo: {
    ...djMackEnClient.seo,
    title: mackPressKitFr.metadata.title,
    description: mackPressKitFr.metadata.description,
    keywords: [
      "DJ MACK",
      "Didjay Mack",
      "DJ MC international",
      "DJ Soca",
      "DJ afro-caribéen",
      "Karukera One Love",
      "French Soca Crew",
      "DJ Paris",
    ],
  },
  pressKit: mackPressKitFr,
  languageSwitch: [
    { label: "FR", href: "/", active: true },
    { label: "EN", href: "/en", clientSlug: "dj-mack-en" },
  ],
};

export const djMackFrClient: ClientConfig = {
  ...djMackClient,
  slug: "dj-mack-fr",
  vercelSubdomain: "dj-mack-fr.vercel.app",
};
