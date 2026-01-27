import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
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
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-20 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-cyan">Our Services</span>
            </h1>

            <p className="text-lg text-black300 max-w-2xl leading-relaxed">
              Comprehensive service offerings to support your renewable energy
              journey from planning to implementation and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-black300 max-w-2xl mx-auto">
              Choose a service to learn more about how we can support your
              renewable energy goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all cursor-pointer block"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-black300 text-sm mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-black300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-end pt-4 border-t border-border">
                    <ArrowRight className="w-5 h-5 text-cyan" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-cyan rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Ready to get started?
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            Let us help you achieve your renewable energy and sustainability
            goals with our expert services.
          </p>
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Contact Us Today
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
                    Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Procurement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Digital Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
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
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition">
                    Contact
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
