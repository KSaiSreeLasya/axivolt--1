import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import { useEffect } from "react";

export default function About() {
  const navigate = useNavigate();
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
    // Add LocalBusiness schema markup
    addSchemaMarkup(
      SchemaMarkup.localBusiness({
        name: "AXIVOLT",
        description:
          "Leading solar energy company providing comprehensive renewable energy solutions",
        url: typeof window !== "undefined" ? window.location.origin : "",
        phone: "+91-XXXX-XXXXX",
        address: {
          streetAddress: "Hyderabad",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500000",
          addressCountry: "India",
        },
        sameAs: [],
      }),
    );
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
                <button className="bg-cyan text-background px-6 py-3 rounded-lg font-bold hover:bg-yellow-green transition-all inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan text-cyan px-6 py-3 rounded-lg font-bold hover:bg-cyan/10 transition-all">
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

            <div className="relative h-96 bg-gradient-to-br from-cyan/20 to-purple-500/20 rounded-lg border border-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e938aa1df86?w=600&h=400&fit=crop"
                alt="Solar panels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background/50">
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
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-background/50">
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
            <button className="bg-cyan text-background px-8 py-3 rounded-lg font-bold hover:bg-yellow-green transition-all inline-flex items-center gap-2">
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
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
