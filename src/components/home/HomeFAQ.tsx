'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SAHAYATA_FAQS } from '@/lib/data/sahayataData';
import { ChevronDown, HelpCircle, ChevronRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t, lang } = useLanguage();

  const criticalFaqs = SAHAYATA_FAQS.slice(0, 5);

  return (
    <section className="py-14 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            {t('faq_tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('faq_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
            {t('faq_sub')}
          </p>
        </div>

        <div className="space-y-3 mb-8 md:mb-10">
          {criticalFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const qText = lang === 'hi' ? faq.question_hi : lang === 'bn' ? faq.question_bn : faq.question_en;
            const aText = lang === 'hi' ? faq.answer_hi : lang === 'bn' ? faq.answer_bn : faq.answer_en;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-subtle transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-amber-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span>{qText}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {aText}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sahayata Link & Direct WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 gap-4 text-center sm:text-left">
          <div>
            <div className="font-bold text-sm text-slate-900">
              {t('faq_more_q')}
            </div>
            <div className="text-xs text-slate-500">
              {t('faq_more_sub')}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Link
              href="/sahayata"
              className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              {t('faq_all_btn')}
            </Link>
            <a
              href="https://wa.me/919199342604"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t('faq_wa_btn')}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
