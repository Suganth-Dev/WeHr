import React from 'react';
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  format, 
  isSameMonth, 
  isSameDay 
} from 'date-fns';

const CalendarGrid = ({ currentDate, events }) => {
  // Get days for the current month view
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  
  // Day names
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Get today
  const today = new Date();
  
  return (
    <div>
      <div className="grid grid-cols-7 mb-2">
        {dayNames.map((day, index) => (
          <div key={index} className="h-10 flex items-center justify-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, dayIndex) => {
          const isToday = isSameDay(day, today);
          const isCurrentMonth = isSameMonth(day, currentDate);
          const dayEvents = events.filter(event => isSameDay(event.date, day));
          
          return (
            <div key={dayIndex} className="relative">
              <button 
                className={`calendar-day ${isToday ? 'today' : ''} ${!isCurrentMonth ? 'other-month' : ''}`}
              >
                {format(day, 'd')}
              </button>
              
              {dayEvents.length > 0 && (
                <div className="mt-1">
                  {dayEvents.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="text-xs bg-yellow-100 text-yellow-800 px-1 py-0.5 rounded truncate mb-0.5"
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
