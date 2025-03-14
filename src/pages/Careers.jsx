import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const positions = [
  {
    title: "Intern Videographer",
    type: "Internship",
    description: "Looking for a creative videographer to join our media production team. You'll work on various projects from corporate videos to social media content.",
    requirements: [
      "Basic understanding of video production",
      "Familiarity with video editing software",
      "Strong creative vision",
      "Good communication skills"
    ]
  },
  {
    title: "Intern Graphics Designer",
    type: "Internship",
    description: "Seeking a talented graphics designer to create compelling visual content for our clients across different platforms.",
    requirements: [
      "Knowledge of Adobe Creative Suite",
      "Understanding of design principles",
      "Strong portfolio of work",
      "Attention to detail"
    ]
  },
  {
    title: "Intern Web & Software Developer",
    type: "Internship",
    description: "Join our technology team to build innovative web and software solutions for our clients.",
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Understanding of modern web frameworks",
      "Problem-solving skills",
      "Eagerness to learn new technologies"
    ]
  }
];

const Careers = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Build your career with Zambia's innovative media and technology company
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <FiBriefcase className="text-secondary text-2xl mr-3" />
                  <div>
                    <h3 className="text-xl font-bold">{position.title}</h3>
                    <span className="text-gray-600">{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{position.description}</p>
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-full transition-colors duration-200">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;