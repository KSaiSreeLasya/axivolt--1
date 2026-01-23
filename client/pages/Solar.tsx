import Header from "@/components/Header";
import { ArrowLeft, Sun, Building2, Factory, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Solar() {
  const projects = [
    {
      title: "Residential Project 1",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
    },
    {
      title: "Commercial Project 1",
      image: "https://images.unsplash.com/photo-1509391366360-2e938aa1df42?w=600&h=400&fit=crop",
    },
    {
      title: "Industrial Project 1",
      image: "https://images.unsplash.com/photo-1495652714223-3ba207a4bff3?w=600&h=400&fit=crop",
    },
  ];

  const segments = [
    {
      title: "B2C",
      icon: Building2,
      description: "Residential rooftop solutions",
      stats: [
        { value: "500+", label: "Projects" },
        { value: "20-35%", label: "Savings" },
      ],
      features: [
        "Rooftop Solar",
        "Solar Carports",
        "Net Metering",
        "Grid Integration",
      ],
      caseStudy: "Tech Campus - 2.5MW Solar Installation",
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      title: "B2B",
      icon: Building2,
      description: "Commercial & industrial DC, EV infra",
      stats: [
        { value: "150+", label: "Projects" },
        { value: "25-40%", label: "Savings" },
      ],
      features: [
        "Rooftop Solar",
        "Ground Mount",
        "Solar Carports",
        "Grid Integration",
      ],
      caseStudy: "Tech Campus - 2.5MW Solar Installation",
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "B2G",
      icon: Zap,
      description: "Government & public sector programs",
      stats: [
        { value: "80+", label: "Projects" },
        { value: "30-50%", label: "Savings" },
      ],
      features: [
        "Utility-Scale Solar",
        "Public Buildings",
        "Grid Integration",
        "Peak Load Management",
      ],
      caseStudy: "Govt Plant - 5MW Government System",
      color: "bg-green-500/20",
      iconColor: "text-green-400",
    },
  ];

  const highlights = [
    {
      title: "Roofing & Ground",
      description: "Advanced solar technology for all installation types",
    },
    {
      title: "Commercial",
      description: "Large-scale commercial solar solutions for businesses",
    },
  ];

  const services = [
    {
      title: "Site Assessment",
      description: "Comprehensive evaluation of your property for optimal solar placement",
    },
    {
      title: "Design & Engineering",
      description: "Custom solar system design tailored to your energy needs",
    },
    {
      title: "Installation & Support",
      description: "Professional installation with ongoing technical support and monitoring",
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
                <span className="text-yellow-400">Solar Energy</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Comprehensive solar solutions for residential and public sector. Optimized for performance and longevity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-yellow-400 text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all">
                  Residential
                </button>
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400/10 transition-all">
                  Commercial
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <img
                src={projects[0].image}
                alt="Solar Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Projects in Action</h2>
            <p className="text-gray-300">
              Discover our diverse solar installations across residential, commercial and utility-scale projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who we serve</h2>
            <p className="text-gray-300">
              Tailored solar solutions for homeowners, businesses and public sector. Select your category to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {segments.map((segment) => {
              const Icon = segment.icon;
              return (
                <div
                  key={segment.title}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg ${segment.color} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${segment.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{segment.title}</h3>
                  <p className="text-gray-300 text-sm mb-6">{segment.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    {segment.stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-xl font-bold text-cyan">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {segment.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <p className="text-xs font-semibold text-cyan mb-1">Case Study</p>
                    <p className="text-sm text-gray-300">{segment.caseStudy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-yellow-400 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">Ready to go solar?</h2>
          <p className="text-background/80 mb-6 text-lg">
            Talk to our solar experts to design a system that's right for your needs and budget
          </p>
          <button className="bg-background text-yellow-400 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solar Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
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
                <li><a href="#" className="hover:text-cyan transition">Solar Energy</a></li>
                <li><a href="#" className="hover:text-cyan transition">Wind Power</a></li>
                <li><a href="#" className="hover:text-cyan transition">Energy Storage</a></li>
                <li><a href="#" className="hover:text-cyan transition">Smart Grid</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan transition">About Us</a></li>
                <li><a href="#" className="hover:text-cyan transition">Advisory</a></li>
                <li><a href="#" className="hover:text-cyan transition">Careers</a></li>
                <li><a href="#" className="hover:text-cyan transition">Sectors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan transition">Resources</a></li>
                <li><a href="#" className="hover:text-cyan transition">Digital Solutions</a></li>
                <li><a href="#" className="hover:text-cyan transition">Procurement</a></li>
                <li><a href="#" className="hover:text-cyan transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-gray-400">© 2024 Axiso Green Energies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
