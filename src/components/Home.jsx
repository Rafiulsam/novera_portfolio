import { motion } from "framer-motion";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('background.JPG')",
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-4">
        <h1 className="text-8xl font-bold mb-4"
        style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)" }}>Hi, I'm Novera</h1>
        <p className="text-xl text-gray-200">A visual storyteller through art</p>
      </motion.div>
    </section>
  );
};

export default Home;