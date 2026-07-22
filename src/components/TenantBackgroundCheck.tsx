import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  HelpCircle,
  FileText,
  UserCheck,
  AlertTriangle,
  Scale,
  Building2,
  Search,
  Award
} from 'lucide-react';
import { SEOHead } from './SEOHead';

interface TenantBackgroundCheckProps {
  onStartClick: () => void;
  affiliateUrl: string;
}

export const TenantBackgroundCheck: React.FC<TenantBackgroundCheckProps> = ({
  onStartClick,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEOHead
        title="Tenant Background Check Services | FCRA Compliant Screening for Landlords"
        description="Run comprehensive, FCRA-compliant tenant background checks. Verify rental history, evictions, criminal records, and credit scores with automated tenant screening."
        canonicalUrl="https://www.whitebridgefind.com/tenant-background-check"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold mb-6 shadow-xs">
              <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>FCRA Compliant Tenant Screening Gateway</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 font-display">
              Comprehensive <span className="text-blue-600 underline decoration-blue-100 decoration-4 underline-offset-8">Tenant Background Check</span> Services for Landlords
            </h1>

            {/* Lead Paragraph */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
              Protect your rental property investments with instant, nationwide tenant screening. Access verified eviction histories, criminal background records, credit checks, and employment verifications in minutes.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer text-base"
              >
                <span>Run Tenant Background Check Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500 font-medium font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                256-Bit SSL Encrypted
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                FCRA & Fair Housing Aligned
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden sm:inline" />
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Instant Results Ready
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Educational / SEO Content Block 1 */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono block mb-2">
            Thorough Tenant Vetting
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Why FCRA-Compliant Tenant Screening Matters
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            For independent landlords and professional property management companies alike, tenant screening is the single most critical step in safeguarding real estate assets. Placing an unvetted tenant can lead to thousands of dollars in lost rental income, property damages, legal eviction fees, and stress.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              Eviction Record Search
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Scan multi-state court filings and judgment databases for prior unlawful detainers, formal eviction notices, and landlord monetary judgments.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              National Criminal Check
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Query over 500 million state, county, and federal criminal records including felony convictions, violent offenses, and sex offender registries.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              Income & Employment
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Verify tenant employment stability, reported earnings, and rent-to-income ratios to ensure steady monthly rental payment capacity.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
              Credit Score & Liabilities
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Review full credit reports, payment histories, open collection accounts, bankruptcies, and debt balances without impacting applicant credit scores.
            </p>
          </div>

        </div>
      </section>

      {/* In-depth Article / Educational Section (500-1000 Words) */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-slate max-w-none">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono block mb-2">
              Landlord Compliance & Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-6">
              How to Conduct FCRA-Compliant Tenant Screening Step-by-Step
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Under the federal <strong>Fair Credit Reporting Act (FCRA)</strong> and the <strong>Fair Housing Act (FHA)</strong>, landlords and property managers must adhere to strict consumer privacy and anti-discrimination standards when running background checks on prospective applicants. Here is the recommended best-practice workflow for property owners:
            </p>

            <div className="space-y-6 my-8">
              
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Establish Uniform Written Screening Criteria
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before accepting applications, document your minimum credit score thresholds, income-to-rent ratios (e.g., 3x monthly rent), and acceptable criminal history parameters. Applying the exact same criteria to all applicants prevents Fair Housing Act discrimination claims.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Obtain Signed Applicant Authorization
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    FCRA guidelines strictly prohibit running background or credit checks without explicit written consent from the applicant. Our online screening portal automates this step by emailing applicants a secure digital consent link.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Order Accredited Background Reports
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Submit the screening order through an accredited Consumer Reporting Agency (CRA). The system performs automated checks across credit bureau databases, state court registries, and national eviction indices in real time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Issue Adverse Action Notices if Denying an Applicant
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    If you reject an applicant or require a higher security deposit or co-signer based on information in their report, you are required by law to issue a formal <strong>Adverse Action Notice</strong> detailing the CRA contact info and their right to dispute report discrepancies.
                  </p>
                </div>
              </div>

            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 my-8">
              <h4 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                <Scale className="w-4 h-4 text-blue-600 shrink-0" />
                Legal Tip for Property Managers
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed">
                Always store completed tenant application files and authorization forms securely for at least 3 years to comply with federal audit requirements and state landlord-tenant statutes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Tenant Background Check FAQ
          </h2>
          <p className="text-sm text-slate-500">
            Answers to common landlord and applicant questions about tenant screening.
          </p>
        </div>

        <div className="space-y-4">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
              How long does a tenant background check take?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              Most tenant background check reports are generated within minutes. In rare cases where manual county court records need physical clerk verification, processing may take 24–48 hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
              Who pays for the tenant screening application?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              Landlords have the option to pay for the report directly or invite prospective tenants to pay the screening application fee online when submitting their credentials.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
              Does running a tenant check hurt the applicant's credit score?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              No. Our tenant screening platform initiates a "soft credit pull" for resident verification, ensuring that checking the applicant's score does not lower their credit rating.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
              What information is needed to run a tenant report?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed pl-7">
              You will need the applicant's full legal name, current address, date of birth, Social Security Number (SSN) or ITIN, and signed consent.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Authorized Screening Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4 text-white">
            Screen Tenant Applicants Confidently
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
            Get instant access to FCRA-compliant eviction records, criminal histories, and credit checks.
          </p>
          <button
            onClick={onStartClick}
            className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.99] transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            <span>Run Background Check Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
