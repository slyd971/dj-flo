import type { PressKitConfig } from "@/data/config";
import type { ClientConfig } from "@/data/clients/types";

const instagramUrl = "https://www.instagram.com/djfloparis";
const tikTokUrl = "https://www.tiktok.com/@djfloparis";
const soundCloudUrl = "https://soundcloud.com/djfloparis";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djfloparis&color=%23F5C400&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
const youtubeUrl = "https://www.youtube.com/@djfloparis";
const spotifyUrl =
  "https://open.spotify.com/playlist/478ZoJDjn5MPFv0yr78WWq?si=9fc07f2130024015";
const spotifyEmbedUrl =
  "https://open.spotify.com/embed/playlist/478ZoJDjn5MPFv0yr78WWq?utm_source=generator";
const bookingEmail = "contact@djfloparis.com";
const whatsappHref = "https://wa.me/REMPLACER_PAR_LE_NUMERO";
const heroImage = "/dj-flo/optimized/hero.jpg";
const logo = "/dj-flo/optimized/djflo-logo.svg";

const gallery = [
  {
    src: "/dj-flo/optimized/gallery/studio-portrait-1.jpg",
    alt: "DJ Flo studio portrait",
    position: "center 24%",
  },
  {
    src: "/dj-flo/optimized/gallery/urban-portrait-1.jpg",
    alt: "DJ Flo urban portrait",
    position: "center 28%",
  },
  {
    src: "/dj-flo/optimized/gallery/decks-1.jpg",
    alt: "DJ Flo behind the decks",
    position: "center 34%",
  },
  {
    src: "/dj-flo/optimized/gallery/decks-2.jpg",
    alt: "DJ Flo live at MOB Sessions",
    size: "md:col-span-2",
    position: "center 36%",
  },
  {
    src: "/dj-flo/optimized/gallery/corporate-1.jpg",
    alt: "DJ Flo corporate event",
    position: "center 45%",
  },
  {
    src: "/dj-flo/optimized/gallery/studio-portrait-2.jpg",
    alt: "DJ Flo editorial portrait",
    position: "center 22%",
  },
  {
    src: "/dj-flo/optimized/gallery/decks-3.jpg",
    alt: "DJ Flo Panam en Fete event",
    position: "center 34%",
  },
  {
    src: "/dj-flo/optimized/gallery/urban-portrait-2.jpg",
    alt: "DJ Flo outdoor portrait",
    position: "center 30%",
  },
  {
    src: "/dj-flo/optimized/gallery/portrait-hero-4.jpg",
    alt: "DJ Flo portrait",
    position: "center 30%",
    previewOnly: true,
  },
];

const clientLogos = [
  { name: "Hotel de Crillon", logo: "/dj-flo/optimized/logos/crillon.png", logoInvert: true },
  { name: "MOB House", logo: "/dj-flo/optimized/logos/mob-house.png" },
  { name: "Marriott", logo: "/dj-flo/optimized/logos/marriott.png", logoInvert: true },
  { name: "Mama Shelter", logo: "/dj-flo/optimized/logos/mama-shelter.png", logoInvert: true },
  { name: "Vinci", logo: "/dj-flo/optimized/logos/vinci.png" },
  { name: "Clarins", logo: "/dj-flo/optimized/logos/clarins.png", logoInvert: true },
  { name: "Sea Containers", logo: "/dj-flo/optimized/logos/sea-containers.png", logoInvert: true },
  { name: "Zaha Hadid Architects", logo: "/dj-flo/optimized/logos/zaha-hadid.webp", logoInvert: true },
  { name: "Melia Hotels", logo: "/dj-flo/optimized/logos/melia-hotels.png", logoInvert: true },
] satisfies NonNullable<PressKitConfig["brands"]>["items"];

