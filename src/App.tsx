import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { TenantBackgroundCheck } from './components/TenantBackgroundCheck';
import { TransUnionCreditCheck } from './components/TransUnionCreditCheck';
import { ReliableCreditScore } from './components/ReliableCreditScore';
import { TruthFinderSearch } from './components/TruthFinderSearch';
import { GuidesHub } from './components/GuidesHub';
import { GuideDetail } from './components/GuideDetail';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { SettingsModal } from './components/SettingsModal';
import { DOMAIN_IDEAS, DEFAULT_AFFILIATE_URL, DEFAULT_TRANSUNION_URL, DEFAULT_RELIABLE_CREDIT_URL, DEFAULT_TRUTHFINDER_URL } from './data';

// Component to handle legacy hash routing redirect seamlessly to clean URLs
function HashRedirector() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#background-check') {
      window.history.replaceState(null, '', '/tenant-background-check');
      navigate('/tenant-background-check', { replace: true });
    } else if (hash === '#credit-check') {
      window.history.replaceState(null, '', '/transunion-credit-check');
      navigate('/transunion-credit-check', { replace: true });
    } else if (hash === '#reliable-credit') {
      window.history.replaceState(null, '', '/reliable-credit-score');
      navigate('/reliable-credit-score', { replace: true });
    } else if (hash === '#truthfinder') {
      window.history.replaceState(null, '', '/truthfinder-criminal-search');
      navigate('/truthfinder-criminal-search', { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function MainApp() {
  const [currentDomain, setCurrentDomain] = useState<string>(DOMAIN_IDEAS[0]);
  const [affiliateUrl, setAffiliateUrl] = useState<string>(DEFAULT_AFFILIATE_URL);
  const [transunionUrl, setTransunionUrl] = useState<string>(DEFAULT_TRANSUNION_URL);
  const [reliableCreditUrl, setReliableCreditUrl] = useState<string>(DEFAULT_RELIABLE_CREDIT_URL);
  const [truthfinderUrl, setTruthfinderUrl] = useState<string>(DEFAULT_TRUTHFINDER_URL);

  // Modals state
  const [settingsModalOpen, setSettingsModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'affiliate' | null>(null);

  const location = useLocation();

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
      if (savedTransunion && !savedTransunion.includes('offer_id=14') && !savedTransunion.includes('19113')) {
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

  const handleDomainChange = (domain: string) => {
    setCurrentDomain(domain);
    try {
      localStorage.setItem('verify_app_domain', domain);
    } catch (e) {}
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
    const path = location.pathname;
    if (path === '/transunion-credit-check') {
      handleStartCreditCheck();
    } else if (path === '/reliable-credit-score') {
      handleStartReliableCreditCheck();
    } else if (path === '/truthfinder-criminal-search') {
      handleStartTruthfinderSearch();
    } else {
      handleStartBackgroundCheck();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      <HashRedirector />

      {/* Main Header / Navigation */}
      <Header
        currentDomain={currentDomain}
        onDomainChange={handleDomainChange}
        onStartClick={handleGlobalStartClick}
        onOpenSettings={() => setSettingsModalOpen(true)}
      />

      {/* Page Content Routes */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onStartClick={handleStartBackgroundCheck} 
                affiliateUrl={affiliateUrl} 
              />
            } 
          />
          <Route 
            path="/tenant-background-check" 
            element={
              <TenantBackgroundCheck 
                onStartClick={handleStartBackgroundCheck} 
                affiliateUrl={affiliateUrl} 
              />
            } 
          />
          <Route 
            path="/transunion-credit-check" 
            element={
              <TransUnionCreditCheck 
                onStartClick={handleStartCreditCheck} 
                transunionUrl={transunionUrl} 
              />
            } 
          />
          <Route 
            path="/reliable-credit-score" 
            element={
              <ReliableCreditScore 
                onStartClick={handleStartReliableCreditCheck} 
                reliableCreditUrl={reliableCreditUrl} 
              />
            } 
          />
          <Route 
            path="/truthfinder-criminal-search" 
            element={
              <TruthFinderSearch 
                onStartClick={handleStartTruthfinderSearch} 
                truthfinderUrl={truthfinderUrl} 
              />
            } 
          />
          <Route 
            path="/truthfinder-search" 
            element={
              <TruthFinderSearch 
                onStartClick={handleStartTruthfinderSearch} 
                truthfinderUrl={truthfinderUrl} 
              />
            } 
          />
          <Route 
            path="/guides" 
            element={
              <GuidesHub 
                onStartClick={handleGlobalStartClick} 
              />
            } 
          />
          <Route 
            path="/guides/:slug" 
            element={
              <GuideDetail 
                onStartClick={handleGlobalStartClick} 
              />
            } 
          />
          {/* Catch-all fallback route to home */}
          <Route 
            path="*" 
            element={
              <Home 
                onStartClick={handleStartBackgroundCheck} 
                affiliateUrl={affiliateUrl} 
              />
            } 
          />
        </Routes>
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

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
