import React from 'react';

const STAGES = ["Screening", "Entretien", "Test", "Offre"];

const APPLICANTS = [
  { id: 1, name: "Alice Martin", job: "React Dev", stage: "Screening" },
  { id: 2, name: "Kevin Durand", job: "React Dev", stage: "Entretien" },
  { id: 3, name: "Sarah Lévy", job: "React Dev", stage: "Screening" },
  { id: 4, name: "Thomas Cook", job: "React Dev", stage: "Offre" },
];

export default function JobPipeline() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Pipeline de Recrutement</h1>
      
      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGES.map(stage => (
          <div key={stage} className="min-w-[280px] bg-slate-100 rounded-xl p-4 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-500 uppercase mb-4 px-2">
              {stage} ({APPLICANTS.filter(a => a.stage === stage).length})
            </h3>
            
            <div className="space-y-3">
              {APPLICANTS.filter(a => a.stage === stage).map(applicant => (
                <div key={applicant.id} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:border-cyan-400 cursor-pointer transition-all">
                  <p className="font-semibold text-slate-800">{applicant.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{applicant.job}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Détails</span>
                    <button className="text-cyan-600 text-[10px] font-bold">DÉPLACER →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}