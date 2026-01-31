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

export default function Advisory() {
  const navigate = useNavigate();

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
      <section className="py-20 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-black400">
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
                    className={`flex-1 bg-card rounded-lg p-6 border border-border hover:border-cyan/50 transition-all ${
                      item.align === "right" ? "ml-auto" : ""
                    }`}
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 188, 212, 0.15)" }}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-black400">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Energy Consulting */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Energy Consulting</h3>
              <p className="text-black400 mb-6">
                Strategic energy consulting services, technology solutions and
                implementation support.
              </p>
              <ul className="space-y-2 text-sm text-black400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Technology
                  Assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Energy
                  Efficiency Audit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Renewable
                  Solutions Design
                </li>
              </ul>
            </div>

            {/* Asset Management */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Asset Management</h3>
              <p className="text-black400 mb-6">
                Comprehensive tracking, analytics and monitoring tools to
                maximize your investments.
              </p>
              <ul className="space-y-2 text-sm text-black400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Real-time
                  Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Performance
                  Analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Maintenance
                  Scheduling
                </li>
              </ul>
            </div>

            {/* Financial Advisory */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Financial Advisory</h3>
              <p className="text-black400 mb-6">
                Expert financial guidance and investment analysis to optimize
                energy projects.
              </p>
              <ul className="space-y-2 text-sm text-black400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Financing
                  Solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> ROI Projections
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Risk Assessment
                </li>
              </ul>
            </div>

            {/* Risk Management */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-4">Risk Management</h3>
              <p className="text-black400 mb-6">
                Comprehensive risk mitigation strategies for energy asset
                portfolio management.
              </p>
              <ul className="space-y-2 text-sm text-black400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Risk Mitigation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Compliance
                  Assurance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Insurance
                  Guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Schedule Advisory Consultation
          </h2>
          <p className="text-lg text-background/90 mb-8">
            Get expert guidance on optimizing your energy strategy
          </p>
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
