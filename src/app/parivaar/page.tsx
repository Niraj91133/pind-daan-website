'use client';

import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Phone, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export default function ParivaarSewaPage() {
  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Hero */}
        <div className="bg-parchment-200/80 p-8 rounded-2xl border border-gold-600/40 shadow-paper space-y-4">
          <span className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest block">
            Family Care Mode
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-mahogany-900">
            Ghar Se Sewa Arrange Karein
          </h1>
          <p className="text-sm text-terracotta-700 leading-relaxed max-w-2xl">
            Aap apne ghar baithe apne parents ya family members ke liye Gaya Ji Pind Daan, Pandit, stay aur local assistance arrange kar sakte hain.
          </p>
        </div>

        {/* Flow */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-mahogany-900">
            Parivaar Sewa Flow
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-xl bg-parchment-50 border border-gold-600/30 space-y-2">
              <div className="w-8 h-8 rounded-full bg-mahogany-900 text-gold-400 font-bold mx-auto flex items-center justify-center text-xs">1</div>
              <div className="font-serif font-bold text-sm text-mahogany-900">Aapki Need</div>
              <div className="text-[11px] text-terracotta-700">Ghar se request form fill karein</div>
            </div>

            <div className="p-5 rounded-xl bg-parchment-50 border border-gold-600/30 space-y-2">
              <div className="w-8 h-8 rounded-full bg-mahogany-900 text-gold-400 font-bold mx-auto flex items-center justify-center text-xs">2</div>
              <div className="font-serif font-bold text-sm text-mahogany-900">Coordinator Contact</div>
              <div className="text-[11px] text-terracotta-700">Team aapse sab discuss karegi</div>
            </div>

            <div className="p-5 rounded-xl bg-parchment-50 border border-gold-600/30 space-y-2">
              <div className="w-8 h-8 rounded-full bg-mahogany-900 text-gold-400 font-bold mx-auto flex items-center justify-center text-xs">3</div>
              <div className="font-serif font-bold text-sm text-mahogany-900">Pandit & Stay</div>
              <div className="text-[11px] text-terracotta-700">Verified Pandit & stay assigned</div>
            </div>

            <div className="p-5 rounded-xl bg-parchment-50 border border-gold-600/30 space-y-2">
              <div className="w-8 h-8 rounded-full bg-mahogany-900 text-gold-400 font-bold mx-auto flex items-center justify-center text-xs">4</div>
              <div className="font-serif font-bold text-sm text-mahogany-900">Family Visit</div>
              <div className="text-[11px] text-terracotta-700">Parents reach & comfortable vidhi</div>
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            Parivaar Ke Liye Sewa Shuru Karein
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            Apne parents ke liye Sewa details submit karein. Coordinator team full assistance degi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/sewa-request?type=parivaar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider"
            >
              <span>SEWA REQUEST BHEJEIN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
