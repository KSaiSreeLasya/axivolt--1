import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Building2, Factory, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Industry() {
  const navigate = useNavigate();
  const industries = [
    {
      title: "Commercial & Office",
      description:
        "Optimize energy costs with solar and renewable solutions for office buildings and commercial spaces.",
      icon: Building2,
      color: "bg-blue-500/20",
      iconColor: "text-blue-400",
      stats: [
        { value: "50%", label: "Energy Savings" },
        { value: "8-10 yrs", label: "ROI Timeline" },
        { value: "25+ years", label: "System Lifespan" },
      ],
      benefits: [
        "Reduced operational costs",
        "Enhanced corporate sustainability",
        "Tax incentives and rebates",
        "Improved property value",
      ],
    },
    {
      title: "Industrial & Manufacturing",
      description:
        "Industrial-grade renewable energy solutions for high-demand manufacturing and production facilities.",
      icon: Factory,
      color: "bg-cyan/20",
      iconColor: "text-cyan",
      stats: [
        { value: "60%+", label: "Peak Load Coverage" },
        { value: "6-8 yrs", label: "ROI Timeline" },
        { value: "99.9%", label: "Uptime Guarantee" },
      ],
      benefits: [
        "Uninterrupted power supply",
        "Reduced grid dependency",
        "Process optimization",
        "Environmental compliance",
      ],
    },
    {
      title: "Educational Institutions",
      description:
        "Sustainable energy solutions for schools, colleges, and universities that reduce costs and teach sustainability.",
      icon: Zap,
      color: "bg-purple-500/20",
      iconColor: "text-purple-400",
      stats: [
        { value: "40%", label: "Cost Reduction" },
        { value: "25-45%", label: "Carbon Reduction" },
        { value: "100+", label: "Institutions Served" },
      ],
      benefits: [
        "Budget allocation optimization",
        "Educational research opportunities",
        "Campus modernization",
        "Community engagement",
      ],
    },
    {
      title: "Healthcare Facilities",
      description:
        "Reliable renewable energy systems for hospitals, clinics, and healthcare providers with backup power options.",
      icon: Building2,
      color: "bg-red-500/20",
      iconColor: "text-red-400",
      stats: [
        { value: "45%", label: "Energy Savings" },
        { value: "24/7", label: "Backup Support" },
        { value: "99.95%", label: "Reliability" },
      ],
      benefits: [
        "Critical power reliability",
        "Emergency backup systems",
        "Operational cost reduction",
        "Patient care continuity",
      ],
    },
    {
      title: "Retail & Hospitality",
      description:
        "Energy-efficient solutions for retail stores, hotels, and hospitality businesses to enhance profitability.",
      icon: Building2,
      color: "bg-cyan/20",
      iconColor: "text-cyan",
      stats: [
        { value: "35-40%", label: "Utility Savings" },
        { value: "9-11 yrs", label: "ROI Timeline" },
        { value: "500+", label: "Properties Served" },
      ],
      benefits: [
        "Improved guest experience",
        "Brand sustainability narrative",
        "Reduced operating expenses",
        "Peak demand management",
      ],
    },
    {
      title: "Government & Public Sector",
      description:
        "Comprehensive renewable energy solutions for government institutions, municipalities, and public facilities.",
      icon: Building2,
      color: "bg-cyan/20",
      iconColor: "text-cyan",
      stats: [
        { value: "55%+", label: "Cost Savings" },
        { value: "20 yrs", label: "Warranty" },
        { value: "50+", label: "Public Projects" },
      ],
      benefits: [
        "Budget transparency",
        "Carbon neutrality goals",
        "Citizen engagement",
        "Energy independence",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan text-sm uppercase tracking-widest mb-4">
              Industry-Specific Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tailored Renewable Energy{" "}
              <span className="text-cyan">Solutions</span> for Every Industry
            </h1>
            <p className="text-lg text-black400 max-w-2xl mx-auto">
              From commercial offices to manufacturing plants, healthcare
              facilities to government institutions, we deliver customized
              renewable energy solutions that maximize efficiency and
              profitability across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-black400 max-w-2xl mx-auto">
              Proven expertise across diverse sectors with customized solutions
              designed for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 border border-border hover:border-cyan transition-all"
                >
                  <div
                    className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-6 h-6 ${industry.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-black400 mb-6">{industry.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border/50">
                    {industry.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-cyan font-bold text-lg">
                          {stat.value}
                        </p>
                        <p className="text-xs text-black400">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-black300"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose AXIVOLT */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AXIVOLT for Your Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Expertise",
                description:
                  "Deep knowledge of sector-specific regulations and requirements",
              },
              {
                title: "Proven Track Record",
                description:
                  "Successful implementations across diverse industrial sectors",
              },
              {
                title: "Custom Solutions",
                description:
                  "Tailored approaches designed for your unique operational needs",
              },
              {
                title: "Long-term Support",
                description:
                  "Ongoing monitoring and optimization for maximum performance",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-bold mb-3 text-cyan">
                  {item.title}
                </h3>
                <p className="text-black400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry
          </h2>
          <p className="text-lg text-background/90 mb-8">
            Let's create a customized renewable energy solution for your
            organization
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            Get Industry Assessment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
