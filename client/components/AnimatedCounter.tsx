import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2.5,
  className = "text-3xl md:text-4xl font-bold",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const numValue = typeof value === "string" ? parseInt(value) : value;

  useEffect(() => {
    const fractionDigits = value.toString().includes("+") ? 0 : 0;
    let start = 0;
    const increment = numValue / (duration * 60);
    let animationFrameId: number;

    const animate = () => {
      start += increment;
      if (start < numValue) {
        setCount(Math.floor(start));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, numValue, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className={className}>
        {count}
        {suffix}
      </p>
    </motion.div>
  );
}
