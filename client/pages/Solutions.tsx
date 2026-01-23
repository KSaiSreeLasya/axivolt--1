import Header from "@/components/Header";
import { ArrowRight, Sun, Wind, Battery, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Solutions() {
  const solutions = [
    {
      title: "Solar Energy",
      description: "Rooftop, commercial & public solar solutions",
      icon: Sun,
      color: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
      metric1: { value: "200+", label: "Projects" },
      metric2: { value: "25-40%", label: "Savings" },
      features: [
        "Rooftop Solar",
        "Ground Mount",
        "Solar Carports",
        "Grid Integration",
      ],
      caseStudy: "Tech Campus - 2.5MW Solar Installation",
      link: "/solutions/solar",
    },
    {
      title: "Wind Energy",
      description: "Onshore wind, hybrid systems and O&M",
      icon: Wind,
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
      metric1: { value: "50+", label: "Projects" },
      metric2: { value: "30-45%", label: "Savings" },
      features: [
        "Onshore Wind",
        "Hybrid Systems",
        "Asset Management",
        "O&M Services",
      ],
      caseStudy: "Wind Farm - 50MW Onshore Project",
      link: "/solutions/wind",
    },
    {
      title: "Energy Storage",
      description: "Battery storage systems and EMS",
      icon: Battery,
      color: "bg-green-500/20",
      iconColor: "text-green-400",
      metric1: { value: "100+", label: "Projects" },
      metric2: { value: "20-35%", label: "Savings" },
      features: [
        "Battery Systems",
        "Energy Management",
        "Peak Shaving",
        "Backup Power",
      ],
      caseStudy: "Industrial Plant - 1MW Storage System",
      link: "/solutions/energy-storage",
    },
    {
      title: "EV Stations",
      description: "EV charging infrastructure and services",
      icon: Zap,
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
      metric1: { value: "300+", label: "Projects" },
      metric2: { value: "15-30%", label: "Savings" },
      features: [
        "Fast Charging",
        "Smart Grid",
        "Fleet Solutions",
        "Payment Systems",
      ],
      caseStudy: "Shopping Mall - 50 Station Network",
      link: "/solutions/ev-stations",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-20 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-block bg-cyan/20 text-cyan px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our core energy solutions — click a category to view
              detailed services and offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive energy solutions with proven results and
              comprehensive features across all sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  to={solution.link}
                  className="group bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all hover:shadow-lg hover:shadow-cyan/10"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-lg ${solution.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    {solution.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    <div>
                      <p className="text-2xl font-bold text-cyan">
                        {solution.metric1.value}
                      </p>
                      <p className="text-xs text-gray-400">
                        {solution.metric1.label}
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-green">
                        {solution.metric2.value}
                      </p>
                      <p className="text-xs text-gray-400">
                        {solution.metric2.label}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Case Study */}
                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <p className="text-xs font-semibold text-cyan mb-1">
                      Case Study
                    </p>
                    <p className="text-sm text-gray-300">
                      {solution.caseStudy}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="mt-4 flex items-center justify-end text-cyan group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <ul className="space-y-2 text-sm text-gray-400">
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
              <ul className="space-y-2 text-sm text-gray-400">
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
              <ul className="space-y-2 text-sm text-gray-400">
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
            <p className="text-sm text-gray-400">
              © 2024 Axiso Green Energies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
