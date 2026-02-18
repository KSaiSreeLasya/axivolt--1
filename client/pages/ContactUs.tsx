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
import { useSEO, addSchemaMarkup } from "@/hooks/useSEO";
import { useEffect } from "react";

export default function ContactUs() {
  useSEO({
    title: "Contact Axivolt | Solar Panel Experts in Hyderabad",
    description:
      "Contact Axivolt for solar consultation, pricing, site visits, and expert guidance on solar power installations.",
    keywords:
      "contact solar company, solar consultation, solar inquiry, renewable energy consultation, solar company hyderabad contact",
    ogTitle: "Contact Axivolt | Solar Panel Experts in Hyderabad",
    ogDescription:
      "Contact Axivolt for solar consultation, pricing, site visits, and expert guidance on solar power installations.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/contact`,
  });

  useEffect(() => {
    // Add LocalBusiness schema with ratings and contact info
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: "AXIVOLT Green Energy",
      alternateName: "Axiso Green Energy",
      image: `${baseUrl}/logo.png`,
      description:
        "Leading solar and renewable energy company in Hyderabad providing solar panel installations, energy storage, EV charging solutions and advisory services. 500+ completed projects with 4.9-star rating.",
      url: baseUrl,
      telephone: "+91 9063447838",
      email: "contact@axivolt.in",
      priceRange: "₹₹₹",
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
        },
        {
          "@type": "AdministrativeArea",
          name: "Telangana",
        },
        {
          "@type": "AdministrativeArea",
          name: "Andhra Pradesh",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No. 101, Manish Residency, Sri Nagar Colony, Miyapur",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500049",
        addressCountry: "India",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 70,
        ratingCount: 70,
        bestRating: 5,
        worstRating: 1,
      },
      sameAs: [
        "https://www.facebook.com/AxivoltGreenEnergy/",
        "https://www.linkedin.com/company/axivoltgreen/",
        "https://www.instagram.com/axivoltgreenenergy/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+91 9063447838",
        email: "contact@axivolt.in",
      },
    };
    addSchemaMarkup(schema);
  }, []);
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
                href="tel:+91 9063447838"
                className="text-black400 hover:text-cyan transition-colors"
              >
                +91 9063447838
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-cyan transition-all">
              <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-lg font-bold mb-3">Email</h3>
              <a
                href="mailto:contact@axivolt.in"
                className="text-black400 hover:text-cyan transition-colors"
              >
                contact@axivolt.in
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-card rounded-lg border border-border p-8 text-center hover:border-cyan transition-all">
              <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-lg font-bold mb-3">Address</h3>
              <p className="text-black400 text-sm">
                Plot No. 101, Manish Residency, Sri Durga
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
                AXIVOLT Green Energy Pvt. Ltd.
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
                  href="https://www.instagram.com/axivoltgreenenergy/"
                  target="_blank"
                  rel="noopener noreferrer"
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
