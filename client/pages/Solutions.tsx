import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Sun, Wind, Battery, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO, addSchemaMarkup, SchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function Solutions() {
  useSEO({
    title: "Renewable Energy & Solar Power Solutions | Axivolt",
    description:
      "Switch to clean energy with Axivolt's advanced renewable energy and solar power solutions for a sustainable future.",
    keywords:
      "renewable energy solutions, solar energy, wind energy, energy storage, EV charging, renewable power generation, green energy solutions",
    ogTitle: "Renewable Energy & Solar Power Solutions | Axivolt",
    ogDescription:
      "Switch to clean energy with Axivolt's advanced renewable energy and solar power solutions for a sustainable future.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/solutions`,
  });

  useEffect(() => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

    // Add FAQ schema for renewable energy solutions
    const solutionsFaqs = [
      {
        question: "What are renewable energy solutions?",
        answer:
          "Renewable energy solutions harness natural resources like sun, wind, and storage to generate clean electricity. AXIVOLT provides solar, wind, energy storage, and EV charging solutions tailored to residential, commercial, and government needs.",
      },
      {
        question: "Which renewable energy solution is best for my business?",
        answer:
          "The best solution depends on your location, available space, energy consumption, and budget. Solar works everywhere with good sunlight, wind suits coastal/windy areas, and storage enhances any system. Our advisory team provides personalized recommendations.",
      },
      {
        question: "Can I combine multiple renewable energy solutions?",
        answer:
          "Yes! Hybrid systems combining solar + storage, solar + wind, or all three are highly effective. This combination maximizes generation, provides 24/7 reliability, and optimizes your energy independence and savings.",
      },
      {
        question: "What is energy storage and why do I need it?",
        answer:
          "Energy storage systems (batteries) store excess energy generated during peak production for use during low generation or high demand periods. This ensures 24/7 power availability, reduces grid dependency, and maximizes ROI of your renewable system.",
      },
      {
        question:
          "How do renewable energy solutions reduce my electricity costs?",
        answer:
          "Renewable systems generate free electricity from natural resources, eliminating fuel costs. Combined with net metering (selling excess power back to the grid) and government incentives, most users see 70-90% reduction in electricity bills.",
      },
      {
        question: "What maintenance do renewable energy systems require?",
        answer:
          "Renewable systems require minimal maintenance. Solar panels need occasional cleaning, moving parts in wind systems need regular servicing, and batteries need periodic checks. We offer comprehensive O&M packages ensuring optimal performance.",
      },
      {
        question: "How long does it take to install a renewable energy system?",
        answer:
          "Typical installation timelines: Residential solar (1-2 weeks), Commercial solar (2-4 weeks), Wind systems (3-6 months), Energy storage (1-2 weeks). Timeline depends on system complexity, permits, and site conditions.",
      },
      {
        question: "Do renewable energy systems work during power cuts?",
        answer:
          "Grid-connected systems automatically shut down during outages for safety. To maintain power during cuts, add battery storage. Off-grid systems with batteries provide uninterrupted power even without grid connection.",
      },
      {
        question: "What happens after 25 years when solar panels degrade?",
        answer:
          "Quality solar panels retain 80-85% efficiency after 25 years. They continue generating electricity beyond warranty periods, though at reduced capacity. Degradation is gradual and typically causes minimal impact on energy output.",
      },
      {
        question: "Are there financing options for renewable energy systems?",
        answer:
          "Yes! We facilitate multiple financing options including loans, EMI schemes, MNRE subsidies, accelerated depreciation, and power purchase agreements. Our team helps identify the most cost-effective options for your situation.",
      },
    ];

    // Create FAQ schema
    const faqSchema = SchemaMarkup.faq(solutionsFaqs);

    // Create merged schema with LocalBusiness and FAQ
    const mergedSchema = {
      "@context": "https://schema.org",
      "@graph": [
        SchemaMarkup.localBusinessWithRatings({
          name: "AXIVOLT Green Energy",
          description:
            "Comprehensive renewable energy solutions provider offering solar, wind, energy storage, and EV charging infrastructure. 500+ completed projects with 4.9-star rating.",
          url: baseUrl,
          phone: "+91 9063447838",
          email: "contact@axivolt.in",
          image: `${baseUrl}/logo.png`,
          address: {
            streetAddress:
              "Plot No. 101, Miyoshi Residency, Sri Nagar Colony, Miyapur",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500049",
            addressCountry: "India",
          },
          rating: 4.9,
          reviewCount: 70,
          ratingCount: 70,
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
  const solutions = [
    {
      title: "Solar Energy",
      description: "Rooftop, commercial & public solar solutions",
      icon: Sun,
      color: "bg-yellow-500/20",
      iconColor: "text-yellow-400",
      metric1: { value: "200+", label: "Projects" },
      metric2: { value: "25-40%", label: "Savings" },
      features: [
        "Rooftop Solar",
        "Ground Mount",
        "Solar Carports",
        "Grid Integration",
      ],
      caseStudy: "Tech Campus - 2.5MW Solar Installation",
      link: "/solutions/solar",
    },
    {
      title: "Wind Energy",
      description: "Onshore wind, hybrid systems and O&M",
      icon: Wind,
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
      metric1: { value: "50+", label: "Projects" },
      metric2: { value: "30-45%", label: "Savings" },
      features: [
        "Onshore Wind",
        "Hybrid Systems",
        "Asset Management",
        "O&M Services",
      ],
      caseStudy: "Wind Farm - 50MW Onshore Project",
      link: "/solutions/wind",
    },
    {
      title: "Energy Storage",
      description: "Battery storage systems and EMS",
      icon: Battery,
      color: "bg-green-500/20",
      iconColor: "text-green-400",
      metric1: { value: "100+", label: "Projects" },
      metric2: { value: "20-35%", label: "Savings" },
      features: [
        "Battery Systems",
        "Energy Management",
        "Peak Shaving",
        "Backup Power",
      ],
      caseStudy: "Industrial Plant - 1MW Storage System",
      link: "/solutions/energy-storage",
    },
    {
      title: "EV Stations",
      description: "EV charging infrastructure and services",
      icon: Zap,
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
      metric1: { value: "300+", label: "Projects" },
      metric2: { value: "15-30%", label: "Savings" },
      features: [
        "Fast Charging",
        "Smart Grid",
        "Fleet Solutions",
        "Payment Systems",
      ],
      caseStudy: "Shopping Mall - 50 Station Network",
      link: "/solutions/ev-stations",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-white pt-24 md:pt-40 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-green/15 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-block bg-cyan/20 text-cyan px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-cyan/30">
              Our Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
              Solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">
              Explore our core energy solutions — click a category to view
              detailed services and offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Comprehensive energy solutions with proven results and
              comprehensive features across all sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={solution.title}
                  to={solution.link}
                  className="group bg-white rounded-2xl p-10 border-2 transition-all shadow-lg hover:shadow-2xl relative overflow-hidden hover:border-cyan/50"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl ${solution.color} flex items-center justify-center mb-8 shadow-lg relative z-10 border-2 border-white`}
                  >
                    <Icon className={`w-10 h-10 ${solution.iconColor}`} />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 text-base mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b-2 border-gray-200">
                    <div>
                      <p className="text-4xl font-bold bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent mb-2">
                        {solution.metric1.value}
                      </p>
                      <p className="text-base text-gray-700 font-medium">
                        {solution.metric1.label}
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold bg-gradient-to-r from-yellow-green to-yellow-green/80 bg-clip-text text-transparent mb-2">
                        {solution.metric2.value}
                      </p>
                      <p className="text-base text-gray-700 font-medium">
                        {solution.metric2.label}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-base text-gray-700 font-medium"
                      >
                        <span className="w-3 h-3 rounded-full bg-cyan flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Case Study */}
                  <div className="bg-gradient-to-br from-cyan/10 to-cyan/5 rounded-xl p-6 border-2 border-cyan/30 mb-6">
                    <p className="text-xs font-bold text-cyan uppercase tracking-widest mb-2">
                      Case Study
                    </p>
                    <p className="text-base text-gray-800 font-semibold">
                      {solution.caseStudy}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex items-center justify-end text-cyan group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
