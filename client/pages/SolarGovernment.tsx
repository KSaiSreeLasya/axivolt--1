import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building2, Globe, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function SolarGovernment() {
  const navigate = useNavigate();
  useSEO({
    title:
      "Government Solar Projects | Public Sector Energy Solutions | AXIVOLT",
    description:
      "Specialized solar solutions for government and public sector projects. Tender support, compliance, and large-scale installations. Energy solutions for cities and institutions.",
    keywords:
      "government solar projects, public sector solar, government energy solutions, solar for institutions, public solar programs",
    ogTitle: "Government Solar Solutions - AXIVOLT",
    ogDescription:
      "Government-scale solar solutions with full compliance and tender support.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/solutions/solar/government`,
  });

  useEffect(() => {
    // Add Service schema markup
    addSchemaMarkup(
      SchemaMarkup.service({
        name: "Government Solar Solutions",
        description:
          "Comprehensive solar solutions for government institutions, public sector projects with tender support and full compliance",
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
      title: "Solar Rooftop — Residential & Commercial",
      description:
        "Planning and execution of rooftop solar programs for residential buildings, commercial offices and community housing schemes.",
      icon: Building2,
    },
    {
      title: "Public & Government Projects",
      description:
        "Tender support, implementation and compliance for public sector solar programs, street lighting, and institutional installations.",
      icon: Globe,
    },
    {
      title: "Asset Management & O&M",
      description:
        "Comprehensive asset management for public assets including performance monitoring, preventive maintenance and reporting.",
      icon: Shield,
    },
  ];

  const capabilities = [
    "End-to-end tender support and compliance documentation.",
    "City scale and institutional deployment experience.",
    "Transparent reporting and performance dashboards for stakeholders.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-500/10 to-background pt-20 md:pt-32 pb-16">
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
                B2G — Government & Public Projects
              </span>
            </h1>

            <p className="text-lg text-black300 max-w-2xl leading-relaxed">
              Delivering large-scale and compliant solar projects for government
              bodies, public institutions, and community housing programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-yellow-green text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
                Request Project Quote
              </button>
              <button className="border-2 border-cyan text-cyan px-8 py-3 rounded-lg font-bold text-lg hover:bg-cyan/10 transition-all">
                Contact Public Sector
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* B2G Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">B2G Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Public Sector Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Public sector capabilities
          </h2>

          <ul className="space-y-4 mb-8">
            {capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0"></span>
                <span className="text-black300 text-lg">{capability}</span>
              </li>
            ))}
          </ul>

          <button className="bg-yellow-green text-background px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
            Request a Project Quote
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-cyan rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Partner with us on public solar projects
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            From tender preparation to operations, we deliver scalable and
            compliant solar solutions for the public sector.
          </p>
          <button onClick={() => navigate('/quote')} className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
