import { useState, useEffect } from "react";
import Header from "@/components/Header";
import JobApplicationForm from "@/components/JobApplicationForm";
import { supabase } from "@/lib/supabase";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Users,
  Award,
  Heart,
} from "lucide-react";

interface Job {
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      // Fallback to static jobs if fetch fails
      setJobs(defaultJobs);
    } finally {
      setLoading(false);
    }
  };

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

  const defaultJobs: Job[] = [
    {
      title: "Solar Engineer",
      department: "Engineering",
      job_type: "Full-time",
      location: "Remote/On-site",
      experience_required: "3+ years",
      is_active: true,
      description:
        "Lead the design and implementation of utility-scale solar projects, working with cutting-edge technology to drive renewable energy adoption. You'll collaborate with our engineering team to develop innovative solutions that optimize energy generation and system efficiency.",
      requirements: [
        "Bachelor's degree in Electrical/Mechanical Engineering",
        "3+ years experience in solar project development",
        "PV system design and analysis expertise",
        "Knowledge of grid interconnection standards",
        "Experience with AutoCAD, PVsyst, or similar tools",
        "Strong problem-solving and communication skills",
      ],
      benefits: [
        "Health Insurance with 40% match",
        "Flexible Hours",
        "Remote Work Options",
        "Career Growth Opportunities",
        "Performance Bonus",
        "Stock Options",
      ],
    },
    {
      title: "Wind Energy Analyst",
      department: "Analysis",
      job_type: "Full-time",
      location: "Bangalore",
      experience_required: "2+ years",
      is_active: true,
      description:
        "Analyze wind resources and conduct feasibility studies for wind energy projects. Work with advanced modeling software and data analysis tools to identify optimal project locations and predict energy generation potential. Contribute to the development of wind energy strategies.",
      requirements: [
        "Bachelor's degree in Engineering, Physics, or Environmental Science",
        "2+ years of experience in wind energy analysis",
        "Proficiency with WAsP, WindPRO, or similar tools",
        "Strong data analysis and statistical skills",
        "Knowledge of meteorological data and wind assessment",
        "Excellent documentation and presentation abilities",
      ],
      benefits: [
        "Health Insurance",
        "Flexible Hours",
        "Team Outings",
        "Training Programs",
        "Competitive Salary",
        "Mental Health Support",
      ],
    },
    {
      title: "Digital Solutions Developer",
      department: "Technology",
      job_type: "Full-time",
      location: "Remote",
      experience_required: "4+ years",
      is_active: true,
      description:
        "Build and maintain digital solutions for renewable energy management and monitoring. Develop full-stack applications that help clients track energy generation, optimize consumption, and integrate with smart grid technologies.",
      requirements: [
        "Bachelor's degree in Computer Science/Engineering",
        "4+ years of full-stack development experience",
        "Proficiency in React, Node.js, and databases",
        "Experience with IoT and real-time data systems",
        "API development and integration expertise",
        "Cloud platform experience (AWS/GCP/Azure)",
      ],
      benefits: [
        "Health Insurance",
        "Remote Work Options",
        "Flexible Hours",
        "Professional Development",
        "Performance Bonus",
        "Wellness Programs",
      ],
    },
    {
      title: "Project Manager - Renewable Energy",
      department: "Operations",
      job_type: "Full-time",
      location: "Bangalore/Pune",
      experience_required: "5+ years",
      is_active: true,
      description:
        "Oversee end-to-end renewable energy projects from conception to completion. Manage budgets, timelines, stakeholder relationships, and teams. Ensure projects meet technical specifications, quality standards, and regulatory requirements.",
      requirements: [
        "Bachelor's degree in Engineering/Business/Project Management",
        "5+ years of project management in renewable energy",
        "PMP or equivalent certification preferred",
        "Strong leadership and team management skills",
        "Experience with project management tools (MS Project, Asana, etc.)",
        "Budget management and cost control expertise",
      ],
      benefits: [
        "Health Insurance with 50% match",
        "Flexible Hours",
        "Remote Work Options",
        "Career Growth",
        "Performance Bonus",
        "Leadership Training",
      ],
    },
    {
      title: "Business Development Specialist",
      department: "Sales",
      job_type: "Full-time",
      location: "Pan India",
      experience_required: "3+ years",
      is_active: true,
      description:
        "Identify and develop new business opportunities in the renewable energy sector. Build and maintain client relationships, conduct market research, and prepare proposals for potential projects. Contribute to business strategy and growth initiatives.",
      requirements: [
        "Bachelor's degree in Business/Commerce/Engineering",
        "3+ years of B2B sales experience",
        "Strong understanding of renewable energy market",
        "Excellent negotiation and communication skills",
        "Experience in enterprise sales cycles",
        "CRM software proficiency",
      ],
      benefits: [
        "Competitive Salary",
        "Performance Bonus",
        "Flexible Hours",
        "Remote Work Options",
        "Travel Opportunities",
        "Incentive Programs",
      ],
    },
    {
      title: "Sustainability Consultant",
      department: "Advisory",
      job_type: "Full-time",
      location: "Remote",
      experience_required: "6+ years",
      is_active: true,
      description:
        "Provide strategic consulting on sustainability and renewable energy implementation. Help clients develop comprehensive energy strategies, conduct sustainability assessments, and identify cost-saving opportunities through renewable energy adoption.",
      requirements: [
        "Master's degree in Sustainability/Energy Management or 6+ years experience",
        "Deep knowledge of renewable energy policies and incentives",
        "Experience in energy audits and sustainability reporting",
        "Strong analytical and strategic thinking skills",
        "Client management and presentation expertise",
        "Knowledge of ESG and carbon accounting frameworks",
      ],
      benefits: [
        "Health Insurance",
        "Flexible Hours",
        "Remote Work Options",
        "Professional Development Funds",
        "Performance Bonus",
        "Wellness Programs",
      ],
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
            <p className="text-lg text-black max-w-2xl mx-auto mb-8">
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
            <p className="text-black max-w-2xl mx-auto">
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
                <p className="text-sm text-black">{value.description}</p>
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
            <p className="text-black">
              Find your next opportunity and help shape the future of renewable
              energy
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-black">Loading positions...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-black">No open positions at this time. Check back soon!</p>
            </div>
          ) : (
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
                        <p className="text-sm text-black mb-3">
                          {job.description.substring(0, 100)}...
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-black">
                          <span>📍 {job.location}</span>
                          <span>💼 {job.department}</span>
                          <span>⏱️ {job.job_type}</span>
                          <span>📊 {job.experience_required}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="bg-cyan text-background px-6 py-2 rounded font-semibold hover:bg-yellow-green transition-all text-sm flex-shrink-0 ml-4"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          )}

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
            <p className="text-black">
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
                  <ul className="space-y-2 text-sm text-black">
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
            <p className="text-black">
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
                <p className="text-sm text-black">
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
                <p className="text-sm text-black">
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
                <p className="text-sm text-black">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black text-sm">
          <p>&copy; 2024 AXIVOLT. All rights reserved.</p>
        </div>
      </footer>

      {/* Job Application Modal */}
      {selectedJob && (
        <JobApplicationForm
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
}
