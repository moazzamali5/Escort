'use client';

import { motion } from 'framer-motion';

const services = [
  { name: 'O-Level', description: 'Oral sex' },
  { name: 'COB', description: 'Come on body' },
  { name: 'DFK', description: 'Deep french kissing' },
  { name: '69', description: '69 sex position' },
  { name: 'Erotic massage', description: 'Sensual body massage' },
  { name: 'GFE', description: 'Girlfriend experience' },
  { name: 'Sex toys', description: 'Various toys available' },
  { name: 'Domination', description: 'BDSM and role play' },
  { name: 'LT', description: 'Long Time; Usually overnight' },
  { name: 'Couples', description: 'Services for couples' },
  { name: 'Striptease', description: 'Private dance shows' },
  { name: 'A-Level', description: 'Anal sex' },
];

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-500"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-pink-500 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 