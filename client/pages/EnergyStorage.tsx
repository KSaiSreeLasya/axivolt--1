import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Battery, Gauge, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

export default function EnergyStorage() {
  const navigate = useNavigate();

  useSEO({
    title: "Energy Storage Solutions | Battery Systems & Grid Storage | AXIVOLT",
    description:
      "Advanced battery storage systems for residential, commercial, and grid-scale applications. Store and manage energy efficiently.",
    keywords:
      "energy storage, battery storage, battery systems, grid storage, renewable energy storage",
    ogTitle: "Energy Storage Solutions - AXIVOLT",
    ogDescription:
      "Smart energy storage solutions to maximize your renewable energy use.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/solutions/energy-storage`,
  });
  const infrastructure = [
    {
      title: "Smart City Energy System",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2Fc40413ea7aad4aa0846b7031b5e8e68a?format=webp&width=800&height=1200",
    },
    {
      title: "Battery Storage Systems",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F5215db448aa74c6bb69c1758274778dd?format=webp&width=800&height=1200",
    },
    {
      title: "Energy Management Controls",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F92489de2dc9b43308f558bd9797f20b6?format=webp&width=800&height=1200",
    },
  ];

  const highlights = [
    {
      title: "Battery Energy Storage Systems",
      icon: Battery,
      description:
        "Finest of water and lithium battery systems for peak shifting, backup, and grid services.",
      color: "bg-green-500/20",
      iconColor: "text-green-400",
    },
    {
      title: "Energy Management",
      icon: Gauge,
      description:
        "Advanced EMS and controls to optimize dispatch, arbitrage and reliability.",
      color: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
    },
    {
      title: "O&M & Lifecycle",
      icon: Zap,
      description:
        "Warranty, testing, and long-term operations to ensure safe and reliable performance.",
      color: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
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
            to="/solutions"
            className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-10 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Solutions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
                <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                  Energy Storage
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Battery energy storage solutions to enhance grid resilience,
                provide ancillary services and increase renewable penetration.
              </p>

              <button className="bg-cyan text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all shadow-xl hover:shadow-2xl">
                Request Quote
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <img
                src={infrastructure[0].image}
                alt="Energy Storage Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Energy Storage Infrastructure
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Advanced battery systems and energy management solutions powering
              the grid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructure.map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Storage Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="group bg-white rounded-2xl p-10 border-2 transition-all shadow-lg hover:shadow-2xl relative overflow-hidden hover:border-cyan/50"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <div
                    className={`w-20 h-20 rounded-2xl ${highlight.color} flex items-center justify-center mb-8 shadow-lg relative z-10 border-2 border-white`}
                  >
                    <Icon className={`w-10 h-10 ${highlight.iconColor}`} />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-gray-900 relative z-10">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed relative z-10">
                    {highlight.description}
                  </p>
                </div>
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
            Energy storage for a flexible grid
          </h2>
          <p className="text-xl text-background/95 mb-10 font-light">
            We deliver turnkey battery solutions and EMS integrations to support
            grid services and increase renewable adoption.
          </p>
          <button
            onClick={() => navigate("/quote")}
            className="bg-white text-yellow-green px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
