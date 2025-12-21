import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Dashboard from "./pages/dahsboard/Dashboard.jsx";
import Candidates from "./pages/candidates/Candidates.jsx";
import Jobs from "./pages/jobs/Jobs.jsx";
import Matching from "./pages/matching/Matching.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import CandidateUpload from "./pages/candidates/CandidateUpload.jsx";
import CandidateProfile from "./pages/candidates/CandidateProfile.jsx";
import CandidateLayout from "./components/layout/CandidateLayout.jsx";
import DocumentsArchive from "./pages/documents/Documents.jsx";
import CandidatePortal from "./pages/candidates/CandidatePortal.jsx"

function RecruiterLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout RECRUITER */}
        <Route
          path="/login"
          element={<Login />
          }
        />
        <Route
          path="/register"
          element={<Register />}
        />      
        <Route
          path="/"
          element={
            <RecruiterLayout>
              <Dashboard />
            </RecruiterLayout>
          }
        />
        <Route
          path="/candidates"
          element={
            <RecruiterLayout>
              <Candidates />
            </RecruiterLayout>
          }
        />
        <Route
          path="/jobs"
          element={
            <RecruiterLayout>
              <Jobs />
            </RecruiterLayout>
          }
        />
        <Route
          path="/matching"
          element={
            <RecruiterLayout>
              <Matching />
            </RecruiterLayout>
          }
        />
          <Route
          path="/documents"
          element={
            <RecruiterLayout>
              <DocumentsArchive />
            </RecruiterLayout>
          }
        />

        {/* Layout CANDIDATE – PAS de Sidebar/Navbar recruteur */}
        <Route
          path="/candidate-upload"
          element={
            <CandidateLayout>
              <CandidateUpload />
            </CandidateLayout>
          }
        />
         <Route
          path="/candidate-portal"
          element={
            <CandidateLayout>
              <CandidatePortal
 />
            </CandidateLayout>
          }
        />
        <Route
          path="/candidate-profile"
          element={
            <CandidateLayout>
              <CandidateProfile />
            </CandidateLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
