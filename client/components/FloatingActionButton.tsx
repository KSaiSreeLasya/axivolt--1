import { Mail, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+91 9063447838";
  const whatsappNumber = "+919063447838";
  const email = "contact@axivolt.in";

  const actions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      onClick: () => {
        window.open(
          `https://wa.me/${whatsappNumber}?text=Hi%20AXIVOLT,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`,
          "_blank",
        );
      },
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Phone,
      label: "Call Us",
      onClick: () => {
        window.location.href = `tel:${phoneNumber}`;
      },
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      onClick: () => {
        window.location.href = `mailto:${email}`;
      },
      color: "bg-red-500 hover:bg-red-600",
    },
  ];

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
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {/* Action Buttons */}
      {isOpen && (
        <motion.div
          className="absolute bottom-20 right-0 flex flex-col gap-4 mb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => {
                  action.onClick();
                  setIsOpen(false);
                }}
                className={cn(
                  "w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all group relative",
                  action.color,
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={action.label}
              >
                <Icon className="w-6 h-6" />
                <motion.span
                  className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {action.label}
                </motion.span>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all",
          isOpen
            ? "bg-gray-600 text-white hover:bg-gray-700"
            : "bg-cyan text-background hover:bg-yellow-green",
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
      >
        <motion.div
          className="w-6 h-6 flex items-center justify-center"
          animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
        >
          {isOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <MessageCircle className="w-8 h-8" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
