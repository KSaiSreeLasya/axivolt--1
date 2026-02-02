import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-cyan mb-4">Privacy Policy</h1>
          <p className="text-black text-lg">Last updated: January 2024</p>
        </div>

        <div className="space-y-8 text-black">
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              AXIVOLT ("we," "us," "our," or "Company") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree
              with our policies and practices, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The
              information we may collect on the site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone
                number, postal address, and other information you provide when
                contacting us or requesting quotes.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                operating system, and pages visited.
              </li>
              <li>
                <strong>Usage Data:</strong> How you interact with our website,
                including the time and duration of your visit.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process quotes and transactions</li>
              <li>To send promotional communications (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              4. Data Protection and Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              5. Third-Party Disclosure
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating our website and conducting our
              business, provided they agree to keep this information
              confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">7. Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to enhance your browsing experience. You
              can choose to disable cookies through your browser settings, but
              this may limit your ability to use certain features of our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="bg-card p-4 rounded">
              <p className="mb-2">
                <strong>AXIVOLT Green Energy</strong>
              </p>
              <p className="mb-2">Email: privacy@axivolt.com</p>
              <p>Phone: +91 9063447838</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
