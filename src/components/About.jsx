import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="relative overflow-hidden min-h-screen flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 px-6 md:px-16 py-10 md:py-20 bg-gradient-to-b from-[#385b34] to-[#927c57]"
  >
    {/* Text Section */}
    <div className="max-w-3xl text-center md:text-left pt-10 md:pt-0">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-6 text-white"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-white/90 text-base md:text-lg leading-relaxed md:pr-12"
      >
        I'm an artist who loves exploring emotion, nature, and movement through
        different mediums — from digital illustrations to traditional oils. This
        space is my digital sketchbook and gallery.
      </motion.p>
    </div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      
    >
      <img
        src="picture.JPG"
        alt="About Me"
        className="h-[500px] md:h-full relative translate-x-6 md:translate-x-20 rounded-l-3xl"
      />
    </motion.div>
  </section>
);

export default About;