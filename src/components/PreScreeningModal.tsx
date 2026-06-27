import React, { useState } from 'react';
import { X, ShieldCheck, Lock, ArrowRight, Building2, Briefcase, UserCheck, AlertCircle } from 'lucide-react';
import { ScreeningType } from '../types';

interface PreScreeningModalProps {
  isOpen: boolean;
  onClose: () => void;
  affiliateUrl: string;
}

export const PreScreeningModal: React.FC<PreScreeningModalProps> = ({
  isOpen,
  onClose,
  affiliateUrl,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [screeningType, setScreeningType] = useState<ScreeningType>('tenant');
  const [email, setEmail] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!agreed) {
      setError('Please certify permissible FCRA screening intent.');
      return;
    }
    setError('');
    
    // Construct dynamic partner link or open affiliate link
    const destinationUrl = new URL(affiliateUrl);
    destinationUrl.searchParams.set('type', screeningType);
    if (email) destinationUrl.searchParams.set('applicant_email', email);
    
    window.open(destinationUrl.toString(), '_blank');
    onClose();
    // Reset state
    setTimeout(() => {
      setStep(1);
      setEmail('');
      setApplicantName('');
      setAgreed(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 rounded-full bg-slate-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Initiate Background Check
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Secure FCRA Portal Hand-off
            </p>
          </div>
        </div>

        {step === 1 ? (
          <div>
            <p className="text-slate-600 text-sm mb-5 font-normal">
              Select the primary permissible purpose for this background screening:
            </p>

            <div className="space-y-3 mb-8">
              <button
                type="button"
                onClick={() => setScreeningType('tenant')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
                  screeningType === 'tenant'
                    ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">Residential Tenant Screening</h4>
                  <p className="text-xs text-slate-500">Credit report, eviction history, nationwide criminal check</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setScreeningType('employer')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
                  screeningType === 'employer'
                    ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">Employment Candidate Check</h4>
                  <p className="text-xs text-slate-500">SSN verification, criminal records, education verification</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setScreeningType('personal')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all cursor-pointer ${
                  screeningType === 'personal'
                    ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">Personal Self-Screening</h4>
                  <p className="text-xs text-slate-500">Review your own public records before leasing or applying</p>
                </div>
              </button>
            </div>

            <button
              onClick={() => setStep(2)}
              id="modal-step1-continue-btn"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue to Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleProceed} className="space-y-4">
            
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs mb-2">
              <span className="text-slate-500 font-medium">Selected Purpose:</span>
              <span className="font-bold text-blue-600 uppercase tracking-wide">
                {screeningType} Screening
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Applicant Name or Label (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. John Smith"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Applicant Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="applicant@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                An instant digital FCRA consent authorization link will be routed securely.
              </p>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded-md text-blue-600 border-slate-300 focus:ring-blue-600 cursor-pointer"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I certify I have a permissible screening purpose under the Fair Credit Reporting Act (FCRA) and agree to partner platform privacy & security terms.
                </span>
              </label>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3.5 px-4 rounded-2xl text-sm transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                id="modal-submit-partner-btn"
                className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Portal</span>
                <Lock className="w-4 h-4 opacity-80" />
              </button>
            </div>

            <div className="text-center pt-2">
              <span className="text-[10px] text-slate-400 font-mono">
                Encrypted Partner Gateway: {affiliateUrl.split('/')[2] || 'Whitebridge Partner'}
              </span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
