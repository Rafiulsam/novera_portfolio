import React, { useState } from 'react';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { optimizeImageUrl } from '../utils/optimizeImageUrl';
import { FaImages } from 'react-icons/fa6';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {worksData.map((art, i) => (
            <div  className={`transition duration-200 transform hover:-translate-y-2 group bg-white rounded-lg shadow-lg overflow-hidden relative ${spans[i] ? "sm:col-span-2" : ""
            }`} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className='h-full'
               >
                <Link
                  to={`/monoprints/${art.title.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <FaImages size={25} className='text-white absolute right-3 top-2'></FaImages>
                  <img
                    src={optimizeImageUrl(art.coverImage)}
                    alt={art.title}
                    onLoad={(e) => handleImageLoad(e, i)}
                    onContextMenu={(e) => e.preventDefault()}
                    loading='lazy'
                    className="md:w-full md:h-full object-cover"
                  />
                  <div className="hidden absolute bottom-0 left-0 w-full h-1/3 bg-[#003153] bg-opacity-75 text-gray-300 px-6 py-4 transition duration-200 opacity-0 group-hover:opacity-100 md:block pb-5">
                    <h2 className="text-xl text-white font-semibold">{art.title}</h2>
                    <p className="text-md text-gray-300">{art.series}</p>
                    <p className="text-md text-gray-300 mt-5">Click to view more</p>
                  </div>
                  {/* Mobile View */}
                  <div className="md:hidden bg-[#003153]  text-gray-300 px-6 py-4 flex flex-col justify-end ">
                    <h2 className="text-xl text-white font-semibold">{art.title}</h2>
                    <p className="text-md text-gray-300">{art.series}</p>
                    <p className="text-md text-gray-300 mt-5">Click to view more</p>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;