import Header from "@/components/Header";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Users,
  Award,
  Heart,
} from "lucide-react";

export default function Careers() {
  const values = [
    {
      title: "Innovation & Creativity",
      description: "We encourage out-of-the-box thinking and bold new ideas",
    },
    {
      title: "Collaborative Culture",
      description: "We thrive through teamwork and open communication",
    },
    {
      title: "Mission-Driven",
      description: "We're passionate about building a sustainable future",
    },
    {
      title: "Excellent",
      description: "We pursue excellence in everything we do",
    },
  ];

  const jobs = [
    {
      title: "Solar Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote/On-site",
      experience: "3+ years",
    },
    {
      title: "Wind Energy Analyst",
      department: "Analysis",
      type: "Full-time",
      location: "Bangalore",
      experience: "2+ years",
    },
    {
      title: "Digital Solutions Developer",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
    },
    {
      title: "Project Manager - Renewable Energy",
      department: "Operations",
      type: "Full-time",
      location: "Bangalore/Pune",
      experience: "5+ years",
    },
    {
      title: "Business Development Specialist",
      department: "Sales",
      type: "Full-time",
      location: "Pan India",
      experience: "3+ years",
    },
    {
      title: "Sustainability Consultant",
      department: "Advisory",
      type: "Full-time",
      location: "Remote",
      experience: "6+ years",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      items: ["Health Insurance", "Wellness Programs", "Mental Health Support"],
    },
    {
      icon: Users,
      title: "Work Culture",
      items: ["Remote Work Options", "Flexible Hours", "Team Outings"],
    },
    {
      icon: Award,
      title: "Growth & Development",
      items: ["Training Programs", "Career Growth", "Skill Development"],
    },
    {
      icon: Briefcase,
      title: "Compensation",
      items: ["Competitive Salary", "Performance Bonus", "Stock Options"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build the <span className="text-cyan">Energy Future</span> With Us
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Join a passionate team of innovators, engineers, and
              sustainability experts working together to revolutionize renewable
              energy solutions.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2">
              View Open Positions <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide our team and define our commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border hover:border-cyan transition-all"
              >
                <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open Positions
            </h2>
            <p className="text-gray-400">
              Find your next opportunity and help shape the future of renewable
              energy
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg border border-border p-6 hover:border-cyan transition-all flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>📍 {job.location}</span>
                        <span>💼 {job.department}</span>
                        <span>⏱️ {job.type}</span>
                        <span>📊 {job.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-cyan text-background px-6 py-2 rounded font-semibold hover:bg-yellow-green transition-all text-sm flex-shrink-0">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2">
              View All Openings <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits & Perks
            </h2>
            <p className="text-gray-400">
              We invest in our team's wellbeing and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg p-8 border border-border text-center hover:border-cyan transition-all"
                >
                  <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{benefit.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {benefit.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life at AXIVOLT Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Life at AXIVOLT
            </h2>
            <p className="text-gray-400">
              Get a glimpse into our vibrant, inclusive, and empowering
              workplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-cyan transition-all">
              <div className="h-48 bg-gradient-to-br from-cyan/20 to-purple-500/20 flex items-center justify-center">
                <Users className="w-16 h-16 text-cyan/50" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Team Collaboration</h3>
                <p className="text-sm text-gray-400">
                  Work alongside talented professionals in a collaborative
                  environment
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-cyan transition-all">
              <div className="h-48 bg-gradient-to-br from-green-400/20 to-cyan/20 flex items-center justify-center">
                <Award className="w-16 h-16 text-green-400/50" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  Learning & Development
                </h3>
                <p className="text-sm text-gray-400">
                  Continuous learning programs to enhance your skills and career
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-cyan transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Heart className="w-16 h-16 text-purple-400/50" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Work-Life Balance</h3>
                <p className="text-sm text-gray-400">
                  Flexible work arrangements that prioritize your wellbeing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-background/90 mb-8">
            Start your journey in renewable energy with AXIVOLT
          </p>
          <button className="bg-background text-cyan px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2">
            Explore Careers <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AXIVOLT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
