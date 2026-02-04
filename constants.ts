import { NavItem, Doctor, ClinicItem, PriceItem, ReviewItem, FAQItem, EquipmentItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { id: 'about', label: '병원소개' },
  { id: 'doctors', label: '의료진' },
  { id: 'clinics', label: '진료클리닉' },
  { id: 'price', label: '비급여' },
  { id: 'review', label: '치료후기' },
  { id: 'faq', label: 'FAQ' },
  { id: 'location', label: 'CONTACT' },
];

export const DIRECTOR: Doctor = {
  id: 1,
  name: "김태형",
  title: "대표원장 / 정형외과 전문의",
  role: "MEDICAL DIRECTOR",
  specialty: "척추 / 관절 / 비수술 치료",
  greeting: "환자분의 작은 통증 하나도 놓치지 않겠습니다.\n가족을 치료하는 마음으로 정직하고 바른 진료를 약속드립니다.\n과학적인 진단과 따뜻한 소통으로\n여러분의 척추 관절 건강 주치의가 되겠습니다.",
  image: "./doctor.png",
  history: [
    "상계백병원 정형외과 전문의 수료",
    "상계백병원 정형외과 슬관절 및 스포츠의학 임상강사",
    "서울백병원 관절경센터 연수",
    "삼성의료원 관절경센터 연수",
    "강남중앙병원 원장 역임",
    "인제의대 정형외과 외래교수",
    "카톨릭의대 정형외과 외래교수",
    "대한 정형외과학회 정회원",
    "대한 관절경학회 정회원",
    "Prolotherapy 교육과정 이수",
    "TPI 교육과정 이수",
    "중앙대 Cadaver Workshop 연수"
  ]
};

export const CLINICS: ClinicItem[] = [
  { id: 'spine', title: '척추 클리닉', description: '목/허리 디스크, 척추관협착증', icon: 'BP' },
  { id: 'joint', title: '관절 클리닉', description: '무릎/어깨/고관절 통증', icon: 'BN' },
  { id: 'manual', title: '도수치료', description: '틀어진 체형 교정 및 통증 완화', icon: 'HM' },
  { id: 'rehab', title: '재활치료', description: '수술 후 기능 회복 및 스포츠 재활', icon: 'AC' },
  { id: 'shock', title: '체외충격파', description: '만성 통증 및 염증 제거', icon: 'LB' },
  { id: 'injection', title: '주사치료', description: '프롤로, DNA, 연골 주사', icon: 'SY' },
  { id: 'foot', title: '족부 클리닉', description: '족저근막염, 무지외반증', icon: 'FT' },
  { id: 'growth', title: '성장 클리닉', description: '소아 청소년 성장판 검사', icon: 'GR' },
];

