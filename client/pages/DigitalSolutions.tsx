import Header from "@/components/Header";
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

export default function DigitalSolutions() {
  const [activeTab, setActiveTab] = useState("energy");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">
                Digital Energy Solutions
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart
                <br />
                <span className="text-cyan">Digital</span>
                <br />
                Platforms
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Transform your energy management with our cutting-edge digital
                solutions. From real-time monitoring to AI-powered optimization,
                unlock the potential of your renewable energy investments.
              </p>
              <div className="flex gap-4">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                  Try Demo
                </button>
                <button className="border-2 border-purple-600 text-purple-400 px-8 py-3 rounded-lg font-bold hover:bg-purple-600/10 transition-all">
                  View Features
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex gap-2 justify-center mb-4">
                    <div className="w-3 h-12 bg-purple-500 rounded"></div>
                    <div className="w-3 h-16 bg-purple-600 rounded"></div>
                    <div className="w-3 h-10 bg-purple-400 rounded"></div>
                    <div className="w-3 h-14 bg-purple-500 rounded"></div>
                    <div className="w-3 h-12 bg-purple-600 rounded"></div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Energy Dashboard</p>
                  <p className="text-cyan text-sm font-mono">View</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 p-4 rounded">
                    <p className="text-gray-500 text-xs">Power Generated</p>
                    <p className="text-cyan font-bold text-lg">99.9%</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded">
                    <p className="text-gray-500 text-xs">Efficiency</p>
                    <p className="text-cyan font-bold text-lg">98.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Digital Platforms Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Digital Platforms
            </h2>
            <p className="text-gray-400">
              Comprehensive digital solutions designed to optimize your energy
              operations.
            </p>
          </div>

          {/* Platform Tabs */}
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab("energy")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === "energy"
                  ? "bg-cyan text-background"
                  : "bg-card text-gray-400 border border-border hover:text-cyan"
              }`}
            >
              <Zap className="w-4 h-4 inline mr-2" /> Energy Management System
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === "mobile"
                  ? "bg-cyan text-background"
                  : "bg-card text-gray-400 border border-border hover:text-cyan"
              }`}
            >
              📱 Mobile Asset Tracker
            </button>
            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === "cloud"
                  ? "bg-cyan text-background"
                  : "bg-card text-gray-400 border border-border hover:text-cyan"
              }`}
            >
              <Cloud className="w-4 h-4 inline mr-2" /> Cloud Analytics Platform
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "energy" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">
                  Energy Management System
                </h3>
                <p className="text-gray-400 mb-6">
                  Real-time monitoring and control of your renewable energy
                  assets.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Real-time Monitoring</p>
                      <p className="text-gray-500 text-sm">
                        Track system performance 24/7
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Predictive Analytics</p>
                      <p className="text-gray-500 text-sm">
                        AI-powered performance insights
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Automated Control</p>
                      <p className="text-gray-500 text-sm">
                        Smart system optimization
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Performance Optimization</p>
                      <p className="text-gray-500 text-sm">
                        Maximize energy generation
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-600/10 rounded-lg p-12 flex items-center justify-center h-96">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 text-cyan"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" opacity="0.1" />
                    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m0 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.5 9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5m-7 0c.8 0 1.5-.7 1.5-1.5S9.8 8 9 8s-1.5.7-1.5 1.5.7 1.5 1.5 1.5m3.5 6c-2.3 0-4.3-1.5-5-3.6h10c-.7 2.1-2.7 3.6-5 3.6z" />
                  </svg>
                  <p className="text-gray-400">25.5 kW</p>
                  <p className="text-gray-500 text-sm">Current Output</p>
                  <p className="text-cyan text-sm font-mono mt-2">
                    98.5% Efficiency
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">
                  Mobile Asset Tracker
                </h3>
                <p className="text-gray-400 mb-6">
                  Monitor and manage your energy assets from anywhere with our
                  mobile application.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">On-the-go Monitoring</p>
                      <p className="text-gray-500 text-sm">
                        Access real-time data anywhere
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Alert Notifications</p>
                      <p className="text-gray-500 text-sm">
                        Instant system alerts and updates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Remote Control</p>
                      <p className="text-gray-500 text-sm">
                        Manage systems remotely
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-900/30 to-green-600/10 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-gray-400">Mobile Application</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "cloud" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">
                  Cloud Analytics Platform
                </h3>
                <p className="text-gray-400 mb-6">
                  Comprehensive data analytics and visualization for your energy
                  systems.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Advanced Analytics</p>
                      <p className="text-gray-500 text-sm">
                        Deep insights into performance data
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Custom Reporting</p>
                      <p className="text-gray-500 text-sm">
                        Generate tailored reports
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Data Visualization</p>
                      <p className="text-gray-500 text-sm">
                        Interactive dashboards
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-600/10 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 mx-auto mb-4 text-cyan" />
                  <p className="text-gray-400">Cloud Analytics</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Features
            </h2>
            <p className="text-gray-400">
              Cutting-edge technology powering the future of energy management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <feature.icon className="w-12 h-12 text-cyan mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Energy Management?
          </h2>
          <p className="text-lg text-background/90 mb-8">
            Start your digital transformation journey today
          </p>
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AXIVOLT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
