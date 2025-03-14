import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">EzerX</h3>
            <p className="text-gray-300">
              Transforming visions into reality through innovative media and technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Ndola, Zambia</li>
              <li>Phone: +260 969 822 671</li>
              <li>Email: tektonmediatechnology@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} EzerX Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;