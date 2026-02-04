import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Price: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="price" className="relative py-20 md:py-32 bg-white z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-navy text-sm font-bold tracking-widest block mb-4 uppercase">Transparent Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy">비급여 진료비 안내</h2>
        </div>

        {/* --- MOBILE VIEW: Card Interaction (lg:hidden) --- */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
               /* Collapsed Card State */
               <motion.div
                 layout
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0 }}
                 onClick={() => setIsExpanded(true)}
                 className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
               >
                 {/* Background */}
                 <img
                   src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=2070&auto=format&fit=crop"
                   alt="Pricing Cover"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
                 
                 {/* Content */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">진료비 상세 내역 확인하기</h3>
                    <p className="text-white/70 text-sm mb-6">투명하고 합리적인 비용을 약속드립니다</p>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white animate-bounce">
                        <ChevronDown size={24} />
                    </div>
                 </div>
               </motion.div>
            ) : (
               /* Expanded Table State */
               <motion.div
                 layout
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
               >
                  {/* Header with Close */}
                  <div 
                    onClick={() => setIsExpanded(false)}
                    className="bg-navy p-4 flex items-center justify-between cursor-pointer sticky top-0 z-20"
                  >
                     <span className="text-white font-bold text-sm">비급여 진료비</span>
                     <div className="flex items-center gap-2 text-white/80 text-xs">
                        닫기 <ChevronUp size={16} />
                     </div>
                  </div>

                  <div className="p-2">
                     {/* Table Header - Mobile */}
                     <div className="flex bg-gray-50 py-3 px-1 rounded-lg text-[11px] font-bold text-navy border-b border-gray-200">
                        <div className="w-[18%] text-center whitespace-nowrap">분류</div>
                        <div className="w-[42%] text-center whitespace-nowrap">항목명</div>
                        <div className="w-[18%] text-center whitespace-nowrap">시간/횟수</div>
                        <div className="w-[22%] text-center whitespace-nowrap">가격(VAT포함)</div>
                     </div>
                     
                     {/* Table Body - Mobile */}
                     <div className="divide-y divide-gray-100">
                       {PRICES.map((item, idx) => (
                         <div key={idx} className="flex py-4 px-1 items-center text-[11px] text-gray-700 tracking-tight">
                           <div className="w-[18%] text-center font-bold whitespace-nowrap overflow-hidden text-ellipsis">{item.category}</div>
                           <div className="w-[42%] text-center font-medium whitespace-nowrap overflow-hidden text-ellipsis px-1">{item.name}</div>
                           <div className="w-[18%] text-center text-gray-500 whitespace-nowrap">{item.time}</div>
                           <div className="w-[22%] text-center font-bold text-navy whitespace-nowrap">{item.price}</div>
                         </div>
                       ))}
                     </div>
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

        {/* --- DESKTOP VIEW: Standard Table (hidden lg:block) --- */}
        <div className="hidden lg:block">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
           >
              {/* Desktop Header */}
              <div className="flex bg-navy/5 py-5 px-8 border-b border-gray-200 text-sm font-bold text-navy uppercase tracking-wider">
                <div className="w-[15%] text-center">분류</div>
                <div className="w-[50%] text-center">항목명</div>
                <div className="w-[15%] text-center">시간/횟수</div>
                <div className="w-[20%] text-center">가격 (VAT포함)</div>
              </div>
              
              {/* Desktop List */}
              <div className="divide-y divide-gray-100 bg-white">
                {PRICES.map((item, idx) => (
                  <div key={idx} className="flex py-6 px-8 items-center hover:bg-gray-50 transition-colors text-base">
                    <div className="w-[15%] text-center font-medium text-gray-500">{item.category}</div>
                    <div className="w-[50%] text-center font-bold text-gray-800">{item.name}</div>
                    <div className="w-[15%] text-center text-gray-500">{item.time}</div>
                    <div className="w-[20%] text-center font-bold text-navy">{item.price}</div>
                  </div>
                ))}
              </div>
           </motion.div>
        </div>
        
        {/* Footer Info */}
        <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600 space-y-2">
            <p className="font-bold text-navy mb-2">※ 비급여 및 급여 진료 안내</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
              <li>비급여 항목의 경우, 추가 비용 등으로 인해 실제 진료비가 안내된 가격과 상이할 수 있으므로 정확한 금액은 해당 의료기관에 직접 문의해 주시기 바랍니다.</li>
              <li>급여 항목의 경우, 건강보험심사평가원에 고시되어 있는 급여 진료 기준 가격을 적용합니다.</li>
              <li>진료 과정 중 비급여 항목이 추가될 수 있으며, 이로 인해 병원마다 최종 진료비는 다르게 산정될 수 있습니다.</li>
              <li>이벤트가 및 할인가는 부가가치세(VAT) 포함 금액입니다.</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Price;