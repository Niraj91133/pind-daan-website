export interface SewaItem {
  id: string;
  slug: string;
  title: string;
  title_hi?: string;
  title_en?: string;
  title_bn?: string;
  subtitle: string;
  subtitle_hi?: string;
  subtitle_en?: string;
  subtitle_bn?: string;
  category: 'ancestral' | 'pandit' | 'yatra' | 'parivaar';
  categoryLabel: string;
  image: string;
  description: string;
  whyThisSewa: string;
  whoNeedsIt: string[];
  whatHappens: string[];
  whatWeArrange: string[];
  whatWeArrange_hi?: string[];
  whatWeArrange_en?: string[];
  whatWeArrange_bn?: string[];
  whatYouDo: string[];
  duration: string;
  duration_hi?: string;
  duration_en?: string;
  duration_bn?: string;
  location: string;
  location_hi?: string;
  location_en?: string;
  location_bn?: string;
  timeline: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SEWA_CATEGORIES = [
  { id: 'ancestral', title: 'Ancestral Sewa', desc: 'Pind Daan, Shradh, Tripindi aur Vishesh Vidhi' },
  { id: 'pandit', title: 'Pandit Sewa', desc: 'Verified Teerth Pandit consultation & guidance' },
  { id: 'yatra', title: 'Yatra Sewa', desc: 'Station pickup, local transport, hotel assistance' },
  { id: 'parivaar', title: 'Parivaar & NRI Sewa', desc: 'Parents care & remote family coordination' },
];

export const ALL_SEWAS: SewaItem[] = [
  // -------------------------------------------------------------
  // 1. ANCESTRAL SEWA (पिंडदान एवं श्राद्ध सेवा)
  // -------------------------------------------------------------
  {
    id: '1-day-pind-daan',
    slug: '1-day',
    title: '1 Din Mein Pind Daan Sewa',
    title_hi: '1 दिन में संपूर्ण पिंडदान सेवा',
    title_en: '1-Day Complete Pind Daan Sewa',
    title_bn: '১ দিনে সম্পূর্ণ পিণ্ডদান সেবা',
    subtitle: 'गया जी में 1 दिन के अंदर मुख्य 3 वेदियों पर पिंडदान एवं शास्त्रीय श्राद्ध विधि।',
    subtitle_hi: 'फल्गु नदी, विष्णुपद मंदिर व अक्षयवट पर संपूर्ण शास्त्रीय पिंडदान संपन्न।',
    subtitle_en: 'Complete authentic Pind Daan across Falgu, Vishnupad & Akshayavat in 1 day.',
    subtitle_bn: 'ফল্গু নদী, বিষ্ণুপাদ মন্দির ও অক্ষয়বটে ১ দিনে সম্পূর্ণ পিণ্ডদান।',
    category: 'ancestral',
    categoryLabel: 'Ancestral Sewa',
    image: '/images/pitru_paksha_falgu.jpg',
    description: 'Agar aapke paas samay ki kami hai, toh 1 din ki purna vidhi ke sath Vishnupad, Falgu river aur Akshayavat par Pind Daan Sampann karwaya jata hai.',
    whyThisSewa: 'Kam samay mein shuddh teerth vidhi dwara pitron ke shanti aur prarthana ke liye sabse mahatvapurna vidhi.',
    whoNeedsIt: [
      'Jin yatriyon ke paas sirf 1 din ka samay hai.',
      'Jo log mukhya 3 vediyon (Vishnupad, Falgu, Akshayavat) par sankalp karna chahte hain.',
      'Pehli baar Gaya Ji aane wale parivaar jinhe verified guidance chahiye.'
    ],
    whatHappens: [
      'Falgu nadi tat par pratham Pind Daan vidhi aur gotra uccaran.',
      'Vishnupad mandir mein Charan Paduka par main Pind Daan offering.',
      'Akshayavat par Akshay Vriksh chhaya mein Pind Daan samapan aur Pandit Aashirvaad.'
    ],
    whatWeArrange: [
      'Verified Teerth Pandit assignment',
      'Purn vidhi samagri coordination',
      'Gaya Junction / Bus stand pickup guidance',
      'Ritual venue coordination',
      'Family assistance during whole day'
    ],
    whatWeArrange_hi: [
      'सत्यापित गयावाल तीर्थ पुरोहित',
      'शुद्ध पूजन एवं पिंडदान सामग्री',
      'फल्गु व विष्णुपद घाट व्यवस्था',
      'दिन भर व्यक्तिगत समन्वयक'
    ],
    whatWeArrange_en: [
      'Verified Teerth Purohit',
      'Pure Puja & Pind Samagri',
      'Falgu & Vishnupad Ghat Access',
      'Full Day Dedicated Escort'
    ],
    whatWeArrange_bn: [
      'অনুমোদিত তীর্থ পুরোহিত',
      'বিশুদ্ধ পূজা ও পিণ্ড সামগ্রী',
      'ফল্গু ও বিষ্ণুপাদ ঘাট আসন',
      'সারাদিন ব্যক্তিগত গাইড'
    ],
    whatYouDo: ['Gotra aur ancestors ke naam yaad rakhein.'],
    duration: '1 Din (Subah 6:00 AM - 2:00 PM)',
    duration_hi: '1 दिन (प्रातः 6:00 से दोपहर 2:00)',
    duration_en: '1 Day (6:00 AM - 2:00 PM)',
    duration_bn: '১ দিন (সকাল ৬:০০ - দুপুর ২:০০)',
    location: 'Vishnupad, Falgu Nadi, Akshayavat',
    location_hi: 'फल्गु, विष्णुपद एवं अक्षयवट',
    location_en: 'Falgu, Vishnupad & Akshayavat',
    location_bn: 'ফল্গু, বিষ্ণুপাদ ও অক্ষয়বট',
    timeline: [
      { step: '01', title: 'Gaya Ji Arrival', desc: 'Railway station ya hotel par coordinator aapko attend karega.' },
      { step: '02', title: 'Vidhi Ki Taiyari', desc: 'Falgu Nadi tat par pavitra snaan/aachaman aur samagri taiyari.' },
      { step: '03', title: 'Pind Daan Sampann', desc: 'Falgu, Vishnupad aur Akshayavat par Vedic mantras ke sath Pind Arpan.' }
    ],
    faqs: [
      { q: 'Kya 1 din mein Pind Daan purna mana jata hai?', a: 'Haan, 3 mukhya vediyon par shuddh vidhi se sadgati purna hoti hai.' }
    ]
  },
  {
    id: '3-day-pind-daan',
    slug: '3-day',
    title: '3 Din Ki Purna Gaya Ji Sewa',
    title_hi: '3 दिन की संपूर्ण 54-वेदी तीर्थ यात्रा',
    title_en: '3-Day Complete Pilgrimage Rituals',
    title_bn: '৩ দিনের সম্পূর্ণ ৫৪-বেদি তীর্থযাত্রা',
    subtitle: 'वैदिक शास्त्रों के अनुसार गया जी के समस्त मुख्य 54 वेदियों एवं तीर्थों की संपूर्ण यात्रा।',
    subtitle_hi: 'प्रेतशिला, रामशिला, फल्गु, विष्णुपद व अक्षयवट पर विस्तृत पितृ तर्पण।',
    subtitle_en: 'Pretshila, Ramshila, Falgu, Vishnupad and Akshayavat comprehensive Yatra.',
    subtitle_bn: 'প্রেতশিলা, রামশিলা, ফল্গু, বিষ্ণুপাদ ও অক্ষয়বটে বিস্তৃত পিতৃ তর্পণ।',
    category: 'ancestral',
    categoryLabel: 'Ancestral Sewa',
    image: '/images/pitru_paksha_vishnupad.jpg',
    description: '3 din ki shradh vidhi mein pitron ke 7 peedhiyon tak ke tarpan aur purna mukti ke liye alag-alag sacred vediyon par vidhi hoti hai.',
    whyThisSewa: 'Purna Gaya Shradh vidhi jismein Pretshila, Punpun nadi, Vishnupad aur Brahma Kunda shamil hain.',
    whoNeedsIt: ['Purna 3-day traditional Gaya Ji pilgrimage karne wale yatri.'],
    whatHappens: ['Day 1: Punpun & Pretshila, Day 2: Falgu & Vishnupad, Day 3: Akshayavat & Bhojan.'],
    whatWeArrange: [
      'Dedicated Teerth Pandit for all 3 days',
      'Full local transport / vehicle coordination',
      'Comfortable hotel stay assistance near Vishnupad',
      'Samagri & Brahmin Bhojan coordination'
    ],
    whatWeArrange_hi: [
      '3 दिनों हेतु समर्पित तीर्थ पुरोहित',
      'संपूर्ण स्थानीय वाहन व कैब व्यवस्था',
      'विष्णुपद के निकट स्वच्छ होटल आवास',
      'ब्राह्मण भोजन व दान सामग्री'
    ],
    whatWeArrange_en: [
      'Dedicated Purohit for 3 Days',
      'Full AC Cab & Local Transport',
      'Hotel Stay Near Vishnupad',
      'Brahmin Bhojan & Dakshina'
    ],
    whatWeArrange_bn: [
      '৩ দিনের জন্য নিবেদিত পুরোহিত',
      'সম্পূর্ণ লোকাল ক্যাব পরিবহন',
      'বিষ্ণুপাদের নিকটে হোটেল আবাসন',
      'ব্রাহ্মণ ভোজন ও দান সামগ্রী'
    ],
    whatYouDo: ['3 din ka samay nikalein.'],
    duration: '3 Din (Purna Yatra)',
    duration_hi: '3 दिन (विस्तृत तीर्थ यात्रा)',
    duration_en: '3 Days (Full Pilgrimage)',
    duration_bn: '৩ দিন (সম্পূর্ণ তীর্থযাত্রা)',
    location: 'Pretshila, Ramshila, Vishnupad, Falgu, Akshayavat',
    location_hi: 'गया जी संपूर्ण परिपथ',
    location_en: 'Gaya Ji Complete Circle',
    location_bn: 'গয়া জী সম্পূর্ণ পরিক্রমা',
    timeline: [
      { step: 'Day 01', title: 'Pretshila & Punpun', desc: 'Initial purification and hill rituals.' },
      { step: 'Day 02', title: 'Vishnupad & Falgu', desc: 'Central Charan Paduka rituals.' },
      { step: 'Day 03', title: 'Akshayavat & Bhojan', desc: 'Akshay Vriksh blessing & conclusion.' }
    ],
    faqs: [
      { q: 'Kya hotel arrangement shamil hai?', a: 'Haan, humari team stay aur vehicle dono coordinate karti hai.' }
    ]
  },
  {
    id: 'tripindi-shradh',
    slug: 'tripindi',
    title: 'Tripindi Shradh Sewa',
    title_hi: 'त्रिपिंडी श्राद्ध एवं पितृ दोष निवारण',
    title_en: 'Tripindi Shradh & Pitru Dosh Nivaran',
    title_bn: 'ত্রিপিন্ডী শ্রাদ্ধ ও পিতৃ দোষ নিবারণ',
    subtitle: 'तीन पीढ़ियों के प्रेत बाधा, अकाल मृत्यु एवं पितृ दोष निवारण हेतु विशेष वैदिक विधि।',
    subtitle_hi: 'ब्रह्मा, विष्णु, महेश के तीन कलश स्थापन द्वारा पितृ शांति विधान।',
    subtitle_en: 'Special Vedic 3-Kalash ritual for resolving ancestral afflictions.',
    subtitle_bn: 'ব্রহ্মা, বিষ্ণু ও মহেশ তিন কলশ দ্বারা পিতৃ শান্তি ও দোষ নিবারণ।',
    category: 'ancestral',
    categoryLabel: 'Ancestral Sewa',
    image: '/images/pitru_paksha_akshayavat.jpg',
    description: 'Jab parivaar mein kashth, karya mein rukawat ya pitru dosh ki samasya ho, tab Pandit ji dwara Tripindi Shradh ka sankalp liya jata hai.',
    whyThisSewa: 'Brahma, Vishnu aur Mahesh ke prateek teen kalash dwara pitron ke ashanti nivaran ki shastriya vidhi.',
    whoNeedsIt: ['Jinke ghar mein akasmat pareshaniyan ya karya rukawat rehti hai.'],
    whatHappens: ['Kalash Sthapana, 3 Dev puja, Havana & Pind Daan.'],
    whatWeArrange: [
      'Specialist Vidhi Pandit guidance',
      'All 3 Kalash & Havana Samagri arrangement',
      'Quiet, sacred ghat space for ritual'
    ],
    whatWeArrange_hi: [
      'विशेषज्ञ शास्त्री पुरोहित',
      'त्रिकाल कलश एवं हवन सामग्री',
      'शांत व पवित्र घाट व्यवस्था',
      'संकल्प व पूर्ण मंत्रोच्चार'
    ],
    whatWeArrange_en: [
      'Specialist Vedic Shastri',
      '3-Kalash & Havan Materials',
      'Quiet Ghat Reservation',
      'Complete Sankalp & Mantras'
    ],
    whatWeArrange_bn: [
      'অভিজ্ঞ শাস্ত্রী পুরোহিত',
      'ত্রিকাল কলশ ও যজ্ঞ সামগ্রী',
      'পবিত্র ঘাট আসন সংরক্ষণ',
      'পূর্ণ সংকল্প ও মন্ত্রোচ্চারণ'
    ],
    whatYouDo: ['Pandit ji se pehle baat karke apni situation explain karein.'],
    duration: '4-5 Ghante (1 Din)',
    duration_hi: '4-5 घंटे (1 दिन)',
    duration_en: '4-5 Hours (1 Day)',
    duration_bn: '৪-৫ ঘণ্টা (১ দিন)',
    location: 'Gaya Ji Sacred Ghats',
    location_hi: 'गया जी पवित्र घाट',
    location_en: 'Gaya Ji Sacred Ghats',
    location_bn: 'গয়া জী পবিত্র ঘাট',
    timeline: [
      { step: '01', title: 'Pandit Consultation', desc: 'Understanding family context.' },
      { step: '02', title: 'Havan & Kalash Puja', desc: 'Sacred fire offering.' }
    ],
    faqs: [{ q: 'Kya kisi bhi din ho sakta hai?', a: 'Pandit ji shubh tithi discuss karte hain.' }]
  },

  // -------------------------------------------------------------
  // 2. PANDIT SEWA (तीर्थ पुरोहित सेवा)
  // -------------------------------------------------------------
  {
    id: 'purohit-lineage-desk',
    slug: 'purohit-lineage',
    title: 'Gayawal Teerth Purohit Parampara',
    title_hi: 'गयावाल तीर्थ पुरोहित व बही-खाता परामर्श',
    title_en: 'Teerth Purohit Lineage & Bahi-Khata Desk',
    title_bn: 'তীর্থ পুরোহিত বংশানুক্রমিক ও খাতা পরামর্শ',
    subtitle: 'आपके कुल व गोत्र से जुड़े प्रामाणिक गयावाल पुरोहित से सीधा संपर्क एवं प्राचीन बही-खाता मिलान।',
    subtitle_hi: 'पीढ़ियों पुरानी वंशावली का सत्यापन एवं शास्त्र सम्मत विधि मार्गदर्शन।',
    subtitle_en: 'Direct consultation with your family lineage Gayawal Purohit & ancestral ledger verification.',
    subtitle_bn: 'পারিবারিক গোত্র ও বংশানুক্রমিক গয়াবাল পুরোহিতের সাথে সরাসরি যোগাযোগ ও প্রাচীন খাতা যাচাই।',
    category: 'pandit',
    categoryLabel: 'Pandit Sewa',
    image: '/images/purohit_bahi_khata.jpg',
    description: 'Gaya Ji mein har parivaar aur rajya ke vishisht Gayawal Teerth Purohit hote hain jinke paas sadiyon purani bahi-khata records hoti hain.',
    whyThisSewa: 'Pramaanikta aur parampara ke anusar sahi kul-purohit se sankalp karwana shastron mein anivarya bataya gaya hai.',
    whoNeedsIt: [
      'Jo log apne paramparik gaya purohit se judna chahte hain.',
      'Jo purani bahi-khata mein apne purvajon ke hastakshar dekhna chahte hain.'
    ],
    whatHappens: [
      'Aapke gaon, jila aur gotra ke aadhar par Gayawal Purohit verification.',
      'Bahi-khata records ka milan aur sankalp tay karna.'
    ],
    whatWeArrange: [
      'Direct Teerth Purohit meeting',
      'Ancestral record ledger access',
      'Personal Vidhi consultation',
      'Transparent Dakshina guidance'
    ],
    whatWeArrange_hi: [
      'प्रामाणिक गयावाल तीर्थ पुरोहित मिलान',
      'प्राचीन बही-खाता वंशावली खोज',
      'शास्त्रीय संकल्प एवं समय निर्धारण',
      'पारदर्शी दक्षिणा एवं मार्गदर्शन'
    ],
    whatWeArrange_en: [
      'Ancestral Purohit Verification',
      'Ancient Ledger (Bahi-Khata) Search',
      'Vedic Sankalp Scheduling',
      'Transparent Guidance & Support'
    ],
    whatWeArrange_bn: [
      'বংশানুক্রমিক পুরোহিত যাচাই',
      'প্রাচীন খাতা ও পূর্বপুরুষের রেকর্ড',
      'শাস্ত্রীয় সংকল্প নির্ধারণ',
      'স্বচ্ছ দক্ষিণা ও পরামর্শ'
    ],
    whatYouDo: ['Apna rajya, jila aur gotra bataein.'],
    duration: 'Direct Desk Coordination',
    duration_hi: 'प्रत्यक्ष परामर्श (फोन/व्यक्तिगत)',
    duration_en: 'Direct Consultation (Call / In-Person)',
    duration_bn: 'সরাসরি পরামর্শ (ফোন/সাক্ষাৎ)',
    location: 'Vishnupad Purohit Karyalaya, Gaya Ji',
    location_hi: 'विष्णुपद पुरोहित परिसर, गया जी',
    location_en: 'Vishnupad Purohit Complex, Gaya Ji',
    location_bn: 'বিষ্ণুপাদ পুরোহিত চত্বর, গয়া জী',
    timeline: [
      { step: '01', title: 'Gotra & State Share', desc: 'Sharing ancestral lineage details.' },
      { step: '02', title: 'Record Match', desc: 'Finding your hereditary Gayawal Purohit.' }
    ],
    faqs: [{ q: 'Kya bahi-khata dekhne ka alag shulk hai?', a: 'Nahi, ye paramparik seva ka hissa hai.' }]
  },
  {
    id: 'gotra-sankalp-booking',
    slug: 'gotra-sankalp',
    title: 'Gotra Sankalp & Pandit Booking',
    title_hi: 'गोत्र संकल्प एवं विशेषज्ञ पंडित बुकिंग',
    title_en: 'Vedic Gotra Sankalp & Pandit Booking',
    title_bn: 'গোত্র সংকল্প ও পণ্ডিত বুকিং',
    subtitle: 'पवित्र तिथियों पर अपने पूर्वजों के नाम से शास्त्रोक्त संकल्प व विधि हेतु वरिष्ठ पुरोहित आवंटन।',
    subtitle_hi: 'पितृ पक्ष व अमावस्या पर समयबद्ध विधि हेतु पूर्व पुरोहित आरक्षण।',
    subtitle_en: 'Pre-book revered Vedic Purohits for timely Sankalp during auspicious Tithis and Pitru Paksha.',
    subtitle_bn: 'পিতৃপক্ষ ও অমাবস্যায় সময়মতো সংকল্প ও আচারের জন্য অভিজ্ঞ পুরোহিত বুকিং।',
    category: 'pandit',
    categoryLabel: 'Pandit Sewa',
    image: '/images/acharya_profile.jpg',
    description: 'Vedic vidhiyon ke gyaata Shastri Pandit ji ke dwara purna vidhi-vidhaan se mantra uccaran aur tarpan karwaya jata hai.',
    whyThisSewa: 'Bheed-bhaad se bachkar shanti-purna tarike se niyamit vidhi sampann karne ke liye.',
    whoNeedsIt: ['Jo parivaar advance me nishchit timing par vidhi chahte hain.'],
    whatHappens: ['Advance booking, timing allocation, Ghat reservation.'],
    whatWeArrange: [
      'Senior Vedic Shastri allocation',
      'Dedicated Ghat seating reservation',
      'All ritual items arrangement'
    ],
    whatWeArrange_hi: [
      'वरिष्ठ वैदिक शास्त्री आवंटन',
      'आरक्षित घाट बैठक व्यवस्था',
      'पूर्ण विधि सामग्री प्रबंध'
    ],
    whatWeArrange_en: [
      'Senior Vedic Shastri Allocation',
      'Reserved Ghat Seating',
      'Complete Samagri Setup'
    ],
    whatWeArrange_bn: [
      'অভিজ্ঞ বৈদিক শাস্ত্রী বরাদ্দ',
      'সংরক্ষিত ঘাট আসন',
      'সম্পূর্ণ সামগ্রী ব্যবস্থাপনা'
    ],
    whatYouDo: ['Tithi aur yatri sankhya batayein.'],
    duration: 'Tailored to Ritual',
    duration_hi: 'विधि अनुसार निर्धारित समय',
    duration_en: 'Scheduled as per ritual',
    duration_bn: 'বিধি অনুসারে নির্ধারিত সময়',
    location: 'Devghat, Vishnupad, Gaya Ji',
    location_hi: 'देवघाट, विष्णुपद, गया जी',
    location_en: 'Devghat, Vishnupad, Gaya Ji',
    location_bn: 'দেবঘাট, বিষ্ণুপাদ, গয়া জী',
    timeline: [
      { step: '01', title: 'Schedule Confirmation', desc: 'Locking date & pandit.' }
    ],
    faqs: [{ q: 'Kya online sankalp ho sakta hai?', a: 'Haan, coordinator se sampark karein.' }]
  },

  // -------------------------------------------------------------
  // 3. YATRA & AWAS SEWA (यात्रा एवं आवास सेवा)
  // -------------------------------------------------------------
  {
    id: 'pickup-cab-transport',
    slug: 'pickup-cab-transport',
    title: 'Patna / Gaya Airport & Station Cab',
    title_hi: 'पटना/गया स्टेशन एवं एयरपोर्ट कैब सुविधा',
    title_en: 'Patna Airport & Gaya Station Cab Escort',
    title_bn: 'পাটনা এয়ারপোর্ট ও গয়া স্টেশন ক্যাব পিকআপ',
    subtitle: 'पटना एयरपोर्ट, गया जंक्शन से होटल व विष्णुपद मंदिर तक स्वच्छ, वातानुकूलित एवं सुरक्षित वाहन सेवा।',
    subtitle_hi: 'समय पर पिकअप, विनम्र चालक एवं संपूर्ण गया जी स्थानीय भ्रमण कैब।',
    subtitle_en: 'Punctual AC cabs from Patna/Gaya Airport & Railway station directly to hotels & sacred ghats.',
    subtitle_bn: 'পাটনা/গয়া বিমানবন্দর ও স্টেশন থেকে হোটেল ও ঘাটে পৌঁছানোর নিরাপদ শীতাতপ নিয়ন্ত্রিত ক্যাব।',
    category: 'yatra',
    categoryLabel: 'Yatra Sewa',
    image: '/images/yatra_hospitality.jpg',
    description: 'Parivaar aur buzurgon ke sath yatra karte samay transport ki chinta mukt suvidha.',
    whyThisSewa: 'Anjaan shahar mein bina kisi pareshani ke seedhe ghat aur hotel tak pahunchne ke liye.',
    whoNeedsIt: [
      'Patna Airport par utarne wale yatri.',
      'Gaya Railway Station par aane wale parivaar.',
      'Pretshila aur door-daraaz vediyon par jane wale yatri.'
    ],
    whatHappens: ['Driver station/airport par name-board ke sath receive karega.'],
    whatWeArrange: [
      'Dedicated AC Sedan / SUV / Traveller',
      'Experienced polite pilgrim driver',
      'All local temple transit included'
    ],
    whatWeArrange_hi: [
      'समर्पित वातानुकूलित वाहन (Sedan / SUV)',
      'अनुभवी व विनम्र स्थानीय सारथी',
      'सभी 54-वेदी व तीर्थ स्थलों का भ्रमण'
    ],
    whatWeArrange_en: [
      'Dedicated AC Sedan / SUV / Innova',
      'Courteous Local Pilgrim Driver',
      'All Temple & Ghat Transfers'
    ],
    whatWeArrange_bn: [
      'শীতাতপ নিয়ন্ত্রিত গাড়ি (Sedan / SUV)',
      'অভিজ্ঞ ও বিনম্র তীর্থযাত্রী চালক',
      'সকল মন্দির ও ঘাটে যাতায়াত'
    ],
    whatYouDo: ['Train/Flight arrival samay share karein.'],
    duration: 'Full Day / Point to Point',
    duration_hi: 'पूर्ण दिवस अथवा आवश्यकतानुसार',
    duration_en: 'Full Day / On-Demand',
    duration_bn: 'সারাদিন বা প্রয়োজন মতো',
    location: 'Patna Airport / Gaya Station to Ghats',
    location_hi: 'पटना/गया से विष्णुपद व मंदिर परिपथ',
    location_en: 'Patna/Gaya to Vishnupad & Ghats',
    location_bn: 'পাটনা/গয়া থেকে বিষ্ণুপাদ ও ঘাটসমূহ',
    timeline: [
      { step: '01', title: 'Pickup at Arrival', desc: 'Driver awaits at gate.' },
      { step: '02', title: 'Hotel Drop', desc: 'Smooth check-in transfer.' }
    ],
    faqs: [{ q: 'Kya Pretshila hill tak gaadi jayegi?', a: 'Haan, gaadi base parking tak le jayegi.' }]
  },
  {
    id: 'hotel-stay-assistance',
    slug: 'hotel-stay-assistance',
    title: 'Vishnupad Temple Near Hotel & Stay',
    title_hi: 'विष्णुपद मंदिर निकट स्वच्छ होटल व धर्मशाला',
    title_en: 'Clean Hotel & Stay Near Vishnupad',
    title_bn: 'বিষ্ণুপাদ মন্দিরের নিকটে পরিষ্কার হোটেল ও আবাসন',
    subtitle: 'विष्णुपद मंदिर व फल्गु घाट से चंद कदमों की दूरी पर स्वच्छ, पारिवारिक व सुरक्षित कमरे।',
    subtitle_hi: 'शुद्ध शाकाहारी भोजन, लिफ्ट सुविधा एवं वरिष्ठ नागरिकों हेतु सुलभ आवास।',
    subtitle_en: 'Clean, verified family hotels & dharamshalas within walking distance of Vishnupad temple with lift and satvik food.',
    subtitle_bn: 'বিষ্ণুপাদ মন্দির ও ফল্গু ঘাটের কাছে পরিষ্কার, লিফট যুক্ত এবং সাত্ত্বিক আহার সমন্বিত পারিবারিক হোটেল।',
    category: 'yatra',
    categoryLabel: 'Yatra Sewa',
    image: '/images/yatra_hospitality.jpg',
    description: 'Teerth kshetra mein sahi aur swachh hotel milna mahatvapurna hai taaki parivaar aaram se vidhi kar sake.',
    whyThisSewa: 'Mandir ke paas hone se subah jaldi vidhi ke liye aana-jaana aasan ho jata hai.',
    whoNeedsIt: ['Parivaar, mahilayein aur buzurg jo paidal duri par stay chahte hain.'],
    whatHappens: ['Pre-verified hotel rooms allocation and smooth check-in.'],
    whatWeArrange: [
      'Pre-verified clean AC/Non-AC rooms',
      'Hot water, elevator & clean linens',
      'Pure Satvik family meals assistance'
    ],
    whatWeArrange_hi: [
      'सत्यापित स्वच्छ वातानुकूलित कक्ष',
      'गरम जल, लिफ्ट एवं स्वच्छ बिस्तर',
      'शुद्ध सात्विक पारिवारिक भोजन'
    ],
    whatWeArrange_en: [
      'Verified Clean AC Rooms',
      'Hot Water, Lift & Clean Linen',
      'Pure Satvik Family Meals'
    ],
    whatWeArrange_bn: [
      'যাচাইকৃত পরিষ্কার এসি রুম',
      'গরম জল, লিফট ও পরিচ্ছন্ন বিছানা',
      'বিশুদ্ধ সাত্ত্বিক পারিবারিক খাবার'
    ],
    whatYouDo: ['Check-in date aur kamron ki sankhya batayein.'],
    duration: '24 Hours Check-in Cycle',
    duration_hi: '24 घंटे चेक-इन चक्र',
    duration_en: '24 Hours Check-in Cycle',
    duration_bn: '২৪ ঘণ্টা চেক-ইন চক্র',
    location: 'Vishnupad Temple Vicinity, Gaya Ji',
    location_hi: 'विष्णुपद मंदिर परिक्षेत्र, गया जी',
    location_en: 'Vishnupad Temple Area, Gaya Ji',
    location_bn: 'বিষ্ণুপাদ মন্দির এলাকা, গয়া জী',
    timeline: [{ step: '01', title: 'Room Allocation', desc: 'Ready before arrival.' }],
    faqs: [{ q: 'Kya room mandir ke paas hai?', a: 'Haan, 200-500 meter ke dayre mein.' }]
  },

  // -------------------------------------------------------------
  // 4. PARIVAAR & NRI SEWA (पारिवारिक एवं एनआरआई सेवा)
  // -------------------------------------------------------------
  {
    id: 'elderly-parents-care',
    slug: 'elderly-parents-care',
    title: 'Senior Citizen & Parents Care Pilgrimage',
    title_hi: 'वरिष्ठ नागरिक व माता-पिता विशेष तीर्थ सेवा',
    title_en: 'Senior Citizen & Elderly Parents Care',
    title_bn: 'প্রবীণ নাগরিক ও পিতামাতা বিশেষ তীর্থ সেবা',
    subtitle: 'बुजुर्ग माता-पिता के लिए व्हीलचेयर, डोली, घाट सहायक एवं व्यक्तिगत सेवा समन्वयक।',
    subtitle_hi: 'बिना किसी कष्ट के संपूर्ण तीर्थ स्नान, पिंडदान व दर्शन की समर्पित व्यवस्था।',
    subtitle_en: 'Dedicated wheelchair, palanquin (doli), ghat assistants, and a personal companion for elder parents.',
    subtitle_bn: 'বয়োবৃদ্ধ পিতামাতার জন্য হুইলচেয়ার, ডোলি, ঘাট সহকারী ও সার্বক্ষণিক ব্যক্তিগত সহায়ক।',
    category: 'parivaar',
    categoryLabel: 'Parivaar Sewa',
    image: '/images/family_elder_care.jpg',
    description: 'Agar aapke mata-pita akele ya aapke sath Gaya Ji aa rahe hain, toh unhe bina kisi thakan ya pareshani ke purna darshan karwaya jata hai.',
    whyThisSewa: 'Ghaton aur mandir mein seedhiyan hone ke kaaran buzurgon ko vishesh sahayata ki zaroorat hoti hai.',
    whoNeedsIt: [
      '60+ varshiya mata-pita jinhe chalne mein asuvidha ho.',
      'Jo log apne mata-pita ko VIP tarike se shanti-purna yatra karwana chahte hain.'
    ],
    whatHappens: ['Station par reception, wheelchair assistance, ghat par dedicated sahayak.'],
    whatWeArrange: [
      'Personal assistant throughout the day',
      'Wheelchair / E-rickshaw / Doli assistance',
      'Seated comfortable Ghat arrangements',
      'Direct temple Charan Darshan facilitation'
    ],
    whatWeArrange_hi: [
      'पूरे दिन हेतु व्यक्तिगत सेवा सहायक',
      'व्हीलचेयर / ई-रिक्शा / डोली सुविधा',
      'घाट पर आरामदायक कुर्सी/गद्देदार बैठक',
      'विष्णुपद सुलभ चरण दर्शन व्यवस्था'
    ],
    whatWeArrange_en: [
      'Personal Attendant Throughout Day',
      'Wheelchair / E-Rickshaw / Doli Support',
      'Comfortable Seated Ghat Setup',
      'Assisted Temple Charan Darshan'
    ],
    whatWeArrange_bn: [
      'সারাদিনের ব্যক্তিগত সেবা সহায়ক',
      'হুইলচেয়ার / ই-রিকশা / ডোলি ব্যবস্থা',
      'ঘাটে আরামদায়ক বসার আসন',
      'সহজ বিষ্ণুপাদ চরণ দর্শন সহায়তা'
    ],
    whatYouDo: ['Mata-pita ki physical zaroorat humein pehle batayein.'],
    duration: 'Full Yatra Duration',
    duration_hi: 'संपूर्ण यात्रा अवधि',
    duration_en: 'Full Yatra Duration',
    duration_bn: 'সম্পূর্ণ তীর্থযাত্রা জুড়ে',
    location: 'All Ghats & Temples in Gaya Ji',
    location_hi: 'गया जी के सभी घाट एवं मंदिर',
    location_en: 'All Ghats & Temples in Gaya Ji',
    location_bn: 'গয়া জীর সকল ঘাট ও মন্দির',
    timeline: [
      { step: '01', title: 'Pickup & Comfort Check', desc: 'Ensuring total comfort.' },
      { step: '02', title: 'Escorted Rituals', desc: 'Zero hassle, peaceful vidhi.' }
    ],
    faqs: [{ q: 'Kya mandir mein wheelchair ja sakti hai?', a: 'Haan, designated ramp gates se le jaya jata hai.' }]
  },
  {
    id: 'nri-remote-sankalp',
    slug: 'nri-remote-sankalp',
    title: 'NRI & Remote Family Sankalp Sewa',
    title_hi: 'एनआरआई एवं दूरस्थ परिवार संकल्प सेवा',
    title_en: 'NRI & Remote Family Sankalp Coordination',
    title_bn: 'এনআরআই ও দূরবর্তী পরিবার সংকল্প সেবা',
    subtitle: 'यदि आप गया जी आने में असमर्थ हैं, तो आपके गोत्र व नाम से प्रामाणिक पुरोहित द्वारा लाइव संकल्प एवं वीडियो प्रमाण।',
    subtitle_hi: 'घर बैठे पूर्वजों के निमित्त शास्त्रोक्त विधि, लाइव वीडियो कॉल एवं प्रसाद प्रेषण।',
    subtitle_en: 'Authentic Pind Daan with Live Video Sankalp, Pandit video proof, and sacred Prasad delivery for families worldwide.',
    subtitle_bn: 'দূর দেশে বসেই গোত্র সংকল্প, লাইভ ভিডিও সম্প্রচার এবং পবিত্র প্রসাদ প্রাপ্তির সুব্যবস্থা।',
    category: 'parivaar',
    categoryLabel: 'Parivaar Sewa',
    image: '/images/purohit_bahi_khata.jpg',
    description: 'Videsh ya doosre rajyon mein rahne wale parivaar jo kisi kaaran nahi aa sakte, unke liye shastriya pratinidhi sankalp vidhi.',
    whyThisSewa: 'Pitru Paksha mein samay par pitron ke tarpan ki parampara ka palan bina ruke ho sake.',
    whoNeedsIt: [
      'NRIs and devotees living in USA, UK, Canada, Australia etc.',
      'Parivaar jo medical ya urgent reasons se physically nahi pahunch sakte.'
    ],
    whatHappens: ['Live WhatsApp video call par Sankalp, Pind Arpan recording, Prasad dispatch.'],
    whatWeArrange: [
      'Live HD Video Sankalp Stream',
      'Pure ritual materials & Brahmin Bhojan',
      'Video proof & photo documentation',
      'Gaya Ji sacred Prasad speed-post dispatch'
    ],
    whatWeArrange_hi: [
      'लाइव एचडी वीडियो संकल्प प्रसारण',
      'ब्राह्मण भोजन व शुद्ध पिंड दान सामग्री',
      'पूर्ण विधि का वीडियो व फोटो प्रमाण',
      'पवित्र गया जी प्रसाद डाक प्रेषण'
    ],
    whatWeArrange_en: [
      'Live HD Video Sankalp Stream',
      'Pure Samagri & Brahmin Bhojan',
      'Complete Video & Photo Proof',
      'Sacred Prasad Courier Dispatch'
    ],
    whatWeArrange_bn: [
      'লাইভ এইচডি ভিডিও সংকল্প সম্প্রচার',
      'ব্রাহ্মণ ভোজন ও বিশুদ্ধ সামগ্রী',
      'সম্পূর্ণ আচারের ভিডিও ও ছবি প্রমাণ',
      'পবিত্র প্রসাদ কুরিয়ার মারফত প্রেরণ'
    ],
    whatYouDo: ['Gotra, ancestors list aur convenient timing share karein.'],
    duration: 'Scheduled Time-slot',
    duration_hi: 'समय स्लॉट अनुसार (लाइव)',
    duration_en: 'Scheduled Live Slot',
    duration_bn: 'নির্ধারিত লাইভ সময়',
    location: 'Vishnupad / Falgu Ghat, Gaya Ji',
    location_hi: 'विष्णुपद / फल्गु घाट, गया जी',
    location_en: 'Vishnupad / Falgu Ghat, Gaya Ji',
    location_bn: 'বিষ্ণুপাদ / ফল্গু ঘাট, গয়া জী',
    timeline: [
      { step: '01', title: 'Video Call Connect', desc: 'Direct Pandit connection.' },
      { step: '02', title: 'Live Sankalp', desc: 'Chanting mantras with you.' }
    ],
    faqs: [{ q: 'Kya shastron mein door se sankalp manya hai?', a: 'Haan, pratinidhi dwara sankalp shastrasammata hai.' }]
  }
];
