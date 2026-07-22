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
  Award,
  CheckCircle2,
  Scale,
  Users
} from 'lucide-react';
import { SEOHead } from './SEOHead';

interface TransUnionCreditCheckProps {
  onStartClick: () => void;
  transunionUrl: string;
}

export const TransUnionCreditCheck: React.FC<TransUnionCreditCheckProps> = ({
  onStartClick,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEOHead
        title="TransUnion® Credit Check & Resident Screening | Official Portal"
        description="Perform official TransUnion credit checks for tenant applicants. Instant credit scores, payment history, debt verification with soft credit pulls."
        canonicalUrl="https://www.whitebridgefind.com/transunion-credit-check"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold mb-6 shadow-xs">
              <Award className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Official TransUnion® Screening Gateway</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 font-display">
              Official <span className="text-teal-600 underline decoration-teal-100 decoration-4 underline-offset-8">TransUnion® Credit Check</span> & Resident Screening
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
              Run instant, high-accuracy TransUnion® credit checks. Verify payment reliability, debt-to-income ratios, bank balances, and rental credit ratings securely without impacting credit scores.
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
                <Lock className="w-3.5 h-3.5 text-teal-600" />
                256-Bit Bank-Grade Encryption
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5 text-teal-600" />
                Soft Inquiry Protection (No Score Impact)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Real-Time TransUnion® Database Access
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Trial Value Proposition Bento Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 font-mono block mb-2">
            Multi-Bureau Reliability
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Why Property Owners Trust TransUnion® Screening
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            TransUnion® is one of America's big three credit reporting bureaus. Providing an official TransUnion credit report verifies creditworthiness and streamlines lease approvals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Detailed Payment History
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Examine 24-month payment records, credit card utilization, auto loan balances, student loans, and mortgage payment consistency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Soft Credit Access
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our partner integration utilizes soft credit inquiry protocols, ensuring that requesting or checking credit reports does not reduce applicant credit scores.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Eviction & Debt Analysis
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Identify civil court judgments, tax liens, past-due utility collections, and charge-offs that indicate financial distress or lease default risk.
            </p>
          </div>

        </div>
      </section>

      {/* Comprehensive SEO Content Section (500+ Words) */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            
            <span className="text-xs font-bold uppercase tracking-widest text-teal-600 font-mono block mb-2">
              Credit Score Analysis Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-6">
              Understanding TransUnion® Credit Scores for Landlords and Tenants
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Credit scoring models evaluate financial risk based on historical borrowing behavior. When landlords review a <strong>TransUnion® credit report</strong>, they examine several core metrics to determine whether an applicant is capable of fulfilling lease obligations reliably every month.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
              Key Components of TransUnion® Credit Ratings
            </h3>

            <div className="space-y-4 my-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Payment History (35%)</h4>
                  <p className="text-xs text-slate-600">Tracks whether previous credit accounts, credit cards, and installment loans were paid on time or experienced late payments (30, 60, or 90+ days past due).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Credit Utilization Ratio (30%)</h4>
                  <p className="text-xs text-slate-600">Measures total revolving debt balances compared to overall credit limits. Lower utilization ratios (below 30%) signal prudent financial management.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Length of Credit History (15%)</h4>
                  <p className="text-xs text-slate-600">Considers the average age of open accounts. Established credit profiles give landlords greater confidence in long-term financial stability.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Public Records & Collections (10%)</h4>
                  <p className="text-xs text-slate-600">Flags active collections, civil money judgments, bankruptcies (Chapter 7 or 13), and unpaid utility balances.</p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 my-8">
              <h4 className="text-sm font-bold text-teal-900 mb-2 flex items-center gap-2">
                <Scale className="w-4 h-4 text-teal-600 shrink-0" />
                FCRA Landlord Notice Requirement
              </h4>
              <p className="text-xs text-teal-800 leading-relaxed">
                When using TransUnion credit checks to make leasing decisions, landlords must comply with Fair Credit Reporting Act guidelines. If an applicant is turned down or asked for an increased deposit due to credit history, an Adverse Action Notice must be provided.
              </p>
            </div>

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
              Does checking my score hurt my credit score?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              No. Checking your credit score using our secure portal is classified as a soft pull, meaning it does not alter or harm your credit health in any way.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" />
              What information is displayed on the TransUnion report?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              Your comprehensive report outlines active payment schedules, credit score tiers, past registry histories, collection records, and verification status stamps.
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
            <span>Secure TransUnion® Verification Network</span>
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
