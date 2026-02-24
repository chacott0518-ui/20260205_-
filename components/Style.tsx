import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EQUIPMENT } from '../constants';
import { Plus } from 'lucide-react';

const Style: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const displayItems = expanded ? [...EQUIPMENT, ...EQUIPMENT] : EQUIPMENT.slice(0, 4); // Dummy expansion for demo

  return (
    <section id="style" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-gold text-sm font-bold tracking-widest block mb-2">GALLERY</span>
            <h2 className="text-4xl md:text-5xl font-serif text-navy">Medical Art Space</h2>
          </div>
          <p className="text-gray max-w-md text-right mt-4 md:mt-0">
            대학병원급 최첨단 장비와 편안한 치유의 공간이 만나는 곳
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {displayItems.map((item, idx) => (
              <motion.div
                layout
                key={`${item.id}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden bg-gray-200 cursor-none"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                  <h3 className="text-gold font-serif text-2xl italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                  <p className="text-white text-sm font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.spec}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-8 py-3 border border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 group"
          >
            <span className="text-sm tracking-widest">{expanded ? 'VIEW LESS' : 'VIEW MORE'}</span>
            <Plus size={16} className={`transition-transform duration-300 ${expanded ? 'rotate-45' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Style;