import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen,
  Share2,
  Lock,
  Award,
  Scale
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { LANDLORD_GUIDES } from '../data/guidesData';

interface GuideDetailProps {
  onStartClick: () => void;
}

export const GuideDetail: React.FC<GuideDetailProps> = ({ onStartClick }) => {
  const { slug } = useParams<{ slug: string }>();

  const guide = LANDLORD_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const relatedGuides = LANDLORD_GUIDES.filter((g) => 
    guide.relatedGuidesSlugs.includes(g.slug)
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEOHead
        title={guide.title}
        description={guide.metaDescription}
        canonicalUrl={`https://www.whitebridgefind.com/guides/${guide.slug}`}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Link to="/guides" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Guides</span>
            </Link>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-xs sm:max-w-md">{guide.category}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>FCRA Compliant Educational Series</span>
          </div>
        </div>
      </div>

      {/* Article Hero Header */}
      <header className="bg-white border-b border-slate-100 pt-10 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {guide.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {guide.readTime}
            </span>
            <span className="text-xs text-slate-400">• Updated {guide.updatedDate}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-display">
            {guide.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
            {guide.summary}
          </p>

          <div className="flex items-center justify-between border-t border-slate-100 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm font-display">
                LS
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">{guide.author}</span>
                <span className="block text-[10px] text-slate-400">Verified Landlord Compliance Desk</span>
              </div>
            </div>

            <button
              onClick={onStartClick}
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <span>Order Background Check</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Article Body Content & Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Column (8 Cols) */}
          <main className="lg:col-span-8">
            
            {/* Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 rounded-3xl p-6 sm:p-8 mb-10 shadow-xs">
              <h2 className="text-base font-bold text-blue-950 mb-4 flex items-center gap-2 font-display">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                Key Executive Takeaways
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {guide.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Table of Contents */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-10 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" /> Guide Outline:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                {guide.sections.map((sec) => (
                  <li key={sec.id}>
                    <a 
                      href={`#${sec.id}`}
                      className="hover:text-blue-600 transition-colors block py-1 border-b border-slate-50"
                    >
                      → {sec.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-900 font-display mb-4 border-b border-slate-200/80 pb-2">
                    {section.heading}
                  </h2>

                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="mb-4 text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {/* Bullet Points if present */}
                  {section.bulletPoints && (
                    <ul className="space-y-2.5 my-6 pl-2">
                      {section.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                          <span className="leading-relaxed">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Table Data if present */}
                  {section.tableData && (
                    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                          <tr>
                            {section.tableData.headers.map((th, thIdx) => (
                              <th key={thIdx} className="p-4">{th}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600">
                          {section.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-4">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Callout Box if present */}
                  {section.calloutBox && (
                    <div className={`p-6 rounded-2xl border my-6 text-xs sm:text-sm ${
                      section.calloutBox.type === 'warning'
                        ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                        : section.calloutBox.type === 'law'
                        ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                        : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    }`}>
                      <h4 className="font-bold mb-1.5 flex items-center gap-2">
                        {section.calloutBox.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />}
                        {section.calloutBox.type === 'law' && <Scale className="w-4 h-4 text-blue-600 shrink-0" />}
                        {section.calloutBox.type === 'tip' && <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {section.calloutBox.title}
                      </h4>
                      <p className="leading-relaxed opacity-90">{section.calloutBox.text}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Article FAQ */}
            <div className="mt-16 pt-10 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {guide.faq.map((f, fIdx) => (
                  <div key={fIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                    <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                      {f.question}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Guides Links */}
            {relatedGuides.length > 0 && (
              <div className="mt-16 pt-10 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 font-display mb-6">
                  Recommended Next Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedGuides.map((rg) => (
                    <Link
                      key={rg.slug}
                      to={`/guides/${rg.slug}`}
                      className="bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xs transition-all block group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        {rg.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {rg.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </main>

          {/* Right Sticky Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Conversion Widget Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-7 sticky top-24 shadow-xl border border-slate-800">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-semibold mb-4 border border-blue-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Authorized Screening Portal</span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-3 leading-snug">
                Put Screening Best Practices into Action
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Run instant FCRA-compliant tenant checks. Access verified eviction court records, national criminal files, and TransUnion® credit reports.
              </p>

              <div className="space-y-3 mb-6 border-y border-slate-800 py-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant Nationwide Eviction Search</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Soft TransUnion® Credit Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero Impact on Applicant Credit</span>
                </div>
              </div>

              <button
                onClick={onStartClick}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wide"
              >
                <span>Run Background Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400">
                <Lock className="w-3 h-3 text-blue-400" />
                <span>256-Bit SSL Encrypted Clearinghouse</span>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};
