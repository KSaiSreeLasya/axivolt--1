import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react";

export default function Advisory() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan text-sm uppercase tracking-widest mb-4">
              Advisory & Expert Management Consulting
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Energy <span className="text-cyan">Advisory</span>{" "}
              Services
            </h1>
            <p className="text-lg text-black400 max-w-2xl mx-auto">
              Maximize your renewable energy potential with our comprehensive
              advisory and asset management services, designed to optimize
              performance and ensure long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-black400">
              A systematic approach to renewable advisory and asset management
              that ensure optimal outcomes for your investment.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan text-background flex items-center justify-center font-bold text-lg mb-4">
                    1
                  </div>
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent"></div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">
                    Assessment & Analysis
                  </h3>
                  <p className="text-black400">
                    Comprehensive evaluation of your current energy
                    infrastructure and needs.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan text-background flex items-center justify-center font-bold text-lg mb-4">
                    2
                  </div>
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent"></div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border ml-auto">
                  <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
                  <p className="text-black400">
                    Development of customized renewable energy roadmap and
                    implementation strategy.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan text-background flex items-center justify-center font-bold text-lg mb-4">
                    3
                  </div>
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent"></div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">Financial Modeling</h3>
                  <p className="text-black400">
                    ROI analysis, financing options, and all-encompassing
                    financial frameworks.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan text-background flex items-center justify-center font-bold text-lg mb-4">
                    4
                  </div>
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent"></div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border ml-auto">
                  <h3 className="text-xl font-bold mb-2">
                    Implementation Management
                  </h3>
                  <p className="text-black400">
                    Expert oversight, timeline management, and quality assurance
                    throughout the project.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan text-background flex items-center justify-center font-bold text-lg mb-4">
                    5
                  </div>
                  <div className="w-1 h-20 bg-gradient-to-b from-cyan to-transparent"></div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">
                    Performance Monitoring
                  </h3>
                  <p className="text-black400">
                    Ongoing analysis and optimization of performance
                    post-installation.
                  </p>
                </div>
              </div>

              {/* Final Step */}
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cyan text-background flex items-center justify-center font-bold text-lg">
                    6
                  </div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border ml-auto">
                  <h3 className="text-xl font-bold mb-2">
                    Continuous Optimization
                  </h3>
                  <p className="text-black400">
                    Regular optimization and performance upgrades to maximize
                    long-term success.
                  </p>
                </div>
              </div>
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

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black400 text-sm">
          <p>&copy; 2024 AXIVOLT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
