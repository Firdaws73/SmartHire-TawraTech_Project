import React from "react";

export default function CandidateProfile() {
  // TODO plus tard: récupérer les vraies données depuis le backend (ou via route param)
  const profile = {
    fullName: "Sara Benali",
    title: "Senior Frontend Engineer",
    location: "Casablanca , M",
    email: "sara.benali@talentmail.com",
    phone: "+212 698 65 89 78",
    summary:
      "Experienced frontend engineer with strong focus on design systems, performance and polished UX.",
    skills: ["React", "TypeScript", "Tailwind", "Testing", "Design Systems"],
    experience: [
      {
        company: "NovaTech",
        role: "Senior Frontend Engineer",
        period: "2021 – Present",
      },
      {
        company: "PixelWorks",
        role: "Frontend Engineer",
        period: "2018 – 2021",
      },
    ],
    education: [
      {
        school: "École d’ingénieurs – Informatique",
        degree: "Master in Computer Science",
        year: "2018",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl border border-slate-100 shadow-lg p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              {profile.fullName}
            </h1>
            <p className="text-sm text-slate-600">{profile.title}</p>
            <p className="text-xs text-slate-400 mt-1">
              {profile.location} · {profile.email} · {profile.phone}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-slate-500">
              Profile generated from latest CV
            </span>
          </div>
        </div>

        <section>
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
            Summary
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {profile.summary}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
            Key skills
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 text-[11px] font-medium border border-sky-100"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
              Experience
            </h2>
            <div className="space-y-2">
              {profile.experience.map((exp, i) => (
                <div key={i}>
                  <p className="text-sm font-medium text-slate-900">
                    {exp.role}
                  </p>
                  <p className="text-xs text-slate-500">
                    {exp.company} · {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
              Education
            </h2>
            <div className="space-y-2">
              {profile.education.map((ed, i) => (
                <div key={i}>
                  <p className="text-sm font-medium text-slate-900">
                    {ed.school}
                  </p>
                  <p className="text-xs text-slate-500">
                    {ed.degree} · {ed.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
            Export profile 
          </button>
        </div>
      </div>
    </div>
  );
}
