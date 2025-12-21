import React from 'react';

const CLIENTS = [
  { id: 1, name: "TechCorp", industry: "Informatique", openJobs: 3, logo: "TC" },
  { id: 2, name: "Global Bank", industry: "Finance", openJobs: 1, logo: "GB" },
  { id: 3, name: "Creative Studio", industry: "Design", openJobs: 5, logo: "CS" },
];

export default function Clients() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Nos Clients</h1>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium">+ Nouveau Client</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CLIENTS.map(client => (
          <div key={client.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold mb-4">
              {client.logo}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{client.name}</h3>
            <p className="text-sm text-slate-500 mb-4">{client.industry}</p>
            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <span className="text-sm font-medium text-cyan-600">{client.openJobs} postes ouverts</span>
              <button className="text-slate-400 hover:text-slate-600 text-sm italic">Voir profil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}