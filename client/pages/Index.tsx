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
    title: "Axivolt | Best Solar Company in Hyderabad for Homes & Businesses",
    description:
      "Axivolt provides trusted solar panel installation and renewable energy solutions for residential, commercial, and industrial needs in Hyderabad.",
    keywords:
      "solar company hyderabad, best solar companies in telangana, solar energy solutions andhra pradesh, residential solar panels hyderabad, commercial solar installation, solar panel installation telangana, renewable energy company, green energy solutions",
    ogTitle: "Axivolt | Best Solar Company in Hyderabad for Homes & Businesses",
    ogDescription:
      "Axivolt provides trusted solar panel installation and renewable energy solutions for residential, commercial, and industrial needs in Hyderabad.",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-cyan/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-yellow-green/15 rounded-full filter blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 lg:space-y-10"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 tracking-tight">
                    <motion.span
                      className="text-cyan block bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      Sustainable
                    </motion.span>
                    <motion.span
                      className="text-gray-900 block font-extrabold"
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
                className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl font-light"
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
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-8 md:py-12 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="group"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan mb-2 group-hover:text-cyan/80 transition-colors">
                    500k
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    tons CO₂ saved
                  </p>
                  <div className="h-1 w-0 group-hover:w-8 sm:group-hover:w-12 bg-cyan transition-all duration-300 mt-2 md:mt-3 rounded-full"></div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="group"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-green mb-2 group-hover:text-yellow-green/80 transition-colors">
                    350+
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    projects worldwide
                  </p>
                  <div className="h-1 w-0 group-hover:w-8 sm:group-hover:w-12 bg-yellow-green transition-all duration-300 mt-2 md:mt-3 rounded-full"></div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="group"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan mb-2 group-hover:text-cyan/80 transition-colors">
                    Global
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    presence
                  </p>
                  <div className="h-1 w-0 group-hover:w-8 sm:group-hover:w-12 bg-cyan transition-all duration-300 mt-2 md:mt-3 rounded-full"></div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-8 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.button
                  onClick={() => navigate("/quote")}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(0, 188, 212, 0.35)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base lg:text-lg hover:bg-cyan/90 transition-all flex items-center justify-center gap-2 md:gap-3 shadow-xl w-full sm:w-auto"
                >
                  Get Started <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </motion.button>
                <motion.button
                  onClick={() => navigate("/solutions")}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 188, 212, 0.15)",
                    boxShadow: "0 15px 30px rgba(0, 188, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-cyan text-cyan px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base lg:text-lg hover:bg-cyan/10 transition-all w-full sm:w-auto"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 lg:h-full"
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
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-cyan-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-black mb-8 md:mb-12 text-xs sm:text-sm uppercase tracking-widest"
          >
            From Rooftops to Utility-Scale Projects
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 30px 60px rgba(0, 188, 212, 0.25)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group"
            >
              <div className="relative">
                <AnimatedCounter
                  value={250}
                  suffix="MW"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent mb-2 md:mb-3"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-base font-medium group-hover:text-gray-900 transition-colors">
                Total Capacity
              </p>
              <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-cyan/5 rounded-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-cyan/10 transition-colors"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 30px 60px rgba(205, 210, 40, 0.25)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-yellow-green/20 hover:border-yellow-green/50 transition-all shadow-lg hover:shadow-2xl group"
            >
              <div className="relative">
                <AnimatedCounter
                  value={500}
                  suffix="+"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-green to-yellow-green/80 bg-clip-text text-transparent mb-2 md:mb-3"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-base font-medium group-hover:text-gray-900 transition-colors">
                Projects Completed
              </p>
              <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-yellow-green/5 rounded-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-yellow-green/10 transition-colors"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 30px 60px rgba(0, 188, 212, 0.25)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group"
            >
              <div className="relative">
                <AnimatedCounter
                  value={15}
                  suffix="+"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent mb-2 md:mb-3"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-base font-medium group-hover:text-gray-900 transition-colors">
                Years Experience
              </p>
              <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-cyan/5 rounded-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-cyan/10 transition-colors"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 30px 60px rgba(205, 210, 40, 0.25)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-yellow-green/20 hover:border-yellow-green/50 transition-all shadow-lg hover:shadow-2xl group"
            >
              <div className="relative">
                <AnimatedCounter
                  value={12}
                  suffix="+"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-green to-yellow-green/80 bg-clip-text text-transparent mb-2 md:mb-3"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-base font-medium group-hover:text-gray-900 transition-colors">
                Countries Served
              </p>
              <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-yellow-green/5 rounded-full -mr-8 md:-mr-10 -mt-8 md:-mt-10 group-hover:bg-yellow-green/10 transition-colors"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center pt-8 md:pt-12"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(205, 210, 40, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-green text-background px-6 sm:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-opacity-90 transition-all shadow-lg"
            >
              Explore Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-yellow-green-50/20 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-14 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Comprehensive Green Energy Solutions
            </h2>
            <p className="text-black max-w-2xl mx-auto text-sm md:text-base">
              End-to-end solar and renewable energy solutions tailored to your
              needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Service 1 - Orange Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                boxShadow: "0 40px 80px rgba(255, 153, 0, 0.25)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-orange-200/50 hover:border-orange-300 transition-all group shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-orange-500/5 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:bg-orange-500/10 transition-colors"></div>
              <motion.div
                className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 lg:mb-8 shadow-lg relative z-10"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sun className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 text-gray-900">
                Rooftop Installations
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                Professional solar panel installations with minimal disruption.
                Maximize your roof space efficiency.
              </p>
              <motion.a
                href="#"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors inline-flex items-center gap-2 group/link"
                whileHover={{ x: 5 }}
              >
                Explore More{" "}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Service 2 - Blue Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                boxShadow: "0 40px 80px rgba(59, 130, 246, 0.25)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-blue-200/50 hover:border-blue-300 transition-all group shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-blue-500/5 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:bg-blue-500/10 transition-colors"></div>
              <motion.div
                className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 lg:mb-8 shadow-lg relative z-10"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Battery className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 text-gray-900">
                Energy Storage
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                Advanced battery systems for round-the-clock power availability.
                Store solar energy efficiently.
              </p>
              <motion.a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-2 group/link"
                whileHover={{ x: 5 }}
              >
                Explore More{" "}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Service 3 - Green Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                boxShadow: "0 40px 80px rgba(34, 197, 94, 0.25)",
              }}
              className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-green-200/50 hover:border-green-300 transition-all group shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-green-500/5 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 group-hover:bg-green-500/10 transition-colors"></div>
              <motion.div
                className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 lg:mb-8 shadow-lg relative z-10"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Leaf className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 text-gray-900">
                Industrial Solutions
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                Large-scale green energy projects for commercial and industrial
                operations.
              </p>
              <motion.a
                href="#"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center gap-2 group/link"
                whileHover={{ x: 5 }}
              >
                Explore More{" "}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-yellow-green via-yellow-green to-yellow-green/85 text-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-white/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full filter blur-3xl"></div>
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight"
          >
            Ready to Switch to Clean Energy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg lg:text-xl text-background/95 mb-6 md:mb-8 lg:mb-10 font-light leading-relaxed"
          >
            Join thousands of businesses saving money while protecting the
            planet
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
          >
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-yellow-green px-6 sm:px-8 md:px-12 py-3 md:py-4 lg:py-5 rounded-xl font-bold text-sm md:text-base lg:text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              onClick={() => navigate("/solutions")}
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 15px 40px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 sm:px-8 md:px-12 py-3 md:py-4 lg:py-5 rounded-xl font-bold text-sm md:text-base lg:text-lg hover:bg-white/10 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <section
        id="process"
        className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-cyan-50/40 via-white to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-10 leading-tight text-gray-900">
                Why Choose AXIVOLT?
              </h2>

              <ul className="space-y-4 md:space-y-6 lg:space-y-8 mb-8 md:mb-10 lg:mb-12">
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
                    className="flex gap-3 md:gap-4 lg:gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        className={`flex items-center justify-center h-10 md:h-12 w-10 md:w-12 rounded-full font-bold text-white ${
                          item.color === "cyan"
                            ? "bg-gradient-to-br from-cyan to-cyan/80 shadow-lg"
                            : "bg-gradient-to-br from-yellow-green to-yellow-green/80 shadow-lg"
                        }`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Check className="w-5 md:w-6 h-5 md:h-6" />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg lg:text-xl text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 text-sm md:text-base mt-1 md:mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={() => navigate("/solutions")}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(0, 188, 212, 0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base lg:text-lg hover:bg-cyan/90 transition-all inline-flex items-center gap-2 md:gap-3 shadow-xl"
              >
                Learn More <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {[
                { value: "99.2%", label: "System Uptime", color: "cyan" },
                {
                  value: "500+",
                  label: "Happy Clients",
                  color: "yellow-green",
                },
                { value: "10000", label: "MWh Generated", color: "cyan" },
                {
                  value: "24/7",
                  label: "Support Available",
                  color: "yellow-green",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br rounded-2xl p-4 md:p-6 lg:p-8 border-2 shadow-lg hover:shadow-2xl transition-all ${
                    stat.color === "cyan"
                      ? "from-cyan/15 to-cyan/5 border-cyan/30 hover:border-cyan/60"
                      : "from-yellow-green/15 to-yellow-green/5 border-yellow-green/30 hover:border-yellow-green/60"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                    boxShadow: `0 30px 60px rgba(${
                      stat.color === "cyan" ? "0, 188, 212" : "205, 210, 40"
                    }, 0.3)`,
                  }}
                >
                  <p
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                      stat.color === "cyan" ? "text-cyan" : "text-yellow-green"
                    } mb-2 md:mb-3`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Stats Bar */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-yellow-green via-yellow-green to-yellow-green/85 text-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white/15 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 left-1/4 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 text-center">
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
                whileHover={{ scale: 1.12, y: -5 }}
                className="group"
              >
                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 group-hover:text-white/95 transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-background/90 font-medium group-hover:text-background transition-colors">
                  {stat.label}
                </p>
                <div className="h-1 w-0 group-hover:w-8 md:group-hover:w-12 lg:group-hover:w-16 bg-white/60 transition-all duration-300 mx-auto mt-2 md:mt-4 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 text-gray-900">
              Transforming Energy Landscapes
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
              Explore our latest projects and see how we're making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                  C&I Factory Solar Installation
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Capacity", value: "2.5 MWh", color: "text-cyan" },
                    {
                      label: "Expected Savings",
                      value: "$500k/year",
                      color: "text-yellow-green",
                    },
                    {
                      label: "CO₂ Reduction",
                      value: "2000 tons/year",
                      color: "text-cyan",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                      viewport={{ once: true }}
                      className="pb-6 border-b border-gray-200 last:border-b-0"
                    >
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-3 font-semibold">
                        {item.label}
                      </p>
                      <p
                        className={`text-3xl md:text-4xl font-bold ${item.color}`}
                      >
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(0, 188, 212, 0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan/90 transition-all inline-flex items-center gap-3 shadow-xl"
              >
                View Case Study <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl h-96 flex items-center justify-center relative overflow-hidden shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg"
                alt="A technician in safety gear installs a solar panel on a rooftop, promoting renewable energy"
                className="w-full h-full object-cover rounded-2xl hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-br from-yellow-green via-yellow-green to-yellow-green/85 text-background relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/15 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center mb-20"
          >
            {[
              { icon: "📞", title: "Call Us", text: "+91 90634 47838" },
              { icon: "📧", title: "Email", text: "contact@axivolt.in" },
              { icon: "🌐", title: "Online", text: "Schedule a Demo" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="group"
              >
                <motion.div
                  className="text-6xl font-bold mb-4 group-hover:scale-125 transition-transform"
                  whileHover={{ scale: 1.3, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {contact.icon}
                </motion.div>
                <h3 className="font-bold text-2xl mb-2 text-white">
                  {contact.title}
                </h3>
                <p className="text-lg text-background/90">{contact.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white"
            >
              Ready to go renewable?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-background/95 mb-10 font-light"
            >
              Start your sustainable energy journey today
            </motion.p>
            <motion.button
              onClick={() => navigate("/contact")}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-yellow-green px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
