import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';
import LoadingPage from '../components/LoadingPage';
import { optimizeImageUrl } from '../utils/optimizeImageUrl';
import { FaTimes } from 'react-icons/fa';
const MonoPrints = () => {
  const { series } = useParams();

  const selectedWork = worksData.find(
    work => work.title.replace(/\s+/g, '-').toLowerCase() === series
  );

  const [spans, setSpans] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio > 1.3) {
      setSpans(prev => ({ ...prev, [index]: true }));
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = -e.deltaY || e.wheelDelta;
    setZoomScale(prev =>
      Math.min(Math.max(prev + delta * 0.0015, 1), 3.5) // limit zoom between 1x and 3.5x
    );
  };
  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [zoomedImage]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [series]);

  if (isLoading) return <LoadingPage />;

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
      <section className='md:flex justify-between p-10 md:p-20'>
        <div className='transition-transform duration-200 hover:scale-105'>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={() => setZoomedImage(selectedWork.coverImage)}
            src={selectedWork.coverImage} alt="" className='object-contain cursor-pointer' />
        </div>
        <div className='flex flex-col justify-between md:w-1/2 text-start'>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-4 mt-10">
              {selectedWork.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui non repudiandae odio, recusandae facere unde vitae pariatur a mollitia consequuntur ipsam minus amet laboriosam tempora odit possimus minima autem tenetur nemo illum consectetur. Delectus dolor et
            </motion.p>
          </div>
          <div className='flex gap-4 mt-10'>
            {selectedWork.artTextures && selectedWork.artTextures.map((texture, i) => (
              <div key={i} className='transition-transform duration-200 hover:scale-105' >
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src={texture}
                  onClick={() => setZoomedImage(texture)}
                  alt={`Texture ${i + 1}`}
                  className="w-20 h-20 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-300 shadow-lg cursor-pointer"
                />
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* Artworks */}
      <section className="p-6 md:p-20 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {selectedWork.artWorks && selectedWork.artWorks.length > 0 ? (
          selectedWork.artWorks.map((img, i) => (
            <div className={`transition-transform duration-200 hover:scale-105 col-span-1 ${spans[i] ? "sm:col-span-2" : ""}`} key={i}>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='bg-white rounded-lg shadow-lg w-full h-full overflow-hidden relative cursor-pointer'
                onClick={() => setZoomedImage(img)}
              >
                <img
                  src={optimizeImageUrl(img, "preview")}
                  alt={`Artwork ${i + 1}`}
                  onLoad={(e) => handleImageLoad(e, i)}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          ))
        ) : (
          <div className="col-span-4 flex flex-col items-center justify-center text-center min-h-[40vh] gap-6">
            <h1 className='text-red-700 font-bold text-2xl '>Sorry, no artworks available for this series.</h1>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 font-semibold text-white rounded-full transition duration-300"
            >
              Go Back
            </button>
          </div>
        )}
      </section>
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center overflow-hidden"
          onWheel={(e) => {
            e.preventDefault(); // 👈 stops scroll from affecting the page
            handleWheel(e);
          }}

        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            onClick={() => {
              setZoomedImage(null);
              setZoomScale(1); // reset zoom
            }}
          >
            <FaTimes />
          </button>

          <motion.img
            src={optimizeImageUrl(zoomedImage, "zoom")}
            alt="Zoomed Artwork"
            className="max-h-[90vh] max-w-5xl object-contain rounded-lg shadow-xl cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: zoomScale }}
            transition={{ duration: 0.2 }}
            drag={zoomScale > 2}
            dragConstraints={{ top: -1000, bottom: 1000, left: -1000, right: 1000 }}
          />
        </div>
      )}
    </div>
  );
};

export default MonoPrints;