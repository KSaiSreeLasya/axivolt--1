import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Sun, Zap, Gauge } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function Solar() {
  const navigate = useNavigate();
  useSEO({
    title:
      "Solar Panel Installation & Solutions in Hyderabad, Telangana | AXIVOLT",
    description:
      "Top-rated solar panel installation company in Hyderabad and Telangana. Comprehensive residential, commercial, and government solar solutions. 500+ projects completed with 50MW+ capacity.",
    keywords:
      "solar panels in hyderabad, solar companies telangana, solar energy solutions, residential solar installation, commercial solar systems, solar energy telangana, best solar company in hyderabad, solar company in andhra pradesh",
    ogTitle: "Solar Energy Solutions - AXIVOLT",
    ogDescription:
      "Professional solar installations for homes and businesses. Expert service with 15+ years experience in Hyderabad and Telangana.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/solutions/solar`,
  });

  useEffect(() => {
    // Add Service schema markup
    addSchemaMarkup(
      SchemaMarkup.service({
        name: "Solar Energy Solutions",
        description:
          "Comprehensive solar panel installation, maintenance, and energy solutions for residential, commercial, and government sectors",
        provider: {
          name: "AXIVOLT",
          url: typeof window !== "undefined" ? window.location.origin : "",
        },
        areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh", "India"],
      }),
    );
  }, []);
  const projects = [
    {
      title: "Rooftop Solar Installation 1",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e938aa1df42?w=600&h=400&fit=crop",
    },
    {
      title: "Large-Scale Solar Farm",
      image:
        "https://images.unsplash.com/photo-1473375157435-2a8ad3cf3d64?w=600&h=400&fit=crop",
    },
    {
      title: "Solar Panel Installation",
      image:
        "https://images.unsplash.com/photo-1495652714223-3ba207a4bff3?w=600&h=400&fit=crop",
    },
  ];

  const solutions = [
    {
      title: "B2C - Residential",
      icon: Sun,
      description: "Trusted rooftop solar systems for homeowners",
      stats: [
        { value: "500+", label: "Installations" },
        { value: "5MW", label: "Capacity" },
      ],
      features: [
        "Free site assessment",
        "Customized system design",
        "Installation & commissioning",
        "O&M & warranty support",
      ],
      caseStudy: "Residential Rooftop - 5kW System",
      color: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
      link: "/solutions/solar/residential",
    },
    {
      title: "B2B - Commercial",
      icon: Zap,
      description: "Scalable commercial solar solutions",
      stats: [
        { value: "300+", label: "Projects" },
        { value: "50MW", label: "Capacity" },
      ],
      features: [
        "Design & engineering",
        "EPC services",
        "Performance monitoring",
        "Asset management",
      ],
      caseStudy: "Commercial Rooftop - 100kW System",
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
      link: "/solutions/solar/commercial",
    },
    {
      title: "B2G - Government",
      icon: Gauge,
      description: "Large-scale public sector projects",
      stats: [
        { value: "50+", label: "Projects" },
        { value: "30MW", label: "Capacity" },
      ],
      features: [
        "Tender support",
        "Government compliance",
        "Public sector expertise",
        "Reporting & analytics",
      ],
      caseStudy: "Government Installation - 5MW System",
      color: "bg-green-500/20",
      iconColor: "text-green-400",
      link: "/solutions/solar/government",
    },
  ];

  const highlights = [
    {
      title: "Solar EPC",
      description: "Full Engineering, Procurement and Construction services",
    },
    {
      title: "Solar O&M",
      description:
        "Comprehensive operations and maintenance for optimal performance",
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
            Back
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-cyan">Solar Energy</span>
              </h1>

              <p className="text-lg text-black300 leading-relaxed">
                Comprehensive solar projects, systems, and O&M. Select your
                application to learn more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/solutions/solar/residential"
                  className="bg-cyan text-background px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all text-center"
                >
                  Residential
                </Link>
                <Link
                  to="/solutions/solar/commercial"
                  className="border-2 border-cyan text-cyan px-8 py-3 rounded-lg font-bold text-lg hover:bg-cyan/10 transition-all text-center"
                >
                  Commercial
                </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Projects in Action
            </h2>
            <p className="text-black300">
              Discover our diverse solar installations across residential,
              commercial and government projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
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

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Energy Solutions
            </h2>
            <p className="text-black300">
              Choose your application to view detailed solar solutions and
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  to={solution.link}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all cursor-pointer block"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${solution.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-black300 text-sm mb-6">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    {solution.stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-xl font-bold text-cyan">
                          {stat.value}
                        </p>
                        <p className="text-xs text-black400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-black300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-background/50 rounded-lg p-4 border border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-cyan mb-1">
                        Case Study
                      </p>
                      <p className="text-sm text-black300">
                        {solution.caseStudy}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan flex-shrink-0 ml-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solar Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="bg-card border border-border rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-black300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-cyan rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-background mb-4">
            Go Solar with Axiso Green Energies
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            From residential rooftops to utility-scale projects, we deliver
            reliable solar solutions for every sector.
          </p>
          <button onClick={() => navigate('/quote')} className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
