export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  description: string;
}

export interface WorkoutPlan {
  id: string;
  name: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  role: string;
  content: string;
  rating: number;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

export interface ClassSchedule {
  id: string;
  name: string;
  trainer: string;
  time: string;
  duration: string;
  maxParticipants: number;
  currentParticipants: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  membershipType?: string;
  joinDate: Date;
  goals?: string[];
  measurements?: {
    height?: number;
    weight?: number;
    bmi?: number;
    lastUpdated?: Date;
  };
} 