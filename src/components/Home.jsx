import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "background.JPG";
    img.onload = () => {
      setBgLoaded(true);
    };
  }, []);

  return (
    <section id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center text-white text-center"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ${bgLoaded ? "blur-0" : "blur-md"}`}
        style={{
          backgroundImage: "url('background.JPG')",
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 h-full"/>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 px-4"
      >
        <h1
          className="text-8xl font-bold mb-4"
          style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
        >
          Hi, I'm Novera
        </h1>
        <p className="text-xl text-gray-200">A visual storyteller through art</p>
      </motion.div>
    </section>
  );
};

export default Home;
