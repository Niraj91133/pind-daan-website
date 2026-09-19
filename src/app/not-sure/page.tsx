'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Check, ArrowRight, HelpCircle, UserCheck, Sparkles } from 'lucide-react';

export default function NotSurePage() {
  const [intent, setIntent] = useState<string>('Pind Daan');
  const [firstTime, setFirstTime] = useState<string>('Yes');
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Human Guidance Assistance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mujhe Pata Nahi Kaunsi Sewa Chahiye
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Ghabraie nahi! Sanatan parampara aur vidhi ko samjhane ke liye verified Teerth Pandit aur Coordinator aapse baat karenge.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-card space-y-6">
            
            {/* Question 1 */}
            <div className="space-y-3">
              <label className="block font-bold text-sm text-slate-900">
                1. Aap kis liye Gaya Ji aana chahte hain?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  'Pind Daan',
                  'Shradh',
                  'Kisi Vishesh Vidhi',
                  'Family ke liye',
                  'Sirf Jankari Chahiye',
                  'Pata Nahi'
                ].map((opt, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setIntent(opt)}
                    className={`p-3 rounded-2xl border text-left font-medium transition-all ${
                      intent === opt
                        ? 'bg-slate-900 text-white border-slate-900 font-bold shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="block font-bold text-sm text-slate-900">
                2. Kya aap pehli baar Gaya Ji aa rahe hain?
              </label>
              <div className="flex gap-3 text-xs font-medium">
                {['Yes', 'No'].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setFirstTime(opt)}
                    className={`flex-1 p-3.5 rounded-2xl border text-center transition-all ${
                      firstTime === opt
                        ? 'bg-gradient-to-r from-amber-600 to-saffron-600 text-white font-bold border-transparent shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {opt === 'Yes' ? 'Haan, Pehli Baar' : 'Nahi, Pehle Aa Chuke Hain'}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Input */}
            <div className="space-y-3.5 pt-4 border-t border-slate-100">
              <label className="block font-bold text-sm text-slate-900">
                3. Pandit / Coordinator se direct phone guidance lein:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Aapka Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number *"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 to-saffron-600 hover:opacity-95 text-white font-bold text-xs tracking-wide shadow-card"
              >
                PANDIT / COORDINATOR SE BAAT KAREIN
              </button>
            </div>

          </form>
        ) : (
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <Check className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Humari Team Aapse Sampark Karegi
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Dhanyawaad <strong>{name}</strong>! Humare Teerth Pandit / Coordinator short time mein <strong>{mobile}</strong> par aapse baat karke aapke sabbhi sawaalon ka pramanik uttar denge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="tel:+919199342604"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-saffron-600 text-white font-bold text-xs shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Abhi Call Karein: +91 91993 42604</span>
              </a>

              <a
                href={`https://wa.me/919199342604?text=Namaste,%20my%20name%20is%20${name}.%20I%20need%20guidance%20regarding%20Gaya%20Ji%20Pind%20Daan.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Message Bhejein</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
