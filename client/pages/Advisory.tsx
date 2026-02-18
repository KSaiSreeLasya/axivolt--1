import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

export default function Advisory() {
  const navigate = useNavigate();

  useSEO({
    title: "Energy Advisory Services | AXIVOLT Green Energy Consulting",
    description:
      "Expert energy advisory services for renewable energy transition. Get professional consultation on solar, wind, and energy storage solutions for your business.",
    keywords:
      "energy advisory, renewable energy consulting, solar consulting, energy transition, green energy strategy",
    ogTitle: "Energy Advisory Services - AXIVOLT",
    ogDescription:
      "Professional advisory services for renewable energy solutions and energy transition planning.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/advisory`,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/20 to-white pt-20 md:pt-32 pb-20">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-cyan text-sm uppercase tracking-widest mb-4"
            >
              Advisory & Expert Management Consulting
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Strategic Energy <span className="text-cyan">Advisory</span>{" "}
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-black400 max-w-2xl mx-auto"
            >
              Maximize your renewable energy potential with our comprehensive
              advisory and asset management services, designed to optimize
              performance and ensure long-term success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Process
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              A systematic approach to renewable advisory and asset management
              that ensure optimal outcomes for your investment.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Assessment & Analysis",
                  desc: "Comprehensive evaluation of your current energy infrastructure and needs.",
                  align: "left",
                },
                {
                  step: 2,
                  title: "Strategic Planning",
                  desc: "Development of customized renewable energy roadmap and implementation strategy.",
                  align: "right",
                },
                {
                  step: 3,
                  title: "Financial Modeling",
                  desc: "ROI analysis, financing options, and all-encompassing financial frameworks.",
                  align: "left",
                },
                {
                  step: 4,
                  title: "Implementation Management",
                  desc: "Expert oversight, timeline management, and quality assurance throughout the project.",
                  align: "right",
                },
                {
                  step: 5,
                  title: "Performance Monitoring",
                  desc: "Ongoing analysis and optimization of performance post-installation.",
                  align: "left",
                },
                {
                  step: 6,
                  title: "Continuous Optimization",
                  desc: "Regular optimization and performance upgrades to maximize long-term success.",
                  align: "right",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex gap-8 items-start ${
                    item.align === "right" ? "" : ""
                  }`}
                  initial={{ opacity: 0, x: item.align === "right" ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-cyan text-background flex items-center justify-center font-bold text-lg mb-4"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.step}
                    </motion.div>
                    {index < 5 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent"></div>
                    )}
                  </div>
                  <motion.div
                    className={`flex-1 bg-white rounded-xl p-8 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden ${
                      item.align === "right" ? "ml-auto" : ""
                    }`}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                    }}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 rounded-full -mr-12 -mt-12 group-hover:bg-cyan/10 transition-colors"></div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-yellow-green-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Comprehensive advisory services to maximize your renewable energy
              investments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                color: "bg-green-500/20",
                iconColor: "text-green-400",
                title: "Energy Consulting",
                desc: "Strategic energy consulting services, technology solutions and implementation support.",
                items: [
                  "Technology Assessment",
                  "Energy Efficiency Audit",
                  "Renewable Solutions Design",
                ],
              },
              {
                icon: TrendingUp,
                color: "bg-blue-500/20",
                iconColor: "text-blue-400",
                title: "Asset Management",
                desc: "Comprehensive tracking, analytics and monitoring tools to maximize your investments.",
                items: [
                  "Real-time Monitoring",
                  "Performance Analytics",
                  "Maintenance Scheduling",
                ],
              },
              {
                icon: BarChart3,
                color: "bg-purple-500/20",
                iconColor: "text-purple-400",
                title: "Financial Advisory",
                desc: "Expert financial guidance and investment analysis to optimize energy projects.",
                items: [
                  "Financing Solutions",
                  "ROI Projections",
                  "Risk Assessment",
                ],
              },
              {
                icon: CheckCircle,
                color: "bg-cyan/20",
                iconColor: "text-cyan",
                title: "Risk Management",
                desc: "Comprehensive risk mitigation strategies for energy asset portfolio management.",
                items: [
                  "Risk Mitigation",
                  "Compliance Assurance",
                  "Insurance Guidance",
                ],
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                    boxShadow: "0 40px 80px rgba(0, 188, 212, 0.25)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <motion.div
                    className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10 border-2 border-white`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconComponent className={`w-7 h-7 ${service.iconColor}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 relative z-10">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700 font-medium"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Schedule Advisory Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-background/95 mb-10 font-light leading-relaxed"
          >
            Get expert guidance on optimizing your energy strategy and
            maximizing your renewable investments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-background text-cyan px-12 py-5 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-xl inline-flex items-center justify-center gap-3"
            >
              Request Consultation <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => navigate("/quote")}
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 15px 40px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-background text-background px-12 py-5 rounded-xl font-bold hover:bg-background/10 transition-all"
            >
              Get a Quote
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
