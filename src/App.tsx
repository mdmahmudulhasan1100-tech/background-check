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
import { ReliableCreditScore } from './components/ReliableCreditScore';
import { TruthFinderSearch } from './components/TruthFinderSearch';
import { TransUnionCreditCheck } from './components/TransUnionCreditCheck';
import { DOMAIN_IDEAS, DEFAULT_AFFILIATE_URL, DEFAULT_TRANSUNION_URL, DEFAULT_RELIABLE_CREDIT_URL, DEFAULT_TRUTHFINDER_URL } from './data';

export default function App() {
  const [currentDomain, setCurrentDomain] = useState<string>(DOMAIN_IDEAS[0]);
  const [affiliateUrl, setAffiliateUrl] = useState<string>(DEFAULT_AFFILIATE_URL);
  const [transunionUrl, setTransunionUrl] = useState<string>(DEFAULT_TRANSUNION_URL);
  const [reliableCreditUrl, setReliableCreditUrl] = useState<string>(DEFAULT_RELIABLE_CREDIT_URL);
  const [truthfinderUrl, setTruthfinderUrl] = useState<string>(DEFAULT_TRUTHFINDER_URL);
  
  // Navigation
  const [activePage, setActivePage] = useState<'background-check' | 'transunion-credit-check' | 'reliable-credit-score' | 'truthfinder-search'>('background-check');

  // Modals state
  const [settingsModalOpen, setSettingsModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'affiliate' | null>(null);

  useEffect(() => {
    // Load persisted brand or affiliate configs
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

      const savedTransunion = localStorage.getItem('verify_app_transunion');
      if (savedTransunion) {
        setTransunionUrl(savedTransunion.replace(/([^:]\/)\/+/g, '$1'));
      } else {
        setTransunionUrl(DEFAULT_TRANSUNION_URL);
        localStorage.setItem('verify_app_transunion', DEFAULT_TRANSUNION_URL);
      }

      const savedReliable = localStorage.getItem('verify_app_reliable');
      if (savedReliable) {
        setReliableCreditUrl(savedReliable.replace(/([^:]\/)\/+/g, '$1'));
      } else {
        setReliableCreditUrl(DEFAULT_RELIABLE_CREDIT_URL);
        localStorage.setItem('verify_app_reliable', DEFAULT_RELIABLE_CREDIT_URL);
      }

      const savedTruthfinder = localStorage.getItem('verify_app_truthfinder');
      if (savedTruthfinder) {
        setTruthfinderUrl(savedTruthfinder.replace(/([^:]\/)\/+/g, '$1'));
      } else {
        setTruthfinderUrl(DEFAULT_TRUTHFINDER_URL);
        localStorage.setItem('verify_app_truthfinder', DEFAULT_TRUTHFINDER_URL);
      }
    } catch (err) {
      console.warn('Storage access restricted:', err);
    }
  }, []);

  // Hash-based client side routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#credit-check') {
        setActivePage('transunion-credit-check');
        document.title = `${currentDomain} | TransUnion® Credit Check`;
      } else if (hash === '#reliable-credit') {
        setActivePage('reliable-credit-score');
        document.title = `${currentDomain} | Access $1 Credit report`;
      } else if (hash === '#truthfinder') {
        setActivePage('truthfinder-search');
        document.title = `${currentDomain} | TruthFinder Criminal Search`;
      } else {
        setActivePage('background-check');
        document.title = `${currentDomain} | Rental Online Background checks`;
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentDomain]);

  const handleDomainChange = (domain: string) => {
    setCurrentDomain(domain);
    try {
      localStorage.setItem('verify_app_domain', domain);
    } catch (e) {}
    if (activePage === 'transunion-credit-check') {
      document.title = `${domain} | TransUnion® Credit Check`;
    } else if (activePage === 'reliable-credit-score') {
      document.title = `${domain} | Access $1 Credit report`;
    } else if (activePage === 'truthfinder-search') {
      document.title = `${domain} | TruthFinder Criminal Search`;
    } else {
      document.title = `${domain} | Rental Online Background checks`;
    }
  };

  const handleChangePage = (page: 'background-check' | 'transunion-credit-check' | 'reliable-credit-score' | 'truthfinder-search') => {
    if (page === 'transunion-credit-check') {
      window.location.hash = '#credit-check';
    } else if (page === 'reliable-credit-score') {
      window.location.hash = '#reliable-credit';
    } else if (page === 'truthfinder-search') {
      window.location.hash = '#truthfinder';
    } else {
      window.location.hash = '';
    }
  };

  const handleSaveUrls = (bgUrl: string, tuUrl: string, relUrl: string, tfUrl: string) => {
    const cleanBg = bgUrl.replace(/([^:]\/)\/+/g, '$1');
    const cleanTu = tuUrl.replace(/([^:]\/)\/+/g, '$1');
    const cleanRel = relUrl.replace(/([^:]\/)\/+/g, '$1');
    const cleanTf = tfUrl.replace(/([^:]\/)\/+/g, '$1');
    setAffiliateUrl(cleanBg);
    setTransunionUrl(cleanTu);
    setReliableCreditUrl(cleanRel);
    setTruthfinderUrl(cleanTf);
    try {
      localStorage.setItem('verify_app_affiliate', cleanBg);
      localStorage.setItem('verify_app_transunion', cleanTu);
      localStorage.setItem('verify_app_reliable', cleanRel);
      localStorage.setItem('verify_app_truthfinder', cleanTf);
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

  const handleStartCreditCheck = () => {
    const cleanUrl = transunionUrl.replace(/([^:]\/)\/+/g, '$1');
    if (window.self !== window.top) {
      window.open(cleanUrl, '_blank');
    } else {
      window.location.href = cleanUrl;
    }
  };

  const handleStartReliableCreditCheck = () => {
    const cleanUrl = reliableCreditUrl.replace(/([^:]\/)\/+/g, '$1');
    if (window.self !== window.top) {
      window.open(cleanUrl, '_blank');
    } else {
      window.location.href = cleanUrl;
    }
  };

  const handleStartTruthfinderSearch = () => {
    const cleanUrl = truthfinderUrl.replace(/([^:]\/)\/+/g, '$1');
    if (window.self !== window.top) {
      window.open(cleanUrl, '_blank');
    } else {
      window.location.href = cleanUrl;
    }
  };

  const handleGlobalStartClick = () => {
    if (activePage === 'transunion-credit-check') {
      handleStartCreditCheck();
    } else if (activePage === 'reliable-credit-score') {
      handleStartReliableCreditCheck();
    } else if (activePage === 'truthfinder-search') {
      handleStartTruthfinderSearch();
    } else {
      handleStartBackgroundCheck();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Main Header / Navigation */}
      <Header
        currentDomain={currentDomain}
        onDomainChange={handleDomainChange}
        onStartClick={handleGlobalStartClick}
        onOpenSettings={() => setSettingsModalOpen(true)}
        activePage={activePage}
        onChangePage={handleChangePage}
      />

      {/* Page Content */}
      <main className="flex-1">
        {activePage === 'transunion-credit-check' ? (
          <TransUnionCreditCheck 
            onStartClick={handleStartCreditCheck}
            transunionUrl={transunionUrl}
          />
        ) : activePage === 'reliable-credit-score' ? (
          <ReliableCreditScore 
            onStartClick={handleStartReliableCreditCheck}
            reliableCreditUrl={reliableCreditUrl}
          />
        ) : activePage === 'truthfinder-search' ? (
          <TruthFinderSearch 
            onStartClick={handleStartTruthfinderSearch}
            truthfinderUrl={truthfinderUrl}
          />
        ) : (
          <>
            <Hero onStartClick={handleStartBackgroundCheck} />
            <HowItWorks />
            <WhoItsFor onStartClick={handleStartBackgroundCheck} />
            <FAQ />
            <CTASection
              onStartClick={handleStartBackgroundCheck}
              affiliateUrl={affiliateUrl}
            />
          </>
        )}
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
        transunionUrl={transunionUrl}
        reliableCreditUrl={reliableCreditUrl}
        truthfinderUrl={truthfinderUrl}
        onSaveUrls={handleSaveUrls}
      />

    </div>
  );
}
