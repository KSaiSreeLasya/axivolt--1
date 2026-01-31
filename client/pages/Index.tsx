import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Zap,
  Leaf,
  TrendingUp,
  Sun,
  Battery,
  Gauge,
} from "lucide-react";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();
  useSEO({
    title:
      "AXIVOLT - Best Solar Company in Hyderabad, Telangana & Andhra Pradesh",
    description:
      "Leading solar energy company in Hyderabad and Telangana offering residential, commercial, and government solar panel installations. Expert renewable energy solutions with 15+ years experience. 500+ projects completed.",
    keywords:
      "solar company hyderabad, best solar companies in telangana, solar energy solutions andhra pradesh, residential solar panels hyderabad, commercial solar installation, solar panel installation telangana, renewable energy company, green energy solutions",
    ogTitle: "AXIVOLT - Solar Energy Solutions in Hyderabad & Telangana",
    ogDescription:
      "Transform your energy with AXIVOLT's solar solutions. 500+ projects, 250MW capacity, 15+ years of excellence in Hyderabad, Telangana, and Andhra Pradesh.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/`,
  });

  useEffect(() => {
    // Add Organization and LocalBusiness schema markup
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          name: "AXIVOLT",
          logo: `${baseUrl}/logo.png`,
          url: baseUrl,
          description:
            "Leading solar energy company offering comprehensive renewable energy solutions",
          telephone: "+91 90634 47838",
          email: "contact@axivolt.in",
          areaServed: [
            {
              "@type": "City",
              name: "Hyderabad",
            },
            {
              "@type": "AdministrativeArea",
              name: "Telangana",
            },
            {
              "@type": "AdministrativeArea",
              name: "Andhra Pradesh",
            },
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          name: "AXIVOLT - Solar Energy Solutions",
          image: `${baseUrl}/logo.png`,
          description:
            "Leading solar and renewable energy company in Hyderabad serving Telangana and Andhra Pradesh",
          url: baseUrl,
          telephone: "+91 90634 47838",
          email: "contact@axivolt.in",
          priceRange: "Varies",
          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "India",
          },
          sameAs: [
            "https://www.facebook.com/axivolt",
            "https://www.linkedin.com/company/axivolt",
            "https://www.instagram.com/axivolt",
          ],
        },
      ],
    };
    addSchemaMarkup(schema);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-20 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  <span className="text-cyan">Sustainable</span>
                  <br />
                  <span className="text-gray-900">Future</span>
                </h1>
              </div>

              <p className="text-lg text-black leading-relaxed max-w-xl">
                Transform your energy consumption with cutting-edge solar
                solutions. Harness clean, renewable power for a sustainable
                tomorrow.
              </p>

              {/* Stats Preview */}
              <div className="flex gap-12 py-8">
                <div>
                  <p className="text-3xl font-bold text-cyan">500k</p>
                  <p className="text-sm text-black">tons CO₂ saved</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-green">350+</p>
                  <p className="text-sm text-black">projects worldwide</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-cyan">Global</p>
                  <p className="text-sm text-black">presence</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => navigate("/quote")}
                  className="bg-cyan text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate("/solutions")}
                  className="border-2 border-cyan text-cyan px-8 py-3 rounded-lg font-bold text-lg hover:bg-cyan/10 transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-yellow-green/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-cyan/10 to-yellow-green/10 rounded-2xl p-8 h-full flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Building */}
                  <rect
                    x="100"
                    y="150"
                    width="200"
                    height="200"
                    rx="10"
                    fill="#1a3a4a"
                    stroke="#048286"
                    strokeWidth="2"
                  />

                  {/* Windows */}
                  {[0, 1, 2, 3].map((row) =>
                    [0, 1, 2, 3].map((col) => (
                      <rect
                        key={`${row}-${col}`}
                        x={115 + col * 45}
                        y={165 + row * 45}
                        width="30"
                        height="30"
                        rx="4"
                        fill="rgba(175, 227, 50, 0.2)"
                      />
                    )),
                  )}

                  {/* Solar Panels on Roof */}
                  <rect
                    x="120"
                    y="120"
                    width="160"
                    height="40"
                    rx="5"
                    fill="#047F86"
                    opacity="0.8"
                  />

                  {/* Panel Grid Lines */}
                  <line
                    x1="140"
                    y1="120"
                    x2="140"
                    y2="160"
                    stroke="#1a3a4a"
                    strokeWidth="1"
                  />
                  <line
                    x1="160"
                    y1="120"
                    x2="160"
                    y2="160"
                    stroke="#1a3a4a"
                    strokeWidth="1"
                  />
                  <line
                    x1="180"
                    y1="120"
                    x2="180"
                    y2="160"
                    stroke="#1a3a4a"
                    strokeWidth="1"
                  />
                  <line
                    x1="200"
                    y1="120"
                    x2="200"
                    y2="160"
                    stroke="#1a3a4a"
                    strokeWidth="1"
                  />
                  <line
                    x1="220"
                    y1="120"
                    x2="220"
                    y2="160"
                    stroke="#1a3a4a"
                    strokeWidth="1"
                  />
                  <line
                    x1="240"
                    y1="120"
                    x2="240"
                    y2="160"
                    stroke="#1a3a4a"
                    strokeWidth="1"
                  />

                  {/* Sun */}
                  <circle
                    cx="350"
                    cy="60"
                    r="30"
                    fill="#047F86"
                    opacity="0.9"
                  />
                  <line
                    x1="350"
                    y1="15"
                    x2="350"
                    y2="0"
                    stroke="#047F86"
                    strokeWidth="3"
                  />
                  <line
                    x1="350"
                    y1="105"
                    x2="350"
                    y2="120"
                    stroke="#047F86"
                    strokeWidth="3"
                  />
                  <line
                    x1="305"
                    y1="60"
                    x2="285"
                    y2="60"
                    stroke="#047F86"
                    strokeWidth="3"
                  />
                  <line
                    x1="395"
                    y1="60"
                    x2="415"
                    y2="60"
                    stroke="#047F86"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-black mb-12 text-sm uppercase tracking-widest">
            From Rooftops to Utility-Scale Projects
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-3xl md:text-4xl font-bold text-cyan mb-2">
                250MW
              </p>
              <p className="text-black text-sm">Total Capacity</p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-3xl md:text-4xl font-bold text-yellow-green mb-2">
                500+
              </p>
              <p className="text-black text-sm">Projects Completed</p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-3xl md:text-4xl font-bold text-cyan mb-2">
                15+
              </p>
              <p className="text-black text-sm">Years Experience</p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <p className="text-3xl md:text-4xl font-bold text-yellow-green mb-2">
                12+
              </p>
              <p className="text-black text-sm">Countries Served</p>
            </div>
          </div>

          <div className="flex justify-center pt-12">
            <button
              onClick={() => navigate("/contact")}
              className="bg-yellow-green text-background px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Explore Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Green Energy Solutions
            </h2>
            <p className="text-black max-w-2xl mx-auto">
              End-to-end solar and renewable energy solutions tailored to your
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Orange Icon */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rooftop Installations</h3>
              <p className="text-black mb-6">
                Professional solar panel installations with minimal disruption.
                Maximize your roof space efficiency.
              </p>
              <a
                href="#"
                className="text-cyan text-sm font-medium hover:text-yellow-green transition-colors"
              >
                Explore More →
              </a>
            </div>

            {/* Service 2 - Blue Icon */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Storage</h3>
              <p className="text-black mb-6">
                Advanced battery systems for round-the-clock power availability.
                Store solar energy efficiently.
              </p>
              <a
                href="#"
                className="text-cyan text-sm font-medium hover:text-yellow-green transition-colors"
              >
                Explore More →
              </a>
            </div>

            {/* Service 3 - Green Icon */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Industrial Solutions</h3>
              <p className="text-black mb-6">
                Large-scale green energy projects for commercial and industrial
                operations.
              </p>
              <a
                href="#"
                className="text-cyan text-sm font-medium hover:text-yellow-green transition-colors"
              >
                Explore More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-yellow-green text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Switch to Clean Energy?
          </h2>
          <p className="text-lg text-background/90 mb-8">
            Join thousands of businesses saving money while protecting the
            planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-background text-yellow-green px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => navigate("/solutions")}
              className="border-2 border-background text-background px-8 py-3 rounded-lg font-bold hover:bg-background/10 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="process" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose AXIVOLT?
              </h2>

              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan/20 text-cyan">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Industry Leadership</h4>
                    <p className="text-black text-sm mt-1">
                      Pioneering sustainable energy solutions with proven track
                      record
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-green/20 text-yellow-green">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Advanced Technology</h4>
                    <p className="text-black text-sm mt-1">
                      Cutting-edge solar panels and smart energy management
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan/20 text-cyan">
                      <Check className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Expert Support</h4>
                    <p className="text-black text-sm mt-1">
                      Dedicated team available 24/7 for all your energy needs
                    </p>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => navigate("/solutions")}
                className="bg-cyan text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-xl p-6 border border-border">
                <p className="text-4xl font-bold text-cyan mb-2">99.2%</p>
                <p className="text-black text-sm">System Uptime</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-green/20 to-yellow-green/10 rounded-xl p-6 border border-border">
                <p className="text-4xl font-bold text-yellow-green mb-2">
                  500+
                </p>
                <p className="text-black text-sm">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-cyan/20 to-cyan/10 rounded-xl p-6 border border-border">
                <p className="text-4xl font-bold text-cyan mb-2">10000</p>
                <p className="text-black text-sm">MWh Generated</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-green/20 to-yellow-green/10 rounded-xl p-6 border border-border">
                <p className="text-4xl font-bold text-yellow-green mb-2">
                  24/7
                </p>
                <p className="text-black text-sm">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Stats Bar */}
      <section className="py-12 bg-yellow-green text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">99.2%</p>
              <p className="text-sm text-background/80 mt-2">System Uptime</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">500+</p>
              <p className="text-sm text-background/80 mt-2">
                Active Installations
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">10000</p>
              <p className="text-sm text-background/80 mt-2">MWh Generated</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-sm text-background/80 mt-2">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming Energy Landscapes
            </h2>
            <p className="text-black max-w-2xl mx-auto">
              Explore our latest projects and see how we're making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  C&I Factory Solar Installation
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-black uppercase tracking-widest mb-2">
                      Capacity
                    </p>
                    <p className="text-2xl font-bold text-cyan">2.5 MWh</p>
                  </div>
                  <div>
                    <p className="text-sm text-black uppercase tracking-widest mb-2">
                      Expected Savings
                    </p>
                    <p className="text-2xl font-bold text-yellow-green">
                      $500k/year
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-black uppercase tracking-widest mb-2">
                      CO₂ Reduction
                    </p>
                    <p className="text-2xl font-bold text-cyan">
                      2000 tons/year
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-cyan text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
                View Case Study <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <path
                    d="M100 30 L150 70 L120 120 L80 120 L50 70 Z"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="relative text-center">
                <p className="text-6xl font-bold text-white mb-4">25%</p>
                <p className="text-white text-lg">Efficiency Gain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-yellow-green text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <div className="text-4xl font-bold mb-2">📞</div>
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-sm text-background/80">+91 90634 47838</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">📧</div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-sm text-background/80">contact@axivolt.in</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">🌐</div>
              <h3 className="font-bold text-lg mb-1">Online</h3>
              <p className="text-sm text-background/80">Schedule a Demo</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to go renewable?
            </h2>
            <p className="text-lg text-background/90 mb-8">
              Start your sustainable energy journey today
            </p>
            <button className="bg-background text-yellow-green px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
