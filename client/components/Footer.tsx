import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ffe5527c1828944a38faa27a1f5c6efe7%2F00fa53301075421e90acc8403136e6ca?format=webp&width=200&height=300"
                alt="AXIVOLT Logo"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-base font-bold mb-2" style={{ color: '#03867E' }}>
              AXIVOLT GREEN ENERGIES PVT.LTD.
            </p>
            <p className="text-black text-xs">
              Sustainable energy solutions for a better tomorrow.
            </p>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-yellow-green text-sm">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/solutions/solar"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Solar Energy
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/wind"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Wind Power
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/energy-storage"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Energy Storage
                </Link>
              </li>
              <li>
                <a href="#" className="text-black text-sm hover:text-cyan transition">
                  Smart Grid
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-yellow-green text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/advisory"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="text-black text-sm hover:text-cyan transition">
                  Sectors
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-yellow-green text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black text-sm hover:text-cyan transition">
                  Resources
                </a>
              </li>
              <li>
                <Link
                  to="/digital-solutions"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/procurement"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Procurement
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="font-bold mb-4 text-yellow-green text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="text-black text-sm hover:text-cyan transition"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-black text-sm">
            &copy; 2024 AXIVOLT. All rights reserved.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="text-black hover:text-cyan transition">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-black hover:text-cyan transition">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
