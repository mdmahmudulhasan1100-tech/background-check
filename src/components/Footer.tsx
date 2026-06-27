import React from 'react';
import { ShieldCheck, Lock, Settings } from 'lucide-react';

interface FooterProps {
  currentDomain: string;
  onOpenLegal: (modalType: 'privacy' | 'terms' | 'affiliate') => void;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentDomain,
  onOpenLegal,
  onOpenSettings,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-xl font-display">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span>{currentDomain}</span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Streamlined online background check and tenant screening gateway. Connecting property managers, employers, and applicants to accredited verification clearinghouses.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
              <Lock className="w-3.5 h-3.5 text-blue-500" />
              <span>Encrypted SSL Verification Gateway</span>
            </div>
          </div>

          {/* Col 2: Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-display">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('affiliate')}
                  className="hover:text-blue-400 text-slate-300 transition-colors cursor-pointer text-left focus:outline-hidden font-medium"
                >
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <a 
                  href="https://www.ftc.gov/business-guidance/resources/using-consumer-reports-what-landlords-need-know" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-slate-500 hover:text-slate-400 block pt-1"
                >
                  FTC Landlord Guidance ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Settings */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-display">
              Contact Desk
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <span className="block text-xs text-slate-500">Inquiries</span>
                <a href="mailto:support@verifyapplicant.com" className="hover:text-white transition-colors">
                  support@{currentDomain.toLowerCase()}
                </a>
              </li>
              <li>
                <span className="block text-xs text-slate-500">Compliance & FCRA Desk</span>
                <a href="mailto:compliance@verifyapplicant.com" className="hover:text-white transition-colors">
                  compliance@{currentDomain.toLowerCase()}
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenSettings}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 bg-blue-950/50 px-2.5 py-1.5 rounded-lg border border-blue-900/50 transition-colors cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Configure Affiliate Link</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Affiliate Agreement Required Disclosure Box */}
        <div className="py-8 border-b border-slate-900 text-xs text-slate-500 leading-relaxed bg-slate-900/40 px-6 my-6 rounded-2xl border border-slate-800/60">
          <p className="font-semibold text-slate-400 mb-1">Affiliate Referral Disclosure & FCRA Notice:</p>
          <p>
            {currentDomain} operates as an independent marketing affiliate and referral portal. We do not directly assemble consumer reports, perform courthouse lookups, or act as a Consumer Reporting Agency (CRA) under the Fair Credit Reporting Act. When you initiate screening via our "Start Background Check" buttons, you are transferred securely to an authorized accredited third-party screening provider (such as Whitebridge or authorized screening networks). This site operator may receive referral compensation for screening purchases made through partner links. All report accuracy, dispute handling, and compliance responsibilities reside exclusively with the accredited partner CRA.
          </p>
        </div>

        {/* Copyright & Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 pt-4">
          <p>© {currentYear} {currentDomain}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>SOC-2 Aligned Clearinghouse</span>
            <span>•</span>
            <span>256-Bit SSL</span>
            <span>•</span>
            <span>FCRA Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
