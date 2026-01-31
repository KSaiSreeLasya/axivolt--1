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
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-white pt-24 md:pt-40 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-green/15 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-10 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>

          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
              <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">Our Services</span>
            </h1>

            <p className="text-xl text-gray-700 max-w-2xl leading-relaxed font-light">
              Comprehensive service offerings to support your renewable energy journey from planning to implementation and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Choose a service to learn more about how we can support your renewable energy goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group bg-white rounded-2xl p-10 border-2 transition-all shadow-lg hover:shadow-2xl relative overflow-hidden hover:border-cyan/50"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <div
                    className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-lg relative z-10 border-2 border-white`}
                  >
                    <Icon className={`w-10 h-10 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-3xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-700 text-base mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-3 text-base text-gray-700 font-medium"
                      >
                        <span className="w-3 h-3 rounded-full bg-cyan flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-end pt-6 border-t-2 border-gray-200">
                    <ArrowRight className="w-6 h-6 text-cyan group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-green via-yellow-green to-yellow-green/85 text-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-background/95 mb-10 font-light">
            Let us help you achieve your renewable energy and sustainability goals with our expert services.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-yellow-green px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
