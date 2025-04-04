import { motion } from 'framer-motion';

interface ContactPopupProps {
  onClose: () => void;
}

export function ContactPopup({ onClose }: ContactPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-gray-800 rounded-lg p-6 max-w-md w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-pink-500">Contact Information</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-700 rounded-lg p-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-pink-600 p-2 rounded-full">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Phone</p>
                <p className="text-white">+44 XXX XXX XXXX</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-pink-600 p-2 rounded-full">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <p className="text-gray-300 font-medium">WhatsApp</p>
                <p className="text-white">+44 XXX XXX XXXX</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-pink-600 p-2 rounded-full">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Email</p>
                <p className="text-white">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="bg-pink-600 p-2 rounded-full">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Location</p>
                <p className="text-white">Central London, UK</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-pink-600 p-2 rounded-full">
                <span className="text-xl">⏰</span>
              </div>
              <div>
                <p className="text-gray-300 font-medium">Operating Hours</p>
                <div className="text-white space-y-1">
                  <p>Sun-Thu: 8:00 PM - 5:00 AM</p>
                  <p>Fri-Sat: 8:00 AM - 7:00 AM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm space-y-2">
            <p>✓ Models available 24/7</p>
            <p>✓ Instant booking confirmation</p>
            <p>✓ Discreet and professional service</p>
            <p>Please mention you found us on our website when contacting.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 