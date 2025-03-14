import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-center mb-6"
          >
            About EzerX Media
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Transforming the digital landscape through innovative media and technology solutions.
          </motion.p>
        </div>
      </div>

      {/* Vision Mission Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6"
            >
              <FiTarget className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional media and technology solutions that empower businesses and transform communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <FiEye className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Zambia's leading innovative media and technology solutions provider.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <FiHeart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, and commitment to Biblical principles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;