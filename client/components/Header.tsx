import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSolutionSubmenu, setActiveSolutionSubmenu] = useState<
    string | null
  >(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex items-center h-24 gap-8">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ffe5527c1828944a38faa27a1f5c6efe7%2F00fa53301075421e90acc8403136e6ca?format=webp&width=200&height=300"
              alt="AXIVOLT Logo"
              className="h-24 w-auto"
            />
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
              </Link>

              {/* Solutions Submenu */}
              <div
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className={`absolute top-full left-0 mt-0 bg-card border border-border rounded-none shadow-xl transition-all duration-200 overflow-visible z-50 ${
                  solutionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                style={{ width: "auto", minWidth: "224px" }}
              >
                <div className="py-2">
                  {/* Solar with Submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSolutionSubmenu("solar")}
                    onMouseLeave={() => setActiveSolutionSubmenu(null)}
                  >
                    <Link
                      to="/solutions/solar"
                      className="flex items-center justify-between px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors border-b border-border"
                    >
                      Solar
                      <ChevronDown className="w-4 h-4 rotate-180" />
                    </Link>

                    {/* Solar Subcategories */}
                    <div
                      className={`absolute top-0 bg-card border border-border rounded-sm w-56 shadow-2xl transition-all duration-200 z-50 ${
                        activeSolutionSubmenu === "solar"
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                      style={{
                        left: "100%",
                        pointerEvents:
                          activeSolutionSubmenu === "solar" ? "auto" : "none",
                        marginLeft: "0px",
                      }}
                    >
                      <div className="py-2">
                        <Link
                          to="/solutions/solar/residential"
                          className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors border-b border-border last:border-b-0"
                        >
                          Residential (B2C)
                        </Link>
                        <Link
                          to="/solutions/solar/commercial"
                          className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors border-b border-border last:border-b-0"
                        >
                          Commercial (B2B)
                        </Link>
                        <Link
                          to="/solutions/solar/government"
                          className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors last:border-b-0"
                        >
                          Government (B2G)
                        </Link>
                      </div>
                    </div>
                  </div>

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
              <Link
                to="/services"
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
              </Link>

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
