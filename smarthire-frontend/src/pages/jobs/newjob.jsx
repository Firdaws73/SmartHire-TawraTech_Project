import React, { useState } from "react";

export default function NewJobPage() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salaryMin: "",
    salaryMax: "",
    currency: "MAD",
    description: "",
    requirements: "",
    benefits: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send form to your API here
    console.log("New job:", form);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Add a new job
            </h1>
            <p className="text-sm text-slate-500">
              Fill in the details below to publish a new job offer.
            </p>
          </div>
          <div className="h-7 px-3 rounded-full bg-[#0000ff10] border border-[#0000ff22] flex items-center">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0000ff]">
              New Job
            </span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Basic info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Job title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Senior React Developer"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
                required
              />
            </div>
          </div>

          {/* Location + type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Casablanca · Hybrid"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Job type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Freelance</option>
              </select>
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Salary range (optional)
            </label>
            <div className="grid grid-cols-3 gap-3">
              <input
                type="number"
                name="salaryMin"
                value={form.salaryMin}
                onChange={handleChange}
                placeholder="Min"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
              />
              <input
                type="number"
                name="salaryMax"
                value={form.salaryMax}
                onChange={handleChange}
                placeholder="Max"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
              />
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
              >
                <option value="MAD">MAD</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Job description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe the role, mission and day‑to‑day tasks."
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
            />
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Requirements
            </label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              rows={3}
              placeholder="Required skills, experience, languages…"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
            />
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              Benefits (optional)
            </label>
            <textarea
              name="benefits"
              value={form.benefits}
              onChange={handleChange}
              rows={3}
              placeholder="Perks, flexibility, health insurance, etc."
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#0000ff33] focus:border-[#0000ff]"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 rounded-full text-xs font-medium text-slate-600 border border-slate-200 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#0000ff] text-white shadow-sm hover:bg-blue-700 hover:shadow-[0_8px_25px_rgba(0,0,255,0.3)] transition-all"
            >
              Publish job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
