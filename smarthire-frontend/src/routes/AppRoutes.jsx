// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import Dashboard from "../pages/dahsboard/Dashboard.jsx";
import Candidates from "../pages/candidates/Candidates.jsx";
import Jobs from "../pages/jobs/Jobs.jsx";
import Matching from "../pages/matching/Matching.jsx";
import CandidatePortal from "../pages/candidates/CandidatePortal.jsx";
import CandidateUpload from "../pages/candidates/CandidateUpload.jsx";
import CandidateProfile from "../pages/candidates/CandidateProfile.jsx";
import DocumentsArchive from "../pages/Documents/Documents.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/matching" element={<Matching />} />
      <Route path="/candidate-portal" element={<CandidatePortal />} />
      <Route path="/candidate-upload" element={<CandidateUpload />} />
      <Route path="/candidate-profile" element={<CandidateProfile />} />
      <Route path="/documents" element={<DocumentsArchive />} />


    </Routes>
  );
}
