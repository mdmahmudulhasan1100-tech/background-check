import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  EyeOff, 
  Scale, 
  Fingerprint, 
  AlertTriangle, 
  HelpCircle,
  MapPin,
  Clock,
  UserX,
  Phone,
  Image,
  Globe,
  DollarSign,
  Heart,
  Home,
  ShieldAlert
} from 'lucide-react';

interface TruthFinderSearchProps {
  onStartClick: () => void;
  truthfinderUrl: string;
}

export const TruthFinderSearch: React.FC<TruthFinderSearchProps> = ({
  onStartClick,
  truthfinderUrl,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [state, setState] = useState('All States');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartClick();
  };

  const usStates = [
    'All States', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 
    'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 
    'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 
    'WA', 'WV', 'WI', 'WY'
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* High-Converting Hero Section with Reference Colors */}
      <section className="relative overflow-hidden bg-[#0c7cb0] text-white pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Subtle grid background mask */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Left Rated Badge */}
          <div className="absolute top-0 left-4 sm:left-8 bg-[#f5b300] text-slate-950 font-black text-[10px] sm:text-xs px-2.5 py-3 rounded-b-lg shadow-md flex flex-col items-center uppercase tracking-wider select-none z-10">
            <span className="leading-none text-center">RATED</span>
            <span className="text-lg sm:text-xl font-black my-0.5 leading-none">A+</span>
            <span className="text-[8px] font-bold leading-none">BY THE BBB</span>
          </div>

          <div className="text-center max-w-4xl mx-auto mt-10 sm:mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
            
            {/* Main Headline from User Image */}
            <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.15] mb-6 font-display">
              Give us 13 minutes, and we may change the way you think about <span className="font-bold underline decoration-amber-400 decoration-3 underline-offset-4">co-workers</span>
            </h1>

            {/* Subtitle / Promise */}
            <p className="text-sm sm:text-base text-sky-100 font-normal mb-8 max-w-3xl mx-auto opacity-95">
              Search Billions of Public Records to find Social Media, Photos, Police Records, Background Checks, Civil Judgments, Contact Information and Much More!
            </p>

            {/* Search Card Container styled EXACTLY like the screenshot */}
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-sky-600/30 text-slate-800 text-left mb-12">
              
              {/* Yellow Alert Header Strip */}
              <div className="bg-[#ffc72c] px-4 py-2 text-center text-xs font-black text-slate-900 tracking-wider uppercase select-none">
                🔥 ENJOY UNLIMITED SEARCHES!
              </div>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="p-5 sm:p-7">
                <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-xl overflow-hidden shadow-xs divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  
                  {/* First Name */}
                  <div className="p-3 bg-white">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      First Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-transparent border-0 p-1 text-slate-800 placeholder-slate-400 font-medium focus:ring-0 focus:outline-hidden text-base"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="p-3 bg-white">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Smith"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-transparent border-0 p-1 text-slate-800 placeholder-slate-400 font-medium focus:ring-0 focus:outline-hidden text-base"
                    />
                  </div>

                  {/* State Dropdown */}
                  <div className="p-3 bg-white relative">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      State:
                    </label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-transparent border-0 p-1 text-slate-800 font-medium focus:ring-0 focus:outline-hidden text-base cursor-pointer appearance-none pr-8"
                    >
                      {usStates.map((st) => (
                        <option key={st} value={st} className="text-slate-800">
                          {st === 'All States' ? 'All States' : st}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pt-5">
                      <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* Big Emerald Green SEARCH NOW Button */}
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full bg-[#4abf91] hover:bg-[#3ca87e] active:scale-[0.99] text-white font-black text-lg sm:text-xl py-4 px-6 rounded-xl transition-all shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase"
                  >
                    <span>SEARCH NOW</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Padlock security confirmation */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                  <span className="text-amber-500 font-bold">🔒</span>
                  <span className="italic">This secure connection is confirmed</span>
                </div>

              </form>
            </div>

            {/* Bottom Icon Row from Screenshot */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-y-6 gap-x-2 text-center pt-4 border-t border-sky-300/20 text-sky-100 max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-1.5 group">
                <div className="w-8 h-8 flex items-center justify-center text-sky-200">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium leading-tight">Contact Info</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 flex items-center justify-center text-sky-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium leading-tight">Location History</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 flex items-center justify-center text-sky-200">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium leading-tight">Social Media</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 flex items-center justify-center text-sky-200">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium leading-tight">Financial Assets</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 flex items-center justify-center text-sky-200">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium leading-tight">Dating Websites</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-8 flex items-center justify-center text-sky-200">
                  <Home className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium leading-tight">Property Records</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 flex items-center justify-center text-sky-200">
                  <Image className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-medium leading-tight">Graphic Photos</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Safety Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0c7cb0] font-mono block mb-2">
            Why Hundreds of Thousands Trust Our Gateway
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Direct Access to State-of-the-Art Public Records
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5">
              <Fingerprint className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
              Deep Offense Registers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Verify court listings, minor misdemeanors, felony convictions, pending trial registers, and historical booking sheets from county and federal systems.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
              Warrant & Registry Logs
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Identify open court warrants, county sheriff directives, and safety registrants securely. Protect yourself with early warning oversight parameters.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#3ca87e] flex items-center justify-center mb-5">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
              Confidentiality Guaranteed
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your searches are protected by modern 256-bit encryption pipelines. The search subject is never informed, leaving you completely anonymous.
            </p>
          </div>
        </div>
      </section>

      {/* FCRA Compliance Disclaimer */}
      <section className="py-12 bg-amber-50/60 border-y border-amber-100/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 mb-4">
            <UserX className="w-5 h-5" />
          </div>
          <h3 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
            FCRA Compliance Disclaimer
          </h3>
          <p className="text-[11px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Truth Finder is not a "consumer reporting agency" as defined by the Fair Credit Reporting Act (FCRA). You may not use Truth Finder's tools or reports to make decisions regarding employment, tenant vetting, professional credit, or insurance assessments. For official tenant background screening, please use our dedicated **Rental Background Checks** portal.
          </p>
        </div>
      </section>

      {/* Trust Finder FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Truth Finder Search FAQ
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            Answers to common questions regarding deep public records searches.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-100">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0c7cb0] shrink-0" />
              Will the person know that I searched for them?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              No. Searches conducted via the Truth Finder platform are 100% confidential. The subject of your search is never notified, and search histories are fully protected.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-100">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0c7cb0] shrink-0" />
              What types of records are compiled?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              Reports compile arrest logs, misdemeanor/felony filings, court records, judgments, liens, active warrants, sex offender statuses, relative lists, property holdings, and public social media handles.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-100">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0c7cb0] shrink-0" />
              How fast do the results appear?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed ml-6">
              The automated query aggregator works instantly. Searching through state and national registers takes roughly 2 to 5 minutes to generate and load the finalized records report.
            </p>
          </div>
        </div>
      </section>

      {/* Trustworthy Bottom CTA */}
      <section className="bg-slate-900 text-white py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-5">
            <Lock className="w-3.5 h-3.5" />
            <span>Confidential Secure Database</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display mb-3 text-white">
            Uncover Public Records Instantly
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xl mx-auto">
            Scan criminal listings, police records, contact registers, and background files confidentially using the official Truth Finder partner portal.
          </p>
          <button
            onClick={onStartClick}
            className="bg-[#4abf91] hover:bg-[#3ca87e] text-white font-black px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-950/30 active:scale-[0.99] transition-all flex items-center gap-2 mx-auto cursor-pointer uppercase text-sm"
          >
            <span>Start Truth Finder Search</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
