import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Clock, 
  CreditCard, 
  CheckSquare, 
  Megaphone, 
  HeadphonesIcon, 
  Settings as SettingsIcon,
  X
} from 'lucide-react';

const Sidebar = ({ onClose }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">WeHR</h1>
        <button 
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={onClose}
        >
          <X size={20} className="text-gray-500" />
        </button>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="mb-4">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <LayoutDashboard className="sidebar-icon" />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink 
            to="/employees" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Users className="sidebar-icon" />
            <span>Employee</span>
          </NavLink>
          
          <NavLink 
            to="/attendance" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Clock className="sidebar-icon" />
            <span>Attendance</span>
          </NavLink>
          
          <NavLink 
            to="/payroll" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <CreditCard className="sidebar-icon" />
            <span>PayRoll</span>
          </NavLink>
          
          <NavLink 
            to="/tasks" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <CheckSquare className="sidebar-icon" />
            <span>Task</span>
          </NavLink>
          
          <NavLink 
            to="/announcements" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <Megaphone className="sidebar-icon" />
            <span>Announcement</span>
          </NavLink>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <h6 className="text-xs font-semibold text-gray-400 mb-2 px-4">OTHER</h6>
          
          <NavLink 
            to="/support" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <HeadphonesIcon className="sidebar-icon" />
            <span>Support</span>
          </NavLink>
          
          <NavLink 
            to="/settings" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <SettingsIcon className="sidebar-icon" />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
