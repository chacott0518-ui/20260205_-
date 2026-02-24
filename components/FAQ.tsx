import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-white z-10 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-navy text-sm font-bold tracking-widest block mb-4 uppercase">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">자주 묻는 질문</h2>
        </div>

        {/* --- MOBILE VIEW: Click-to-Reveal (lg:hidden) --- */}
        <div className="lg:hidden">
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    /* Collapsed Cover */
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(true)}
                        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
                            alt="FAQ Cover"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">질문과 답변 확인하기</h3>
                            <p className="text-white/70 text-sm mb-6">진료 관련 궁금한 점을 해결해드립니다</p>
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white animate-bounce">
                                <ChevronDown size={24} />
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* Expanded List */
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                    >
                        <div 
                            onClick={() => setIsExpanded(false)}
                            className="bg-navy p-4 flex items-center justify-between cursor-pointer sticky top-0 z-20"
                        >
                             <span className="text-white font-bold text-sm">자주 묻는 질문</span>
                             <div className="flex items-center gap-2 text-white/80 text-xs">
                                닫기 <ChevronUp size={16} />
                             </div>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {FAQS.map((faq, idx) => (
                                <div key={idx} className="bg-white">
                                    <button
                                        onClick={() => toggleFAQ(idx)}
                                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                                    >
                                        <div className="flex items-center gap-3 w-[90%]">
                                            <span className={`text-base font-bold flex-shrink-0 ${activeIndex === idx ? 'text-navy' : 'text-gray-400'}`}>Q.</span>
                                            {/* Forced single line with truncation */}
                                            <span className={`text-sm font-bold truncate ${activeIndex === idx ? 'text-navy' : 'text-gray-700'}`}>
                                                {faq.question}
                                            </span>
                                        </div>
                                        <ChevronDown 
                                            size={18}
                                            className={`transition-transform duration-300 flex-shrink-0 ${activeIndex === idx ? 'rotate-180 text-navy' : 'text-gray-400'}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-gray-50"
                                            >
                                                <div className="p-5 pt-2 pl-10 text-sm text-gray-600 leading-relaxed border-t border-dashed border-gray-200">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={() => setIsExpanded(false)}
                            className="w-full py-4 bg-gray-50 text-navy font-bold text-sm hover:bg-gray-100 transition-colors border-t border-gray-100"
                        >
                            접기
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* --- DESKTOP VIEW: Original List (hidden lg:block) --- */}
        <div className="hidden lg:block space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl transition-all duration-300 ${
                activeIndex === idx ? 'border-navy shadow-md bg-white' : 'border-gray-200 bg-white hover:border-navy/50'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xl font-bold ${activeIndex === idx ? 'text-navy' : 'text-gray-400'}`}>Q.</span>
                  <span className={`font-bold text-lg ${activeIndex === idx ? 'text-navy' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown 
                  className={`transition-transform duration-300 ${activeIndex === idx ? 'rotate-180 text-navy' : 'text-gray-400'}`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 pl-14 border-t border-dashed border-gray-100 bg-gray-50/50 rounded-b-xl">
                      <div className="flex gap-4">
                         <span className="text-xl font-bold text-gray-400">A.</span>
                         <p className="text-gray-600 leading-relaxed pt-1">
                           {faq.answer}
                         </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;