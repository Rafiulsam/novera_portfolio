import React from 'react';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';
const MonoPrints = () => {
  return (
    <div>
      <section
        className="min-h-[30svh] md:min-h-[75svh] flex items-center overflow-hidden bg-center md:bg-top md:bg-contain bg-no-repeat relative"
        style={{
          backgroundImage: "url('monoprint_background.png')",
          backgroundAttachment: 'fixed',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 px-4 w-full ">
          <h1 className=" text-4xl md:text-8xl font-bold mb-4 text-white text-end"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}>Monoprint</h1>
        </motion.div>
      </section>
        <section className="p-6 md:p-20 bg-gray-100 min-h-screen">
         
        </section>
    </div>
  );
};

export default MonoPrints;