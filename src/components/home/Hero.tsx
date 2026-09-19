'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

const PITRU_PAKSHA_SLIDES = [
  {
    id: 1,
    image: '/images/pitru_paksha_falgu.jpg',
    tag: {
      hi: 'फल्गु देवघाट • गया जी',
      en: 'Falgu Devghat • Gaya Ji',
      bn: 'ফল্গু দেবঘাট • গয়া জী'
    },
    title: {
      hi: 'गया जी पिंडदान एवं श्राद्ध सेवा',
      en: 'Gaya Ji Pind Daan & Shradh Sewa',
      bn: 'গয়া জী পিণ্ডদান ও শ্রাদ্ধ সেবা'
    },
    subtitle: {
      hi: 'पावन फल्गु तट एवं विष्णुपद पर 60+ वर्षों की परंपरा से जुड़े गयावाल तीर्थ पुरोहित द्वारा शास्त्रोक्त पिंडदान।',
      en: 'Authentic Vedic Pind Daan and ancestral Tarpan by 60+ years experienced Gayawal Teerth Purohits.',
      bn: 'পবিত্র ফল্গু তীর ও বিষ্ণুপাদে ৬০+ বছরের অভিজ্ঞ গয়াবাল তীর্থ পুরোহিত দ্বারা শাস্ত্রীয় পিণ্ডদান।'
    }
  },
  {
    id: 2,
    image: '/images/pitru_paksha_vishnupad.jpg',
    tag: {
      hi: 'श्री विष्णुपद चरणकमल • मोक्ष तीर्थ',
      en: 'Shri Vishnupad Footprints • Moksha Kshetra',
      bn: 'শ্রী বিষ্ণুপাদ চরণপদ্ম • মোক্ষ তীর্থ'
    },
    title: {
      hi: 'विष्णुपद के सान्निध्य में पितृ मुक्ति',
      en: 'Ancestral Liberation at Vishnupad',
      bn: 'বিষ্ণুপাদের সান্নিধ্যে পিতৃ মুক্তি'
    },
    subtitle: {
      hi: 'भगवान विष्णु के चरणारविंद पर पितरों की परम सद्गति हेतु प्रामाणिक गोत्र एवं कुल संकल्प।',
      en: 'Vedic Gotra Sankalp directly at the sacred footprints of Lord Vishnu for eternal peace.',
      bn: 'শ্রী বিষ্ণুপাদের পাদপদ্মে পূর্বপুরুষদের আত্মার সদগতির জন্য শাস্ত্রীয় বৈদিক সংকল্প।'
    }
  },
  {
    id: 3,
    image: '/images/pitru_paksha_akshayavat.jpg',
    tag: {
      hi: 'अक्षयवट एवं 45 पवित्र वेदियां',
      en: 'Akshayavat & 45 Sacred Vedis',
      bn: 'অক্ষয়বট ও ৪৫টি পবিত্র বেদি'
    },
    title: {
      hi: 'अक्षयवट के साक्षात आशीर्वाद से अक्षय तृप्ति',
      en: 'Eternal Ancestral Blessings at Akshayavat',
      bn: 'অক্ষয়বটের সান্নিধ্যে অক্ষয় তৃপ্তি'
    },
    subtitle: {
      hi: 'अक्षयवट एवं 45 वेदियों पर सहज, पारदर्शी एवं सम्पूर्ण पारिवारिक व्यवस्था के साथ पिंडदान।',
      en: 'Complete 45-Vedi Gaya Ji pilgrimage with personal guidance, clean stay & transparent care.',
      bn: 'অক্ষয়বট এবং ৪৫টি বেদিতে স্বচ্ছ ও পারিবারিক সুবিধার সাথে সম্পূর্ণ পিণ্ডদান।'
    }
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const { lang, t } = useLanguage();

  // Touch / Drag Swipe tracking
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % PITRU_PAKSHA_SLIDES.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + PITRU_PAKSHA_SLIDES.length) % PITRU_PAKSHA_SLIDES.length);
    setProgress(0);
  }, []);

  // Handle Swipe Gesture
  const handleSwipe = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped Left -> Next Slide
      nextSlide();
    } else if (diff < -50) {
      // Swiped Right -> Prev Slide
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    handleSwipe();
  };

  // Mouse Drag Handlers for Desktop swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    handleSwipe();
  };

  // Auto slide & Progress bar ticker
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 5500; // 5.5 seconds
    const updateFrequency = 50;
    const step = (updateFrequency / intervalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, updateFrequency);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const slide = PITRU_PAKSHA_SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full overflow-hidden bg-slate-950 text-white select-none cursor-grab active:cursor-grabbing touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        isDragging.current = false;
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Top Animated Gold Progress Line */}
      <div className="absolute top-0 left-0 right-0 z-40 h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-saffron-500 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Full-width Carousel Background Slides */}
      <div className="relative w-full h-[540px] sm:h-[600px] lg:h-[660px]">
        {PITRU_PAKSHA_SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* High-Resolution Pitru Paksha Ritual Image with subtle smooth motion */}
              <img
                src={item.image}
                alt={item.title[lang] || item.title['hi']}
                className={`w-full h-full object-cover object-center filter brightness-[0.82] pointer-events-none transform transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Seamless Dark Gradient Vignette for Maximum Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/65 to-slate-950/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/35 pointer-events-none" />
            </div>
          );
        })}

        {/* Focused, High-Conversion Content Overlay (UX Laws applied: Zero Clutter, Strong CTA Focus) */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl sm:max-w-3xl space-y-4 sm:space-y-6">
            
            {/* Simple Clean Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{slide.tag[lang] || slide.tag['hi']}</span>
            </div>

            {/* High-Impact Headline (Max 6-8 words) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-white leading-[1.14]">
              {slide.title[lang] || slide.title['hi']}
            </h1>

            {/* Concise 1-Line Subtitle */}
            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
              {slide.subtitle[lang] || slide.subtitle['hi']}
            </p>

            {/* High-Conversion Primary CTA + Call Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/sewa-request"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-saffron-600 hover:from-amber-600 hover:to-saffron-700 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-glow transition-all hover:scale-105"
              >
                <span>{t('hero_cta_start')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919199342604"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/25 backdrop-blur-md transition-all hover:border-white/40"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t('hero_cta_call')}</span>
              </a>
            </div>

            {/* Simple 3-Point Clean Minimalist Trust Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-3 text-xs font-medium text-slate-300 border-t border-white/15">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t('trust_60yrs')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t('trust_45vedis')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t('trust_family')}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Navigation Arrow Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all hover:scale-110 shadow-card"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all hover:scale-110 shadow-card"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Minimalist Bottom Slide Indicator Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
          {PITRU_PAKSHA_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(index);
                setProgress(0);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-7 h-2 bg-amber-400 shadow-glow'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
