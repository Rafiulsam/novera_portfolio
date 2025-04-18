import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { AnimatePresence, motion } from 'framer-motion';

const ImageZoomModal = ({ imgSrc, onClose }) => {
  return (
    <AnimatePresence>
      {imgSrc && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative">
            <Zoom>
              <img
                src={imgSrc}
                alt="Zoomed Artwork"
                className="max-h-[90vh] max-w-full rounded shadow-lg select-none"
                onContextMenu={(e) => e.preventDefault()}
              />
            </Zoom>
            <button
              onClick={onClose}
              className="absolute top-[-30px] right-[-30px] text-white text-4xl font-bold"
            >
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageZoomModal;