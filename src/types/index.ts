export interface PortfolioItem {
  title: string;
  category: string;
  date: string;
  review: string;
  rating: number;
  image: string;
  imgAlt: string;
}

export interface Professional {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  rating: number;
  reviewsCount: number;
  location: string;
  distance: number;
  jobsCompleted: number;
  experience: number;
  price: number;
  availableToday: boolean;
  verified: boolean;
  specializations: string[];
  brands: string[];
  vehicles: string[];
  fuelTech: string[];
  phone: string;
  avatar: string;
  avatarAlt: string;
  portfolio: PortfolioItem[];
}

export interface Booking {
  id: string;
  proId: string;
  proName: string;
  proCategory: string;
  proPhone: string;
  proAvatar: string;
  address: string;
  timeSlot: string;
  notes: string;
  price: number;
  status: 'Confirmed' | 'In Progress' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface AiDiagnosisResult {
  title: string;
  category: string;
  categorySlug: string;
  urgency: string;
  estimatedCost: string;
  rationale: string;
  safetyTip: string;
  recommendedProId?: string;
}
