export type Language = 'de' | 'en' | 'ar' | 'tr';

export interface NavItem {
  label: Record<Language, string>;
  href: string;
}

export interface Service {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: string;
  duration: string;
  image: string;
  category: string;
}

export interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  voucherCode?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  created_at: string;
}

export interface Appointment {
  id: string;
  user_id: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
  voucher_code?: string;
  created_at: string;
}