import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';

const teamMembers = [
  {
    name: "Leonard F. Nyimbili",
    position: "Founder & CEO",
    image: "/leonard-nyimbili.jpg",
    bio: "Leonard is a visionary leader with extensive experience in media production and technology. He founded EzerX with the mission to transform the digital landscape in Zambia.",
    linkedin: "#"
  },
  {
    name: "Dayna Voza",
    position: "Creative Director & Marketing Head",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    bio: "Dayna leads our creative and marketing initiatives, bringing innovative strategies and creative solutions to our clients.",
    linkedin: "#"
  },
  {
    name: "Costa Manda",
    position: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Costa oversees all technical operations and ensures the delivery of high-quality technical solutions to our clients.",
    linkedin: "#"
  },
  {
    name: "Chipo Nachali",
    position: "Operations Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Chipo ensures smooth operation of all company activities and project management.",
    linkedin: "#"
  },
  {
    name: "Ayana Mwenesongole",
    position: "Technology Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    bio: "Ayana leads our technology initiatives and innovations, driving digital transformation for our clients.",
    linkedin: "#"
  }
];

const Team = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Our Leadership Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Meet the visionaries behind EzerX Media
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-1/3">
                  {member.name === "Leonard F. Nyimbili" ? (
                    <img
                      src="/leonard-nyimbili.jpg"
                      alt="Leonard F. Nyimbili"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary-light transition-colors duration-200"
                    >
                      <FiLinkedin size={24} />
                    </a>
                    <a
                      href={`mailto:contact@ezerx.com`}
                      className="text-primary hover:text-primary-light transition-colors duration-200"
                    >
                      <FiMail size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;