import React from "react";

const plans = [
  {
    name: "Discovery",
    tagline: "0 MAD / Month",
    price: "0 MAD",
    period: "/ Month",
    highlight: "Manual Job Posting (Max 2 active jobs)",
    features: [
      "Manual Job Posting (Max 2 active jobs)",
      "CV Upload limit: 50 CVs total",
      "Basic Search (Keyword only)",
    ],
    recommended: false,
  },
  {
    name: "Professional",
    tagline: "490 MAD / User / Month",
    price: "490 MAD",
    period: "/ User / Month",
    highlight: "Unlimited Job Postings",
    features: [
      "Unlimited Job Postings",
      "CV Storage: Up to 2,000 CVs",
      "AI CV Parsing (Bulk upload supported)",
      "Smart Matching (Top 5 candidates per job)",
    ],
    recommended: true,
  },
  {
    name: "Scale",
    tagline: "1,200 MAD / User / Month",
    price: "1,200 MAD",
    period: "/ User / Month",
    highlight: "Unlimited CV Storage",
    features: [
      "Unlimited CV Storage",
      "Advanced AI Matching",
      "Priority Support (Phone / WhatsApp)",
      "Dedicated Account Manager",
      "API Access",
      "White-labeling",
    ],
    recommended: false,
  },
];

export default function Pricing() {
  const handlePlanClick = (planName) => {
    if (planName === "Scale") {
      window.location.href = "/contact"; // or your contact page
    } else {
      window.location.href = "/signup?plan=" + planName.toLowerCase();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0000ff10] border border-[#0000ff22]">
            <span className="h-2 w-2 rounded-full bg-[#0000ff]" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0000ff]">
              TawraTech Matching
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Choose the plan that fits your hiring.
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
            Unlock deeper matching between candidates and jobs with AI‑powered
            scoring, CV parsing and a dedicated candidate portal.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} onPlanClick={handlePlanClick} />
          ))}
        </div>

        {/* Footnote */}
        <p className="text-[11px] text-slate-400 text-center">
          All plans include secure hosting, GDPR‑ready data handling and
          access to the TawraTech candidate portal.
        </p>
      </div>
    </div>
  );
}

function PlanCard({ plan, onPlanClick }) {
  const recommended = plan.recommended;

  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex flex-col rounded-2xl border shadow-sm bg-white p-6 md:p-7 h-full ${
        recommended
          ? "border-[#0000ff] shadow-[0_10px_40px_rgba(0,0,255,0.18)]"
          : "border-slate-200 hover:border-[#0000ff26] hover:shadow-[0_20px_40px_rgba(0,0,255,0.12)]"
      }`}
      onClick={() => onPlanClick(plan.name)}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0000ff] text-white text-[11px] font-semibold shadow-sm">
          Most popular
        </div>
      )}

      <div className="space-y-1 mb-4">
        <h2 className="text-lg font-semibold text-slate-900 group-hover:text-[#0000ff] transition-colors duration-200">
          {plan.name}
        </h2>
        <p className="text-xs text-slate-500">{plan.tagline}</p>
      </div>

      <div className="mb-5">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold text-slate-900 group-hover:text-[#0000ff] transition-colors duration-200">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-xs text-slate-500">{plan.period}</span>
          )}
        </div>
        <p className="mt-1 text-xs text-slate-500">{plan.highlight}</p>
      </div>

      <ul className="flex-1 space-y-2 mb-5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-200"
          >
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#0000ff] group-hover:scale-110 transition-transform duration-200" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
 
 
      <button
        className={`w-full mt-auto py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm ${
          recommended
            ? "bg-[#0000ff] text-white hover:bg-blue-700 hover:shadow-[0_8px_25px_rgba(0,0,255,0.3)]"
            : "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:border-[#0000ff]"
        }`}
      >
        GET STARTED
      </button>
    </div>
  );
}
