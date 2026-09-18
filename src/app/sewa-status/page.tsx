'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getStoredRequests, SewaRequestItem } from '@/lib/store/requestsStore';
import { Search, CheckCircle2, Clock, User, Phone, MapPin, Building, ShieldCheck, Download } from 'lucide-react';

const STAGES = [
  'REQUEST RECEIVED',
  'COORDINATOR CONTACT',
  'DETAILS CONFIRMED',
  'PANDIT ASSIGNED',
  'TRAVEL READY',
  'SEWA DAY',
  'COMPLETED'
];

function StatusTrackerContent() {
  const searchParams = useSearchParams();
  const queryId = searchParams.get('id') || '';

  const [searchQuery, setSearchQuery] = useState<string>(queryId);
  const [activeRequest, setActiveRequest] = useState<SewaRequestItem | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMsg('');
    const requests = getStoredRequests();
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) {
      setErrorMsg('Please enter a Request ID or Mobile number.');
      return;
    }

    const found = requests.find(
      r => r.id.toLowerCase() === query || r.mobile.includes(query)
    );

    if (found) {
      setActiveRequest(found);
    } else {
      setActiveRequest(null);
      setErrorMsg(`No active Sewa request found matching "${query}". Please check the ID or contact support.`);
    }
  };

  useEffect(() => {
    if (queryId) {
      handleSearch();
    } else {
      const requests = getStoredRequests();
      if (requests.length > 0) {
        setActiveRequest(requests[0]);
        setSearchQuery(requests[0].id);
      }
    }
  }, [queryId]);

  const currentStageIdx = activeRequest ? STAGES.indexOf(activeRequest.status) : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-10 flex gap-2 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Enter Request ID (e.g. PDS-884920) or Mobile"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-3.5 rounded-lg bg-parchment-50 border border-gold-600/40 text-xs text-mahogany-900 focus:outline-none focus:border-saffron-600 shadow-sm"
        />
        <button
          type="submit"
          className="px-6 py-3.5 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider flex items-center gap-2 shadow-sm"
        >
          <Search className="w-4 h-4" />
          <span>TRACK</span>
        </button>
      </form>

      {errorMsg && (
        <div className="p-4 rounded-lg bg-red-50 text-red-800 text-xs border border-red-200 text-center mb-8">
          {errorMsg}
        </div>
      )}

      {/* Request Tracker Card */}
      {activeRequest && (
        <div className="bg-parchment-100 rounded-2xl border border-gold-600/40 shadow-heritage p-6 sm:p-8 space-y-8">
          
          {/* Header info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gold-600/20 gap-4">
            <div>
              <span className="text-[10px] font-serif uppercase tracking-widest text-saffron-700 font-bold block">
                Active Pilgrimage Request
              </span>
              <h2 className="font-serif text-2xl font-bold text-mahogany-900">
                {activeRequest.sewaTitle}
              </h2>
              <div className="text-xs text-terracotta-700 mt-1">
                Yatri Name: <strong>{activeRequest.customerName}</strong> ({activeRequest.city})
              </div>
            </div>

            <div className="text-right sm:text-right">
              <div className="inline-block px-3 py-1 rounded bg-mahogany-900 text-gold-400 font-mono text-sm font-bold border border-gold-500">
                {activeRequest.id}
              </div>
              <div className="text-[11px] text-terracotta-700 mt-1">
                Created: {activeRequest.createdAt}
              </div>
            </div>
          </div>

          {/* Stage Timeline Bar */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-mahogany-900 uppercase tracking-wide">
              Live Status Journey:
            </div>

            {/* Desktop Stepper */}
            <div className="hidden md:grid grid-cols-7 gap-2">
              {STAGES.map((stg, i) => {
                const isDone = i <= currentStageIdx;
                const isCurrent = i === currentStageIdx;
                return (
                  <div key={i} className="text-center space-y-2">
                    <div
                      className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-bold transition-all ${
                        isCurrent
                          ? 'bg-saffron-600 text-white shadow-md ring-4 ring-saffron-100'
                          : isDone
                          ? 'bg-emerald-700 text-white'
                          : 'bg-parchment-200 text-terracotta-500 border border-gold-600/30'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                    </div>
                    <div className={`text-[10px] leading-tight ${isCurrent ? 'font-bold text-saffron-800' : 'text-terracotta-700'}`}>
                      {stg}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Stepper list */}
            <div className="md:hidden space-y-2">
              {STAGES.map((stg, i) => {
                const isDone = i <= currentStageIdx;
                const isCurrent = i === currentStageIdx;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2.5 rounded-lg border text-xs ${
                      isCurrent
                        ? 'bg-saffron-50 border-saffron-600 font-bold text-saffron-900'
                        : isDone
                        ? 'bg-emerald-50/60 border-emerald-500/30 text-emerald-900'
                        : 'bg-parchment-50 border-gold-600/15 text-terracotta-500'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 ${isDone ? 'text-emerald-600' : 'text-gray-300'}`} />
                    <span>{stg}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gold-600/20 text-xs">
            
            <div className="space-y-3 bg-parchment-200/50 p-5 rounded-xl border border-gold-600/20">
              <div className="font-serif font-bold text-sm text-mahogany-900">
                Requirements Summary
              </div>
              <div><strong>Preferred Date:</strong> {activeRequest.preferredDate}</div>
              <div><strong>Group Size:</strong> {activeRequest.peopleCount} Members</div>
              <div><strong>Gotra:</strong> {activeRequest.gotra || 'To be guided'}</div>
              <div>
                <strong>Assistance Opted:</strong> {activeRequest.assistanceOptions.join(', ')}
              </div>
              {activeRequest.notes && <div><strong>Notes:</strong> {activeRequest.notes}</div>}
            </div>

            <div className="space-y-3 bg-parchment-200/50 p-5 rounded-xl border border-gold-600/20">
              <div className="font-serif font-bold text-sm text-mahogany-900">
                Assigned Operations & Guidance
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-saffron-600" />
                <span><strong>Teerth Pandit:</strong> {activeRequest.assignedPandit || 'Assigning soon...'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-gold-700" />
                <span><strong>Hotel / Stay:</strong> {activeRequest.hotelAssigned || 'Coordinates near Vishnupad'}</span>
              </div>
              <div className="pt-2 text-[11px] text-terracotta-700 italic">
                Coordinator team will call on {activeRequest.mobile} before arrival.
              </div>
            </div>

          </div>

          {/* Bottom action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gold-600/20">
            <a
              href={`https://wa.me/919876543210?text=Query%20regarding%20Sewa%20Request%20ID%20${activeRequest.id}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-700 text-white font-bold text-xs"
            >
              <span>WhatsApp Coordinator</span>
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30"
            >
              <Download className="w-4 h-4" />
              <span>Download Request Summary</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default function SewaStatusPage() {
  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="text-center mb-8">
        <div className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest mb-1">
          Real-Time Tracking
        </div>
        <h1 className="font-serif text-3xl font-bold text-mahogany-900">
          Sewa Request Status
        </h1>
        <p className="text-xs text-terracotta-700 mt-1">
          Apna Request ID (e.g. PDS-884920) ya registered Mobile number daalkar live status dekhein.
        </p>
      </div>

      <Suspense fallback={<div className="text-center text-xs text-terracotta-700">Loading request status...</div>}>
        <StatusTrackerContent />
      </Suspense>
    </div>
  );
}
