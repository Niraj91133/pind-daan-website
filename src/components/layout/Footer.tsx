'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Sparkles, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  const getFooterContent = () => {
    switch (lang) {
      case 'bn':
        return {
          brandDesc: 'গয়া জী পিণ্ডদান ও শ্রাদ্ধ কর্মের নির্ভরযোগ্য ডিজিটাল সেবা ডেস্ক। অনুমোদিত তীর্থ পুরোহিত, শাস্ত্রীয় বিধি ও স্বচ্ছ তীর্থযাত্রা সহায়তা।',
          tagline: 'আপনার সেবা। পূর্বপুরুষদের চরণে অর্পণ।',
          waDesk: 'হোয়াটসঅ্যাপ ডেস্ক',
          instaDesk: 'ইনস্টাগ্রাম',
          col1Title: 'সেবা নির্দেশিকা',
          col2Title: 'গয়া জী ও পুরোহিত',
          col3Title: 'সহায়তা ও তথ্য',
          rights: 'পিণ্ড দান সেবা। সর্বস্বত্ব সংরক্ষিত।',
          privacy: 'গোপনীয়তা নীতি',
          terms: 'সেবার শর্তাবলী',
          rules: 'শাস্ত্রীয় নির্দেশিকা',
          trackStatus: 'অনুরোধ স্থিতি ট্র্যাক করুন'
        };
      case 'en':
        return {
          brandDesc: 'Gaya Ji Pind Daan with verified Teerth Purohits, authentic Vedic rituals, transparent coordination, and dedicated family assistance.',
          tagline: 'Dedicated Pilgrimage Desk. Honouring Sacred Lineages.',
          waDesk: 'WhatsApp Desk',
          instaDesk: 'Instagram',
          col1Title: 'Sewa Directory',
          col2Title: 'Gaya Ji & Purohits',
          col3Title: 'Help & Knowledge',
          rights: 'Pind Daan Sewa. All rights reserved.',
          privacy: 'Privacy Policy',
          terms: 'Terms of Sewa',
          rules: 'Ritual Guidelines',
          trackStatus: 'Track Request Status'
        };
      default:
        return {
          brandDesc: 'सत्यापित तीर्थ पुरोहित, शुद्ध शास्त्रीय वैदिक विधि, पारदर्शी व्यवस्था एवं परिवार यात्रा सहयोग — सब कुछ एक ही सहज डेस्क पर।',
          tagline: 'आपकी सेवा। आपके पितरों के नाम।',
          waDesk: 'व्हाट्सएप डेस्क',
          instaDesk: 'इंस्टाग्राम',
          col1Title: 'सेवा निर्देशिका',
          col2Title: 'गया जी व पुरोहित',
          col3Title: 'सहायता व जानकारी',
          rights: 'पिंड दान सेवा। सर्वाधिकार सुरक्षित।',
          privacy: 'गोपनीयता नीति',
          terms: 'सेवा की शर्तें',
          rules: 'शास्त्रीय नियम',
          trackStatus: 'सेवा स्थिति ट्रैक करें'
        };
    }
  };

  const content = getFooterContent();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle glowing ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-saffron-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-card">
                ॐ
              </div>
              <span className="font-sans text-xl font-extrabold tracking-tight text-white">
                Pind Daan Sewa
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              {content.brandDesc}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>&quot;{content.tagline}&quot;</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="tel:+919199342604"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+91 91993 42604</span>
              </a>
              <a
                href="https://wa.me/919199342604"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-950/80 border border-emerald-800/80 hover:bg-emerald-900 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>{content.waDesk}</span>
              </a>
              <a
                href="https://www.instagram.com/pinddaansewa?stkn=MTU5ZGRrZGEyaDIzMQ=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-pink-950/60 border border-pink-800/60 hover:bg-pink-900/80 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@pinddaansewa</span>
              </a>
            </div>
          </div>

          {/* Column 1: Sewa */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {content.col1Title}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link href="/sewa/1-day" className="hover:text-amber-400 transition-colors">{t('sewa_1day')}</Link></li>
              <li><Link href="/sewa/3-day" className="hover:text-amber-400 transition-colors">{t('sewa_3day')}</Link></li>
              <li><Link href="/sewa/tripindi" className="hover:text-amber-400 transition-colors">{t('sewa_tripindi')}</Link></li>
              <li><Link href="/sewa/narayan-bali" className="hover:text-amber-400 transition-colors">{t('sewa_narayan')}</Link></li>
              <li><Link href="/not-sure" className="hover:text-amber-400 transition-colors">{t('not_sure')}</Link></li>
              <li><Link href="/parivaar" className="hover:text-amber-400 transition-colors">{t('parivaar_sewa')}</Link></li>
            </ul>
          </div>

          {/* Column 2: Gaya Ji & Pandits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {content.col2Title}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link href="/pandit" className="hover:text-amber-400 transition-colors">{t('nav_pandits')}</Link></li>
              <li><Link href="/gaya-ji/vishnupad" className="hover:text-amber-400 transition-colors">Vishnupad Temple</Link></li>
              <li><Link href="/gaya-ji/falgu" className="hover:text-amber-400 transition-colors">Falgu River & Devghat</Link></li>
              <li><Link href="/gaya-ji/akshayavat" className="hover:text-amber-400 transition-colors">Akshayavat Vriksha</Link></li>
              <li><Link href="/gaya-ji/pretshila" className="hover:text-amber-400 transition-colors">Pretshila Hill</Link></li>
              <li><Link href="/yatra" className="hover:text-amber-400 transition-colors">{t('nav_yatra')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Sahayata & Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {content.col3Title}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link href="/sahayata" className="hover:text-amber-400 transition-colors">{t('nav_sahayata')}</Link></li>
              <li><Link href="/jankari" className="hover:text-amber-400 transition-colors">Jankari & Vidhi Rules</Link></li>
              <li><Link href="/sewa-status" className="text-amber-400 font-semibold hover:underline">{content.trackStatus}</Link></li>
              <li><Link href="/admin" className="text-slate-400 hover:text-white transition-colors">Coordinator Console</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {content.rights}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">{content.privacy}</span>
            <span className="hover:text-slate-300 cursor-pointer">{content.terms}</span>
            <span className="hover:text-slate-300 cursor-pointer">{content.rules}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
