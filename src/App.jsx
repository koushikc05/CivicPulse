import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Auth guards
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";

// Layout
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// Placeholders for future pages
const Needs = () => <div className="p-4">Community Needs (coming soon)</div>;
const Tasks = () => <div className="p-4">Tasks (coming soon)</div>;
const Volunteers = () => <div className="p-4">Volunteers (coming soon)</div>;
const Analytics = () => <div className="p-4">Analytics (coming soon)</div>;
const Settings = () => <div className="p-4">Settings (coming soon)</div>;

const AuthenticatedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 md:p-8 md:ml-64 w-full max-w-7xl mx-auto transition-all duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/login" 
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />

          {/* Protected Routes inside App Layout */}
          <Route 
            element={
              <ProtectedRoute>
                <AuthenticatedLayout />
              </ProtectedRoute>
            }
          >
            {/* Redirect / to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Dashboard for all logged in users */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Role specific routes using the allowedRoles array prop */}
            <Route 
              path="/needs" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'field_worker']}>
                  <Needs />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/tasks" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'volunteer']}>
                  <Tasks />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/volunteers" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Volunteers />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/analytics" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Analytics />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/settings" 
              element={<Settings />} 
            />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
