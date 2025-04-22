// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const FoldableDescription = ({ description }) => {
//   const [fold, setFold] = useState(true);

//   return (
//     <div className="text-gray-800 mt-4 leading-relaxed space-y-4">
//       <p>{description[0]}</p>

//       <AnimatePresence initial={false}>
//         {!fold && (
//           <motion.div
//             key="full-desc"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="space-y-4 overflow-hidden"
//           >
//             {description.slice(1).map((para, index) => (
//               <p key={index}>{para}</p>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <span
//         className="text-blue-600 cursor-pointer hover:underline inline-block mt-2"
//         onClick={() => setFold((prev) => !prev)}
//       >
//         {fold ? "See More" : "See Less"}
//       </span>
//     </div>
//   );
// };

// export default FoldableDescription;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FoldableDescription = ({ description }) => {
  const [fold, setFold] = useState(true);

  return (
    <div className="text-gray-800 mt-4 leading-relaxed space-y-4">
      {fold ? (
        <>
          <p>{description[0]}... <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => setFold(false)}
          >
            See More
          </span></p>
          
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {para}
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
