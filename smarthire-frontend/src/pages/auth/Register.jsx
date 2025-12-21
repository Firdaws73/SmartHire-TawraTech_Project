import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [role, setRole] = useState("recruiter"); // 'recruiter' ou 'candidate'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de logique
    if (role === "recruiter") {
      navigate("/"); // Vers le dashboard recruteur
    } else {
      navigate("/candidate-portal"); // Vers le portail candidat
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="max-w-md w-full bg-white/5 border border-slate-800 rounded-2xl p-8 text-slate-50 shadow-xl">
        <h1 className="text-2xl font-semibold mb-1 text-center">Join SmartHire</h1>
        <p className="text-sm text-slate-400 mb-6 text-center">
          Choose your account type to get started.
        </p>

        {/* --- SÉLECTEUR DE RÔLE --- */}
        <div className="flex bg-slate-900 p-1 rounded-xl mb-6 border border-slate-800">
          <button
            onClick={() => setRole("recruiter")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              role === "recruiter" ? "bg-cyan-400 text-slate-950" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Recruiter
          </button>
          <button
            onClick={() => setRole("candidate")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              role === "candidate" ? "bg-cyan-400 text-slate-950" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Candidate
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Full name</label>
            <input type="text" required className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none" placeholder="Jane Doe" />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-400">Email</label>
            <input type="email" required className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none" placeholder="name@example.com" />
          </div>

          {/* CHAMP CONDITIONNEL : Entreprise pour le recruteur seulement */}
          {role === "recruiter" && (
            <div className="space-y-1">
              <label className="text-xs text-slate-400">Company Name</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none" placeholder="Tech Agency" />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs text-slate-400">Password</label>
            <input type="password" required className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:ring-2 focus:ring-cyan-400 outline-none" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full mt-4 py-2.5 rounded-lg bg-cyan-400 text-slate-950 text-sm font-bold hover:bg-cyan-300 transition-colors">
            Create {role === "recruiter" ? "Recruiter" : "Candidate"} Account
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-400 text-center">
          Already have an account? <Link to="/login" className="text-cyan-400 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}