import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const slices = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      {/* Fixed Background Container */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-navy">
        
        {/* Full Image Background - Clean Medical Image */}
        {/* Initial opacity 1 to prevent white flash */}
        <motion.div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ 
             backgroundImage: 'url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop)',
             filter: 'brightness(0.4)'
           }}
           initial={{ opacity: 1, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2.0, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />

        {/* Slice Transition Effect (Entrance Only) - Acts as a curtain opening */}
        <div className="absolute inset-0 flex w-full h-full z-10 pointer-events-none">
          {slices.map((i) => (
            <motion.div
              key={i}
              className="relative h-full bg-navy border-r border-navy/5"
              style={{ width: '12.5%' }}
              initial={{ height: '100%' }}
              animate={{ height: '0%' }}
              transition={{ 
                duration: 1.0, 
                ease: [0.22, 1, 0.36, 1], 
                delay: 0.2 + (i * 0.05) 
              }}
            />
          ))}
        </div>

        {/* Hero Text Content */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-8 md:w-12 bg-white/40"></div>
              <p className="text-white/90 tracking-[0.2em] text-xs md:text-sm font-bold uppercase">
                TRUSTED MEDICAL CARE
              </p>
              <div className="h-[1px] w-8 md:w-12 bg-white/40"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight font-sans">
              바른 관절,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">
                건강한 삶의 시작
              </span>
            </h1>
            
            <p className="text-white/80 font-light text-base md:text-xl max-w-2xl mx-auto leading-loose">
              대학병원급 의료 시스템과 정직한 진료로 환자분의<br className="block"/>
              평생 주치의가 되겠습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Spacer to allow scrolling over the fixed hero */}
      <div className="h-screen w-full relative pointer-events-none" />
    </>
  );
};

export default Hero;