import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleWhatsAppClick } from '../utils/scrollUtils';


const trainers = [
  {
    id: 1,
    name: 'Arjun Kapoor',
    role: 'Head Trainer',
    specialization: 'Strength & Conditioning',
    experience: '10+ Years',
    image: '/images/trainers/arjun.jpg',
    certifications: ['NSCA-CSCS', 'ACE-CPT'],
    description: 'Former national-level athlete with expertise in strength training and athletic performance.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Yoga & Wellness Expert',
    specialization: 'Yoga & Meditation',
    experience: '8+ Years',
    image: '/images/trainers/priya.jpg',
    certifications: ['RYT-500', 'Mindfulness Coach'],
    description: 'Certified yoga instructor specializing in alignment-based practice and stress management.'
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    role: 'Senior Fitness Coach',
    specialization: 'Functional Training',
    experience: '12+ Years',
    image: '/images/trainers/rajesh.jpg',
    certifications: ['NASM-CPT', 'FMS Level 2'],
    description: 'Expert in functional movement and corrective exercise techniques.'
  },
  {
    id: 4,
    name: 'Neha Patel',
    role: 'Nutrition Specialist',
    specialization: 'Sports Nutrition',
    experience: '6+ Years',
    image: '/images/trainers/neha.jpg',
    certifications: ['ISSA Nutritionist', 'Precision Nutrition'],
    description: 'Specializes in personalized nutrition plans and body transformation programs.'
  }
];

const TrainerProfiles: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    trainingGoal: '',
    preferredTime: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleBookSession = (trainerId: number) => {
    setSelectedTrainer(trainerId);
    setIsModalOpen(true);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      trainingGoal: '',
      preferredTime: '',
    });
    setFormErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear error when user starts typing 
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
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const trainer = trainers.find(t => t.id === selectedTrainer);
    
    
    const message = `Hello, I would like to book a training session with ${trainer?.name}.
    
Name: ${formData.name}
Phone: ${formData.phone}
Training Goal: ${formData.trainingGoal}
Preferred Time: ${formData.preferredTime}

Please help me schedule this session. Thank you!`;
    
    
    setIsModalOpen(false);
    handleWhatsAppClick(true, message);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20" id="trainers">
     
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/gym-background.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-gray-900/80 to-gray-800/90" />

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            Meet Our Expert Trainers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
            Our certified fitness professionals are dedicated to helping you achieve your fitness goals with personalized guidance and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="trainer-card glass-effect rounded-xl overflow-hidden group flex flex-col"
            >
              <div className="relative pt-[100%] sm:pt-[125%] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer-image absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
                    {trainer.name}
                  </h3>
                  <p className="text-red-500 font-medium mb-1 sm:mb-2 text-sm sm:text-base">{trainer.role}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">{trainer.specialization}</p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center text-gray-300 text-xs sm:text-sm">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {trainer.experience} Experience
                    </div>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {trainer.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-red-500/10 rounded-full text-xs text-red-400 hover:bg-red-500/30 hover:text-red-300 transition-all duration-300 hover:scale-105"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm">{trainer.description}</p>
                </div>

                <button 
                  onClick={() => handleBookSession(trainer.id)}
                  className="w-full mt-4 sm:mt-6 py-2 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 text-sm sm:text-base"
                >
                  Book Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="relative w-full max-w-md mx-auto z-[102]"
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
                {selectedTrainer !== null && (
                  <>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 pr-8">Book a Session with {trainers.find(t => t.id === selectedTrainer)?.name}</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-4">
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
                        <label htmlFor="trainingGoal" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                          Training Goal
                        </label>
                        <textarea
                          id="trainingGoal"
                          name="trainingGoal"
                          rows={3}
                          value={formData.trainingGoal}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                          placeholder="Describe your fitness goals"
                        />
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                          Preferred Time
                        </label>
                        <input
                          type="text"
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                          placeholder="e.g. Weekday evenings, Saturday morning"
                        />
                      </div>

                      <div className="flex space-x-3 sm:space-x-4 mt-5 sm:mt-6 pt-2">
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
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrainerProfiles; 