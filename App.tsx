
import React, { useState, useEffect, useMemo } from 'react';
import { ProgramType, Participant, Criterion } from './types';
import { DEFAULT_ADULT_CRITERIA, DEFAULT_YOUTH_CRITERIA } from './constants';
import { DemographicForm } from './components/DemographicForm';
import { Checklist } from './components/Checklist';

const App: React.FC = () => {
  const [participant, setParticipant] = useState<Participant>({
    firstName: '',
    lastName: '',
    dob: '',
    ssn: '',
    email: '',
    phone: '',
    address: '',
    programType: ProgramType.ADULT
  });

  const [criteria, setCriteria] = useState<Criterion[]>(DEFAULT_ADULT_CRITERIA);

  // Sync criteria when program type changes
  useEffect(() => {
    if (participant.programType === ProgramType.ADULT) {
      setCriteria(DEFAULT_ADULT_CRITERIA);
    } else {
      setCriteria(DEFAULT_YOUTH_CRITERIA);
    }
  }, [participant.programType]);

  const handleParticipantChange = (field: keyof Participant, value: string) => {
    setParticipant(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdateCriterion = (id: string, updates: Partial<Criterion>) => {
    setCriteria(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  const handleAddCriterion = (c: Criterion) => {
    setCriteria(prev => [...prev, c]);
  };

  const handleRemoveCriterion = (id: string) => {
    setCriteria(prev => prev.filter(c => c.id !== id));
  };

  const eligibilitySummary = useMemo(() => {
    const total = criteria.length;
    const answered = criteria.filter(c => c.value !== null).length;
    const yesCount = criteria.filter(c => c.value === true).length;
    const noCount = criteria.filter(c => c.value === false).length;
    
    return { total, answered, yesCount, noCount, percentage: total > 0 ? (yesCount / total) * 100 : 0 };
  }, [criteria]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-8 px-4 shadow-lg no-print">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">WIOA Eligibility Master</h1>
            <p className="text-indigo-100 opacity-90">Workforce Innovation & Opportunity Act Participant Screening Tool</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => window.print()}
              className="bg-white text-indigo-700 px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-indigo-50 transition-all flex items-center"
            >
              <i className="fas fa-print mr-2"></i>
              Export PDF / Print
            </button>
          </div>
        </div>
      </header>

      {/* Print View Header */}
      <div className="print-only p-8 text-center border-b-2 border-slate-900 mb-8">
        <h1 className="text-4xl font-bold">WIOA ELIGIBILITY DETERMINATION RECORD</h1>
        <p className="text-lg mt-2">Official Screening for: {participant.programType} Program</p>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-8 space-y-8">
        {/* Statistics Bar - Sticky */}
        <div className="sticky top-4 z-10 no-print">
          <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6 overflow-x-auto pb-1 md:pb-0">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400">Total Checks</span>
                <span className="text-xl font-bold text-slate-800">{eligibilitySummary.total}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-emerald-500">Criteria Met (Yes)</span>
                <span className="text-xl font-bold text-emerald-600">{eligibilitySummary.yesCount}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-rose-500">Barriers Found (No)</span>
                <span className="text-xl font-bold text-rose-600">{eligibilitySummary.noCount}</span>
              </div>
            </div>
            <div className="hidden md:block h-10 w-px bg-slate-200"></div>
            <div className="flex-1 max-w-xs">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-slate-500">Screening Progress</span>
                <span className="text-xs font-bold text-indigo-600">{Math.round((eligibilitySummary.answered / eligibilitySummary.total) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-600 h-full transition-all duration-500" 
                  style={{ width: `${(eligibilitySummary.answered / eligibilitySummary.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <DemographicForm data={participant} onChange={handleParticipantChange} />
        
        <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                <i className="fas fa-tasks mr-2 text-indigo-600"></i>
                Eligibility Checklist: {participant.programType}
            </h2>
            <div className="no-print text-sm text-slate-500 italic">
                Changes saved locally
            </div>
        </div>

        <Checklist 
          criteria={criteria} 
          onUpdate={handleUpdateCriterion} 
          onAdd={handleAddCriterion}
          onRemove={handleRemoveCriterion}
        />

        {/* Footer Area */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mt-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Determination Status</h3>
                    <div className={`p-6 rounded-lg text-center ${
                        eligibilitySummary.noCount > 0 
                        ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    }`}>
                        <i className={`fas ${eligibilitySummary.noCount > 0 ? 'fa-exclamation-triangle' : 'fa-check-circle'} text-3xl mb-2`}></i>
                        <p className="font-bold text-xl">
                            {eligibilitySummary.noCount > 0 ? 'Conditional / Ineligible' : 'Potentially Eligible'}
                        </p>
                        <p className="text-sm mt-1 opacity-80">
                            {eligibilitySummary.noCount > 0 
                                ? `${eligibilitySummary.noCount} criteria marked 'No'. Review notes below.` 
                                : 'All core criteria successfully verified.'}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Verification Sign-off</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-500">Case Manager Signature</label>
                            <div className="h-10 border-b-2 border-slate-200 mt-4"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-slate-500">Date</label>
                                <div className="h-10 border-b-2 border-slate-200"></div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-slate-500">Reviewer ID</label>
                                <div className="h-10 border-b-2 border-slate-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>

      {/* Floating Action Bar - Mobile */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center no-print pointer-events-none px-4">
        <div className="bg-slate-900/90 backdrop-blur-md text-white px-8 py-3 rounded-full shadow-2xl pointer-events-auto flex items-center gap-6 border border-slate-700">
           <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-bold">{eligibilitySummary.yesCount}</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="text-sm font-bold">{eligibilitySummary.noCount}</span>
           </div>
           <div className="h-4 w-px bg-slate-700"></div>
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="text-indigo-400 hover:text-indigo-300 transition-colors"
           >
             <i className="fas fa-arrow-up"></i>
           </button>
        </div>
      </div>
    </div>
  );
};

export default App;
