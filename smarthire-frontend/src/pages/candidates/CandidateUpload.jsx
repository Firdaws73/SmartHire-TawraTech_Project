import React, { useState } from "react";

export default function CandidateUpload() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fileName) return;
    setLoading(true);

    // TODO: backend parsing + redirection
    setTimeout(() => {
      setLoading(false);
      alert("Demo: CV sent for parsing (mock).");
    }, 1000);
  };

  return (
    <div className="px-6 py-10">
      {/* Petit header de page */}
      <div className="max-w-3xl mx-auto mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Upload your CV
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          SmartHire analyses your resume to create a clean, structured candidate profile
          recruiters can review instantly.
        </p>
      </div>

      {/* Carte principale */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200 rounded-xl py-10 px-6 text-center cursor-pointer bg-slate-50/60 hover:border-sky-300 hover:bg-sky-50 transition"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-sky-100 text-sky-600 text-lg">
                  ⬆
                </span>
                <span className="text-sm font-medium text-slate-800">
                  Drop your CV here or click to browse
                </span>
                <span className="text-[11px] text-slate-500">
                  PDF or DOCX · Max 10 MB 
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
              <div className="mt-3 text-xs text-slate-500">
                Selected file:{" "}
                <span className="font-medium text-slate-800">{fileName}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={!fileName || loading}
              className="inline-flex justify-center px-5 py-2.5 rounded-lg bg-sky-500 text-white text-sm font-semibold shadow-sm hover:bg-sky-600 disabled:bg-slate-200 disabled:text-slate-500"
            >
              {loading ? "Sending CV…" : "Send CV for analysis"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
