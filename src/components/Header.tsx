import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, Menu, X, Settings, ChevronDown, ExternalLink, CreditCard, ClipboardCheck, Sparkles, Search, Home, BookOpen } from 'lucide-react';
import { DOMAIN_IDEAS } from '../data';

interface HeaderProps {
  currentDomain: string;
  onDomainChange: (domain: string) => void;
  onStartClick: () => void;
  onOpenSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentDomain,
  onDomainChange,
  onStartClick,
  onOpenSettings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveKey = () => {
    const path = location.pathname;
    if (path.startsWith('/guides')) return 'guides';
    if (path === '/tenant-background-check') return 'tenant-background-check';
    if (path === '/transunion-credit-check') return 'transunion-credit-check';
    if (path === '/reliable-credit-score') return 'reliable-credit-score';
    if (path === '/truthfinder-criminal-search') return 'truthfinder-criminal-search';
    return 'home';
  };

  const activeKey = getActiveKey();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md transition-all ${
                activeKey === 'transunion-credit-check' 
                  ? 'bg-teal-600 shadow-teal-500/20' 
                  : activeKey === 'truthfinder-criminal-search'
                  ? 'bg-sky-600 shadow-sky-500/20'
                  : 'bg-blue-600 shadow-blue-500/20'
              }`}
            >
              <ShieldCheck className="w-6 h-6" />
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setDomainDropdownOpen(!domainDropdownOpen)}
                className="flex items-center gap-1.5 text-slate-900 font-bold text-lg sm:text-xl tracking-tight hover:text-blue-600 transition-colors focus:outline-hidden cursor-pointer"
                title="Click to preview other domain names"
              >
                <span>{currentDomain}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
              <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Authorized Screening Gateway
              </span>

              {/* Domain Switcher Dropdown */}
              {domainDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setDomainDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 text-xs font-semibold uppercase text-slate-400 border-b border-slate-50 mb-1">
                      Preview Domain Names
                    </div>
                    {DOMAIN_IDEAS.map((domain) => (
                      <button
                        key={domain}
                        onClick={() => {
                          onDomainChange(domain);
                          setDomainDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                          currentDomain === domain
                            ? 'bg-blue-50 text-blue-600 font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{domain}</span>
                        {currentDomain === domain && <span className="w-2 h-2 rounded-full bg-blue-600" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop Navigation Switcher */}
          <nav className="hidden lg:flex items-center bg-slate-100/80 p-1 rounded-2xl border border-slate-200/50">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeKey === 'home'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <Link
              to="/tenant-background-check"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeKey === 'tenant-background-check'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>Tenant Checks</span>
            </Link>
            <Link
              to="/transunion-credit-check"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeKey === 'transunion-credit-check'
                  ? 'bg-white text-teal-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5 text-teal-500" />
              <span>TransUnion® Credit</span>
            </Link>
            <Link
              to="/reliable-credit-score"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeKey === 'reliable-credit-score'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>$1 Credit Report</span>
            </Link>
            <Link
              to="/truthfinder-criminal-search"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeKey === 'truthfinder-criminal-search'
                  ? 'bg-white text-sky-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-sky-500" />
              <span>TruthFinder Search</span>
            </Link>
            <Link
              to="/guides"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                activeKey === 'guides'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-500" />
              <span>Landlord Guides</span>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSettings}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              title="Configure Portal Destination URL"
            >
              <Settings className="w-5 h-5" />
            </button>

            <button
              onClick={onStartClick}
              id="header-start-btn"
              className={`font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm hover:shadow-md active:scale-[0.98] flex items-center gap-2 cursor-pointer text-white ${
                activeKey === 'transunion-credit-check'
                  ? 'bg-teal-600 hover:bg-teal-700 hover:shadow-teal-500/20'
                  : activeKey === 'truthfinder-criminal-search'
                  ? 'bg-sky-600 hover:bg-sky-700 hover:shadow-sky-500/20'
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/20'
              }`}
            >
              <span>
                {activeKey === 'transunion-credit-check'
                  ? 'Start Credit Check'
                  : activeKey === 'reliable-credit-score'
                  ? 'Access $1 Credit Report'
                  : activeKey === 'truthfinder-criminal-search'
                  ? 'TruthFinder Search'
                  : 'Start Background Check'}
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSettings}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              title="Portal Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Select Portal Service
          </div>
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeKey === 'home'
                  ? 'bg-blue-50/70 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Home className="w-4 h-4 shrink-0" />
              <span>Home Overview</span>
            </Link>

            <Link
              to="/tenant-background-check"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeKey === 'tenant-background-check'
                  ? 'bg-blue-50/70 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <ClipboardCheck className="w-4 h-4 shrink-0" />
              <span>Tenant Background Checks</span>
            </Link>

            <Link
              to="/transunion-credit-check"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeKey === 'transunion-credit-check'
                  ? 'bg-teal-50/70 text-teal-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <CreditCard className="w-4 h-4 shrink-0 text-teal-500" />
              <span>TransUnion® Credit Check</span>
            </Link>

            <Link
              to="/reliable-credit-score"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeKey === 'reliable-credit-score'
                  ? 'bg-blue-50/70 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0 text-amber-500 animate-pulse" />
              <span>Access $1 Credit Report</span>
            </Link>

            <Link
              to="/truthfinder-criminal-search"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeKey === 'truthfinder-criminal-search'
                  ? 'bg-sky-50/70 text-sky-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4 shrink-0 text-sky-500" />
              <span>TruthFinder Search</span>
            </Link>

            <Link
              to="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-left flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeKey === 'guides'
                  ? 'bg-blue-50/70 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4 shrink-0 text-blue-500" />
              <span>Landlord Educational Guides</span>
            </Link>
          </nav>
          
          <div className="pt-2 px-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartClick();
              }}
              id="mobile-header-start-btn"
              className={`w-full text-white font-semibold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                activeKey === 'transunion-credit-check'
                  ? 'bg-teal-600 hover:bg-teal-700'
                  : activeKey === 'truthfinder-criminal-search'
                  ? 'bg-sky-600 hover:bg-sky-700 shadow-sky-600/10'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <span>
                {activeKey === 'transunion-credit-check'
                  ? 'Start Credit Check'
                  : activeKey === 'reliable-credit-score'
                  ? 'Access $1 Credit Report'
                  : activeKey === 'truthfinder-criminal-search'
                  ? 'TruthFinder Search'
                  : 'Start Background Check'}
              </span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
