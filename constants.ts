import { Service, PricingPackage, GalleryItem, Testimonial } from './types';

export const SERVICES_DATA: Service[] = [
  { name: 'Mini Interior & Exterior', description: 'A thorough hand wash and quick interior refresh for a clean, professional look.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/blue_lamborghini_washing.png?updatedAt=1758762754766', link: '/exterior-detailing' },
  { name: 'Basic Detail Package', description: 'Comprehensive cleaning and surface protection for daily maintenance and lasting value.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Interior%20Restoration_card.png', link: '/interior-restoration' },
  { name: 'Complete Detail', description: 'The ultimate restoration for both interior and exterior surfaces to achieve a showroom finish.', image: 'https://images.unsplash.com/photo-1616422285923-45a7c244ab43?q=80&w=2670&auto=format&fit=crop', link: '/deep-interior-shampoo' },
  { name: 'Ceramic Coating', description: 'High-performance nano-tech paint protection for long-lasting mirror shine and durability.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Blur_bmwm4_ceramiccoated.png?updatedAt=1759719374116', link: '/ceramic-coating' },
  { name: 'Paint Correction', description: 'Advanced machine polishing to remove swirls and scratches, restoring paint clarity.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/yellow_lambo.png', link: '/paint-correction' },
  { name: 'Odor & Mold Remediation', description: 'Deep sanitization and ozone treatments to ensure a healthy and fresh cabin environment.', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Odor_Elimination.png', link: '/odor-elimination' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { quote: "Nano Mobile transformed my car. The gold standard in detailing—literally. They came to my office and the results were stunning.", name: "Andrew", location: "West Vancouver" },
  { quote: "The best detailing in Vancouver. Meticulous, professional, and the 'Your Car's Best Friend' tagline really fits the care they take.", name: "Marcus", location: "Burnaby" },
  { quote: "Incredible interior restoration. They removed stains I thought were permanent. The new-car feel is real!", name: "Sarah", location: "Richmond" },
  { quote: "Prompt, high-tech, and amazing results. Love the convenience of them bringing their own water and power.", name: "Ethan", location: "Vancouver" },
];

export const PRICING_DATA: PricingPackage[] = [
    {
        title: 'Mini Refresh',
        price: '$149',
        features: [
            'Premium Hand Wash',
            'Wheel & Rim Deep Clean',
            'Express Interior Vacuum',
            'Dashboard Wipe Down',
            'Scent Refresh'
        ],
        isFeatured: false,
    },
    {
        title: 'Basic Package',
        price: '$349',
        features: [
            'Everything in Mini, plus:',
            'Full Paint Decontamination',
            'Durable Wax Sealant',
            'Steam Cleaned Vents & Console',
            'Leather/Fabric Conditioned',
            'Streak-Free Glass'
        ],
        isFeatured: true,
    },
    {
        title: 'Complete Detail',
        price: '$699',
        features: [
            'Everything in Basic, plus:',
            'Engine Bay Restoration',
            'Deep Hot Water Extraction',
            'One-Step Gloss Polish',
            'Full Surface Sanitization',
            'UV Protection Coating'
        ],
        isFeatured: false,
    }
];

export const GALLERY_DATA: GalleryItem[] = [
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/911_before_detail.png', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/911_after_detail.png', title: 'Paint Correction & Ceramic Coating' },
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/jeep_before_detail.png?updatedAt=1759629190001', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/jeep_after_detail.png?updatedAt=1759629189923', title: 'Complete Interior Restoration' },
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/m4_before_hydro.png?updatedAt=1759630759476', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/m4_after_hydro.png?updatedAt=1759630759462', title: 'Nano-Hydrophobic Protection' },
  { before: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Odor_Elimination.png', after: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/Interior%20Restoration_card.png', title: 'Deep Shampoo & Odor Removal' },
];

