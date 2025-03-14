import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: "Basic Package",
    price: "2,500",
    features: [
      "HD Video Production",
      "Basic Photography",
      "Simple Graphics Design",
      "Social Media Management",
      "5 Hours of Shooting",
    ]
  },
  {
    name: "Professional Package",
    price: "5,000",
    features: [
      "4K Video Production",
      "Advanced Photography",
      "Professional Graphics Design",
      "Social Media Strategy",
      "10 Hours of Shooting",
      "Basic Web Development",
    ]
  },
  {
    name: "Enterprise Package",
    price: "Custom",
    features: [
      "8K Video Production",
      "Commercial Photography",
      "Premium Graphics Design",
      "Full Digital Marketing",
      "Unlimited Shooting Hours",
      "Custom Web Solutions",
      "IT Consultancy",
    ]
  }
];

const Pricing = () => {
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
            Investment & Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Flexible packages tailored to your needs
          </motion.p>
        </div>
      </div>

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-6">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FiCheck className="text-secondary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-full transition-colors duration-200">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;