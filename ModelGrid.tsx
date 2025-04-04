'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ContactPopup } from './ContactPopup';

// Define the models data directly in the file with flat image structure
const models = [
  {
    name: "Angela",
    details: "Age: 22 | Height: 169cm | Build: Skinny",
    images: ["Angela_1.jpg", "Angela_2.jpg", "Angela_3.jpg", "Angela_4.jpg"]
  },
  {
    name: "Jessica",
    details: "Age: 19 | Height: 158cm | Build: Skinny",
    images: ["Jessica_1.jpg", "Jessica_2.jpg", "Jessica_3.jpg"]
  },
  {
    name: "Veronica",
    details: "Age: 24 | Height: 170cm | Build: Slim",
    images: ["Veronica_1.jpg", "Veronica_2.jpg", "Veronica_3.jpg"]
  },
  {
    name: "Candy",
    details: "Age: 27 | Height: 166cm | Build: Slim",
    images: ["Candy_1.jpg", "Candy_2.jpg", "Candy_3.jpg"]
  },
  {
    name: "Emma",
    details: "Age: 23 | Height: 168cm | Build: Slim",
    images: ["Emma_1.jpg", "Emma_2.jpg", "Emma_3.jpg"]
  },
  {
    name: "Monica",
    details: "Age: 25 | Height: 165cm | Build: Slim",
    images: ["Monica_1.jpg", "Monica_2.jpg", "Monica_3.jpg"]
  }
  // Add more models as needed
];

export function ModelGrid() {
  const [isClient, setIsClient] = useState(false);
  const [selectedModel, setSelectedModel] = useState<(typeof models)[0] | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBookNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowContact(true);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {models.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
            onClick={() => {
              setSelectedModel(model);
              setSelectedImageIndex(0);
            }}
          >
            <div className="relative h-80">
              <Image
                src={model.images[0]}
                alt={model.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-500">{model.name}</h3>
              <p className="text-gray-300 mt-2">{model.details}</p>
              <button
                onClick={handleBookNow}
                className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedModel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-40"
          onClick={() => {
            setSelectedModel(null);
            setShowContact(false);
            setSelectedImageIndex(0);
          }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-gray-800 rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-pink-500">{selectedModel.name}</h2>
              <button
                onClick={() => {
                  setSelectedModel(null);
                  setShowContact(false);
                  setSelectedImageIndex(0);
                }}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="relative h-96">
                  <Image
                    src={selectedModel.images[selectedImageIndex]}
                    alt={`${selectedModel.name} - Image ${selectedImageIndex + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {selectedModel.images.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === selectedImageIndex ? 'border-pink-500' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedModel.name} - Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-pink-500 mb-2">Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p><span className="font-semibold">Age:</span> {selectedModel.details.split('|')[0].split(':')[1].trim()}</p>
                      <p><span className="font-semibold">Height:</span> {selectedModel.details.split('|')[1].split(':')[1].trim()}</p>
                      <p><span className="font-semibold">Build:</span> {selectedModel.details.split('|')[2].split(':')[1].trim()}</p>
                      <p><span className="font-semibold">Available for:</span> Outcall & Incall</p>
                    </div>
                    <div>
                      <p><span className="font-semibold">Location:</span> Central London</p>
                      <p><span className="font-semibold">Nationality:</span> European</p>
                      <p><span className="font-semibold">Languages:</span> English</p>
                      <p><span className="font-semibold">Model Available:</span> 24/7</p>
                      <p className="text-sm text-gray-400 mt-2">Company Hours:<br/>
                        Sun-Thu: 8:00 PM - 5:00 AM<br/>
                        Fri-Sat: 8:00 AM - 7:00 AM</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pink-500 mb-2">Services</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-300">
                    <p>✓ O-Level (Oral sex)</p>
                    <p>✓ CIM (Come in mouth)</p>
                    <p>✓ COF (Come on face)</p>
                    <p>✓ COB (Come on body)</p>
                    <p>✓ Swallow</p>
                    <p>✓ DFK (Deep french kissing)</p>
                    <p>✓ A-Level (Anal sex)</p>
                    <p>✓ 69 (69 sex position)</p>
                    <p>✓ Striptease/Lapdance</p>
                    <p>✓ Erotic massage</p>
                    <p>✓ Couples</p>
                    <p>✓ GFE (Girlfriend experience)</p>
                    <p>✓ Threesome</p>
                    <p>✓ LT (Long Time; Usually overnight)</p>
                  </div>
                </div>
                <button
                  onClick={handleBookNow}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </div>
  );
} 