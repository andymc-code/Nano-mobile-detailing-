
export interface Service {
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface PricingPackage {
  title: string;
  price: string;
  features: string[];
  isFeatured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  before: string;
  after: string;
  title: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}
