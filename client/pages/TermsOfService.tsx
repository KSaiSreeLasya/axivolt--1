import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service | AXIVOLT - Legal Terms",
    description:
      "Read the terms and conditions of using AXIVOLT's website and services.",
    keywords: "terms of service, terms and conditions, legal terms",
    ogTitle: "Terms of Service - AXIVOLT",
    ogDescription: "AXIVOLT's terms and conditions for website use.",
    canonical: `${typeof window !== "undefined" ? window.location.origin : ""}/terms-of-service`,
    noindex: true,
  });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-cyan mb-4">
            Terms of Service
          </h1>
          <p className="text-black text-lg">Last updated: January 2024</p>
        </div>

        <div className="space-y-8 text-black">
          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              2. Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on AXIVOLT's website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modifying or copying the materials</li>
              <li>
                Using the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempting to decompile or reverse engineer any software
                contained on the website
              </li>
              <li>
                Removing any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transferring the materials to another person or "mirroring" the
                materials on any other server
              </li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on AXIVOLT's website are provided on an 'as is'
              basis. AXIVOLT makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              4. Limitations
            </h2>
            <p className="mb-4">
              In no event shall AXIVOLT or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on AXIVOLT's website, even if
              AXIVOLT or an authorized representative has been notified orally
              or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              5. Accuracy of Materials
            </h2>
            <p className="mb-4">
              The materials appearing on AXIVOLT's website could include
              technical, typographical, or photographic errors. AXIVOLT does not
              warrant that any of the materials on the website are accurate,
              complete, or current. AXIVOLT may make changes to the materials
              contained on the website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">6. Links</h2>
            <p className="mb-4">
              AXIVOLT has not reviewed all of the sites linked to its website
              and is not responsible for the contents of any such linked site.
              The inclusion of any link does not imply endorsement by AXIVOLT of
              the site. Use of any such linked website is at the user's own
              risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              7. Modifications
            </h2>
            <p className="mb-4">
              AXIVOLT may revise these terms of service for the website at any
              time without notice. By using this website, you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              8. Governing Law
            </h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which AXIVOLT
              operates, and you irrevocably submit to the exclusive jurisdiction
              of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan mb-4">
              9. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="bg-card p-4 rounded">
              <p className="mb-2">
                <strong>AXIVOLT Green Energy</strong>
              </p>
              <p className="mb-2">Email: contact@axivolt.com</p>
              <p>Phone: +91 9063447838</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
