import Header from "@/components/Header";
import { ArrowRight, Check, Zap, Leaf, TrendingUp } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-blue via-navy-blue to-cyan/10 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Clean Energy Solutions for Your Future
              </h2>
              <p className="text-lg text-gray-100">
                Harness the power of solar energy with AXIVOLT. We deliver comprehensive solar solutions tailored to your residential, commercial, and industrial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-yellow-green text-navy-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative h-80 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-yellow-green/20 rounded-3xl"></div>
              <svg
                className="w-full h-full max-w-md"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Solar Panel */}
                <rect x="50" y="80" width="200" height="140" rx="10" stroke="currentColor" strokeWidth="2" className="text-yellow-green" />
                <line x1="50" y1="120" x2="250" y2="120" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                <line x1="50" y1="160" x2="250" y2="160" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                <line x1="100" y1="80" x2="100" y2="220" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                <line x1="150" y1="80" x2="150" y2="220" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                <line x1="200" y1="80" x2="200" y2="220" stroke="currentColor" strokeWidth="1" className="text-white/20" />

                {/* Sun rays */}
                <circle cx="150" cy="40" r="15" fill="currentColor" className="text-yellow-green" />
                <line x1="150" y1="10" x2="150" y2="25" stroke="currentColor" strokeWidth="2" className="text-yellow-green" />
                <line x1="150" y1="55" x2="150" y2="70" stroke="currentColor" strokeWidth="2" className="text-yellow-green" />
                <line x1="120" y1="40" x2="105" y2="40" stroke="currentColor" strokeWidth="2" className="text-yellow-green" />
                <line x1="180" y1="40" x2="195" y2="40" stroke="currentColor" strokeWidth="2" className="text-yellow-green" />

                {/* Base */}
                <rect x="80" y="220" width="140" height="50" rx="5" fill="currentColor" className="text-cyan/30" />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-green/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Solar Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar energy solutions designed for residential, commercial, and industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">
                Rooftop Installations
              </h3>
              <p className="text-gray-600 mb-4">
                Professional rooftop solar panel installations maximizing your available space for optimal energy generation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Professional installation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Minimal disruption
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Long-lasting warranty
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-yellow-green/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-yellow-green" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">
                Energy Storage Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced battery storage systems to store your solar energy and ensure 24/7 power availability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Advanced technology
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> 24/7 power supply
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Battery monitoring
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">
                Commercial & Industrial
              </h3>
              <p className="text-gray-600 mb-4">
                Large-scale solar energy solutions tailored for businesses and industrial operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Custom design
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Cost efficiency
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-cyan" /> Scalable solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach ensuring your solar journey is simple, transparent, and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-yellow-green to-cyan"></div>

            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-cyan text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-navy-blue text-center mb-3">
                Site Assessment
              </h3>
              <p className="text-gray-600 text-center">
                We evaluate your property's solar potential, considering roof structure, shading, and energy consumption.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-yellow-green text-navy-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-navy-blue text-center mb-3">
                Custom Design
              </h3>
              <p className="text-gray-600 text-center">
                Our experts create a tailor-made solar solution maximizing efficiency and meeting your specific requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-cyan text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-navy-blue text-center mb-3">
                Proposal
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive proposal with system design, energy savings projections, and financial benefits.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10">
              <div className="bg-yellow-green text-navy-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-navy-blue text-center mb-3">
                Installation
              </h3>
              <p className="text-gray-600 text-center">
                Professional installation with minimal disruption. Safety and quality workmanship guaranteed.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative z-10">
              <div className="bg-cyan text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="text-lg font-bold text-navy-blue text-center mb-3">
                Activation
              </h3>
              <p className="text-gray-600 text-center">
                System testing, inspections, and activation. Real-time monitoring tools for performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-8">
                Why Choose AXIVOLT?
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">
                      End-to-End Service
                    </h4>
                    <p className="text-gray-600">
                      From consultation to installation, we handle permits, paperwork, and inspections for a stress-free experience.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">
                      Sustainable Future
                    </h4>
                    <p className="text-gray-600">
                      Reduce your carbon footprint while saving money on energy bills year after year.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">
                      Client-First Approach
                    </h4>
                    <p className="text-gray-600">
                      Our dedicated team is always available to answer questions and ensure your satisfaction at every step.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-blue mb-2">
                      Ongoing Support
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive maintenance, monitoring, and after-sales service for optimal long-term performance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan/10 to-yellow-green/10 rounded-3xl p-8 md:p-12">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-5xl md:text-6xl font-bold text-cyan mb-2">
                      1000+
                    </p>
                    <p className="text-gray-600">Successful Installations</p>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <p className="text-5xl md:text-6xl font-bold text-yellow-green mb-2">
                      15+
                    </p>
                    <p className="text-gray-600">Years of Experience</p>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <p className="text-5xl md:text-6xl font-bold text-navy-blue mb-2">
                      98%
                    </p>
                    <p className="text-gray-600">Customer Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-r from-navy-blue to-cyan text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Take the first step towards clean energy and sustainable savings. Get your free consultation today.
          </p>
          <button className="bg-yellow-green text-navy-blue px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-yellow-green">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-green">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Residential</a></li>
                <li><a href="#" className="hover:text-white transition">Commercial</a></li>
                <li><a href="#" className="hover:text-white transition">Industrial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-green">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-green">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">&copy; 2024 AXIVOLT. All rights reserved.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856.973v1.237h-.022A6 6 0 0023 9.5c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6s2.686-6 6-6h.037c2.12 0 4.015.758 5.527 2v.48a5.98 5.98 0 00-.866-3.15 4 4 0 01-5.661-.822z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
