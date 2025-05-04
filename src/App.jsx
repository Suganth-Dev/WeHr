import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';
import Tasks from './pages/Tasks';
import Announcements from './pages/Announcements';
import Support from './pages/Support';
import Settings from './pages/Settings';

function App() {
  const navigate = useNavigate();
  
  // Check both sessionStorage and localStorage for authentication
  const isAuthenticated = 
    sessionStorage.getItem('isAuthenticated') === 'true' ||
    localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} 
      />
      
      {/* Protected Routes */}
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}


export default App;
