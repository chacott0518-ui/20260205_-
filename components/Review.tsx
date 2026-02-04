import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';

const Review: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="review" className="relative py-20 md:py-32 bg-gray-50 z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 md:mb-20 text-center">
        <span className="text-navy text-sm font-bold tracking-widest block mb-3 uppercase">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold text-navy">치료 후기</h2>
        <p className="mt-4 text-gray-600">환자분들이 직접 남겨주신 소중한 이야기입니다.</p>
      </div>

      {/* --- MOBILE VIEW: Click-to-Reveal Card (lg:hidden) --- */}
      <div className="lg:hidden px-6">
        <AnimatePresence mode="wait">
            {!isExpanded ? (
                /* Collapsed Card */
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsExpanded(true)}
                    className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                        alt="Reviews Cover" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">치료 후기 전체보기</h3>
                        <p className="text-white/70 text-sm mb-6">진심이 담긴 회복 스토리</p>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white animate-bounce">
                            <ChevronDown size={24} />
                        </div>
                    </div>
                </motion.div>
            ) : (
                /* Expanded List View */
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                    {/* Header */}
                    <div 
                        onClick={() => setIsExpanded(false)}
                        className="bg-navy p-4 flex items-center justify-between cursor-pointer sticky top-0 z-20"
                    >
                         <span className="text-white font-bold text-sm">치료 후기</span>
                         <div className="flex items-center gap-2 text-white/80 text-xs">
                            닫기 <ChevronUp size={16} />
                         </div>
                    </div>

                    {/* Vertical Scroll List with Custom Scrollbar */}
                    <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-navy/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {REVIEWS.map((review, idx) => (
                            <div key={`mobile-list-${idx}`} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2 py-1 bg-white text-navy text-[10px] font-bold rounded border border-navy/10">
                                        {review.treatment}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center text-navy text-xs font-bold">
                                            {review.name.charAt(0)}
                                        </div>
                                        <span className="text-xs font-bold text-gray-700">{review.name}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    "{review.content}"
                                </p>
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

      {/* --- DESKTOP VIEW: Continuous Marquee (Hidden on Mobile) --- */}
      <div className="hidden lg:block relative w-full mt-10">
         {/* Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-20" />
        
        <div className="flex overflow-hidden py-8">
          <motion.div 
            className="flex gap-8 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 50 
            }}
          >
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
              <ReviewCard key={`desktop-${review.id}-${idx}`} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component (Desktop)
const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => (
  <div 
    className="w-[480px] bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative group h-full"
  >
    <div className="absolute top-8 left-8 text-gold opacity-30 group-hover:opacity-100 transition-opacity duration-500">
      <Quote size={40} fill="currentColor" />
    </div>

    <div className="mt-10 mb-8 relative z-10 flex-grow">
       <p className="text-gray-700 text-lg leading-relaxed font-medium line-clamp-4">
          "{review.content}"
       </p>
    </div>
    
    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100 w-full">
       <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy font-bold text-lg">
             {review.name.charAt(0)}
          </div>
          <div>
             <p className="font-bold text-gray-900 text-base">{review.name}</p>
             <p className="text-xs text-gray-400">네이버 예약 환자</p>
          </div>
       </div>
       <span className="px-3 py-1 bg-navy text-white text-xs font-bold rounded-full whitespace-nowrap">
          {review.treatment}
       </span>
    </div>
  </div>
);

export default Review;