export const PRICES: PriceItem[] = [
  { category: "도수치료", name: "척추/관절 도수치료 (기본)", time: "40분", price: "100,000원" },
  { category: "도수치료", name: "척추/관절 도수치료 (집중)", time: "60분", price: "150,000원" },
  { category: "체외충격파", name: "집중형 (Focal)", time: "2,000타", price: "80,000원" },
  { category: "체외충격파", name: "방사형 (Radial)", time: "2,000타", price: "60,000원" },
  { category: "주사치료", name: "프롤로 증식치료", time: "1부위", price: "50,000원 ~" },
  { category: "기타", name: "신장분사치료", time: "1회", price: "20,000원" },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: "정** 님",
    treatment: "척추 클리닉",
    content: "허리 통증으로 걷기도 힘들었는데, 수술 후 다음날 바로 걸을 수 있었습니다. 원장님의 친절하고 정확한 설명 덕분에 안심하고 치료받았습니다.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "이** 님",
    treatment: "관절 클리닉",
    content: "무릎이 너무 아파 여행은 꿈도 못 꿨는데, 이제는 친구들과 등산도 다닙니다. 병원 시설이 호텔처럼 깨끗해서 입원 기간 동안 편안했습니다.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "김** 님",
    treatment: "도수치료",
    content: "밤마다 어깨가 아파서 잠을 설쳤는데, 주사 치료와 재활 운동으로 씻은 듯이 나았습니다. 과잉 진료 없이 꼭 필요한 치료만 권해주셔서 좋았습니다.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "박** 님",
    treatment: "재활치료",
    content: "수술 후 재활이 막막했는데, 단계별 맞춤 재활 프로그램 덕분에 일상 복귀가 빨랐습니다. 치료사 선생님들의 꼼꼼한 케어에 정말 감사드립니다.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "최** 님",
    treatment: "체외충격파",
    content: "만성적인 엘보 통증으로 고생하다가 체외충격파 치료를 받았는데, 몇 번의 치료만으로도 통증이 확연히 줄어들어 일상생활이 편해졌습니다.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "강** 님",
    treatment: "주사치료",
    content: "무릎 연골 주사를 맞고 뻣뻣했던 움직임이 훨씬 부드러워졌습니다. 시술 과정도 간단하고 통증도 적어서 부담 없이 치료받을 수 있었습니다.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "윤** 님",
    treatment: "족부 클리닉",
    content: "족저근막염 때문에 아침마다 발 딛기가 두려웠는데, 맞춤형 깔창과 전문적인 치료 덕분에 이제는 가벼운 조깅도 가능해졌습니다.",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "한** 님",
    treatment: "성장 클리닉",
    content: "아이 키가 또래보다 작아 걱정이었는데, 성장판 검사와 체계적인 관리 덕분에 조금씩 크는 게 보입니다. 아이도 병원을 무서워하지 않아요.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "예약 없이 방문해도 진료가 가능한가요?",
    answer: "원활한 진료를 위해 예약을 권장드리며, 당일 방문 진료는 대기 시간이 발생할 수 있습니다. 네이버 예약이나 전화를 이용하시면 편리합니다."
  },
  {
    question: "비수술 치료만 진행하나요?",
    answer: "환자분의 상태에 따라 비수술 치료를 우선으로 하며, 꼭 필요한 경우에만 수술적 치료를 권해드립니다. 대학병원급 진단 장비를 통해 정확히 판단합니다."
  },
  {
    question: "도수치료는 보험 적용이 되나요?",
    answer: "도수치료는 실손의료비보험(실비) 적용이 가능한 항목입니다. 가입하신 보험 상품에 따라 보장 범위가 다르므로 보험사에 확인이 필요합니다."
  },
  {
    question: "진료비는 병원마다 왜 다른가요?",
    answer: "비급여 항목의 경우 의료 장비의 종류, 치료 시간, 의료진의 숙련도 등에 따라 병원마다 차이가 있을 수 있습니다. 본원은 합리적인 비용을 책정하고 있습니다."
  },
  {
    question: "주차가 가능한가요?",
    answer: "네, 본원 건물 내 넓은 지하 주차장이 완비되어 있으며 진료 환자분들은 무료로 이용 가능합니다. SUV 및 대형 차량도 주차 가능합니다."
  }
];

export const EQUIPMENT: EquipmentItem[] = [
  {
    id: 'mri',
    title: 'MRI',
    spec: '1.5T 정밀검사',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0674f66?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'ct',
    title: 'CT',
    spec: '저선량 고해상도',
    image: 'https://images.unsplash.com/photo-1582719471384-30dcb90b7939?q=80&w=1975&auto=format&fit=crop'
  },
  {
    id: 'xray',
    title: 'Digital X-ray',
    spec: '고화질 영상진단',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'sono',
    title: '초음파',
    spec: '정밀 근골격계 진단',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 'carm',
    title: 'C-Arm',
    spec: '실시간 영상유도장치',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'bmd',
    title: 'BMD',
    spec: '골밀도 검사기',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop'
  }
];