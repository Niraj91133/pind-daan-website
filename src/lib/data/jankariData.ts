export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  shortAnswer: string;
  quickFacts: string[];
  content: string;
  traditionalContext: string;
  commonQuestions: { q: string; a: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'what-is-pind-daan-why-gaya-ji',
    title: 'Pind Daan Kya Hai Aur Pitron Ke Liye Gaya Ji Hi Kyun Sabse Sacred Hai?',
    category: 'Pind Daan',
    readTime: '5 min read',
    shortAnswer: 'Pind Daan rice flour/barley balls (pind) aur tarpan ke dwara pitron ko sadgati aur mukti pradhan karne ki veda-manya vidhi hai. Gayasur rakshas ke pavitra deha par Bhagwan Vishnu ke charan paduka sthapit hone ke karan Gaya Ji sabse vishesh teerth hai.',
    quickFacts: [
      'Gayasur ko Bhagwan Vishnu dwara parampavitra hone ka varadan mila.',
      'Sita Mata ne Falgu nadi tat par King Dasharath ke liye pratham Pind Daan kiya tha.',
      'Gaya Ji mein Pind Daan karne ke baad punah dusre teerth par pind daan ki aavashyakta nahi rehti.'
    ],
    content: `Pind Daan Sanatan parampara ka sabse pawan kartavya hai. Pind ka tatparya hai sharir aur aatma ke beech ke sneha sutra ko sadgati mein badalna.

    Jab parivaar ke sadasya Gaya Ji aakar Falgu Nadi, Vishnupad aur Akshayavat par Pind Arpan karte hain, toh shastron ke anusar pitron ki 7 peedhiyon ko mukti prapt hoti hai.`,
    traditionalContext: 'Garuda Purana aur Vayu Purana ke Gaya Mahatmya adhyaya mein Gaya Shradh ki vishad vyakhya hai.',
    commonQuestions: [
      { q: 'Kya pita ke jeevit rehte beti Pind Daan kar sakti hai?', a: 'Agar koi purush sadasya na ho ya vishesh paristhiti ho, toh shastron mein Kanya / Putri dwara bhi Pind Daan ka adhikar bataya gaya hai jaisa Sita Mata ne kiya tha.' }
    ]
  },
  {
    slug: 'pitru-paksha-gaya-guide',
    title: 'Pitru Paksha Mein Gaya Ji Aane Ki Taiyari Kaise Karein?',
    category: 'Pitru Paksha',
    readTime: '6 min read',
    shortAnswer: 'Bhadrapada Purnima se Amavasya tak Pitru Paksha ke 16 dinon mein lakho yatri Gaya Ji aate hain. Advance Pandit guidance aur stay booking se aapki yatra sugridh rehti hai.',
    quickFacts: [
      'Pitru Paksha mein har din vishesh tithi shradh hota hai.',
      'Amavasya tithi par Sarva Pitru Shradh sabse mukhya hai.',
      'Senior citizens ke liye early morning vidhi timings sabse comfortable rehti hain.'
    ],
    content: 'Pitru Paksha ke dauran Gaya Ji mein karya prabandhan aur Pandit consultation pehle se finalize karna suvidhajanak rehta hai.',
    traditionalContext: 'Pitru Paksha mein pitru prathvi ke samip aate hain aur banshaj dwara diye gaye Pind aur Jal ko prasannata purvak grahan karte hain.',
    commonQuestions: [
      { q: 'Kya Pitru Paksha ke alava kisi aur mahine mein Pind Daan ho sakta hai?', a: 'Haan, Gaya Ji aksaya teerth hai. Yahan saal ke 365 din Pind Daan shubh mana jata hai.' }
    ]
  }
];
