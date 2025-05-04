import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import right_image from "../../assets/right_image.png";
import Logo from '../../assets/Logo.png';
import { FaBuilding ,FaLock } from 'react-icons/fa';

const LoginPage = () => {
  

  const globalStyle = `
    html, body, #root {
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  `;

  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo purposes, we'll just check if fields are not empty
    if (companyId && password) {
      // Set authentication state
      sessionStorage.setItem('isAuthenticated', 'true');

      if (rememberMe) {
        localStorage.setItem('isAuthenticated', 'true');
      }

      // Navigate to layout/dashboard
      navigate('/layout/dashboard', { replace: true });
    }
  };
  
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
      <div className="h-screen w-screen overflow-hidden flex flex-col md:flex-row font-sans">
        
        {/* Left Panel */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-16 bg-gray-100">
          <div className="flex items-center mb-6">
            <img src={Logo} alt="Logo" className="w-10 h-full object-cover" />
            <h1 className="text-xl md:text-2xl font-semibold ml-2">Your Logo</h1>
          </div>

          <div className="text-left w-full max-w-md mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">Sign Into</h2>
            <h3 className="text-lg md:text-xl font-medium text-gray-700">Your Account</h3>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
           

          <div>
  <label className="block mb-1 text-sm font-medium text-gray-700">Company ID</label>

  <div className="relative">
    {/* Icon inside input */}
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FaBuilding className="text-gray-400 h-5 w-5" />
    </div>

    <input
      type="text"
      placeholder="Company ID"
      value={companyId}
      onChange={(e) => setCompanyId(e.target.value)}
      className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      autoComplete="username"
    />
  </div>
</div>

<div>
  <label className="block mb-1 text-sm font-medium text-gray-700">
    Password
  </label>

  <div className="relative">
    {/* Lock icon inside input */}
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FaLock className="text-gray-400 h-5 w-5" />
    </div>

    <input
      type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      autoComplete="current-password"
    />
  </div>
</div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="flex-1 h-1/3 md:h-full">
          <img src={right_image} alt="Right Panel" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
