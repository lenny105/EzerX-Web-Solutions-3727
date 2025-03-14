import { motion } from 'framer-motion';

const partners = [
  {
    name: "Northrise University",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    description: "Strategic educational partner for digital innovation"
  },
  {
    name: "Mercy House",
    logo: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
    description: "Collaboration partner for community impact"
  },
  {
    name: "Tech Hub Zambia",
    logo: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    description: "Technology innovation partner"
  },
  {
    name: "Digital Arts Academy",
    logo: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    description: "Creative arts education partner"
  }
];

const Partners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading organizations to deliver exceptional value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;