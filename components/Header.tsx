import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { Logo } from './Logo';
import { X, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('doctors');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

    useEffect(() => {
    let lastScrollY = window.scrollY;
    let stopTimer: NodeJS.Timeout;

    const handleAction = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      
      // 1. 방향 판단 및 즉각 반응
      if (isScrollingDown && currentScrollY > 50) {
        setIsVisible(false);
        // [중요] 내리는 중에는 '나타나기' 타이머가 감히 끼어들지 못하게 즉시 제거
        clearTimeout(stopTimer); 
      } else {
        setIsVisible(true);
      }

      // 2. [충돌 해결] 내리는 중이 아닐 때만 '정지 감지' 타이머를 생성함
      // 이렇게 해야 스크롤 내릴 때 헤더가 다시 튀어나오는 걸 물리적으로 막음
      if (!isScrollingDown || currentScrollY <= 50) {
        clearTimeout(stopTimer);
        stopTimer = setTimeout(() => {
          setIsVisible(true);
        }, 500); 
      }

      lastScrollY = currentScrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleAction, { passive: true });
    window.addEventListener('mousemove', handleAction, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleAction);
      window.removeEventListener('mousemove', handleAction);
      clearTimeout(stopTimer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 섹션이 화면의 40% 이상 보일 때 활성화
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // rootMargin을 조절하여 헤더에 가려지는 부분까지 계산에 넣습니다.
      { threshold: 0.4, rootMargin: "-20% 0px -40% 0px" } 
    );

    // NAV_LINKS에 정의된 모든 섹션을 추적
    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    // 히어로 섹션(최상단)에 있을 때는 수동으로 초기화 로직 추가
    const handleHome = () => {
      if (window.scrollY < 100) {
        setActiveSection(''); // 홈 위치일 때는 언더바 제거
      }
    };
    window.addEventListener('scroll', handleHome);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleHome);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // 헤더 높이가 보통 80px 정도니까 그만큼 덜 내려가게 계산
    const headerOffset = 80; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  }
};

  return (
    <>
      <motion.header
  initial={{ y: -100 }}
  animate={{ y: isVisible ? 0 : '-100%' }}
  transition={{ duration: 0.15, ease: "circOut" }}
  className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding] duration-300 ${
    isScrolled 
      ? 'bg-navy/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10' 
      : 'bg-transparent py-6 border-b border-transparent' 
  }`}
>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer z-50 relative" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
          >
            <Logo className="w-8 h-8 text-white" />
            <div className="flex flex-col">
              <h1 className="font-bold text-xl tracking-tight leading-none text-white">
                김태형정형외과
              </h1>
              <span className="text-[10px] tracking-widest uppercase font-medium mt-1 text-white/70">
                Orthopedic Surgery
              </span>
            </div>
          </div>

          {/* Right: Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id 
                    ? 'text-white font-bold' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle (Only visible when menu is closed) */}
          <button 
            className={`lg:hidden text-white z-50 relative p-2 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
             <Menu size={28} />
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
            />
            
            {/* Slide-out Drawer - Narrower Width */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[150px] bg-navy z-[61] lg:hidden flex flex-col shadow-2xl border-l border-white/10"
            >
              {/* Header Area inside Menu - Close Button Only */}
              <div className="flex items-center justify-end p-4">
                 <button 
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="p-1 text-white hover:text-gold transition-colors"
                 >
                   <X size={20} />
                 </button>
              </div>
              
              {/* Menu Links - Compact & Smaller Text */}
              <div className="flex flex-col px-4 py-2 overflow-y-auto flex-grow">
                 {NAV_LINKS.map((link) => (
                   <button
                     key={link.id}
                     onClick={() => scrollToSection(link.id)}
                     className="text-left text-sm font-medium text-white/90 hover:text-white transition-all py-3 border-b border-white/5 last:border-0"
                   >
                     {link.label}
                   </button>
                 ))}
              </div>
              
              {/* Footer Info inside Menu */}
              <div className="p-4 bg-navy-light/50 border-t border-white/10 mt-auto">
                 <p className="text-[9px] text-white/50 mb-2 font-light tracking-wider">RESERVATION</p>
                 <a href="tel:0507-1423-6302" className="text-xs font-bold text-white block mb-1">
                   0507-1423-6302
                 </a>
                 <p className="text-[9px] text-white/40 leading-tight">
                   평일 09:00 - 18:00
                 </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;