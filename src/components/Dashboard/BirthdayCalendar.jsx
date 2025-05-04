import React from 'react';
import { format } from 'date-fns';

const BirthdayCalendar = () => {
  // Sample employee data for birthday calendar
  const employees = [
    {
      id: 1,
      name: 'Robert Whistable',
      position: 'Product manager',
      birthdate: new Date(1998, 1, 15), // Feb 15, 1998
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      id: 2,
      name: 'Robert Whistable',
      position: 'Product manager',
      birthdate: new Date(1998, 1, 15), // Feb 15, 1998
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-card p-4">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Birthday Calendar</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {employees.map(employee => (
          <div key={employee.id} className="flex flex-col items-center">
            <img 
              src={employee.avatar} 
              alt={employee.name} 
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <h3 className="font-medium text-gray-900">{employee.name}</h3>
            <p className="text-sm text-gray-500">{employee.position}</p>
            <p className="text-xs text-gray-400">
              {format(employee.birthdate, 'dd MMM yyyy')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayCalendar;
