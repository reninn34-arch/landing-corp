/**
 * This service centralizes the data for the landing page.
 * It checks if WordPress has injected data into the window object.
 * If not, it returns the default hardcoded data.
 */

export interface LandingData {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    sectionTitle: string;
    heading: string;
    ceoName: string;
    ceoTitle: string;
    ceoQuote: string;
    ceoImage: string;
    description1: string;
    description2: string;
    stats: Array<{ value: string; label: string }>;
  };
  services: {
    sectionTitle: string;
    heading: string;
    items: Array<{ title: string; description: string; id: string }>;
  };
  gallery: {
    sectionTitle: string;
    heading: string;
    projects: Array<{ id: number; title: string; location: string; image: string }>;
  };
  differentiator: {
    sectionTitle: string;
    heading: string;
    description: string;
    items: Array<{ title: string; desc: string }>;
    quote: string;
    quoteAuthor: string;
    quoteSubtitle: string;
  };
}

export const getLandingData = (): LandingData => {
  // Check if window.wpData exists (injected by WordPress)
  if (typeof window !== 'undefined' && (window as any).wpData) {
    return (window as any).wpData;
  }

  // Fallback / Development Data
  return {
    hero: {
      title: "From plans to implementation, we design, build and deliver",
      subtitle: "Your ally for innovative projects. We accompany you in the development of civil infrastructure, from conception to commissioning.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "View Portfolio"
    },
    about: {
      sectionTitle: "About Us",
      heading: "Global vision, unquestionable technical precision.",
      ceoName: "Grégoire Geiler",
      ceoTitle: "Founder & CEO (Over 15 Years Exp.)",
      ceoQuote: "\"MIND YOUR SAFETY. We identify problems before they occur to guarantee savings and secure results worldwide.\"",
      ceoImage: "./ceo.png",
      description1: "We specialize in method engineering for major civil projects. We develop solutions where technical complexity demands an unprecedented level of accuracy.",
      description2: "Operating internationally, we integrate as a strategic partner for consortiums and construction firms, guaranteeing the physical, structural, and financial viability of the most demanding projects.",
      stats: [
        { value: "9", label: "Countries" },
        { value: "18", label: "Large-scale Projects" },
        { value: "+6M€", label: "Value Executed" },
        { value: "+20", label: "Controlled Designs" }
      ]
    },
    services: {
      sectionTitle: "Core Specialties",
      heading: "Method Engineering Solutions",
      items: [
        { id: "methods", title: "Constructive Methods", description: "Feasibility studies and direct on-site assistance to evaluate operations." },
        { id: "equipment", title: "Specific Equipment Design", description: "Basic and detailed design of customized lifting and structural equipment." },
        { id: "optimization", title: "Process Optimization", description: "Identifying bottlenecks to optimize manufacturing processes directly on site." },
        { id: "logistics", title: "Assembly & Logistics", description: "Coordination with international partners, supervision, and comprehensive personnel training." }
      ]
    },
    gallery: {
      sectionTitle: "Featured Projects",
      heading: "Executed Intellectual Work",
      projects: [
        { id: 1, title: 'Puente Atlántico', location: 'Panamá', image: './project1.png' },
        { id: 2, title: 'Hampton Road Bridge Tunnel', location: 'United States', image: './project2.png' },
        { id: 3, title: 'Allianz Riviera', location: 'Nice, France', image: './project3.png' },
        { id: 4, title: 'Puerto Antioquia', location: 'Apartadó, Colombia', image: './project4.png' },
        { id: 5, title: 'Femern Link', location: 'Denmark', image: './project5.png' },
        { id: 6, title: 'Estadio Abdellah Moulay', location: 'Rabat, Morocco', image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1000' }
      ]
    },
    differentiator: {
      sectionTitle: "From Design to Execution",
      heading: "What Defines Us",
      description: "We base our methodology on fully understanding your needs, ensuring maximum quality, optimizing processes, and maintaining total transparency throughout the project lifecycle.",
      items: [
        { title: 'Listen', desc: 'Effective solutions adapted to the needs of each specific project.' },
        { title: 'Optimization', desc: 'Fulfilment of deadlines, optimized operations and guaranteed savings.' },
        { title: 'Trust', desc: 'Innovative tools designed using precise and reliable methods.' },
        { title: 'Transparency', desc: 'Continuous and clear communication at every stage of the project.' }
      ],
      quote: "\"Our participation during the feasibility phase has consistently proven to reduce critical structural incidents to zero and optimize the project CAPEX by a substantial corporate margin.\"",
      quoteAuthor: "Global Technical Direction",
      quoteSubtitle: "International Consortiums"
    }
  };
};

