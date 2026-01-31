import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Battery, Gauge, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function EnergyStorage() {
  const navigate = useNavigate();
  const infrastructure = [
    {
      title: "Battery Storage",
      image:
        "https://images.unsplash.com/photo-1513452862899-169dd34e93b4?w=600&h=400&fit=crop",
    },
    {
      title: "Energy Management",
      image:
        "https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=600&h=400&fit=crop",
    },
    {
      title: "Grid Infrastructure",
      image:
        "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=600&h=400&fit=crop",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-20 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-cyan">Energy Storage</span>
              </h1>

              <p className="text-lg text-black300 leading-relaxed">
                Battery energy storage solutions to enhance grid resilience,
                provide ancillary services and increase renewable penetration.
              </p>

              <button className="bg-cyan text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
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
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
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
