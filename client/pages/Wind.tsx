import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Wind as WindIcon, Zap, Gauge, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pt-24 md:pt-40 pb-20">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-green/15 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-10 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Solutions
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                  Wind Energy
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-700 leading-relaxed font-light max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Comprehensive wind projects, systems, and O&M. Select your
                application to learn more.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0, 188, 212, 0.35)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all shadow-xl"
                >
                  Utility-Scale
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 188, 212, 0.15)",
                    boxShadow: "0 15px 30px rgba(0, 188, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan text-cyan px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/10 transition-all"
                >
                  Commercial
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative h-96 md:h-full rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={projects[0].image}
                alt="Wind Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Wind Projects in Action
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Discover our diverse wind installations across utility-scale,
              commercial and hybrid renewable projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Wind Energy Solutions
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Comprehensive wind projects, systems, and O&M services tailored to
              your application needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.map((solution, idx) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                    boxShadow: "0 40px 80px rgba(0, 188, 212, 0.25)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <motion.div
                    className={`w-16 h-16 rounded-xl ${solution.color} flex items-center justify-center mb-6 shadow-lg relative z-10 border-2 border-white`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 relative z-10">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 text-base mb-6 leading-relaxed relative z-10">
                    {solution.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    {solution.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-2xl font-bold text-cyan">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700 font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gradient-to-br from-cyan/10 to-cyan/5 rounded-lg p-4 border border-cyan/20">
                    <p className="text-xs font-semibold text-cyan mb-1 uppercase tracking-widest">
                      Case Study
                    </p>
                    <p className="text-sm text-gray-700 font-medium">
                      {solution.caseStudy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-yellow-green-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Wind Highlights
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Key capabilities and expertise in wind energy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.title}
                className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {highlight.description}
                </p>
                <motion.div
                  className="h-1 w-0 group-hover:w-12 bg-cyan transition-all duration-300 mt-6 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-yellow-green via-yellow-green to-yellow-green/85 text-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </motion.div>
        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Partner with us on wind projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-background/95 mb-10 font-light leading-relaxed"
          >
            Co-invest project development. EPC completed and operations for
            utility-scale and distributed renewables.
          </motion.p>
          <motion.button
            onClick={() => navigate("/quote")}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-yellow-green px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
