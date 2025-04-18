// components/LazyImage.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const LazyImage = ({ src, alt, onLoad, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={loaded ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`overflow-hidden rounded-lg shadow-md ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e); // optional custom callback
        }}
        onContextMenu={(e) => e.preventDefault()}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

export default LazyImage;
