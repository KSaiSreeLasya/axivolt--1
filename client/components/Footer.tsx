import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-card border-t border-cyan/20 py-16 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-green/10 rounded-full filter blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="col-span-1 lg:col-span-2" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Link to="/" className="flex items-center gap-3 group">
                <motion.img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffe5527c1828944a38faa27a1f5c6efe7%2F00fa53301075421e90acc8403136e6ca?format=webp&width=200&height=300"
                  alt="AXIVOLT Logo"
                  className="h-24 w-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </Link>
            </motion.div>
            <motion.p
              className="text-lg font-bold mb-3 bg-gradient-to-r from-cyan to-cyan/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              AXIVOLT GREEN ENERGY PVT.LTD.
            </motion.p>
            <motion.p
              className="text-black text-sm leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Leading the transition to sustainable energy with innovative
              renewable solutions for a cleaner, greener future.
            </motion.p>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 className="font-bold mb-4 text-yellow-green text-sm uppercase" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              Services
            </motion.h4>
            <ul className="space-y-2">
              {[
                { to: "/solutions/solar", label: "Solar Energy" },
                { to: "/solutions/wind", label: "Wind Power" },
                { to: "/solutions/energy-storage", label: "Energy Storage" },
                { to: "#", label: "Smart Grid" },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <Link
                    to={link.to}
                    className="text-black text-sm hover:text-cyan transition-colors relative group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"
                    ></motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 className="font-bold mb-4 text-yellow-green text-sm uppercase" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              Company
            </motion.h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/advisory", label: "Advisory" },
                { to: "/careers", label: "Careers" },
                { to: "#", label: "Sectors" },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <Link
                    to={link.to}
                    className="text-black text-sm hover:text-cyan transition-colors relative group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"
                    ></motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 className="font-bold mb-4 text-yellow-green text-sm uppercase" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              Resources
            </motion.h4>
            <ul className="space-y-2">
              {[
                { to: "#", label: "Resources" },
                { to: "/digital-solutions", label: "Digital Solutions" },
                { to: "/procurement", label: "Procurement" },
                { to: "/contact", label: "Support" },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <Link
                    to={link.to}
                    className="text-black text-sm hover:text-cyan transition-colors relative group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"
                    ></motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 className="font-bold mb-4 text-yellow-green text-sm uppercase" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
              Legal
            </motion.h4>
            <ul className="space-y-2">
              {[
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms-of-service", label: "Terms of Service" },
                { to: "/cookie-policy", label: "Cookie Policy" },
                { to: "/compliance", label: "Compliance" },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <Link
                    to={link.to}
                    className="text-black text-sm hover:text-cyan transition-colors relative group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-300"
                    ></motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="border-t border-cyan/20 pt-8 flex flex-col md:flex-row items-center justify-between" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
          <motion.p className="text-black text-xs" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
            &copy; 2024 AXIVOLT. All rights reserved.
          </motion.p>
          <motion.div className="flex gap-6 mt-6 md:mt-0" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }}>
            {[
              { href: "https://www.facebook.com/AxivoltGreenEnergy/?rdid=lzUX5nBf2lTLnktE", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { href: "https://www.linkedin.com/company/axivoltgreen/", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" },
              { href: "https://www.instagram.com/axivoltgreenenergy/", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-cyan transition-colors group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="sr-only">{social.label}</span>
                <svg className="w-6 h-6 group-hover:text-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
