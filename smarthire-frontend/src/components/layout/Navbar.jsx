import React from "react";
import Pricing from "../../pages/pricing/pricing";
export default function Navbar() {
  return (
    <header className="h-14 bg-white/80 backdrop-blur border-b border-slate-200 flex items-center justify-between px-6">
      {/* Gauche : titre + badge bleu */}
      <div className="flex items-center gap-3">
        <div className="h-7 px-3 rounded-full bg-[#0000ff0f] border border-[#0000ff26] flex items-center">
          <span className="text-[11px] font-semibold tracking-[0.18em] text-[#0000ff] uppercase">
            SmartHire Console
          </span>
        </div>
        <span className="hidden sm:inline text-[11px] text-slate-400">
          Recruiting workspace
        </span>
      </div>

      {/* Droite : actions + user */}
      <div className="flex items-center gap-4">
       
<label 
  className="text-xs px-3 py-1 rounded-full bg-[#0000ff] text-white font-medium shadow-sm hover:bg-blue-700 cursor-pointer select-none inline-block"
  onClick={() => window.location.href = '/pricing'}
>
  Get premium
</label>


        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#0000ff] text-white flex items-center justify-center text-xs font-semibold shadow-sm">
            R
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-slate-700">
              Recruiter 
            </div>
            <div className="text-[11px] text-slate-400">SmartHire · Agency</div>
          </div>
        </div>
      </div>
    </header>
  );
}
