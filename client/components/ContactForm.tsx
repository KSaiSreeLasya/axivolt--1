import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    subject: "",
    message: "",
    contact_preference: "email",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
        .from("contact_form_submissions")
        .insert([
          {
            ...formData,
            status: "new",
          },
        ])
        .select();

      if (error) {
        const errorMsg =
          error instanceof Error ? error.message : JSON.stringify(error);
        toast.error("Failed to submit form: " + errorMsg);
        console.error("Supabase error:", error);
        setLoading(false);
        return;
      }

      toast.success("Thank you! We'll contact you soon.");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        subject: "",
        message: "",
        contact_preference: "email",
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
      <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
      <p className="text-black400 mb-8">
        Have questions? We'd love to hear from you. Send us a message!
      </p>

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
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
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

        <div>
          <label className="block text-sm font-medium mb-2">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors resize-none"
            placeholder="Your message here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Preferred Contact Method
          </label>
          <select
            name="contact_preference"
            value={formData.contact_preference}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground focus:border-cyan outline-none transition-colors"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="either">Either</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan text-background px-6 py-3 rounded-lg font-semibold hover:bg-cyan/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-cyan" />
          </div>
          <div>
            <h4 className="font-bold mb-1">Email</h4>
            <p className="text-sm text-black400">hello@axivolt.com</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-cyan" />
          </div>
          <div>
            <h4 className="font-bold mb-1">Phone</h4>
            <p className="text-sm text-black400">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
