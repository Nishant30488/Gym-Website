import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorkoutPlan } from '../types';

const workoutPlans: WorkoutPlan[] = [
  {
    id: 'strength-1',
    name: 'Power Building',
    duration: '8 weeks',
    level: 'Intermediate',
    description: 'Build strength and muscle mass with this comprehensive powerlifting-focused program.',
    exercises: [
      { name: 'Barbell Squat', sets: 5, reps: 5, description: 'Focus on form and progressive overload' },
      { name: 'Bench Press', sets: 5, reps: 5, description: 'Keep shoulders retracted and feet planted' },
      { name: 'Deadlift', sets: 3, reps: 5, description: 'Maintain neutral spine throughout the movement' },
    ],
  },
  {
    id: 'hiit-1',
    name: 'Fat Burn HIIT',
    duration: '4 weeks',
    level: 'Beginner',
    description: 'High-intensity interval training designed for maximum fat burn and cardiovascular health.',
    exercises: [
      { name: 'Burpees', sets: 3, reps: 15, description: 'Explosive movement with full body engagement' },
      { name: 'Mountain Climbers', sets: 3, reps: 30, description: 'Keep core tight and maintain pace' },
      { name: 'Jump Squats', sets: 3, reps: 20, description: 'Land softly and maintain control' },
    ],
  },
  {
    id: 'flex-1',
    name: 'Mobility & Flexibility',
    duration: '6 weeks',
    level: 'Beginner',
    description: 'Improve flexibility and joint mobility with this yoga-inspired program.',
    exercises: [
      { name: 'Sun Salutation', sets: 3, reps: 1, description: 'Flow through each pose mindfully' },
      { name: 'Warrior Sequence', sets: 2, reps: 1, description: 'Focus on alignment and breathing' },
      { name: 'Hip Opening Series', sets: 2, reps: 1, description: 'Hold each pose for 30-60 seconds' },
    ],
  },
  {
    id: 'muscle-1',
    name: 'Muscle Hypertrophy',
    duration: '12 weeks',
    level: 'Advanced',
    description: 'Maximize muscle growth with this high-volume training program.',
    exercises: [
      { name: 'Dumbbell Press', sets: 4, reps: 12, description: 'Control the eccentric phase' },
      { name: 'Pull-ups', sets: 4, reps: 10, description: 'Full range of motion on each rep' },
      { name: 'Romanian Deadlift', sets: 4, reps: 12, description: 'Feel the stretch in hamstrings' },
    ],
  },
];

const WorkoutPlans: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPlans = workoutPlans.filter((plan) => {
    const matchesLevel = selectedLevel === 'all' || plan.level.toLowerCase() === selectedLevel.toLowerCase();
    const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Workout Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our professionally designed workout plans tailored to your fitness level and goals.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="rounded-lg border-gray-300 py-2 px-4 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search plans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 rounded-lg border-gray-300 py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {plan.duration}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${plan.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          plan.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'}`}
                      >
                        {plan.level}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Key Exercises:</h4>
                  {plan.exercises.map((exercise) => (
                    <div key={exercise.name} className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 mb-1">{exercise.name}</h5>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span className="mr-3">{exercise.sets} sets</span>
                        <span>{exercise.reps} reps</span>
                      </div>
                      <p className="text-sm text-gray-600">{exercise.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300">
                    Start Plan
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:border-primary-600 hover:text-primary-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No workout plans match your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutPlans; 