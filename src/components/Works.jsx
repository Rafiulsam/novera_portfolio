import React from 'react';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';

const Works = () => {
    return (
        <section id="works" className="p-6 md:p-20 bg-gray-100 min-h-screen">
            < motion.h1
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='text-4xl md:text-5xl font-bold mb-20'>Gallery</motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
                {worksData.map((art, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={art.image} alt={art.title} className="w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{art.title}</h3>
                            <p className="text-sm text-gray-600">{art.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;