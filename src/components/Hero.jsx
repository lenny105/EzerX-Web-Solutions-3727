import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1601506521793-dc748fc80b67"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Innovative Media & Technology Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Transforming visions into reality through cutting-edge media production
            and technology services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;