import React from 'react';
import { motion } from 'framer-motion';

const operatingHours = [
  { day: 'Monday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Thursday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '6:00 AM - 10:00 PM' },
  { day: 'Sunday', hours: '7:00 AM - 9:00 PM' },
];

const LocationAndHours: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Operating Hours</h2>
            <div className="space-y-4">
              {operatingHours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center text-gray-300 py-2 border-b border-gray-700"
                >
                  <span className="font-medium">{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Find Us</h2>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <iframe
                title="Muscle Torture Fitness Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6474313667703!2d77.07986357539901!3d28.52412897546133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b977ee85957%3A0x8ab9ad8a0b3a664a!2sMTF(Unisex%20Gym)!5e0!3m2!1sen!2sin!4v1689842350735!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
            <div className="mt-6 text-gray-300">
              <h3 className="text-xl font-semibold mb-2">Muscle Torture Fitness</h3>
              <p className="mb-4">Plot 1274, Gali No. 11, Kapas Hera Estate, Veer Bazar Gali, Fun N Food Village, New Delhi, Delhi 110037</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.google.com/maps/dir/28.4786688,77.0572288/MTF(Unisex+Gym),+Veer+Bazar+Gali,+Fun+N+Food+Village,+Plot+1274,+Gali+No.+11,+Kapas+Hera+Estate,+New+Delhi,+Delhi+110037/@28.4968048,77.0305136,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d1b977ee85957:0x8ab9ad8a0b3a664a!2m2!1d77.0828955!2d28.52414?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-105 duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationAndHours; 