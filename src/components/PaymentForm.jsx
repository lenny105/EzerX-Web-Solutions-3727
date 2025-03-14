import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCreditCard, FiLock } from 'react-icons/fi';

const PaymentForm = ({ amount = 0 }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Payment Details</h3>
        <div className="flex items-center text-green-600">
          <FiLock className="mr-2" />
          <span className="text-sm">Secure Payment</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            className={`flex-1 py-2 px-4 rounded-lg border ${
              paymentMethod === 'card'
                ? 'bg-primary text-white'
                : 'border-gray-300'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            Credit/Debit Card
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-lg border ${
              paymentMethod === 'bank'
                ? 'bg-primary text-white'
                : 'border-gray-300'
            }`}
            onClick={() => setPaymentMethod('bank')}
          >
            Bank Transfer
          </button>
        </div>
      </div>

      {paymentMethod === 'card' ? (
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <FiCreditCard className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Name on card"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Bank Transfer Details</h4>
            <p>Bank: First National Bank (FNB)</p>
            <p>Account Number: 63010036225</p>
            <p>Account Name: EzerX Media</p>
            <p>Reference: Your Name/Company</p>
          </div>
        </div>
      )}

      <div className="mt-8">
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between">
            <span>Amount to Pay:</span>
            <span className="font-bold">K{amount.toLocaleString()}</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-6 rounded-full transition-colors duration-200"
        >
          {paymentMethod === 'card' ? 'Pay Now' : 'Confirm Payment'}
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;