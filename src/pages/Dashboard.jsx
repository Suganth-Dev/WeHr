import React from 'react';
import StatCard from '../components/Dashboard/StatCard';
import Announcements from '../components/Dashboard/Announcements';
import Calendar from '../components/Dashboard/Calendar/Calendar';
import BirthdayCalendar from '../components/Dashboard/BirthdayCalendar';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Leave Request" 
          value="04" 
          color="pink"
        />
        
        <StatCard 
          title="Attendance" 
          value="10" 
          color="blue"
        />
        
        <StatCard 
          title="Total Employees" 
          value="24" 
          color="orange"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <StatCard 
          title="PayRoll" 
          value="48" 
          color="blue"
          trend={{
            direction: 'up',
            value: '2%',
            period: 'Past month'
          }}
          additionalInfo={
            <div>
              <div>12 Men</div>
              <div>12 Women</div>
            </div>
          }
        />
        
        <StatCard 
          title="Task Request" 
          value="16" 
          color="purple"
          trend={{
            direction: 'up',
            value: '5%',
            period: 'Past month'
          }}
          additionalInfo={
            <div>
              <div>6 Men</div>
              <div>10 Women</div>
            </div>
          }
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Announcements />
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <Calendar />
          <BirthdayCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
