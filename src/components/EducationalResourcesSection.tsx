import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { LANDLORD_GUIDES } from '../data/guidesData';

export const EducationalResourcesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Landlord Educational & Legal Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Master Tenant Screening & Legal Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Explore expert, FCRA-compliant guides written for property managers and private landlords. Learn how to analyze credit reports, evaluate criminal checks, spot red flags, and comply with state screening laws.
            </p>
          </div>

          <Link
            to="/guides"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>View All Landlord Guides</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>
        </div>

        {/* 5 Core Guides Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANDLORD_GUIDES.map((guide) => (
            <article 
              key={guide.slug}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1 duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Clock className="w-3 h-3" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display mb-3 leading-snug">
                  <Link to={`/guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {guide.summary}
                </p>
              </div>

              <div>
                <Link
                  to={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>Read Free Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
