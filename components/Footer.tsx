import React from 'react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050B14] text-gray-400 py-16 text-sm relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-start gap-12">
        
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-3">
             <Logo className="w-10 h-10 text-white" />
             <div>
                <h2 className="text-white font-bold text-xl leading-none tracking-tight">김태형정형외과의원</h2>
                <span className="text-xs tracking-widest uppercase opacity-50 block mt-1">Orthopedic Surgery</span>
             </div>
          </div>
          <p className="text-sm leading-relaxed opacity-70">
            바른 진료와 정직한 치료로<br/>
            환자분들의 평생 주치의가 되겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-auto">
           <div>
              <h4 className="text-white font-bold mb-6 text-base">병원 정보</h4>
              <div className="space-y-3 text-sm opacity-80">
                 <p>대표자: 김태형</p>
                 <p>사업자등록번호: 123-45-67890</p>
                 <p>TEL: 0507-1423-6302</p>
                 <p>FAX: 02-1234-5679</p>
              </div>
           </div>
           
           <div className="hidden md:block">
              <h4 className="text-white font-bold mb-6 text-base">진료 시간</h4>
              <div className="space-y-3 text-sm opacity-80">
                 <div className="flex justify-between min-w-[140px]">
                   <span>평일</span>
                   <span className="text-white">09:00 ~ 18:00</span>
                 </div>
                 <div className="flex justify-between min-w-[140px]">
                   <span>토요일</span>
                   <span className="text-white">09:00 ~ 13:00</span>
                 </div>
                 <div className="flex justify-between min-w-[140px] text-red-400">
                   <span>점심시간</span>
                   <span>13:00 ~ 14:00</span>
                 </div>
                 <p className="text-xs mt-2">* 일요일/공휴일 휴진</p>
              </div>
           </div>

           <div className="hidden md:block">
              <h4 className="text-white font-bold mb-6 text-base">오시는 길</h4>
              <div className="space-y-3 text-sm opacity-80">
                 <p className="text-white font-bold">인천 계양구 장제로 867</p>
                 <p>상우메디컬프라자 5~6층</p>
                 <p className="text-xs text-green-400 mt-1">임학역 3번 출구 앞</p>
              </div>
           </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
         <p>&copy; 2024 KIM TAE HYUNG ORTHOPEDICS. ALL RIGHTS RESERVED.</p>
         <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">비급여진료비</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;