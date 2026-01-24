import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex items-center h-20 gap-8">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="flex items-center gap-1">
              <svg
                className="w-8 h-8"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 40 100 L 70 40 L 100 100 L 85 100 L 75 75 L 55 75 L 65 100 Z"
                  fill="#048286"
                />
                <path
                  d="M 50 120 Q 70 100 100 115"
                  stroke="#048286"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 130 50 L 160 80 L 150 130 Q 140 140 130 135 L 115 100 Z"
                  fill="#afe332"
                />
                <path
                  d="M 145 60 Q 160 75 155 110"
                  stroke="#afe332"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-12 flex-1 justify-center">
            <Link
              to="/"
              className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <Link
                to="/solutions"
                className="flex items-center gap-1 text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Solutions Submenu */}
              <div
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className={`absolute top-full left-0 mt-0 bg-card border border-border rounded-none w-56 shadow-xl transition-all duration-200 ${
                  solutionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <Link
                    to="/solutions/solar"
                    className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors border-b border-border"
                  >
                    Solar
                  </Link>
                  <Link
                    to="/solutions/wind"
                    className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors border-b border-border"
                  >
                    Wind
                  </Link>
                  <Link
                    to="/solutions/energy-storage"
                    className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors border-b border-border"
                  >
                    Energy Storage
                  </Link>
                  <Link
                    to="/solutions/ev-stations"
                    className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    EV Stations
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Services Submenu */}
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute top-full left-0 mt-0 bg-card border border-border rounded-none w-56 shadow-xl transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <Link
                    to="/advisory"
                    className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Advisory
                  </Link>
                  <Link
                    to="/procurement"
                    className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Procurement
                  </Link>
                  <Link
                    to="/digital-solutions"
                    className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Digital Solutions
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/industry"
              className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
            >
              Industry
            </Link>

            <Link
              to="/careers"
              className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
            >
              Careers
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="border border-cyan text-cyan px-5 py-2 rounded font-semibold hover:bg-cyan/10 transition-all text-sm inline-block"
            >
              Contact Us
            </Link>
            <Link
              to="/quote"
              className="bg-cyan text-background px-6 py-2 rounded font-semibold hover:bg-yellow-green transition-all text-sm inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
