import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Wind as WindIcon, Zap, Gauge } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Wind() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Onshore Wind Farm Sunset",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F4ed1dbacd1724aefbb5e588ae62c6b65?format=webp&width=800&height=1200",
    },
    {
      title: "Industrial Wind Installation",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F23f70d91d01941beb371bf69e943b5da?format=webp&width=800&height=1200",
    },
    {
      title: "Wind & Solar Hybrid Project",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F66b4a13c18bc43f2931a5438e3f202e5?format=webp&width=800&height=1200",
    },
  ];

  const solutions = [
    {
      title: "Utility-Scale",
      icon: Zap,
      description: "Large scale wind farms for IPC & deployment",
      stats: [
        { value: "45+", label: "Projects" },
        { value: "180MW", label: "Capacity" },
      ],
      features: [
        "Site Assessment",
        "Permitting Support",
        "Substation Development",
        "Grid Integration",
      ],
      caseStudy: "Megawind Wind Farm - 50MW Project",
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      title: "Commercial",
      icon: Gauge,
      description: "Industrial & business wind installations",
      stats: [
        { value: "120+", label: "Projects" },
        { value: "240MW", label: "Capacity" },
      ],
      features: [
        "Design & Engineering",
        "Supply & Installation",
        "Performance Monitoring",
      ],
      caseStudy: "Corporate Campus - 5MW Wind System",
      color: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
    },
    {
      title: "Hybrid Systems",
      icon: WindIcon,
      description: "Integrated solar wind renewable solutions",
      stats: [
        { value: "85+", label: "Projects" },
        { value: "320MW", label: "Capacity" },
      ],
      features: [
        "Hybrid Design Consultation",
        "Battery Integration",
        "Smart Grid",
        "Grid Stabilization",
      ],
      caseStudy: "Mixed-Use Development - 50MW Hybrid",
      color: "bg-green-500/20",
      iconColor: "text-green-400",
    },
  ];

  const highlights = [
    {
      title: "Wind EPC",
      description: "Full Engineering, Procurement and Construction services",
    },
    {
      title: "Hybrid Systems",
      description:
        "Integrated renewable energy solutions combining wind and solar",
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
                <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">Wind Energy</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Comprehensive wind projects, systems, and O&M. Select your application to learn more.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button className="bg-cyan text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all shadow-xl hover:shadow-2xl">
                  Utility-Scale
                </button>
                <button className="border-2 border-cyan text-cyan px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/10 transition-all shadow-lg">
                  Commercial
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <img
                src={projects[0].image}
                alt="Wind Project"
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
              Wind Projects in Action
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Discover our diverse wind installations across utility-scale, commercial and hybrid renewable projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-lg font-bold text-gray-900 mt-5 group-hover:text-cyan transition-colors">{project.title}</h3>
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
              Wind Energy Solutions
            </h2>
            <p className="text-black300">
              Comprehensive wind projects, systems, select your application to
              learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="bg-card border border-border rounded-xl p-8 hover:border-cyan transition-all"
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

                  <div className="bg-background/50 rounded-lg p-4 border border-border">
                    <p className="text-xs font-semibold text-cyan mb-1">
                      Case Study
                    </p>
                    <p className="text-sm text-black300">
                      {solution.caseStudy}
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wind Highlights
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
            Partner with us on wind projects
          </h2>
          <p className="text-background/80 mb-6 text-lg">
            Co-invest project development. EPC completed and operations for
            utility-scale and distributed renewables.
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
