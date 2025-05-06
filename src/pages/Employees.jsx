import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Upload, ChevronDown, Trash2, Pencil } from 'lucide-react';
import * as XLSX from 'xlsx';

const mockEmployees = [
  { id: '11D001', name: 'MAGHESH', email: 'magesh@Dotcod.in', joinDate: '2023-06-15', designation: 'Software Engineer', status: 'Confirmed' },
  { id: '11D002', name: 'Tesla', email: 'rshaull@Dotcod.in', joinDate: '2023-04-19', designation: 'Software Engineer', status: 'Probation' },
  { id: '11D003', name: 'GM', email: 'gm@Dotcod.in', joinDate: '2023-01-02', designation: 'Software Engineer', status: 'Confirmed' },
];

export default function Employees() {
  const [view, setView] = useState('menu');
  const [employees, setEmployees] = useState(mockEmployees);
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState('joinDate');
  const [sortAsc, setSortAsc] = useState(true);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const filtered = useMemo(() => {
    return employees
      .filter(e =>
        e.name.toLowerCase().includes(filter.toLowerCase()) ||
        e.id.toLowerCase().includes(filter.toLowerCase()) ||
        e.email.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => {
        if (sortKey === 'joinDate') {
          const da = new Date(a.joinDate), db = new Date(b.joinDate);
          return sortAsc ? da - db : db - da;
        }
        return 0;
      });
  }, [employees, filter, sortKey, sortAsc]);

  const handleImport = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      const data = new Uint8Array(evt.target.result);
      const wb = XLSX.read(data, { type: 'array' });
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
      setEmployees(js => [...js, ...json]);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleCreate = newEmp => {
    if (editingEmployee) {
      setEmployees(js => js.map(e => (e.id === editingEmployee.id ? newEmp : e)));
    } else {
      setEmployees(js => [newEmp, ...js]);
    }
    setEditingEmployee(null);
    setView('list');
  };

  const handleDelete = id => {
    setEmployees(js => js.filter(e => e.id !== id));
  };

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-6 text-gray-800">Employee</h1>
    
    {view === 'menu' && (
      <div className="flex gap-3 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {/* Employee Box */}
        <div
          onClick={() => setView('list')}
          className="w-40 h-40 border-2 border-[#EF4444] rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-[#FFF1F2] shadow-sm"
        >
          <Plus size={40} className="text-[#EF4444]" />
          <p className="mt-2 text-[#EF4444] font-semibold text-sm text-center">Employee</p>
        </div>
    
        {/* Org Config Box */}
        <div
          onClick={() => alert('Org Config coming soon!')}
          className="w-40 h-40 border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 shadow-sm"
        >
          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
          </svg>
          <p className="mt-2 text-gray-500 font-semibold text-sm text-center">Org Config</p>
        </div>
      </div>
    </div>
    
    
     

      
      )}

      {view === 'list' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 border rounded px-3 py-2 cursor-pointer hover:bg-gray-50">
                <Upload size={16} /> Import Excel
                <input type="file" accept=".xlsx,.xls" onChange={handleImport} className="hidden" />
              </label>
              <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center gap-2"
                onClick={() => {
                  setEditingEmployee(null);
                  setView('create');
                }}
              >
                <Plus size={16} /> Add Employee
              </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-2 w-full sm:w-64"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2">ID / Email</th>
                  <th
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => {
                      setSortKey('joinDate');
                      setSortAsc(k => (sortKey === 'joinDate' ? !k : true));
                    }}
                  >
                    Join Date
                    <ChevronDown size={16} className={`inline ml-1 ${!sortAsc ? 'rotate-180' : ''}`} />
                  </th>
                  <th className="px-4 py-2">Designation</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2 text-center">Options</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(emp => (
                  <tr key={emp.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <div className="font-semibold">{emp.id}</div>
                      <div className="text-sm text-gray-500">{emp.email}</div>
                    </td>
                    <td className="px-4 py-2">{new Date(emp.joinDate).toLocaleDateString()}</td>
                    <td className="px-4 py-2">{emp.designation}</td>
                    <td className="px-4 py-2">{emp.status}</td>
                    <td className="px-4 py-2 text-center space-x-2">
                      <button onClick={() => { setEditingEmployee(emp); setView('create'); }} className="text-blue-500 hover:text-blue-700">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => handleDelete(emp.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {view === 'create' && (
        <CreateEmployeeForm
          onCancel={() => { setEditingEmployee(null); setView('list'); }}
          onSave={handleCreate}
          initialData={editingEmployee}
        />
      )}
    </div>
  );
}

function CreateEmployeeForm({ onCancel, onSave, initialData }) {
  const [form, setForm] = useState(() => initialData || {
    name: '', id: '', joinDate: '', email: '', mobile: '', status: '',
    dob: '', gender: '', maritalStatus: '', isChallenged: '', bloodGroup: '', designation: '', personalEmail: ''
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-9 bg-white p-6 border rounded-lg shadow-md">
      {/* Employee Details */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Add details of an employee</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField label="Employee Name" name="name" value={form.name} onChange={handleChange} required />
          <InputField label="Employee Number" name="id" value={form.id} onChange={handleChange} required />
          <InputField label="Date of Joining" name="joinDate" type="date" value={form.joinDate} onChange={handleChange} required />
          <InputField label="Email ID" name="email" type="email" value={form.email} onChange={handleChange} required />
          <InputField label="Mobile Number" name="mobile" type="tel" value={form.mobile} onChange={handleChange} required />
          <SelectField label="Employee Status" name="status" value={form.status} onChange={handleChange} options={['Probation', 'Confirmed', 'Resigned']} required />
        </div>
      </div>

      {/* Personal Details */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleChange} required />
          <SelectField label="Gender" name="gender" value={form.gender} onChange={handleChange} options={['Male', 'Female', 'Other']} required />
          <SelectField label="Marital Status" name="maritalStatus" value={form.maritalStatus} onChange={handleChange} options={['Single', 'Married']} required />
          <SelectField label="Is Physical Challenged" name="isChallenged" value={form.isChallenged} onChange={handleChange} options={['No', 'Yes']} required />
          <SelectField label="Blood Group" name="bloodGroup" value={form.bloodGroup} onChange={handleChange} options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']} required />
          <InputField label="Personal Email ID" name="personalEmail" value={form.personalEmail} onChange={handleChange} required />
        </div>

        <div className='pt-5'>
        <SelectField label="designation" name="designation" value={form.designation} onChange={handleChange} options={['Software Engineer','React Developer','Cloud Engineer','Full Stack Developer', 'Front End Developer']} required />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <button type="button" onClick={onCancel} className="border px-4 py-2 rounded hover:bg-gray-50">Cancel</button>
        <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Save</button>
      </div>
    </form>
  );
}


function InputField({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, required }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium mb-1">{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="">Select</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
