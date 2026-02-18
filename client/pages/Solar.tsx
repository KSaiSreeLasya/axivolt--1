import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Sun, Zap, Gauge } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function Solar() {
  const navigate = useNavigate();
  useSEO({
    title: "Axivolt Solar Solutions | Trusted Renewable Energy Company in India",
    description:
      "Axivolt is a reliable solar energy company delivering high-performance solar systems with expert installation and long-term support.",
    keywords:
      "solar panels in hyderabad, solar companies telangana, solar energy solutions, residential solar installation, commercial solar systems, solar energy telangana, best solar company in hyderabad, solar company in andhra pradesh",
    ogTitle: "Axivolt Solar Solutions | Trusted Renewable Energy Company in India",
    ogDescription:
      "Axivolt is a reliable solar energy company delivering high-performance solar systems with expert installation and long-term support.",
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
      title: "Wind & Solar Hybrid Farm",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F7bc4b1a4b9ea417b94e89a43e047a7aa?format=webp&width=800&height=1200",
    },
    {
      title: "Large-Scale Industrial Solar Installation",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2Fe490542cae24409887803626eb7fd4fe?format=webp&width=800&height=1200",
    },
    {
      title: "Commercial Warehouse Solar System",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F2faad9b743d345038748132b0efe13f4?format=webp&width=800&height=1200",
    },
    {
      title: "Ground-Mounted Solar Farm Project",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F0af327a09e41485fa5c095981a88b3eb?format=webp&width=800&height=1200",
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
                  Solar Energy
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Comprehensive solar projects, systems, and O&M. Select your
                application to learn more.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Link
                  to="/solutions/solar/residential"
                  className="bg-cyan text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all text-center shadow-xl hover:shadow-2xl"
                >
                  Residential
                </Link>
                <Link
                  to="/solutions/solar/commercial"
                  className="border-2 border-cyan text-cyan px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/10 transition-all text-center shadow-lg"
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Solar Projects in Action
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Discover our diverse solar installations across residential,
              commercial and government projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group">
                <div className="relative h-72 rounded-2xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Solar Energy Solutions
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Choose your application to view detailed solar solutions and
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  to={solution.link}
                  className="group bg-white rounded-2xl p-10 border-2 transition-all shadow-lg hover:shadow-2xl relative overflow-hidden hover:border-cyan/50"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <div
                    className={`w-20 h-20 rounded-2xl ${solution.color} flex items-center justify-center mb-8 shadow-lg relative z-10 border-2 border-white`}
                  >
                    <Icon className={`w-10 h-10 ${solution.iconColor}`} />
                  </div>

                  <h3 className="text-3xl font-bold mb-3 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 text-base mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b-2 border-gray-200">
                    {solution.stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-4xl font-bold bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </p>
                        <p className="text-base text-gray-700 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-base text-gray-700 font-medium"
                      >
                        <span className="w-3 h-3 rounded-full bg-cyan flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gradient-to-br from-cyan/10 to-cyan/5 rounded-xl p-6 border-2 border-cyan/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-cyan uppercase tracking-widest mb-1">
                        Case Study
                      </p>
                      <p className="text-base text-gray-800 font-semibold">
                        {solution.caseStudy}
                      </p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-cyan flex-shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-yellow-green-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Solar Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="group bg-white rounded-2xl p-10 border-2 border-yellow-green/20 hover:border-yellow-green/50 transition-all shadow-lg hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-green/5 rounded-full -mr-16 -mt-16 group-hover:bg-yellow-green/10 transition-colors"></div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 relative z-10">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed relative z-10">
                  {highlight.description}
                </p>
              </div>
            ))}
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
            Go Solar with AXIVOLT
          </h2>
          <p className="text-xl text-background/95 mb-10 font-light">
            From residential rooftops to utility-scale projects, we deliver
            reliable solar solutions for every sector.
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
