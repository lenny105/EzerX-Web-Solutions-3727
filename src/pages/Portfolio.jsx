import { motion } from 'framer-motion';

const projects = [
  {
    title: "Corporate Brand Video",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "E-commerce Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },
  {
    title: "Product Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490",
  },
  {
    title: "Brand Identity Design",
    category: "Graphics Design",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
  },
];

const Portfolio = () => {
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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Showcasing our best work in media production and technology solutions
          </motion.p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;