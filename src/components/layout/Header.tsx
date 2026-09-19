'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ArrowRight, 
  Compass, 
  BookOpen, 
  MapPin, 
  Users, 
  HelpCircle,
  ChevronRight,
  Globe,
  Instagram
} from 'lucide-react';
import { useLanguage, Language } from '@/lib/context/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const NAV_ITEMS = [
    { 
      href: '/sewa', 
      label: t('nav_sewa'), 
      icon: Compass,
      desc: lang === 'hi' ? '1-दिन, 3-दिन, त्रिपिंडी एवं नारायण बलि' : lang === 'en' ? '1-Day, 3-Day, Tripindi & Narayan Bali' : '১-দিন, ৩-দিন, ত্রিপিন্ডী ও নারায়ণ বলি'
    },
    { 
      href: '/jankari', 
      label: t('nav_jankari'), 
      icon: BookOpen,
      desc: lang === 'hi' ? 'पिंडदान एवं श्राद्ध शास्त्रोक्त विधि' : lang === 'en' ? 'Pind Daan & Shradh Vedic Rules' : 'পিণ্ডদান ও শ্রাদ্ধ শাস্ত্রীয় বিধি'
    },
    { 
      href: '/gaya-ji', 
      label: t('nav_gayaji'), 
      icon: MapPin,
      desc: lang === 'hi' ? 'विष्णुपद, फल्गु एवं 45 पवित्र वेदियां' : lang === 'en' ? 'Vishnupad, Falgu & 45 Sacred Vedis' : 'বিষ্ণুপাদ, ফল্গু ও ৪৫ পবিত্র বেদি'
    },
    { 
      href: '/pandit', 
      label: t('nav_pandit'), 
      icon: Users,
      desc: lang === 'hi' ? 'प्रमाणित गयावाल तीर्थ पुरोहित' : lang === 'en' ? 'Verified Gayawal Teerth Purohits' : 'প্রমাণিত গয়াবাল তীর্থ পুরোহিত'
    },
    { 
      href: '/sahayata', 
      label: t('nav_sahayata'), 
      icon: HelpCircle,
      desc: lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल एवं सहायता' : lang === 'en' ? 'FAQs & Pilgrimage Assistance' : 'সাধারণ জিজ্ঞাসা ও ভ্রমণ সহায়তা'
    },
  ];

  // Track scroll position for dynamic glass elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm py-2.5' 
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Logo Mark (Verified badge removed as requested) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-saffron-700 flex items-center justify-center text-white shadow-subtle group-hover:scale-105 transition-transform flex-shrink-0">
              <span className="font-serif font-bold text-xl sm:text-2xl">ॐ</span>
            </div>
            <div>
              <span className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors block leading-tight">
                Pind Daan Sewa
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block">
                {t('brand_subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Clean Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60 shadow-subtle">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-normal transition-all ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200/70'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Stack: Apple-style Segmented Language Switcher + Call + CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Apple-style Segmented Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner">
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'hi' 
                    ? 'bg-white text-amber-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिंदी
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'en' 
                    ? 'bg-white text-amber-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'bn' 
                    ? 'bg-white text-amber-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                বাংলা
              </button>
            </div>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+919199342604"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-subtle transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{t('talk_to_pundit')}</span>
            </a>

            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/pinddaansewa?stkn=MTU5ZGRrZGEyaDIzMQ=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @pinddaansewa"
              className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 flex items-center justify-center border border-pink-200 shadow-subtle transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Primary Action CTA */}
            <Link
              href="/sewa-request"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-amber-600 to-saffron-600 hover:from-amber-600 hover:to-saffron-700 shadow-card hover:shadow-glow transition-all hover:scale-105"
            >
              <span>{t('start_sewa')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Header Action Stack */}
          <div className="flex items-center gap-2 sm:hidden">
            
            {/* Quick Language Toggle Pill on Mobile */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                  lang === 'hi' ? 'bg-white text-amber-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                हिं
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                  lang === 'en' ? 'bg-white text-amber-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                  lang === 'bn' ? 'bg-white text-amber-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                বাং
              </button>
            </div>

            {/* Quick Call Icon Button */}
            <a
              href="tel:+919199342604"
              aria-label="Call Helpline"
              className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 shadow-subtle flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 focus:outline-none flex-shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Full Screen Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[58px] z-50 bg-slate-950/60 backdrop-blur-md sm:hidden animate-fadeIn">
          <div className="bg-white h-full max-w-sm w-full ml-auto shadow-2xl p-5 overflow-y-auto flex flex-col justify-between border-l border-slate-100">
            
            <div className="space-y-4">
              
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="text-sm font-extrabold text-slate-900">
                    Pind Daan Sewa
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t('brand_subtitle')}
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-slate-100 text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Segmented Language Switcher */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Select Language / भाषा चुनें
                </div>
                <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => setLang('hi')}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      lang === 'hi' 
                        ? 'bg-white text-amber-900 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    हिंदी
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      lang === 'en' 
                        ? 'bg-white text-amber-900 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('bn')}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      lang === 'bn' 
                        ? 'bg-white text-amber-900 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    বাংলা
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1.5 pt-2">
                {NAV_ITEMS.map((item) => {
                  const IconComp = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                        isActive 
                          ? 'bg-amber-50 text-amber-900 border border-amber-200' 
                          : 'hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </div>

            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:+919199342604"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Helpline: +91 91993 42604</span>
              </a>

              <a
                href="https://wa.me/919199342604"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Coordinator</span>
              </a>

              <a
                href="https://www.instagram.com/pinddaansewa?stkn=MTU5ZGRrZGEyaDIzMQ=="
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 transition-opacity shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram (@pinddaansewa)</span>
              </a>

              <Link
                href="/sewa-request"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-amber-600 to-saffron-600 shadow-card"
              >
                <span>{t('start_sewa')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
