'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'hi' | 'en' | 'bn';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  hi: {
    // Header
    top_announcement: 'गया जी पावन तीर्थ सहायता डेस्क • 60+ वर्ष गयावाल तीर्थ पुरोहित परंपरा',
    helpline: 'हेल्पलाइन: +91 91993 42604',
    whatsapp_live: 'व्हाट्सएप लाइव डेस्क',
    brand_subtitle: 'पिंड दान सेवा • तीर्थ पुरोहित डिजिटल डेस्क',
    nav_sewa: 'सेवा सूची',
    nav_jankari: 'विधि एवं जानकारी',
    nav_gayaji: 'गया जी गाइड',
    nav_pandit: 'तीर्थ पुरोहित',
    nav_sahayata: 'सहायता केंद्र',
    talk_to_pundit: 'पुरोहित से बात करें',
    start_sewa: 'सेवा शुरू करें',
    sewa_btn_short: 'सेवा',

    // Hero
    hero_badge_1: 'पितृ पक्ष विशेष सेवा 2026 • फल्गु देवघाट',
    hero_title_1: 'गया जी पितृ पक्ष पिंडदान एवं तर्पण सेवा',
    hero_sub_1: 'पावन फल्गु तट पर 60+ वर्षों की परंपरा से जुड़े गयावाल तीर्थ पुरोहित द्वारा शास्त्रोक्त पितृ तर्पण एवं संपूर्ण पिंडदान।',
    
    hero_badge_2: 'श्री विष्णुपद चरणकमल • पावन मोक्ष तीर्थ',
    hero_title_2: 'विष्णुपद के पावन सान्निध्य में संपूर्ण पिंडदान',
    hero_sub_2: 'भगवान विष्णु के चरणारविंद पर पितरों की परम सद्गति एवं मोक्ष प्राप्ति हेतु प्रामाणिक गयावाल पुरोहित संकल्प।',

    hero_badge_3: 'अक्षयवट तीर्थ • 45 पवित्र वेदी परिक्रमा',
    hero_title_3: 'अक्षयवट के सान्निध्य में पितरों की अक्षय मुक्ति',
    hero_sub_3: 'अक्षयवट एवं गया जी की सभी 45 वेदियों पर सहज, पारदर्शी एवं सम्पूर्ण पारिवारिक सुविधा के साथ पिंडदान संपन्न कराएं।',

    hero_cta_start: 'पितृ पक्ष सेवा शुरू करें (Sewa Request)',
    hero_cta_call: 'पुरोहित जी से बात करें (+91 91993 42604)',
    trust_60yrs: '60+ वर्ष गयावाल पुरोहित परंपरा',
    trust_45vedis: '45 पवित्र वेदियों का मार्गदर्शन',
    trust_family: '100% व्यक्तिगत परिवार सहायता',

    // Intent Desk
    intent_tag: 'आपकी आवश्यकता → सहज सेवा',
    intent_title: 'आपको किस सेवा की आवश्यकता है?',
    intent_sub: 'किसी जटिल पैकेज की आवश्यकता नहीं। बस अपना उद्देश्य चुनें, बाकी व्यवस्था हमारी होगी।',
    intent_not_sure_title: 'मुझे समझ नहीं आ रहा कौन सी विधि चाहिए?',
    intent_not_sure_sub: 'चिंता न करें। हमारे विशेषज्ञ आपसे बात करके सही विधि एवं व्यवस्था सुझाएंगे।',
    intent_not_sure_btn: 'पंडित जी से सलाह लें',

    // Sewa Categories
    sewa_tag: 'सेवा सूची',
    sewa_title: 'पवित्र सेवा कैटलॉग',
    sewa_sub: 'व्यावसायिक पैकेज की जगह शास्त्रोक्त एवं पारंपरिक सेवा विकल्प।',
    sewa_view_all: 'पूर्ण सेवा सूची देखें',
    sewa_arrange_label: 'आपके लिए क्या व्यवस्था होगी:',
    sewa_guidance_label: 'प्रमाणित तीर्थ मार्गदर्शन',
    sewa_details_btn: 'विवरण',
    sewa_start_btn: 'सेवा शुरू',

    // How it works
    how_tag: 'पारदर्शी प्रक्रिया',
    how_title: 'सेवा कैसे संपन्न होती है?',
    how_sub: 'वेबसाइट = अनुरोध • समन्वयक = पुष्टि • पुरोहित = शास्त्रोक्त मार्गदर्शन',

    // Pandits
    pandit_tag: 'शास्त्रोक्त मार्गदर्शन',
    pandit_title: 'गया जी के प्रमाणित तीर्थ पुरोहित',
    pandit_sub: 'गयावाल ब्राह्मण परंपरा और शास्त्रों के ज्ञाता प्रमाणित पुरोहितों द्वारा संकल्प।',
    pandit_view_all: 'सभी पुरोहित सूची देखें',
    pandit_talk_btn: 'बात करें',
    pandit_profile_btn: 'प्रोफाइल देखें',

    // Gaya Ji
    gayaji_tag: 'पवित्र क्षेत्र गाइड',
    gayaji_title: 'गया जी पवित्र तीर्थ क्षेत्र',
    gayaji_sub: 'विष्णुपद, फल्गु देवघाट, अक्षयवट एवं 45 पवित्र वेदियों की महिमा।',
    gayaji_view_all: 'पूर्ण गया जी गाइड देखें',
    gayaji_vedis_title: 'गया जी की 45 मुख्य पवित्र वेदियां',
    gayaji_vedis_btn: '45 वेदियों की विस्तृत जानकारी',

    // FAQ
    faq_tag: 'सहायता एवं स्पष्टता',
    faq_title: 'आम परिवारों के मुख्य प्रश्न',
    faq_sub: 'पिंडदान, विधि एवं यात्रा से जुड़ी आवश्यक जानकारी।',
    faq_more_q: 'कोई और प्रश्न है जिसका उत्तर नहीं मिला?',
    faq_more_sub: 'हमारी सहायता डेस्क 24x7 व्हाट्सएप पर उपलब्ध है।',
    faq_all_btn: 'सभी प्रश्न देखें',
    faq_wa_btn: 'व्हाट्सएप हेल्पलाइन'
  },
  en: {
    // Header
    top_announcement: 'Gaya Ji Pilgrimage Assistance Desk • 60+ Years Gayawal Purohit Tradition',
    helpline: 'Helpline: +91 91993 42604',
    whatsapp_live: 'WhatsApp Live Desk',
    brand_subtitle: 'Pind Daan Sewa • Teerth Purohit Desk',
    nav_sewa: 'Sewa Directory',
    nav_jankari: 'Vidhi & Guidance',
    nav_gayaji: 'Gaya Ji Guide',
    nav_pandit: 'Teerth Pandits',
    nav_sahayata: 'Help Desk',
    talk_to_pundit: 'Talk to Purohit',
    start_sewa: 'Start Sewa',
    sewa_btn_short: 'Sewa',

    // Hero
    hero_badge_1: 'Pitru Paksha Special Sewa 2026 • Falgu Devghat',
    hero_title_1: 'Gaya Ji Pitru Paksha Pind Daan & Tarpan Sewa',
    hero_sub_1: 'Authentic ancestral Tarpan & complete Pind Daan on the holy banks of Falgu guided by 60+ years experienced Gayawal Teerth Purohits.',

    hero_badge_2: 'Shri Vishnupad Holy Lotus Feet • Moksha Kshetra',
    hero_title_2: 'Complete Pind Daan at Sacred Vishnupad Footprints',
    hero_sub_2: 'Vedic ancestral rituals and authentic Gotra Sankalp directly at the lotus footprints of Lord Vishnu for eternal liberation.',

    hero_badge_3: 'Akshayavat Kshetra • 45 Sacred Vedis Pilgrimage',
    hero_title_3: 'Eternal Ancestral Liberation at Holy Akshayavat',
    hero_sub_3: 'Complete 45-Vedi Gaya Ji Pind Daan with personal family care, clean accommodation & transparent assistance.',

    hero_cta_start: 'Start Pitru Paksha Sewa (Request)',
    hero_cta_call: 'Talk to Purohit (+91 91993 42604)',
    trust_60yrs: '60+ Yrs Gayawal Purohit Lineage',
    trust_45vedis: '45 Sacred Vedis Guidance',
    trust_family: '100% Personal Family Assistance',

    // Intent Desk
    intent_tag: 'Your Requirement → Seamless Care',
    intent_title: 'What Sewa do you require?',
    intent_sub: 'No complicated packages. Simply choose your purpose, and we arrange everything seamlessly.',
    intent_not_sure_title: 'Not sure which ritual is required?',
    intent_not_sure_sub: 'Do not worry. Our dedicated coordinator will guide you on the exact Vedic vidhi.',
    intent_not_sure_btn: 'Consult Teerth Pandit',

    // Sewa Categories
    sewa_tag: 'Sewa Directory',
    sewa_title: 'Sacred Rituals Catalogue',
    sewa_sub: 'Authentic Vedic traditions and personalized pilgrimage assistance without commercial chaos.',
    sewa_view_all: 'View Full Sewa Directory',
    sewa_arrange_label: 'Arranged for your family:',
    sewa_guidance_label: 'Verified Teerth Guidance',
    sewa_details_btn: 'Details',
    sewa_start_btn: 'Start Sewa',

    // How it works
    how_tag: 'Transparent Journey',
    how_title: 'How does the Sewa work?',
    how_sub: 'Website = Request • Coordinator = Confirmation • Purohit = Vedic Guidance',

    // Pandits
    pandit_tag: 'Traditional Authority',
    pandit_title: 'Verified Teerth Purohits of Gaya Ji',
    pandit_sub: 'Lineage verified Gayawal Brahmin scholars guiding your family with Vedic authenticity.',
    pandit_view_all: 'View All Purohit Profiles',
    pandit_talk_btn: 'Call Purohit',
    pandit_profile_btn: 'View Profile',

    // Gaya Ji
    gayaji_tag: 'Pilgrimage Destination Guide',
    gayaji_title: 'Explore Sacred Gaya Ji Kshetra',
    gayaji_sub: 'The spiritual glory of Shri Vishnupad, Falgu Devghat, Akshayavat & 45 Sacred Vedis.',
    gayaji_view_all: 'View Full Gaya Ji Guide',
    gayaji_vedis_title: '45 Sacred Vedis of Gaya Ji Kshetra',
    gayaji_vedis_btn: 'Explore 45 Vedis Directory',

    // FAQ
    faq_tag: 'Clarity & FAQs',
    faq_title: 'Frequently Asked Questions',
    faq_sub: 'Essential guidance regarding Pind Daan rituals, tithi, and family stay in Gaya Ji.',
    faq_more_q: 'Have more questions that are not answered?',
    faq_more_sub: 'Our helpline desk is available 24x7 on WhatsApp.',
    faq_all_btn: 'View All FAQs',
    faq_wa_btn: 'WhatsApp Helpline'
  },
  bn: {
    // Header (Bengali)
    top_announcement: 'গয়া জী তীর্থ পুরোহিত সহায়তা ডেস্ক • ৬০+ বছরের গয়াবাল পুরোহিত ঐতিহ্য',
    helpline: 'হেল্পলাইন: +91 91993 42604',
    whatsapp_live: 'হোয়াটসঅ্যাপ লাইভ ডেস্ক',
    brand_subtitle: 'পিণ্ড দান সেবা • তীর্থ পুরোহিত ডিজিটাল ডেস্ক',
    nav_sewa: 'সেবা তালিকা',
    nav_jankari: 'বিধি ও নির্দেশিকা',
    nav_gayaji: 'গয়া জী গাইড',
    nav_pandit: 'তীর্থ পুরোহিত',
    nav_sahayata: 'সহায়তা কেন্দ্র',
    talk_to_pundit: 'পুরোহিতের সাথে কথা বলুন',
    start_sewa: 'সেবা শুরু করুন',
    sewa_btn_short: 'সেবা',

    // Hero
    hero_badge_1: 'পিতৃপক্ষ বিশেষ সেবা ২০২৬ • ফল্গু দেবঘাট',
    hero_title_1: 'গয়া জী পিতৃপক্ষ পিণ্ডদান ও তর্পণ সেবা',
    hero_sub_1: 'পবিত্র ফল্গু তীরে ৬০+ বছরের গয়াবাল তীর্থ পুরোহিত পরম্পরা দ্বারা শাস্ত্রীয় পিতৃ তর্পণ ও পিণ্ডদান।',

    hero_badge_2: 'শ্রী বিষ্ণুপাদ চরণকমল • মোক্ষ তীর্থ',
    hero_title_2: 'বিষ্ণুপাদের পবিত্র সান্নিধ্যে সম্পূর্ণ পিণ্ডদান',
    hero_sub_2: 'শ্রী বিষ্ণুপাদের চরণপদ্মে পূর্বপুরুষদের আত্মার সদগতির জন্য শাস্ত্রীয় ও প্রামাণিক সংকল্প।',

    hero_badge_3: 'অক্ষয়বট তীর্থ • ৪৫ পবিত্র বেদি পরিক্রমা',
    hero_title_3: 'অক্ষয়বটের সান্নিধ্যে পিতৃপুরুষের অক্ষয় মুক্তি',
    hero_sub_3: 'অক্ষয়বট এবং গয়া জীর ৪৫টি পবিত্র বেদিতে সহজ, স্বচ্ছ ও পারিবারিক সেবার সাথে পিণ্ডদান।',

    hero_cta_start: 'পিতৃপক্ষ সেবা শুরু করুন (Request)',
    hero_cta_call: 'পুরোহিতের সাথে কথা বলুন (+91 91993 42604)',
    trust_60yrs: '৬০+ বছর গয়াবাল পুরোহিত পরম্পরা',
    trust_45vedis: '৪৫টি পবিত্র বেদির নির্দেশিকা',
    trust_family: '১০০% ব্যক্তিগত পারিবারিক সহায়তা',

    // Intent Desk
    intent_tag: 'আপনার প্রয়োজন → সহজ সেবা',
    intent_title: 'আপনার কোন সেবার প্রয়োজন?',
    intent_sub: 'কোনো জটিল প্যাকেজের প্রয়োজন নেই। শুধু আপনার উদ্দেশ্য বেছে নিন, বাকি ব্যবস্থা আমরা করব।',
    intent_not_sure_title: 'কোন বিধিটি প্রয়োজন তা বুঝতে পারছেন না?',
    intent_not_sure_sub: 'চিন্তা করবেন না। আমাদের সমন্বয়ক আপনাকে সঠিক শাস্ত্রীয় বিধি বুঝিয়ে দেবেন।',
    intent_not_sure_btn: 'পণ্ডিতের পরামর্শ নিন',

    // Sewa Categories
    sewa_tag: 'সেবা তালিকা',
    sewa_title: 'পবিত্র সেবা ক্যাটালগ',
    sewa_sub: 'বাণিজ্যিক বিভ্রান্তি ছাড়াই খাঁটি বৈদিক ঐতিহ্য এবং পারিবারিক সেবা।',
    sewa_view_all: 'সম্পূর্ণ সেবা তালিকা দেখুন',
    sewa_arrange_label: 'আপনার জন্য যা ব্যবস্থা করা হবে:',
    sewa_guidance_label: 'প্রমাণিত তীর্থ নির্দেশিকা',
    sewa_details_btn: 'বিস্তারিত',
    sewa_start_btn: 'সেবা শুরু',

    // How it works
    how_tag: 'স্বচ্ছ প্রক্রিয়া',
    how_title: 'সেবা কীভাবে সম্পন্ন হয়?',
    how_sub: 'ওয়েবসাইট = অনুরোধ • সমন্বয়ক = নিশ্চিতকরণ • পুরোহিত = শাস্ত্রীয় সংকল্প',

    // Pandits
    pandit_tag: 'শাস্ত্রীয় নির্দেশিকা',
    pandit_title: 'গয়া জীর প্রামাণিক তীর্থ পুরোহিত',
    pandit_sub: 'গয়াবাল ব্রাহ্মণ পরম্পরা এবং শাস্ত্রজ্ঞ পুরোহিতদের দ্বারা সংকল্প সম্পন্ন হয়।',
    pandit_view_all: 'সকল পুরোহিত তালিকা দেখুন',
    pandit_talk_btn: 'কথা বলুন',
    pandit_profile_btn: 'প্রোফাইল দেখুন',

    // Gaya Ji
    gayaji_tag: 'তীর্থস্থান নির্দেশিকা',
    gayaji_title: 'গয়া জী পবিত্র তীর্থ পরিক্রমা',
    gayaji_sub: 'বিষ্ণুপাদ, ফল্গু দেবঘাট, অক্ষয়বট ও ৪৫টি পবিত্র বেদির মহিমা।',
    gayaji_view_all: 'সম্পূর্ণ গয়া জী গাইড দেখুন',
    gayaji_vedis_title: 'গয়া জীর ৪৫টি প্রধান পবিত্র বেদি',
    gayaji_vedis_btn: '৪৫ বেদির তথ্য দেখুন',

    // FAQ
    faq_tag: 'সহায়তা ও স্পষ্টতা',
    faq_title: 'সাধারণ পরিবারের জিজ্ঞাস্য প্রশ্নাবলী',
    faq_sub: 'পিণ্ডদান, তিথি ও গয়া জী যাত্রা সংক্রান্ত প্রয়োজনীয় তথ্য।',
    faq_more_q: 'অন্য কোনো প্রশ্ন আছে যার উত্তর পাননি?',
    faq_more_sub: 'আমাদের সহায়তা ডেস্ক ২৪x৭ হোয়াটসঅ্যাপে উপলব্ধ।',
    faq_all_btn: 'সকল প্রশ্ন দেখুন',
    faq_wa_btn: 'হোয়াটসঅ্যাপ হেল্পলাইন'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'hi',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('hi');

  // Load language preference from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('pind_sewa_lang') as Language;
    if (saved && (saved === 'hi' || saved === 'en' || saved === 'bn')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('pind_sewa_lang', newLang);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['hi']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
