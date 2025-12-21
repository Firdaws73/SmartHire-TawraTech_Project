import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("recruiter"); // 'recruiter' ou 'candidate'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Logique de redirection Frontend
    if (role === "recruiter") {
      navigate("/"); // Redirige vers le Dashboard Recruteur
    } else {
      navigate("/candidate-portal"); // Redirige vers le Portail Candidat
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <div className="max-w-md w-full bg-white/5 border border-slate-800 rounded-2xl p-8 text-slate-50 shadow-xl">
        <h1 className="text-2xl font-semibold mb-1 text-center">Sign in to SmartHire</h1>
        <p className="text-sm text-slate-400 mb-6 text-center">
          Access your workspace to manage {role === "recruiter" ? "recruitments" : "your applications"}.
        </p>

        {/* --- SÉLECTEUR DE PORTAIL --- */}
        <div className="flex bg-slate-900 p-1 rounded-xl mb-6 border border-slate-800">
          <button
            type="button"
            onClick={() => setRole("recruiter")}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
              role === "recruiter" ? "bg-cyan-400 text-slate-950" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Recruiter Space
          </button>
          <button
            type="button"
            onClick={() => setRole("candidate")}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
              role === "candidate" ? "bg-cyan-400 text-slate-950" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Candidate Portal
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder={role === "recruiter" ? "you@agency.com" : "candidate@example.com"}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-lg bg-cyan-400 text-slate-950 text-sm font-semibold hover:bg-cyan-300 transition-colors"
          >
            Sign in as {role === "recruiter" ? "Recruiter" : "Candidate"}
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-400 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline">
            Create one
          </Link>
        </p>

        <p className="mt-4 text-[10px] text-slate-600 text-center">
          Mode Démo : Sélectionnez le portail pour tester la navigation.
        </p>
      </div>
    </div>
  );
}