// Added missing FAQ categories for specific service pages
export const FAQ_DATA = {
    general: [
        { question: 'What makes Nano Mobile Detailing "Your Car\'s Best Friend"?', answer: 'We treat every vehicle as if it were our own. This means using only pH-neutral chemicals that won\'t degrade your clear coat, employing the two-bucket wash method to prevent swirl marks, and utilizing specialized tools like dual-action polishers that provide maximum shine without heat damage.' },
        { question: 'Do I need to provide water or electricity?', answer: 'No. Our mobile detailing labs are 100% self-sufficient. We carry onboard filtered water (to prevent mineral spots) and silent generators for power. We can detail your car anywhere—even in remote parking lots or office complexes.' },
        { question: 'Can you work in underground parkades?', answer: 'Yes. We are specialists in apartment and condo parkades. Our "Rinseless Wash" technology allows us to provide a premium detail in confined spaces without making a mess or violating strata bylaws regarding water usage.' },
        { question: 'How long does a professional detail take?', answer: 'A "Mini Refresh" takes about 1.5–2 hours. A "Complete Detail" usually requires 5–7 hours of meticulous work. We focus on quality over speed, ensuring every nook and cranny is addressed.' }
    ],
    interior: [
        { question: 'Is steam cleaning better than traditional shampooing?', answer: 'Steam is superior because it sanitizes at 320°F, killing 99.9% of bacteria and allergens without over-saturating your fabrics. This prevents the "musty" smell associated with slow-drying carpets and allows for a much faster drying time (usually within 2 hours).' },
        { question: 'Can you remove all stains from my seats?', answer: 'While we can remove 90-95% of organic stains (coffee, mud, salt), some chemical burns or permanent dyes may leave a faint trace. We use enzymatic cleaners that break down stains at a molecular level for the best possible restoration results.' },
        { question: 'What is the benefit of leather conditioning?', answer: 'Leather is a skin that needs hydration. UV rays and heat cause it to dry, shrink, and crack. Our conditioners use lanolin-based oils that soak into the pores, keeping the leather supple and adding a sacrificial UV barrier.' }
    ],
    ceramic: [
        { question: 'How is a Ceramic Coating different from Wax?', answer: 'Wax is a temporary layer that sits *on top* of the paint and melts in summer heat. A Ceramic Coating is a liquid polymer (Si02) that chemically bonds with your clear coat to create a permanent, hardened glass layer. It offers significantly higher gloss, chemical resistance, and lasts years instead of weeks.' },
        { question: 'Is a ceramic coating scratch-proof?', answer: 'No coating is truly "scratch-proof," but it is highly scratch-resistant. It adds 9H hardness to your surface, protecting against light swirls and marring. More importantly, its hydrophobic nature means dirt doesn\'t stick, reducing the friction required to wash your car—which is when most scratches happen.' },
        { question: 'How do I maintain my coating after it\'s applied?', answer: 'Avoid automatic brush washes! The best way to maintain a coating is by using a pH-neutral "Ceramic Soap" and a high-quality microfiber mitt. We also recommend a "Top Coat" spray every 4–6 months to replenish the hydrophobic properties.' }
    ],
    paint: [
        { question: 'Does Paint Correction remove clear coat?', answer: 'It removes a microscopic layer (less than 1%) of the clear coat to level the surface and eliminate scratches. We use paint depth gauges to ensure we always stay within safe limits, preserving the integrity of your factory finish while achieving a mirror shine.' },
        { question: 'Can I get a ceramic coating without paint correction?', answer: 'Technically yes, but we don\'t recommend it. A coating acts like a magnifying glass—it will lock in and amplify any existing swirls or scratches. For the best "showroom" look, the paint should be corrected before it\'s sealed.' }
    ],
    odor: [
        { question: 'How does Ozone Treatment actually work?', answer: 'An ozone generator creates O3 molecules which are highly reactive. When they encounter odor-causing bacteria or smoke particles, they oxidize them—essentially "exploding" the odor molecules at a molecular level. It doesn\'t mask the smell; it deletes it.' },
        { question: 'Is it safe for my car\'s electronics?', answer: 'Yes, when performed by professionals. We use controlled cycles and specific concentrations that are effective against odors but safe for your dashboard, plastics, and sensitive electronics.' }
    ],
    mold: [
        { question: 'Why is car mold a serious health concern?', answer: 'A car is a small, enclosed space. If mold is present, you are breathing in high concentrations of spores every time the AC turns on. This can lead to chronic respiratory issues and "Sick Car Syndrome." We use hospital-grade biocides to ensure the mold is biologically dead, not just cleaned off.' }
    ],
    trim: [
        { question: 'How long does the trim restoration last?', answer: 'Our professional-grade restoration products bond with the plastic at a molecular level. Unlike greasy silicone dressings, our treatment typically lasts 6–12 months depending on UV exposure and washing habits.' },
        { question: 'Will the black dye run onto my paint?', answer: 'No. Once the product has cured, it is weather-resistant and will not streak or run during rain or subsequent washes.' }
    ],
    fleet: [
        { question: 'Do you offer volume discounts for fleets?', answer: 'Yes. We provide tiered pricing for businesses with 5 or more vehicles. We also offer recurring maintenance schedules at a lower per-unit cost than retail.' },
        { question: 'How much downtime should we expect?', answer: 'We specialize in efficiency, often detailing multiple vehicles simultaneously to minimize downtime. We also offer early morning or after-hours slots for commercial clients.' }
    ],
    shampoo: [
        { question: 'How long will my seats take to dry?', answer: 'We use low-moisture chemical technology and high-power extraction. Most interiors are dry to the touch within 1-2 hours. We also provide protective seat covers if needed immediately.' },
        { question: 'Can you remove winter salt crust?', answer: 'Yes. We use specialized pH-balanced salt neutralizers that break down the mineral bonds of road salt, allowing our extractors to pull the salt out of the carpet fibers.' }
    ]
};

