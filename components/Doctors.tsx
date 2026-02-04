import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DIRECTOR } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Doctors: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="doctors" className="relative py-20 md:py-32 bg-white z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Added Section Header */}
        <div className="text-center mb-12 md:mb-20">
           <span className="text-navy text-sm font-bold tracking-widest block mb-4 uppercase">
             Medical Director
           </span>
           <h2 className="text-3xl md:text-5xl font-bold text-navy">
             의료진 소개
           </h2>
        </div>
        
        {/* --- MOBILE VIEW: Click-to-Reveal Card --- */}
        <div className="lg:hidden">
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    /* 1. Collapsed Cover Card (Reference Style) */
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(true)}
                        className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                    >
                        {/* Background Image */}
                        <img 
                            src="https://i.imgur.com/dQGaAUx.png"
                            alt="Director Cover" 
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent" />

                        {/* Text Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 block">
                                        Medical Director
                                    </span>
                                    <h2 className="text-3xl font-bold text-white mb-1">
                                        {DIRECTOR.name} <span className="text-xl font-normal text-white/80">대표원장</span>
                                    </h2>
                                    <p className="text-white/60 text-sm line-clamp-1">
                                        {DIRECTOR.specialty}
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white animate-bounce">
                                    <ChevronDown size={24} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* 2. Expanded Detail View */
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                    >
                         {/* Header / Close Button */}
                        <div 
                            onClick={() => setIsExpanded(false)}
                            className="bg-navy p-4 flex items-center justify-between cursor-pointer sticky top-0 z-20"
                        >
                             <span className="text-white font-bold text-sm">의료진 소개</span>
                             <div className="flex items-center gap-2 text-white/80 text-xs">
                                닫기 <ChevronUp size={16} />
                             </div>
                        </div>

                        {/* Image Area */}
                        <div className="relative w-full aspect-[4/5] bg-gray-200">
                             <img 
                                src="https://i.imgur.com/dQGaAUx.png"
                                alt={DIRECTOR.name} 
                                className="w-full h-full object-cover object-top"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-20" />
                        </div>

                        {/* Content Area */}
                        <div className="p-8">
                             <div className="mb-8">
                                <span className="inline-block px-3 py-1 rounded-full bg-navy/10 text-navy text-[10px] font-bold tracking-widest mb-3">
                                   {DIRECTOR.role}
                                </span>
                                <h2 className="text-3xl font-bold text-navy mb-2">
                                   {DIRECTOR.name} <span className="text-xl font-normal">원장</span>
                                </h2>
                                <p className="text-sm text-gray-500 font-medium">
                                   {DIRECTOR.specialty}
                                </p>
                             </div>

                             <div className="relative pl-4 border-l-2 border-gold py-1 mb-8">
                                <p className="text-sm text-gray-700 leading-relaxed italic">
                                   "{DIRECTOR.greeting}"
                                </p>
                             </div>

                             <div className="bg-white p-5 rounded-xl border border-gray-100">
                                <h3 className="text-lg font-bold text-navy border-b border-gray-100 pb-3 mb-3 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-navy" />
                                  주요 약력
                                </h3>
                                <ul className="space-y-2">
                                  {DIRECTOR.history.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-600 tracking-tight">
                                      <span className="text-gray-300 mr-2">•</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                             </div>
                             
                             <button 
                                onClick={() => setIsExpanded(false)}
                                className="w-full mt-8 py-4 bg-navy text-white font-bold rounded-xl text-sm hover:bg-navy/90 transition-colors"
                             >
                                접기
                             </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>


        {/* --- DESKTOP VIEW: Original Layout (Visible lg+) --- */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Image with Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-gray-100 h-full">
               <img 
                 src="https://i.imgur.com/dQGaAUx.png"
                 alt={DIRECTOR.name} 
                 className="w-full h-full object-cover object-top"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60" />
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-48 h-48 bg-navy/5 rounded-full z-[-1]" />
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold/10 rounded-full z-[-1]" />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex flex-col h-full"
          >
             <div className="space-y-8 mb-8">
               <div>
                 <span className="inline-block px-3 py-1 rounded-full bg-navy/10 text-navy text-[11px] font-bold tracking-widest mb-4">
                   {DIRECTOR.role}
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                   {DIRECTOR.name} <span className="text-2xl font-normal">{DIRECTOR.title.split('/')[0]}</span>
                 </h2>
                 <p className="text-base text-gray-500 font-medium mt-2">
                   {DIRECTOR.specialty}
                 </p>
               </div>

               <div className="relative pl-5 border-l-4 border-navy/20 py-1">
                 <p className="text-base md:text-lg text-gray-700 font-serif leading-8 italic">
                   "{DIRECTOR.greeting.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                   ))}"
                 </p>
               </div>
             </div>

             <div className="flex-1 bg-gray-50 p-6 rounded-2xl flex flex-col">
               <h3 className="text-xl font-bold text-navy border-b border-gray-200 pb-3 mb-4 flex items-center gap-2">
                 <div className="w-6 h-1 bg-navy" />
                 주요 약력
               </h3>
               <ul className="grid grid-cols-1 gap-y-3">
                 {DIRECTOR.history.map((item, idx) => (
                   <li key={idx} className="flex items-start text-base text-gray-600 group hover:text-navy transition-colors tracking-tight">
                     <span className="w-1.5 h-1.5 rounded-full bg-navy/40 mt-2 mr-3 group-hover:bg-navy transition-colors flex-shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Doctors;