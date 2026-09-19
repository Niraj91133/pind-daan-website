'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SAHAYATA_FAQS } from '@/lib/data/sahayataData';
import { Search, ChevronDown, Phone, MessageSquare, HelpCircle, Sparkles } from 'lucide-react';

export default function SahayataCenterPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = SAHAYATA_FAQS.filter(
    f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
         f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
         f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Sahayata Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Aapki Sahayata Ke Liye
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Sewa process, Pandit verification, Gaya Ji travel, stay aur family assistance se jude sabbhi uttar.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search any question, vidhi, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-subtle"
          />
        </div>

        {/* FAQs List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-subtle transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-amber-700 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider block mb-0.5">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Phone / WhatsApp Contact Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 text-center space-y-4 shadow-card">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Sawaal Abhi Bhi Baki Hai?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto font-normal">
            Gaya Ji digital desk team se direct phone ya WhatsApp par sampark karein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="tel:+919199342604"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-saffron-600 hover:opacity-95 text-white font-bold text-xs tracking-wide shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 91993 42604</span>
            </a>

            <a
              href="https://wa.me/919199342604"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs tracking-wide shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
