export interface Business {
  name: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  logo: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  services: Service[];
  testimonials: Testimonial[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
}

export interface BusinessesData {
  [key: string]: Business;
}