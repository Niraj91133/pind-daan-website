'use client';

import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Train, Home, Car, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function YatraAssistancePage() {
  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest">
            Pilgrimage Logistics
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-mahogany-900">
            Yatra & Senior Sahayata
          </h1>
          <p className="text-sm text-terracotta-700">
            Gaya Junction / Airport pickup, clean family stay assistance near Vishnupad, evam senior citizen personal care.
          </p>
        </div>

        {/* Senior Assistance Spotlight */}
        <div className="p-8 rounded-2xl bg-parchment-200/80 border border-gold-600/40 shadow-paper space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-saffron-600 text-white flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest block">
                Dedicated Care
              </span>
              <h2 className="font-serif text-2xl font-bold text-mahogany-900">
                Senior Citizen Yatra Sahayata
              </h2>
            </div>
          </div>

          <p className="text-xs text-terracotta-700 leading-relaxed">
            Aging parents aur buzurgon ke liye Gaya Ji aana kathin na ho, iske liye humari team vishesh sahayata pradan karti hai:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-parchment-100 border border-gold-600/30 space-y-1">
              <div className="font-bold text-mahogany-900">Station / Airport Direct Pickup</div>
              <div className="text-terracotta-700">Gaya Junction ya Patna Airport se direct vehicle coordination.</div>
            </div>
            <div className="p-4 rounded-xl bg-parchment-100 border border-gold-600/30 space-y-1">
              <div className="font-bold text-mahogany-900">Reduced Walking Locations</div>
              <div className="text-terracotta-700">Vishnupad temple ke samip vehicle drop evam seating arrangement.</div>
            </div>
            <div className="p-4 rounded-xl bg-parchment-100 border border-gold-600/30 space-y-1">
              <div className="font-bold text-mahogany-900">Comfortable Hotel Near Temple</div>
              <div className="text-terracotta-700">Minimum steps aur lift suvidha wale hotel stay assistance.</div>
            </div>
            <div className="p-4 rounded-xl bg-parchment-100 border border-gold-600/30 space-y-1">
              <div className="font-bold text-mahogany-900">Personal Local Coordinator</div>
              <div className="text-terracotta-700">Yatra ke dauran family ko continuous support dene wala coordinator.</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            Senior Assistance / Yatra Support Request
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            Gaya Ji aane ki tithi aur travel needs submit karein. Coordinator team aapse discussion karke stay aur vehicle confirm karegi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/sewa-request?step=travel"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider"
            >
              <span>REQUEST YATRA ASSISTANCE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30"
            >
              <Phone className="w-4 h-4 text-saffron-600" />
              <span>Call Yatra Desk</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
