'use client';

import React from 'react';
import Link from 'next/link';
import { ALL_SEWAS } from '@/lib/data/sewaData';
import { CheckCircle2, Clock, MapPin, ArrowRight, Phone } from 'lucide-react';

export default function ThreeDaySewaPage() {
  const sewa = ALL_SEWAS.find(s => s.id === '3-day-pind-daan') || ALL_SEWAS[1];

  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Hero */}
        <div className="bg-parchment-200/80 p-8 rounded-2xl border border-gold-600/40 shadow-paper space-y-4">
          <span className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest block">
            Ancestral Sewa
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-mahogany-900">
            {sewa.title}
          </h1>
          <p className="text-sm text-terracotta-700 leading-relaxed max-w-2xl">
            {sewa.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-semibold text-mahogany-900">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-saffron-600" />
              <span>{sewa.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-saffron-600" />
              <span>{sewa.location}</span>
            </div>
          </div>
        </div>

        {/* Why this Sewa */}
        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-mahogany-900">
            3 Din Ki Purna Gaya Ji Sewa Kyun?
          </h2>
          <p className="text-sm text-terracotta-700 leading-relaxed bg-parchment-200/40 p-5 rounded-xl border border-gold-600/20">
            {sewa.whyThisSewa}
          </p>
        </div>

        {/* 3 Day Schedule */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-mahogany-900">
            3 Din Ka Anukram (Day-wise Sequence)
          </h2>

          <div className="space-y-4">
            {sewa.timeline.map((t, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-parchment-50 border border-gold-600/30 space-y-2">
                <div className="inline-block px-3 py-1 rounded bg-mahogany-900 text-gold-400 font-serif font-bold text-xs">
                  {t.step}
                </div>
                <h3 className="font-serif font-bold text-lg text-mahogany-900">
                  {t.title}
                </h3>
                <p className="text-xs text-terracotta-700 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            3-Day Purna Sewa Shuru Karein
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            Hotel stay, vehicle pickup evam 3 din ke Teerth Pandit assignment ke liye request bhejein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/sewa-request?sewa=${sewa.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider"
            >
              <span>SEWA REQUEST BHEJEIN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919199342604"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30"
            >
              <Phone className="w-4 h-4 text-saffron-600" />
              <span>Pandit Se Baath Karein</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
