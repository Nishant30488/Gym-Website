import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClassSchedule as ClassScheduleType } from '../types';

const sampleClasses: ClassScheduleType[] = [
  {
    id: '1',
    name: 'Power Yoga',
    trainer: 'Sarah Johnson',
    time: '07:00 AM',
    duration: '60 min',
    maxParticipants: 20,
    currentParticipants: 12,
    level: 'Beginner'
  },
  {
    id: '2',
    name: 'HIIT Training',
    trainer: 'Mike Thompson',
    time: '09:00 AM',
    duration: '45 min',
    maxParticipants: 15,
    currentParticipants: 10,
    level: 'Intermediate'
  },
  {
    id: '3',
    name: 'CrossFit',
    trainer: 'Alex Davis',
    time: '11:00 AM',
    duration: '60 min',
    maxParticipants: 12,
    currentParticipants: 8,
    level: 'Advanced'
  }
];

const ClassSchedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Class Schedule
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join our expert-led fitness classes designed to help you achieve your fitness goals. 
            Book your spot today!
          </p>

          <div className="flex overflow-x-auto mb-8 pb-4 -mx-4 px-4 md:px-0 md:mx-0">
            <div className="flex space-x-2 mx-auto">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 whitespace-nowrap
                    ${selectedDay === day 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

        
          <div className="grid gap-6">
            {sampleClasses.map((classItem) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{classItem.name}</h3>
                      <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(classItem.level)}`}>
                        {classItem.level}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {classItem.time} • {classItem.duration}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {classItem.trainer}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {classItem.currentParticipants}/{classItem.maxParticipants} spots filled
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button
                      className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition-colors duration-300
                        ${classItem.currentParticipants < classItem.maxParticipants
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                      disabled={classItem.currentParticipants >= classItem.maxParticipants}
                    >
                      {classItem.currentParticipants >= classItem.maxParticipants ? 'Class Full' : 'Book Now'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassSchedule; 