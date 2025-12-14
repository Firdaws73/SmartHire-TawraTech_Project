import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-tawrah.png";

const linkBase =
  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors";
const linkInactive =
  "text-slate-300 hover:bg-slate-800 hover:text-white";
const linkActive =
  "bg-[#0000ff] text-white shadow-sm";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Dashboard", to: "/" },
    { label: "Candidates", to: "/candidates" },
    { label: "Jobs", to: "/jobs" },
    { label: "Matching", to: "/matching" },
    { label: "Documents Archive", to: "/documents" },
  ];

  return (
    <aside className="w-64 bg-slate-950 text-white flex flex-col border-r border-slate-900">
      {/* Header brand – même style que CandidateLayout */}
      <div className="px-6 py-5 border-b border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="SmartHire"
            className="h-8 w-auto rounded-md object-contain"
          />
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              SmartHire
            </h1>
            <p className="text-[11px] text-slate-400 uppercase tracking-[0.16em]">
              Recruiter Console
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`${linkBase} ${
                active ? linkActive : linkInactive
              }`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-slate-900 text-xs text-slate-500">
        SmartHire · Recruiter Workspace
      </div>
    </aside>
  );
}
