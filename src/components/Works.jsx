import React, { useState } from 'react';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Works = () => {
  const [spans, setSpans] = useState({});

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio > 1.3) {
      setSpans(prev => ({ ...prev, [index]: true }));
    }
  };

  return (
    <section id="works" className="p-6 md:p-20 bg-gray-100 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
      >
        My Works
      </motion.h1>
      {/* Monoprints */}
      <div className='border-2 border-gray-300 rounded-lg p-6 md:p-10 bg-white shadow-lg'>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {worksData.map((art, i) => (
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                key={i}
                className={`group bg-white rounded-lg shadow-lg overflow-hidden relative ${spans[i] ? "sm:col-span-2" : ""
                }`}
                >
              <Link
                to={`/monoprints/${art.title.replace(/\s+/g, '-').toLowerCase()}`}
                
                
              >
                <img
                  src={art.coverImage}
                  alt={art.title}
                  onLoad={(e) => handleImageLoad(e, i)}
                  onContextMenu={(e) => e.preventDefault()}
                  loading='lazy'
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#003153] bg-opacity-75 text-gray-300 px-6 py-4 transition duration-200 opacity-0 group-hover:opacity-100 flex flex-col justify-end pb-14">
                  <h2 className="text-xl text-white font-semibold">{art.title}</h2>
                  <p className="text-md text-gray-300">{art.series}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;