import Header from "@/components/Header";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-cyan">Us</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get in touch with our renewable energy experts for a free
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 font-semibold">
                    Thank you! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors resize-none"
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan text-background px-6 py-3 rounded font-bold hover:bg-yellow-green transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Image */}
            <div className="bg-card rounded-lg border border-border overflow-hidden h-full min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1508873699372-f7615961e270?w=600&h=600&fit=crop"
                alt="AXIVOLT Solar Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-cyan transition-all">
              <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-lg font-bold mb-3">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-gray-400 hover:text-cyan transition-colors"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-cyan transition-all">
              <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-lg font-bold mb-3">Email</h3>
              <a
                href="mailto:info@axivolt.com"
                className="text-gray-400 hover:text-cyan transition-colors"
              >
                info@axivolt.com
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-cyan transition-all">
              <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-lg font-bold mb-3">Address</h3>
              <p className="text-gray-400 text-sm">
                Plot No. 101, Miyoshi Residency, Sri
                <br />
                Nagar Colony, Miyapur,
                <br />
                Hyderabad, Telangana 500049
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us on the Map
            </h2>
            <p className="text-gray-400">Visit our office location</p>
          </div>

          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.482936591396!2d78.341645!3d17.495983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9339b0a17839%3A0x3426f99387651e26!2sAxiso%20Green%20Energy!5e0!3m2!1sen!2sin!4v1769065782875!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg border border-border p-12 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                AXIVOLT Green Energies Pvt. Ltd.
              </h2>
              <p className="text-gray-400 mb-6">
                Leading the transition to sustainable energy with innovative
                renewable energy solutions for a cleaner, greener future.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-background transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-background transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-background transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-background/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Get the latest news about renewable energy and sustainability.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
            />
            <button className="bg-cyan text-background px-6 py-3 rounded font-bold hover:bg-yellow-green transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Solar Energy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Wind Energy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Energy Storage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Smart Grid
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Sectors
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Digital Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Procurement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-gray-400">
              &copy; 2024 AXIVOLT Green Energies. All rights reserved. |
              Certified ISO 14001 | Certified ISO 9001 | TUREC Certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
