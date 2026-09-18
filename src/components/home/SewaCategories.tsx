'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ALL_SEWAS, SEWA_CATEGORIES } from '@/lib/data/sewaData';
import { ArrowRight, Clock, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useDraggableScroll } from '@/lib/hooks/useDraggableScroll';

export default function SewaCategories() {
  const [activeTab, setActiveTab] = useState<string>('ancestral');
  const { t, lang } = useLanguage();
  const scrollRef = useDraggableScroll();

  const filteredSewas = ALL_SEWAS.filter((s) => s.category === activeTab);

  return (
    <section className="py-14 md:py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/50">
              {t('sewa_tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('sewa_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
              {t('sewa_sub')}
            </p>
          </div>

          <Link
            href="/sewa"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 tracking-wide group"
          >
            <span>{t('sewa_view_all')}</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {SEWA_CATEGORIES.map((cat) => {
            const catLabel = lang === 'hi' 
              ? (cat.id === 'ancestral' ? 'पिंडदान सेवा' : cat.id === 'pandit' ? 'तीर्थ पुरोहित' : cat.id === 'yatra' ? 'यात्रा एवं आवास' : 'पारिवारिक सेवा')
              : lang === 'en'
              ? (cat.id === 'ancestral' ? 'Pind Daan' : cat.id === 'pandit' ? 'Teerth Purohit' : cat.id === 'yatra' ? 'Travel & Stay' : 'Family Care')
              : (cat.id === 'ancestral' ? 'পিণ্ডদান সেবা' : cat.id === 'pandit' ? 'তীর্থ পুরোহিত' : cat.id === 'yatra' ? 'ভ্রমণ ও আবাসন' : 'পারিবারিক সেবা');
            
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-card scale-100 ring-2 ring-slate-900/10'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/90 shadow-subtle'
                }`}
              >
                {catLabel}
              </button>
            );
          })}
        </div>

        {/* Smooth Draggable & Swipeable Card Deck */}
        <div 
          ref={scrollRef}
          className="draggable-scroll-container flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar"
        >
          {filteredSewas.map((sewa) => {
            const cardTitle = lang === 'hi' && sewa.title_hi ? sewa.title_hi : lang === 'bn' && sewa.title_bn ? sewa.title_bn : lang === 'en' && sewa.title_en ? sewa.title_en : sewa.title;
            const cardSubtitle = lang === 'hi' && sewa.subtitle_hi ? sewa.subtitle_hi : lang === 'bn' && sewa.subtitle_bn ? sewa.subtitle_bn : lang === 'en' && sewa.subtitle_en ? sewa.subtitle_en : sewa.subtitle;
            const arrangedList = lang === 'hi' && sewa.whatWeArrange_hi ? sewa.whatWeArrange_hi : lang === 'bn' && sewa.whatWeArrange_bn ? sewa.whatWeArrange_bn : lang === 'en' && sewa.whatWeArrange_en ? sewa.whatWeArrange_en : sewa.whatWeArrange;
            const durationLabel = lang === 'hi' && sewa.duration_hi ? sewa.duration_hi : lang === 'bn' && sewa.duration_bn ? sewa.duration_bn : lang === 'en' && sewa.duration_en ? sewa.duration_en : sewa.duration;
            const locationLabel = lang === 'hi' && sewa.location_hi ? sewa.location_hi : lang === 'bn' && sewa.location_bn ? sewa.location_bn : lang === 'en' && sewa.location_en ? sewa.location_en : sewa.location;

            return (
              <div
                key={sewa.id}
                className="w-[88vw] max-w-[380px] md:w-auto md:max-w-none flex-shrink-0 snap-center bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={sewa.image || '/images/pitru_paksha_falgu.jpg'}
                      alt={cardTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 border border-white/10 shadow-sm">
                        {activeTab === 'ancestral' ? (lang === 'hi' ? 'पितृ सेवा' : lang === 'en' ? 'Vedic Ritual' : 'পিতৃ সেবা') :
                         activeTab === 'pandit' ? (lang === 'hi' ? 'पुरोहित सेवा' : lang === 'en' ? 'Purohit' : 'পুরোহিত') :
                         activeTab === 'yatra' ? (lang === 'hi' ? 'यात्रा सेवा' : lang === 'en' ? 'Travel & Stay' : 'ভ্রমণ ও সেবা') :
                         (lang === 'hi' ? 'परिवार सेवा' : lang === 'en' ? 'Family Care' : 'পরিবার সেবা')}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-white font-medium bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span>{durationLabel}</span>
                      </div>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center gap-1.5 text-xs text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="truncate">{locationLabel}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-7">
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {cardTitle}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                      {cardSubtitle}
                    </p>

                    {/* Arrangement Points */}
                    <div className="space-y-2 py-4 border-t border-slate-100 bg-slate-50/50 -mx-5 px-5 sm:-mx-7 sm:px-7 rounded-2xl">
                      <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                        {t('sewa_arrange_label')}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {arrangedList.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 sm:p-7 pt-0 flex items-center justify-between gap-3 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">
                    {t('sewa_guidance_label')}
                  </span>

                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/sewa/${sewa.slug}`}
                      className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors active:scale-95"
                    >
                      {t('sewa_details_btn')}
                    </Link>

                    <Link
                      href={`/sewa-request?sewa=${sewa.id}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-amber-600 via-amber-700 to-saffron-600 hover:opacity-95 shadow-sm transition-all active:scale-95"
                    >
                      <span>{t('sewa_start_btn')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
