import { AudienceCard, FAQItem, StepItem, LegalModalContent } from './types';

export const DOMAIN_IDEAS = [
  'WhitebridgeFind.com',
  'VerifyApplicant.com',
  'SecureTenantCheck.com',
  'TenantScreeningOnline.com',
  'BackgroundCheckPortal.com',
];

export const DEFAULT_AFFILIATE_URL = 'https://paymaxoffers.trakaff.net/tr?offer_id=12&aff_id=325';
export const DEFAULT_TRANSUNION_URL = 'https://paymaxoffers.trakaff.net/tr?offer_id=190&aff_id=325';
export const DEFAULT_RELIABLE_CREDIT_URL = 'https://paymaxoffers.trakaff.net/tr?offer_id=194&aff_id=325';
export const DEFAULT_TRUTHFINDER_URL = 'https://paymaxoffers.trakaff.net/tr?offer_id=200&aff_id=325';

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Complete the online form',
    description: 'Enter basic applicant details including full legal name, email address, and screening consent in our streamlined digital portal.',
    icon: 'FileText',
  },
  {
    step: '02',
    title: 'Submit required information',
    description: 'Our encrypted gateway securely transmits verification data to authorized FCRA-compliant screening databases.',
    icon: 'ShieldAlert',
  },
  {
    step: '03',
    title: 'Receive comprehensive results',
    description: 'Access detailed screening reports rapidly and securely according to standard partner verification processes.',
    icon: 'CheckCircle2',
  },
];

export const WHO_ITS_FOR_AUDIENCES: AudienceCard[] = [
  {
    id: 'landlords',
    title: 'Landlords',
    subtitle: 'Independent Property Owners',
    icon: 'Home',
    features: [
      'Verify credit history & payment reliability',
      'Check nationwide eviction records',
      'Instant verification link sent to prospective tenants',
      'Zero monthly subscription fees required',
    ],
  },
  {
    id: 'property-managers',
    title: 'Property Managers',
    subtitle: 'Multi-Unit Residential & Commercial',
    icon: 'Building2',
    features: [
      'Standardized screening criteria across portfolios',
      'FCRA & Fair Housing Act aligned reporting',
      'Fast turnaround times to minimize vacancy delays',
      'Easy integration into existing leasing workflows',
    ],
  },
  {
    id: 'employers',
    title: 'Employers',
    subtitle: 'Small & Medium Businesses',
    icon: 'Briefcase',
    features: [
      'Pre-employment criminal background checks',
      'Identity verification & SSN trace validation',
      'Education & employment history verification',
      'Mitigate workplace risk and protect company culture',
    ],
  },
  {
    id: 'applicants',
    title: 'Applicants',
    subtitle: 'Tenants & Job Candidates',
    icon: 'UserCheck',
    features: [
      'Review your own background check record securely',
      'Bank-grade 256-bit SSL encryption protects your SSN',
      'Transparent reporting process with dispute rights',
      'Share verified status with prospective landlords or managers',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'how-long',
    question: 'How long does it take?',
    answer: 'Most initial screening reports and identity checks return results within minutes. Comprehensive national criminal background checks or county courthouse records typically take between 1 to 24 business hours depending on the jurisdiction and specific report requirements.',
  },
  {
    id: 'what-info',
    question: 'What information is needed?',
    answer: 'To initiate a background check, you generally need the applicant’s full legal name, current residential address, date of birth, Social Security Number (SSN), and an active email address. FCRA-compliant authorization consent is also collected digitally during the application process.',
  },
  {
    id: 'is-secure',
    question: 'Is my information secure?',
    answer: 'Yes. We utilize industry-standard 256-bit TLS/SSL encryption for all data transmission and storage. Sensitive personal identifiers such as Social Security Numbers are never stored in plain text and are processed strictly through SOC-2 and ISO-27001 certified secure partner clearinghouses.',
  },
  {
    id: 'who-uses',
    question: 'Who uses this service?',
    answer: 'Our secure gateway is trusted nationwide by residential landlords screening prospective tenants, professional property management firms, hiring managers and business owners vetting employment candidates, and cautious individuals verifying personal records.',
  },
];

export const LEGAL_CONTENTS: Record<'privacy' | 'terms' | 'affiliate', LegalModalContent> = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'June 2026',
    content: [
      '1. Information Collection: We collect information that you voluntarily provide to us when expressing an interest in obtaining background screening services, including name, contact information, and screening criteria.',
      '2. Data Protection: We implement bank-grade technical and organizational security measures designed to protect the security of any personal information we process. All sensitive applicant data is transmitted directly via encrypted channels.',
      '3. Third-Party Screening Partners: This portal acts as an authorized referral gateway. Actual consumer reporting data, criminal history checks, and credit bureau inquiries are executed directly by authorized third-party Fair Credit Reporting Act (FCRA) compliant screening agencies.',
      '4. Your Rights: Under applicable privacy laws (CCPA/GDPR/FCRA), you retain the right to request access to, correction of, or deletion of your personal data submitted through this landing page.',
    ],
  },
  terms: {
    title: 'Terms of Use',
    lastUpdated: 'June 2026',
    content: [
      '1. Agreement to Terms: By accessing this website, you agree to be bound by these Website Terms and Conditions of Use and agree that you are responsible for compliance with any applicable local, state, and federal laws.',
      '2. Fair Credit Reporting Act (FCRA) Compliance: Users of background screening services must comply strictly with the FCRA (15 U.S.C. § 1681 et seq.). You certify that reports will be obtained solely for permissible purposes such as tenant screening or employment verification with proper applicant written authorization.',
      '3. Disclaimer of Warranties: The materials on this portal are provided on an "as is" basis. We make no warranties, expressed or implied, regarding accuracy, completeness, or suitability of third-party screening provider reports.',
      '4. Limitation of Liability: In no event shall this website or its operators be liable for any damages arising out of the use or inability to use the screening services referred from this site.',
    ],
  },
  affiliate: {
    title: 'Referral & Partner Disclosure',
    lastUpdated: 'June 2026',
    content: [
      'FTC Referral Disclosure: In compliance with Federal Trade Commission (FTC) guidelines, please assume that any links leading to third-party background check providers or screening services on this website are partner or referral links.',
      'Referral Compensation: When you click our "Start Background Check" buttons and purchase screening services through our authorized partner portals (such as Whitebridge or affiliated screening networks), this site operator may receive a financial referral fee or commission at no additional cost to you.',
      'Independence & Integrity: Our editorial recommendations and portal structure are designed to connect property owners, employers, and applicants with reputable, secure, FCRA-compliant screening technology. Compensation does not influence the security standards required of our listed partners.',
    ],
  },
};
