import { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Works", id: "works" },
    { name: "Contact", path: "/contact" },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black/30 md:bg-black/0 absolute w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              whileHover={{ scale: 1.1, color: "#fbbf24" }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() =>
                link.path ? navigate(link.path) : scrollToSection(link.id)
              }
              className="text-xl text-white font-medium"
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-white">
          <a href=""><FaInstagram size={25} /></a>
          <a href=""><FaFacebook size={25} /></a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col items-center absolute top-16 right-0 rounded-md bg-black/50 shadow-lg px-10 py-4 space-y-2"
          >
            {navLinks.map((link) => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={link.name}
                onClick={() =>
                  link.path ? navigate(link.path) : scrollToSection(link.id)
                }
                className="block w-full text-white font-medium"
              >
                {link.name}
              </motion.button>
            ))}
            <div className="flex space-x-4 text-white mt-10">
              <a href=""><FaInstagram size={25} /></a>
              <a href=""><FaFacebook size={25} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;