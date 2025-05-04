import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';

const AnnouncementItem = ({ title, timestamp, options = false }) => {
  const [showOptions, setShowOptions] = useState(false);
  
  return (
    <div className="announcement-item">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
        </div>
        
        {options && (
          <div className="relative">
            <button 
              className="p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
              onClick={() => setShowOptions(!showOptions)}
            >
              <MoreVertical size={16} className="text-gray-500" />
            </button>
            
            {showOptions && (
              <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <button className="block w-full px-4 py-1 text-left text-sm text-gray-700 hover:bg-gray-100">
                  Edit
                </button>
                <button className="block w-full px-4 py-1 text-left text-sm text-red-600 hover:bg-gray-100">
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementItem;
