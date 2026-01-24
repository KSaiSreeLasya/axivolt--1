import { useState } from "react";
import { FileText, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    industry: "",
    project_type: "",
    energy_solution: "",
    location: "",
    property_type: "",
    estimated_energy_need: "",
    budget_range: "",
    timeline: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("quote_requests")
        .insert([
          {
            ...formData,
            status: "pending",
          },
        ])
        .select();

      if (error) {
        const errorMsg =
          error instanceof Error ? error.message : JSON.stringify(error);
        toast.error("Failed to submit quote request: " + errorMsg);
        console.error("Supabase error:", error);
        setLoading(false);
        return;
      }

      toast.success(
        "Quote request submitted! We'll contact you within 24 hours."
      );
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        industry: "",
        project_type: "",
        energy_solution: "",
        location: "",
        property_type: "",
        estimated_energy_need: "",
        budget_range: "",
        timeline: "",
        description: "",
      });
      setLoading(false);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      toast.error("An error occurred: " + errorMsg);
      console.error("Error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-8">
      <div className="flex items-start gap-3 mb-6">
        <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-cyan" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Request a Quote</h2>
          <p className="text-gray-400 text-sm mt-1">
            Get a personalized quote for your renewable energy project
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Phone *</label>
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
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
            >
              <option value="">Select Industry</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Project Type *
            </label>
            <select
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
            >
              <option value="">Select Project Type</option>
              <option value="Solar Installation">Solar Installation</option>
              <option value="Wind Energy">Wind Energy</option>
              <option value="Energy Storage">Energy Storage</option>
              <option value="Hybrid System">Hybrid System</option>
              <option value="Energy Audit">Energy Audit</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Energy Solution
            </label>
            <select
              name="energy_solution"
              value={formData.energy_solution}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
            >
              <option value="">Select Solution</option>
              <option value="Residential Solar">Residential Solar</option>
              <option value="Commercial Solar">Commercial Solar</option>
              <option value="Industrial Solar">Industrial Solar</option>
              <option value="Wind Power">Wind Power</option>
              <option value="Battery Storage">Battery Storage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
              placeholder="City/State"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Property Type
            </label>
            <select
              name="property_type"
              value={formData.property_type}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
            >
              <option value="">Select Property Type</option>
              <option value="Rooftop">Rooftop</option>
              <option value="Ground Mount">Ground Mount</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Estimated Energy Need
            </label>
            <input
              type="text"
              name="estimated_energy_need"
              value={formData.estimated_energy_need}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
              placeholder="e.g., 10 kW"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Budget Range
            </label>
            <select
              name="budget_range"
              value={formData.budget_range}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
            >
              <option value="">Select Budget</option>
              <option value="₹50k - ₹100k">₹50k - ₹100k</option>
              <option value="₹100k - ₹500k">₹100k - ₹500k</option>
              <option value="₹500k - ₹1M">₹500k - ₹1M</option>
              <option value="₹1M+">₹1M+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
            >
              <option value="">Select Timeline</option>
              <option value="ASAP">ASAP</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Project Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors resize-none"
            placeholder="Tell us more about your project, goals, and any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan text-background px-6 py-3 rounded-lg font-semibold hover:bg-cyan/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {loading ? "Submitting..." : "Request Quote"}
        </button>
      </form>
    </div>
  );
}
