import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-tawrah.png";

export default function CandidateLayout({ children }) {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Upload CV", to: "/candidate-upload" },
    { label: "My profile", to: "/candidate-profile" },
    {label: "Mes candidatures", to: "/my-applications"}
  ];

  const isActive = (to) => pathname === to;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar candidat – même style que Sidebar recruteur */}
      <aside className="w-64 bg-slate-950 text-white flex flex-col border-r border-slate-900">
        {/* Header brand */}
        <div className="px-6 py-5 border-b border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="SmartHire Candidate"
              className="h-8 w-auto rounded-md object-contain"
            />
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                SmartHire
              </h1>
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.16em]">
                Candidate Portal
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#0000ff] text-white shadow-sm"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-slate-900 text-xs text-slate-500">
          TawraTech · Candidate Workspace
        </div>
      </aside>

      {/* Contenu de la page candidat */}
      <main className="flex-1 flex items-stretch justify-center">
        <div className="flex-1 max-w-5xl w-full">{children}</div>
      </main>
    </div>
  );
}
