'use client';

import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Globe, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useDraggableScroll } from '@/lib/hooks/useDraggableScroll';

export default function SpecialModes() {
  const { lang } = useLanguage();
  const scrollRef = useDraggableScroll();

  const MODES = [
    {
      id: 'senior',
      tag: lang === 'hi' ? 'सीनियर सिटीजन मोड' : lang === 'en' ? 'Senior Citizen Mode' : 'সিনিয়র সিটিজেন মোড',
      title: lang === 'hi' ? 'वरिष्ठ नागरिक यात्रा सहायता' : lang === 'en' ? 'Senior Yatra Assistance' : 'প্রবীণ নাগরিক ভ্রমণ সহায়তা',
      desc: lang === 'hi' ? 'बुजुर्ग माता-पिता के लिए कम चलना, स्टेशन पिकअप, घाट पर बैठने की व्यवस्था एवं व्यक्तिगत समन्वयक सहायता।' : lang === 'en' ? 'Minimal walking, station pickup, comfortable ghat seating, and dedicated coordinator for elderly parents.' : 'বয়স্ক পিতামাতার জন্য কম হাঁটা, স্টেশন পিকআপ, ঘাটে বসার ব্যবস্থা ও ব্যক্তিগত সমন্বয়ক সহায়তা।',
      btn: lang === 'hi' ? 'सीनियर सहायता चाहिए' : lang === 'en' ? 'Senior Assistance' : 'সিনিয়র সহায়তা চাই',
      link: '/yatra',
      icon: HeartHandshake,
      badgeColor: 'amber'
    },
    {
      id: 'family',
      tag: lang === 'hi' ? 'पारिवारिक समन्वय' : lang === 'en' ? 'Family Coordination' : 'পারিবারিক সমন্বয়',
      title: lang === 'hi' ? 'परिवार के लिए घर बैठे सेवा' : lang === 'en' ? 'Remote Family Booking' : 'পরিবারের জন্য দূর থেকে সেবা',
      desc: lang === 'hi' ? 'आप अपने घर बैठे माता-पिता या परिजनों के लिए गया जी आने पर संपूर्ण कर्म, पुरोहित एवं होटल बुकिंग करा सकते हैं।' : lang === 'en' ? 'Book and manage complete rituals, verified Purohits, and verified hotel stays for your family remotely.' : 'আপনি ঘরে বসেই পিতামাতা বা পরিবারের জন্য সম্পূর্ণ কর্ম, পুরোহিত ও হোটেল বুকিং করাতে পারেন।',
      btn: lang === 'hi' ? 'घर से सेवा बुक करें' : lang === 'en' ? 'Book from Home' : 'বাড়ি থেকে সেবা বুক করুন',
      link: '/parivaar',
      icon: Shield,
      badgeColor: 'emerald'
    },
    {
      id: 'nri',
      tag: lang === 'hi' ? 'ग्लोबल पिलग्रिमेज डेस्क' : lang === 'en' ? 'Global Pilgrimage Desk' : 'গ্লোবাল পিলগ্রিমেজ ডেস্ক',
      title: lang === 'hi' ? 'विदेश से गया जी सेवा' : lang === 'en' ? 'Gaya Ji Sewa From Abroad' : 'বিদেশ থেকে গয়া জী সেবা',
      desc: lang === 'hi' ? 'NRI परिवार जो विदेश से आकर पिंडदान कराना चाहते हैं या भारत में अपने परिजनों के लिए समन्वय करना चाहते हैं।' : lang === 'en' ? 'Dedicated assistance for NRI families visiting India or coordinating rituals for India-based parents.' : 'NRI পরিবার যারা বিদেশ থেকে এসে পিণ্ডদান করতে চান বা ভারতের পরিবারের জন্য ব্যবস্থা করতে চান।',
      btn: lang === 'hi' ? 'NRI सेवा गाइड देखें' : lang === 'en' ? 'NRI Sewa Guide' : 'NRI সেবা গাইড দেখুন',
      link: '/nri',
      icon: Globe,
      badgeColor: 'blue'
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Smooth Draggable & Swipeable Card Deck */}
        <div 
          ref={scrollRef}
          className="draggable-scroll-container flex lg:grid lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar"
        >
          {MODES.map((mode) => {
            const IconComp = mode.icon;
            return (
              <div
                key={mode.id}
                className="w-[82vw] max-w-[330px] lg:w-auto lg:max-w-none flex-shrink-0 snap-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-subtle hover:shadow-float transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    mode.badgeColor === 'amber' ? 'bg-amber-50 text-amber-700' :
                    mode.badgeColor === 'emerald' ? 'bg-emerald-50 text-emerald-700' :
                    'bg-blue-50 text-blue-700'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className={`inline-block text-[11px] font-bold uppercase tracking-wider ${
                    mode.badgeColor === 'amber' ? 'text-amber-700' :
                    mode.badgeColor === 'emerald' ? 'text-emerald-700' :
                    'text-blue-700'
                  }`}>
                    {mode.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {mode.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {mode.desc}
                  </p>
                </div>
                <Link
                  href={mode.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 pt-4 border-t border-slate-100 group"
                >
                  <span>{mode.btn}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
