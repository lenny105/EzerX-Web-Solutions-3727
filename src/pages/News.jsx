import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const newsItems = [
  {
    title: "EzerX Media Partners with Northrise University for Digital Innovation",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    excerpt: "EzerX Media announces strategic partnership with Northrise University to enhance digital learning and media production capabilities.",
    category: "Partnerships"
  },
  {
    title: "Successful Completion of Mercy House Documentary Project",
    date: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    excerpt: "Our team completed a touching documentary showcasing the impactful work of Mercy House in the community.",
    category: "Projects"
  },
  {
    title: "EzerX Launches Youth Digital Skills Program",
    date: "February 20, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    excerpt: "New initiative aims to empower Zambian youth with essential digital media and technology skills.",
    category: "Community"
  },
  {
    title: "Innovation Award at Tech Summit Zambia",
    date: "February 5, 2024",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
    excerpt: "EzerX Media recognized for innovative contributions to Zambia's digital transformation.",
    category: "Awards"
  }
];

const News = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Stay updated with our latest projects and achievements
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FiCalendar className="text-secondary mr-2" />
                    <span className="text-gray-600">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                    <button className="text-secondary hover:text-secondary-light transition-colors duration-200 flex items-center">
                      Read More <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;