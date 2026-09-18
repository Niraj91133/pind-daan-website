'use client';

import React, { useState, useEffect } from 'react';
import { getStoredRequests, updateRequestStatus, SewaRequestItem } from '@/lib/store/requestsStore';
import { VERIFIED_PANDITS, PanditProfile } from '@/lib/data/panditsData';
import { 
  Users, ClipboardList, CheckCircle2, Clock, Phone, MessageSquare, 
  UserCheck, MapPin, Building, ShieldCheck, Plus, Filter, RefreshCw
} from 'lucide-react';

const KANBAN_STAGES: SewaRequestItem['status'][] = [
  'REQUEST RECEIVED',
  'COORDINATOR CONTACT',
  'DETAILS CONFIRMED',
  'PANDIT ASSIGNED',
  'TRAVEL READY',
  'COMPLETED'
];

export default function AdminConsolePage() {
  const [activeTab, setActiveTab] = useState<'requests' | 'pandits' | 'travel' | 'catalogue'>('requests');
  const [requests, setRequests] = useState<SewaRequestItem[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<SewaRequestItem | null>(null);
  
  // Modal edit states
  const [editStatus, setEditStatus] = useState<SewaRequestItem['status']>('REQUEST RECEIVED');
  const [editPandit, setEditPandit] = useState<string>('');
  const [editHotel, setEditHotel] = useState<string>('');

  const loadRequests = () => {
    const list = getStoredRequests();
    setRequests(list);
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleOpenDetail = (req: SewaRequestItem) => {
    setSelectedRequest(req);
    setEditStatus(req.status);
    setEditPandit(req.assignedPandit || '');
    setEditHotel(req.hotelAssigned || '');
  };

  const handleSaveDetail = () => {
    if (!selectedRequest) return;
    const updated = updateRequestStatus(selectedRequest.id, editStatus, editPandit, editHotel);
    setRequests(updated);
    setSelectedRequest(null);
  };

  return (
    <div className="min-h-screen bg-mahogany-950 text-parchment-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gold-600/30">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-gold-950 text-gold-400 font-mono text-xs font-bold border border-gold-600/40 mb-1">
              Internal Console
            </div>
            <h1 className="font-serif text-3xl font-bold text-parchment-50">
              Sewa Operations Console
            </h1>
            <p className="text-xs text-parchment-400 mt-1">
              Aaj kya manage karna hai? Gaya Ji Pind Daan, Pandit assignments aur Travel operations desk.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadRequests}
              className="px-3.5 py-2 rounded bg-mahogany-900 hover:bg-mahogany-800 text-gold-400 text-xs font-bold border border-gold-600/30 flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Board</span>
            </button>
          </div>
        </div>

        {/* Dashboard Metric Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-mahogany-900 p-5 rounded-xl border border-gold-600/30 space-y-2">
            <div className="text-xs text-parchment-400 uppercase font-bold tracking-wider">New Requests</div>
            <div className="font-serif text-3xl font-bold text-saffron-400">
              {requests.filter(r => r.status === 'REQUEST RECEIVED').length}
            </div>
            <div className="text-[11px] text-parchment-400">Pending initial phone contact</div>
          </div>

          <div className="bg-mahogany-900 p-5 rounded-xl border border-gold-600/30 space-y-2">
            <div className="text-xs text-parchment-400 uppercase font-bold tracking-wider">Pandit Assigned</div>
            <div className="font-serif text-3xl font-bold text-gold-400">
              {requests.filter(r => r.status === 'PANDIT ASSIGNED').length}
            </div>
            <div className="text-[11px] text-parchment-400">Verified Pandit assigned</div>
          </div>

          <div className="bg-mahogany-900 p-5 rounded-xl border border-gold-600/30 space-y-2">
            <div className="text-xs text-parchment-400 uppercase font-bold tracking-wider">Travel & Stay Ready</div>
            <div className="font-serif text-3xl font-bold text-emerald-400">
              {requests.filter(r => r.status === 'TRAVEL READY').length}
            </div>
            <div className="text-[11px] text-parchment-400">Pickup & hotel confirmed</div>
          </div>

          <div className="bg-mahogany-900 p-5 rounded-xl border border-gold-600/30 space-y-2">
            <div className="text-xs text-parchment-400 uppercase font-bold tracking-wider">Verified Pandits</div>
            <div className="font-serif text-3xl font-bold text-white">
              {VERIFIED_PANDITS.length}
            </div>
            <div className="text-[11px] text-parchment-400">Active Gaya Ji Teerth Pandits</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 border-b border-gold-600/20 pb-2">
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors ${
              activeTab === 'requests'
                ? 'bg-saffron-600 text-white'
                : 'bg-mahogany-900 text-parchment-300 hover:bg-mahogany-800'
            }`}
          >
            Sewa Request Board (Kanban)
          </button>
          <button
            onClick={() => setActiveTab('pandits')}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors ${
              activeTab === 'pandits'
                ? 'bg-saffron-600 text-white'
                : 'bg-mahogany-900 text-parchment-300 hover:bg-mahogany-800'
            }`}
          >
            Pandit Directory & Verification
          </button>
          <button
            onClick={() => setActiveTab('travel')}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-colors ${
              activeTab === 'travel'
                ? 'bg-saffron-600 text-white'
                : 'bg-mahogany-900 text-parchment-300 hover:bg-mahogany-800'
            }`}
          >
            Travel & Hotel Ops
          </button>
        </div>

        {/* TAB 1: KANBAN BOARD */}
        {activeTab === 'requests' && (
          <div className="overflow-x-auto pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 min-w-[1200px]">
              {KANBAN_STAGES.map((stg) => {
                const stageReqs = requests.filter(r => r.status === stg);
                return (
                  <div key={stg} className="bg-mahogany-900/90 rounded-xl p-4 border border-gold-600/30 flex flex-col min-h-[500px]">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-gold-600/20">
                      <h3 className="font-serif font-bold text-xs text-gold-400 tracking-wider">
                        {stg}
                      </h3>
                      <span className="w-5 h-5 rounded-full bg-mahogany-950 text-parchment-300 text-[10px] font-bold flex items-center justify-center">
                        {stageReqs.length}
                      </span>
                    </div>

                    <div className="space-y-3 flex-1 overflow-y-auto">
                      {stageReqs.map((req) => (
                        <div
                          key={req.id}
                          onClick={() => handleOpenDetail(req)}
                          className="p-3.5 rounded-lg bg-mahogany-950 hover:bg-mahogany-800/80 border border-gold-600/20 cursor-pointer transition-all space-y-2 group"
                        >
                          <div className="flex items-center justify-between text-[10px] text-parchment-400">
                            <span className="font-mono text-gold-400 font-bold">{req.id}</span>
                            <span>{req.preferredDate}</span>
                          </div>

                          <div className="font-serif font-bold text-sm text-parchment-50 group-hover:text-saffron-400">
                            {req.customerName}
                          </div>

                          <div className="text-[11px] text-parchment-300 truncate">
                            {req.sewaTitle} ({req.peopleCount} members)
                          </div>

                          <div className="text-[10px] text-terracotta-100 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-saffron-500" />
                            <span>{req.city}</span>
                          </div>

                          {req.assignedPandit && (
                            <div className="text-[10px] text-emerald-400 font-medium pt-1 border-t border-gold-600/15">
                              Pandit: {req.assignedPandit}
                            </div>
                          )}
                        </div>
                      ))}
                      {stageReqs.length === 0 && (
                        <div className="text-[11px] text-parchment-300 italic text-center pt-8">
                          No requests in this stage
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: PANDITS */}
        {activeTab === 'pandits' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERIFIED_PANDITS.map((p) => (
              <div key={p.id} className="bg-mahogany-900 rounded-xl p-6 border border-gold-600/30 space-y-4">
                <div className="flex items-center gap-3">
                  <img src={p.image} alt={p.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold-500" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-parchment-50">{p.name}</h3>
                    <div className="text-xs text-gold-400">{p.title}</div>
                  </div>
                </div>

                <div className="text-xs space-y-1 text-parchment-300 border-y border-gold-600/20 py-3">
                  <div><strong>Lineage:</strong> {p.lineage}</div>
                  <div><strong>Languages:</strong> {p.languages.join(', ')}</div>
                  <div><strong>Experience:</strong> {p.experienceYears} Years</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase">Verification Checks:</div>
                  {p.verifiedChecks.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-parchment-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: TRAVEL & HOTEL */}
        {activeTab === 'travel' && (
          <div className="bg-mahogany-900 p-6 rounded-xl border border-gold-600/30 space-y-4">
            <h3 className="font-serif text-xl font-bold text-parchment-50">Gaya Ji Travel & Hotel Operations</h3>
            <div className="space-y-3">
              {requests.map(r => (
                <div key={r.id} className="p-4 rounded-lg bg-mahogany-950 border border-gold-600/20 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-mono text-gold-400 font-bold">{r.id}</span> - <strong>{r.customerName}</strong> ({r.city})
                    <div className="text-parchment-400 mt-0.5">Assistance Requirements: {r.assistanceOptions.join(', ')}</div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded bg-gold-950 text-gold-400 border border-gold-600/30">
                      {r.hotelAssigned || 'Pickup / Hotel pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REQUEST DETAIL MODAL */}
        {selectedRequest && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-mahogany-900 border border-gold-600/50 rounded-2xl max-w-2xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-start justify-between border-b border-gold-600/30 pb-4">
                <div>
                  <span className="font-mono text-gold-400 font-bold text-sm">{selectedRequest.id}</span>
                  <h2 className="font-serif text-2xl font-bold text-parchment-50">{selectedRequest.customerName}</h2>
                  <div className="text-xs text-parchment-400">{selectedRequest.city} • Mobile: {selectedRequest.mobile}</div>
                </div>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="text-parchment-400 hover:text-white text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-parchment-400 mb-1">Update Status Stage:</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as any)}
                    className="w-full p-2.5 rounded bg-mahogany-950 border border-gold-600/40 text-parchment-100"
                  >
                    {KANBAN_STAGES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-parchment-400 mb-1">Assign Teerth Pandit:</label>
                  <select
                    value={editPandit}
                    onChange={(e) => setEditPandit(e.target.value)}
                    className="w-full p-2.5 rounded bg-mahogany-950 border border-gold-600/40 text-parchment-100"
                  >
                    <option value="">-- Select Verified Pandit --</option>
                    {VERIFIED_PANDITS.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-parchment-400 mb-1">Hotel / Transport Note:</label>
                  <input
                    type="text"
                    value={editHotel}
                    onChange={(e) => setEditHotel(e.target.value)}
                    placeholder="e.g. Hotel Vishnupad Heritage Room 204 reserved, Station pickup 7:00 AM"
                    className="w-full p-2.5 rounded bg-mahogany-950 border border-gold-600/40 text-parchment-100 text-xs"
                  />
                </div>
              </div>

              <div className="p-4 rounded bg-mahogany-950 text-xs space-y-2">
                <div><strong>Selected Ritual:</strong> {selectedRequest.sewaTitle}</div>
                <div><strong>Preferred Visit Date:</strong> {selectedRequest.preferredDate}</div>
                <div><strong>Gotra:</strong> {selectedRequest.gotra || 'Not specified'}</div>
                <div><strong>Assistance Opted:</strong> {selectedRequest.assistanceOptions.join(', ')}</div>
                {selectedRequest.notes && <div><strong>User Note:</strong> {selectedRequest.notes}</div>}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gold-600/30">
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="px-4 py-2 rounded bg-mahogany-950 text-parchment-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveDetail}
                  className="px-6 py-2 rounded bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs"
                >
                  SAVE & UPDATE REQUEST
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
