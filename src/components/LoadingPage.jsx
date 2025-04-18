import React from "react";
import { motion } from "framer-motion";

const dots = ["#385b34", "#927c57", "#003153"];

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="flex justify-center gap-6">
          {dots.map((color, i) => (
            <motion.span
              key={i}
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: color }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
  );
};

export default LoadingPage;