import React from 'react';
import StatCard from '../components/Dashboard/StatCard';
import Announcements from '../components/Dashboard/Announcements';
import Calendar from '../components/Dashboard/Calendar/Calendar';
import BirthdayCalendar from '../components/Dashboard/BirthdayCalendar';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left section (2/3 width) */}
        <div className="xl:col-span-2 space-y-6">

          {/* Top Stat Cards (Leave, Attendance, Employees) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard title="Leave Request" value="04" color="pink" />
            <StatCard title="Attendance" value="10" color="blue" />
            <StatCard title="Total Employees" value="24" color="purple" />
          </div>

          {/* Mid Cards (PayRoll & Task Request) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Announcement Section */}
          <Announcements />
        </div>

        {/* Right section (1/3 width) */}
        <div className="space-y-6">
          <Calendar />
          <BirthdayCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
