import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight, Shield, Clock, FileCheck } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 bg-white overflow-hidden">
      
      {/* Subtle Background Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-blue-50/80 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge / Security Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-8 shadow-2xs">
            <Lock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>256-Bit SSL Encryption • FCRA Compliant Screening Gateway</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
            Rental Online <span className="text-blue-600 underline decoration-blue-200 decoration-4 underline-offset-8">Background checks</span>
          </h1>

          {/* Short Description */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Fast, accurate, and nationwide background screening designed for residential landlords, property managers, cautious employers, and prospective applicants. Get reliable verified reports in minutes.
          </p>

          {/* Prominent Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onStartClick}
              id="hero-start-btn"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Start Background Check</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold px-6 py-4 rounded-2xl border border-slate-200/80 transition-colors text-center text-base"
            >
              Learn How It Works
            </a>
          </div>

          {/* Security & Trust Icons Grid */}
          <div className="pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
            
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-left">Nationwide Criminal & Eviction</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-left">Results within Minutes</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <span className="text-left">FCRA Permissible Reports</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-left">Zero Subscription Fees</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
