import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, MapPin, Car, Map as MapIcon, ChevronDown, ChevronUp } from 'lucide-react';

const Consultation: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="location" className="relative py-20 md:py-32 bg-gray-50 z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Desktop Header (Visible lg+) */}
        <div className="hidden lg:block text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">오시는 길</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            인천 계양구의 중심,<br/>
            임학역 3번 출구 바로 앞에 위치해 있습니다.
          </p>
        </div>

        {/* --- MOBILE VIEW: Click-to-Reveal Card (lg:hidden) --- */}
        <div className="lg:hidden">
            <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-navy mb-4">오시는 길</h2>
                 <p className="text-gray-600 text-base leading-relaxed">
                    인천 계양구의 중심,<br/>
                    임학역 3번 출구 바로 앞에 위치해 있습니다.
                 </p>
            </div>

            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsExpanded(true)}
                        className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                    >
                        <img 
    src="https://i.imgur.com/v1atwcZ.png"
    alt="김태형정형외과 지도" 
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
/>
                        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">오시는 길 확인하기</h3>
                            <p className="text-white/70 text-sm mb-6">진료 시간 및 주차 안내</p>
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white animate-bounce">
                                <ChevronDown size={24} />
                            </div>
                        </div>
                    </motion.div>
                ) : (
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
                             <span className="text-white font-bold text-sm">오시는 길 안내</span>
                             <div className="flex items-center gap-2 text-white/80 text-xs">
                                닫기 <ChevronUp size={16} />
                             </div>
                        </div>

                        <div className="p-6 space-y-6">
                             {/* Hours Card - Centered Text, Icon Left */}
                             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                                <div className="flex flex-row items-center justify-center gap-3 mb-4">
                                   <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy flex-shrink-0">
                                      <Clock size={20} />
                                   </div>
                                   <h3 className="text-lg font-bold text-navy">진료 시간 안내</h3>
                                </div>
                                <div className="space-y-2 text-gray-600 text-sm">
                                   <div className="pb-1">
                                      <span className="font-bold mr-2">평일</span>
                                      <span>09:00 ~ 18:00</span>
                                   </div>
                                   <div className="pb-1">
                                      <span className="font-bold mr-2">토요일</span>
                                      <span>09:00 ~ 13:00</span>
                                   </div>
                                   <div className="mt-3 pt-3 border-t border-gray-200">
                                      <span className="font-bold text-navy block mb-1">점심시간 13:00 ~ 14:00</span>
                                      <span className="text-xs text-red-500">* 일요일, 공휴일은 휴진입니다.</span>
                                   </div>
                                </div>
                             </div>

                             {/* Address Card - Centered Text, Icon Left */}
                             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                                <div className="flex flex-row items-center justify-center gap-3 mb-4">
                                   <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy flex-shrink-0">
                                      <MapPin size={20} />
                                   </div>
                                   <h3 className="text-lg font-bold text-navy">주소 및 주차 안내</h3>
                                </div>
                                <div className="text-gray-600 mb-6">
                                   <p className="text-base font-bold mb-1">인천 계양구 장제로 867</p>
                                   <p className="text-gray-800 font-bold mb-3 text-lg">상우메디컬프라자 5~6층</p>
                                   <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded text-sm text-green-700 font-bold">
                                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                      임학역 3번 출구에서 25m
                                   </div>
                                </div>
                                
                                {/* Parking Box - Left Aligned but updated text */}
                                <div className="bg-white p-4 rounded-xl flex items-start gap-4 text-left shadow-sm">
                                   <div className="bg-gray-50 p-2 rounded-full text-navy flex-shrink-0">
                                      <Car size={20} />
                                   </div>
                                   <div>
                                      <h4 className="font-bold text-navy text-sm mb-1">넓은 주차 서비스 제공</h4>
                                      <p className="text-xs text-gray-600 leading-snug">
                                        본원 건물 뒤 대형 주차장 완비<br/>
                                        (전 차종 가능)<br/>
                                        진료 환자분들은 무료로<br/>
                                        이용할 수 있습니다.
                                      </p>
                                   </div>
                                </div>
                             </div>

                             {/* Action Buttons */}
                             <div className="flex flex-col gap-3">
                                <a 
                                  href="tel:0507-1423-6302"
                                  className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-navy/20"
                                >
                                   <Phone size={20} />
                                   전화문의
                                </a>

                                <a 
                                  href="https://map.naver.com/p/search/인천 계양구 장제로 867 상우메디컬프라자"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full bg-[#03C75A] text-white py-4 rounded-xl font-bold hover:bg-[#03C75A]/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/10"
                                >
                                   <MapIcon size={20} />
                                   N 네이버 지도 보기
                                </a>
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

        {/* --- DESKTOP VIEW: Split Layout (Visible lg+) --- */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
             {/* Left Column: Info */}
             <div className="space-y-8">
                 {/* Hours Card */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy flex-shrink-0">
                          <Clock size={20} />
                       </div>
                       <h3 className="text-xl font-bold text-navy">진료 시간 안내</h3>
                    </div>
                    <div className="space-y-3 text-gray-600">
                       <div className="flex justify-between border-b border-gray-50 pb-2">
                          <span className="font-bold">평일</span>
                          <span>09:00 ~ 18:00</span>
                       </div>
                       <div className="flex justify-between border-b border-gray-50 pb-2">
                          <span className="font-bold">토요일</span>
                          <span>09:00 ~ 13:00</span>
                       </div>
                       <div className="mt-4 text-sm bg-gray-50 p-4 rounded-lg text-center">
                          <span className="font-bold text-navy block mb-1">점심시간 13:00 ~ 14:00</span>
                          <span className="text-xs text-red-500">* 일요일, 공휴일은 휴진입니다.</span>
                       </div>
                    </div>
                 </div>

                 {/* Address Card */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy flex-shrink-0">
                          <MapPin size={20} />
                       </div>
                       <h3 className="text-xl font-bold text-navy">주소 및 주차 안내</h3>
                    </div>
                    <div className="text-gray-600 mb-6">
                       <p className="text-lg font-bold mb-1">인천 계양구 장제로 867</p>
                       <p className="text-gray-800 font-bold mb-4 text-xl">상우메디컬프라자 5~6층</p>
                       <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded text-sm text-green-700 font-bold">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          임학역 3번 출구에서 25m
                       </div>
                    </div>
                    
                    <div className="bg-navy/5 p-5 rounded-xl flex items-start gap-4">
                       <div className="bg-white p-2 rounded-full shadow-sm text-navy flex-shrink-0">
                          <Car size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-navy mb-1">넓은 주차 서비스 제공</h4>
                          <p className="text-sm text-gray-600 leading-snug">
                             본원 건물 뒤 대형 주차장 완비<br/>
                             (전 차종 가능)<br/>
                             진료 환자분들은 무료로<br/>
                             이용할 수 있습니다.
                          </p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Buttons */}
                 <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="tel:0507-1423-6302"
                      className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-navy/20"
                    >
                       <Phone size={20} />
                       전화문의
                    </a>
                    <a 
                      href="https://map.naver.com/p/search/인천 계양구 장제로 867 상우메디컬프라자"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#03C75A] text-white py-4 rounded-xl font-bold hover:bg-[#03C75A]/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-900/10"
                    >
                       <MapIcon size={20} />
                       N 네이버 지도 보기
                    </a>
                 </div>
             </div>

             {/* Right Column: Map Image */}
             <div className="h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                   src="https://i.imgur.com/v1atwcZ.png"
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20 pointer-events-none" />
                
                {/* Overlay Text on Map */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy/90 to-transparent pt-32">
                   <p className="text-white text-lg font-bold">임학역 3번 출구 바로 앞</p>
                   <p className="text-white/80">인천 계양구 장제로 867 상우메디컬프라자</p>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Consultation;