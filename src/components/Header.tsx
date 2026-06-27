import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Settings, ChevronDown, ExternalLink } from 'lucide-react';
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

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            
            <div className="relative">
              <button
                onClick={() => setDomainDropdownOpen(!domainDropdownOpen)}
                className="flex items-center gap-1.5 text-slate-900 font-bold text-lg sm:text-xl tracking-tight hover:text-blue-600 transition-colors focus:outline-hidden"
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
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
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

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#who-its-for" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Who It's For
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenSettings}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              title="Configure Affiliate Destination URL"
            >
              <Settings className="w-5 h-5" />
            </button>

            <button
              onClick={onStartClick}
              id="header-start-btn"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <span>Start Background Check</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSettings}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
              title="Affiliate Link Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 pt-2">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              How It Works
            </a>
            <a
              href="#who-its-for"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Who It's For
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Frequently Asked Questions
            </a>
          </nav>
          
          <div className="pt-2 px-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartClick();
              }}
              id="mobile-header-start-btn"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Start Background Check</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
