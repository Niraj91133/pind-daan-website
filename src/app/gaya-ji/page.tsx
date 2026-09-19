'use client';

import React from 'react';
import Link from 'next/link';
import { SACRED_PLACES, VEDI_45_LIST, TRAVEL_INFO } from '@/lib/data/gayaJiData';
import { MapPin, Train, Home, Shield, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function GayaJiGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Pawan Teerth Kshetra
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Gaya Ji Pilgrimage Guide
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal">
            Bhagwan Vishnu ke charan paduka, Falgu nadi, Akshayavat tree evam sacred 54 Vediyon ka purna guide.
          </p>
        </div>

        {/* Sacred Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SACRED_PLACES.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-float transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-60 relative bg-slate-900">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover filter brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 text-white">
                    <span className="text-xs text-amber-400 font-bold block">{place.hindiName}</span>
                    <h3 className="text-2xl font-bold">{place.name}</h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full inline-block">
                    {place.significance}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {place.description}
                  </p>

                  <div className="pt-3.5 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div><strong>Ritual Performed:</strong> {place.ritualType}</div>
                    <div><strong>Timings:</strong> {place.timing}</div>
                    <div><strong>Location:</strong> {place.locationDetails}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/gaya-ji/${place.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  <span>Purna Vidhi & History Dekhein</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 54 Vedis List */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-card">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Sacred Vedis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Gaya Ji Ki 54 Mukhya Vediyan
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Purna 3-day Gaya Shradh mein shamil 54 pavitra vediyan:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {VEDI_45_LIST.map((v, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-amber-500/50 hover:text-white transition-colors">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Travel Information */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-subtle space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Gaya Ji Kaise Pahunchhein & Kahan Rukna Hai?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <Train className="w-4 h-4 text-amber-600" />
                <span>By Train</span>
              </div>
              <p className="text-slate-500 leading-relaxed font-normal">
                {TRAVEL_INFO.byTrain}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>By Airport</span>
              </div>
              <p className="text-slate-500 leading-relaxed font-normal">
                {TRAVEL_INFO.byAir}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                <Home className="w-4 h-4 text-amber-600" />
                <span>Hotel Assistance</span>
              </div>
              <p className="text-slate-500 leading-relaxed font-normal">
                {TRAVEL_INFO.hotelStay}
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/sewa-request?step=travel"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-saffron-600 hover:opacity-95 text-white font-bold text-xs tracking-wider shadow-sm transition-opacity"
            >
              <span>TRAVEL & HOTEL ASSISTANCE LEIN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
