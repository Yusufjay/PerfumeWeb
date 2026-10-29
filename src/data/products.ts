export type Product = {
  slug: string;
  name: string;
  notes: string;
  originalPrice: string;
  price: string;
  img: string;
  tagline: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  character: string;
  occasion: string;
  longevity: string;
  size: string;
};

export const products: Product[] = [
  {
    slug: "ocean-rogue",
    name: "Ocean Rogue",
    notes: "Fresh Marine, Citrus, Crisp Amberwood",
    originalPrice: "Rp 89.000",
    price: "Rp 49.000",
    img: "/fragrances/OR.png",
    tagline: "The call of the open sea.",
    topNotes: ["Sea Salt", "Bergamot", "Lemon"],
    heartNotes: ["Marine Accord", "Lavender", "Rosemary"],
    baseNotes: ["Amberwood", "Cedar", "Musk"],
    character: "Fresh & Energetic",
    occasion: "Daily, Outdoor, Sport",
    longevity: "4 – 6 Hours",
    size: "30 ml Extrait de Parfum",
  },
  {
    slug: "ethereal-kiss",
    name: "Ethereal Kiss",
    notes: "Sandalwood, Citrus, Fruity",
    originalPrice: "Rp 99.000",
    price: "Rp 69.000",
    img: "/fragrances/EK.png",
    tagline: "A soft kiss that lingers.",
    topNotes: ["Mandarin", "Pear", "Pink Grapefruit"],
    heartNotes: ["Peach", "Jasmine", "Red Berries"],
    baseNotes: ["Sandalwood", "White Musk", "Vanilla"],
    character: "Sweet & Romantic",
    occasion: "Date, Hangout, Daily",
    longevity: "4 – 6 Hours",
    size: "50 ml Extrait de Parfum",
  },
  {
    slug: "luminous-dew",
    name: "Luminous Dew",
    notes: "Woody, Patchouli, Vanilla",
    originalPrice: "Rp 99.000",
    price: "Rp 69.000",
    img: "/fragrances/LD.png",
    tagline: "Warmth that glows from within.",
    topNotes: ["Cardamom", "Bergamot", "Pink Pepper"],
    heartNotes: ["Patchouli", "Iris", "Cedarwood"],
    baseNotes: ["Vanilla", "Vetiver", "Tonka Bean"],
    character: "Warm & Elegant",
    occasion: "Office, Dinner, Evening",
    longevity: "4 – 6 Hours",
    size: "50 ml Extrait de Parfum",
  },
  {
    slug: "noxelle",
    name: "Noxelle",
    notes: "Black Pepper, Tuscan Leather, Lavender",
    originalPrice: "Rp 99.000",
    price: "Rp 79.000",
    img: "/fragrances/NX.png",
    tagline: "Bold. Dark. Unforgettable.",
    topNotes: ["Black Pepper", "Pink Pepper", "Bergamot"],
    heartNotes: ["Lavender", "Clary Sage", "Geranium"],
    baseNotes: ["Tuscan Leather", "Oud", "Amber"],
    character: "Bold & Mysterious",
    occasion: "Night Out, Party, Formal",
    longevity: "4 – 6 Hours",
    size: "50 ml Extrait de Parfum",
  },
  {
    slug: "roughe",
    name: "Roughe",
    notes: "Clean, White Musk, Soft Amber",
    originalPrice: "Rp 99.000",
    price: "Rp 79.000",
    img: "/fragrances/RG.png",
    tagline: "Effortlessly clean, quietly confident.",
    topNotes: ["Aldehydes", "Bergamot", "Neroli"],
    heartNotes: ["Cotton Flower", "Lily of the Valley", "Orris"],
    baseNotes: ["White Musk", "Soft Amber", "Cashmere Wood"],
    character: "Clean & Comforting",
    occasion: "Daily, Office, Campus",
    longevity: "4 – 6 Hours",
    size: "50 ml Extrait de Parfum",
  },
  {
    slug: "velvet-noire",
    name: "Velvet Noire",
    notes: "Dark Vanilla, Floral, Amber",
    originalPrice: "Rp 99.000",
    price: "Rp 69.000",
    img: "/fragrances/VN.png",
    tagline: "Sensual elegance in the dark.",
    topNotes: ["Black Currant", "Saffron", "Mandarin"],
    heartNotes: ["Tuberose", "Jasmine Sambac", "Rose"],
    baseNotes: ["Dark Vanilla", "Amber", "Benzoin"],
    character: "Sensual & Luxurious",
    occasion: "Evening, Date Night, Special Event",
    longevity: "4 – 6 Hours",
    size: "50 ml Extrait de Parfum",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
