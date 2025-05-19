const businesses = {
  kiransalon: {
    name: "Kiran's Beauty Salon",
    niche: "salon",
    template: "template1",
    theme: "lavender",
    description:
      "Premier hair and beauty salon offering a range of luxury services.",
    logo: "scissors",
    contact: {
      phone: "+1 (555) 123-4567",
      email: "info@kiransalon.com",
      address: "123 Style Street, Beauty Hills, CA 94123",
    },
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
    theme: "blue",
    description: "24/7 emergency plumbing services you can trust.",
    logo: "wrench",
    contact: {
      phone: "+1 (555) 987-6543",
      email: "emergency@ramplumber.com",
      address: "456 Pipeline Road, Fixitville, CA 94456",
    },
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
};

export function getBusinessBySubdomain(subdomain) {
  return businesses[subdomain] || null;
}

export function getAllBusinesses() {
  return businesses;
}

export function getAvailableSubdomains() {
  return Object.keys(businesses);
}
