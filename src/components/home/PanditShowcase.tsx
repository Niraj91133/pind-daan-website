'use client';

import React from 'react';
import Link from 'next/link';
import { VERIFIED_PANDITS } from '@/lib/data/panditsData';
import { ShieldCheck, Phone, ChevronRight, Award, Languages, Star } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useDraggableScroll } from '@/lib/hooks/useDraggableScroll';

export default function PanditShowcase() {
  const { t, lang } = useLanguage();
  const scrollRef = useDraggableScroll();

  return (
    <section className="py-14 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              {t('pandit_tag')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('pandit_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t('pandit_sub')}
            </p>
          </div>

          <Link
            href="/pandit"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 tracking-wide group"
          >
            <span>{t('pandit_view_all')}</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Smooth Draggable & Swipeable Card Deck */}
        <div 
          ref={scrollRef}
          className="draggable-scroll-container flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar"
        >
          {VERIFIED_PANDITS.map((p) => (
            <div
              key={p.id}
              className="w-[82vw] max-w-[320px] md:w-auto md:max-w-none flex-shrink-0 snap-center bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-subtle hover:shadow-float transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-center filter brightness-[0.92] hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Verified Badge */}
                  <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-200 border border-emerald-500/40 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'hi' ? 'प्रमाणित पुरोहित' : lang === 'en' ? 'Verified Purohit' : 'প্রমাণিত পুরোহিত'}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 text-amber-400 border border-amber-500/30 text-[10px] font-bold backdrop-blur-md">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{p.experienceYears}+ {lang === 'hi' ? 'वर्ष परंपरा' : lang === 'en' ? 'Yrs Lineage' : 'বছর পরম্পরা'}</span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight">
                      {p.name}
                    </h3>
                    <div className="text-xs text-amber-300 font-medium mt-0.5">
                      {p.title}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-800">
                    <Award className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span className="font-semibold">{p.lineage}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Languages className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{lang === 'hi' ? 'भाषा' : lang === 'en' ? 'Languages' : 'ভাষা'}: {p.languages.join(', ')}</span>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 pt-2 border-t border-slate-100 leading-relaxed">
                    {p.about}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3">
                <Link
                  href={`/pandit/${p.id}`}
                  className="flex-1 text-center py-2.5 px-3 rounded-full text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {t('pandit_profile_btn')}
                </Link>
                <a
                  href="tel:+919199342604"
                  className="flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-saffron-600 hover:opacity-95 shadow-sm transition-opacity"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t('pandit_talk_btn')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
