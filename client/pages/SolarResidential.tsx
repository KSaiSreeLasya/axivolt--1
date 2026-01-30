import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function SolarResidential() {
  useSEO({
    title: "Residential Solar Panel Installation in Hyderabad | Rooftop Solar Systems",
    description:
      "Professional residential solar panel installation in Hyderabad and Telangana. Custom rooftop solar systems for homes with warranty and maintenance support. Save on electricity bills with AXIVOLT's expert service.",
    keywords:
      "residential solar panels hyderabad, rooftop solar installation telangana, home solar system, solar panels for home in hyderabad, residential solar company telangana, solar installation andhra pradesh, rooftop solar system hyderabad",
    ogTitle: "Residential Solar Solutions - AXIVOLT",
    ogDescription:
      "Transform your home with affordable solar energy. Expert installation in Hyderabad and Telangana with lifetime support.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/solutions/solar/residential`,
  });

  useEffect(() => {
    // Add Service and Product schema markup
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Residential Solar Installation",
          description:
            "Professional rooftop solar panel installation and O&M services for residential homes and housing societies",
          provider: {
            "@type": "Organization",
            name: "AXIVOLT",
            url: baseUrl,
          },
          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh", "India"],
        },
        {
          "@type": "Product",
          name: "Residential Solar Panel System",
          description:
            "High-efficiency rooftop solar panel systems for homes with installation and maintenance support",
          manufacturer: {
            "@type": "Organization",
            name: "AXIVOLT",
          },
          category: "Renewable Energy",
          url: baseUrl + "/solutions/solar/residential",
        },
      ],
    };
    addSchemaMarkup(schema);
  }, []);
  const offerings = [
    {
      title: "Rooftop Solar EPC",
      description:
        "Complete rooftop EPC for homes and residential buildings — custom design, high-quality components, installation and commissioning with safety-first practices.",
      icon: Home,
    },
    {
      title: "Procurement & Consulting",
      description:
        "End-to-end procurement and advisory services to help homeowners choose the right system, incentives guidance and ROI analysis.",
      icon: Zap,
    },
    {
      title: "Maintenance & Warranty",
      description:
        "Ongoing O&M and extended warranty packages for residential customers to protect performance and extend system life.",
      icon: Shield,
    },
    {
      title: "Housing Society Solutions",
      description:
        "Shared solar and net-metering solutions for housing societies, including rooftop pooling and billing arrangements.",
      icon: Users,
    },
  ];

  const helpPoints = [
    "Free site assessment and customized system design.",
    "Assistance with subsidies, net metering and documentation.",
    "Flexible financing options and transparent pricing.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan/10 to-background pt-20 md:pt-32 pb-16">
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
                B2C — Residential Solar Solutions
              </span>
            </h1>

            <p className="text-lg text-black300 max-w-2xl leading-relaxed">
              Trusted rooftop solar systems and advisory services for homeowners
              and residential communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-yellow-green text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
                Request Residential Quote
              </button>
              <button className="border-2 border-cyan text-cyan px-8 py-3 rounded-lg font-bold text-lg hover:bg-cyan/10 transition-all">
                Housing Society Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Offerings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Residential Offerings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <div
                  key={offering.title}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan" />
                    </div>
                    <h3 className="text-xl font-bold">{offering.title}</h3>
                  </div>
                  <p className="text-black300">{offering.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How we help homeowners
          </h2>

          <div className="max-w-3xl">
            <ul className="space-y-4 mb-8">
              {helpPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0"></span>
                  <span className="text-black300 text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <button className="bg-yellow-green text-background px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
              Get a Residential Quote
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-cyan rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Ready to go solar?
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            Get a free site assessment and learn how much you can save with
            residential solar.
          </p>
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Request a Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
