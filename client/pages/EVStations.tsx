import Header from "@/components/Header";
import { ArrowLeft, Zap, Plug, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function EVStations() {
  const solutions = [
    {
      title: "Charging Solutions 1",
      image:
        "https://images.unsplash.com/photo-1617788386602-11c0c51c18e0?w=600&h=400&fit=crop",
    },
    {
      title: "Infrastructure 2",
      image:
        "https://images.unsplash.com/photo-1506901925346-21bda4d32df4?w=600&h=400&fit=crop",
    },
    {
      title: "Fleet Charging 3",
      image:
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=600&h=400&fit=crop",
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
      color: "bg-green-500/20",
      iconColor: "text-green-400",
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
                <span className="text-green-400">EV Stations &</span>
                <br />
                <span className="text-green-400">Charging</span>
              </h1>

              <p className="text-lg text-black300 leading-relaxed">
                Turnkey EV charging infrastructure and service solutions for
                businesses, fleets and public deployments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-green-400 text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-500 transition-all">
                  EV Infrastructure
                </button>
                <button className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-400/10 transition-all">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-bold">{solution.title}</h3>
                </div>
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
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
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
        <div className="max-w-4xl mx-auto bg-green-400 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Deploy EV charging at scale
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            We offer planning, permitting, supply and operations for charging
            networks and depot electrification.
          </p>
          <button className="bg-background text-green-400 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-black400">
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Solar Energy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Wind Power
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Energy Storage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Smart Grid
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-black400">
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Sectors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-black400">
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Digital Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Procurement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-black400">
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-black400">
              © 2024 Axiso Green Energies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