export const CONTACT_PHONE = "+1-778-251-5604";
export const DEFAULT_WHATSAPP_MESSAGE = "Hi Nano Mobile! I'd like a quote for a professional detail.";

export const getWhatsAppLink = (message: string): string => {
    const encodedMessage = encodeURIComponent(message);
    const phone = CONTACT_PHONE.replace(/[^0-9]/g, '');
    return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const LOCATIONS_DATA = [
    { name: 'Vancouver', path: '/locations/vancouver/mobile-car-detailing' },
    { name: 'Burnaby', path: '/locations/burnaby/mobile-car-detailing' },
    { name: 'Richmond', path: '/locations/richmond/mobile-car-detailing' },
    { name: 'West Vancouver', path: '/locations/west-vancouver/mobile-car-detailing' },
    { name: 'Surrey', path: '/locations/surrey/mobile-car-detailing' },
    { name: 'Langley', path: '/locations/langley/mobile-car-detailing' },
    { name: 'North Vancouver', path: '/locations/north-vancouver/mobile-car-detailing' },
];

export const SEO_CITIES: Record<string, { name: string; lat: string; lng: string; image: string }> = {
    'vancouver': { name: 'Vancouver', lat: '49.2827', lng: '-123.1207', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/matt-wang-dBp9dbQCh4Q-unsplash.jpg?updatedAt=1759732296928' },
    'burnaby': { name: 'Burnaby', lat: '49.2488', lng: '-122.9805', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/dania-shaeeb-DBpyrJ1XOtI-unsplash.jpg?updatedAt=1759732297218' },
    'richmond': { name: 'Richmond', lat: '49.1666', lng: '-123.1336', image: 'https://ik.imagekit.io/wnwu0xxx5/Auto_detailing/matt-wang-dBp9dbQCh4Q-unsplash.jpg?updatedAt=1759732296928' },
};