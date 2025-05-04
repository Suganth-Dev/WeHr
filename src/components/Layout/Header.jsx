import React, { useState } from 'react';
import { Bell, MessageSquare, Search, ChevronDown, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sugan from '../../assets/Suga.png'

function Header({ onMenuClick }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    // Clear authentication state from both storages
    sessionStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAuthenticated');
    
    // Navigate to login page
    navigate('/login', { replace: true });
  };
  
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={onMenuClick}
          >
            <Menu size={24} className="text-gray-500" />
          </button>
          
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              className="bg-gray-100 block w-full pl-10 pr-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors" 
              placeholder="Search Employee" 
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Bell size={20} className="text-gray-500" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          <button className="hidden md:block p-2 rounded-full hover:bg-gray-100 transition-colors">
            <MessageSquare size={20} className="text-gray-500" />
          </button>
          
          <div className="relative">
            <button 
              className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded-lg transition-colors"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <img 
                src={Sugan} 
                alt="Admira John" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="hidden md:inline font-medium">Sugan</span>
              <ChevronDown size={16} />
            </button>
            
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <button 
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
