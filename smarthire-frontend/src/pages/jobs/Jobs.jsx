import React from "react";
import jobs from "../../mock/jobs.js";

export default function Jobs() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Open roles</h2>
          <p className="text-sm text-slate-500">
            High impact positions your clients need to fill.
          </p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
          New job
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-3 hover:-translate-y-[2px] hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-500">{job.company}</p>
              </div>
              <span className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                {job.type}
              </span>
            </div>
            <p className="text-xs text-slate-500">{job.location}</p>
            <p className="text-xs text-slate-600">
              Skills: {job.skills.join(" · ")}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-500">
                {job.openings} open slot{job.openings > 1 ? "s" : ""}
              </span>
              <button className="text-xs font-medium text-slate-900 hover:underline">
                View matches
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
