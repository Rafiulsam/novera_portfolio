import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';

const MonoPrints = () => {
  const { series } = useParams();

  const selectedWork = worksData.find(
    work => work.title.replace(/\s+/g, '-').toLowerCase() === series
  );

  const [spans, setSpans] = useState({});

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio > 1.3) {
      setSpans(prev => ({ ...prev, [index]: true }));
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section
        className="min-h-[30svh] md:min-h-[75svh] flex justify-end items-center overflow-hidden bg-center md:bg-top md:bg-contain bg-no-repeat relative"
        style={{
          backgroundImage: "url('/monoprint_background.png')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 py-16 px-10 md:pr-16  md:w-1/2 "
        >
          <h1
            className="text-4xl md:text-8xl font-bold mb-4 text-white text-center"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}
          >
            Monoprint
          </h1>
          <p className='text-white text-justify px-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui non repudiandae odio, recusandae facere unde vitae pariatur a mollitia consequuntur ipsam minus amet laboriosam tempora odit possimus minima autem tenetur nemo illum consectetur. Delectus dolor et facilis id sapiente quo quas praesentium, blanditiis maiores! Odit itaque quam obcaecati, aut corporis ex maiores quo ea reprehenderit, distinctio repellendus</p>
        </motion.div>
      </section>
      <section className='flex justify-between p-20'>
        <img src={selectedWork.coverImage} alt="" className='object-contain' />
        <div className='flex flex-col justify-between w-1/2 text-start'>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-10">
              {selectedWork.title}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui non repudiandae odio, recusandae facere unde vitae pariatur a mollitia consequuntur ipsam minus amet laboriosam tempora odit possimus minima autem tenetur nemo illum consectetur. Delectus dolor et
            </p>
          </div>
          <div className='flex gap-4 mt-10 '>
            <img src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='w-48 h-48 rounded-full' /><img src="https://t4.ftcdn.net/jpg/05/03/97/21/360_F_503972121_PInSa2AKaQF2crSq5n2IcqiQcFaxvdFl.jpg" alt="" className='w-48 h-48 rounded-full' /><img src="https://t3.ftcdn.net/jpg/02/44/56/70/360_F_244567019_SRb5i27LHFzblS6dpOhDUu8nsdRgmgh5.jpg" alt="" className='w-48 h-48 rounded-full' />
          </div>
        </div>
      </section>

      {/* Artworks */}
      <section className="p-6 md:p-20 bg-gray-100 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {selectedWork.artWorks && selectedWork.artWorks.length > 0 ? (
          selectedWork.artWorks.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${spans[i] ? "sm:col-span-2" : ""
                }`}
            >
              <img
                src={img}
                alt={`Artwork ${i + 1}`}
                onLoad={(e) => handleImageLoad(e, i)}
                className="w-full h-full object-cover"
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-red-700 font-bold">
            No artworks found for this series.
          </div>
        )}
      </section>
    </div>
  );
};

export default MonoPrints;