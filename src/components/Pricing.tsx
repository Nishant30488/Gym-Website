import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { handleGetStartedClick, handleWhatsAppClick } from '../utils/scrollUtils';
import { MembershipPlan } from '../types';

const plans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 1000,
    duration: 'month',
    features: [
      'Access to gym facilities',
      'Basic equipment usage',
      'Locker room access',
      '2 group classes per month',
      'Fitness assessment',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 1500,
    duration: 'month',
    features: [
      'All Basic features',
      'Unlimited group classes',
      '1 personal training session/month',
      'Nutrition consultation',
      'Access to premium equipment',
      'Mobile app access',
    ],
    isPopular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 2000,
    duration: 'month',
    features: [
      'All Pro features',
      '4 personal training sessions/month',
      'Monthly body composition analysis',
      'Custom meal planning',
      'Recovery zone access',
      'Guest passes (2/month)',
      'Priority class booking',
    ],
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Choose Your Path
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include access to our state-of-the-art facilities.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex items-center mx-4 h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              style={{ backgroundColor: isAnnual ? '#DC2626' : '#374151' }}
            >
              <span
                className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1.5 text-red-500 font-medium">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`glass-effect rounded-2xl overflow-visible border ${
                plan.isPopular ? 'border-red-500' : 'border-gray-700'
              } hover:border-red-500/50 transition-all duration-300 group relative flex flex-col h-full`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-auto whitespace-nowrap">
                  <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-lg shadow-red-500/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight gradient-text">
                    ₹{isAnnual ? Math.floor(plan.price * 0.8).toLocaleString() : plan.price.toLocaleString()}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-400">/{plan.duration}</span>
                </div>
                <p className="mt-6 text-gray-400">
                  Perfect for {plan.name === 'Basic' ? 'beginners' : plan.name === 'Pro' ? 'regular gym-goers' : 'serious athletes'}
                  </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start group">
                      <div className="flex-shrink-0 w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-300">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                      />
                    </svg>
                      </div>
                      <span className="ml-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
              </div>

              <div className="p-6 pt-0">
              <button
                  onClick={() => handleGetStartedClick(plan.name)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 
                    ${plan.isPopular 
                      ? 'bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25' 
                      : 'glass-effect text-white border border-gray-700 hover:border-red-500 hover:text-red-500 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/10'
                }`}
              >
                Get Started
              </button>
            </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            All plans include access to basic gym facilities and equipment.
            <br />
            Need a custom plan? <button 
              onClick={() => handleWhatsAppClick(false, "Hello sir, I'm interested in discussing a custom membership plan.")} 
              className="text-red-500 font-medium hover:text-red-400 transition-colors duration-300">Contact us</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 