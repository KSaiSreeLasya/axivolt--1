import { useState } from "react";
import { X } from "lucide-react";

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

interface JobApplicationFormProps {
  job: Job;
  onClose: () => void;
}

export default function JobApplicationForm({
  job,
  onClose,
}: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: "",
    coverletter: "",
    experience: "",
    linkedIn: "",
    portfolio: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add API call to submit the form
    console.log("Application submitted for:", job.title, formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        resume: "",
        coverletter: "",
        experience: "",
        linkedIn: "",
        portfolio: "",
      });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <p className="text-gray-400 text-sm mt-1">Apply for this position</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Job Details */}
        <div className="p-6 border-b border-border">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-400">Department</p>
              <p className="font-semibold text-cyan">{job.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Experience</p>
              <p className="font-semibold text-cyan">{job.experience}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-semibold">{job.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Employment Type</p>
              <p className="font-semibold">{job.type}</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2">About the Role</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {job.description}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-bold mb-2">Requirements</h3>
            <ul className="space-y-1">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="text-sm text-gray-300 flex gap-2">
                  <span className="text-cyan">✓</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Application Form */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
              <p className="text-gray-400">
                Thank you for applying. We'll review your application and get
                back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
                    placeholder="e.g., 5 years"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Portfolio/Website
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Resume/CV (Paste Link) *
                </label>
                <input
                  type="url"
                  name="resume"
                  value={formData.resume}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
                  placeholder="https://drive.google.com/... or https://dropbox.com/..."
                />
                <p className="text-xs text-gray-400 mt-1">
                  Provide a link to your resume (Google Drive, Dropbox, etc.)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverletter"
                  value={formData.coverletter}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors resize-none"
                  placeholder="Tell us why you're a great fit for this role..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-cyan text-background px-6 py-2 rounded-lg font-semibold hover:bg-cyan/90 transition-all"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border border-border text-foreground px-6 py-2 rounded-lg font-semibold hover:border-cyan transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
