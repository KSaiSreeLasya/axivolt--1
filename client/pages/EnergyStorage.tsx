import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Battery, Gauge, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function EnergyStorage() {
  const navigate = useNavigate();
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
                <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">Energy Storage</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Battery energy storage solutions to enhance grid resilience, provide ancillary services and increase renewable penetration.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Energy Storage Infrastructure
            </h2>
            <p className="text-black300">
              Advanced battery systems and energy management solutions powering
              the grid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infrastructure.map((item, idx) => (
              <div key={idx}>
                <div className="relative h-64 rounded-lg overflow-hidden group mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Storage Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-card border border-border rounded-xl p-8"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${highlight.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${highlight.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-black300">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-cyan rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Energy storage for a flexible grid
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            We deliver turnkey battery solutions and EMS integrations to support
            grid services and increase renewable adoption.
          </p>
          <button
            onClick={() => navigate("/quote")}
            className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
