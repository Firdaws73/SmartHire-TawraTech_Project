import React from "react";

const MyApplications = () => {
  const applications = [
    { id: 1, job: "Frontend Developer", company: "TechCorp", date: "20/12/2025", status: "En revue", color: "bg-blue-100 text-blue-700" },
    { id: 2, job: "UI Designer", company: "Creative UI", date: "18/12/2025", status: "Entretien", color: "bg-purple-100 text-purple-700" },
    { id: 3, job: "React Engineer", company: "Web agency", date: "15/12/2025", status: "Refusé", color: "bg-red-100 text-red-700" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Mes candidatures</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Poste</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Date</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {applications.map((app) => (
              <tr key={app.id}>
                <td className="px-6 py-4">
                  <div className="font-medium">{app.job}</div>
                  <div className="text-xs text-slate-500">{app.company}</div>
                </td>
                <td className="px-6 py-4 text-sm">{app.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${app.color}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;