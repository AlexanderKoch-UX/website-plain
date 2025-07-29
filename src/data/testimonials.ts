import { ClientTestimonial } from '@/types';

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: 'kdc-catering',
    clientName: 'Ulf Dingslaken',
    clientTitle: 'Geschäftsführung',
    company: 'KDC Catering',
    website: 'https://www.kdc-catering.de',
    testimonial: 'Sehr gut. Danke.',
    project: 'Corporate Website mit Catering-Showcase',
    rating: 1,
    date: '2024'
  }
];

// Helper function to get featured testimonials
export const getFeaturedTestimonials = (): ClientTestimonial[] => {
  return clientTestimonials.filter(testimonial => testimonial.rating >= 4);
};

// Helper function to get testimonial by company
export const getTestimonialByCompany = (company: string): ClientTestimonial | undefined => {
  return clientTestimonials.find(testimonial => 
    testimonial.company.toLowerCase() === company.toLowerCase()
  );
};