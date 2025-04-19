import React from 'react';
import otherWorksData from '../data/otherWorksData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const OtherWorks = () => {

    return (
        <section id="other-works" className="p-6 pb-10 min-h-screen bg-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold mb-20 text-center">Other Works</h1>
                <Marquee speed={50} autoFill={true} pauseOnHover={true}>
                    {otherWorksData.map((art, i) => (
                        <Link  key={i} className="m-10 flex flex-col justify-be bg-white rounded-lg shadow-lg p-6 transition-transform duration-200 hover:scale-105">
                            <img src={art.coverImage} alt="" className="rounded-lg mb-4" />
                            <div>
                                <h2 className="text-xl font-semibold">{art.title}</h2>
                                <p className="text-gray-600">{art.media}</p>
                            </div>
                        </Link>
                    ))}
                </Marquee>
            
        </section>
    );
};

export default OtherWorks;