import { motion } from 'framer-motion';
import { FiVideo, FiCamera, FiMonitor, FiLayout, FiCloud, FiShield } from 'react-icons/fi';
import ServiceRequest from '../components/ServiceRequest';

const services = [
  {
    icon: <FiVideo />,
    title: "Video Production",
    description: "Professional video production services for commercials, corporate videos, and events."
  },
  {
    icon: <FiCamera />,
    title: "Photography",
    description: "High-quality photography services for commercial and corporate needs."
  },
  {
    icon: <FiLayout />,
    title: "Graphics Design",
    description: "Creative graphic design solutions for brand identity and marketing materials."
  },
  {
    icon: <FiMonitor />,
    title: "Web Development",
    description: "Custom website development and digital solutions."
  },
  {
    icon: <FiCloud />,
    title: "Cloud Solutions",
    description: "Cloud infrastructure and management services."
  },
  {
    icon: <FiShield />,
    title: "Cybersecurity",
    description: "Comprehensive cybersecurity solutions and consulting."
  }
];

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive media and technology solutions tailored to your needs
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-secondary text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Request a Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tell us about your project and we'll help you bring it to life
            </p>
          </div>
          <ServiceRequest />
        </div>
      </section>
    </div>
  );
};

export default Services;