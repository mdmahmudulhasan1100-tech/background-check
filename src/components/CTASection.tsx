import React from 'react';
import { ShieldCheck, ArrowRight, Lock, ExternalLink } from 'lucide-react';

interface CTASectionProps {
  onStartClick: () => void;
  affiliateUrl: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartClick, affiliateUrl }) => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Decorative Blue Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Instant Digital Access • No Monthly Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-display">
              Ready to Run a Secure Online Background Check?
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Connect directly to accredited nationwide screening clearinghouses. Protect your residential property or company workplace today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartClick}
                id="cta-section-start-btn"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/40 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Start Background Check</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={affiliateUrl}
                target="_blank"
                rel="nofollow noreferrer"
                className="text-xs text-slate-400 hover:text-slate-300 underline underline-offset-4 flex items-center gap-1 mt-2 sm:mt-0 sm:ml-4"
              >
                <span>Direct Partner Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 pt-8">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>256-Bit SSL Secured</span>
              </span>
              <span>•</span>
              <span>FCRA Compliant Gateway</span>
              <span>•</span>
              <span>Instant Verification Link</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
