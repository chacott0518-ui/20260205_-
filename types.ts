export interface NavItem {
  id: string;
  label: string;
}

export interface Doctor {
  id: number;
  name: string;
  title: string;
  role: string;
  greeting: string;
  specialty: string;
  image: string;
  history: string[];
}

export interface ClinicItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PriceItem {
  category: string;
  name: string;
  time: string;
  price: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  treatment: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EquipmentItem {
  id: string;
  title: string;
  spec: string;
  image: string;
}