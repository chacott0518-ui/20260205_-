import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINICS } from '../constants';
import { ChevronRight, ChevronDown } from 'lucide-react';

const Center: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  const toggleMobile = (idx: number) => {
    setMobileExpanded(mobileExpanded === idx ? null : idx);
  }

  return (
    <section id="clinics" className="relative py-20 md:py-32 bg-gray-50 z-10 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
           <span className="text-navy text-sm font-bold tracking-widest block mb-4 uppercase">Specialized Centers</span>
           <h2 className="text-3xl md:text-5xl font-bold text-navy">
             분야별 전문 클리닉
           </h2>
           <p className="mt-4 text-gray-600 text-sm md:text-base">
             정확한 진단과 맞춤형 치료로 빠른 회복을 돕습니다.
           </p>
        </div>

        {/* --- DESKTOP VIEW (Visible on LG and up) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-16">
          
          {/* Navigation List */}
          <div className="col-span-4 flex flex-col gap-2">
             {CLINICS.map((clinic, idx) => (
               <button
                 key={clinic.id}
                 onClick={() => setActiveTab(idx)}
                 className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                   activeTab === idx 
                     ? 'bg-navy text-white shadow-lg' 
                     : 'bg-white text-gray-600 hover:bg-white hover:shadow-md'
                 }`}
               >
                 <div className="flex items-center gap-4">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeTab === idx ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                   }`}>
                      {idx + 1}
                   </div>
                   <span className="font-bold text-lg">{clinic.title}</span>
                 </div>
                 <ChevronRight 
                   className={`transition-transform duration-300 ${
                     activeTab === idx ? 'text-white translate-x-1' : 'text-gray-300 group-hover:text-gray-500'
                   }`} 
                   size={20} 
                 />
               </button>
             ))}
          </div>

          {/* Content Area */}
          <div className="col-span-8 relative min-h-[500px]">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.4 }}
                 className="h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-row"
               >
                 <div className="w-1/2 relative">
                    <img 
                      src={`https://source.unsplash.com/random/800x1000/?medical,${CLINICS[activeTab].id}`} 
                      onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop"
                      }}
                      alt={CLINICS[activeTab].title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/20" />
                 </div>
                 
                 <div className="w-1/2 p-10 flex flex-col justify-center bg-white relative z-10">
                    <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-8">
                       <span className="text-3xl font-serif text-navy font-bold">{activeTab + 1}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-navy mb-4">{CLINICS[activeTab].title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {CLINICS[activeTab].description}
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                           <p className="text-gray-600 text-sm">정밀 진단을 통한 1:1 맞춤 치료 계획 수립</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                           <p className="text-gray-600 text-sm">대학병원급 최신 의료 장비 보유</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                           <p className="text-gray-600 text-sm">숙련된 전문 의료진의 세심한 진료</p>
                        </div>
                    </div>
                    
                    {/* View Details Button Removed */}
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE VIEW (Image Background Cards) --- */}
        <div className="lg:hidden flex flex-col gap-4">
          {CLINICS.map((clinic, idx) => (
            <motion.div 
              key={clinic.id} 
              layout
              onClick={() => toggleMobile(idx)}
              className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group"
            >
               {/* Background Image & Overlay */}
               <div className="absolute inset-0 z-0">
                 <img 
                    src={`https://source.unsplash.com/random/800x600/?medical,${clinic.id}`}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop"
                    }}
                    alt={clinic.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/70 to-navy/30" />
               </div>

               {/* Content Overlay */}
               <div className="relative z-10 p-6 flex flex-col min-h-[140px] justify-end">
                 <div className="flex items-start justify-between mb-2">
                    <span className="text-white/60 text-xs font-bold tracking-widest uppercase">0{idx + 1} Clinic</span>
                    <ChevronDown 
                        size={20} 
                        className={`text-white/80 transition-transform duration-300 ${mobileExpanded === idx ? 'rotate-180' : ''}`}
                    />
                 </div>
                 
                 <h4 className="text-2xl font-bold text-white mb-2">{clinic.title}</h4>
                 
                 <AnimatePresence>
                   {mobileExpanded === idx ? (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       <p className="text-white/90 text-sm mb-6 leading-relaxed border-l-2 border-gold pl-3">
                         {clinic.description}
                       </p>
                       
                       <div className="space-y-2 pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2 text-xs text-white/80">
                            <div className="w-1 h-1 bg-gold rounded-full" /> 정밀 진단 시스템
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/80">
                            <div className="w-1 h-1 bg-gold rounded-full" /> 대학병원급 의료장비
                          </div>
                       </div>

                       {/* View Details Button Removed */}
                     </motion.div>
                   ) : (
                     <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white/70 text-sm line-clamp-1"
                     >
                        {clinic.description}
                     </motion.p>
                   )}
                 </AnimatePresence>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Center;