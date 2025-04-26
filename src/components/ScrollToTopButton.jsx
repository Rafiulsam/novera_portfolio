import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiArrowUpOutline } from "react-icons/ti";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (!aboutSection) return;

            const aboutTop = aboutSection.getBoundingClientRect().top;

            if (aboutTop < window.innerHeight / 2) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

    };

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full shadow-lg "
                >
                    <TiArrowUpOutline title="Go to Top" size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;