import React, { useState } from 'react';
import { FaUserPlus, FaChartLine, FaCheck, FaTimes, FaEye } from 'react-icons/fa';

const initialLeaveRequests = [
  {
    name: 'MAGHESH',
    email: 'magesh@dotcod.in',
    requestDate: '6/3/22',
    leaveType: 'Casual Leave',
    reason: 'Not Well',
    days: 1,
    status: 'Pending',
  },
  {
    name: 'Tesla',
    email: 'rsahul1@dotcod.in',
    requestDate: '12/2/22 - 16/02/22',
    leaveType: 'Sick Leave',
    reason: 'Not Well',
    days: 4,
    status: 'Approved',
  },
  {
    name: 'GM',
    email: 'gm@dotcod.in',
    requestDate: '4/19/23',
    leaveType: 'Casual Leave',
    reason: 'Sick Leave',
    days: 1,
    status: 'Approved',
  },
  {
    name: 'AARP',
    email: 'aarp@dotcod.in',
    requestDate: '1/2/23',
    leaveType: 'Sick Leave',
    reason: 'Marriage Function',
    days: 1,
    status: 'Pending',
  },
  {
    name: 'Disney',
    email: 'disney@dotcod.in',
    requestDate: '9/4/23',
    leaveType: 'Sick Leave',
    reason: 'Marriage Function',
    days: 1,
    status: 'Pending',
  },
];

const attendanceData = [
  { name: "John Doe", date: "3/15/25", designation: "Software Engineer", status: "Present" },
  { name: "Jane Smith", date: "4/10/25", designation: "UI/UX Designer", status: "Absent" },
  { name: "Michael Green", date: "5/2/25", designation: "Project Manager", status: "Leave" },
  { name: "Alice Johnson", date: "3/28/25", designation: "Backend Developer", status: "Present" },
  { name: "Robert Brown", date: "2/22/25", designation: "Frontend Developer", status: "Present" },
  { name: "Emily Davis", date: "4/3/25", designation: "QA Engineer", status: "Leave" },
  { name: "David Wilson", date: "5/1/25", designation: "DevOps Engineer", status: "Absent" },
  { name: "Sarah Miller", date: "2/27/25", designation: "Business Analyst", status: "Present" },
  { name: "Daniel Anderson", date: "4/18/25", designation: "Scrum Master", status: "Present" },
  { name: "Laura Thomas", date: "3/8/25", designation: "Tech Lead", status: "Leave" },
  { name: "James Jackson", date: "3/31/25", designation: "Full Stack Developer", status: "Absent" },
  { name: "Olivia White", date: "4/24/25", designation: "Mobile App Developer", status: "Present" },
  { name: "Matthew Harris", date: "2/15/25", designation: "Cloud Architect", status: "Present" },
  { name: "Sophia Martin", date: "5/4/25", designation: "System Analyst", status: "Leave" },
  { name: "William Thompson", date: "2/28/25", designation: "Security Engineer", status: "Present" },
  { name: "Chloe Garcia", date: "3/20/25", designation: "Database Administrator", status: "Absent" },
  { name: "Benjamin Martinez", date: "4/14/25", designation: "Product Owner", status: "Present" },
  { name: "Ava Robinson", date: "5/5/25", designation: "Data Scientist", status: "Present" },
  { name: "Elijah Clark", date: "2/19/25", designation: "Machine Learning Engineer", status: "Leave" },
  { name: "Mia Rodriguez", date: "3/25/25", designation: "Support Engineer", status: "Present" }
];

