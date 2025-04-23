import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FoldableDescription = ({ description }) => {
  const [fold, setFold] = useState(true);

  const renderFormattedText = (children) =>
    children.map((chunk, i) => {
      let textNode = <>{chunk.text}</>;

      if (chunk.bold) textNode = <strong key={i}>{textNode}</strong>;
      if (chunk.italic) textNode = <em key={i}>{textNode}</em>;

      return <span key={i}>{textNode}</span>;
    });

  return (
    <div className="text-gray-800 mt-4 leading-relaxed space-y-4">
      {fold ? (
        <>
          <p>
            {renderFormattedText(description[0].children)}
            {" "}
            {description.length > 1 && (<span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setFold(false)}
            >
              See More
            </span>)}
          </p>
        </>
      ) : (
        <>
          <AnimatePresence>
            {description.map((para, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, delay: index * 0.05 }}
              >
                {renderFormattedText(para.children)}
              </motion.p>
            ))}
          </AnimatePresence>
          <motion.span
            className="text-blue-600 cursor-pointer hover:underline block"
            onClick={() => setFold(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: description.length * 0.05 }}
          >
            See Less
          </motion.span>
        </>
      )}
    </div>
  );
};

export default FoldableDescription;