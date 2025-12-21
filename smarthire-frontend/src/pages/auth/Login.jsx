import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("recruiter"); // 'recruiter' ou 'candidate'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Logique de redirection Frontend (mode démo)
    if (role === "recruiter") {
      navigate("/"); // Dashboard Recruteur
    } else {
      navigate("/candidate-portal"); // Portail Candidat
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-slate-900 shadow-xl">
        <h1 className="text-2xl font-semibold mb-1 text-center">
          Sign in to SmartHire
        </h1>
        <p className="text-sm text-slate-500 mb-6 text-center">
          Access your workspace to manage{" "}
          {role === "recruiter" ? "recruitments" : "your applications"}.
        </p>

        {/* --- SÉLECTEUR DE PORTAIL --- */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6 border border-slate-200">
          <button
            type="button"
            onClick={() => setRole("recruiter")}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
              role === "recruiter"
                ? "bg-[#0000ff] text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Recruiter Space
          </button>
          <button
            type="button"
            onClick={() => setRole("candidate")}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${
              role === "candidate"
                ? "bg-[#0000ff] text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Candidate Portal
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-1">
            <label className="text-xs text-slate-600">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder={
                role === "recruiter"
                  ? "you@agency.com"
                  : "candidate@example.com"
              }
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-600">Password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-lg bg-[#0000ff] text-white text-sm font-semibold transition-colors hover:bg-blue-700"
          >
            Sign in as {role === "recruiter" ? "Recruiter" : "Candidate"}
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-600 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>

      </div>
    </div>
  );
}