export interface FAQItem {
  category: string;
  question: string;
  question_hi: string;
  question_en: string;
  question_bn: string;
  answer: string;
  answer_hi: string;
  answer_en: string;
  answer_bn: string;
}

export const SAHAYATA_FAQS: FAQItem[] = [
  {
    category: 'Sewa Process',
    question: 'Pind Daan Sewa website par booking kaise hoti hai?',
    question_hi: 'गया जी पिंडदान सेवा के लिए बुकिंग व समन्वय प्रक्रिया क्या है?',
    question_en: 'How does the Gaya Ji Pind Daan Sewa booking & coordination work?',
    question_bn: 'গয়া জী পিণ্ডদান সেবার বুকিং ও সমন্বয় প্রক্রিয়া কীভাবে কাজ করে?',
    answer: 'Aap website par apni sewa need bhejte hain. Uske turant baad humare local coordinator aapse phone/WhatsApp par sampark karke dates, Pandit, aur stay details finalise karte hain.',
    answer_hi: 'आप वेबसाइट पर अपनी आवश्यकता व तिथि दर्ज करते हैं। हमारे समर्पित स्थानीय समन्वयक आपसे फोन/व्हाट्सएप पर बात करके पुरोहित, घाट व्यवस्था, वाहन एवं आवास विवरण अंतिम रूप देते हैं।',
    answer_en: 'Submit your request online. Our local coordinator contacts you via Phone/WhatsApp to finalize auspicious dates, Purohit assignment, vehicle transit, and comfortable stay arrangements.',
    answer_bn: 'ওয়েবসাইটে আপনার প্রয়োজনীয়তা ও তারিখ জানান। আমাদের স্থানীয় সমন্বয়ক আপনার সাথে ফোন/হোয়াটসঅ্যাপে কথা বলে পুরোহিত, ঘাট ব্যবস্থা, ক্যাব ও হোটেল নিশ্চিত করবেন।'
  },
  {
    category: 'Pandit & Vidhi',
    question: 'Gotra nahi pata ho toh vidhi kaise hogi?',
    question_hi: 'यदि कुल या गोत्र ज्ञात न हो, तो क्या पिंडदान संपन्न हो सकता है?',
    question_en: 'Can Pind Daan be performed if we do not know our Gotra?',
    question_bn: 'যদি গোত্র জানা না থাকে, তবে কি পিণ্ডদান সম্পন্ন করা সম্ভব?',
    answer: 'Gotra nahi pata hone par Pandit ji traditional shastriya vidhi ke anusar "Kashyap Gotra" ya "Pitru Sankalp" ke dwara Pind Daan sampann karwa dete hain.',
    answer_hi: 'हाँ, गोत्र ज्ञात न होने पर चिंता की आवश्यकता नहीं है। शास्त्रीय विधान के अनुसार तीर्थ पुरोहित जी "कश्यप गोत्र" अथवा "सर्वपितृ संकल्प" द्वारा पूर्ण विधि-विधान से पिंडदान संपन्न कराते हैं।',
    answer_en: 'Yes. If your family Gotra is unknown, our revered Purohit initiates the Vedic Sankalp invoking the universal "Kashyap Gotra" as sanctioned by ancient sacred scriptures.',
    answer_bn: 'হ্যাঁ, গোত্র জানা না থাকলেও কোনো সমস্যা নেই। শাস্ত্রীয় বিধান অনুযায়ী পুরোহিত মহাশয় "কাশ্যপ গোত্র" বা "সর্বপিতৃ সংকল্প" দ্বারা সম্পূর্ণ শাস্ত্রীয় পিণ্ডদান সম্পন্ন করান।'
  },
  {
    category: 'Travel & Hotel',
    question: 'Senior Citizens ke liye kya vishesh suvidha hai?',
    question_hi: 'वरिष्ठ नागरिकों व बुजुर्ग परिजनों हेतु क्या विशेष सुविधाएं उपलब्ध हैं?',
    question_en: 'What special assistance is provided for senior citizens and elderly parents?',
    question_bn: 'প্রবীণ নাগরিক ও বয়োবৃদ্ধ পিতামাতার জন্য কী বিশেষ সুবিধা রয়েছে?',
    answer: 'Senior citizens ke liye hum station pickup, mandir ke paas comfortable stay, kam chalna pade aisa ritual spot selection aur personal coordinator sahayata provide karte hain.',
    answer_hi: 'वरिष्ठ नागरिकों हेतु स्टेशन/एयरपोर्ट पिकअप, विष्णुपद मंदिर के निकट लिफ्ट युक्त होटल, व्हीलचेयर/डोली सुविधा, घाट पर आरामदायक बैठक एवं व्यक्तिगत सेवा सहायक उपलब्ध कराया जाता है।',
    answer_en: 'We provide direct station pickup, hotels with elevators within walking distance of Vishnupad temple, wheelchair/palanquin assistance, seated ghat setups, and dedicated personal attendants.',
    answer_bn: 'প্রবীণদের জন্য স্টেশন থেকে পিকআপ, মন্দিরের নিকটে লিফটযুক্ত হোটেল, হুইলচেয়ার/ডোলি ব্যবস্থা, ঘাটে আরামদায়ক বসার আসন ও সার্বক্ষণিক ব্যক্তিগত সহকারী প্রদান করা হয়।'
  },
  {
    category: 'Pandit & Vidhi',
    question: 'Gayawal Teerth Purohit ki pramanikta kaise sunishchit hoti hai?',
    question_hi: 'गयावाल तीर्थ पुरोहित की प्रामाणिकता व वंशावली कैसे सुनिश्चित होती है?',
    question_en: 'How is the authenticity and lineage of the Gayawal Teerth Purohit verified?',
    question_bn: 'গয়াবাল তীর্থ পুরোহিতের সত্যতা ও বংশানুক্রমিক খাতা কীভাবে নিশ্চিত করা হয়?',
    answer: 'Gaya Ji ke paramparik Gayawal Brahmin parivaaron ke paas sadiyon purane bahi-khata records hote hain jisse kul aur gotra ka milan kiya jata hai.',
    answer_hi: 'गया जी के परंपरागत गयावाल पुरोहित परिवारों के पास सदियों पुरानी हस्तलिखित बही-खाता वंशावली उपलब्ध है, जिससे आपके राज्य, जिले व कुल का प्रामाणिक मिलान कर संकल्प कराया जाता है।',
    answer_en: 'Traditional Gayawal Purohits possess centuries-old handwritten genealogical ledgers (Bahi-Khata) matching your ancestral home state, district, and Gotra with complete authenticity.',
    answer_bn: 'গয়া জীর ঐতিহ্যবাহী গয়াবাল পুরোহিত পরিবারের কাছে শতবর্ষ প্রাচীন বংশানুক্রমিক খাতা সংরক্ষিত থাকে, যার মাধ্যমে পরিবার ও গোত্রের নিখুঁত মিলবন্ধন করে সংকল্প নেওয়া হয়।'
  },
  {
    category: 'Family & NRI',
    question: 'Kya ghar baithe ya videsh (NRI) se Pind Daan karwaya ja sakta hai?',
    question_hi: 'क्या घर बैठे अथवा विदेश (NRI) से लाइव संकल्प द्वारा पिंडदान संभव है?',
    question_en: 'Can Pind Daan be arranged remotely or from abroad (NRI) via live video sankalp?',
    question_bn: 'ঘরে বসে বা বিদেশ (NRI) থেকে কি লাইভ ভিডিও সংকল্পের মাধ্যমে পিণ্ডদান সম্ভব?',
    answer: 'Haan, pratinidhi dwara live WhatsApp video call par Sankalp aur video proof ke sath sampurna vidhi karwayi ja sakti hai.',
    answer_hi: 'हाँ, यदि आप स्वयं आने में असमर्थ हैं तो आपके गोत्र व नाम से लाइव व्हाट्सएप वीडियो कॉल पर शास्त्रीय संकल्प कराकर संपूर्ण पिंडदान, वीडियो प्रमाण एवं पवित्र प्रसाद डाक द्वारा प्रेषित किया जाता है।',
    answer_en: 'Yes. For devotees unable to visit in person, we facilitate live HD video Sankalp via WhatsApp, comprehensive video documentation, and courier delivery of holy Gaya Ji Prasad.',
    answer_bn: 'হ্যাঁ, যদি ব্যক্তিগতভাবে উপস্থিত হতে অসমর্থ হন, তবে লাইভ হোয়াটসঅ্যাপ ভিডিও কলে সংকল্প, সম্পূর্ণ আচার অনুষ্ঠানের ভিডিও প্রমাণ এবং পবিত্র প্রসাদ কুরিয়ার মারফত পাঠানো হয়।'
  }
];
