import React, { useState } from "react";

const mockDocuments = [
  {
    id: 1,
    candidate: "Sara Benali",
    email: "sara.benali@tawratech.com",
    type: "CV",
    format: "PDF",
    uploadedAt: "2025-12-12 10:24",
    size: "320 KB",
  },
  {
    id: 2,
    candidate: "Adam Keller",
    email: "adam.keller@tawratech.com",
    type: "CV",
    format: "DOCX",
    uploadedAt: "2025-12-11 16:02",
    size: "540 KB",
  },
  {
    id: 3,
    candidate: "Leila Haddad",
    email: "leila.haddad@tawratech.com",
    type: "Portfolio",
    format: "PDF",
    uploadedAt: "2025-12-10 09:15",
    size: "1.2 MB",
  },
];

export default function DocumentsArchive() {
  const [search, setSearch] = useState("");

  const filteredDocs = mockDocuments.filter((doc) => {
    const term = search.toLowerCase();
    return (
      doc.candidate.toLowerCase().includes(term) ||
      doc.email.toLowerCase().includes(term)
    );
  });

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Documents archive
          </h2>
          <p className="text-sm text-slate-500">
            All CVs and documents uploaded by candidates and recruiters across
            SmartHire.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 px-3 rounded-lg border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0000ff]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <Th>Candidate</Th>
              <Th>Type</Th>
              <Th>Format</Th>
              <Th>Uploaded at</Th>
              <Th>Size</Th>
              <Th className="text-right pr-6">Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredDocs.map((doc, idx) => (
              <tr
                key={doc.id}
                className={`border-b border-slate-100 ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                }`}
              >
                <Td>
                  <div className="font-medium text-slate-900">
                    {doc.candidate}
                  </div>
                  <div className="text-xs text-slate-500">{doc.email}</div>
                </Td>
                <Td>{doc.type}</Td>
                <Td className="text-xs text-slate-500">{doc.format}</Td>
                <Td className="text-xs text-slate-500">{doc.uploadedAt}</Td>
                <Td className="text-xs text-slate-500">{doc.size}</Td>
                <Td className="text-right pr-6">
                  <button className="text-xs font-medium text-[#0000ff] hover:underline">
                    View
                  </button>
                  <span className="mx-1 text-slate-300">·</span>
                  <button className="text-xs text-slate-500 hover:text-slate-700">
                    Download
                  </button>
                </Td>
              </tr>
            ))}

            {filteredDocs.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-8 text-center text-sm text-slate-400"
                >
                  No documents match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Info bar */}
      
    </div>
  );
}

function Th({ children, className = "" }) {
  return (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold text-slate-500 ${className}`}
    >
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return <td className={`px-4 py-3 align-top ${className}`}>{children}</td>;
}
