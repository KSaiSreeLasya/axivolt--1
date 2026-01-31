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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan text-sm uppercase tracking-widest mb-4">
                Empowering Sustainable Tomorrow
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-cyan">Mission</span>
              </h1>
              <p className="text-lg text-black400 mb-8">
                To accelerate the world's transition to renewable energy through
                innovative solutions, expert guidance, and unwavering commitment
                to excellence.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/solutions")}
                  className="bg-cyan text-background px-6 py-3 rounded-lg font-bold hover:bg-yellow-green transition-all inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="border border-cyan text-cyan px-6 py-3 rounded-lg font-bold hover:bg-cyan/10 transition-all"
                >
                  Our Story
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl md:text-3xl font-bold text-cyan">
                      {stat.value}
                    </p>
                    <p className="text-sm text-black400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-yellow-green/20 rounded-3xl blur-2xl"></div>
              <ImageCarousel
                images={[
                  "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F9d84a999e09b4e95b8bc2776c5f2ab23?format=webp&width=800&height=1200",
                  "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2F492a443ea87943468a7b786dd05f5e59?format=webp&width=800&height=1200",
                  "https://cdn.builder.io/api/v1/image/assets%2F125c7cd6968a435da0ace6ef2edbf6b7%2Fac591aabec2946b5a62223139c02efe7?format=webp&width=800&height=1200",
                ]}
                alt="AXIVOLT Solar Projects"
                className="relative h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision-section"
        className={`py-20 bg-background/50 transition-all duration-1000 ${
          visionInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-green-400/20 to-cyan/20 rounded-lg border border-border overflow-hidden order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1466611653022-2f88e537e94f?w=600&h=400&fit=crop"
                alt="Wind energy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-cyan">Vision</span>
              </h2>
              <p className="text-lg text-black400 mb-6">
                To accelerate India's transition to clean energy by providing
                reliable, affordable, and high-driven renewable energy
                solutions.
              </p>
              <ul className="space-y-4">
                {[
                  "Provide holistic clean energy solutions",
                  "Reduce carbon footprint across industries",
                  "Enable sustainable economic growth",
                  "Drive innovation in renewable technology",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-black300"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        id="core-values-section"
        className={`py-20 bg-background transition-all duration-1000 ${
          coreValuesInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-cyan">Core Values</span>
            </h2>
            <p className="text-black400 max-w-2xl mx-auto">
              The principles that guide our mission and shape our commitment to
              sustainable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-8 border border-border hover:border-cyan transition-all"
                >
                  <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-black400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section
        id="certifications-section"
        className={`py-20 bg-background/50 transition-all duration-1000 ${
          certificationsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Affiliations
            </h2>
            <p className="text-black400 max-w-2xl mx-auto">
              Recognitions and partnerships that validate our commitment to
              quality, innovation, and clean energy leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-8 border border-border hover:border-cyan transition-all text-center"
                >
                  <div className="w-16 h-16 bg-cyan/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyan">
                    {cert.title}
                  </h3>
                  <p className="text-black400">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg border border-border p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Leading the Transition to Sustainable Energy
            </h2>
            <p className="text-lg text-black400 max-w-3xl mx-auto mb-8">
              AXIVOLT Green Energies Pvt. Ltd. is committed to delivering
              innovative renewable energy solutions that empower businesses and
              individuals to achieve their sustainability goals while reducing
              costs and environmental impact.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-cyan text-background px-8 py-3 rounded-lg font-bold hover:bg-yellow-green transition-all inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us for a Sustainable Future
          </h2>
          <p className="text-lg text-background/90 mb-8">
            Let's work together to accelerate the renewable energy revolution
          </p>
          <button
            onClick={() => navigate("/quote")}
            className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </button>
        </div>
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
