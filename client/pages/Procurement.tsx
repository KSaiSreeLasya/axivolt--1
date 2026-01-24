import Header from "@/components/Header";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function Procurement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan text-sm uppercase tracking-widest mb-4">
              E-Procurement & Project Management Consulting
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic
              <br />
              <span className="text-cyan">Procurement</span>
              <br />
              Solutions
            </h1>
            <p className="text-lg text-black400 max-w-2xl mx-auto">
              Streamline your renewable energy projects with our comprehensive
              procurement and project management consulting services. From
              sourcing to quality assurance, we ensure optimal outcomes and
              timely delivery.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <button className="bg-cyan text-background px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                Start Your Project
              </button>
              <button className="border-2 border-cyan text-cyan px-8 py-3 rounded-lg font-bold hover:bg-cyan/10 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Procurement Process Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Procurement Process
            </h2>
            <p className="text-black400">
              A systematic approach to manage quality, delivery, and
              cost-effectiveness in every project.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-8 items-center">
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">Project Assessment</h3>
                  <p className="text-black400 text-sm">
                    Comprehensive evaluation of your requirements and project
                    specifications.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">Vendor Selection</h3>
                  <p className="text-black400 text-sm">
                    Strategic sourcing and qualification of certified suppliers
                    based on quality, reliability, and cost-effectiveness.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-8 items-center">
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">
                    Contract Management
                  </h3>
                  <p className="text-black400 text-sm">
                    Expert negotiation and management of vendor agreements,
                    ensuring favorable terms and compliance.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                  <p className="text-black400 text-sm">
                    Rigorous quality control and compliance monitoring
                    throughout the procurement process.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-8 items-center">
                <div className="flex-1 bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-2">
                    Performance Optimization
                  </h3>
                  <p className="text-black400 text-sm">
                    Continuous monitoring and optimization of procurement
                    performance and vendor relationships.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-black400">
              Comprehensive solutions tailored to your renewable energy project
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vendor Procurement */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Vendor Procurement</h3>
              <p className="text-black400 mb-6">
                Complete sourcing of solar panels, inverters, mounting systems
                and other critical equipment.
              </p>
              <ul className="space-y-2 text-sm text-black400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Global Supplier
                  Network
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Quality
                  Certifications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Warranty
                  Management
                </li>
              </ul>
            </div>

            {/* Plant Management Consulting */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Plant Management Consulting
              </h3>
              <p className="text-black400 mb-6">
                End-to-end project management services from initial assessment
                to final commissioning.
              </p>
              <ul className="space-y-2 text-sm text-black400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Project Planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Risk Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Timeline
                  Coordination
                </li>
              </ul>
            </div>

            {/* Expert Advisory */}
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Advisory</h3>
              <p className="text-black400 mb-6">
                Expert technical guidance on equipment selection and
                implementation strategies.
              </p>
              <ul className="space-y-2 text-sm text-black400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Technical Audits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Performance
                  Analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan" /> Compliance
                  Review
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-yellow-green text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Our Procurement Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">30%</p>
              <p className="text-sm font-medium">Faster Delivery</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">99.5%</p>
              <p className="text-sm font-medium">Quality Success</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15-25%</p>
              <p className="text-sm font-medium">Cost Savings</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100</p>
              <p className="text-sm font-medium">Certified Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Procurement?
          </h2>
          <p className="text-lg text-black400 mb-8">
            Let our experts handle your project sourcing and management
          </p>
          <button className="bg-cyan text-background px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
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
