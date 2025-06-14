import { getTheme } from "./themes";

const businesses = {
  kiransalon: {
    name: "Kiran's Beauty Salon",
    niche: "business",
    template: "template1",
    layout: "parallax",
    themeName: "carbon",
    fontName: "professional",
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
    fontName: "professional",
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
    fontName: "tech",
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
    fontName: "professional",
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
    fontName: "elegant",
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
            "Get in touch with Lavanya Beauty Parlour for bookings, queries or directions. We're happy to help!",
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
  elegantdrapes: {
    name: "Elegant Drapes & Blinds",
    niche: "curtains",
    template: "template1",
    layout: "stacked",
    themeName: "navy",
    fontName: "professional",
    theme: getTheme("navy"),
    description:
      "Premium window treatments and custom curtains for your home and office.",
    logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    seo: {
      title:
        "Elegant Drapes & Blinds | Premium Window Treatments & Custom Curtains",
      description:
        "Transform your space with custom curtains, blinds, and premium window treatments. Expert design, quality installation, and 20+ years of excellence.",
      ogImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      favicon: "/favicon.ico",
      routes: {
        services: {
          title: "Window Treatment Services | Elegant Drapes & Blinds",
          description:
            "Custom curtains, blinds, motorized systems and professional installation services.",
        },
        about: {
          title: "About Elegant Drapes & Blinds | 20+ Years Experience",
          description:
            "Learn about our journey in transforming homes with premium window treatments since 2003.",
        },
        gallery: {
          title: "Our Work Gallery | Elegant Drapes & Blinds",
          description:
            "Browse our portfolio of stunning curtain and blind installations.",
        },
        contact: {
          title: "Contact Elegant Drapes & Blinds | Free Consultation",
          description:
            "Get in touch for a free consultation and quote for your window treatment needs.",
        },
      },
    },
    contact: {
      phone: "+1 (234) 567-8900",
      email: "info@elegantdrapes.com",
      address: "123 Design Avenue, Suite 100, Your City, State 12345",
      whatsapp: "+1 (234) 567-8900",
      mapEmbedUrl: "https://maps.google.com",
      openHours: {
        mon: "9:00 AM - 6:00 PM",
        tue: "9:00 AM - 6:00 PM",
        wed: "9:00 AM - 6:00 PM",
        thu: "9:00 AM - 6:00 PM",
        fri: "9:00 AM - 6:00 PM",
        sat: "10:00 AM - 4:00 PM",
        sun: "By appointment only",
      },
      social: {
        facebook: "https://facebook.com/elegantdrapes",
        instagram: "https://instagram.com/elegantdrapes",
        twitter: "https://twitter.com/elegantdrapes",
      },
    },
    sections: [
      {
        id: "hero",
        type: "hero.with-background",
        props: {
          title: "Elegant Drapes & Blinds",
          subtitle:
            "Transform your space with custom curtains, blinds, and premium window treatments designed to perfection.",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
          cta: {
            primary: {
              text: "WhatsApp Us Now",
              href: "https://wa.me/12345678900?text=Hi! I'm interested in your curtain services.",
            },
            secondary: {
              text: "Call Now",
              href: "tel:+12345678900",
            },
          },
        },
      },
      {
        id: "services",
        type: "services.grid",
        props: {
          title: "Our Services",
          description:
            "From custom design to professional installation, we offer comprehensive window treatment solutions for every need and budget.",
          services: [
            {
              id: 1,
              name: "Custom Curtain Design",
              description:
                "Bespoke curtains tailored to your style, from fabric selection to final installation.",
              price: "From $150",
            },
            {
              id: 2,
              name: "Blinds & Shades",
              description:
                "Modern blinds and shades for perfect light control and privacy in any room.",
              price: "From $80",
            },
            {
              id: 3,
              name: "Motorized Systems",
              description:
                "Smart home integration with automated curtains and blinds for modern living.",
              price: "From $300",
            },
            {
              id: 4,
              name: "Commercial Solutions",
              description:
                "Professional window treatments for offices, hotels, and commercial spaces.",
              price: "Custom Quote",
            },
            {
              id: 5,
              name: "Measurement & Consultation",
              description:
                "Expert measurement service ensuring perfect fit for all your window treatments.",
              price: "Free",
            },
            {
              id: 6,
              name: "Repair & Maintenance",
              description:
                "Keep your window treatments looking perfect with our repair and cleaning services.",
              price: "From $50",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials.grid",
        props: {
          title: "What Our Customers Say",
          description:
            "Don't just take our word for it. Here's what our satisfied customers have to say about our window treatment services.",
          testimonials: [
            {
              id: 1,
              name: "Sarah Johnson",
              text: "Absolutely stunning work! The team at Elegant Drapes transformed our living room with beautiful custom curtains. The fabric quality is exceptional and the installation was flawless. Highly recommend!",
            },
            {
              id: 2,
              name: "Michael Chen",
              text: "Professional service from start to finish. They handled our entire office building's window treatments with efficiency and style. The motorized blinds are a game-changer for our conference rooms.",
            },
            {
              id: 3,
              name: "Emily Rodriguez",
              text: "From consultation to installation, everything was perfect. They helped us choose the right fabrics and styles for each room. Our home feels so much more elegant now. Worth every penny!",
            },
            {
              id: 4,
              name: "David Wilson",
              text: "Outstanding customer service and beautiful results. The custom drapes they created for our dining room are exactly what we envisioned. The attention to detail is remarkable.",
            },
          ],
        },
      },
    ],
    services: [
      {
        id: 1,
        name: "Custom Curtain Design",
        description:
          "Bespoke curtains tailored to your style, from fabric selection to final installation.",
        price: "From $150",
      },
      {
        id: 2,
        name: "Blinds & Shades",
        description:
          "Modern blinds and shades for perfect light control and privacy in any room.",
        price: "From $80",
      },
      {
        id: 3,
        name: "Motorized Systems",
        description:
          "Smart home integration with automated curtains and blinds for modern living.",
        price: "From $300",
      },
      {
        id: 4,
        name: "Commercial Solutions",
        description:
          "Professional window treatments for offices, hotels, and commercial spaces.",
        price: "Custom Quote",
      },
      {
        id: 5,
        name: "Measurement & Consultation",
        description:
          "Expert measurement service ensuring perfect fit for all your window treatments.",
        price: "Free",
      },
      {
        id: 6,
        name: "Repair & Maintenance",
        description:
          "Keep your window treatments looking perfect with our repair and cleaning services.",
        price: "From $50",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        text: "Absolutely stunning work! The team at Elegant Drapes transformed our living room with beautiful custom curtains. The fabric quality is exceptional and the installation was flawless. Highly recommend!",
      },
      {
        id: 2,
        name: "Michael Chen",
        text: "Professional service from start to finish. They handled our entire office building's window treatments with efficiency and style. The motorized blinds are a game-changer for our conference rooms.",
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        text: "From consultation to installation, everything was perfect. They helped us choose the right fabrics and styles for each room. Our home feels so much more elegant now. Worth every penny!",
      },
      {
        id: 4,
        name: "David Wilson",
        text: "Outstanding customer service and beautiful results. The custom drapes they created for our dining room are exactly what we envisioned. The attention to detail is remarkable.",
      },
    ],
  },
  "be-on-mirrors": {
    name: "Be On Mirrors",
    niche: "salon",
    template: "bhava",
    layout: "stacked",
    themeName: "copper",
    fontName: "elegant",
    theme: getTheme("gold"),
    description:
      "Premier unisex salon offering professional beauty and grooming services in a luxurious environment. Your style, our passion.",
    logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    seo: {
      title:
        "Be On Mirrors - The Unisex Salon | Hair Styling & Beauty Treatments",
      description:
        "Premium Unisex Salon Services - Professional hair styling, coloring, treatments, and beauty services for men and women. Book your appointment today!",
      ogImage:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
      favicon:
        "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23d4af37' viewBox='0 0 24 24'%3e%3cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'/%3e%3c/svg%3e",
      routes: {
        about: {
          title: "About Be On Mirrors - The Unisex Salon",
          description:
            "Learn about Be On Mirrors Salon's journey and our commitment to providing exceptional beauty services for both men and women.",
        },
        services: {
          title: "Our Services | Be On Mirrors Salon",
          description:
            "Discover our comprehensive range of professional beauty and grooming services designed for both men and women.",
        },
        gallery: {
          title: "Our Work Gallery | Be On Mirrors",
          description:
            "Take a look at some of our stunning transformations and creative work at Be On Mirrors Salon.",
        },
        contact: {
          title: "Contact Be On Mirrors Salon",
          description:
            "Ready to transform your look? Contact us today to schedule your appointment and experience luxury salon services.",
        },
      },
    },
    contact: {
      phone: "+91 83410 75644",
      email: "info@beonmirrors.com",
      address:
        "lane, opposite Ameenpur police station, Madhura Nagar Colony, Beeramguda, Hyderabad, Telangana 502032",
    },
    sections: [
      {
        id: "hero",
        type: "hero.split-with-image",
        props: {
          title: "Redefine Your Beauty",
          subtitle:
            "Experience premium unisex salon services where style meets sophistication. Professional treatments for both men and women.",
          image:
            "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
          cta: {
            primary: {
              text: "Explore Services",
              href: "#services",
            },
            secondary: {
              text: "Book Appointment",
              href: "#contact",
            },
          },
        },
      },
      {
        id: "services",
        type: "services.grid",
        props: {
          title: "Our Premium Services",
          description:
            "Discover our comprehensive range of professional beauty and grooming services designed for both men and women",
          services: [
            {
              id: 1,
              name: "Hair Cutting & Styling",
              description:
                "Professional precision cuts, modern styling, and creative designs tailored to your personality and lifestyle.",
              price: "Starting from $45",
            },
            {
              id: 2,
              name: "Hair Coloring",
              description:
                "Expert color treatments including highlights, balayage, ombre, and fashion colors using premium products.",
              price: "Starting from $85",
            },
            {
              id: 3,
              name: "Hair Treatments",
              description:
                "Nourishing treatments including keratin, deep conditioning, and scalp therapies for healthy hair.",
              price: "Starting from $65",
            },
            {
              id: 4,
              name: "Men's Grooming",
              description:
                "Complete grooming services including beard trimming, styling, and traditional barbering techniques.",
              price: "Starting from $35",
            },
            {
              id: 5,
              name: "Hair Styling",
              description:
                "Special occasion styling, updos, blowouts, and creative styling for events and photoshoots.",
              price: "Starting from $55",
            },
            {
              id: 6,
              name: "Beauty Treatments",
              description:
                "Facial treatments, eyebrow shaping, and other beauty services to complete your look.",
              price: "Starting from $40",
            },
          ],
        },
      },
      {
        id: "testimonials",
        type: "testimonials.grid",
        props: {
          title: "What Our Clients Say",
          description:
            "Don't just take our word for it - hear from our satisfied clients",
          testimonials: [
            {
              id: 1,
              name: "Sarah Johnson",
              text: "Absolutely amazing experience! The stylist understood exactly what I wanted and delivered beyond my expectations. The salon atmosphere is so relaxing and professional.",
            },
            {
              id: 2,
              name: "Michael Chen",
              text: "Best salon experience I've ever had! The team is incredibly talented and the results speak for themselves. I always leave feeling confident and stylish.",
            },
            {
              id: 3,
              name: "Emma Rodriguez",
              text: "From the moment I walked in, I felt welcomed and valued. The attention to detail and level of service is unmatched. Highly recommend to everyone!",
            },
          ],
        },
      },
    ],
    services: [
      {
        id: 1,
        name: "Hair Cutting & Styling",
        description:
          "Professional precision cuts, modern styling, and creative designs tailored to your personality and lifestyle.",
        price: "Starting from $45",
      },
      {
        id: 2,
        name: "Hair Coloring",
        description:
          "Expert color treatments including highlights, balayage, ombre, and fashion colors using premium products.",
        price: "Starting from $85",
      },
      {
        id: 3,
        name: "Hair Treatments",
        description:
          "Nourishing treatments including keratin, deep conditioning, and scalp therapies for healthy hair.",
        price: "Starting from $65",
      },
      {
        id: 4,
        name: "Men's Grooming",
        description:
          "Complete grooming services including beard trimming, styling, and traditional barbering techniques.",
        price: "Starting from $35",
      },
      {
        id: 5,
        name: "Hair Styling",
        description:
          "Special occasion styling, updos, blowouts, and creative styling for events and photoshoots.",
        price: "Starting from $55",
      },
      {
        id: 6,
        name: "Beauty Treatments",
        description:
          "Facial treatments, eyebrow shaping, and other beauty services to complete your look.",
        price: "Starting from $40",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        text: "Absolutely amazing experience! The stylist understood exactly what I wanted and delivered beyond my expectations. The salon atmosphere is so relaxing and professional.",
      },
      {
        id: 2,
        name: "Michael Chen",
        text: "Best salon experience I've ever had! The team is incredibly talented and the results speak for themselves. I always leave feeling confident and stylish.",
      },
      {
        id: 3,
        name: "Emma Rodriguez",
        text: "From the moment I walked in, I felt welcomed and valued. The attention to detail and level of service is unmatched. Highly recommend to everyone!",
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
