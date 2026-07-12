import React, { useState, useEffect } from 'react';
import { X, Settings, Link as LinkIcon, CheckCircle2, RotateCcw } from 'lucide-react';
import { DEFAULT_AFFILIATE_URL, DEFAULT_TRANSUNION_URL, DEFAULT_RELIABLE_CREDIT_URL, DEFAULT_TRUTHFINDER_URL } from '../data';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUrl: string;
  transunionUrl: string;
  reliableCreditUrl: string;
  truthfinderUrl: string;
  onSaveUrls: (backgroundUrl: string, transunionUrl: string, reliableCreditUrl: string, truthfinderUrl: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentUrl,
  transunionUrl,
  reliableCreditUrl,
  truthfinderUrl,
  onSaveUrls,
}) => {
  const [inputUrl, setInputUrl] = useState(currentUrl);
  const [inputTransunionUrl, setInputTransunionUrl] = useState(transunionUrl);
  const [inputReliableCreditUrl, setInputReliableCreditUrl] = useState(reliableCreditUrl);
  const [inputTruthfinderUrl, setInputTruthfinderUrl] = useState(truthfinderUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync states when modal opens or props change
  useEffect(() => {
    if (isOpen) {
      setInputUrl(currentUrl);
      setInputTransunionUrl(transunionUrl);
      setInputReliableCreditUrl(reliableCreditUrl);
      setInputTruthfinderUrl(truthfinderUrl);
    }
  }, [isOpen, currentUrl, transunionUrl, reliableCreditUrl, truthfinderUrl]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl || !inputUrl.startsWith('http')) {
      alert('Please enter a valid Background Check URL starting with http:// or https://');
      return;
    }
    if (!inputTransunionUrl || !inputTransunionUrl.startsWith('http')) {
      alert('Please enter a valid TransUnion Credit Check URL starting with http:// or https://');
      return;
    }
    if (!inputReliableCreditUrl || !inputReliableCreditUrl.startsWith('http')) {
      alert('Please enter a valid Reliable Credit $1 Trial URL starting with http:// or https://');
      return;
    }
    if (!inputTruthfinderUrl || !inputTruthfinderUrl.startsWith('http')) {
      alert('Please enter a valid TruthFinder URL starting with http:// or https://');
      return;
    }
    onSaveUrls(inputUrl, inputTransunionUrl, inputReliableCreditUrl, inputTruthfinderUrl);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setInputUrl(DEFAULT_AFFILIATE_URL);
    setInputTransunionUrl(DEFAULT_TRANSUNION_URL);
    setInputReliableCreditUrl(DEFAULT_RELIABLE_CREDIT_URL);
    setInputTruthfinderUrl(DEFAULT_TRUTHFINDER_URL);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200"
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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Portal Settings
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Link Call-to-Action Buttons to Your Tracking Links
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-100 text-xs text-blue-800 leading-relaxed">
            <span className="font-bold block mb-1">Partner Integration Guide:</span>
            Paste your approved tracking URLs below. Buttons across each page will route users securely to their respective partner screening networks.
          </div>

          {/* Background Check URL */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Rental Background Check Link</span>
            </label>
            <input
              type="url"
              required
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://www.whitebridge.com/ref?partner=..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>

          {/* Access $1 Credit report URL */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-blue-600" />
              <span>Access $1 Credit report Link</span>
            </label>
            <input
              type="url"
              required
              value={inputReliableCreditUrl}
              onChange={(e) => setInputReliableCreditUrl(e.target.value)}
              placeholder="https://paymaxoffers.trakaff.net/tr?offer_id=194..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 transition-all"
            />
          </div>

          {/* TruthFinder Criminal Search URL */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-sky-600" />
              <span>TruthFinder Criminal Search Link</span>
            </label>
            <input
              type="url"
              required
              value={inputTruthfinderUrl}
              onChange={(e) => setInputTruthfinderUrl(e.target.value)}
              placeholder="https://paymaxoffers.trakaff.net/tr?offer_id=200..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 font-mono text-xs text-slate-900 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-600 transition-all"
            />
          </div>

          {savedSuccess && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tracking URLs saved successfully! Landing pages updated.</span>
            </div>
          )}

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              title="Restore default sample partner URLs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Sample Links</span>
            </button>

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="save-settings-btn"
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer"
              >
                Save Tracking Links
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
