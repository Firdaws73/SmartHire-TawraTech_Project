import React from "react";
import matches from "../../mock/matches.js";

export default function Matching() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Matching results
        </h2>
        <p className="text-sm text-slate-500">
          AI‑ranked candidate ↔ job pairs, ready for client review.
        </p>
      </div>

      <div className="space-y-3">
        {matches.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4 flex items-center justify-between hover:border-slate-200 hover:bg-slate-50 transition"
          >
            <div>
              <p className="text-sm font-medium text-slate-900">
                {m.candidate}
              </p>
              <p className="text-xs text-slate-500">{m.job}</p>
              <p className="text-[11px] text-slate-400 mt-1">
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 mb-1">Match score</p>
              <p className="text-xl font-semibold text-slate-900">
                {m.score}%
              </p>
              <button className="mt-1 text-[11px] text-slate-600 underline">
                Open candidate profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
