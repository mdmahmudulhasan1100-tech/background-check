import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { LEGAL_CONTENTS } from '../data';

interface LegalModalProps {
  modalType: 'privacy' | 'terms' | 'affiliate' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ modalType, onClose }) => {
  if (!modalType) return null;

  const data = LEGAL_CONTENTS[modalType];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-slate-100 relative max-h-[85vh] flex flex-col justify-between animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-full bg-slate-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              {data.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Last Updated: {data.lastUpdated}
            </p>
          </div>
        </div>

        {/* Modal Content Scroll */}
        <div className="py-6 overflow-y-auto space-y-4 pr-2 text-slate-700 text-sm sm:text-base leading-relaxed">
          {data.content.map((paragraph, idx) => (
            <p key={idx} className="bg-slate-50/60 p-4 rounded-xl border border-slate-100/80">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>FCRA & FTC Aligned Portal Disclosure</span>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
};
