'use client';

import React from 'react';
import Link from 'next/link';
import { ALL_SEWAS } from '@/lib/data/sewaData';
import { HelpCircle, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export default function TripindiSewaPage() {
  const sewa = ALL_SEWAS.find(s => s.id === 'tripindi-shradh') || ALL_SEWAS[2];

  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="bg-parchment-200/80 p-8 rounded-2xl border border-gold-600/40 shadow-paper space-y-4">
          <span className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest block">
            Vishesh Vidhi Guidance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-mahogany-900">
            {sewa.title}
          </h1>
          <p className="text-sm text-terracotta-700 leading-relaxed max-w-2xl">
            {sewa.subtitle}
          </p>
        </div>

        {/* 3 Main Questions */}
        <div className="space-y-6">
          
          {/* Q1: Ye kya hai? */}
          <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-2">
            <h2 className="font-serif text-xl font-bold text-mahogany-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-saffron-600" />
              <span>01. Tripindi Shradh Kya Hai?</span>
            </h2>
            <p className="text-xs text-terracotta-700 leading-relaxed">
              Tripindi Shradh Brahma, Vishnu aur Mahesh ke prateek teen kalashon par pitron ke teen peedhiyon ke pret-baadha aur aatma shanti ke liye shastriya pujan hai.
            </p>
          </div>

          {/* Q2: Kis situation mein log iske liye Pandit se salah lete hain? */}
          <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-2">
            <h2 className="font-serif text-xl font-bold text-mahogany-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-saffron-600" />
              <span>02. Log Kis Situation Mein Pandit Se Salah Lete Hain?</span>
            </h2>
            <p className="text-xs text-terracotta-700 leading-relaxed">
              Jab karya mein baar-baar rukawat, ghar mein aakaashmat pareshaniyan ya traditional Kundali / Pitru Dosh ki salah kisi vidwan Pandit dwara di gayi ho, tab log Tripindi vidhi ke liye Gaya Ji aate hain.
            </p>
          </div>

          {/* Q3: Iski vidhi kaise hoti hai? */}
          <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-2">
            <h2 className="font-serif text-xl font-bold text-mahogany-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-saffron-600" />
              <span>03. Iski Vidhi Kaise Hoti Hai?</span>
            </h2>
            <p className="text-xs text-terracotta-700 leading-relaxed">
              Gaya Ji ke sacred ghat par Shastri Pandit ji dwara Kalash sthapana, Mantrochcharan, Pind Arpan aur Havan dwara 1 din mein yeh vidhi purna hoti hai.
            </p>
          </div>

        </div>

        {/* Action CTA */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            Pandit Se Salah Lein
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            Website swatantra roop se kisi bhi parivaar ko &quot;Dosh&quot; declare nahi karti. Pehle Shastri Pandit ji se baat karke salah lein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919876543210"
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
