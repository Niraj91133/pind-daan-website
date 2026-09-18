'use client';

import React from 'react';
import { ClipboardList, PhoneCall, UserCheck, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useDraggableScroll } from '@/lib/hooks/useDraggableScroll';

export default function HowItWorks() {
  const { t, lang } = useLanguage();
  const scrollRef = useDraggableScroll();

  const STEPS = [
    {
      step: '01',
      title: lang === 'hi' ? 'सेवा अनुरोध (Request)' : lang === 'en' ? 'Sewa Request' : 'সেবা অনুরোধ',
      desc: lang === 'hi' ? 'वेबसाइट पर अपनी आवश्यकता, तिथि एवं परिवार की जानकारी भेजें।' : lang === 'en' ? 'Submit your dates, family details & ritual purpose online.' : 'ওয়েবসাইটে আপনার প্রয়োজন, তারিখ ও পরিবারের তথ্য পাঠান।',
      icon: ClipboardList
    },
    {
      step: '02',
      title: lang === 'hi' ? 'व्यक्तिगत मार्गदर्शन' : lang === 'en' ? 'Personal Guidance' : 'ব্যক্তিগত নির্দেশিকা',
      desc: lang === 'hi' ? 'हमारे समन्वयक आपसे फोन/व्हाट्सएप पर बात करके विधि तय करेंगे।' : lang === 'en' ? 'Our coordinator contacts you via Call/WhatsApp to finalize vidhi.' : 'আমাদের সমন্বয়ক আপনার সাথে কথা বলে বিধি চূড়ান্ত করবেন।',
      icon: PhoneCall
    },
    {
      step: '03',
      title: lang === 'hi' ? 'पुरोहित एवं यात्रा पुष्टि' : lang === 'en' ? 'Purohit & Yatra Update' : 'পুরোহিত ও ভ্রমণ নিশ্চিতকরণ',
      desc: lang === 'hi' ? 'प्रमाणित तीर्थ पुरोहित, आवास एवं पिकअप की पुष्टि प्राप्त होगी।' : lang === 'en' ? 'Confirmed Pandit assignment, clean hotel & pickup details.' : 'প্রমাণিত তীর্থ পুরোহিত, হোটেল ও পিকআপের নিশ্চিতকরণ পাবেন।',
      icon: UserCheck
    },
    {
      step: '04',
      title: lang === 'hi' ? 'गया जी पिंडदान' : lang === 'en' ? 'Gaya Ji Pind Daan' : 'গয়া জী পিণ্ডদান',
      desc: lang === 'hi' ? 'गया जी पहुंचकर पवित्रता के साथ तीर्थ पुरोहित से पिंडदान संपन्न कराएं।' : lang === 'en' ? 'Perform authentic Vedic Pind Daan with complete peace of mind.' : 'গয়া জীতে পৌঁছে পবিত্রতার সাথে পুরোহিতের মাধ্যমে পিণ্ডদান সম্পন্ন করুন।',
      icon: MapPin
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            {t('how_tag')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('how_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            {t('how_sub')}
          </p>
        </div>

        {/* Smooth Draggable & Swipeable Card Deck */}
        <div 
          ref={scrollRef}
          className="draggable-scroll-container flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar"
        >
          {STEPS.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <div
                key={idx}
                className="w-[78vw] max-w-[280px] lg:w-auto lg:max-w-none flex-shrink-0 snap-center bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-2xl font-black text-slate-300">
                      {s.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 text-amber-700 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{lang === 'hi' ? `चरण ${s.step} पुष्टि` : lang === 'bn' ? `ধাপ ${s.step} নিশ্চিত` : `Step ${s.step} Verified`}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
