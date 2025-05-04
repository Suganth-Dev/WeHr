import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Sample events
  const events = [
    {
      date: new Date(2025, 0, 7), // January 7, 2025
      title: 'Onam Festival',
    },
  ];

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-4">
      <CalendarHeader 
        currentDate={currentDate} 
        prevMonth={prevMonth} 
        nextMonth={nextMonth} 
      />
      
      <CalendarGrid 
        currentDate={currentDate} 
        events={events}
      />
    </div>
  );
};

export default Calendar;
