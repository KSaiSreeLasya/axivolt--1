import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Procurement() {
  const navigate = useNavigate();
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-cyan text-sm uppercase tracking-widest mb-4 font-semibold"
            >
              E-Procurement & Project Management Consulting
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 tracking-tight"
            >
              Strategic
              <br />
              <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                Procurement
              </span>
              <br />
              Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-700 leading-relaxed font-light max-w-2xl mx-auto mb-10"
            >
              Streamline your renewable energy projects with our comprehensive
              procurement and project management consulting services. From
              sourcing to quality assurance, we ensure optimal outcomes and
              timely delivery.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0, 188, 212, 0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all shadow-xl"
              >
                Start Your Project
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
                View Case Studies
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Procurement Process Section */}
      <section className="py-24 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Procurement Process
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              A systematic approach to manage quality, delivery, and
              cost-effectiveness in every project.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Project Assessment",
                  description:
                    "Comprehensive evaluation of your requirements and project specifications.",
                  color: "bg-blue-500",
                },
                {
                  step: 2,
                  title: "Vendor Selection",
                  description:
                    "Strategic sourcing and qualification of certified suppliers based on quality, reliability, and cost-effectiveness.",
                  color: "bg-green-500",
                },
                {
                  step: 3,
                  title: "Contract Management",
                  description:
                    "Expert negotiation and management of vendor agreements, ensuring favorable terms and compliance.",
                  color: "bg-purple-500",
                },
                {
                  step: 4,
                  title: "Quality Assurance",
                  description:
                    "Rigorous quality control and compliance monitoring throughout the procurement process.",
                  color: "bg-orange-500",
                },
                {
                  step: 5,
                  title: "Performance Optimization",
                  description:
                    "Continuous monitoring and optimization of procurement performance and vendor relationships.",
                  color: "bg-red-500",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`flex gap-8 items-start ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.div
                      className={`w-14 h-14 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-xl shadow-lg relative z-10`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.step}
                    </motion.div>
                    {idx < 4 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent mx-auto mt-2"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-yellow-green-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Comprehensive solutions tailored to your renewable energy project
              needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Vendor Procurement */}
            <motion.div
              className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 40px 80px rgba(0, 188, 212, 0.25)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-green-500/10 transition-colors"></div>
              <motion.div
                className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10 border-2 border-white"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Zap className="w-8 h-8 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                Vendor Procurement
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                Complete sourcing of solar panels, inverters, mounting systems
                and other critical equipment.
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Global Supplier Network
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Quality Certifications
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Warranty Management
                </li>
              </ul>
            </motion.div>

            {/* Plant Management Consulting */}
            <motion.div
              className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 40px 80px rgba(0, 188, 212, 0.25)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>
              <motion.div
                className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10 border-2 border-white"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Users className="w-8 h-8 text-blue-500" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                Plant Management Consulting
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                End-to-end project management services from initial assessment
                to final commissioning.
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Project Planning
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Risk Management
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Timeline Coordination
                </li>
              </ul>
            </motion.div>

            {/* Expert Advisory */}
            <motion.div
              className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 40px 80px rgba(0, 188, 212, 0.25)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-purple-500/10 transition-colors"></div>
              <motion.div
                className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10 border-2 border-white"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Shield className="w-8 h-8 text-purple-500" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                Expert Advisory
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                Expert technical guidance on equipment selection and
                implementation strategies.
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Technical Audits
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Performance Analysis
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />{" "}
                  Compliance Review
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-green via-yellow-green to-yellow-green/85 text-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/15 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/10 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Why Choose Our Procurement Services
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "30%", label: "Faster Delivery" },
              { value: "99.5%", label: "Quality Success" },
              { value: "15-25%", label: "Cost Savings" },
              { value: "100+", label: "Certified Partners" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -8 }}
                className="group"
              >
                <p className="text-5xl md:text-6xl font-bold mb-3 group-hover:text-white/95 transition-colors">
                  {stat.value}
                </p>
                <p className="text-lg font-medium text-background/90 group-hover:text-background transition-colors">
                  {stat.label}
                </p>
                <div className="h-1 w-0 group-hover:w-16 bg-white/60 transition-all duration-300 mx-auto mt-4 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-br from-white via-blue-50/40 to-white">
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
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          >
            Ready to Optimize Your Procurement?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 font-light mb-10 leading-relaxed"
          >
            Let our experts handle your project sourcing and management
          </motion.p>
          <motion.button
            onClick={() => navigate("/quote")}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 25px 50px rgba(0, 188, 212, 0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
