import React from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  EyeOff, 
  Sparkles, 
  HelpCircle,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import { SEOHead } from './SEOHead';

interface ReliableCreditScoreProps {
  onStartClick: () => void;
  reliableCreditUrl: string;
}

export const ReliableCreditScore: React.FC<ReliableCreditScoreProps> = ({
  onStartClick,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEOHead
        title="Access $1 Credit Report & Score | Reliable Credit Monitoring"
        description="Get instant access to your 3-bureau credit score and complete credit report for just $1. Monitor credit health, track inquiries, and verify financial standing."
        canonicalUrl="https://www.whitebridgefind.com/reliable-credit-score"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-top-4 duration-300">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold mb-6 shadow-xs">
              <DollarSign className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Premium $1.00 Trial Access Campaign</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 font-display">
              Access Your <span className="text-blue-600 underline decoration-blue-100 decoration-4 underline-offset-8">$1 Credit Report & Reliable Credit Score</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
              Unlock your complete 3-bureau credit profile, real-time credit scores, and daily monitoring alerts for just $1.00. Built with soft inquiry protection to ensure your credit rating is never damaged.
            </p>

            {/* CTA Button Grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer text-base"
              >
                <span>Access $1 Credit Report Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                Secure 256-Bit SSL Encryption
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                Soft Credit Pull (Zero Score Harm)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                Equifax, Experian & TransUnion Included
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Trial Value Proposition Bento Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono block mb-2">
            Complete Financial Visibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            What is Included in Your $1 Credit Pack?
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Review detailed financial records, score histories, and monitoring parameters with absolute clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              3-Bureau Credit Scores
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Verify your multi-bureau credit scores instantly. Our accredited partners compile data from Equifax, Experian, and TransUnion.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Credit Score Simulator
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Model how paying off credit balances, opening new lines of credit, or resolving late payment items will change your credit scores in real time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
              Daily Credit Alerts
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Protect your identity with 24/7 credit oversight. Receive immediate alerts whenever new accounts, inquiries, or public records appear.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights / Features list */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono block mb-3">
                Accredited 3-Bureau Reports
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-6">
                Accurate Credit Files to Rent, Borrow, or Build Credibility
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you need a pristine credit score file to qualify for your dream apartment lease, apply for mortgage loans, or protect yourself against identity theft, our partner reports provide bank-grade accuracy and transparency.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Soft Inquiry Protections</h4>
                    <p className="text-xs text-slate-500">Checking your own score never results in a negative credit rating drop.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Comprehensive 3-Bureau Data</h4>
                    <p className="text-xs text-slate-500">Includes detailed reports from Equifax, Experian, and TransUnion records.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Easy Online Cancellation</h4>
                    <p className="text-xs text-slate-500">Cancel your trial online easily at any time or continue monitoring with full benefits.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-6">
                  <h3 className="text-lg font-bold font-display">Special Trial Pack</h3>
                  <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30 font-semibold">
                    $1.00 Trial Promo
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">1. Instant Credit Report & Score</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">2. Soft Credit Pull Mechanism</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">3. Daily Credit Alert Updates</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">4. Interactive Score Simulator</span>
                    <span className="font-bold text-emerald-400">Included</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">5. 256-Bit Military Encryption</span>
                    <span className="font-bold text-emerald-400">Active</span>
                  </li>
                </ul>

                <button
                  onClick={onStartClick}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-blue-600/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Access $1 Credit Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Specific FAQ */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            $1 Credit Report FAQ
          </h2>
          <p className="text-sm text-slate-500">
            Everything you need to know about your $1 trial credit check.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              What is the trial period and how much does it cost?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              The promotional access package grants you complete credit profile access and score monitoring for an initial trial fee of just $1.00. You can easily manage or stop your membership online at any point during or after the trial.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              Is my personal information protected?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              Absolutely. Our approved partners are fully FCRA-compliant and run bank-level 256-bit secure socket layer (SSL) pipelines. Your identity data is authenticated safely and encrypted completely during transmission.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              Will this credit check show up on my history?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              It will only show up as a "soft inquiry" on your personal records, which does not affect your active scores or impact future borrowing abilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <Lock className="w-3.5 h-3.5" />
            <span>Secure Verification Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
            Get Your Multi-Bureau Scores Instantly
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Review detailed reports, open collection checks, payment grids, and real-time alerts. Sign up for $1 to begin immediately.
          </p>
          <button
            onClick={onStartClick}
            className="bg-blue-500 hover:bg-blue-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            <span>Access $1 Credit Report</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
