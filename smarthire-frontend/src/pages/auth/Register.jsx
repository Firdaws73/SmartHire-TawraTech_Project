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
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 text-slate-900 shadow-xl">
        <h1 className="text-2xl font-semibold mb-1 text-center">
          Join SmartHire
        </h1>
        <p className="text-sm text-slate-500 mb-6 text-center">
          Choose your account type to get started.
        </p>

        {/* --- SÉLECTEUR DE RÔLE --- */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-6 border border-slate-200">
          <button
            onClick={() => setRole("recruiter")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              role === "recruiter"
                ? "bg-[#0000ff] text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Recruiter
          </button>
          <button
            onClick={() => setRole("candidate")}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              role === "candidate"
                ? "bg-[#0000ff] text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Candidate
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-xs text-slate-600">Full name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="Jane Doe"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-600">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="name@example.com"
            />
          </div>

          {/* CHAMP CONDITIONNEL : Entreprise pour le recruteur seulement */}
          {role === "recruiter" && (
            <div className="space-y-1">
              <label className="text-xs text-slate-600">Company Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-cyan-400 outline-none"
                placeholder="Tech Agency"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs text-slate-600">Password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-cyan-400 outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2.5 rounded-lg bg-[#0000ff] text-white text-sm font-bold transition-colors hover:bg-blue-700"
          >
            Create {role === "recruiter" ? "Recruiter" : "Candidate"} Account
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-600 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}