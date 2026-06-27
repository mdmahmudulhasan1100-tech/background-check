import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('how-long');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
            <HelpCircle className="w-6 h-6" />
          </div>
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-md">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Everything you need to know about our secure online background check process and applicant privacy protection.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-blue-300 shadow-md ring-1 ring-blue-500/10' : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-1 text-slate-600 text-base leading-relaxed border-t border-slate-50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50/80 border border-blue-100 rounded-2xl p-6 sm:p-8 text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="font-bold text-slate-900 text-base">Have additional compliance questions?</h4>
            <p className="text-sm text-slate-600 mt-0.5">Our referral support desk is available to assist property managers and hiring teams.</p>
          </div>
          <a
            href="mailto:compliance@verifyapplicant.com"
            className="inline-block bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-5 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-colors shrink-0"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
};
