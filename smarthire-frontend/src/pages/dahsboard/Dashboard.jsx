import React from "react";
import candidates from "../../mock/candidates.js";
import jobs from "../../mock/jobs.js";
import matches from "../../mock/matches.js";

export default function Dashboard() {
  const totalCandidates = candidates.length;
  const totalJobs = jobs.length;
  const totalMatches = matches.length;
  const avgScore =
    Math.round(
      matches.reduce((sum, m) => sum + m.score, 0) / matches.length
    ) || 0;

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Morning, Recruiter 
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Here is the AI pulse of your hiring pipeline.
          </p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
          New job position
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard label="Active candidates" value={totalCandidates} trend="+12 this week" />
        <KpiCard label="Open roles" value={totalJobs} trend="3 closing soon" />
        <KpiCard label="AI matches" value={totalMatches} trend="Realtime scoring" />
        <KpiCard label="Average match score" value={`${avgScore}%`} trend="Top 10% of market" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">
            Live matches
          </h3>
          <div className="space-y-3">
            {matches.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 px-4 py-3 hover:border-slate-200 hover:bg-slate-50/60 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    {m.candidate}
                  </p>
                  <p className="text-xs text-slate-500">{m.job}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${
                      m.score >= 90
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-amber-200 bg-amber-50 text-amber-700"
                    }`}
                  >
                    {m.status}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {m.score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-950 text-slate-50 rounded-2xl p-6 flex flex-col gap-4 shadow-md">
          <h3 className="text-sm font-semibold">CV upload (demo)</h3>
          <p className="text-xs text-slate-400">
            Drag & drop a CV to see how SmartHire extracts skills and suggests
            a match score.
          </p>
          <div className="border-2 border-dashed border-slate-600/70 rounded-xl flex-1 flex flex-col items-center justify-center text-center px-4 py-6 text-xs text-slate-300">
            <p className="font-medium mb-1">Drop CV here</p>
            <p className="text-[11px] text-slate-500">
              PDF or DOCX · Max 10 MB
            </p>
          </div>
          <button className="w-full mt-1 py-2 text-xs rounded-lg bg-slate-50 text-slate-900 font-medium hover:bg-white">
            Simulate upload
          </button>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, trend }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="text-[11px] text-emerald-600 mt-1">{trend}</p>
    </div>
  );
}
