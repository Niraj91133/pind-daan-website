'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SACRED_PLACES, VEDI_45_LIST } from '@/lib/data/gayaJiData';
import { MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useDraggableScroll } from '@/lib/hooks/useDraggableScroll';

export default function GayaJiPilgrimage() {
  const { t, lang } = useLanguage();
  const scrollRef = useDraggableScroll();

  return (
    <section className="py-14 md:py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/50">
              {t('gayaji_tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('gayaji_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
              {t('gayaji_sub')}
            </p>
          </div>

          <Link
            href="/gaya-ji"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 tracking-wide group"
          >
            <span>{t('gayaji_view_all')}</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Smooth Draggable & Swipeable Card Deck */}
        <div 
          ref={scrollRef}
          className="draggable-scroll-container flex lg:grid lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar mb-10"
        >
          {SACRED_PLACES.map((place) => {
            const placeName = lang === 'hi' ? place.name_hi : lang === 'bn' ? place.name_bn : place.name_en;
            const placeSignificance = lang === 'hi' ? place.significance_hi : lang === 'bn' ? place.significance_bn : place.significance_en;

            return (
              <Link
                key={place.id}
                href={`/gaya-ji/${place.slug}`}
                className="w-[80vw] max-w-[300px] lg:w-auto lg:max-w-none flex-shrink-0 snap-center group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-slate-900">
                    <Image
                      src={place.image}
                      alt={placeName}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm">
                      {placeName}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-1.5">
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {placeName}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {placeSignificance}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <div className="text-[11px] font-bold text-amber-700 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span>{lang === 'hi' ? 'विधि एवं समय' : lang === 'en' ? 'Rituals & Timings' : 'বিধি ও সময়'}</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 45 Vedis Directory Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'hi' ? 'पूर्ण गया जी परिक्रमा' : lang === 'en' ? 'Complete Gaya Pilgrimage' : 'সম্পূর্ণ গয়া পরিক্রমা'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t('gayaji_vedis_title')}
              </h3>
            </div>
            <Link
              href="/gaya-ji"
              className="px-5 py-2.5 rounded-full bg-white hover:bg-amber-50 text-slate-900 font-bold text-xs self-start md:self-auto transition-colors active:scale-95"
            >
              {t('gayaji_vedis_btn')}
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {VEDI_45_LIST.map((v, i) => (
              <span
                key={i}
                className="px-3 sm:px-3.5 py-1 rounded-full text-xs font-medium bg-slate-800/90 text-slate-300 border border-slate-700 hover:border-amber-500/50 hover:text-white transition-colors"
              >
                {v}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
