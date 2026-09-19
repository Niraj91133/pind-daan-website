'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Compass, ClipboardList } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function MobileBottomBar() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/85 backdrop-blur-xl border-t border-slate-200/90 py-2 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-4 gap-2 text-center items-center max-w-md mx-auto">
        
        <Link
          href="/sewa"
          className="flex flex-col items-center justify-center py-1 rounded-2xl text-slate-700 hover:text-amber-600 transition-colors"
        >
          <Compass className="w-5 h-5 mb-0.5 text-slate-600" />
          <span className="text-[10px] font-bold">
            {lang === 'hi' ? 'सेवा' : lang === 'en' ? 'Sewa' : 'সেবা'}
          </span>
        </Link>

        <a
          href="tel:+919199342604"
          className="flex flex-col items-center justify-center py-1 rounded-2xl text-slate-700 hover:text-amber-600 transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5 text-amber-600" />
          <span className="text-[10px] font-bold">
            {lang === 'hi' ? 'कॉल' : lang === 'en' ? 'Call' : 'কল'}
          </span>
        </a>

        <a
          href="https://wa.me/919199342604"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-2xl text-slate-700 hover:text-emerald-600 transition-colors"
        >
          <MessageSquare className="w-5 h-5 mb-0.5 text-emerald-600" />
          <span className="text-[10px] font-bold">
            {lang === 'hi' ? 'व्हाट्सएप' : lang === 'en' ? 'WhatsApp' : 'হোয়াটসঅ্যাপ'}
          </span>
        </a>

        <Link
          href="/sewa-request"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-2xl bg-gradient-to-r from-amber-500 to-saffron-600 text-white shadow-sm hover:opacity-95"
        >
          <ClipboardList className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-extrabold">
            {lang === 'hi' ? 'शुरू करें' : lang === 'en' ? 'Start' : 'শুরু'}
          </span>
        </Link>

      </div>
    </div>
  );
}
