import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSolutionSubmenu, setActiveSolutionSubmenu] = useState<
    string | null
  >(null);

  const navVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -15,
      transition: { duration: 0.2 },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-cyan/20 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 md:h-24 gap-4">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <Link
              to="/"
              className="flex items-center gap-3 group flex-shrink-0 relative"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets%2F3c998b3ff9204c11af8b6ffa6ad40d16%2F30fb58eade114c97aa78f9ff333e7cab?format=webp&width=800&height=1200"
                alt="AXIVOLT Logo"
                className="h-16 md:h-20 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute inset-0 -z-10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(163, 230, 53, 0.2))",
                }}
              ></motion.div>
            </Link>
          </motion.div>

          {/* Navigation - Centered (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <motion.div
              custom={0}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/"
                className="text-lg font-medium text-cyan hover:text-yellow-green transition-colors py-2"
              >
                Home
              </Link>
            </motion.div>

            {/* Solutions Dropdown */}
            <motion.div
              custom={1}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/solutions"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className="flex items-center gap-1 text-lg font-medium text-cyan hover:text-yellow-green transition-colors py-2"
              >
                Solutions
                <motion.div
                  animate={{ rotate: solutionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </Link>

              {/* Solutions Submenu */}
              {solutionsOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-1 bg-card border border-cyan/30 rounded-xl shadow-2xl overflow-visible z-50 backdrop-blur-sm"
                  style={{ width: "auto", minWidth: "224px" }}
                >
                  <div className="py-2">
                    {/* Solar with Submenu */}
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveSolutionSubmenu("solar")}
                      onMouseLeave={() => setActiveSolutionSubmenu(null)}
                    >
                      <motion.div
                        whileHover={{
                          backgroundColor: "rgba(0, 188, 212, 0.05)",
                        }}
                      >
                        <Link
                          to="/solutions/solar"
                          className="flex items-center justify-between px-6 py-3 text-sm text-black hover:text-cyan transition-colors border-b border-cyan/10 group relative"
                        >
                          <motion.span className="absolute inset-0 bg-cyan opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-300"></motion.span>
                          <span className="relative">Solar</span>
                          <motion.div
                            animate={{
                              rotate:
                                activeSolutionSubmenu === "solar" ? -180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4 rotate-180 group-hover:text-cyan" />
                          </motion.div>
                        </Link>
                      </motion.div>

                      {/* Solar Subcategories */}
                      {activeSolutionSubmenu === "solar" && (
                        <motion.div
                          variants={menuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-0 bg-card border border-cyan/30 rounded-lg w-56 shadow-2xl z-50 backdrop-blur-sm"
                          style={{ left: "100%", marginLeft: "4px" }}
                        >
                          <div className="py-2">
                            {[
                              {
                                to: "/solutions/solar/residential",
                                label: "Residential (B2C)",
                              },
                              {
                                to: "/solutions/solar/commercial",
                                label: "Commercial (B2B)",
                              },
                              {
                                to: "/solutions/solar/government",
                                label: "Government (B2G)",
                              },
                            ].map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{
                                  backgroundColor: "rgba(0, 188, 212, 0.05)",
                                }}
                              >
                                <Link
                                  to={item.to}
                                  className="block px-6 py-3 text-sm text-black hover:text-cyan transition-colors border-b border-cyan/10 last:border-b-0 group relative"
                                >
                                  <motion.span className="absolute inset-0 bg-cyan opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-300"></motion.span>
                                  <span className="relative">{item.label}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {[
                      { to: "/solutions/wind", label: "Wind" },
                      {
                        to: "/solutions/energy-storage",
                        label: "Energy Storage",
                      },
                      { to: "/solutions/ev-stations", label: "EV Stations" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{
                          backgroundColor: "rgba(0, 188, 212, 0.05)",
                        }}
                      >
                        <Link
                          to={item.to}
                          className="block px-6 py-3 text-sm text-black hover:text-cyan transition-colors border-b border-cyan/10 last:border-b-0 group relative"
                        >
                          <motion.span className="absolute inset-0 bg-cyan opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-300"></motion.span>
                          <span className="relative">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Services Dropdown */}
            <motion.div
              custom={2}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/services"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center gap-1 text-lg font-medium text-cyan hover:text-yellow-green transition-colors py-2"
              >
                Services
                <motion.div
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </Link>

              {/* Services Submenu */}
              {servicesOpen && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 bg-card border border-cyan/30 rounded-xl w-56 shadow-2xl z-50 backdrop-blur-sm"
                >
                  <div className="py-2">
                    {[
                      { to: "/advisory", label: "Advisory" },
                      { to: "/procurement", label: "Procurement" },
                      { to: "/digital-solutions", label: "Digital Solutions" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{
                          backgroundColor: "rgba(0, 188, 212, 0.05)",
                        }}
                      >
                        <Link
                          to={item.to}
                          className="block px-6 py-3 text-sm text-black hover:text-cyan transition-colors border-b border-cyan/10 last:border-b-0 group relative"
                        >
                          <motion.span className="absolute inset-0 bg-cyan opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-300"></motion.span>
                          <span className="relative">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {[
              { custom: 3, to: "/industry", label: "Industry" },
              { custom: 4, to: "/careers", label: "Careers" },
              { custom: 5, to: "/about", label: "About" },
            ].map((item) => (
              <motion.div
                key={item.to}
                custom={item.custom}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={item.to}
                  className="text-lg font-medium text-cyan hover:text-yellow-green transition-colors py-2"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cyan hover:text-yellow-green transition-colors flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="hidden sm:flex items-center gap-2 md:gap-4 flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/contact"
                className="border-2 border-cyan text-cyan px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:border-yellow-green hover:text-yellow-green transition-all text-sm md:text-base inline-block relative group overflow-hidden"
              >
                <span className="relative">Contact</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/quote"
                className="bg-gradient-to-r from-cyan to-yellow-green text-background px-4 md:px-7 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base inline-block shadow-lg hover:shadow-2xl transition-all relative group overflow-hidden hover:from-yellow-green hover:to-cyan"
              >
                <span className="relative">Quote</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-cyan/20 bg-background/98 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Navigation Items */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-cyan hover:text-yellow-green hover:bg-cyan/10 rounded-lg transition-all"
              >
                Home
              </Link>

              {/* Solutions Menu */}
              <div>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="w-full text-left px-4 py-3 text-cyan hover:text-yellow-green hover:bg-cyan/10 rounded-lg transition-all flex items-center justify-between"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {solutionsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {/* Solar Submenu */}
                    <div>
                      <button
                        onClick={() => setSolarOpen(!solarOpen)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-cyan hover:bg-cyan/10 rounded-lg transition-all flex items-center justify-between"
                      >
                        <span>Solar</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            solarOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {solarOpen && (
                        <div className="pl-4 space-y-1 mt-2 border-l border-cyan/30">
                          <Link
                            to="/solutions/solar/residential"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-xs text-gray-600 hover:text-cyan transition-all"
                          >
                            Residential (B2C)
                          </Link>
                          <Link
                            to="/solutions/solar/commercial"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-xs text-gray-600 hover:text-cyan transition-all"
                          >
                            Commercial (B2B)
                          </Link>
                          <Link
                            to="/solutions/solar/government"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-xs text-gray-600 hover:text-cyan transition-all"
                          >
                            Government (B2G)
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Other Solutions */}
                    {[
                      { to: "/solutions/wind", label: "Wind" },
                      {
                        to: "/solutions/energy-storage",
                        label: "Energy Storage",
                      },
                      { to: "/solutions/ev-stations", label: "EV Stations" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan hover:bg-cyan/10 rounded-lg transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Menu */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left px-4 py-3 text-cyan hover:text-yellow-green hover:bg-cyan/10 rounded-lg transition-all flex items-center justify-between"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {[
                      { to: "/advisory", label: "Advisory" },
                      { to: "/procurement", label: "Procurement" },
                      { to: "/digital-solutions", label: "Digital Solutions" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-cyan hover:bg-cyan/10 rounded-lg transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              {[
                { to: "/industry", label: "Industry" },
                { to: "/careers", label: "Careers" },
                { to: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-cyan hover:text-yellow-green hover:bg-cyan/10 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-cyan/20 space-y-3 mt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full border-2 border-cyan text-cyan px-4 py-3 rounded-lg font-semibold hover:border-yellow-green hover:text-yellow-green transition-all text-center text-sm"
                >
                  Contact Us
                </Link>
                <Link
                  to="/quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan to-yellow-green text-background px-4 py-3 rounded-lg font-semibold text-center text-sm hover:from-yellow-green hover:to-cyan transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
