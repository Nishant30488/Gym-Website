import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="relative py-20" id="about">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/gym-background.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-gray-900/80 to-gray-800/90" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Founded in 2020, Elite Fitness Studio began with a simple vision: to redefine fitness excellence in the heart of Delhi. What started as a boutique gym in South Delhi has blossomed into one of the capital's most prestigious fitness destinations.
              </p>
              <p className="text-lg">
                We believe that true transformation comes through dedication, expert guidance, and a supportive community. Our state-of-the-art facilities and certified trainers are committed to helping you achieve your fitness aspirations in a welcoming, motivating environment.
              </p>
            </div>

            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="glass-effect p-6 rounded-xl text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-2">500+</h3>
                <p className="text-gray-300">Active Members</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-2">10+</h3>
                <p className="text-gray-300">Expert Trainers</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-2">50+</h3>
                <p className="text-gray-300">Classes Weekly</p>
              </div>
              <div className="glass-effect p-6 rounded-xl text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-2">95%</h3>
                <p className="text-gray-300">Success Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-red-500">Our Mission</h3>
            <p className="text-xl text-gray-300 mb-8">
              To inspire and empower individuals to reach their peak fitness potential through expert guidance, innovative training methods, and a supportive community atmosphere.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="p-2 bg-red-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Professional Training</h4>
                  <p className="text-gray-300">Certified experts providing personalized guidance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-red-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Modern Equipment</h4>
                  <p className="text-gray-300">State-of-the-art facilities and latest fitness technology</p>
                </div>
                </div>

              <div className="flex items-start gap-4">
                <span className="p-2 bg-red-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Community Support</h4>
                  <p className="text-gray-300">A motivating environment for achieving your goals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 