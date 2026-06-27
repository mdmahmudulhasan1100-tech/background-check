import React from 'react';
import { FileText, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-blue-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-md">
            Simple Verification Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight font-display">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Our online screening portal reduces friction for property owners and hiring teams. Get verified consumer reports in three effortless digital steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-blue-200 -translate-y-12 -z-0 pointer-events-none" />

          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div 
              key={stepItem.step}
              className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    {getStepIcon(stepItem.icon)}
                  </div>
                  <span className="text-4xl font-extrabold text-slate-200 font-display">
                    {stepItem.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                <span>Step {index + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          ))}

        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Note: All identity verification requests strictly collect digital applicant consent under Fair Credit Reporting Act compliance before initiating report pulls.
          </p>
        </div>

      </div>
    </section>
  );
};
