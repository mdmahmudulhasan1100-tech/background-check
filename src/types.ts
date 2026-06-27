export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AudienceCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  features: string[];
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface LegalModalContent {
  title: string;
  lastUpdated: string;
  content: string[];
}

export type ScreeningType = 'tenant' | 'employer' | 'personal';

export interface PreScreeningForm {
  type: ScreeningType;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  agreeToTerms: boolean;
}
