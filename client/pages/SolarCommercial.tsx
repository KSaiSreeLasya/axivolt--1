import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Building2,
  Zap,
  TrendingUp,
  Grid3x3,
  Truck,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function SolarCommercial() {
  useSEO({
    title:
      "Commercial & Industrial Solar Solutions in Hyderabad | AXIVOLT",
    description:
      "Large-scale commercial and industrial solar installations for businesses in Hyderabad and Telangana. ROI-focused solutions with energy monitoring and asset management. Reduce operating costs significantly.",
    keywords:
      "commercial solar panels hyderabad, industrial solar installation telangana, business solar solutions, commercial solar company andhra pradesh, industrial solar systems, corporate solar energy solutions, solar for factories and warehouses",
    ogTitle: "Commercial Solar Solutions - AXIVOLT",
    ogDescription:
      "Scale your business with solar. Proven commercial installations in Hyderabad and Telangana with 24/7 monitoring.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/solutions/solar/commercial`,
  });

  useEffect(() => {
    // Add Service schema markup
    addSchemaMarkup(
      SchemaMarkup.service({
        name: "Commercial Solar Solutions",
        description:
          "Large-scale commercial and industrial solar installations including EPC, EV charging, and asset management services",
        provider: {
          name: "AXIVOLT",
          url: typeof window !== "undefined" ? window.location.origin : "",
        },
        areaServed: ["Hyderabad", "Telangana", "India"],
      }),
    );
  }, []);
  const services = [
    {
      title: "Commercial & Industrial Solar EPC",
      description:
        "Design, procurement, and construction (EPC) for rooftops, ground-mounts, canopies and campus scale systems. Scalable solutions to meet energy demands.",
      icon: Building2,
    },
    {
      title: "EV Charging Infrastructure",
      description:
        "Turnkey solar-plus EV charging solutions for fleets, offices, retail and public parking — including smart scheduling and billing integrations.",
      icon: Zap,
    },
    {
      title: "Asset Monitoring & Remote O&M",
      description:
        "Real-time monitoring, performance analytics, and proactive maintenance to maximize uptime and yield for commercial assets.",
      icon: Eye,
    },
    {
      title: "Asset Management & Performance Optimization",
      description:
        "End-to-end asset lifecycle management, including energy yield guarantees, SLA-backed maintenance, and performance contracts.",
      icon: TrendingUp,
    },
    {
      title: "Material Trading & Procurement",
      description:
        "Sourcing, logistics and supply of panels, inverters, mounting structures and BOS components with quality assurance and competitive pricing.",
      icon: Truck,
    },
    {
      title: "Distributed Solar Networks",
      description:
        "Multi-site portfolio management, aggregation analytics and coordinated dispatch across commercial and industrial properties.",
      icon: Grid3x3,
    },
  ];

  const whyChoose = [
    "Proven track record on commercial and industrial projects.",
    "Flexible financing and PPA options for enterprises.",
    "Dedicated account management and SLA-backed operations.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-500/10 to-background pt-20 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/solutions/solar"
            className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Solar
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-cyan">
                B2B — Commercial & Industrial Solar
              </span>
            </h1>

            <p className="text-lg text-black300 max-w-2xl leading-relaxed">
              Scalable commercial solar solutions to reduce energy costs,
              improve sustainability and support corporate ESG goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-yellow-green text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
                Request Commercial Quote
              </button>
              <button className="border-2 border-cyan text-cyan px-8 py-3 rounded-lg font-bold text-lg hover:bg-cyan/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our B2B Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-black300 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-green/10 rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why choose our B2B services?
          </h2>

          <ul className="space-y-4 mb-8">
            {whyChoose.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-yellow-green mt-2 flex-shrink-0"></span>
                <span className="text-black300 text-lg">{point}</span>
              </li>
            ))}
          </ul>

          <button className="bg-yellow-green text-background px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
            Get a Commercial Quote
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-cyan rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Scale your solar operations
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            From design to operations, we handle everything so you can focus on
            business growth and sustainability.
          </p>
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Contact Our Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
