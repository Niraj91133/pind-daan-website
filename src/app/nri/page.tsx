'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function NRISewaPage() {
  const [comingToGaya, setComingToGaya] = useState<string>('yes');

  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Hero */}
        <div className="bg-parchment-200/80 p-8 rounded-2xl border border-gold-600/40 shadow-paper space-y-4">
          <div className="flex items-center gap-2 text-saffron-700 font-serif font-bold text-xs uppercase tracking-widest">
            <Globe className="w-4 h-4" />
            <span>Global Pilgrimage Desk</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-mahogany-900">
            Gaya Ji Sewa From Abroad
          </h1>
          <p className="text-sm text-terracotta-700 leading-relaxed max-w-2xl">
            USA, UK, Canada, UAE, Singapore evam bidesh mein rehne wale Sanatani parivaaron ke liye personal Sewa coordination.
          </p>
        </div>

        {/* Question: Are you coming to Gaya Ji? */}
        <div className="bg-parchment-50 p-8 rounded-2xl border border-gold-600/30 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-mahogany-900">
            Aap Gaya Ji Aa Rahe Hain?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 text-xs">
            <button
              onClick={() => setComingToGaya('yes')}
              className={`flex-1 p-5 rounded-xl border text-left space-y-2 transition-all ${
                comingToGaya === 'yes'
                  ? 'bg-mahogany-900 text-parchment-50 border-gold-500 shadow-md'
                  : 'bg-parchment-100 text-mahogany-900 border-gold-600/20'
              }`}
            >
              <div className="font-serif font-bold text-base">Haan, Main India / Gaya Ji Aa Raha Hoon</div>
              <div className="text-[11px] text-parchment-300">
                Direct Airport pickup, hotel stay, aur Gaya Ji arrival timing ke anusar Teerth Pandit assignment.
              </div>
            </button>

            <button
              onClick={() => setComingToGaya('no')}
              className={`flex-1 p-5 rounded-xl border text-left space-y-2 transition-all ${
                comingToGaya === 'no'
                  ? 'bg-mahogany-900 text-parchment-50 border-gold-500 shadow-md'
                  : 'bg-parchment-100 text-mahogany-900 border-gold-600/20'
              }`}
            >
              <div className="font-serif font-bold text-base">Nahi, India Me Family Ke Liye Arrange Karna Hai</div>
              <div className="text-[11px] text-parchment-300">
                India mein reh rahe parents / relatives ke liye complete local transport, stay aur vidhi coordination.
              </div>
            </button>
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            NRI Sewa Request Bhejein
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            International WhatsApp / Phone consultation ke liye submit karein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/sewa-request?type=nri"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider"
            >
              <span>SEWA REQUEST BHEJEIN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919199342604"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-emerald-700 text-white font-bold text-xs"
            >
              <span>WhatsApp International Desk</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
