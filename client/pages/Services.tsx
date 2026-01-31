import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function Services() {
  const navigate = useNavigate();
  useSEO({
    title:
      "Renewable Energy Services | Advisory, Procurement, Digital Solutions | AXIVOLT",
    description:
      "Complete renewable energy services including advisory, procurement, and digital solutions for solar, wind, and energy storage projects in Hyderabad, Telangana, and Andhra Pradesh.",
    keywords:
      "renewable energy services, energy advisory, solar procurement, energy solutions, renewable energy consultation, solar services in Hyderabad, Telangana",
    ogTitle: "Energy Services & Solutions - AXIVOLT",
    ogDescription:
      "Expert advisory, procurement, and digital solutions for renewable energy projects.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/services`,
  });

  useEffect(() => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

    // Add Service schema
    addSchemaMarkup(
      SchemaMarkup.service({
        name: "Renewable Energy Services",
        description:
          "Advisory, procurement, and digital solutions for renewable energy projects",
        provider: {
          name: "AXIVOLT",
          url: baseUrl,
        },
        areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh", "India"],
      }),
    );

    // Add FAQ schema for renewable energy services
    const serviceFaqs = [
      {
        question: "What renewable energy services does AXIVOLT provide?",
        answer:
          "AXIVOLT provides comprehensive renewable energy services including: Energy Advisory (audits, strategy planning, feasibility studies), Procurement (sourcing equipment, vendor management), and Digital Solutions (IoT monitoring, AI-powered optimization, performance analytics).",
      },
      {
        question: "Do you provide energy audits for commercial buildings?",
        answer:
          "Yes! Our expert team conducts comprehensive energy audits for commercial, industrial, and government buildings. We analyze your current consumption, identify inefficiencies, and recommend customized renewable energy solutions to reduce costs and environmental impact.",
      },
      {
        question: "What is energy advisory and why do I need it?",
        answer:
          "Energy advisory involves expert consultation to develop your energy strategy. We help you understand your energy needs, evaluate renewable options, calculate ROI, navigate government incentives, and create a customized roadmap for sustainable energy transition.",
      },
      {
        question:
          "How can digital solutions optimize my solar or renewable system?",
        answer:
          "Our digital solutions use IoT sensors, AI, and machine learning to monitor system performance in real-time, predict maintenance needs, optimize energy generation and consumption patterns, and provide actionable insights to maximize efficiency and minimize downtime.",
      },
      {
        question: "Do you help with government subsidy applications?",
        answer:
          "Absolutely! Our advisory team helps you navigate various government incentives including MNRE subsidies, state-specific schemes, tax benefits, and financing options. We handle documentation and application support to ensure you maximize available benefits.",
      },
      {
        question:
          "What is the difference between on-grid and off-grid solar systems?",
        answer:
          "On-grid systems are connected to the electricity grid, allowing you to sell excess power back. Off-grid systems operate independently with battery storage. Our advisory helps you choose the best option based on your location, needs, and budget.",
      },
    ];

    // Create FAQ schema and merge with service schema
    const faqSchema = SchemaMarkup.faq(serviceFaqs);

    const mergedSchema = {
      "@context": "https://schema.org",
      "@graph": [
        SchemaMarkup.service({
          name: "Renewable Energy Services",
          description:
            "Advisory, procurement, and digital solutions for renewable energy projects",
          provider: {
            name: "AXIVOLT",
            url: baseUrl,
          },
          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh", "India"],
        }),
        faqSchema,
      ],
    };

    addSchemaMarkup(mergedSchema);
  }, []);
  const services = [
    {
      title: "Advisory",
      icon: Lightbulb,
      description:
        "Expert consulting services to guide your energy transition strategy",
      highlights: [
        "Energy audits and assessments",
        "Feasibility studies",
        "Technology recommendations",
        "Investment analysis",
      ],
      link: "/advisory",
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Procurement",
      icon: ShoppingCart,
      description:
        "End-to-end sourcing and supply chain solutions for renewable equipment",
      highlights: [
        "Vendor management",
        "Quality assurance",
        "Competitive pricing",
        "Logistics coordination",
      ],
      link: "/procurement",
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "Digital Solutions",
      icon: Zap,
      description:
        "Advanced software and monitoring platforms for energy management",
      highlights: [
        "Real-time monitoring",
        "Performance analytics",
        "AI-powered insights",
        "Integration & automation",
      ],
      link: "/digital-solutions",
      color: "bg-green-500/20",
      iconColor: "text-green-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-20 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-cyan">Our Services</span>
            </h1>

            <p className="text-lg text-black300 max-w-2xl leading-relaxed">
              Comprehensive service offerings to support your renewable energy
              journey from planning to implementation and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-black300 max-w-2xl mx-auto">
              Choose a service to learn more about how we can support your
              renewable energy goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all cursor-pointer block"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-black300 text-sm mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-black300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-end pt-4 border-t border-border">
                    <ArrowRight className="w-5 h-5 text-cyan" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-cyan rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Ready to get started?
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            Let us help you achieve your renewable energy and sustainability
            goals with our expert services.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
