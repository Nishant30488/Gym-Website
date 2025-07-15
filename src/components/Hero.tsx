import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection, handleWhatsAppClick } from '../utils/scrollUtils';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    day: '',
    timeSlot: '',
    trainingPlan: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleStartJourney = () => {
    scrollToSection('training-plans');
  };

  const handleBookDemo = () => {
    setIsModalOpen(true);
    setFormData({
      name: '',
      phone: '',
      day: '',
      timeSlot: '',
      trainingPlan: ''
    });
    setFormErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[+\s-]/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.day) {
      errors.day = 'Please select a day';
    }
    if (!formData.timeSlot) {
      errors.timeSlot = 'Please select a time slot';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const message = `Hello sir, I would like to book a free demo session at Muscle Torture Fitness.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Day: ${formData.day}\nPreferred Time: ${formData.timeSlot}\n${formData.trainingPlan ? `Training Plan Interest: ${formData.trainingPlan}` : ''}\n\nPlease help me schedule this session. Thank you!`;
    setIsModalOpen(false);
    handleWhatsAppClick(true, message);
    setFormData({
      name: '',
      phone: '',
      day: '',
      timeSlot: '',
      trainingPlan: ''
    });
  };

  const timeSlots = [
    '6:00 AM - 7:00 AM',
    '7:00 AM - 8:00 AM',
    '8:00 AM - 9:00 AM',
    '9:00 AM - 10:00 AM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM'
  ];

  const trainingPlans = [
    'Strength Training',
    'HIIT Workout',
    'Yoga & Flexibility',
    'CrossFit',
    'Bodyweight Training',
    'Muscle Gain',
    'Weight Loss',
    'Functional Training'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/gym-background.jpg")',
        }}
      />
      
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-gray-900/80 to-gray-800/90" />
      
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-transparent bg-clip-text inline-block"
            >
              UNLEASH
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white inline-block mt-2 sm:mt-4"
            >
              YOUR POTENTIAL
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto px-2"
          >
            Welcome to Muscle Torture Fitness - where limits are meant to be broken. 
            Experience intense training that transforms both body and mind.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <motion.button
              onClick={handleStartJourney}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-base sm:text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-red-500/30"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              onClick={handleBookDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-red-500 text-white rounded-full text-base sm:text-lg font-semibold hover:bg-red-500/10 hover:border-red-400 transition-all duration-300 w-full sm:w-auto hover:shadow-lg hover:shadow-red-500/20"
            >
              Book Free Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center p-4 sm:p-0">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[101]"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg mx-auto z-[102]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-2xl p-5 sm:p-8 border border-gray-800 shadow-xl shadow-red-500/10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white p-2 z-10 bg-gray-800/50 rounded-full transition-all duration-300 hover:bg-red-600/30"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Book Your Free Demo Session</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Experience a personalized demo session with our expert trainers. Fill in the details below and we'll connect you with our team via WhatsApp to confirm your session.
                </p>
                
                <form onSubmit={handleBookDemoSubmit} className="space-y-3 sm:space-y-4">
                <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400`}
                        placeholder="Enter your name"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border ${formErrors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="day" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Preferred Day *
                      </label>
                      <select
                        id="day"
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border ${formErrors.day ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400`}
                      >
                        <option value="">Select a day</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                      </select>
                      {formErrors.day && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.day}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Preferred Time Slot *
                      </label>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border ${formErrors.timeSlot ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400`}
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                      {formErrors.timeSlot && (
                        <p className="mt-1 text-xs sm:text-sm text-red-500">{formErrors.timeSlot}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="trainingPlan" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Interested Training Plan
                      </label>
                      <select
                        id="trainingPlan"
                        name="trainingPlan"
                        value={formData.trainingPlan}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                      >
                        <option value="">Select a training plan (optional)</option>
                        {trainingPlans.map((plan, index) => (
                          <option key={index} value={plan}>{plan}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">What's Included:</h4>
                    <ul className="text-gray-400 space-y-1 sm:space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Facility Tour
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Fitness Assessment
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Training Session
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
                        Nutrition Consultation
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3 sm:space-x-4 mt-5 sm:mt-6">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg py-2 sm:py-3 text-sm sm:text-base font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                    >
                      Book Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 border border-gray-700 text-gray-400 rounded-lg py-2 sm:py-3 text-sm sm:text-base font-semibold hover:border-red-500/50 hover:text-white transition-all duration-300 transform hover:scale-105 hover:bg-red-500/10"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
      </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero; 