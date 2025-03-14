import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import { FiAward, FiCamera, FiCode } from 'react-icons/fi';

const features = [
  {
    icon: <FiCamera className="w-8 h-8" />,
    title: 'Media Production',
    description: 'Professional video production, photography, and live streaming services.',
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Technology Solutions',
    description: 'Cutting-edge web development and IT consultancy services.',
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: 'Excellence',
    description: 'Committed to delivering high-quality solutions with integrity.',
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Why Choose EzerX
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine creativity, technology, and strategic thinking to deliver
              transformative solutions for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-secondary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />
    </div>
  );
};

export default Home;