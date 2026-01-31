import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solarOpen, setSolarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeSolutionSubmenu, setActiveSolutionSubmenu] = useState<
    string | null
  >(null);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-cyan/20 shadow-md">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        <div className="flex items-center h-32 gap-4">
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
            >
              <motion.img
                src="https://cdn.builder.io/api/v1/image/assets%2Ffe5527c1828944a38faa27a1f5c6efe7%2F00fa53301075421e90acc8403136e6ca?format=webp&width=200&height=300"
                alt="AXIVOLT Logo"
                className="h-24 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.div
                className="absolute inset-0 -z-10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(163, 230, 53, 0.2))" }}
              ></motion.div>
            </Link>
          </motion.div>

          {/* Navigation - Centered */}
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
                className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors relative group py-2"
              >
                Home
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-yellow-green group-hover:w-full transition-all duration-300"
                  layoutId="nav-underline"
                ></motion.span>
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
                className="flex items-center gap-1 text-sm font-medium text-cyan hover:text-yellow-green transition-colors relative group py-2"
              >
                Solutions
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-yellow-green group-hover:w-full transition-all duration-300"
                ></motion.span>
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
                        whileHover={{ backgroundColor: "rgba(0, 188, 212, 0.05)" }}
                      >
                        <Link
                          to="/solutions/solar"
                          className="flex items-center justify-between px-6 py-3 text-sm text-black hover:text-cyan transition-colors border-b border-cyan/10 group relative"
                        >
                          <span className="relative">
                            Solar
                            <motion.span
                              className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"
                            ></motion.span>
                          </span>
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
                              { to: "/solutions/solar/residential", label: "Residential (B2C)" },
                              { to: "/solutions/solar/commercial", label: "Commercial (B2B)" },
                              { to: "/solutions/solar/government", label: "Government (B2G)" },
                            ].map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ backgroundColor: "rgba(0, 188, 212, 0.05)" }}
                              >
                                <Link
                                  to={item.to}
                                  className="block px-6 py-3 text-sm text-black hover:text-cyan transition-colors border-b border-cyan/10 last:border-b-0 group relative"
                                >
                                  <span className="relative">
                                    {item.label}
                                    <motion.span
                                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"
                                    ></motion.span>
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {[
                      { to: "/solutions/wind", label: "Wind" },
                      { to: "/solutions/energy-storage", label: "Energy Storage" },
                      { to: "/solutions/ev-stations", label: "EV Stations" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ backgroundColor: "rgba(0, 188, 212, 0.05)" }}
                      >
                        <Link
                          to={item.to}
                          className="block px-6 py-3 text-sm text-black hover:text-cyan transition-colors border-b border-cyan/10 last:border-b-0 group relative"
                        >
                          <span className="relative">
                            {item.label}
                            <motion.span
                              className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"
                            ></motion.span>
                          </span>
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
            >
              <Link
                to="/services"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-cyan hover:text-yellow-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-green after:transition-all after:duration-300 hover:after:w-full"
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
                  className="absolute top-full left-0 mt-0 bg-card border border-border rounded-lg w-56 shadow-xl z-50"
                >
                  <div className="py-2">
                    <Link
                      to="/advisory"
                      className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors rounded-t-lg"
                    >
                      Advisory
                    </Link>
                    <Link
                      to="/procurement"
                      className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors border-y border-border"
                    >
                      Procurement
                    </Link>
                    <Link
                      to="/digital-solutions"
                      className="block px-6 py-3 text-sm text-black hover:text-cyan hover:bg-background/50 transition-colors rounded-b-lg"
                    >
                      Digital Solutions
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              custom={3}
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/industry"
                className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-green after:transition-all after:duration-300 hover:after:w-full"
              >
                Industry
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/careers"
                className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-green after:transition-all after:duration-300 hover:after:w-full"
              >
                Careers
              </Link>
            </motion.div>

            <motion.div
              custom={5}
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to="/about"
                className="text-sm font-medium text-cyan hover:text-yellow-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-green after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </Link>
            </motion.div>
          </nav>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/contact"
                className="border border-cyan text-cyan px-5 py-2 rounded font-semibold hover:bg-cyan/10 transition-all text-sm inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/quote"
                className="bg-cyan text-background px-6 py-2 rounded font-semibold hover:bg-yellow-green transition-all text-sm inline-block shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
