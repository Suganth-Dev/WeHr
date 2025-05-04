import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnnouncementItem from './AnnouncementItem';

const Announcements = () => {
  return (
    <div className="bg-white rounded-lg shadow-card">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-700">Announcement</h2>
        
        <button className="flex items-center gap-1 text-sm text-gray-500">
          Today, 13 Sep 2021
          <ChevronDown size={16} />
        </button>
      </div>
      
      <div className="p-4">
        <AnnouncementItem 
          title="Outing schedule for every departement" 
          timestamp="5 Minutes ago" 
          options
        />
        
        <AnnouncementItem 
          title="Meeting HR Department" 
          timestamp="Yesterday, 12:30 PM" 
          options
        />
        
        <AnnouncementItem 
          title="IT Department need two more talents for UX/UI Designer position" 
          timestamp="Yesterday, 09:15 AM" 
          options
        />
      </div>
      
      <div className="p-4 border-t border-gray-100 text-center">
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors">
          See All Announcement
        </button>
      </div>
    </div>
  );
};

export default Announcements;
