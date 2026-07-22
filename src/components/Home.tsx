import React from 'react';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { WhoItsFor } from './WhoItsFor';
import { FAQ } from './FAQ';
import { CTASection } from './CTASection';
import { SEOHead } from './SEOHead';

interface HomeProps {
  onStartClick: () => void;
  affiliateUrl: string;
}

export const Home: React.FC<HomeProps> = ({
  onStartClick,
  affiliateUrl,
}) => {
  return (
    <>
      <SEOHead
        title="Background Check Services for Landlords & Employers | FCRA Compliant Screening"
        description="Fast, FCRA-compliant background checks for landlords, property managers, and employers. Get verified tenant screening and employment verification reports in minutes."
        canonicalUrl="https://www.whitebridgefind.com/"
      />
      <Hero onStartClick={onStartClick} />
      <HowItWorks />
      <WhoItsFor onStartClick={onStartClick} />
      <FAQ />
      <CTASection
        onStartClick={onStartClick}
        affiliateUrl={affiliateUrl}
      />
    </>
  );
};