const Attendance = () => {
  const [view, setView] = useState('tiles');
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);

  const updateStatus = (index, status) => {
    const updated = [...leaveRequests];
    updated[index].status = status;
    setLeaveRequests(updated);
  };

  return (
    <div className="p-4 text-sm sm:text-base">
      {view === 'tiles' && (
        <div className="px-4 sm:px-6 pt-4">
          <h1 className="text-2xl font-semibold text-[#1E1E1E] mb-4">Attendance</h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <div
              onClick={() => setView('leave')}
              className="w-full sm:w-[160px] h-40 border-2 border-[#EF4444] rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-[#FFF1F2] shadow-sm"
            >
              <FaUserPlus size={36} className="text-[#EF4444]" />
              <p className="mt-2 text-[#EF4444] font-semibold text-sm text-center">Leave Request</p>
            </div>

            <div
              onClick={() => setView('attendance')}
              className="w-full sm:w-[160px] h-40 flex flex-col items-center justify-center bg-white border rounded-lg shadow-sm p-4 cursor-pointer hover:bg-gray-50"
            >
              <FaChartLine size={36} className="text-gray-700" />
              <p className="mt-2 text-gray-700 font-semibold text-sm text-center">Attendances</p>
            </div>
          </div>
        </div>
      )}

      {view === 'leave' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Leave Request</h1>
            <button onClick={() => setView('tiles')} className="text-blue-500 hover:underline text-sm">Back</button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-7">
            <div className="bg-pink-100 p-7 rounded-xl">
              <p className="text-sm text-gray-600">Casual Leave</p>
              <p className="text-2xl font-bold text-pink-500">04</p>
              <p className="text-xs text-gray-400">+2% Jan month</p>
            </div>
            <div className="bg-purple-100 p-7 rounded-xl">
              <p className="text-sm text-gray-600">Emergency Leave</p>
              <p className="text-2xl font-bold text-purple-500">06</p>
              <p className="text-xs text-gray-400">+2% Jan month</p>
            </div>
            <div className="bg-blue-100 p-7 rounded-xl">
              <p className="text-sm text-gray-600">Total Leave Jan</p>
              <p className="text-2xl font-bold text-blue-500">10</p>
              <p className="text-xs text-gray-400">+2% Jan month</p>
            </div>
            <div className="bg-pink-100 p-7 rounded-xl">
              <p className="text-sm text-gray-600">Today Leave</p>
              <p className="text-2xl font-bold text-pink-500">02</p>
              <p className="text-xs text-gray-400">23/01 Monday</p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-auto rounded-lg shadow border bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Request Date</th>
                  <th className="px-4 py-3 text-left">Leave Type</th>
                  <th className="px-4 py-3 text-left">Reason</th>
                  <th className="px-4 py-3 text-left">No. Days</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((req, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <p className="font-medium">{req.name}</p>
                      <p className="text-xs text-gray-500">{req.email}</p>
                    </td>
                    <td className="px-4 py-3">{req.requestDate}</td>
                    <td className="px-4 py-3">{req.leaveType}</td>
                    <td className="px-4 py-3">{req.reason}</td>
                    <td className="px-4 py-3">{String(req.days).padStart(2, '0')}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          req.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : req.status === 'Approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <button
                        onClick={() => updateStatus(index, 'Approved')}
                        className="text-green-600 hover:text-green-800"
                        title="Approve"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() => updateStatus(index, 'Rejected')}
                        className="text-red-600 hover:text-red-800"
                        title="Reject"
                      >
                        <FaTimes />
                      </button>
                      <button
                        onClick={() => alert(JSON.stringify(req, null, 2))}
                        className="text-gray-600 hover:text-black"
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === 'attendance' && (
        <div className="pt-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Attendance Details</h1>
            <button onClick={() => setView('tiles')} className="text-blue-500 hover:underline text-sm">Back</button>
          </div>

          {/* Search Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by name"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 w-full">
              <option>All Departments</option>
              <option>HR</option>
              <option>Engineering</option>
              <option>Sales</option>
            </select>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>

          {/* Attendance Table */}
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="px-4 py-3 text-left">Employee Name</th>
                  <th className="px-4 py-3 text-left">designation</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((entry, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{entry.name}</td>
                    <td className="px-4 py-3">{entry.designation}</td>
                    <td className="px-4 py-3">{entry.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                          entry.status === "Present"
                            ? "bg-green-500"
                            : entry.status === "Absent"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      >
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
