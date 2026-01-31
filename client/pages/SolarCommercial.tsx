import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Building2,
  Zap,
  TrendingUp,
  Grid3x3,
  Truck,
  Eye,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SolarCommercial() {
  const navigate = useNavigate();
  useSEO({
    title: "Commercial & Industrial Solar Solutions in Hyderabad | AXIVOLT",
    description:
      "Large-scale commercial and industrial solar installations for businesses in Hyderabad and Telangana. ROI-focused solutions with energy monitoring and asset management. Reduce operating costs significantly.",
    keywords:
      "commercial solar panels hyderabad, industrial solar installation telangana, business solar solutions, commercial solar company andhra pradesh, industrial solar systems, corporate solar energy solutions, solar for factories and warehouses",
    ogTitle: "Commercial Solar Solutions - AXIVOLT",
    ogDescription:
      "Scale your business with solar. Proven commercial installations in Hyderabad and Telangana with 24/7 monitoring.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/solutions/solar/commercial`,
  });

  useEffect(() => {
    // Add Service and Product schema markup
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Commercial Solar Solutions",
          description:
            "Large-scale commercial and industrial solar installations including EPC, EV charging, and asset management services",
          provider: {
            "@type": "Organization",
            name: "AXIVOLT",
            url: baseUrl,
          },
          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh", "India"],
        },
        {
          "@type": "Product",
          name: "Commercial Solar System",
          description:
            "Large-scale industrial and commercial solar panel systems with energy monitoring and asset management",
          manufacturer: {
            "@type": "Organization",
            name: "AXIVOLT",
          },
          category: "Renewable Energy",
          url: baseUrl + "/solutions/solar/commercial",
        },
      ],
    };
    addSchemaMarkup(schema);
  }, []);
  const services = [
    {
      title: "Commercial & Industrial Solar EPC",
      description:
        "Design, procurement, and construction (EPC) for rooftops, ground-mounts, canopies and campus scale systems. Scalable solutions to meet energy demands.",
      icon: Building2,
    },
    {
      title: "EV Charging Infrastructure",
      description:
        "Turnkey solar-plus EV charging solutions for fleets, offices, retail and public parking — including smart scheduling and billing integrations.",
      icon: Zap,
    },
    {
      title: "Asset Monitoring & Remote O&M",
      description:
        "Real-time monitoring, performance analytics, and proactive maintenance to maximize uptime and yield for commercial assets.",
      icon: Eye,
    },
    {
      title: "Asset Management & Performance Optimization",
      description:
        "End-to-end asset lifecycle management, including energy yield guarantees, SLA-backed maintenance, and performance contracts.",
      icon: TrendingUp,
    },
    {
      title: "Material Trading & Procurement",
      description:
        "Sourcing, logistics and supply of panels, inverters, mounting structures and BOS components with quality assurance and competitive pricing.",
      icon: Truck,
    },
    {
      title: "Distributed Solar Networks",
      description:
        "Multi-site portfolio management, aggregation analytics and coordinated dispatch across commercial and industrial properties.",
      icon: Grid3x3,
    },
  ];

  const whyChoose = [
    "Proven track record on commercial and industrial projects.",
    "Flexible financing and PPA options for enterprises.",
    "Dedicated account management and SLA-backed operations.",
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/15 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/solutions/solar"
              className="inline-flex items-center gap-2 text-cyan hover:text-yellow-green transition-colors mb-10 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Solar
            </Link>
          </motion.div>

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
                B2B — Commercial & Industrial
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed font-light max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Scalable commercial solar solutions to reduce energy costs,
              improve sustainability and support corporate ESG goals.
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
                  boxShadow: "0 25px 50px rgba(205, 210, 40, 0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-green text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-green/90 transition-all shadow-xl"
              >
                Request Quote
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
                Contact Sales
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* B2B Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our B2B Services
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl">
              Comprehensive commercial solar solutions for enterprises and
              large-scale operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center mb-6 shadow-lg relative z-10 border-2 border-white"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-7 h-7 text-cyan" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-yellow-green-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why choose our B2B services?
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Partner with the leaders in commercial renewable energy
            </p>
          </motion.div>

          <div className="space-y-5 mb-10 max-w-2xl">
            {whyChoose.map((point, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-cyan/20 hover:border-cyan/50 transition-all shadow-sm hover:shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <Check className="w-6 h-6 text-yellow-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg font-medium">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(205, 210, 40, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-green text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-green/90 transition-all shadow-lg inline-flex items-center gap-3"
          >
            Get a Commercial Quote <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-cyan via-cyan to-cyan/90 text-background relative overflow-hidden">
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
            Scale your solar operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-background/95 mb-10 font-light leading-relaxed"
          >
            From design to operations, we handle everything so you can focus on
            business growth and sustainability.
          </motion.p>
          <motion.button
            onClick={() => navigate("/quote")}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
