import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { handleWhatsAppClick } from '../utils/scrollUtils';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const heightInM = Number(height) / 100;
    const weightInKg = Number(weight);
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(Math.round(bmiValue * 10) / 10);
    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 25) setCategory('Normal weight');
    else if (bmiValue < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  const handleGetFitnessPlan = () => {
    const message = `Hello sir, I calculated my BMI as ${bmi} (${category}). I would like to get a personalized fitness plan.`;
    handleWhatsAppClick(false, message);
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-gray-800/90"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            BMI Calculator
          </h2>
          <p className="text-gray-200 text-center mb-12 text-lg">
            Calculate your Body Mass Index (BMI) to get an indication of whether you're a healthy weight for your height.
          </p>

          <motion.div 
            className="glass-effect rounded-2xl border border-gray-700 p-8 md:p-10 hover:border-red-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <form onSubmit={calculateBMI} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="height" className="block text-base font-medium text-gray-200 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Enter your height"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="weight" className="block text-base font-medium text-gray-200 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Enter your weight"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-[1.02]"
              >
                Calculate BMI
              </button>
            </form>

            {bmi !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-8 p-8 glass-effect rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text mb-3">
                    Your BMI: {bmi}
                  </h3>
                  <p className="text-xl text-gray-200">
                    Category: <span className="font-semibold text-red-500">{category}</span>
                  </p>
                </div>
                <div className="mt-8">
                  <p className="mb-4 text-lg text-gray-200">BMI Categories:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-200">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      Underweight: Less than 18.5
                    </li>
                    <li className="flex items-center text-gray-200">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      Normal weight: 18.5 - 24.9
                    </li>
                    <li className="flex items-center text-gray-200">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      Overweight: 25 - 29.9
                    </li>
                    <li className="flex items-center text-gray-200">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      Obese: 30 or greater
                    </li>
                  </ul>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={handleGetFitnessPlan}
                    className="py-4 px-8 rounded-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-red-500/25"
                  >
                    Get Personalized Fitness Plan
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BMICalculator; 