import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function Compliance() {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      details:
        "We maintain the highest standards in engineering, reliability and performance.",
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System",
      details:
        "We prioritize safety and environmental protection in all our operations.",
    },
    {
      title: "TUREC Certification",
      description: "Telecom Regulatory Authority",
      details:
        "Certified compliance with telecommunications and energy sector regulations.",
    },
    {
      title: "Legal Compliance",
      description: "Government & Regulatory Standards",
      details:
        "Full compliance with all applicable federal, state, and local regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-cyan mb-4">
            Compliance & Certifications
          </h1>
          <p className="text-black text-lg">
            AXIVOLT is committed to maintaining the highest standards of
            compliance and regulatory adherence.
          </p>
        </div>

        <div className="space-y-12 text-black">
          {/* Certifications Section */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-8">
              Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-cyan mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-yellow-green font-semibold mb-2">
                        {cert.description}
                      </p>
                      <p className="text-sm">{cert.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Regulatory Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-6">
              Regulatory Compliance
            </h2>
            <div className="space-y-4">
              <p>
                AXIVOLT operates in full compliance with all applicable laws,
                regulations, and industry standards, including:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong>Environmental Protection:</strong> We comply with all
                  environmental protection laws and standards to minimize our
                  carbon footprint.
                </li>
                <li>
                  <strong>Safety Standards:</strong> All our projects adhere to
                  the highest safety standards and best practices in the
                  renewable energy industry.
                </li>
                <li>
                  <strong>Quality Assurance:</strong> We maintain rigorous
                  quality control processes throughout our operations.
                </li>
                <li>
                  <strong>Data Protection:</strong> We comply with all data
                  protection and privacy regulations when handling customer
                  information.
                </li>
                <li>
                  <strong>Labour Standards:</strong> We maintain fair labour
                  practices and provide safe working conditions for all
                  employees and contractors.
                </li>
              </ul>
            </div>
          </section>

          {/* Sustainability Commitment */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-6">
              Sustainability Commitment
            </h2>
            <div className="bg-card border border-border rounded-lg p-8">
              <p className="mb-4">
                Our commitment to sustainability goes beyond compliance. We
                actively work to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reduce energy consumption across our operations</li>
                <li>Minimize waste and promote recycling</li>
                <li>Support renewable energy adoption</li>
                <li>Collaborate with environmental organizations</li>
                <li>Invest in green technologies and innovations</li>
              </ul>
            </div>
          </section>

          {/* Audits and Assessments */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-6">
              Audits and Assessments
            </h2>
            <p>
              AXIVOLT undergoes regular third-party audits and assessments to
              ensure continued compliance with all applicable standards and
              regulations. These audits validate our commitment to quality,
              safety, and environmental responsibility.
            </p>
          </section>

          {/* Reporting and Transparency */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-6">
              Reporting and Transparency
            </h2>
            <p className="mb-4">
              We believe in transparency and regular reporting on our compliance
              and sustainability efforts. Our stakeholders can access:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Annual sustainability reports</li>
              <li>Compliance audit results</li>
              <li>Environmental impact assessments</li>
              <li>Corporate governance updates</li>
            </ul>
          </section>

          {/* Contact for Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-6">
              Compliance Contact
            </h2>
            <p className="mb-4">
              For questions about our compliance programs, certifications, or
              sustainability initiatives, please reach out to our Compliance and
              Quality Assurance team:
            </p>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="mb-3">
                <strong>AXIVOLT Green Energy</strong>
              </p>
              <p className="mb-2">
                <strong>Compliance Department</strong>
              </p>
              <p className="mb-2">Email: contact@axivolt.com</p>
              <p className="mb-2">Phone: +91 9063447838</p>
              <p>
                Address: Plot No. 101, Miyoshi Residency, Sri Nagar Colony,
                Miyapur, Hyderabad, Telangana 500049
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
