'use client';

import React from 'react';
import Link from 'next/link';
import { ALL_SEWAS } from '@/lib/data/sewaData';
import { HelpCircle, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export default function NarayanBaliSewaPage() {
  const sewa = ALL_SEWAS.find(s => s.id === 'narayan-bali') || ALL_SEWAS[3];

  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="bg-parchment-200/80 p-8 rounded-2xl border border-gold-600/40 shadow-paper space-y-4">
          <span className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest block">
            Shastriya Sacred Vidhi
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-mahogany-900">
            {sewa.title}
          </h1>
          <p className="text-sm text-terracotta-700 leading-relaxed max-w-2xl">
            {sewa.subtitle}
          </p>
        </div>

        {/* Informational Cards */}
        <div className="space-y-6">
          <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-2">
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              Shastriya Swaroop Evam Parampara
            </h2>
            <p className="text-xs text-terracotta-700 leading-relaxed">
              Narayan Bali Garuda Purana mein varnit atma shanti aur Sadgati prarthana ki vishesh pawan vidhi hai. Is vidhi mein Bhagwan Sriman Narayan ke tarpan aur pujan dwara pitru mukti ki kamna ki jati hai.
            </p>
          </div>

          <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-2">
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              Pandit Guidance & Assignment
            </h2>
            <p className="text-xs text-terracotta-700 leading-relaxed">
              Is vidhi ke liye vishesh gyan aur nishtha wale Senior Shastri Pandit ji dwara sankalp karwaya jata hai taaki vidhi purna shuddh evam pramanik rahe.
            </p>
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            Shastri Pandit Se Salah Lein
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            Aapki family requirements ke anusar timing aur date discuss karne ke liye humare coordinator se baat karein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919199342604"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>PANDIT SE SALAH LEIN</span>
            </a>

            <Link
              href={`/sewa-request?sewa=${sewa.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30"
            >
              <span>Sewa Request Bhejein</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
