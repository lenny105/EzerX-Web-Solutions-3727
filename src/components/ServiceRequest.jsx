import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiCalendar } from 'react-icons/fi';

const ServiceRequest = ({ onSubmit }) => {
  const [selectedService, setSelectedService] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const services = [
    { id: 'video', name: 'Video Production', basePrice: 2500 },
    { id: 'photo', name: 'Photography', basePrice: 1500 },
    { id: 'stream', name: 'Live Streaming', basePrice: 2000 },
    { id: 'design', name: 'Graphics Design', basePrice: 1000 },
    { id: 'brand', name: 'Branding', basePrice: 3000 },
  ];

  const handleServiceChange = (e) => {
    const service = services.find(s => s.id === e.target.value);
    setSelectedService(e.target.value);
    setEstimatedPrice(service ? service.basePrice : 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(estimatedPrice);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Request a Service</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Service
          </label>
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Choose a service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <FiCalendar className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Details
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Files (if any)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-1 text-sm text-gray-600">
              Drop files here or click to upload
            </p>
            <input type="file" className="hidden" multiple />
          </div>
        </div>

        {estimatedPrice > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg font-semibold">
              Estimated Base Price: K{estimatedPrice.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600">
              Final price may vary based on specific requirements
            </p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceRequest;