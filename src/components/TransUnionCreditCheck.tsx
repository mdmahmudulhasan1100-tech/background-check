import React from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  ArrowRight, 
  EyeOff, 
  Sparkles, 
  HelpCircle,
  FileCheck2,
  TrendingUp,
  Award
} from 'lucide-react';

interface TransUnionCreditCheckProps {
  onStartClick: () => void;
  transunionUrl: string;
}

export const TransUnionCreditCheck: React.FC<TransUnionCreditCheckProps> = ({
  onStartClick,
  transunionUrl,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold mb-6 shadow-xs">
              <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Official TransUnion® Partner Gateway</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
              Get Your Official <span className="text-teal-600 underline decoration-teal-100 decoration-4 underline-offset-8">TransUnion® Credit Check</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
              Run an instant credit verification securely. Verify identity, pull high-accuracy score records, and build trust with your prospective landlord.
            </p>

            {/* CTA Button Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer text-base"
              >
                <span>Start TransUnion® Credit Check</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                Secure SSL Encrypted Connection
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                Soft Credit Pull (No Score Impact)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                Real-Time Database Verification
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Value Proposition Bento Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Why Verify Your Credit Profile?
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Providing a validated TransUnion® credit report speeds up rental approval processes and establishes direct credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Vetted Financial Standing
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Confirm your credit score and financial accountability instantly via our secure tracking portal.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Soft Credit Access
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our partner integration utilizes official protocols ensuring that checking your score will never lower or impact your credit rating.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Landlord Approval Ready
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Get an easily shareable summary showing your clean credit and validation badge to secure your next home quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Credit Score FAQ */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            TransUnion® Credit Check FAQ
          </h2>
          <p className="text-sm text-slate-500">
            Common questions regarding our digital credit verification pipeline.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" />
              Does this affect my credit score?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              No. Checking your credit score using our secure portal is classified as a soft pull, meaning it does not alter or harm your credit health in any way.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" />
              What information is displayed?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              Your comprehensive report outlines active payment schedules, credit score tiers, past registry histories, and verification status stamps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" />
              How secure is my data?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              All records, communication, and form details are protected by robust 256-bit bank-level SSL encryption, keeping your confidential data completely private.
            </p>
          </div>
        </div>
      </section>

      {/* Trustworthy Bottom CTA */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure Verification Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
            Verify Your Credit Record Instantly
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Join thousands of applicants using the official TransUnion® gateway to fast-track approvals.
          </p>
          <button
            onClick={onStartClick}
            className="bg-teal-600 hover:bg-teal-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-[0.99] transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            <span>Start TransUnion® Credit Check</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
