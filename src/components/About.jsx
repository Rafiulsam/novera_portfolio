import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="relative overflow-hidden min-h-screen flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 px-6 md:px-16 py-10 md:py-20 bg-gradient-to-b from-[#385b34] to-[#927c57]"
  >
    {/* Text Section */}
    <div className="max-w-xl text-center md:text-left pt-10 md:pt-0">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-6 text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-white/90 text-base md:text-lg leading-relaxed md:pr-12 text-left "
      >
        <p>
          You have found your way into a quiet space where I share my journey through monoprints and traditional printmaking. Though I’ve explored various mediums, this gallery focuses on the tactile and expressive nature of print-based works — where textures, layers, and marks tell their own stories.
        </p>
        <br />
        <p>
          With a Bachelor’s and Master’s degree in Fine Arts (Printmaking), my practice is grounded in emotion, technique, and storytelling. 
          </p>
          <p>
          I explore themes of movement, nature, and personal memory, allowing each piece to reflect moments both deeply personal and universally felt.
        </p>
        <br />
        <p>
          Welcome to the garden of my creations — you may also consider this place as my gallery.
        </p>
      </motion.div>
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
        className="h-full w-full relative translate-x-6 md:translate-x-20 rounded-l-3xl"
      />
    </motion.div>
  </section>
);

export default About;