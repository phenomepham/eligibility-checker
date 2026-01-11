
import React, { useState } from 'react';
import { Criterion } from '../types';

interface Props {
  criteria: Criterion[];
  onUpdate: (id: string, updates: Partial<Criterion>) => void;
  onAdd: (criterion: Criterion) => void;
  onRemove: (id: string) => void;
}

export const Checklist: React.FC<Props> = ({ criteria, onUpdate, onAdd, onRemove }) => {
  const [newLabel, setNewLabel] = useState('');
  const [newCategory, setNewCategory] = useState('General');

  const handleAddCustom = () => {
    if (!newLabel.trim()) return;
    onAdd({
      id: Math.random().toString(36).substr(2, 9),
      label: newLabel,
      category: newCategory,
      value: null,
      note: '',
      isCustom: true
    });
    setNewLabel('');
  };

  const categories = Array.from(new Set(criteria.map(c => c.category)));

  return (
    <div className="space-y-8">
      {categories.map(cat => (
        <div key={cat} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">{cat}</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {criteria.filter(c => c.category === cat).map(item => (
              <div 
                key={item.id} 
                className={`p-6 transition-colors ${
                  item.value === true ? 'bg-emerald-50' : 
                  item.value === false ? 'bg-rose-50' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-slate-800 mb-2">{item.label}</p>
                    {/* The note field is displayed if the value is explicitly false (No) */}
                    {item.value === false && (
                      <div className="mt-3">
                        <label className="block text-xs font-bold text-rose-600 uppercase mb-1">Reason for Ineligibility / Remarks:</label>
                        <textarea
                          placeholder="Enter details explaining the 'No' selection..."
                          className="w-full p-3 text-sm border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none bg-white shadow-inner min-h-[80px]"
                          value={item.note}
                          onChange={(e) => onUpdate(item.id, { note: e.target.value })}
                        />
                      </div>
                    )}
                    {/* Optional: Show existing notes for 'Yes' if they were previously entered, or just keep them for No as requested */}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                      <button
                        onClick={() => onUpdate(item.id, { value: true })}
                        className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
                          item.value === true ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => onUpdate(item.id, { value: false })}
                        className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
                          item.value === false ? 'bg-rose-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        No
                      </button>
                    </div>
                    {item.isCustom && (
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-slate-400 hover:text-rose-500 transition-colors p-2"
                        title="Remove custom field"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Custom Field Adder */}
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 border-dashed no-print">
        <h4 className="text-indigo-900 font-bold mb-4 flex items-center">
          <i className="fas fa-plus-circle mr-2"></i>
          Add Custom Eligibility Criterion
        </h4>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Describe the new requirement..."
            className="flex-1 px-4 py-2 rounded-lg border border-indigo-200 outline-none focus:ring-2 focus:ring-indigo-400"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <select 
            className="px-4 py-2 rounded-lg border border-indigo-200 bg-white"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          >
            <option>General Documentation</option>
            <option>In-School Status</option>
            <option>Out-of-School Status</option>
            <option>Income & Priority</option>
            <option>Dislocated Worker</option>
            <option>Local Criteria</option>
          </select>
          <button
            onClick={handleAddCustom}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Add Field
          </button>
        </div>
      </div>
    </div>
  );
};
