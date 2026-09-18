export interface PanditProfile {
  id: string;
  name: string;
  title: string;
  lineage: string;
  experienceYears: number;
  languages: string[];
  specializations: string[];
  verifiedChecks: string[];
  about: string;
  howTheyGuide: string;
  image: string;
  gotra?: string;
  location?: string;
  rating?: number;
  totalSewas?: string;
}

export const VERIFIED_PANDITS: PanditProfile[] = [
  {
    id: 'pandit-kalu-lala-guput',
    name: 'Pandit Kalu Lala Guput',
    title: 'Senior Teerth Purohit (वरिष्ठ गयावाल तीर्थ पुरोहित)',
    lineage: 'Gayawal Brahmin Parampara, Vishnupad Kshetra, Gaya Ji',
    gotra: 'Kashyap / Shandilya',
    experienceYears: 60,
    languages: ['Hindi', 'English', 'Bhojpuri', 'Bengali', 'Sanskrit'],
    specializations: [
      'Purna Gaya Ji Pind Daan (45 Vediyan)',
      'Tripindi Shradh & Narayan Bali',
      'Gotra Sankalp & Pitru Sukta Path',
      'Bengali & Maithili Paddhati Shradh'
    ],
    verifiedChecks: [
      'Pramanit Gayawal Teerth Purohit',
      'Identity & 60+ Yrs Lineage Verified',
      'Vishnupad Peeth Registered',
      'Direct Family Consultation Approved'
    ],
    about: 'पंडित कालू लाला गुपुत (Pandit Kalu Lala Guput) गया जी के अत्यंत प्रतिष्ठित एवं वरिष्ठ गयावाल तीर्थ पुरोहित हैं। विष्णुपद क्षेत्र की पावन परंपरा से जुड़े पंडित जी विगत 60 वर्षों से भारत एवं विदेश से आने वाले श्रद्धालु परिवारों का सम्पूर्ण पिंडदान एवं श्राद्ध कर्म शास्त्रोक्त विधि से निर्विघ्न संपन्न कराते आ रहे हैं।',
    howTheyGuide: 'Pandit ji parivaar ke gotra, kul parampara aur shastriya vidhi ke anusar har ek mantra aur pind daan ko vyaktigat sneh evam nishtha ke sath sampann karwate hain.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    location: 'Vishnupad Mandir Parisar, Gaya Ji, Bihar',
    rating: 4.98,
    totalSewas: '15,000+'
  },
  {
    id: 'pandit-ramakant-jha',
    name: 'Pandit Ramakant Jha Shastri',
    title: 'Senior Teerth Pandit & Veda Acharya',
    lineage: 'Gayawal Brahmin Parampara (8th Generation Teerth Pandit)',
    gotra: 'Bharadwaja',
    experienceYears: 28,
    languages: ['Hindi', 'Maithili', 'Sanskrit', 'English'],
    specializations: ['Purna Gaya Pind Daan', 'Tripindi Shradh', 'Vedic Sankalp', 'NRI Family Guidance'],
    verifiedChecks: [
      'Identity Verified',
      'Teerth Lineage Reviewed',
      'Gaya Ji Vidhi Association Verified',
      'Profile & Operational Audit Approved'
    ],
    about: 'Pandit Ramakant Jha Ji Gaya Ji ke paramparik Gayawal Teerth Pandit parivaar se hain. Unhone Sampurnanand Sanskrit Vishwavidyalaya se Shastracharya ki upadhi prapt ki hai aur picchle 28 varshon se desh-bidesh se aaye hazaron parivaaron ko pitru sewa dwara sadgati pradan karwai hai.',
    howTheyGuide: 'Pandit ji parivaar ke har sadasya ko vidhi ki ek-ek prabriya sahaj bhasha mein samjhate hain aur sankalp se lekar aashirvaad tak vyaktigat dhyaan dete hain.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    location: 'Devghat, Falgu Kshetra, Gaya Ji',
    rating: 4.95,
    totalSewas: '8,200+'
  },
  {
    id: 'pandit-venkat-subramaniam',
    name: 'Pandit Venkat Subramaniam Shastri',
    title: 'South Indian Rituals Specialist Pandit',
    lineage: 'Dravida-Gaya Peeth Coordination',
    gotra: 'Vashistha',
    experienceYears: 22,
    languages: ['Tamil', 'Telugu', 'Kannada', 'Hindi', 'English'],
    specializations: ['South Indian Style Shradh', 'Narayan Bali', 'Purna Gaya Pilgrimage'],
    verifiedChecks: [
      'Identity Verified',
      'South Indian Sampradaya Verified',
      'Language Proficiency Verified'
    ],
    about: 'Pandit Venkat Ji Dakshin Bharat (Tamil Nadu, Andhra Pradesh, Telangana, Karnataka) se aane wale yatriyon ki ritual requirements ko unke sampradaya ke anusar nishtha se karwate hain.',
    howTheyGuide: 'Dravida vidhi aur local South Indian traditions ke anusar samagri aur sankalp guide karte hain.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    location: 'Akshayavat Marg, Gaya Ji',
    rating: 4.94,
    totalSewas: '5,400+'
  }
];
