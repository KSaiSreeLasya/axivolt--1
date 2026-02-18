import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Building2, Factory, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

export default function Industry() {
  const navigate = useNavigate();

  useSEO({
    title: "Industrial Solar Energy Systems in India | Axivolt",
    description:
      "High-capacity industrial solar installations designed to reduce operational energy costs and improve sustainability.",
    keywords:
      "industry solar solutions, commercial renewable energy, industrial solar, sector-specific energy solutions, industrial solar systems",
    ogTitle: "Industrial Solar Energy Systems in India | Axivolt",
    ogDescription:
      "High-capacity industrial solar installations designed to reduce operational energy costs and improve sustainability.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/industry`,
  });
  const industries = [
    {
      title: "Commercial & Office",
      description:
        "Optimize energy costs with solar and renewable solutions for office buildings and commercial spaces.",
      icon: Building2,
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
      stats: [
        { value: "50%", label: "Energy Savings" },
        { value: "8-10 yrs", label: "ROI Timeline" },
        { value: "25+ years", label: "System Lifespan" },
      ],
      benefits: [
        "Reduced operational costs",
        "Enhanced corporate sustainability",
        "Tax incentives and rebates",
        "Improved property value",
      ],
    },
    {
      title: "Industrial & Manufacturing",
      description:
        "Industrial-grade renewable energy solutions for high-demand manufacturing and production facilities.",
      icon: Factory,
      color: "bg-cyan/20",
      iconColor: "text-cyan",
      stats: [
        { value: "60%+", label: "Peak Load Coverage" },
        { value: "6-8 yrs", label: "ROI Timeline" },
        { value: "99.9%", label: "Uptime Guarantee" },
      ],
      benefits: [
        "Uninterrupted power supply",
        "Reduced grid dependency",
        "Process optimization",
        "Environmental compliance",
      ],
    },
    {
      title: "Educational Institutions",
      description:
        "Sustainable energy solutions for schools, colleges, and universities that reduce costs and teach sustainability.",
      icon: Zap,
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
      stats: [
        { value: "40%", label: "Cost Reduction" },
        { value: "25-45%", label: "Carbon Reduction" },
        { value: "100+", label: "Institutions Served" },
      ],
      benefits: [
        "Budget allocation optimization",
        "Educational research opportunities",
        "Campus modernization",
        "Community engagement",
      ],
    },
    {
      title: "Healthcare Facilities",
      description:
        "Reliable renewable energy systems for hospitals, clinics, and healthcare providers with backup power options.",
      icon: Building2,
      color: "bg-red-500/20",
      iconColor: "text-red-400",
      stats: [
        { value: "45%", label: "Energy Savings" },
        { value: "24/7", label: "Backup Support" },
        { value: "99.95%", label: "Reliability" },
      ],
      benefits: [
        "Critical power reliability",
        "Emergency backup systems",
        "Operational cost reduction",
        "Patient care continuity",
      ],
    },
    {
      title: "Retail & Hospitality",
      description:
        "Energy-efficient solutions for retail stores, hotels, and hospitality businesses to enhance profitability.",
      icon: Building2,
      color: "bg-cyan/20",
      iconColor: "text-cyan",
      stats: [
        { value: "35-40%", label: "Utility Savings" },
        { value: "9-11 yrs", label: "ROI Timeline" },
        { value: "500+", label: "Properties Served" },
      ],
      benefits: [
        "Improved guest experience",
        "Brand sustainability narrative",
        "Reduced operating expenses",
        "Peak demand management",
      ],
    },
    {
      title: "Government & Public Sector",
      description:
        "Comprehensive renewable energy solutions for government institutions, municipalities, and public facilities.",
      icon: Building2,
      color: "bg-cyan/20",
      iconColor: "text-cyan",
      stats: [
        { value: "55%+", label: "Cost Savings" },
        { value: "20 yrs", label: "Warranty" },
        { value: "50+", label: "Public Projects" },
      ],
      benefits: [
        "Budget transparency",
        "Carbon neutrality goals",
        "Citizen engagement",
        "Energy independence",
      ],
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-cyan text-sm uppercase tracking-widest mb-4 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Industry-Specific Solutions
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tailored Renewable Energy{" "}
              <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              for Every Industry
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed font-light max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From commercial offices to manufacturing plants, healthcare
              facilities to government institutions, we deliver customized
              renewable energy solutions that maximize efficiency and
              profitability across all sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Proven expertise across diverse sectors with customized solutions
              designed for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <motion.div
                    className={`w-14 h-14 ${industry.color} rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10 border-2 border-white`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className={`w-7 h-7 ${industry.iconColor}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                    {industry.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-gray-200 relative z-10">
                    {industry.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-cyan font-bold text-2xl">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-600 font-medium">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3 relative z-10">
                    {industry.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose AXIVOLT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-yellow-green-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose AXIVOLT
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Industry expertise and proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Industry Expertise",
                description:
                  "Deep knowledge of sector-specific regulations and requirements",
                number: "01",
              },
              {
                title: "Proven Track Record",
                description:
                  "Successful implementations across diverse industrial sectors",
                number: "02",
              },
              {
                title: "Custom Solutions",
                description:
                  "Tailored approaches designed for your unique operational needs",
                number: "03",
              },
              {
                title: "Long-term Support",
                description:
                  "Ongoing monitoring and optimization for maximum performance",
                number: "04",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0, 188, 212, 0.2)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                <motion.div
                  className="text-5xl font-bold text-cyan/20 mb-4 group-hover:text-cyan/40 transition-colors"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.number}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
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
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Industry
          </motion.h2>
          <motion.p
            className="text-xl text-background/95 mb-10 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's create a customized renewable energy solution for your
            organization
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Get Industry Assessment <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
