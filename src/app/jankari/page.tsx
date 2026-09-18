'use client';

import React from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/lib/data/jankariData';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

export default function JankariDirectoryPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Sanatan Knowledge Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Jankari & Vidhi Center
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Gaya Ji, Pind Daan, Pitru Paksha aur Shastriya Vidhiyon ka pramanik evam authentic gyan.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.slug}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-float transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {art.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 font-normal">
                  {art.shortAnswer}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/jankari/${art.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 group"
                >
                  <span>Purna Lekh Padhein</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
