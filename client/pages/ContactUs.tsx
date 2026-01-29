import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function ContactUs() {
  useSEO({
    title: "Contact AXIVOLT | Solar Energy Solutions | Get Free Consultation",
    description:
      "Get in touch with AXIVOLT for solar energy solutions in Hyderabad. Free consultation, expert advice, and personalized solar system design.",
    keywords:
      "contact solar company, solar consultation, solar inquiry, renewable energy consultation, solar company hyderabad contact",
    ogTitle: "Contact AXIVOLT - Solar Energy Experts",
    ogDescription:
      "Reach out to AXIVOLT for a free solar energy consultation. We're here to help.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/contact`,
  });
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
            <p className="text-lg text-black400 max-w-2xl mx-auto">
              Get in touch with our renewable energy experts for a free
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
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
                className="text-black400 hover:text-cyan transition-colors"
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
                className="text-black400 hover:text-cyan transition-colors"
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
              <p className="text-black400 text-sm">
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
            <p className="text-black400">Visit our office location</p>
          </div>

          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.482936591396!2d78.341645!3d17.495983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9339b0a17839%3A0x3426f99387651e26!2sAxiso%20Green%20Energy!5e0!3m2!1sen!2sin!4v1769065782875!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
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
              <p className="text-black400 mb-6">
                Leading the transition to sustainable energy with innovative
                renewable energy solutions for a cleaner, greener future.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-6">
                <a
                  href="https://www.facebook.com/AxivoltGreenEnergy/?rdid=lzUX5nBf2lTLnktE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-background transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/axivoltgreen/"
                  target="_blank"
                  rel="noopener noreferrer"
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
          <p className="text-black400 mb-6">
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

      <Footer />
    </div>
  );
}
