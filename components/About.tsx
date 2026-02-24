import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden z-10">
      
      {/* Mobile Background Image & Overlay */}
      <div className="absolute inset-0 md:hidden z-0">
         <img 
           src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop"
           alt="Background"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div className="space-y-8 text-center md:text-left">
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
              >
                <span className="text-gold md:text-navy text-sm font-bold tracking-widest block mb-4 uppercase">
                  Hospital Introduction
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white md:text-gray-900 leading-tight">
                  원칙을 지키는 진료,<br/>
                  <span className="text-white md:text-navy">환자 중심의 병원</span>
                </h2>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.6 }}
                 className="space-y-6 text-gray-300 md:text-gray-600 leading-relaxed text-base md:text-lg"
              >
                <p>
                  김태형 정형외과는 <strong className="text-white md:text-navy font-bold">'과잉 진료 없는 정직한 병원'</strong> 이라는 원칙으로, 환자분에게 필요한 치료만을 권해드립니다.
                </p>
                <p>
                  단순히 통증을 없애는 것을 넘어, 근본적인 원인을 찾아 해결하고 재발방지와 솔루션을 제공합니다.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 md:border-none max-w-sm mx-auto md:mx-0">
                <div className="border-l-4 border-gold md:border-navy pl-4 text-left">
                  <h4 className="text-2xl md:text-xl font-bold text-white md:text-gray-900">15,000+</h4>
                  <p className="text-gray-400 md:text-gray-500 text-sm">수술 및 시술 경험</p>
                </div>
                <div className="border-l-4 border-gold md:border-navy pl-4 text-left">
                  <h4 className="text-2xl md:text-xl font-bold text-white md:text-gray-900">98%</h4>
                  <p className="text-gray-400 md:text-gray-500 text-sm">환자 만족도</p>
                </div>
              </div>
            </div>

            {/* Image Side - Desktop Only */}
            <div className="relative hidden md:block">
               <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop"
                    alt="Hospital Interior"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                  />
               </div>
               {/* Accent Box */}
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy/5 rounded-full z-[-1]" />
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;