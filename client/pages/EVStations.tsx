import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap, Plug, Truck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function EVStations() {
  const navigate = useNavigate();
  const solutions = [
    {
      title: "Home EV Charging Station",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F0dfe5699a39f4683b1053aed1df1f2b4?format=webp&width=800&height=1200",
    },
    {
      title: "Commercial Parking Canopy",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F702874ccd7f542f980f6069362c8610c?format=webp&width=800&height=1200",
    },
    {
      title: "Fast Charging Network",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F724918157e3e443e87569a122e3fa517?format=webp&width=800&height=1200",
    },
  ];

  const offerings = [
    {
      title: "EV Charging Infrastructure",
      icon: Plug,
      description:
        "Design and deployment of charging infrastructure for commercial, fleet and public spaces.",
      features: [
        "AC & DC fast charging deployments",
        "Smart charging and payment integrations",
      ],
      color: "bg-cyan-500/20",
      iconColor: "text-cyan",
    },
    {
      title: "EV Charging Solutions",
      icon: Zap,
      description:
        "AC and DC fast charging deployments, smart charging and payment integrations.",
      features: [
        "AC & DC fast charging deployments",
        "Smart charging and payment integrations",
      ],
      color: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
    },
    {
      title: "Fleet & Depot Charging",
      icon: Truck,
      description:
        "Turnkey solutions for bus, truck and commercial fleet electrification.",
      features: [
        "Turnkey solutions for bus, truck and commercial fleet electrification.",
      ],
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
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
                <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">EV Stations &</span>
                <br />
                <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">Charging</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Turnkey EV charging infrastructure and service solutions for businesses, fleets and public deployments.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button className="bg-cyan text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all shadow-xl hover:shadow-2xl">
                  EV Infrastructure
                </button>
                <button className="border-2 border-cyan text-cyan px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/10 transition-all shadow-lg">
                  EV Charging
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <img
                src={solutions[0].image}
                alt="EV Station"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Charging Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              EV Charging Solutions
            </h2>
            <p className="text-black300">
              Next-generation charging infrastructure for electric vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx}>
                <div className="relative h-64 rounded-lg overflow-hidden group mb-3">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold">{solution.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              EV Stations Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <div
                  key={offering.title}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${offering.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${offering.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{offering.title}</h3>
                  <p className="text-black300 text-sm mb-6">
                    {offering.description}
                  </p>

                  <ul className="space-y-2">
                    {offering.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-black300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            Deploy EV charging at scale
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            We offer planning, permitting, supply and operations for charging
            networks and depot electrification.
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
