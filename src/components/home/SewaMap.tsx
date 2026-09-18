'use client';

import React from 'react';
import { ArrowDown, Sparkles, Compass, Users, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function SewaMap() {
  const { lang, t } = useLanguage();

  const getSewaMapContent = () => {
    switch (lang) {
      case 'bn':
        return {
          badge: 'সেবা নির্দেশিকা',
          title: 'গয়া জী সেবা পরিকাঠামো',
          subtitle: 'শাস্ত্রীয় পিণ্ডদান এবং তীর্থযাত্রার একটি স্বচ্ছ ও সুশৃঙ্খল ব্যবস্থা।',
          deskTitle: 'গয়া জী ডিজিটাল সেবা ডেস্ক',
          branch1: {
            title: 'পিণ্ডদান বিধি ও সংকল্প',
            step1: 'শাস্ত্রীয় সংকল্প ও পুরোহিত মন্ত্রোচ্চারণ',
            step2: 'পূজা সামগ্রী ও উপযুক্ত ঘাট আসন'
          },
          branch2: {
            title: 'তীর্থ পুরোহিত পরিবার',
            step1: 'গয়াবল ব্রাহ্মণ ঐতিহ্য ও বংশধারা',
            step2: 'সরাসরি পরামর্শ ও বিধি সহায়তা'
          },
          branch3: {
            title: 'পারিবারিক যাত্রা সহায়তা',
            step1: 'স্টেশন / বিমানবন্দর পিকআপ ও গাইড',
            step2: 'হোটেল ও প্রবীণ নাগরিক সার্বিক সেবা'
          }
        };
      case 'en':
        return {
          badge: 'Ecosystem Architecture',
          title: 'Gaya Ji Sewa Framework',
          subtitle: 'A seamless bridge connecting your family with authentic Vedic rituals and lineage Purohits.',
          deskTitle: 'GAYA JI PILGRIMAGE DESK',
          branch1: {
            title: 'Pind Daan Rituals',
            step1: 'Vedic Sankalp & Sacred Mantras',
            step2: 'Pure Puja Samagri & Ghat Seating'
          },
          branch2: {
            title: 'Teerth Purohit Desk',
            step1: 'Gayawal Brahmin Parampara',
            step2: 'Direct Lineage & Expert Consultation'
          },
          branch3: {
            title: 'Yatra & Family Care',
            step1: 'Station / Airport Pickup & Escort',
            step2: 'Hotel & Senior Citizen Assistance'
          }
        };
      default:
        return {
          badge: 'सेवा व्यवस्था',
          title: 'गया जी सेवा इकोसिस्टम',
          subtitle: 'आपकी पारिवारिक परंपरा और शास्त्रीय विधि को जोड़ने वाला सरल व पारदर्शी माध्यम।',
          deskTitle: 'गया जी तीर्थ सेवा डेस्क',
          branch1: {
            title: 'पिंडदान व संकल्प विधि',
            step1: 'शास्त्रीय संकल्प एवं वैदिक मंत्र',
            step2: 'शुद्ध पूजन सामग्री व घाट व्यवस्था'
          },
          branch2: {
            title: 'तीर्थ पुरोहित परंपरा',
            step1: 'गयावाल ब्राह्मण वंश परंपरा',
            step2: 'सीधा संपर्क एवं शास्त्र सम्मत मार्गदर्शन'
          },
          branch3: {
            title: 'यात्रा व परिवार सहयोग',
            step1: 'स्टेशन/एयरपोर्ट पिकअप सुविधा',
            step2: 'होटल आवास व वरिष्ठ नागरिक सहायता'
          }
        };
    }
  };

  const content = getSewaMapContent();

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            {content.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {content.title}
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-normal">
            {content.subtitle}
          </p>
        </div>

        {/* Visual Clean Map Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle relative">
          
          {/* Top Node */}
          <div className="flex justify-center mb-8">
            <div className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm sm:text-base shadow-card flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{content.deskTitle}</span>
            </div>
          </div>

          <div className="hidden md:flex justify-center mb-6">
            <div className="w-2/3 border-t border-dashed border-slate-300 relative">
              <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-amber-500" />
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500" />
              <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-amber-500" />
            </div>
          </div>

          {/* 3 Main Branches */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Branch 1 */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
                <Compass className="w-5 h-5" />
              </div>
              <div className="font-bold text-sm text-slate-900">
                {content.branch1.title}
              </div>
              <ArrowDown className="w-3.5 h-3.5 mx-auto text-slate-400" />
              <div className="text-xs font-semibold text-slate-800 py-1.5 bg-slate-100 rounded-lg">
                {content.branch1.step1}
              </div>
              <ArrowDown className="w-3.5 h-3.5 mx-auto text-slate-400" />
              <div className="text-xs text-slate-500 py-1.5 bg-slate-50 rounded-lg">
                {content.branch1.step2}
              </div>
            </div>

            {/* Branch 2 */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-bold text-sm text-slate-900">
                {content.branch2.title}
              </div>
              <ArrowDown className="w-3.5 h-3.5 mx-auto text-slate-400" />
              <div className="text-xs font-semibold text-slate-800 py-1.5 bg-slate-100 rounded-lg">
                {content.branch2.step1}
              </div>
              <ArrowDown className="w-3.5 h-3.5 mx-auto text-slate-400" />
              <div className="text-xs text-slate-500 py-1.5 bg-slate-50 rounded-lg">
                {content.branch2.step2}
              </div>
            </div>

            {/* Branch 3 */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200 text-center shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="font-bold text-sm text-slate-900">
                {content.branch3.title}
              </div>
              <ArrowDown className="w-3.5 h-3.5 mx-auto text-slate-400" />
              <div className="text-xs font-semibold text-slate-800 py-1.5 bg-slate-100 rounded-lg">
                {content.branch3.step1}
              </div>
              <ArrowDown className="w-3.5 h-3.5 mx-auto text-slate-400" />
              <div className="text-xs text-slate-500 py-1.5 bg-slate-50 rounded-lg">
                {content.branch3.step2}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
