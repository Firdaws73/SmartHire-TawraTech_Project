import React, { useState } from "react";
import candidates from "../../mock/candidates.js";

export default function Candidates() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Candidates</h2>
          <p className="text-sm text-slate-500">
            All profiles parsed from CVs and ready to match.
          </p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
          Import new CV
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <Th>Name</Th>
                <Th>Role</Th>
                <Th>Location</Th>
                <Th>Skills</Th>
                <Th>Status</Th>
                <Th className="text-right pr-6">Score</Th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c, idx) => (
                <tr
                  key={c.id}
                  className={`border-b border-slate-100 cursor-pointer ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                  } hover:bg-slate-50`}
                  onClick={() => setSelected(c)}
                >
                  <Td>
                    <div className="font-medium text-slate-900">{c.name}</div>
                    <div className="text-xs text-slate-500">{c.email}</div>
                  </Td>
                  <Td>{c.role}</Td>
                  <Td className="text-xs text-slate-500">{c.location}</Td>
                  <Td className="text-xs text-slate-600">
                    {c.skills.join(" · ")}
                  </Td>
                  <Td>
                    <StatusBadge status={c.status} />
                  </Td>
                  <Td className="text-right pr-6 font-semibold text-slate-900">
                    {c.score}%
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          {!selected && (
            <p className="text-sm text-slate-500">
              Select a candidate to open a detailed profile preview.
            </p>
          )}

          {selected && (
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {selected.name}
                </h3>
                <p className="text-sm text-slate-600">{selected.role}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {selected.location} · {selected.email}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1">
                  Match score
                </p>
                <p className="text-2xl font-semibold text-slate-900">
                  {selected.score}%
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1">
                  Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selected.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-2 w-full py-2 text-xs rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800">
                View full CV (mock)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Th({ children, className = "" }) {
  return (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold text-slate-500 ${className}`}
    >
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return <td className={`px-4 py-3 align-top ${className}`}>{children}</td>;
}

function StatusBadge({ status }) {
  let classes =
    "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] border ";
  if (status === "Active") {
    classes += "bg-emerald-50 text-emerald-700 border-emerald-200";
  } else if (status === "Interviewing") {
    classes += "bg-indigo-50 text-indigo-700 border-indigo-200";
  } else {
    classes += "bg-slate-50 text-slate-600 border-slate-200";
  }
  return <span className={classes}>{status}</span>;
}
