import React from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  ArrowRight, 
  UserCheck, 
  CheckCircle, 
  EyeOff, 
  TrendingUp, 
  AlertCircle, 
  Users, 
  HelpCircle,
  FileText
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
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold mb-6 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
              <span>Official TransUnion® Partner Gateway</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 font-display">
              TransUnion <span className="text-teal-600 underline decoration-teal-100 decoration-4 underline-offset-8">Credit Check</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
              Fast, secure, and compliant tenant credit reports. Soft inquiry protection ensures applicants' credit scores are never affected.
            </p>

            {/* CTA Button Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer text-base"
              >
                <span>Run TransUnion Credit Check</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                256-Bit SSL Encrypted
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                Soft Credit Pull (No Score Impact)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
                Instant Bureau Routing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Key Benefits Bento Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Why Choose TransUnion SmartMove?
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Get the industry's most trusted credit check and tenant vetting files delivered instantly to your inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Soft Pull */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Soft Inquiry Guarantee
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike traditional credit bureau checks, this uses soft pull technology. It allows property owners to check scores without dropping the applicant’s credit standing.
            </p>
          </div>

          {/* Card 2: Full Credit Score & History */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Full Score Card & Payment History
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Provides detailed financial breakdowns, payment histories, open trade lines, bankruptcies, and tax liens mapped securely using direct bureau indexes.
            </p>
          </div>

          {/* Card 3: Direct Hand-off Safety */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-slate-950/5 text-slate-900 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Bank-Grade Vetting Protocol
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Protected by military-grade SSL data encryption pipelines. TransUnion manages sensitive identity records directly so landlords do not have to store SSNs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Specific to Credit Check */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              How the TransUnion Flow Works
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
              Run hassle-free credit checks in three simple, digital steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-teal-600 text-white font-bold text-lg flex items-center justify-center mb-6 shadow-md shadow-teal-600/10">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Enter Basic Details</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Provide applicant's email address and basic identifiers to launch the screening invitation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-teal-600 text-white font-bold text-lg flex items-center justify-center mb-6 shadow-md shadow-teal-600/10">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Applicant Safe Consent</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                The prospective tenant receives a secure invite to authenticate their identity and authorize the TransUnion pull.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-teal-600 text-white font-bold text-lg flex items-center justify-center mb-6 shadow-md shadow-teal-600/10">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">Instant Secure Reports</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Review complete PDF credit files, resident scores, and payment indicators directly on the secure dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Check Specific FAQ */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Credit Check FAQ
          </h2>
          <p className="text-sm text-slate-500">
            Answers to common questions regarding credit reports and score pulls.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
              Will this credit check lower my credit score?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              No. When you execute screening via our authorized TransUnion link, it initiates a **soft inquiry**. Unlike hard inquiries, soft credit checks do not affect or lower an applicant's credit score.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
              What exactly is included in the TransUnion report?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              The report features the official ResidentScore® built specifically for rental assessment, active collections, open lines of credit, tax liens, past-due payment histories, and overall debt ratios.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
              How are applicant details protected?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              Applicants input their sensitive personal identification details (like SSN) directly on TransUnion’s secure gateway. The site operator and the landlord never see or store plain-text SSNs, eliminating security and identity theft liabilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-6">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure Bureau Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
            Ready to initiate a TransUnion Credit Check?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Route directly to TransUnion’s digital pre-vetting portal. Configure your partner link, enter details, and begin immediately.
          </p>
          <button
            onClick={onStartClick}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-[0.99] transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            <span>Launch Credit Check Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