const floPressKitFr: PressKitConfig = {
  metadata: {
    title: "DJ FLO – DJ Open Format Paris Londres | Hôtels & Corporate",
    description:
      "Découvrez DJ FLO, DJ open format entre Paris et Londres, spécialiste des expériences musicales premium pour hôtels, marques, rooftops et événements corporate.",
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
  artist: {
    name: "DJ FLO",
    stageLabel: "Open format - Hip-Hop - R&B - Soul - Afrobeats",
    logo: {
      src: logo,
      alt: "Logo DJ FLO",
    },
  },
  navigation: {
    items: [
      { label: "A propos", href: "#about" },
      { label: "Clients", href: "#clubs" },
      { label: "Galerie", href: "#gallery" },
      { label: "Vidéos", href: "#videos" },
      { label: "Panam' en Fête", href: "#vision" },
      { label: "Musique", href: "#sound" },
      { label: "Spotify", href: "#spotify" },
    ],
    cta: {
      label: "Booker DJ FLO",
      href: "#contact",
      variant: "primary",
    },
  },
  heroSocials: [
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
    { label: "SoundCloud", href: soundCloudUrl, icon: "soundcloud" },
    { label: "TikTok", href: tikTokUrl, icon: "tiktok" },
    { label: "Spotify", href: spotifyUrl, icon: "spotify" },
  ],
  heroVariants: {
    impact: {
      eyebrow: "",
      title: "DJ FLO",
      accent: "Premium open format",
      description:
        "Flo accompagne les lieux et les marques dans la création d'une identité sonore cohérente, du brief au dernier titre.",
      layout: "impact",
      image: {
        src: heroImage,
        alt: "DJ FLO portrait hero",
        badge: "",
        caption: "",
        position: "center 27%",
      },
      ctas: [
        { label: "Booker DJ FLO", href: "#contact", variant: "primary" },
        { label: "Ecouter", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "10+", label: "ans d'expérience" },
        { value: "120+", label: "prestations l'an dernier" },
        { value: "25+", label: "clients hotels & corporate" },
        { value: "PARIS/LONDON", label: "rayonnement" },
      ],
      proofline: "Hip-Hop - R&B - Funk - Afrobeats - Soul - Dancehall",
    },
    interactive: {
      eyebrow: "",
      title: "DJ FLO",
      accent: "LIVE",
      description:
        "Un DJ capable de lire une salle et de porter l'identité sonore d'un lieu du premier titre jusqu'à la fermeture.",
      layout: "interactive",
      image: {
        src: heroImage,
        alt: "DJ FLO live visual",
        badge: "",
        caption: "",
        position: "center 27%",
      },
      ctas: [
        { label: "Vidéos", href: "#videos", variant: "primary" },
        { label: "Galerie", href: "#gallery", variant: "secondary" },
      ],
      stats: [
        { value: "OPEN", label: "format" },
        { value: "HIP-HOP", label: "R&B & Soul" },
        { value: "AFRO", label: "Afrobeats & Dancehall" },
        { value: "NO STRESS", label: "brief to last track" },
      ],
      proofline: "Sea Containers - Hotel de Crillon - MOB House - Marriott",
    },
    showcase: {
      eyebrow: "",
      title: "DJ FLO",
      accent: "PARIS",
      description:
        "Entre prestations premium et direction de concepts culturels, Flo travaille aussi bien pour des marques comme Clarins ou Vinci que pour ses propres soirées PANAM' EN FETE.",
      layout: "showcase",
      image: {
        src: heroImage,
        alt: "DJ FLO press photo",
        badge: "",
        caption: "",
        position: "center 27%",
      },
      ctas: [
        { label: "Clients", href: "#clubs", variant: "primary" },
        { label: "Panam' en Fête", href: "#vision", variant: "secondary" },
      ],
      stats: [
        { value: "MOB", label: "sessions mensuelles" },
        { value: "200+", label: "personnes par édition" },
        { value: "1500+", label: "participants Panam" },
        { value: "10", label: "événements collectifs" },
      ],
      proofline: "Professional, warm, attentive and precise.",
    },
  },
  about: {
    eyebrow: "Bio",
    title: "Un partenaire musical\npour lieux et marques exigeants.",
    signatureLabel: "Signature",
    signatureQuote:
      "Pas de stress, pas de surprise. Juste une ambiance qui tient toutes ses promesses.",
    supportingText:
      "DJ open format basé entre Paris et Londres, spécialiste des hôtels, marques et événements premium.",
    tags: ["Open format", "Hip-Hop", "R&B", "Funk", "Afrobeats", "Soul", "Dancehall"],
    paragraphs: [
      "Fort de dix ans d'expérience dans le monde du business et de l'événementiel entre Paris et Londres, Flo n'est pas juste un DJ mais un partenaire dans la création d'expériences musicales uniques pour votre lieu ou vos clients.",
      "Il anime les soirées et événements les plus exigeants, du rooftop branché de Sea Containers à Londres au palace cinq étoiles de l'Hotel de Crillon à Paris, en passant par des événements pour Sodexo, Vinci, Asphalte ou Clarins.",
      "Son univers musical navigue entre Hip Hop, Soul, R&B et Afrobeats, mais c'est sa capacité à lire une salle et à adapter son énergie à chaque ambiance qui fait de lui un partenaire de confiance.",
      "Professionnel, souriant et à l'écoute, il prend en charge l'identité sonore de votre événement du briefing jusqu'au dernier titre.",
    ],
  },
  clubs: {
    eyebrow: "Clients",
    title: "Hotels, marques,\nlieux premium.",
    description:
      "DJ FLO intervient pour des hôtels, rooftops, marques et entreprises qui recherchent une ambiance fiable et cohérente avec leur lieu.",
    regions: [
      {
        title: "Hotels & hospitality",
        icon: "map-pin",
        items: [
          "Hotel de Crillon",
          "Hotels Renaissance",
          "MOB House",
          "MAMA Shelter",
          "AC Hotel",
          "Melia Hotels",
          "Sea Containers, Londres",
          "St Martin's Lane Hotel, Londres",
          "The Stratford Hotel, Londres",
          "One Hundred Shoreditch Hotel, Londres",
        ],
      },
      {
        title: "Corporate & marques",
        icon: "globe",
        items: [
          "Sodexo",
          "Clarins",
          "Vinci",
          "Marriott",
          "Accor",
          "Fitness Park",
          "Société Française de Rhumatologie",
          "Intercaves",
          "Zaha Hadid Architects, UK",
          "Fuse, UK",
        ],
      },
    ],
  },
  sound: {
    eyebrow: "SoundCloud",
    title: "DJ FLO\nsur SoundCloud.",
    paragraphs: [
      "Un aperçu direct de ses sets : Hip-Hop, Soul, R&B, Funk, Afrobeats, Dancehall, sélectionnés pour s'adapter au lieu et au moment.",
      "Le profil SoundCloud montre la souplesse de ses sets, capables de passer d'une ouverture élégante à une piste de danse plus directe.",
    ],
    cta: {
      label: "Ecouter sur SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "Lecteur SoundCloud DJ FLO",
    embedUrl: soundCloudEmbedUrl,
  },
  videos: {
    eyebrow: "Vidéos",
    title: "DJ FLO en action.",
    description:
      "Immersion dans l'univers de FLO.",
    items: [
      {
        id: "dj-flo-sade-badu",
        title: "Sade Badu reel",
        description: "Sélection Soul, R&B et groove pour un format vertical social.",
        src: "/dj-flo/optimized/videos/reel-sade-badu.mp4",
      },
      {
        id: "dj-flo-bounce",
        title: "Bounce reel",
        description: "Extrait Bounce : sélection dansante, rythme soutenu, format vertical.",
        src: "/dj-flo/optimized/videos/reel-bounce.mp4",
      },
      {
        id: "dj-flo-live",
        title: "FLO live",
        description: "Format vertical, image live aux platines, sélection en cours.",
        src: "/dj-flo/optimized/videos/flo-live.mp4",
      },
    ],
  },
  vision: {
    eyebrow: "Projet",
    title: "PANAM' EN FETE\npar DJ FLO.",
    intro:
      "PANAM' EN FETE est le collectif événementiel fondé par Flo pour rassembler les Parisiens autour de concepts musicaux forts.",
    paragraphs: [
      "Depuis sa création, le collectif a réuni plus de 1 500 personnes à travers une dizaine d'événements alliant exigence artistique et accessibilité.",
      "Les MOB Sessions, organisées chaque mois au MOB House à Saint-Ouen, rendent hommage à un artiste iconique avant de laisser place à une soirée dansante pensée pour créer du lien entre communautés créatives.",
    ],
    stats: [
      { value: "1500+", label: "participants" },
      { value: "10+", label: "événements" },
      { value: "200+", label: "personnes / MOB Session" },
    ],
    video: {
      src: "/dj-flo/optimized/videos/hh-vs-afrobeat.mp4",
      title: "Hip Hop vs Afrobeat",
    },
    media: [
      { src: "/dj-flo/optimized/panam/flyer-lauryn.jpg", alt: "MOB Sessions Lauryn Hill flyer", label: "MOB Sessions" },
      { src: "/dj-flo/optimized/panam/flyer-hh-afro.jpg", alt: "Hip Hop vs Afrobeat flyer", label: "HH vs Afro" },
      { src: "/dj-flo/optimized/panam/flyer-aaliyah.jpg", alt: "Aaliyah MOB Session flyer", label: "Aaliyah" },
    ],
    cta: {
      label: "Voir plus",
      href: "/panam-en-fete?client=dj-flo",
    },
  },
  spotify: {
    eyebrow: "Spotify",
    title: "Playlist DJ FLO",
    description:
      "Une playlist pour prolonger l'univers musical de DJ FLO entre Hip-Hop, R&B, Soul, Funk et Afrobeats.",
    playlists: [
      {
        id: "dj-flo-playlist",
        title: "DJ FLO selection",
        embedUrl: spotifyEmbedUrl,
      },
    ],
    badgeLabel: "Spotify",
  },
  brands: {
    eyebrow: "Références",
    title: "Des lieux et marques\navec lesquels Flo a travaillé.",
    intro:
      "Une sélection de lieux, hôtels et marques accompagnés par DJ FLO pour des événements premium à Paris, Londres et au-delà.",
    supportingText:
      "Ces références partagent la même exigence : brief clair, installation fluide, lecture de salle et ambiance tenue jusqu'au dernier titre.",
    categories: ["Hotels", "Corporate", "Luxury", "Hospitality", "Lifestyle"],
    itemLabel: "Client",
    hideItemText: true,
    inlineBelowClubs: true,
    items: clientLogos,
    fit: {
      eyebrow: "Feedback",
      title: "Ce que retiennent\nles clients.",
      points: [
        '"Merci pour cette superbe prestation. Nos clients et notre staff ont adoré !" - Marriott',
        '"Flo a totalement assuré notre soirée rap 90s. Tout le monde a dansé jusqu au petit matin." - Galerie Lefebvre',
        '"Flo était génial et nous avons passé un excellent moment. Nous avons hâte de retravailler avec lui." - Zaha Hadid Architects',
      ],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Bookings & demandes pro.",
    description:
      "Pour hôtels, rooftops, marques, événements corporate, soirées privées ou projets culturels, contactez DJ FLO.",
    methods: [
      {
        label: "Email",
        value: bookingEmail,
        href: `mailto:${bookingEmail}`,
        icon: "mail",
      },
      {
        label: "WhatsApp",
        value: "WhatsApp",
        href: whatsappHref,
        icon: "whatsapp",
        external: true,
      },
      {
        label: "Instagram",
        value: "@djfloparis",
        href: instagramUrl,
        icon: "instagram",
        external: true,
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "En images",
    description:
      "Photos presse, portraits, moments corporate et images behind the decks de DJ FLO.",
    homepageTitle: "Visuels",
    homepageCtaLabel: "Ouvrir la galerie",
    images: gallery,
  },
  footer: {
    availabilityText:
      "Disponible pour hôtels, rooftops, événements corporate, marques, soirées privées et concepts culturels.",
    navigationLabel: "Navigation",
    socialLabel: "Réseaux",
    bookingLabel: "Booking",
    fullGalleryLabel: "Galerie complète",
    allVideosLabel: "Toutes les vidéos",
  },
};

const floPressKitEn: PressKitConfig = {
  ...floPressKitFr,
  metadata: {
    title: "DJ FLO – Open Format DJ Paris & London | Hotels & Events",
    description:
      "Discover DJ FLO, an open-format DJ between Paris and London creating premium musical experiences for hotels, brands, rooftops and corporate events.",
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
  navigation: {
    items: [
      { label: "About", href: "#about" },
      { label: "Clients", href: "#clubs" },
      { label: "Gallery", href: "#gallery" },
      { label: "Videos", href: "#videos" },
      { label: "Panam' en Fete", href: "#vision" },
      { label: "Sound", href: "#sound" },
      { label: "Spotify", href: "#spotify" },
    ],
    cta: {
      label: "Book DJ FLO",
      href: "#contact",
      variant: "primary",
    },
  },
  heroVariants: {
    impact: {
      ...floPressKitFr.heroVariants.impact,
      description:
        "Flo helps venues and brands build a coherent sonic identity, from the initial brief to the very last track.",
      ctas: [
        { label: "Book DJ FLO", href: "#contact", variant: "primary" },
        { label: "Listen", href: "#sound", variant: "secondary" },
      ],
      stats: [
        { value: "10+", label: "years of experience" },
        { value: "120+", label: "events last year" },
        { value: "25+", label: "hotel & corporate clients" },
        { value: "PARIS/LONDON", label: "presence" },
      ],
    },
    interactive: {
      ...floPressKitFr.heroVariants.interactive,
      description:
        "A DJ who can read a room and carry the sound identity of a venue from the first track to the last.",
      ctas: [
        { label: "Videos", href: "#videos", variant: "primary" },
        { label: "Gallery", href: "#gallery", variant: "secondary" },
      ],
    },
    showcase: {
      ...floPressKitFr.heroVariants.showcase,
      description:
        "Between premium performances and cultural concepts, Flo works with brands like Clarins and Vinci as well as his own PANAM' EN FETE events.",
      ctas: [
        { label: "Clients", href: "#clubs", variant: "primary" },
        { label: "Panam' en Fete", href: "#vision", variant: "secondary" },
      ],
      stats: [
        { value: "MOB", label: "monthly sessions" },
        { value: "200+", label: "people per edition" },
        { value: "1500+", label: "Panam attendees" },
        { value: "10", label: "collective events" },
      ],
    },
  },
  about: {
    ...floPressKitFr.about,
    title: "A music partner\nfor demanding venues and brands.",
    signatureQuote:
      "No stress, no surprises. Just the right vibe, every time.",
    supportingText:
      "Open-format DJ based between Paris and London, trusted by hotels, brands and premium events.",
    paragraphs: [
      "With over ten years of experience across the business and events world between Paris and London, Flo is more than just a DJ. He is a partner in creating unique musical experiences for your venue or your clients.",
      "He performs at demanding events, from the buzzing rooftop of Sea Containers in London to the five-star Hotel de Crillon in Paris, as well as corporate events for Sodexo, Vinci, Asphalte and Clarins.",
      "His musical world moves between Hip Hop, Soul, R&B and Afrobeats, but what truly sets him apart is his ability to read a room and adapt his energy to every atmosphere.",
      "Professional, warm and attentive, he takes care of the entire sonic identity of your event, from the initial brief to the very last track.",
    ],
  },
  clubs: {
    ...floPressKitFr.clubs,
    title: "Hotels, brands,\npremium venues.",
    description:
      "DJ FLO performs for hotels, rooftops, brands and companies looking for a reliable atmosphere that fits the venue.",
  },
  sound: {
    ...floPressKitFr.sound,
    title: "DJ FLO\non SoundCloud.",
    paragraphs: [
      "A direct taste of his sets: Hip-Hop, Soul, R&B, Funk, Afrobeats, Dancehall, selected to fit the venue and the moment.",
      "His SoundCloud profile shows the flexibility of his sets, from an elegant opening to a more direct dancefloor feel.",
    ],
    cta: {
      label: "Listen on SoundCloud",
      href: soundCloudUrl,
      external: true,
    },
    embedTitle: "DJ FLO SoundCloud player",
  },
  videos: {
    ...floPressKitFr.videos,
    title: "DJ FLO in action.",
    description:
      "Step into FLO's world.",
  },
  vision: {
    ...floPressKitFr.vision,
    eyebrow: "Project",
    title: "PANAM' EN FETE\nby DJ FLO.",
    intro:
      "PANAM' EN FETE is the Paris event collective founded by Flo to bring people together around strong musical concepts.",
    paragraphs: [
      "Since its launch, the collective has gathered more than 1,500 people across around ten events combining artistic standards with accessibility.",
      "The MOB Sessions, held monthly at MOB House in Saint-Ouen, pay tribute to an iconic artist before shifting into a dancefloor moment designed to connect creative communities.",
    ],
    stats: [
      { value: "1500+", label: "attendees" },
      { value: "10+", label: "events" },
      { value: "200+", label: "people / MOB Session" },
    ],
    cta: {
      label: "See more",
      href: "/en/panam-en-fete?client=dj-flo-en",
    },
  },
  spotify: {
    ...floPressKitFr.spotify,
    title: "DJ FLO playlist",
    description:
      "A playlist extending DJ FLO's musical world across Hip-Hop, R&B, Soul, Funk and Afrobeats.",
  },
  brands: {
    ...floPressKitFr.brands,
    title: "Venues and brands\nFlo has worked with.",
    intro:
      "A selection of venues, hotels and brands DJ FLO has supported for premium events in Paris, London and beyond.",
    supportingText:
      "These references share the same standard: clear brief, smooth setup, room reading and a vibe held until the final track.",
    fit: {
      eyebrow: "Feedback",
      title: "What clients\nremember.",
      points: [
        '"THANK YOU!! DJ Flo was amazing and everyone had an incredible time." - Fuse',
        '"Thanks for this amazing set. Our clients and staff loved it!" - Marriott',
        '"Flo was great. We thoroughly enjoyed it and look forward to working with you again." - Zaha Hadid Architects',
      ],
    },
  },
  contact: {
    ...floPressKitFr.contact,
    title: "Bookings & inquiries.",
    description:
      "For hotels, rooftops, brands, corporate events, private parties or cultural projects, contact DJ FLO.",
  },
  gallery: {
    ...floPressKitFr.gallery,
    eyebrow: "Gallery",
    title: "Gallery",
    description:
      "Press photos, portraits, corporate moments and behind-the-decks visuals of DJ FLO.",
    homepageTitle: "Visuals",
    homepageCtaLabel: "Open gallery",
  },
  footer: {
    availabilityText:
      "Available for hotels, rooftops, corporate events, brands, private events and cultural concepts.",
    navigationLabel: "Navigation",
    socialLabel: "Socials",
    bookingLabel: "Booking",
    fullGalleryLabel: "Full gallery",
    allVideosLabel: "All videos",
  },
};

export const djFloEnClient: ClientConfig = {
  slug: "dj-flo-en",
  vercelSubdomain: "dj-flo-en.vercel.app",
  name: "DJ FLO",
  tagline: "Open-format DJ - Paris and London - premium events",
  city: "Paris",
  country: "France",
  category: "Open-format DJ / Hip-Hop / R&B / Afrobeats",
  description: floPressKitEn.metadata.description,
  longBio: floPressKitEn.about.paragraphs.join(" "),
  heroImage,
  gallery,
  socials: {
    instagram: instagramUrl,
    soundCloud: soundCloudUrl,
    tikTok: tikTokUrl,
    spotify: spotifyUrl,
    website: youtubeUrl,
  },
  contact: {
    email: bookingEmail,
    city: "Paris",
    country: "France",
  },
  services: [
    {
      title: "Hotels & rooftops",
      description:
        "Premium open-format sets for hospitality venues, rooftops and elegant guest experiences.",
    },
    {
      title: "Corporate & brands",
      description:
        "Reliable music direction for corporate events, launches and lifestyle brand moments.",
    },
    {
      title: "Cultural concepts",
      description:
        "Event concepts and community-driven formats through PANAM' EN FETE and MOB Sessions.",
    },
  ],
  testimonials: [],
  bookingEmail,
  seo: {
    title: floPressKitEn.metadata.title,
    description: floPressKitEn.metadata.description,
    keywords: [
      "DJ FLO",
      "DJ Flo Paris",
      "open format DJ Paris",
      "open format DJ London",
      "hotel DJ Paris London",
      "corporate DJ Paris",
      "private event DJ Paris",
      "MOB Sessions Paris",
    ],
    canonical: "https://dj-flo.vercel.app/",
    ogImage: heroImage,
  },
  defaultTheme: "dj-flo",
  defaultVariant: "impact",
  pressKit: floPressKitEn,
  hideFromSwitcher: true,
  languageSwitch: [
    { label: "FR", href: "/?client=dj-flo", clientSlug: "dj-flo" },
    { label: "EN", href: "/en?client=dj-flo-en", active: true },
  ],
};

export const djFloClient: ClientConfig = {
  ...djFloEnClient,
  slug: "dj-flo",
  vercelSubdomain: "dj-flo.vercel.app",
  hideFromSwitcher: false,
  tagline: "DJ open format - Paris et Londres - événements premium",
  category: "DJ open format / Hip-Hop / R&B / Afrobeats",
  description: floPressKitFr.metadata.description,
  longBio: floPressKitFr.about.paragraphs.join(" "),
  services: [
    {
      title: "Hotels & rooftops",
      description:
        "Sets open format premium pour hôtels, rooftops et expériences clients élégantes.",
    },
    {
      title: "Corporate & marques",
      description:
        "Direction musicale fiable pour événements corporate, lancements et moments lifestyle.",
    },
    {
      title: "Concepts culturels",
      description:
        "Création de formats événementiels et communautaires avec PANAM' EN FETE et les MOB Sessions.",
    },
  ],
  seo: {
    ...djFloEnClient.seo,
    title: floPressKitFr.metadata.title,
    description: floPressKitFr.metadata.description,
    keywords: [
      "DJ FLO",
      "DJ Flo Paris",
      "DJ open format Paris",
      "DJ rooftop Paris",
      "DJ soirée privée Paris",
      "DJ hôtel de luxe Paris",
      "DJ corporate Paris",
      "DJ hotel Londres",
    ],
  },
  pressKit: floPressKitFr,
  languageSwitch: [
    { label: "FR", href: "/?client=dj-flo", active: true },
    { label: "EN", href: "/en?client=dj-flo-en", clientSlug: "dj-flo-en" },
  ],
};
