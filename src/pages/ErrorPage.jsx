import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#385b34] to-black flex flex-col items-center justify-center text-white px-4">
      <motion.h1
        className="text-[10rem] md:text-[12rem] font-extrabold leading-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-2xl md:text-3xl text-center max-w-xl mb-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Uh-oh! The page you're looking for wandered off into the void.
      </motion.p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
        ⬅ Back to Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 text-sm text-center px-4"
      >
        <p>Lost in space, but still stylish 🚀</p>
      </motion.div>
    </div>
  );
};

export default ErrorPage;