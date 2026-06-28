import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhoItsFor } from './components/WhoItsFor';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { SettingsModal } from './components/SettingsModal';
import { DOMAIN_IDEAS, DEFAULT_AFFILIATE_URL } from './data';

export default function App() {
  const [currentDomain, setCurrentDomain] = useState<string>(DOMAIN_IDEAS[0]);
  const [affiliateUrl, setAffiliateUrl] = useState<string>(DEFAULT_AFFILIATE_URL);
  
  // Modals state
  const [settingsModalOpen, setSettingsModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'affiliate' | null>(null);

  useEffect(() => {
    // Load persisted brand or affiliate config if saved safely
    try {
      const savedDomain = localStorage.getItem('verify_app_domain');
      if (savedDomain && DOMAIN_IDEAS.includes(savedDomain)) {
        setCurrentDomain(savedDomain);
      }
      const savedAffiliate = localStorage.getItem('verify_app_affiliate');
      if (
        savedAffiliate &&
        savedAffiliate !== 'https://www.whitebridge.com/ref?partner=verify_applicant_portal' &&
        savedAffiliate !== 'https://whitebridgefind.com/Pshring'
      ) {
        setAffiliateUrl(savedAffiliate.replace(/([^:]\/)\/+/g, '$1'));
      } else {
        setAffiliateUrl(DEFAULT_AFFILIATE_URL);
        localStorage.setItem('verify_app_affiliate', DEFAULT_AFFILIATE_URL);
      }
    } catch (err) {
      console.warn('Storage access restricted:', err);
    }
  }, []);

  const handleDomainChange = (domain: string) => {
    setCurrentDomain(domain);
    try {
      localStorage.setItem('verify_app_domain', domain);
    } catch (e) {}
    document.title = `${domain} | Secure Online Background Checks`;
  };

  const handleSaveAffiliateUrl = (url: string) => {
    const cleanUrl = url.replace(/([^:]\/)\/+/g, '$1');
    setAffiliateUrl(cleanUrl);
    try {
      localStorage.setItem('verify_app_affiliate', cleanUrl);
    } catch (e) {}
  };

  const handleStartBackgroundCheck = () => {
    const cleanUrl = affiliateUrl.replace(/([^:]\/)\/+/g, '$1');
    if (window.self !== window.top) {
      window.open(cleanUrl, '_blank');
    } else {
      window.location.href = cleanUrl;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Main Header / Navigation */}
      <Header
        currentDomain={currentDomain}
        onDomainChange={handleDomainChange}
        onStartClick={handleStartBackgroundCheck}
        onOpenSettings={() => setSettingsModalOpen(true)}
      />

      {/* Page Content */}
      <main className="flex-1">
        <Hero onStartClick={handleStartBackgroundCheck} />
        <HowItWorks />
        <WhoItsFor onStartClick={handleStartBackgroundCheck} />
        <FAQ />
        <CTASection
          onStartClick={handleStartBackgroundCheck}
          affiliateUrl={affiliateUrl}
        />
      </main>

      {/* Footer */}
      <Footer
        currentDomain={currentDomain}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenSettings={() => setSettingsModalOpen(true)}
      />

      {/* Interactive Modals */}

      <LegalModal
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        currentUrl={affiliateUrl}
        onSaveUrl={handleSaveAffiliateUrl}
      />

    </div>
  );
}
