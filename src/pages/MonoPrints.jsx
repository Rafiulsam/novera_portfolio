import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';
import LoadingPage from '../components/LoadingPage';
import { optimizeImageUrl } from '../utils/optimizeImageUrl';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { BsArrowLeft } from 'react-icons/bs';
import FoldableDescription from '../components/FoldableDescription';

const MonoPrints = () => {
  const { series } = useParams();
  const selectedWork = worksData.find(
    work => work.title.replace(/\s+/g, '-').toLowerCase() === series
  );

  const [spans, setSpans] = useState({});
  const [tallImages, setTallImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/monoprint_background.png";
    img.onload = () => {
      setBgLoaded(true);
    };
  }, []);

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio > 1.3) {
      setSpans(prev => ({ ...prev, [index]: true }));
    }
    if (aspectRatio < 0.5) {
      setTallImages(prev => ({ ...prev, [index]: true }));
    }
  };


  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [series]);

  if (isLoading) return <LoadingPage />;

  return (
    <div>
      {/* Header */}
      <section
        className="min-h-[30svh] md:min-h-[75svh] flex justify-end items-center overflow-hidden bg-center md:bg-top md:bg-contain bg-no-repeat relative"
      >
         {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ${bgLoaded ? "blur-0" : "blur-md"}`}
        style={{
          backgroundImage: "url('/monoprint_background.png')",
          backgroundAttachment: 'fixed'
        }}
      ></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-30" />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 py-16 px-10 md:pr-16 md:w-1/2"
        >
          <h1 className="text-4xl md:text-8xl font-bold mb-4 text-white text-center"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}>
            Monoprint
          </h1>
          <p className='text-white text-justify px-1'>
            Monoprint is the art of the unexpected. Each piece is a one-of-a-kind impression—never to be replicated, even by the artist themselves. Created by layering ink or paint onto a surface and transferring it to paper, monoprinting captures the beauty of spontaneity and texture. It’s where control meets chance, and every mark tells a story of the moment it was made.
          </p>
        </motion.div>
      </section>

      {/* Cover Image */}
      <section className='md:flex justify-between p-10 md:p-20'>
        <PhotoProvider
          onVisibleChange={(visible) => {
            if (visible) {
              document.addEventListener("contextmenu", handleContextMenu);
            } else {
              document.removeEventListener("contextmenu", handleContextMenu);
            }
          }}
        >
          <div className='transition-transform duration-200 hover:scale-105 md:w-1/2'>
            <PhotoView src={optimizeImageUrl(selectedWork.coverImage, "zoom")}>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                src={optimizeImageUrl(selectedWork.coverImage, "preview")}
                alt={selectedWork.title}
                className=" rounded-lg object-contain object-center cursor-pointer md:h-[80vh] md:max-w-[80vh]"
              />
            </PhotoView>
          </div>
        </PhotoProvider>
        {/* Text Section */}
        <div className='flex flex-col justify-between items-center md:w-1/2'>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=''
          >
            <h1 className="text-4xl md:text-5xl font-bold mt-10">
              {selectedWork.title}
            </h1>
            <p><small><i>Artist Statement
            </i></small></p>
            <FoldableDescription description={selectedWork.description} />
          </motion.div>
          <PhotoProvider
            onVisibleChange={(visible) => {
              if (visible) {
                document.addEventListener("contextmenu", handleContextMenu);
              } else {
                document.removeEventListener("contextmenu", handleContextMenu);
              }
            }}
          >
            <div className='flex gap-4 mt-10'>
              {selectedWork.artTextures?.map((texture, i) => (
                <div key={i} className="transition-transform duration-200 hover:scale-105">
                  <PhotoView src={texture}>
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      onContextMenu={(e) => e.preventDefault()}
                      src={texture}
                      alt={`Texture ${i + 1}`}
                      className={`w-20 h-20 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-300 shadow-lg cursor-pointer transition-all duration-700 ${bgLoaded ? "blur-0" : "blur-md"}`}
                    />
                  </PhotoView>
                </div>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section >

      {/* Artworks */}
      < section className={`p-6 md:p-20 bg-gray-100 ${selectedWork.artWorks?.length < 3 ? "flex gap-10 justify-center items-center" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"}`} >
        <PhotoProvider
          onVisibleChange={(visible) => {
            if (visible) {
              document.addEventListener("contextmenu", handleContextMenu);
            } else {
              document.removeEventListener("contextmenu", handleContextMenu);
            }
          }}
        >

          {selectedWork.artWorks?.map((img, i) => (
            <div key={i} className={`transition-transform duration-200 hover:scale-105 col-span-1 ${spans[i] ? "sm:col-span-2" : ""}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='bg-white rounded-lg shadow-lg overflow-hidden relative md:h-[60vh] cursor-pointer'
              >
                <PhotoView 
                src={optimizeImageUrl(img, "zoom")}
                height={200}
                >
                  <img
                    src={optimizeImageUrl(img, "preview")}
                    alt={`Artwork ${i + 1}`}
                    onLoad={(e) => handleImageLoad(e, i)}
                    onContextMenu={(e) => e.preventDefault()}
                    className={`md:w-full md:h-full rounded-lg ${
                      tallImages[i] ? "object-contain object-center bg-gray-100  ": "object-cover "
                    }`}
                    loading='lazy'
                    draggable={false}
                  />
                </PhotoView>
              </motion.div>

            </div>
          ))}
        </PhotoProvider>
      </section >
      <div className='bg-gray-100 px-6 pb-20'>
        <button
          onClick={() => window.history.back()}
          className='md:px-14 flex items-center gap-5 font-thin tracking-[5px]'> <BsArrowLeft /> Go Back</button>
      </div>
    </div >
  );
};

export default MonoPrints;