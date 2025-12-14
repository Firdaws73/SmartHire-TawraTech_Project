import React, { useState } from "react";

export default function CandidatePortal() {
  const [fileName, setFileName] = useState("");
  const [parsed, setParsed] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setLoading(true);

    // TODO: later send file to backend for real parsing
    setTimeout(() => {
      setParsed({
        fullName: "Sara Benali",
        title: "Senior Frontend Engineer",
        location: "Paris, France",
        email: "sara.benali@talentmail.com",
        phone: "+33 6 12 34 56 78",
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
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full space-y-6">
        {/* Header / banner */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Build your SmartHire profile
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Upload your CV and preview how recruiters will see your profile in the SmartHire platform.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-sky-100 px-3 py-1 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-slate-500">
              Private demo · Your file is not stored permanently
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Left: upload card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-sky-100/60 p-7">
            <h2 className="text-base font-semibold text-slate-900 mb-1.5">
              Upload your CV
            </h2>
            <p className="text-sm text-slate-500 mb-5">
              PDF or DOCX, in any language. SmartHire will extract key details to build your candidate profile.
            </p>

            <label
              className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-xl py-10 px-4 text-center cursor-pointer bg-slate-50/40 hover:border-sky-300 hover:bg-sky-50/60 transition"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-medium text-slate-800">
                  Drop your CV here or click to browse
                </span>
                <span className="text-[11px] text-slate-500">
                  PDF or DOCX · Max 10 MB · Demo mode only
                </span>
              </div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {fileName && (
              <div className="mt-4 text-xs text-slate-500">
                Selected file:{" "}
                <span className="font-medium text-slate-800">{fileName}</span>
              </div>
            )}

            <button
              type="button"
              disabled={!fileName || loading}
              className="mt-6 w-full py-2.5 rounded-lg bg-sky-500 text-white text-sm font-semibold shadow-sm hover:bg-sky-600 disabled:bg-slate-200 disabled:text-slate-500"
            >
              {loading ? "Analyzing your CV…" : "Generate profile preview"}
            </button>

            <p className="mt-3 text-[11px] text-slate-400">
              This is a front‑end demo. In production, this button would call your resume‑parsing API and fill the profile on the right.
            </p>
          </div>

          {/* Right: profile preview */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-indigo-100/60 p-7">
            {!parsed && !loading && (
              <div className="h-full flex items-center justify-center text-sm text-slate-400 text-center px-4">
                Once your CV is processed, a structured profile will appear here
                with your headline, experience and skills.
              </div>
            )}

            {loading && (
              <div className="h-full flex items-center justify-center text-sm text-slate-500">
                Analysing experience, education and skills…
              </div>
            )}

            {parsed && !loading && (
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {parsed.fullName}
                  </h2>
                  <p className="text-sm text-slate-600">{parsed.title}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {parsed.location} · {parsed.email} · {parsed.phone}
                  </p>
                </div>

                <section>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
                    Summary
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {parsed.summary}
                  </p>
                </section>

                <section>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
                    Key skills
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {parsed.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 text-[11px] font-medium border border-sky-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
                    Experience
                  </h3>
                  <div className="space-y-2">
                    {parsed.experience.map((exp, i) => (
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
                </section>

                <section>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1.5">
                    Education
                  </h3>
                  <div className="space-y-2">
                    {parsed.education.map((ed, i) => (
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
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
