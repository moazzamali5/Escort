'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I book an escort?',
    answer: 'Our booking system is simple and easy to use. Simply browse our gallery to choose your preferred companion, then contact us via phone or WhatsApp. Our friendly and discreet receptionists will assist you with all the details and any special requirements you may have.'
  },
  {
    question: 'What services are offered?',
    answer: 'Each escort has their own profile detailing their specific services. We display these services as requested by the escorts themselves. Please note that all services are subject to the escort\'s discretion and should be discussed directly at the beginning of the booking.'
  },
  {
    question: 'Can I make requests about what the escorts wear?',
    answer: 'Yes, most escorts have an extensive wardrobe and enjoy dressing up for special requests. Please inform us of any specific requirements when booking, and we will pass these on to your chosen companion. Note that specialty costumes may need to be arranged in advance.'
  },
  {
    question: 'Are the gallery pictures genuine?',
    answer: 'Yes, we require all escorts to provide genuine and recent pictures. We verify the authenticity of all photos to ensure what you see is what you get. We maintain high standards of honesty and transparency in our service.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-500"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-pink-500">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 