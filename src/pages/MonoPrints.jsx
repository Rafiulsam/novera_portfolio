import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import worksData from '../data/worksData';
import { motion } from 'framer-motion';
import LoadingPage from '../components/LoadingPage';
import { optimizeImageUrl } from '../utils/optimizeImageUrl';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { BsArrowLeft } from 'react-icons/bs';

const MonoPrints = () => {
  const { series } = useParams();
  const selectedWork = worksData.find(
    work => work.title.replace(/\s+/g, '-').toLowerCase() === series
  );

  const [spans, setSpans] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio > 1.3) {
      setSpans(prev => ({ ...prev, [index]: true }));
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
        style={{
          backgroundImage: "url('/monoprint_background.png')",
          backgroundAttachment: 'fixed',
        }}
      >
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ad labore perferendis libero sunt, omnis molestiae accusantium temporibus voluptate eveniet at, voluptas, accusamus quaerat blanditiis fuga expedita? Id recusandae quasi hic odio. Veniam aspernatur fugiat placeat tenetur. Tempora esse amet minima similique voluptas natus obcaecati consectetur a,
          </p>
        </motion.div>
      </section>

      {/* Cover Image and Info */}
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
          <div className='transition-transform duration-200 hover:scale-105'>
            <PhotoView src={optimizeImageUrl(selectedWork.coverImage, "zoom")}>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                src={optimizeImageUrl(selectedWork.coverImage, "preview")}
                alt=""
                className='h-full object-contain cursor-pointer'
              />
            </PhotoView>
          </div>
        </PhotoProvider>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque debitis laboriosam fuga suscipit. Et, accusantium earum enim, beatae, facere eligendi delectus aperiam nulla reiciendis incidunt ipsum culpa illum maiores. Quidem voluptas eaque autem corrupti provident consectetur repudiandae, sint tenetur quis qui adipisci debitis, ab architecto tempora nam ex cupiditate ea accusantium odit nobis. Sequi possimus unde laborum. Perspiciatis et illo vitae voluptate ut, deleniti nesciunt, cum mollitia explicabo totam ipsa?
            </motion.p>
          </div>
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
                <div key={i} className='transition-transform duration-200 hover:scale-105'>
                  <PhotoView src={texture}>
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      onContextMenu={(e) => e.preventDefault()}
                      src={texture}
                      alt={`Texture ${i + 1}`}
                      className="w-20 h-20 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-300 shadow-lg cursor-pointer"
                    />
                  </PhotoView>
                </div>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section >

      {/* Artworks */}
      < section className="p-6 md:p-20 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" >
        <PhotoProvider
          onVisibleChange={(visible) => {
            if (visible) {
              document.addEventListener("contextmenu", handleContextMenu);
            } else {
              document.removeEventListener("contextmenu", handleContextMenu);
            }
          }}
        >

          {selectedWork.artWorks.map((img, i) => (
            <div key={i} className={`transition-transform duration-200 hover:scale-105 col-span-1 ${spans[i] ? "sm:col-span-2" : ""}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='bg-white rounded-lg shadow-lg w-full h-full overflow-hidden relative cursor-pointer'
              >
                <PhotoView src={optimizeImageUrl(img, "zoom")}>
                  <img
                    src={optimizeImageUrl(img, "preview")}
                    alt={`Artwork ${i + 1}`}
                    onLoad={(e) => handleImageLoad(e, i)}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </PhotoView>
              </motion.div>

            </div>
          ))}
        </PhotoProvider>
      </section >
      <div className='bg-gray-100 px-10 pb-20'>
        <button
          onClick={() => window.history.back()}
          className='px-10 flex items-center gap-5 font-thin tracking-[5px]'> <BsArrowLeft /> Go Back</button>
      </div>
    </div >
  );
};

export default MonoPrints;