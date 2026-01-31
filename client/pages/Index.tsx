import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
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
import { motion } from "framer-motion";

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
    // Add Organization and LocalBusiness schema markup with ratings
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
          telephone: "+91 9063447838",
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
          name: "AXIVOLT Green Energy",
          image: `${baseUrl}/logo.png`,
          description:
            "Leading solar and renewable energy company in Hyderabad serving Telangana and Andhra Pradesh with 500+ completed projects",
          url: baseUrl,
          telephone: "+91 9063447838",
          email: "contact@axivolt.in",
          priceRange: "Varies",
          areaServed: ["Hyderabad", "Telangana", "Andhra Pradesh"],
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Plot No. 101, Miyoshi Residency, Sri Nagar Colony, Miyapur",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500049",
            addressCountry: "India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.9,
            reviewCount: 70,
            ratingCount: 70,
            bestRating: 5,
            worstRating: 1,
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
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-background/80 pt-20 md:pt-32 pb-16">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-green/10 rounded-full filter blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    <motion.span
                      className="text-cyan block"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      Sustainable
                    </motion.span>
                    <motion.span
                      className="text-gray-900 block"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      Future
                    </motion.span>
                  </h1>
                </motion.div>
              </div>

              <motion.p
                className="text-lg text-black leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Transform your energy consumption with cutting-edge solar
                solutions. Harness clean, renewable power for a sustainable
                tomorrow.
              </motion.p>

              {/* Stats Preview */}
              <motion.div
                className="flex gap-12 py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                  <p className="text-3xl font-bold text-cyan">500k</p>
                  <p className="text-sm text-black">tons CO₂ saved</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                  <p className="text-3xl font-bold text-yellow-green">350+</p>
                  <p className="text-sm text-black">projects worldwide</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
                  <p className="text-3xl font-bold text-cyan">Global</p>
                  <p className="text-sm text-black">presence</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.button
                  onClick={() => navigate("/quote")}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 188, 212, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => navigate("/solutions")}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 188, 212, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan text-cyan px-8 py-3 rounded-lg font-bold text-lg hover:bg-cyan/10 transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative h-96 md:h-full"
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-yellow-green/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              ></motion.div>
              <ImageCarousel
                images={[
                  "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F9d84a999e09b4e95b8bc2776c5f2ab23?format=webp&width=800&height=1200",
                  "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F492a443ea87943468a7b786dd05f5e59?format=webp&width=800&height=1200",
                  "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2Fac591aabec2946b5a62223139c02efe7?format=webp&width=800&height=1200",
                ]}
                alt="AXIVOLT Solar Projects"
                className="relative h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-black mb-12 text-sm uppercase tracking-widest"
          >
            From Rooftops to Utility-Scale Projects
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 188, 212, 0.15)" }}
              className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all"
            >
              <AnimatedCounter
                value={250}
                suffix="MW"
                className="text-3xl md:text-4xl font-bold text-cyan mb-2"
              />
              <p className="text-black text-sm">Total Capacity</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(205, 210, 40, 0.15)" }}
              className="bg-card rounded-xl p-8 border border-border hover:border-yellow-green/50 transition-all"
            >
              <AnimatedCounter
                value={500}
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-yellow-green mb-2"
              />
              <p className="text-black text-sm">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 188, 212, 0.15)" }}
              className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all"
            >
              <AnimatedCounter
                value={15}
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-cyan mb-2"
              />
              <p className="text-black text-sm">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(205, 210, 40, 0.15)" }}
              className="bg-card rounded-xl p-8 border border-border hover:border-yellow-green/50 transition-all"
            >
              <AnimatedCounter
                value={12}
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-yellow-green mb-2"
              />
              <p className="text-black text-sm">Countries Served</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center pt-12"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(205, 210, 40, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-green text-background px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Explore Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Green Energy Solutions
            </h2>
            <p className="text-black max-w-2xl mx-auto">
              End-to-end solar and renewable energy solutions tailored to your
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Orange Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(255, 153, 0, 0.2)" }}
              className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all group"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sun className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Rooftop Installations</h3>
              <p className="text-black mb-6">
                Professional solar panel installations with minimal disruption.
                Maximize your roof space efficiency.
              </p>
              <motion.a
                href="#"
                className="text-cyan text-sm font-medium hover:text-yellow-green transition-colors inline-flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                Explore More →
              </motion.a>
            </motion.div>

            {/* Service 2 - Blue Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)" }}
              className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all group"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Battery className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Energy Storage</h3>
              <p className="text-black mb-6">
                Advanced battery systems for round-the-clock power availability.
                Store solar energy efficiently.
              </p>
              <motion.a
                href="#"
                className="text-cyan text-sm font-medium hover:text-yellow-green transition-colors inline-flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                Explore More →
              </motion.a>
            </motion.div>

            {/* Service 3 - Green Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(34, 197, 94, 0.2)" }}
              className="bg-card rounded-xl p-8 border border-border hover:border-cyan/50 transition-all group"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Leaf className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Industrial Solutions</h3>
              <p className="text-black mb-6">
                Large-scale green energy projects for commercial and industrial
                operations.
              </p>
              <motion.a
                href="#"
                className="text-cyan text-sm font-medium hover:text-yellow-green transition-colors inline-flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                Explore More →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 bg-gradient-to-r from-yellow-green to-yellow-green/90 text-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
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
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Switch to Clean Energy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-background/90 mb-8"
          >
            Join thousands of businesses saving money while protecting the
            planet
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-background text-yellow-green px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              onClick={() => navigate("/solutions")}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-background text-background px-8 py-3 rounded-lg font-bold hover:bg-background/10 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <section id="process" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose AXIVOLT?
              </h2>

              <ul className="space-y-6 mb-8">
                {[
                  {
                    title: "Industry Leadership",
                    desc: "Pioneering sustainable energy solutions with proven track record",
                    color: "cyan",
                  },
                  {
                    title: "Advanced Technology",
                    desc: "Cutting-edge solar panels and smart energy management",
                    color: "yellow-green",
                  },
                  {
                    title: "Expert Support",
                    desc: "Dedicated team available 24/7 for all your energy needs",
                    color: "cyan",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className={`flex items-center justify-center h-8 w-8 rounded-full ${
                          item.color === "cyan"
                            ? "bg-cyan/20 text-cyan"
                            : "bg-yellow-green/20 text-yellow-green"
                        }`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-black text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={() => navigate("/solutions")}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 188, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2 shadow-lg"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "99.2%", label: "System Uptime", color: "cyan" },
                { value: "500+", label: "Happy Clients", color: "yellow-green" },
                { value: "10000", label: "MWh Generated", color: "cyan" },
                { value: "24/7", label: "Support Available", color: "yellow-green" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${
                    stat.color === "cyan"
                      ? "from-cyan/20 to-cyan/10"
                      : "from-yellow-green/20 to-yellow-green/10"
                  } rounded-xl p-6 border border-border`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px rgba(${
                      stat.color === "cyan" ? "0, 188, 212" : "205, 210, 40"
                    }, 0.2)`,
                  }}
                >
                  <p
                    className={`text-4xl font-bold ${
                      stat.color === "cyan" ? "text-cyan" : "text-yellow-green"
                    } mb-2`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-black text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-yellow-green to-yellow-green/90 text-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "System Uptime", value: "99.2%" },
              { label: "Active Installations", value: "500+" },
              { label: "MWh Generated", value: "10000" },
              { label: "Customer Support", value: "24/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-background/80 mt-2">{stat.label}</p>
              </motion.div>
            ))}
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
            <button
              onClick={() => navigate("/contact")}
              className="bg-background text-yellow-green px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
