'use client';

import React from 'react';
import Link from 'next/link';
import { ALL_SEWAS, SEWA_CATEGORIES } from '@/lib/data/sewaData';
import { ArrowRight, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function SewaDirectoryPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Need → Sewa → Journey
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sewa Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Commercial package names ki jagah traditional Pind Daan, Pandit consultation, Yatra aur Parivaar Sewa options.
          </p>
        </div>

        {/* Directory Categories */}
        <div className="space-y-12">
          {SEWA_CATEGORIES.map((cat) => {
            const categorySewas = ALL_SEWAS.filter(s => s.category === cat.id);
            return (
              <div key={cat.id} className="space-y-6">
                <div className="pb-3 border-b border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {cat.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySewas.map((sewa) => (
                    <div
                      key={sewa.id}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-subtle hover:shadow-float transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                            {sewa.categoryLabel}
                          </span>
                          <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
                            {sewa.duration}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                          {sewa.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
                          {sewa.subtitle}
                        </p>

                        <div className="space-y-2 py-3 border-t border-slate-100">
                          <div className="text-[11px] font-bold text-slate-900 uppercase">Aapke liye arrange hoga:</div>
                          {sewa.whatWeArrange.slice(0, 3).map((w, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{w}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 flex items-center justify-between border-t border-slate-100">
                        <span className="text-xs text-slate-500 font-medium">
                          Personal Coordinator Guidance
                        </span>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/sewa/${sewa.slug}`}
                            className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                          >
                            Details
                          </Link>
                          <Link
                            href={`/sewa-request?sewa=${sewa.id}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-saffron-600 hover:opacity-95 shadow-sm transition-opacity"
                          >
                            <span>Sewa Shuru</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
