'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-pink-500 mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>📞 Phone: +44 XXX XXX XXXX</p>
              <p>📱 WhatsApp: +44 XXX XXX XXXX</p>
              <p>📧 Email: contact@example.com</p>
              <p>📍 Location: London, UK</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-pink-500 mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Sunday - Thursday</p>
              <p>8:00 PM - 5:00 AM</p>
              <p>Friday - Saturday</p>
              <p>8:00 AM - 7:00 AM</p>
              <p className="text-sm text-gray-400 mt-2">Models available 24/7</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-pink-500 mb-4">Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>All escorts are 18+</p>
              <p>Discretion guaranteed</p>
              <p>Cash & card payments accepted</p>
              <p>Luxury accommodation available</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} VIP Escorts. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This website is intended for adults only. By entering, you confirm that you are 18+ years old.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 