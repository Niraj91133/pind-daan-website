'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, BookOpen, Users, Navigation, Home, HeartHandshake, ArrowRight, HelpCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useDraggableScroll } from '@/lib/hooks/useDraggableScroll';

export default function IntentDesk() {
  const { t, lang } = useLanguage();
  const scrollRef = useDraggableScroll();

  const INTENT_TILES = [
    {
      id: 'pind-daan',
      title: lang === 'hi' ? 'पिंडदान सेवा' : lang === 'en' ? 'Pind Daan Sewa' : 'পিণ্ডদান সেবা',
      desc: lang === 'hi' ? 'गया जी में 1-दिन, 3-दिन या संपूर्ण 45-वेदी पिंडदान एवं श्राद्ध विधि।' : lang === 'en' ? '1-Day, 3-Day or complete 45-Vedi Pind Daan rituals in Gaya Ji.' : 'গয়া জীতে ১-দিন, ৩-দিন বা সম্পূর্ণ ৪৫-বেদি পিণ্ডদান ও শ্রাদ্ধ বিধি।',
      icon: Compass,
      link: '/sewa/1-day',
      badge: lang === 'hi' ? 'मुख्य सेवा' : lang === 'en' ? 'Primary Sewa' : 'প্রধান সেবা',
    },
    {
      id: 'vidhi',
      title: lang === 'hi' ? 'विधि समझनी है' : lang === 'en' ? 'Need Vidhi Guidance' : 'বিধি বুঝতে চাই',
      desc: lang === 'hi' ? 'कौन सी विधि करनी है? श्राद्ध, त्रिपिंडी या नारायण बलि — पुरोहित सलाह।' : lang === 'en' ? 'Which ritual is needed? Shradh, Tripindi or Narayan Bali guidance.' : 'কোন বিধিটি করণীয়? শ্রাদ্ধ, ত্রিপিন্ডী নাকি নারায়ণ বলি পরামর্শ।',
      icon: BookOpen,
      link: '/not-sure',
      badge: lang === 'hi' ? 'मार्गदर्शन' : lang === 'en' ? 'Guidance' : 'নির্দেশিকা',
    },
    {
      id: 'pandit',
      title: lang === 'hi' ? 'तीर्थ पुरोहित चाहिए' : lang === 'en' ? 'Verified Teerth Pandit' : 'তীর্থ পুরোহিত চাই',
      desc: lang === 'hi' ? 'प्रमाणित गयावाल तीर्थ पुरोहित से सीधा संपर्क एवं संकल्प बुकिंग।' : lang === 'en' ? 'Direct contact and Sankalp booking with verified Gayawal Purohits.' : 'প্রমাণিত গয়াবাল তীর্থ পুরোহিতের সাথে সরাসরি যোগাযোগ ও সংকল্প।',
      icon: Users,
      link: '/pandit',
      badge: lang === 'hi' ? 'प्रमाणित' : lang === 'en' ? 'Verified' : 'প্রমাণিত',
    },
    {
      id: 'yatra',
      title: lang === 'hi' ? 'गया जी यात्रा एवं कैब' : lang === 'en' ? 'Travel & Cab Support' : 'গয়া জী ভ্রমণ ও ক্যাব',
      desc: lang === 'hi' ? 'ट्रेन / फ्लाइट समन्वय, पटना एयरपोर्ट पिकअप एवं स्थानीय वाहन सहायता।' : lang === 'en' ? 'Train / flight coordination, Patna airport pickup & local cab.' : 'ট্রেন / ফ্লাইট সমন্বয়, পাটনা এয়ারপোর্ট পিকআপ ও লোকাল ক্যাব।',
      icon: Navigation,
      link: '/yatra',
      badge: lang === 'hi' ? 'यात्रा' : lang === 'en' ? 'Travel' : 'ভ্রমণ',
    },
    {
      id: 'hotel-pickup',
      title: lang === 'hi' ? 'होटल एवं स्टे सहायता' : lang === 'en' ? 'Hotel & Stay Assistance' : 'হোটেল ও থাকার ব্যবস্থা',
      desc: lang === 'hi' ? 'विष्णुपद मंदिर के निकट स्वच्छ पारिवारिक होटल एवं धर्मशाला मार्गदर्शन।' : lang === 'en' ? 'Clean family hotels and dharamshalas near Vishnupad temple.' : 'বিষ্ণুপাদ মন্দিরের নিকটে পরিষ্কার পারিবারিক হোটেল ও ধর্মশালা।',
      icon: Home,
      link: '/yatra',
      badge: lang === 'hi' ? 'आवास' : lang === 'en' ? 'Stay' : 'আবাসন',
    },
    {
      id: 'family',
      title: lang === 'hi' ? 'परिवार एवं NRI केयर' : lang === 'en' ? 'Family & NRI Care' : 'পরিবার ও NRI সেবা',
      desc: lang === 'hi' ? 'अपने माता-पिता या बुजुर्गों के लिए घर बैठे संपूर्ण व्यवस्था कराएं।' : lang === 'en' ? 'Arrange complete rituals and comfortable stay for parents remotely.' : 'পিতামাতা বা পরিবারের জন্য দূর থেকেই সম্পূর্ণ পিণ্ডদান ব্যবস্থা করুন।',
      icon: HeartHandshake,
      link: '/parivaar',
      badge: lang === 'hi' ? 'देखभाल' : lang === 'en' ? 'Care' : 'যত্ন',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              {t('intent_tag')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('intent_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
              {t('intent_sub')}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
            <span>Drag or swipe cards horizontally</span>
          </div>
        </div>

        {/* Smooth Draggable & Swipeable Card Deck */}
        <div 
          ref={scrollRef}
          className="draggable-scroll-container flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
        >
          {INTENT_TILES.map((tile) => {
            const IconComponent = tile.icon;
            return (
              <Link
                key={tile.id}
                href={tile.link}
                className="w-[80vw] max-w-[300px] sm:w-auto sm:max-w-none flex-shrink-0 snap-center group relative bg-slate-50/70 hover:bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-subtle hover:shadow-float hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-amber-50 text-slate-700 group-hover:text-amber-600 flex items-center justify-center shadow-subtle transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800 border border-slate-200/60 transition-colors">
                      {tile.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {tile.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {tile.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-amber-700">
                  <span>{lang === 'hi' ? 'शुरू करें' : lang === 'en' ? 'Explore' : 'শুরু করুন'}</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Human-assisted fallback banner */}
        <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-card">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                {t('intent_not_sure_title')}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {t('intent_not_sure_sub')}
              </div>
            </div>
          </div>
          <Link
            href="/not-sure"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-white hover:bg-amber-50 text-slate-950 font-bold text-xs tracking-wide whitespace-nowrap transition-colors shadow-sm"
          >
            {t('intent_not_sure_btn')}
          </Link>
        </div>

      </div>
    </section>
  );
}
