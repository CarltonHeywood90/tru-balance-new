// src/constants/services.ts
export type Service = {
  slug: string;
  title: string;
  duration: string;
  price: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'therapeutic-massage', // This must match the URL exactly
    title: 'Therapeutic Massage',
    duration: '30 min / 60 min / 90 min / 120 min',
    price: '$50 - $185',
    description: 'Deep tissue and Swedish techniques tailored to relieve chronic tension and improve circulation.',
    // ... any other fields
  },
  {
    slug: 'reiki-energy-work',
    title: 'Reiki Energy Work',
    duration: '30 min / 60 min',
    price: '$50 - $95',
    description: 'A non-invasive energy healing practice that promotes stress reduction and relaxation.',
  },
  {
    slug: 'sports-massage',
    title: 'Sports Massage',
    duration: '30 min / 60 min / 90 min',
    price: '$50 - $125',
    description: 'Targeted therapy for athletes and active individuals to enhance performance and recovery.',
  }
];