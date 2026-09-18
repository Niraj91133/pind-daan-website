'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, Award, BookOpen, Star, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function AcharyaProfile() {
  const { lang, t } = useLanguage();

  const getProfileData = () => {
    switch (lang) {
      case 'bn':
        return {
          badge: 'প্রধান তীর্থ পুরোহিত ও আধ্যাত্মিক পথপ্রদর্শক',
          name: 'আচার্য [XYZ] শর্মা জী',
          title: 'প্রধান তীর্থ পুরোহিত, গয়া জী তীর্থ ক্ষেত্র',
          lineage: 'ঐতিহ্যবাহী গয়াবাল ব্রাহ্মণ বংশপরম্পরা • বিষ্ণুপাদ ধাম',
          tagline: 'শাস্ত্রীয় পিণ্ডদান, তর্পণ ও পিতৃমুক্তির বিশ্বস্ত ও অভিজ্ঞ মার্গদর্শন।',
          bioP1: 'গয়া জী ধামে পিতৃপুরুষদের পিণ্ডদান ও শ্রদ্ধাকর্ম এক অত্যন্ত পবিত্র বৈদিক আচার। বহুকাল ধরে আমাদের গয়াবাল পরিবার দেশ-বিদেশের অগণিত ভক্ত পরিবারকে শাস্ত্রসম্মত ও বিশুদ্ধ পিণ্ডদান বিধিতে সহায়তা করে আসছে।',
          bioP2: 'আমাদের প্রাচীন বংশানুক্রমিক খাতা (বই-খাতা) দ্বারা প্রতিটি পরিবারের কুল ও গোত্রের সাথে সঠিক মেলবন্ধন করে বিশুদ্ধ সংকল্প সম্পন্ন করা হয়। আপনার পরিবার যাতে সম্পূর্ণ শান্তিতে ও ভক্তিভরে এই সেবা সম্পন্ন করতে পারে, এটাই আমাদের অঙ্গীকার।',
          highlights: [
            'শাস্ত্রীয় বৈদিক মন্ত্র ও সংকল্প',
            'প্রাচীন বংশানুক্রমিক খাতা যাচাই',
            'সম্পূর্ণ ৪৫-বেদি ও তীর্থ জ্ঞান',
            'সরাসরি পুরোহিত পরামর্শ সেবা'
          ],
          callBtn: 'সরাসরি পরামর্শ করুন',
          waBtn: 'হোয়াটসঅ্যাপ মেসেজ',
          verifiedTag: 'অনুমোদিত তীর্থ পুরোহিত',
          experienceTag: 'বহু প্রজন্মের বংশপরম্পরা',
          note: '* আপনার বিস্তারিত তথ্য ও নাম পরবর্তীতে যুক্ত করার জন্য প্রস্তুত।'
        };
      case 'en':
        return {
          badge: 'Head Teerth Purohit & Spiritual Guide',
          name: 'Acharya [XYZ] Sharma Ji',
          title: 'Pradhan Teerth Purohit, Gaya Ji Sacred Pilgrimage',
          lineage: 'Traditional Gayawal Brahmin Lineage • Vishnupad Dham',
          tagline: 'Authentic Vedic guidance for Pind Daan, Shradh rituals, and ancestral peace.',
          bioP1: 'Performing Pind Daan in Gaya Ji is a sacred duty honoring our ancestors. For generations, our Gayawal family lineage has guided devout families from all across India and abroad in fulfilling their ancestral rituals with strict adherence to Vedic scriptures.',
          bioP2: 'With access to centuries-old genealogical ledgers (Bahi-Khata), we ensure accurate Gotra Sankalp and authentic Brahmin rituals across all sacred Vedis. We are committed to making your family pilgrimage peaceful, transparent, and spiritually fulfilling.',
          highlights: [
            'Strict Vedic Mantras & Sankalp',
            'Ancient Genealogical Ledger (Bahi-Khata)',
            'Complete 45-Vedi Sacred Knowledge',
            'Direct & Transparent Consultation'
          ],
          callBtn: 'Call for Guidance',
          waBtn: 'WhatsApp Desk',
          verifiedTag: 'Verified Teerth Purohit',
          experienceTag: 'Generational Lineage',
          note: '* Ready for your custom name and profile details.'
        };
      default:
        return {
          badge: 'प्रधान तीर्थ पुरोहित एवं आध्यात्मिक मार्गदर्शक',
          name: 'आचार्य [XYZ] शर्मा जी',
          title: 'प्रधान तीर्थ पुरोहित, गया जी तीर्थ धाम',
          lineage: 'परंपरागत गयावाल ब्राह्मण वंश परंपरा • विष्णुपद धाम',
          tagline: 'शास्त्रोक्त पिंडदान, तर्पण एवं पितृ मोक्ष के प्रामाणिक व समर्पित मार्गदर्शक।',
          bioP1: 'गया जी तीर्थ क्षेत्र में पितरों का पिंडदान एवं श्राद्ध कर्म एक परम पावन वैदिक विधान है। पीढ़ियों से हमारा गयावाल परिवार देश-विदेश से आने वाले श्रद्धालुओं को शुद्ध शास्त्रीय परंपरा के अनुसार विधिपूर्वक पिंडदान संपन्न कराने में समर्पित है।',
          bioP2: 'हमारे पास सदियों पुरानी पारंपरिक बही-खाता वंशावली उपलब्ध है, जिससे आपके कुल, गोत्र और पूर्वजों के नाम से शास्त्र सम्मत संकल्प सुनिश्चित होता है। आपका परिवार बिना किसी भ्रम या असुविधा के पूर्ण श्रद्धा से यह पावन कार्य कर सके, यही हमारा संकल्प है।',
          highlights: [
            'शुद्ध शास्त्रीय वैदिक मंत्र एवं संकल्प',
            'प्राचीन बही-खाता वंशावली मिलान',
            'समस्त 45-वेदी एवं तीर्थ स्थलों का ज्ञान',
            'निःशुल्क प्रारंभिक पुरोहित परामर्श'
          ],
          callBtn: 'सीधा परामर्श करें',
          waBtn: 'व्हाट्सएप संदेश भेजें',
          verifiedTag: 'प्रमाणित तीर्थ पुरोहित',
          experienceTag: 'पीढ़ियों पुरानी परंपरा',
          note: '* यह स्थान आपके नाम और विवरण के लिए तैयार है।'
        };
    }
  };

  const data = getProfileData();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Subtle decorative background circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-200/50">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{data.badge}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'तीर्थ पुरोहित परिचय एवं मार्गदर्शन' : lang === 'en' ? 'Teerth Purohit Guidance & Profile' : 'তীর্থ পুরোহিত পরিচিতি ও মার্গদর্শন'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-normal">
            {data.tagline}
          </p>
        </div>

        {/* Heroic Profile Bento Layout */}
        <div className="max-w-6xl mx-auto bg-gradient-to-b from-slate-50/90 to-white rounded-3xl border border-slate-200/90 shadow-subtle p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Portrait Photo & Badges */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-900 group">
                <Image
                  src="/images/acharya_profile.jpg"
                  alt={data.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[11px] font-bold shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{data.verifiedTag}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide mb-1">
                    <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                    <span>{data.experienceTag}</span>
                  </div>
                  <div className="font-serif font-bold text-base sm:text-lg">
                    {data.name}
                  </div>
                </div>
              </div>

              {/* Action Buttons Under Image on Mobile/Desktop */}
              <div className="w-full max-w-[360px] grid grid-cols-2 gap-3 mt-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-saffron-600 hover:opacity-95 text-white font-bold text-xs tracking-wide shadow-sm active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{data.callBtn}</span>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-900 hover:bg-emerald-800 text-emerald-100 font-bold text-xs tracking-wide border border-emerald-700 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{data.waBtn}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bio, Lineage, Credentials */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-100/70 text-amber-900 text-xs font-semibold mb-2">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>{data.lineage}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {data.name}
                </h3>
                
                <p className="text-sm font-semibold text-amber-700 mt-1">
                  {data.title}
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <p>{data.bioP1}</p>
                <p>{data.bioP2}</p>
              </div>

              {/* Highlights 2x2 Grid */}
              <div className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-subtle"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Consultation Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {lang === 'hi' ? 'गोत्र एवं विधि परामर्श' : lang === 'en' ? 'Gotra & Vidhi Consultation' : 'গোত্র ও বিধি পরামর্শ'}
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      {lang === 'hi' ? 'यात्रा से पूर्व निःशुल्क समय एवं तिथि मार्गदर्शन प्राप्त करें।' : lang === 'en' ? 'Receive auspicious date and timing guidance prior to arrival.' : 'আগমনের পূর্বে শুভ দিন ও সময় সংক্রান্ত পরামর্শ নিন।'}
                    </div>
                  </div>
                </div>

                <Link
                  href="/sewa-request?type=pandit-consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex-shrink-0 active:scale-95"
                >
                  <span>{lang === 'hi' ? 'परामर्श बुक करें' : lang === 'en' ? 'Book Consultation' : 'পরামর্শ বুক করুন'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Editable info note for user */}
              <div className="text-[11px] text-slate-400 italic">
                {data.note}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
