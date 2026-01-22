import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group">
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12 ml-16">
            <Link
              to="/"
              className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-cyan hover:text-yellow-green transition-colors"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

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
                  <div className="px-6 py-3 border-b border-border">
                    <a
                      href="#"
                      className="text-sm text-white hover:text-cyan transition-colors flex items-center justify-between"
                    >
                      Solar
                      <ChevronDown className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Wind
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Energy Storage
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    EV Stations
                  </a>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-cyan transition-colors"
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
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Advisory
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Procurement
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Digital Solutions
                  </a>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-cyan transition-colors"
              >
                Industries
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    industriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Industries Submenu */}
              <div
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
                className={`absolute top-full left-0 mt-0 bg-card border border-border rounded-none w-56 shadow-xl transition-all duration-200 ${
                  industriesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Residential (B2C)
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Commercial (B2B)
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-cyan hover:bg-background/50 transition-colors"
                  >
                    Government (B2G)
                  </a>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-sm font-medium text-white hover:text-cyan transition-colors"
            >
              Careers
            </a>

            <a
              href="#"
              className="text-sm font-medium text-white hover:text-cyan transition-colors"
            >
              About
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block ml-auto">
            <button className="bg-cyan text-background px-6 py-2 rounded font-semibold hover:bg-yellow-green transition-all text-sm">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
