'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function BottomCtaBanner() {
  const { lang } = useLanguage();

  const getContent = () => {
    switch (lang) {
      case 'bn':
        return {
          badge: 'গয়া জী পিণ্ডদান সেবা ডেস্ক',
          title: 'আপনার সেবা। পূর্বপুরুষদের চরণে অর্পণ।',
          subtitle: 'শাস্ত্রীয় ঐতিহ্যকে শুদ্ধ রাখুন। আমাদের সমন্বয়কারী দল আপনার সাথে কথা বলে প্রতিটি প্রয়োজনীয় আচার ও তীর্থযাত্রাকে সহজ ও সুগম করে তুলবে।',
          startBtn: 'সেবা শুরু করুন',
          callBtn: '+91 98765 43210',
          waBtn: 'হোয়াটসঅ্যাপ কোঅর্ডিনেটর'
        };
      case 'en':
        return {
          badge: 'Gaya Ji Pind Daan Sewa Desk',
          title: 'Your Dedicated Pilgrimage Sewa.',
          subtitle: 'Pure Vedic traditions, transparent guidance, and dedicated family care. Our coordination desk makes every sacred ritual effortless.',
          startBtn: 'START SEWA REQUEST',
          callBtn: '+91 98765 43210',
          waBtn: 'WhatsApp Coordinator'
        };
      default:
        return {
          badge: 'गया जी पिंडदान सेवा डेस्क',
          title: 'आपकी सेवा। आपके पितरों के नाम।',
          subtitle: 'परंपरा को शुद्ध और पवित्र रखें। हमारी समन्वयक टीम आपसे बात करके हर जरूरी विधि एवं यात्रा को सहज और सुगम बनाएगी।',
          startBtn: 'सेवा शुरू करें',
          callBtn: '+91 98765 43210',
          waBtn: 'व्हाट्सएप समन्वयक'
        };
    }
  };

  const content = getContent();

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{content.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {content.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            href="/sewa-request"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-saffron-600 hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-card hover:shadow-glow transition-all active:scale-[0.98]"
          >
            <span>{content.startBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 transition-all active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-amber-500" />
            <span>{content.callBtn}</span>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 font-semibold text-sm transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>{content.waBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
