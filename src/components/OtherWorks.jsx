// import React, { useEffect, useState } from 'react';
// import otherWorksData from '../data/otherWorksData';
// import Marquee from 'react-fast-marquee';
// import { motion, AnimatePresence } from 'framer-motion';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import { optimizeImageUrl } from '../utils/optimizeImageUrl';
// import 'react-photo-view/dist/react-photo-view.css';
// import { FaTimes } from 'react-icons/fa';

// const OtherWorks = () => {
//     const [selectedWork, setSelectedWork] = useState(null);

//     useEffect(() => {
//         if (selectedWork) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "";
//         }

//         return () => {
//             document.body.style.overflow = "";
//         };
//     }, [selectedWork]);
//     useEffect(() => {
//         const handleEsc = (e) => {
//             if (e.key === "Escape") {
//                 setSelectedWork(null);
//             }
//         };

//         window.addEventListener("keydown", handleEsc);
//         return () => window.removeEventListener("keydown", handleEsc);
//     }, []);


//     return (
//         <section id="other-works" className="p-6 pb-10 min-h-screen bg-gray-100">
//             <h1 className="text-4xl md:text-5xl font-bold mb-20 text-center">Other Works</h1>

//             <Marquee speed={80} autoFill pauseOnHover={true}>
//                 {otherWorksData.map((art, i) => (
//                     <div
//                         key={i}
//                         onClick={() => setSelectedWork(art)}
//                         className="m-6 flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform duration-200 hover:scale-105"
//                     >
//                         <img src={art.coverImage} alt="" className="rounded-lg mb-4" />
//                         <div>
//                             <h2 className="text-xl font-semibold">{art.title}</h2>
//                             <p className="text-gray-600">{art.media}</p>
//                         </div>
//                     </div>
//                 ))}
//             </Marquee>

//             {/* Modal for displaying more artworks */}
//             <AnimatePresence>
//                 {selectedWork && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 bg-black bg-opacity-80 z-50 mx-auto p-20 overflow-auto cursor-pointer"
//                     >
//                         <button
//                             className="text-white text-2xl fixed top-6 right-10"
//                             onClick={() => setSelectedWork(null)}
//                         >
//                             <FaTimes />
//                         </button>

//                         <h2 className="text-white text-3xl mb-6 font-bold ">{selectedWork.title}</h2>
//                         <PhotoProvider>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
//                                 {selectedWork.artWorks.map((img, i) => (
//                                     <PhotoView key={i} src={optimizeImageUrl(img, "zoom")}>
//                                         <img
//                                             src={optimizeImageUrl(img, "preview")}
//                                             alt={`Artwork ${i + 1}`}
//                                             className="rounded-lg max-w-xs object-cover transition-transform duration-200 hover:scale-105"
//                                             onContextMenu={(e) => e.preventDefault()}
//                                         />
//                                     </PhotoView>))}
//                             </div>
//                         </PhotoProvider>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default OtherWorks;

import React, { useEffect, useState } from 'react';
import otherWorksData from '../data/otherWorksData';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { optimizeImageUrl } from '../utils/optimizeImageUrl';
import 'react-photo-view/dist/react-photo-view.css';
import { FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OtherWorks = () => {
    const [selectedWork, setSelectedWork] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handleContextMenu = (e) => {
        e.preventDefault();
      };

    useEffect(() => {
        document.body.style.overflow = selectedWork ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [selectedWork]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setSelectedWork(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <section id="other-works" className="md:px-20 pb-10 min-h-screen bg-gray-100">
            <motion.h1
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold mb-20 text-center">Other Works</motion.h1>

            <Slider {...settings}>
                {otherWorksData.map((art, i) => (
                    <div
                        key={i}
                        className="p-4" // spacing between slides
                        onMouseDown={() => setIsDragging(false)}
                        onMouseMove={() => setIsDragging(true)}
                        onMouseUp={() => {
                            if (!isDragging) setSelectedWork(art);
                        }}
                    >
                        <div className=" flex flex-col justify-between bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-transform duration-200 hover:scale-105 w-[300px] h-[450px] mx-auto">
                            <img
                                onContextMenu={(e) => e.preventDefault()}
                                src={art.coverImage} alt="" className="rounded-lg mb-4 object-cover" />
                            <div>
                                <h2 className="text-xl font-semibold">{art.title}</h2>
                                <p className="text-gray-600">{art.media}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 mx-auto p-10 overflow-auto"
                    >
                        <button
                            className="text-white text-2xl fixed top-6 right-10"
                            onClick={() => setSelectedWork(null)}
                        >
                            <FaTimes />
                        </button>

                        <h2 className="text-white text-3xl mb-6 font-bold">{selectedWork.title}</h2>
                        <PhotoProvider
                            onVisibleChange={(visible) => {
                                if (visible) {
                                    document.addEventListener("contextmenu", handleContextMenu);
                                } else {
                                    document.removeEventListener("contextmenu", handleContextMenu);
                                }
                            }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                                {selectedWork.artWorks.map((img, i) => (
                                    <PhotoView key={i} src={optimizeImageUrl(img, 'zoom')}>
                                        <img
                                            src={optimizeImageUrl(img, 'preview')}
                                            alt={`Artwork ${i + 1}`}
                                            className="rounded-lg max-w-xs object-cover transition-transform duration-200 hover:scale-105"
                                            onContextMenu={(e) => e.preventDefault()}
                                        />
                                    </PhotoView>
                                ))}
                            </div>
                        </PhotoProvider>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default OtherWorks;