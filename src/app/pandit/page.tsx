'use client';

import React from 'react';
import Link from 'next/link';
import { VERIFIED_PANDITS } from '@/lib/data/panditsData';
import { ShieldCheck, Phone, Award, Languages, CheckCircle2, Star, Sparkles } from 'lucide-react';

export default function PanditDirectoryPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Traditional Authority
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Gaya Ji Ke Teerth Purohit
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Gayawal Brahmin Parampara aur shastron ke gyata verified Teerth Pandits se sampark evam sankalp.
          </p>
        </div>

        {/* Pandit Verification Process Card */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-subtle space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg">
            <ShieldCheck className="w-6 h-6" />
            <h2>Teerth Purohit Verification Process</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl">
            Humari website par &quot;Verified Teerth Purohit&quot; badge shastriya evam operational checks ke baad diya jata hai:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {[
              'Identity & Credentials Verified',
              'Gayawal Lineage Information Reviewed',
              'Gaya Ji Vidhi Association Checked',
              'Family Feedback & Audit Approved'
            ].map((check, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-xs font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pandit Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_PANDITS.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-float transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 bg-slate-900 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-center filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-200 border border-emerald-500/40 text-[10px] font-bold uppercase backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Purohit</span>
                  </div>

                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 text-amber-400 border border-amber-500/30 text-[10px] font-bold backdrop-blur-md">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{p.experienceYears}+ Yrs Parampara</span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold leading-tight">
                      {p.name}
                    </h3>
                    <div className="text-xs text-amber-300 font-medium">
                      {p.title}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3.5">
                  <div className="flex items-center gap-2 text-xs text-slate-800">
                    <Award className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span className="font-semibold">{p.lineage}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Languages className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>Bhasha: {p.languages.join(', ')}</span>
                  </div>

                  <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 leading-relaxed font-normal">
                    {p.about}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <Link
                  href={`/pandit/${p.id}`}
                  className="flex-1 text-center py-2.5 px-4 rounded-full text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Profile Dekhein
                </Link>
                <a
                  href="tel:+919199342604"
                  className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-saffron-600 hover:opacity-95 shadow-sm transition-opacity"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Baat Karein</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
