export interface SacredPlace {
  id: string;
  slug: string;
  name: string;
  name_hi: string;
  name_en: string;
  name_bn: string;
  hindiName: string;
  significance: string;
  significance_hi: string;
  significance_en: string;
  significance_bn: string;
  description: string;
  ritualType: string;
  timing: string;
  locationDetails: string;
  image: string;
}

export const SACRED_PLACES: SacredPlace[] = [
  {
    id: 'vishnupad',
    slug: 'vishnupad',
    name: 'Vishnupad Temple',
    name_hi: 'श्री विष्णुपद मंदिर',
    name_en: 'Shree Vishnupad Temple',
    name_bn: 'শ্রী বিষ্ণুপাদ মন্দির',
    hindiName: 'श्री विष्णुपद मंदिर',
    significance: "Lord Vishnu's 40cm Sacred Footprint on solid basalt rock",
    significance_hi: 'भगवान विष्णु के पाषाण चरण चिह्न पर मुख्य पिंडदान एवं तर्पण।',
    significance_en: "Lord Vishnu's sacred 40cm footprints on basalt stone for supreme moksha.",
    significance_bn: 'ভগবান বিষ্ণুর পবিত্র পদচিহ্নে প্রধান পিণ্ডদান ও পিতৃমুক্তি।',
    description: 'Vishnupad Mandir Gaya Ji ka sabase mukhya aur pavitra sthan hai. Yahan Bhagwan Vishnu ke charan chihn par Pind Arpan karne se pitron ko saakshaat Vaikuntha dham ki prapti hoti hai.',
    ritualType: 'Main Pind Arpan & Charan Puja',
    timing: '5:00 AM - 9:00 PM',
    locationDetails: 'Chandrachura Hill Side, Gaya City (2.5 km from Railway Station)',
    image: '/images/pitru_paksha_vishnupad.jpg'
  },
  {
    id: 'falgu',
    slug: 'falgu',
    name: 'Falgu River & Devghat',
    name_hi: 'फल्गु नदी एवं देवघाट',
    name_en: 'Falgu River & Devghat',
    name_bn: 'ফল্গু নদী ও দেবঘাট',
    hindiName: 'फल्गु नदी एवं देवघाट',
    significance: 'Antarsalila Sacred River for Initial Tarpan & Bathing',
    significance_hi: 'अंतःसलिला पवित्र नदी तट पर प्रथम स्नान, संकल्प एवं पिंडदान।',
    significance_en: 'Sacred river for initial holy dip, Gotra Sankalp, and sand-river tarpan.',
    significance_bn: 'অন্তঃসলিলা পবিত্র নদী তীরে প্রাথমিক স্নান, সংকল্প ও পিণ্ডদান।',
    description: 'Mata Sita ke shap ke karan Falgu nadi ratan-garbha aur antarsalila (reti ke neeche behne wali) hai. Reti ko khodkar nikale gaye jal se Pind Daan aur Tarpan kiya jata hai.',
    ritualType: 'Snaan, Tarpan & Reti Pind Arpan',
    timing: '24 Hours Open (Best early morning)',
    locationDetails: 'Adjacent to Vishnupad Mandir',
    image: '/images/pitru_paksha_falgu.jpg'
  },
  {
    id: 'akshayavat',
    slug: 'akshayavat',
    name: 'Akshayavat Sacred Tree',
    name_hi: 'अक्षयवट पवित्र वृक्ष',
    name_en: 'Akshayavat Sacred Tree',
    name_bn: 'অক্ষয়বট পবিত্র বৃক্ষ',
    hindiName: 'अक्षयवट पवित्र वृक्ष',
    significance: 'Immortal Banyan Tree for Final Pind Daan & Brahmin Bhojan',
    significance_hi: 'अमर वटवृक्ष की छांव में अंतिम पिंडदान, ब्राह्मण भोजन एवं आशीर्वाद।',
    significance_en: 'Immortal Banyan tree for concluding Pind Daan, Brahmin Bhojan & blessings.',
    significance_bn: 'অমর বটবৃক্ষের ছায়ায় সমাপনী পিণ্ডদান, ব্রাহ্মণ ভোজন ও আশীর্বাদ।',
    description: 'Akshayavat par Pind Daan karne se vidhi ka phal "Akshay" (kabhi nasht na hone wala) ho jata hai. Yahan Pind Daan ke baad Pandit ji dwara aashirvaad aur Brahmin bhojan karwaya jata hai.',
    ritualType: 'Final Pind Daan & Brahmin Dakshina',
    timing: '6:00 AM - 6:00 PM',
    locationDetails: '1.2 km south of Vishnupad',
    image: '/images/pitru_paksha_akshayavat.jpg'
  },
  {
    id: 'pretshila',
    slug: 'pretshila',
    name: 'Pretshila Hill',
    name_hi: 'प्रेतशिला पवित्र पर्वत',
    name_en: 'Pretshila Sacred Hill',
    name_bn: 'প্রেতশিলা পবিত্র পর্বত',
    hindiName: 'प्रेतशिला पर्वत',
    significance: 'Sacred Hill for Atma Shanti & Unnatural Death Rituals',
    significance_hi: 'अकाल मृत्यु व अतृप्त आत्माओं की शांति हेतु विशेष पिंडदान पर्वत।',
    significance_en: 'Sacred hill for ancestral peace and liberation of departed souls.',
    significance_bn: 'অকাল মৃত্যু ও অতৃপ্ত আত্মার শান্তির জন্য বিশেষ পিণ্ডদান পর্বত।',
    description: 'Gaya shahar se 9 km door Pretshila parvat par sattu aur til ka pind arpan kiya jata hai taaki aatma ko pret yoni se mukti mile.',
    ritualType: 'Pret Mukti Pind Daan',
    timing: '6:00 AM - 5:00 PM',
    locationDetails: '9 km north of Gaya Railway Station',
    image: '/images/pretshila_hill.jpg'
  }
];

export const VEDI_45_LIST = [
  'Vishnupad', 'Falgu River', 'Akshayavat', 'Pretshila', 'Ram Gaya', 'Sita Kund', 
  'Goparchar', 'Brahma Kunda', 'Bhim Gaya', 'Uttar Manasa', 'Dakshina Manasa', 
  'Matanga Vapi', 'Kagbali', 'Rudrapad', 'Brahmapad', 'Kashyappad', 'Gadayadrapad'
];

export const TRAVEL_INFO = {
  byTrain: 'Gaya Junction (GAYA) is directly connected to Delhi, Kolkata, Mumbai, Varanasi, and Patna with daily trains.',
  byAir: 'Gaya Airport (GAY) has seasonal flights. Patna Airport (PAT) is 105 km away with direct cab pickup assistance available through Sewa team.',
  byRoad: 'NH 83 connects Gaya to Patna (3 hours) and Varanasi (5 hours).',
  hotelStay: 'Clean family hotels and dharamshalas available within 10 minutes walking distance from Vishnupad temple.'
};
