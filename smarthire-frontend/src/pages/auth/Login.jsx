import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="max-w-md w-full bg-white/5 border border-slate-800 rounded-2xl p-8 text-slate-50 shadow-xl">
        <h1 className="text-2xl font-semibold mb-1">Sign in to SmartHire</h1>
        <p className="text-sm text-slate-400 mb-6">
          Use your agency account to access the recruiter workspace.
        </p>
        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@agency.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-lg bg-cyan-400 text-slate-950 text-sm font-semibold hover:bg-cyan-300"
          >
            Continue
          </button>
        </form>
        <p className="mt-4 text-[11px] text-slate-500">
          Demo mode · No real authentication · All data is mock.
        </p>
      </div>
    </div>
  );
}
