import Header from "@/components/Header";
import { ArrowLeft, Building2, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function SolarGovernment() {
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
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
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
