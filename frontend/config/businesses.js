import { getTheme } from "./themes";

const businesses = {
  kiransalon: {
    name: "Kiran's Beauty Salon",
    niche: "business",
    template: "template1",
    layout: "parallax",
    themeName: "carbon",
    theme: getTheme("carbon"),
    description:
      "Premier hair and beauty salon offering a range of luxury services.",
    logo: "https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg",
    seo: {
      title: "Kiran's Beauty Salon | Luxury Hair & Beauty Services",
      description:
        "Experience luxury hair and beauty services at Kiran's Beauty Salon. Professional styling, coloring, and beauty treatments in Beauty Hills, CA.",
      ogImage:
        "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
      favicon: "/favicon.ico",
      routes: {
        services: {
          title: "Our Services | Kiran's Beauty Salon",
          description:
            "Discover our range of professional hair and beauty services. From haircuts to color treatments, we offer everything you need to look your best.",
        },
        about: {
          title: "About Us | Kiran's Beauty Salon",
          description:
            "Learn about Kiran's Beauty Salon's journey and our commitment to providing exceptional beauty services in Beauty Hills.",
        },
      },
    },
    contact: {
      phone: "+1 (555) 123-4567",
      email: "info@kiransalon.com",
      address: "123 Style Street, Beauty Hills, CA 94123",
    },
    sections: [
      {
        id: "hero",
        type: "hero.split-with-image",
        props: {
          title: "Welcome to Kiran's Beauty Salon",
          subtitle: "Where Beauty Meets Excellence",
          image:
            "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
          cta: {
            primary: {
              text: "Book Now",
              href: "#contact",
            },
            secondary: {
              text: "Our Services",
              href: "#services",
            },
          },
        },
      },
      {
        id: "services",
        type: "services.grid",
        props: {
          title: "Our Services",
          description: "Discover our range of professional beauty services",
          services: [
            {
              id: 1,
              name: "Luxury Haircut & Styling",
              description:
                "Personalized haircut and styling with premium products.",
              price: "$65+",
            },
            {
              id: 2,
              name: "Premium Color Treatment",
              description:
                "Expert color services including balayage and highlights.",
              price: "$95+",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials.grid",
        props: {
          title: "Client Testimonials",
          description: "What our clients say about us",
          testimonials: [
            {
              id: 1,
              name: "Emily R.",
              text: "The best salon experience I've ever had. Kiran is a true artist!",
            },
            {
              id: 2,
              name: "Sophie L.",
              text: "Love my new look! The attention to detail is outstanding.",
            },
          ],
        },
      },
    ],
    services: [
      {
        id: 1,
        name: "Luxury Haircut & Styling",
        description: "Personalized haircut and styling with premium products.",
        price: "$65+",
      },
      {
        id: 2,
        name: "Premium Color Treatment",
        description: "Expert color services including balayage and highlights.",
        price: "$95+",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Emily R.",
        text: "The best salon experience I've ever had. Kiran is a true artist!",
      },
      {
        id: 2,
        name: "Sophie L.",
        text: "Love my new look! The attention to detail is outstanding.",
      },
    ],
  },
  ramplumber: {
    name: "Ram's Emergency Plumbing",
    niche: "plumber",
    template: "template2",
    layout: "stacked",
    themeName: "azure",
    theme: getTheme("azure"),
    description: "24/7 emergency plumbing services you can trust.",
    logo: "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg",
    seo: {
      title: "Ram's Emergency Plumbing | 24/7 Plumbing Services",
      description:
        "Professional 24/7 emergency plumbing services in Fixitville. Fast response, fair prices, and expert solutions for all your plumbing needs.",
      ogImage:
        "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg",
      favicon: "/favicon.ico",
      routes: {
        services: {
          title: "Emergency Plumbing Services | Ram's Plumbing",
          description:
            "24/7 emergency plumbing repairs, installations, and maintenance services. Available round the clock for all your plumbing emergencies.",
        },
        about: {
          title: "About Ram's Plumbing | Your Trusted Plumber",
          description:
            "Learn why Ram's Plumbing is Fixitville's most trusted emergency plumbing service. Available 24/7 for all your plumbing needs.",
        },
      },
    },
    contact: {
      phone: "+1 (555) 987-6543",
      email: "emergency@ramplumber.com",
      address: "456 Pipeline Road, Fixitville, CA 94456",
    },
    sections: [
      {
        id: "hero",
        type: "hero.with-background",
        props: {
          title: "24/7 Emergency Plumbing Services",
          subtitle: "Fast Response, Expert Solutions",
          image:
            "https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg",
          cta: {
            primary: {
              text: "Call Now",
              href: "#contact",
            },
            secondary: {
              text: "Our Services",
              href: "#services",
            },
          },
        },
      },
      {
        id: "services",
        type: "services.grid",
        props: {
          title: "Professional Services",
          description: "Expert plumbing solutions for your home and business",
          services: [
            {
              id: 1,
              name: "Emergency Repairs",
              description: "Available 24/7 for urgent plumbing emergencies.",
              price: "$95+",
            },
            {
              id: 2,
              name: "Pipe Installation",
              description: "Professional pipe installation and replacement.",
              price: "$150+",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials.grid",
        props: {
          title: "Customer Reviews",
          description: "What our customers say about our service",
          testimonials: [
            {
              id: 1,
              name: "Mark T.",
              text: "Ram saved us from a major flood at 2 AM. True professional!",
            },
            {
              id: 2,
              name: "Linda K.",
              text: "Fair prices and excellent workmanship. Highly recommended!",
            },
          ],
        },
      },
    ],
    services: [
      {
        id: 1,
        name: "Emergency Repairs",
        description: "Available 24/7 for urgent plumbing emergencies.",
        price: "$95+",
      },
      {
        id: 2,
        name: "Pipe Installation",
        description: "Professional pipe installation and replacement.",
        price: "$150+",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Mark T.",
        text: "Ram saved us from a major flood at 2 AM. True professional!",
      },
      {
        id: 2,
        name: "Linda K.",
        text: "Fair prices and excellent workmanship. Highly recommended!",
      },
    ],
  },
  "modern-business": {
    name: "Modern Business Solutions",
    niche: "business",
    template: "template1",
    layout: "parallax",
    themeName: "silicon",
    theme: getTheme("silicon"),
    description: "Innovative solutions for modern businesses",
    logo: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    seo: {
      title: "Modern Business Solutions | Innovative Business Services",
      description:
        "Transform your business with our innovative solutions and expert consulting services.",
      ogImage:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
      favicon: "/favicon.ico",
    },
    contact: {
      phone: "+1 (555) 234-5678",
      email: "hello@modernbusiness.com",
      address: "789 Innovation Drive, Tech Valley, CA 94789",
    },
    sections: [
      {
        id: "hero",
        type: "hero.split-with-image",
        props: {
          title: "Transform Your Business",
          subtitle: "Innovative solutions for the modern enterprise",
          image:
            "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
          cta: {
            primary: {
              text: "Get Started",
              href: "#contact",
            },
            secondary: {
              text: "Learn More",
              href: "#services",
            },
          },
        },
      },
      {
        id: "services",
        type: "services.grid",
        props: {
          title: "Our Solutions",
          description: "Comprehensive services for your business needs",
          services: [
            {
              id: 1,
              name: "Digital Transformation",
              description:
                "Transform your business with cutting-edge digital solutions",
              price: "Custom",
            },
            {
              id: 2,
              name: "Business Consulting",
              description: "Expert guidance for your business growth",
              price: "$200/hr",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials.grid",
        props: {
          title: "Success Stories",
          description: "What our clients say about our solutions",
          testimonials: [
            {
              id: 1,
              name: "John D.",
              text: "Modern Business Solutions transformed our operations completely!",
            },
            {
              id: 2,
              name: "Sarah M.",
              text: "The best business consulting service we've ever worked with.",
            },
          ],
        },
      },
    ],
    services: [
      {
        id: 1,
        name: "Digital Transformation",
        description:
          "Transform your business with cutting-edge digital solutions",
        price: "Custom",
      },
      {
        id: 2,
        name: "Business Consulting",
        description: "Expert guidance for your business growth",
        price: "$200/hr",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "John D.",
        text: "Modern Business Solutions transformed our operations completely!",
      },
      {
        id: 2,
        name: "Sarah M.",
        text: "The best business consulting service we've ever worked with.",
      },
    ],
  },
  professional: {
    name: "Professional Services Group",
    niche: "business",
    template: "template2",
    layout: "stacked",
    themeName: "navy",
    theme: getTheme("navy"),
    description: "Expert professional services for your success",
    logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    seo: {
      title: "Professional Services Group | Expert Business Solutions",
      description:
        "Leading professional services firm delivering exceptional results for businesses.",
      ogImage:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      favicon: "/favicon.ico",
    },
    contact: {
      phone: "+1 (555) 345-6789",
      email: "contact@professionalservices.com",
      address: "321 Enterprise Ave, Business District, CA 94321",
    },
    sections: [
      {
        id: "hero",
        type: "hero.with-background",
        props: {
          title: "Excellence in Professional Services",
          subtitle: "Your success is our priority",
          image:
            "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
          cta: {
            primary: {
              text: "Schedule Consultation",
              href: "#contact",
            },
            secondary: {
              text: "Our Services",
              href: "#services",
            },
          },
        },
      },
      {
        id: "services",
        type: "services.list",
        props: {
          title: "Our Services",
          description: "Comprehensive professional solutions",
          services: [
            {
              id: 1,
              name: "Strategic Consulting",
              description: "Expert guidance for business strategy and growth",
              price: "$250/hr",
            },
            {
              id: 2,
              name: "Financial Advisory",
              description:
                "Professional financial planning and advisory services",
              price: "Custom",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials.carousel",
        props: {
          title: "Client Testimonials",
          description: "What our clients say about our expertise",
          testimonials: [
            {
              id: 1,
              name: "Michael R.",
              text: "Their strategic insights have been invaluable to our growth.",
            },
            {
              id: 2,
              name: "Patricia L.",
              text: "Exceptional service and outstanding results every time.",
            },
          ],
        },
      },
    ],
    services: [
      {
        id: 1,
        name: "Strategic Consulting",
        description: "Expert guidance for business strategy and growth",
        price: "$250/hr",
      },
      {
        id: 2,
        name: "Financial Advisory",
        description: "Professional financial planning and advisory services",
        price: "Custom",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Michael R.",
        text: "Their strategic insights have been invaluable to our growth.",
      },
      {
        id: 2,
        name: "Patricia L.",
        text: "Exceptional service and outstanding results every time.",
      },
    ],
  },
  lavanyabeauty: {
    name: "Lavanya Beauty Parlour",
    niche: "beauty",
    template: "template1",
    layout: "parallax",
    themeName: "rose",
    theme: getTheme("rose"),
    description: "Enhancing your natural beauty with premium care and style.",
    logo: "https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg",
    seo: {
      title: "Lavanya Beauty Parlour | Best Salon in Hyderabad",
      description:
        "From facials to bridal makeup, Lavanya Beauty Parlour offers a complete range of beauty services. Book your appointment today!",
      ogImage:
        "https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg",
      favicon: "/lavanya-favicon.ico",
      routes: {
        services: {
          title: "Beauty Services | Lavanya Beauty Parlour",
          description:
            "Haircuts, facials, bridal makeup & more. Explore our full service menu at Lavanya Beauty Parlour.",
        },
        about: {
          title: "About Us | Lavanya Beauty Parlour",
          description:
            "Get to know Lavanya Beauty Parlour—our story, mission, and the women behind your glow.",
        },
        contact: {
          title: "Contact Lavanya Beauty Parlour",
          description:
            "Get in touch with Lavanya Beauty Parlour for bookings, queries or directions. We’re happy to help!",
        },
        gallery: {
          title: "Our Work | Lavanya Beauty Parlour",
          description:
            "See before-after transformations and bridal makeovers done at Lavanya Beauty Parlour.",
        },
      },
    },
    contact: {
      phone: "+1 (555) 789-0123",
      email: "appointments@beautyhaven.com",
      address: "789 Serenity Lane, Wellness District, CA 94789",
    },
    sections: [
      {
        id: "hero",
        type: "hero.split-with-image",
        props: {
          title: "Glow Like Never Before",
          subtitle: "Lavanya Beauty Parlour - Where beauty meets care.",
          image:
            "https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg",
          cta: {
            primary: {
              text: "Book Appointment",
              href: "#contact",
            },
            secondary: {
              text: "View Services",
              href: "#services",
            },
          },
        },
      },
      {
        id: "services",
        type: "services.grid",
        props: {
          title: "Luxury Beauty Services",
          description: "Indulge in our premium beauty treatments",
          services: [
            {
              id: 1,
              name: "Signature Facial",
              description:
                "Customized facial treatment for radiant, glowing skin",
              price: "$120",
            },
            {
              id: 2,
              name: "Relaxation Massage",
              description:
                "60-minute full body massage for ultimate relaxation",
              price: "$95",
            },
            {
              id: 3,
              name: "Hair Styling & Color",
              description: "Professional hair services with premium products",
              price: "From $85",
            },
            {
              id: 4,
              name: "Bridal Package",
              description: "Complete beauty package for your special day",
              price: "Custom",
            },
            {
              id: 5,
              name: "Manicure & Pedicure",
              description: "Luxury nail care with premium products",
              price: "$75",
            },
            {
              id: 6,
              name: "Body Treatments",
              description: "Rejuvenating body wraps and scrubs",
              price: "$110",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials.grid",
        props: {
          title: "Client Stories",
          description: "What our clients say about their experience",
          testimonials: [
            {
              id: 1,
              name: "Rachel M.",
              text: "The signature facial was incredible! My skin has never looked better.",
            },
            {
              id: 2,
              name: "Jennifer K.",
              text: "The most relaxing massage I've ever had. The ambiance is perfect.",
            },
            {
              id: 3,
              name: "Lisa P.",
              text: "Love my new hair color! The stylists are true artists.",
            },
            {
              id: 4,
              name: "Amanda S.",
              text: "The bridal package made me feel absolutely beautiful on my wedding day.",
            },
          ],
        },
      },
    ],
    services: [
      {
        id: 1,
        name: "Signature Facial",
        description: "Customized facial treatment for radiant, glowing skin",
        price: "$120",
      },
      {
        id: 2,
        name: "Relaxation Massage",
        description: "60-minute full body massage for ultimate relaxation",
        price: "$95",
      },
      {
        id: 3,
        name: "Hair Styling & Color",
        description: "Professional hair services with premium products",
        price: "From $85",
      },
      {
        id: 4,
        name: "Bridal Package",
        description: "Complete beauty package for your special day",
        price: "Custom",
      },
      {
        id: 5,
        name: "Manicure & Pedicure",
        description: "Luxury nail care with premium products",
        price: "$75",
      },
      {
        id: 6,
        name: "Body Treatments",
        description: "Rejuvenating body wraps and scrubs",
        price: "$110",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Rachel M.",
        text: "The signature facial was incredible! My skin has never looked better.",
      },
      {
        id: 2,
        name: "Jennifer K.",
        text: "The most relaxing massage I've ever had. The ambiance is perfect.",
      },
      {
        id: 3,
        name: "Lisa P.",
        text: "Love my new hair color! The stylists are true artists.",
      },
      {
        id: 4,
        name: "Amanda S.",
        text: "The bridal package made me feel absolutely beautiful on my wedding day.",
      },
    ],
  },
};

export function getBusinessBySubdomain(subdomain) {
  const business = businesses[subdomain];
  if (business) {
    business.theme = getTheme(business.themeName);
  }
  return business || null;
}

export function getAllBusinesses() {
  return businesses;
}

export function getAvailableSubdomains() {
  return Object.keys(businesses);
}
