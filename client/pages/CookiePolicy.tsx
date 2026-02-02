import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-cyan mb-4">Cookie Policy</h1>
          <p className="text-black text-lg">Last updated: January 2024</p>
        </div>

        <div className="space-y-8 text-black">
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              1. What Are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile phone) when you visit our website.
              They help us recognize you when you return and allow us to provide
              a more personalized experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              2. Types of Cookies We Use
            </h2>
            <p className="mb-4">We use the following types of cookies:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Essential Cookies:</strong> These are necessary for the
                website to function properly.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These help us understand
                how visitors interact with our website.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These remember your
                preferences and settings.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> These track your browsing
                habits to show relevant advertisements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              3. How We Use Cookies
            </h2>
            <p className="mb-4">We use cookies to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Analyze website traffic and performance</li>
              <li>Improve user experience and website functionality</li>
              <li>Provide personalized content and recommendations</li>
              <li>Measure the effectiveness of advertising campaigns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              4. Third-Party Cookies
            </h2>
            <p className="mb-4">
              We may allow third-party services (such as analytics providers and
              advertising networks) to place cookies on our website. These third
              parties use cookies to collect information about your browsing
              habits across multiple websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              5. How to Control Cookies
            </h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their
              settings. You can typically:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Delete existing cookies</li>
              <li>Prevent new cookies from being stored</li>
              <li>Set your browser to notify you when cookies are being set</li>
              <li>Block cookies from specific websites</li>
            </ul>
            <p className="mt-4">
              Please note that disabling cookies may affect the functionality of
              our website and your user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              6. Cookie Duration
            </h2>
            <p className="mb-4">
              Cookies may be either "session cookies" (which are deleted when
              you close your browser) or "persistent cookies" (which remain on
              your device until they expire or you delete them).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              7. Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time. We encourage
              you to review this policy periodically to stay informed about how
              we use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have questions about our use of cookies, please contact us
              at:
            </p>
            <div className="bg-card p-4 rounded">
              <p className="mb-2">
                <strong>AXIVOLT Green Energy</strong>
              </p>
              <p className="mb-2">Email: cookies@axivolt.com</p>
              <p>Phone: +91 9063447838</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
