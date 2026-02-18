import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Cloud,
  Lock,
  GitBranch,
  Zap as WrenchIcon,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

export default function DigitalSolutions() {
  const [activeTab, setActiveTab] = useState("energy");

  useSEO({
    title:
      "Digital Energy Solutions | IoT Monitoring & Smart Energy Management",
    description:
      "Advanced digital solutions for energy management, real-time monitoring, and data analytics. Optimize your renewable energy systems.",
    keywords:
      "energy management software, IoT monitoring, smart energy, digital solutions, energy analytics",
    ogTitle: "Digital Energy Solutions - AXIVOLT",
    ogDescription:
      "Next-generation digital tools for energy monitoring and optimization.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/digital-solutions`,
  });

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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/15 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-purple-500 text-sm uppercase tracking-widest mb-4 font-semibold">
                  Digital Energy Solutions
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
                  Smart
                  <br />
                  <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                    Digital
                  </span>
                  <br />
                  Platforms
                </h1>
              </motion.div>
              <motion.p
                className="text-xl text-gray-700 leading-relaxed font-light max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transform your energy management with our cutting-edge digital
                solutions. From real-time monitoring to AI-powered optimization,
                unlock the potential of your renewable energy investments.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(168, 85, 247, 0.35)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all shadow-xl"
                >
                  Try Demo
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(168, 85, 247, 0.15)",
                    boxShadow: "0 15px 30px rgba(168, 85, 247, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-600/10 transition-all"
                >
                  View Features
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-3xl p-12 border border-purple-500/20 shadow-lg"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <motion.div
                    className="flex gap-2 justify-center mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {[12, 16, 10, 14, 12].map((h, idx) => (
                      <motion.div
                        key={idx}
                        className={`w-3 bg-purple-500 rounded`}
                        style={{ height: `${h * 4}px` }}
                        animate={{ scaleY: [1, 1.2, 1] }}
                        transition={{
                          duration: 1.5,
                          delay: idx * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </motion.div>
                  <p className="text-gray-700 text-sm mb-4">Energy Dashboard</p>
                  <p className="text-cyan text-sm font-mono font-bold">Live</p>
                </div>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="bg-white/50 backdrop-blur p-6 rounded-lg border border-cyan/20">
                    <p className="text-gray-600 text-xs font-medium uppercase mb-2">
                      Power Generated
                    </p>
                    <p className="text-cyan font-bold text-2xl">99.9%</p>
                  </div>
                  <div className="bg-white/50 backdrop-blur p-6 rounded-lg border border-cyan/20">
                    <p className="text-gray-600 text-xs font-medium uppercase mb-2">
                      Efficiency
                    </p>
                    <p className="text-cyan font-bold text-2xl">98.5%</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Digital Platforms Section */}
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
              Our Digital Platforms
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Comprehensive digital solutions designed to optimize your energy
              operations and maximize ROI.
            </p>
          </motion.div>

          {/* Platform Tabs */}
          <motion.div
            className="flex gap-4 justify-center mb-16 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { id: "energy", label: "Energy Management System", icon: Zap },
              { id: "mobile", label: "Mobile Asset Tracker", icon: null },
              { id: "cloud", label: "Cloud Analytics Platform", icon: Cloud },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan text-white shadow-lg"
                    : "bg-white text-gray-700 border border-cyan/20 hover:border-cyan/50 hover:text-cyan"
                }`}
              >
                {tab.icon && <tab.icon className="w-4 h-4 inline mr-2" />}
                {tab.id === "mobile" ? "📱 " : ""}
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          {activeTab === "energy" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Energy Management System
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Real-time monitoring and control of your renewable energy
                  assets with intelligent automation.
                </p>
                <ul className="space-y-5">
                  {[
                    {
                      title: "Real-time Monitoring",
                      desc: "Track system performance 24/7",
                    },
                    {
                      title: "Predictive Analytics",
                      desc: "AI-powered performance insights",
                    },
                    {
                      title: "Automated Control",
                      desc: "Smart system optimization",
                    },
                    {
                      title: "Performance Optimization",
                      desc: "Maximize energy generation",
                    },
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-700 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/10 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 mx-auto mb-4 text-cyan" />
                  <p className="text-gray-700">Energy Dashboard</p>
                  <p className="text-cyan text-sm font-mono font-bold mt-4">
                    Live Monitoring
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Mobile Asset Tracker
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Monitor and manage your energy assets from anywhere with our
                  powerful mobile application.
                </p>
                <ul className="space-y-5">
                  {[
                    {
                      title: "On-the-go Monitoring",
                      desc: "Access real-time data anywhere",
                    },
                    {
                      title: "Alert Notifications",
                      desc: "Instant system alerts and updates",
                    },
                    {
                      title: "Remote Control",
                      desc: "Manage systems remotely",
                    },
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-700 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-green-600/10 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-gray-700">Mobile Application</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "cloud" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Cloud Analytics Platform
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Comprehensive data analytics and visualization for your energy
                  systems with enterprise-grade insights.
                </p>
                <ul className="space-y-5">
                  {[
                    {
                      title: "Advanced Analytics",
                      desc: "Deep insights into performance data",
                    },
                    {
                      title: "Custom Reporting",
                      desc: "Generate tailored reports",
                    },
                    {
                      title: "Data Visualization",
                      desc: "Interactive dashboards",
                    },
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-700 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-600/10 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 mx-auto mb-4 text-cyan" />
                  <p className="text-gray-700">Cloud Analytics</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-white via-cyan-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Cutting-edge technology powering the future of energy management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: "AI-Powered Optimization",
                description:
                  "Machine learning algorithms continuously optimize energy production and consumption.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description:
                  "Comprehensive data visualization and analysis for performance monitoring.",
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description:
                  "Reliable cloud-based architecture ensuring reliability and global accessibility.",
              },
              {
                icon: Lock,
                title: "Advanced Security",
                description:
                  "Enterprise-grade security with end-to-end encryption and compliance standards.",
              },
              {
                icon: GitBranch,
                title: "API Integration",
                description:
                  "Seamless connectivity with sensors, smart meters, and IoT devices.",
              },
              {
                icon: WrenchIcon,
                title: "Predictive Maintenance",
                description:
                  "AI-driven maintenance scheduling to prevent downtime and optimize uptime.",
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={idx}
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
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconComponent className="w-14 h-14 text-cyan mb-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
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
            Ready to Transform Your Energy Management?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-background/95 mb-10 font-light leading-relaxed"
          >
            Start your digital transformation journey today with our intelligent
            energy solutions
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
