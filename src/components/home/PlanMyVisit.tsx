'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Train, Home, Luggage, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useDraggableScroll } from '@/lib/hooks/useDraggableScroll';

export default function PlanMyVisit() {
  const { lang } = useLanguage();
  const scrollRef = useDraggableScroll();

  const PLAN_STEPS = [
    {
      title: lang === 'hi' ? 'कब आना है?' : lang === 'en' ? 'When to visit?' : 'কখন আসবেন?',
      desc: lang === 'hi' ? 'पितृ पक्ष, चैत्र/कार्तिक नवरात्रि या वर्ष की किसी भी शुभ तिथि पर गया जी आने की योजना बनाएं।' : lang === 'en' ? 'Plan your pilgrimage during Pitru Paksha, Navratri or any auspicious family tithi.' : 'পিতৃপক্ষ, নবরাত্রি বা বছরের যেকোনো শুভ তিথিতে গয়া জী আসার পরিকল্পনা করুন।',
      icon: Calendar
    },
    {
      title: lang === 'hi' ? 'कैसे आना है?' : lang === 'en' ? 'How to reach?' : 'কীভাবে আসবেন?',
      desc: lang === 'hi' ? 'गया जंक्शन (GAYA) सीधे कनेक्टेड है। पटना एयरपोर्ट से डायरेक्ट कैब पिकअप सहायता उपलब्ध है।' : lang === 'en' ? 'Gaya Junction (GAYA) is directly connected. Direct cab pickup from Patna Airport (PAT).' : 'গয়া জংশন সরাসরি সংযুক্ত। পাটনা বিমানবন্দর থেকে ক্যাব পিকআপ সুবিধা রয়েছে।',
      icon: Train
    },
    {
      title: lang === 'hi' ? 'कहाँ रुकना है?' : lang === 'en' ? 'Where to stay?' : 'কোথায় থাকবেন?',
      desc: lang === 'hi' ? 'विष्णुपद मंदिर के 10 मिनट पैदल दूरी पर स्वच्छ पारिवारिक होटल एवं धर्मशाला सहायता।' : lang === 'en' ? 'Clean family hotels and dharamshalas within 10 min walking distance from Vishnupad.' : 'বিষ্ণুপাদ মন্দিরের ১০ মিনিটের দূরত্বে পরিষ্কার পারিবারিক হোটেল ও ধর্মশালা।',
      icon: Home
    },
    {
      title: lang === 'hi' ? 'क्या साथ लाना है?' : lang === 'en' ? 'What to bring?' : 'কী সাথে আনবেন?',
      desc: lang === 'hi' ? 'पवित्र पारंपरिक धोती/वस्त्र, पूर्वजों के नाम/गोत्र विवरण एवं व्यक्तिगत आवश्यक सामग्री।' : lang === 'en' ? 'Traditional clothes (dhoti/kurta), ancestor names & Gotra details.' : 'ঐতিহ্যবাহী ধুতি/পোশাক, পূর্বপুরুষের নাম/গোত্র বিবরণ ও ব্যক্তিগত প্রয়োজনীয় জিনিস।',
      icon: Luggage
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            {lang === 'hi' ? 'यात्रा तैयारी' : lang === 'en' ? 'Pilgrimage Preparation' : 'ভ্রমণ প্রস্তুতি'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'गया जी आने की तैयारी' : lang === 'en' ? 'Plan Your Gaya Ji Visit' : 'গয়া জী আসার প্রস্তুতি'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            {lang === 'hi' ? 'गया जी यात्रा को सरल, शुद्ध एवं निश्चिंत बनाने के 4 मुख्य चरण।' : lang === 'en' ? '4 essential steps to make your Gaya Ji pilgrimage smooth and peaceful.' : 'গয়া জী ভ্রমণ সহজ, শুদ্ধ ও নিশ্চিন্ত করার ৪টি প্রধান পদক্ষেপ।'}
          </p>
        </div>

        {/* Smooth Draggable & Swipeable Card Deck */}
        <div 
          ref={scrollRef}
          className="draggable-scroll-container flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar mb-8 sm:mb-10"
        >
          {PLAN_STEPS.map((step, i) => {
            const IconComp = step.icon;
            return (
              <div
                key={i}
                className="w-[78vw] max-w-[280px] lg:w-auto lg:max-w-none flex-shrink-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-card transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-2xl bg-slate-100 text-amber-700 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/sewa-request?step=travel"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-saffron-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm tracking-wide shadow-card hover:shadow-glow transition-all"
          >
            <span>{lang === 'hi' ? 'सेवा के साथ यात्रा प्लान करें' : lang === 'en' ? 'Plan Visit with Sewa' : 'সেবার সাথে ভ্রমণ পরিকল্পনা করুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
