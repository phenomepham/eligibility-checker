
import React from 'react';
import { Participant, ProgramType } from '../types';

interface Props {
  data: Participant;
  onChange: (field: keyof Participant, value: string) => void;
}

export const DemographicForm: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
        <i className="fas fa-user-circle mr-2 text-indigo-600"></i>
        Demographic Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Date of Birth</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            value={data.dob}
            onChange={(e) => onChange('dob', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Program Selection</label>
          <select
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all bg-white"
            value={data.programType}
            onChange={(e) => onChange('programType', e.target.value as ProgramType)}
          >
            <option value={ProgramType.ADULT}>WIOA Adult</option>
            <option value={ProgramType.YOUTH}>WIOA Youth</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
