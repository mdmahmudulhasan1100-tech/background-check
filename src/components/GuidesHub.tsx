import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Scale, 
  AlertTriangle,
  Award,
  Sparkles
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { LANDLORD_GUIDES, Guide } from '../data/guidesData';

interface GuidesHubProps {
  onStartClick: () => void;
}

export const GuidesHub: React.FC<GuidesHubProps> = ({ onStartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Landlord Best Practices', 'Credit Analysis', 'Background Screening & Law', 'State Laws & Legal', 'Fraud Prevention'];

  const filteredGuides = LANDLORD_GUIDES.filter((guide) => {
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <SEOHead
        title="Landlord Resource Center & Tenant Screening Educational Guides (2026)"
        description="Free educational guides for landlords and property managers. Learn how to screen tenants, read credit reports, evaluate criminal background checks, and comply with state screening laws."
        canonicalUrl="https://www.whitebridgefind.com/guides"
      />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Free Landlord Educational Resource Center</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 font-display">
              Landlord & Tenant Screening <span className="text-blue-400 underline decoration-blue-500/40 decoration-4 underline-offset-8">Educational Guides</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              Actionable, FCRA-compliant guides to help property owners screen applicants effectively, prevent rental fraud, analyze credit trade lines, and adhere to state landlord-tenant laws.
            </p>

            {/* Search Input Box */}
            <div className="relative max-w-xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides (e.g. credit reports, state laws, fake pay stubs)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 pb-4 border-b border-slate-200 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              Comprehensive Educational Articles
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Showing {filteredGuides.length} of {LANDLORD_GUIDES.length} landlord guides
            </p>
          </div>

          <button
            onClick={onStartClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Run Tenant Screening Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide) => (
            <article 
              key={guide.slug}
              className="bg-white rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden group hover:-translate-y-1 duration-200"
            >
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/50">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display mb-3 leading-snug">
                    <Link to={`/guides/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {guide.summary}
                  </p>
                </div>

                <div>
                  {/* Takeaways snippet */}
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" /> Key Highlight:
                    </span>
                    <p className="text-[11px] text-slate-700 leading-normal italic">
                      "{guide.keyTakeaways[0]}"
                    </p>
                  </div>

                  <Link
                    to={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-base font-bold text-slate-800 mb-1">No guides found matching your search</h3>
            <p className="text-xs text-slate-500 mb-4">Try searching for broader terms like "credit", "background", or "laws".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Clear Search Filters
            </button>
          </div>
        )}

      </section>

      {/* Embedded Screening Callout Banner */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FCRA Compliant Landlord Gateway</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display mb-4 text-white">
                Ready to Screen Prospective Tenants?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                Put these guide practices into action. Access instant eviction histories, national criminal checks, employment verifications, and soft TransUnion® credit scores in minutes.
              </p>
              <button
                onClick={onStartClick}
                className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-[0.99] transition-all flex items-center gap-2 mx-auto cursor-pointer"
              >
                <span>Run Instant Tenant Background Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
