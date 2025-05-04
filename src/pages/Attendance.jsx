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
      {view === 'tiles' ? (
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">Attendance</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div
    onClick={() => setView('leave')}
    className="cursor-pointer h-28 flex items-center bg-white border border-red-400 p-4 rounded-lg shadow-md hover:shadow-lg transition"
  >
    <div className="flex items-center gap-3 text-red-500 font-semibold text-lg">
      <FaUserPlus size={24} />
      Leave Request
    </div>
  </div>
  <div className="h-28 flex items-center bg-white border p-4 rounded-lg shadow-md">
    <div className="flex items-center gap-3 text-gray-700 font-semibold text-lg">
      <FaChartLine size={24} />
      Attendances
    </div>
  </div>
</div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Leave Request</h1>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-pink-100 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Casual Leave</p>
              <p className="text-2xl font-bold text-pink-500">04</p>
              <p className="text-xs text-gray-400">+2% Jan month</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Emergency Leave</p>
              <p className="text-2xl font-bold text-purple-500">06</p>
              <p className="text-xs text-gray-400">+2% Jan month</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-xl">
              <p className="text-sm text-gray-600">Total Leave Jan</p>
              <p className="text-2xl font-bold text-blue-500">10</p>
              <p className="text-xs text-gray-400">+2% Jan month</p>
            </div>
            <div className="bg-pink-100 p-4 rounded-xl">
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
    </div>
  );
};

export default Attendance;
