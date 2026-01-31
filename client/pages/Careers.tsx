import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import { motion } from "framer-motion";

interface Job {
  id?: string;
  title: string;
  department: string;
  job_type: string;
  location: string;
  experience_required: string;
  description: string;
  requirements: string[];
  benefits: string[];
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
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
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white pt-24 md:pt-40 pb-20">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/15 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full filter blur-3xl"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build the{" "}
              <span className="bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent">
                Energy Future
              </span>{" "}
              With Us
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed font-light max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join a passionate team of innovators, engineers, and
              sustainability experts working together to revolutionize renewable
              energy solutions.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center gap-2 shadow-xl"
            >
              View Open Positions <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
              The principles that guide our team and define our commitment to
              excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                }}
              >
                <motion.div
                  className="w-14 h-14 bg-cyan/20 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <CheckCircle className="w-7 h-7 text-cyan" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
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
              <p className="text-black">
                No open positions at this time. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  className="bg-card rounded-lg border border-border p-6 hover:border-cyan transition-all flex items-center justify-between group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(0, 188, 212, 0.15)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full -mr-16 -mt-16 group-hover:bg-cyan/10 transition-colors"></div>
                  <div className="flex-1 relative z-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 8 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Briefcase className="w-6 h-6 text-cyan" />
                      </motion.div>
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
                  <motion.button
                    onClick={() => setSelectedJob(job)}
                    className="bg-cyan text-background px-6 py-2 rounded font-semibold hover:bg-yellow-green transition-all text-sm flex-shrink-0 ml-4 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-yellow-green-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-700 font-light">
              We invest in our team's wellbeing and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-10 border border-cyan/20 hover:border-cyan/50 transition-all shadow-lg hover:shadow-2xl text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 188, 212, 0.2)",
                  }}
                >
                  <motion.div
                    className="w-14 h-14 bg-cyan/20 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-7 h-7 text-cyan" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {benefit.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-center gap-3 text-gray-700 font-medium"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
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
            {[
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Work alongside talented professionals in a collaborative environment",
                gradient: "from-cyan/20 to-purple-500/20",
                iconColor: "text-cyan/50",
              },
              {
                icon: Award,
                title: "Learning & Development",
                description:
                  "Continuous learning programs to enhance your skills and career",
                gradient: "from-green-400/20 to-cyan/20",
                iconColor: "text-green-400/50",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description:
                  "Flexible work arrangements that prioritize your wellbeing",
                gradient: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-400/50",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-cyan transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    boxShadow: "0 15px 40px rgba(0, 188, 212, 0.15)",
                  }}
                >
                  <motion.div
                    className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon className={`w-16 h-16 ${item.iconColor}`} />
                    </motion.div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-black">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            Ready to Join Our Team?
          </motion.h2>
          <motion.p
            className="text-xl text-background/95 mb-10 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start your journey in renewable energy with AXIVOLT
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl inline-flex items-center gap-3"
          >
            Explore Careers <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />

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
