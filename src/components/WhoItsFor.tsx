import React, { useState } from 'react';
import { Home, Building2, Briefcase, UserCheck, Check, ArrowRight } from 'lucide-react';
import { WHO_ITS_FOR_AUDIENCES } from '../data';

interface WhoItsForProps {
  onStartClick: () => void;
}

export const WhoItsFor: React.FC<WhoItsForProps> = ({ onStartClick }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getAudienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-blue-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-600" />;
      default:
        return <UserCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  const filteredAudiences = activeTab === 'all'
    ? WHO_ITS_FOR_AUDIENCES
    : WHO_ITS_FOR_AUDIENCES.filter(a => a.id === activeTab);

  return (
    <section id="who-its-for" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-md">
            Tailored Verification Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight font-display">
            Who It's For
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Whether you are screening prospective residential tenants or vetting critical new team hires, our gateway delivers dependable peace of mind.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Audiences
          </button>
          {WHO_ITS_FOR_AUDIENCES.map((a) => (
            <button
              key={a.id}
              onClick={() => setActiveTab(a.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === a.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {a.title}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAudiences.map((audience) => (
            <div
              key={audience.id}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none -z-0 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {getAudienceIcon(audience.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-display">
                      {audience.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">
                      {audience.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {audience.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  FCRA Compliant Reports
                </span>
                <button
                  onClick={onStartClick}
                  className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Start Check</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
