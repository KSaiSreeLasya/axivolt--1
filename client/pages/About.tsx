import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const navigate = useNavigate();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [visionInView, setVisionInView] = useState(false);
  const [coreValuesInView, setCoreValuesInView] = useState(false);
  const [certificationsInView, setCertificationsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "vision-section") {
            setVisionInView(true);
          } else if (entry.target.id === "core-values-section") {
            setCoreValuesInView(true);
          } else if (entry.target.id === "certifications-section") {
            setCertificationsInView(true);
          }
        }
      },
      { threshold: 0.2 },
    );

    const visionElement = document.getElementById("vision-section");
    const coreValuesElement = document.getElementById("core-values-section");
    const certificationsElement = document.getElementById(
      "certifications-section",
    );

    if (visionElement) {
      observer.observe(visionElement);
    }
    if (coreValuesElement) {
      observer.observe(coreValuesElement);
    }
    if (certificationsElement) {
      observer.observe(certificationsElement);
    }

    return () => {
      if (visionElement) {
        observer.unobserve(visionElement);
      }
      if (coreValuesElement) {
        observer.unobserve(coreValuesElement);
      }
      if (certificationsElement) {
        observer.unobserve(certificationsElement);
      }
    };
  }, []);

  useSEO({
    title: "About AXIVOLT | Leading Solar Energy Company in India",
    description:
      "Learn about AXIVOLT - a pioneering renewable energy company with 15+ years of experience in solar solutions. 500+ projects, 250MW capacity.",
    keywords:
      "about solar company, renewable energy company, green energy provider, solar energy expertise",
    ogTitle: "About AXIVOLT - Renewable Energy Leaders",
    ogDescription:
      "Discover AXIVOLT's mission to transform energy through innovative solar solutions.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/about`,
  });

  useEffect(() => {
    // Add LocalBusiness schema and FAQ markup
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

    // LocalBusiness schema
    addSchemaMarkup(
      SchemaMarkup.localBusiness({
        name: "AXIVOLT Green Energy",
        description:
          "Leading solar energy company providing comprehensive renewable energy solutions. 500+ completed projects with 4.9-star rating.",
        url: baseUrl,
        phone: "+91 9063447838",
        image: `${baseUrl}/logo.png`,
        address: {
          streetAddress:
            "Plot No. 101, Miyoshi Residency, Sri Nagar Colony, Miyapur",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500049",
          addressCountry: "India",
        },
        sameAs: [
          "https://www.facebook.com/AxivoltGreenEnergy/",
          "https://www.linkedin.com/company/axivoltgreen/",
          "https://www.instagram.com/axivoltgreenenergy/",
        ],
      }),
    );

    // Add FAQ schema for solar installations
    const solarFaqs = [
      {
        question: "How much does a residential solar panel installation cost?",
        answer:
          "The cost of residential solar panel installations varies based on your system size, location, and roof type. Typical systems range from ₹2-5 lakhs for 3-5 kW systems. We provide free consultations and personalized quotes based on your energy needs. We also assist with government subsidies and financing options.",
      },
      {
        question: "What is the payback period for solar panels?",
        answer:
          "Most residential solar systems in India have a payback period of 5-7 years, depending on electricity consumption and system size. After the payback period, you enjoy 20+ years of minimal-cost electricity. With government incentives and net metering, the payback can be even faster.",
      },
      {
        question: "How long do solar panels last?",
        answer:
          "Quality solar panels typically last 25-30 years or more. Most manufacturers offer 25-year performance warranties. Our systems are designed for durability in various weather conditions with minimal maintenance required.",
      },
      {
        question: "Do solar panels work in cloudy weather or at night?",
        answer:
          "Solar panels produce electricity during daylight hours, even on cloudy days, though at reduced efficiency. They don't generate power at night. For 24/7 power supply, consider adding battery storage systems which we specialize in.",
      },
      {
        question: "What maintenance do solar panels require?",
        answer:
          "Solar panels require minimal maintenance - typically just occasional cleaning to remove dust and debris. We offer comprehensive O&M (operations and maintenance) packages to ensure optimal performance and longevity.",
      },
      {
        question:
          "Are there government subsidies available for solar installation?",
        answer:
          "Yes! India offers various subsidies and incentives including MNRE subsidies, tax benefits under Section 80, accelerated depreciation, and state-specific programs. Our advisory team helps you navigate and maximize available incentives.",
      },
      {
        question: "How much space do I need for a solar installation?",
        answer:
          "A typical 5 kW residential system requires about 250-300 sq ft of roof space (or ground area). We conduct site assessments to determine the optimal design for your available space and energy needs.",
      },
      {
        question:
          "What happens to my electricity bills after solar installation?",
        answer:
          "With grid-connected solar and net metering, you can sell excess electricity back to the grid and receive credits on your bill. Most users see 70-90% reduction in electricity bills, depending on system size and consumption.",
      },
      {
        question: "Can I use solar panels with my existing electrical system?",
        answer:
          "Yes! Our systems are designed to integrate seamlessly with your existing electrical setup. Grid-connected systems work alongside your regular connection, while off-grid systems operate independently.",
      },
      {
        question: "How do I monitor my solar system's performance?",
        answer:
          "All our systems come with real-time monitoring through mobile apps and web dashboards. You can track daily generation, consumption, savings, and system health from anywhere.",
      },
    ];

    // Create FAQ schema
    const faqSchema = SchemaMarkup.faq(solarFaqs);

    // Merge LocalBusiness and FAQ schemas
    const mergedSchema = {
      "@context": "https://schema.org",
      "@graph": [
        SchemaMarkup.localBusiness({
          name: "AXIVOLT Green Energy",
          description:
            "Leading solar energy company providing comprehensive renewable energy solutions. 500+ completed projects with 4.9-star rating.",
          url: baseUrl,
          phone: "+91 9063447838",
          image: `${baseUrl}/logo.png`,
          address: {
            streetAddress:
              "Plot No. 101, Miyoshi Residency, Sri Nagar Colony, Miyapur",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500049",
            addressCountry: "India",
          },
          sameAs: [
            "https://www.facebook.com/AxivoltGreenEnergy/",
            "https://www.linkedin.com/company/axivoltgreen/",
            "https://www.instagram.com/axivoltgreenenergy/",
          ],
        }),
        faqSchema,
      ],
    };

    addSchemaMarkup(mergedSchema);
  }, []);
  const coreValues = [
    {
      icon: Users,
      title: "Customer Satisfaction",
      description:
        "Putting clients first and ensuring exceptional service delivery at every step",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Maintaining the highest standards in engineering, reliability and performance",
    },
    {
      icon: Zap,
      title: "Integrity",
      description:
        "Operating with transparency, honesty, and ethical business practices in all operations",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Fostering cutting-edge technologies for the future of renewable energy",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Following collaboration and teamwork to achieve renewable energy goals",
    },
    {
      icon: Shield,
      title: "Safety",
      description:
        "Prioritizing safety and environmental protection in all our operations",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "Certified ISO",
      description:
        "ISO 9001 certified organization ensuring highest quality standards and operational excellence",
    },
    {
      icon: Target,
      title: "Startup India Recognized",
      description:
        "Recognized under Startup India for innovation and renewable energy solutions",
    },
    {
      icon: Zap,
      title: "In Collaboration with MNRE",
      description:
        "Working with the Ministry of New & Renewable Energy initiatives and programs",
    },
  ];

  const stats = [
    { value: "950+", label: "Projects Completed" },
    { value: "250MW", label: "Capacity Installed" },
    { value: "$50M+", label: "Investment Value" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-cyan text-sm uppercase tracking-widest mb-4 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Empowering Sustainable Tomorrow
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                    Mission
                  </span>
                </h1>
              </motion.div>
              <motion.p
                className="text-lg text-black400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                To accelerate the world's transition to renewable energy through
                innovative solutions, expert guidance, and unwavering commitment
                to excellence.
              </motion.p>
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  onClick={() => navigate("/solutions")}
                  className="bg-cyan text-background px-6 py-3 rounded-lg font-bold hover:bg-yellow-green transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setShowVideoModal(true)}
                  className="border border-cyan text-cyan px-6 py-3 rounded-lg font-bold hover:bg-cyan/10 transition-all"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0, 188, 212, 0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                </motion.button>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-cyan">
                      {stat.value}
                    </p>
                    <p className="text-sm text-black400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-yellow-green/20 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
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

      {/* Vision Section */}
      <section id="vision-section" className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-96 bg-gradient-to-br from-green-400/20 to-cyan/20 rounded-lg border border-border overflow-hidden order-2 lg:order-1 group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1466611653022-2f88e537e94f?w=600&h=400&fit=crop"
                alt="Wind energy"
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our <span className="text-cyan">Vision</span>
              </motion.h2>
              <motion.p
                className="text-lg text-black400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                To accelerate India's transition to clean energy by providing
                reliable, affordable, and high-driven renewable energy
                solutions.
              </motion.p>
              <ul className="space-y-4">
                {[
                  "Provide holistic clean energy solutions",
                  "Reduce carbon footprint across industries",
                  "Enable sustainable economic growth",
                  "Drive innovation in renewable technology",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3 text-black300"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        id="core-values-section"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-yellow-green-50/20 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              The principles that guide our mission and shape our commitment to
              sustainable energy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <motion.div
                    className="w-14 h-14 bg-cyan/20 rounded-xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-7 h-7 text-cyan" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section
        id="certifications-section"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Certifications & Affiliations
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              Recognitions and partnerships that validate our commitment to
              quality, innovation, and clean energy leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl text-center group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <motion.div
                    className="w-16 h-16 bg-cyan/20 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg relative z-10"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-8 h-8 text-cyan" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-cyan relative z-10">
                    {cert.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-green/10 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-card rounded-lg border border-cyan/30 p-12 text-center group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "rgba(0, 188, 212, 0.5)" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/15 transition-colors"></div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Leading the Transition to Sustainable Energy
            </motion.h2>
            <motion.p
              className="text-lg text-black400 max-w-3xl mx-auto mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              AXIVOLT Green Energies Pvt. Ltd. is committed to delivering
              innovative renewable energy solutions that empower businesses and
              individuals to achieve their sustainability goals while reducing
              costs and environmental impact.
            </motion.p>
            <motion.button
              onClick={() => navigate("/contact")}
              className="bg-cyan text-background px-8 py-3 rounded-lg font-bold hover:bg-yellow-green transition-all inline-flex items-center gap-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
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
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Partner With Us for a Sustainable Future
          </motion.h2>
          <motion.p
            className="text-xl text-background/95 mb-10 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's work together to accelerate the renewable energy revolution
          </motion.p>
          <motion.button
            onClick={() => navigate("/quote")}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl bg-background rounded-lg overflow-hidden aspect-video">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-cyan hover:bg-yellow-green text-background rounded-full p-2 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src="https://cdn.builder.io/o/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F4078f8329e7446b590f1b988d0ecccdc?alt=media&token=c2125ecf-c59f-4603-acad-02ea4b505e3e&apiKey=125c7cd6968a435da0ace6ef2edbf6b7"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
