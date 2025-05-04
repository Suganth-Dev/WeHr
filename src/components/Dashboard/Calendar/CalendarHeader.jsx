import React from 'react';
import { format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarHeader = ({ currentDate, prevMonth, nextMonth }) => {
  const previousMonth = new Date(currentDate);
  previousMonth.setMonth(previousMonth.getMonth() - 1);
  
  const nextMonthDate = new Date(currentDate);
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-4">
        <button 
          className="p-1 rounded-full hover:bg-gray-100" 
          onClick={prevMonth}
        >
          <ChevronLeft size={20} className="text-gray-500" />
        </button>
        
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 text-sm font-medium hover:bg-gray-100 rounded transition-colors">
            {format(previousMonth, 'MMMM')}
          </button>
          
          <button className="px-3 py-1 text-sm font-medium bg-gray-900 text-white rounded">
            {format(currentDate, 'MMMM')}
          </button>
          
          <button className="px-3 py-1 text-sm font-medium hover:bg-gray-100 rounded transition-colors">
            {format(nextMonthDate, 'MMMM')}
          </button>
        </div>
        
        <button 
          className="p-1 rounded-full hover:bg-gray-100" 
          onClick={nextMonth}
        >
          <ChevronRight size={20} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
