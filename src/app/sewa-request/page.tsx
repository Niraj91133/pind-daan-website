'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ALL_SEWAS } from '@/lib/data/sewaData';
import { saveNewRequest, SewaRequestItem } from '@/lib/store/requestsStore';
import { Check, ChevronRight, ArrowLeft, Calendar, Users, ShieldCheck, Phone, MessageSquare, Compass, HeartHandshake } from 'lucide-react';

function SewaRequestContent() {
  const searchParams = useSearchParams();
  const initialSewaId = searchParams.get('sewa') || '1-day-pind-daan';

  const [step, setStep] = useState<number>(1);
  const [selectedSewaId, setSelectedSewaId] = useState<string>(initialSewaId);
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [assistanceOptions, setAssistanceOptions] = useState<string[]>(['Pandit Guidance', 'Hotel Assistance']);
  
  // Personal Details
  const [customerName, setCustomerName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [gotra, setGotra] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Submitted request result
  const [submittedRequest, setSubmittedRequest] = useState<SewaRequestItem | null>(null);

  const selectedSewa = ALL_SEWAS.find((s) => s.id === selectedSewaId) || ALL_SEWAS[0];

  const handleAssistanceToggle = (option: string) => {
    if (assistanceOptions.includes(option)) {
      setAssistanceOptions(assistanceOptions.filter(o => o !== option));
    } else {
      setAssistanceOptions([...assistanceOptions, option]);
    }
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !mobile) {
      alert('Please fill your name and mobile number.');
      return;
    }

    const created = saveNewRequest({
      customerName,
      mobile,
      whatsapp: whatsapp || mobile,
      city,
      gotra,
      sewaId: selectedSewa.id,
      sewaTitle: selectedSewa.title,
      preferredDate: preferredDate || 'To be discussed with coordinator',
      peopleCount,
      assistanceOptions,
      notes,
    });

    setSubmittedRequest(created);
    setStep(7);
  };

  return (
    <>
      {/* Multi-step Stepper Indicator (for steps 1-6) */}
      {step <= 6 && (
        <div className="mb-8 p-4 rounded-xl bg-parchment-200/60 border border-gold-600/30 flex items-center justify-between text-xs font-semibold">
          <span className={step >= 1 ? 'text-saffron-700 font-bold' : 'text-terracotta-500'}>01 Sewa</span>
          <ChevronRight className="w-3.5 h-3.5 text-gold-700" />
          <span className={step >= 2 ? 'text-saffron-700 font-bold' : 'text-terracotta-500'}>02 Date</span>
          <ChevronRight className="w-3.5 h-3.5 text-gold-700" />
          <span className={step >= 3 ? 'text-saffron-700 font-bold' : 'text-terracotta-500'}>03 People</span>
          <ChevronRight className="w-3.5 h-3.5 text-gold-700" />
          <span className={step >= 4 ? 'text-saffron-700 font-bold' : 'text-terracotta-500'}>04 Support</span>
          <ChevronRight className="w-3.5 h-3.5 text-gold-700" />
          <span className={step >= 5 ? 'text-saffron-700 font-bold' : 'text-terracotta-500'}>05 Details</span>
          <ChevronRight className="w-3.5 h-3.5 text-gold-700" />
          <span className={step >= 6 ? 'text-saffron-700 font-bold' : 'text-terracotta-500'}>06 Review</span>
        </div>
      )}

      {/* STEP 01: SELECT SEWA */}
      {step === 1 && (
        <div className="bg-parchment-100 p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-paper space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              01. Aapki Sewa Selection
            </h2>
            <p className="text-xs text-terracotta-700 mt-1">
              Aap kis Sewa ya Vidhi ke liye coordinator se baat karna chahte hain?
            </p>
          </div>

          <div className="space-y-3">
            {ALL_SEWAS.map((s) => (
              <label
                key={s.id}
                onClick={() => setSelectedSewaId(s.id)}
                className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedSewaId === s.id
                    ? 'bg-parchment-200 border-saffron-600 shadow-sm'
                    : 'bg-parchment-50 border-gold-600/20 hover:border-gold-500'
                }`}
              >
                <input
                  type="radio"
                  name="sewaChoice"
                  checked={selectedSewaId === s.id}
                  onChange={() => setSelectedSewaId(s.id)}
                  className="mt-1 accent-saffron-600"
                />
                <div>
                  <div className="font-serif font-bold text-base text-mahogany-900">
                    {s.title}
                  </div>
                  <div className="text-xs text-terracotta-700 mt-0.5">
                    {s.subtitle}
                  </div>
                  <div className="text-[11px] text-saffron-700 font-medium mt-1">
                    Duration: {s.duration}
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider flex items-center gap-2"
            >
              <span>AAGE BADHEIN (DATE)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 02: PREFERRED DATE */}
      {step === 2 && (
        <div className="bg-parchment-100 p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-paper space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              02. Aap kab Gaya Ji aana chahte hain?
            </h2>
            <p className="text-xs text-terracotta-700 mt-1">
              Preferred Date chuniye. Coordinator team aapse discussion ke baad tithi finalise karegi.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-mahogany-900 mb-2">
                Preferred Visit Date
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full p-3 rounded-md bg-parchment-50 border border-gold-600/30 text-mahogany-900 focus:outline-none focus:border-saffron-600"
              />
            </div>

            <div className="p-4 rounded-lg bg-gold-50 border border-gold-600/30 text-xs text-gold-900 flex items-start gap-2">
              <Calendar className="w-4 h-4 text-gold-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Important Notice:</strong> Yeh aapki prefered date hai. Confirmation coordinator phone par shastriya muhurat aur pandit availability verify karke karenge.
              </span>
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-5 py-2.5 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Pichhe</span>
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider flex items-center gap-2"
            >
              <span>AAGE BADHEIN (FAMILY SIZE)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 03: FAMILY SIZE */}
      {step === 3 && (
        <div className="bg-parchment-100 p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-paper space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              03. Kitne log Sewa mein shamil honge?
            </h2>
            <p className="text-xs text-terracotta-700 mt-1">
              Yatra aur Pind Daan vidhi mein shamil hone wale kul sadasyon ki sankhya.
            </p>
          </div>

          <div className="flex items-center gap-6 p-6 rounded-xl bg-parchment-200/50 border border-gold-600/30 justify-center">
            <button
              onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
              className="w-12 h-12 rounded-full bg-mahogany-900 text-gold-400 font-bold text-xl flex items-center justify-center hover:bg-mahogany-800"
            >
              -
            </button>
            <div className="text-center min-w-[100px]">
              <span className="font-serif font-bold text-4xl text-mahogany-900 block">
                {peopleCount}
              </span>
              <span className="text-xs text-terracotta-700 uppercase font-semibold">
                People / Sadasya
              </span>
            </div>
            <button
              onClick={() => setPeopleCount(peopleCount + 1)}
              className="w-12 h-12 rounded-full bg-mahogany-900 text-gold-400 font-bold text-xl flex items-center justify-center hover:bg-mahogany-800"
            >
              +
            </button>
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(2)}
              className="px-5 py-2.5 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Pichhe</span>
            </button>
            <button
              onClick={() => setStep(4)}
              className="px-6 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider flex items-center gap-2"
            >
              <span>AAGE BADHEIN (ASSISTANCE)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 04: ASSISTANCE */}
      {step === 4 && (
        <div className="bg-parchment-100 p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-paper space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              04. Aur kis cheez mein madad chahiye?
            </h2>
            <p className="text-xs text-terracotta-700 mt-1">
              Aap jise zaroori samajhte hain use tick karein (Multiple select allowed):
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Station / Airport Pickup',
              'Hotel Stay Assistance',
              'Local Transport Vehicle',
              'Senior Citizen Assistance',
              'Pandit Consultation Guidance',
              'Not Sure (Need Advice)'
            ].map((opt, i) => {
              const checked = assistanceOptions.includes(opt);
              return (
                <label
                  key={i}
                  onClick={() => handleAssistanceToggle(opt)}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    checked
                      ? 'bg-parchment-200 border-saffron-600 font-semibold text-mahogany-900'
                      : 'bg-parchment-50 border-gold-600/20 text-terracotta-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleAssistanceToggle(opt)}
                    className="accent-saffron-600"
                  />
                  <span className="text-xs">{opt}</span>
                </label>
              );
            })}
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(3)}
              className="px-5 py-2.5 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Pichhe</span>
            </button>
            <button
              onClick={() => setStep(5)}
              className="px-6 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider flex items-center gap-2"
            >
              <span>AAGE BADHEIN (DETAILS)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 05: PERSONAL DETAILS */}
      {step === 5 && (
        <div className="bg-parchment-100 p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-paper space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              05. Aapki Contact Details
            </h2>
            <p className="text-xs text-terracotta-700 mt-1">
              Humari team is number par aapse contact karke confirmation karegi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-mahogany-900 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shri Rajesh Sharma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-3 rounded-md bg-parchment-50 border border-gold-600/30 text-xs text-mahogany-900 focus:outline-none focus:border-saffron-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-mahogany-900 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 98765 43210"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 rounded-md bg-parchment-50 border border-gold-600/30 text-xs text-mahogany-900 focus:outline-none focus:border-saffron-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-mahogany-900 mb-1">
                WhatsApp Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="Same as mobile"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full p-3 rounded-md bg-parchment-50 border border-gold-600/30 text-xs text-mahogany-900 focus:outline-none focus:border-saffron-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-mahogany-900 mb-1">
                Aapka City / Location
              </label>
              <input
                type="text"
                placeholder="e.g. Patna, Bihar / Kolkata"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 rounded-md bg-parchment-50 border border-gold-600/30 text-xs text-mahogany-900 focus:outline-none focus:border-saffron-600"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-mahogany-900 mb-1">
                Gotra (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Kashyap, Vatsa"
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                className="w-full p-3 rounded-md bg-parchment-50 border border-gold-600/30 text-xs text-mahogany-900 focus:outline-none focus:border-saffron-600"
              />
              <p className="text-[11px] text-gold-700 italic mt-1">
                Gotra nahi pata? Koi baat nahi. Pandit ji se guidance mil sakti hai.
              </p>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-mahogany-900 mb-1">
                Vishesh Note / Requirement (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Senior citizen assistance, specific language preference, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-md bg-parchment-50 border border-gold-600/30 text-xs text-mahogany-900 focus:outline-none focus:border-saffron-600"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(4)}
              className="px-5 py-2.5 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Pichhe</span>
            </button>
            <button
              onClick={() => setStep(6)}
              className="px-6 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider flex items-center gap-2"
            >
              <span>REVIEW REQUEST</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 06: REVIEW & SUBMIT */}
      {step === 6 && (
        <div className="bg-parchment-100 p-6 sm:p-8 rounded-2xl border border-gold-600/30 shadow-paper space-y-6">
          <div>
            <h2 className="font-serif text-xl font-bold text-mahogany-900">
              06. Aapki Sewa Request Review
            </h2>
            <p className="text-xs text-terracotta-700 mt-1">
              Kripya apni jaankari check kar lein before sending to coordinator.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-parchment-200/70 border border-gold-600/30 space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-gold-600/20">
              <span className="font-bold text-mahogany-900">Selected Sewa:</span>
              <span className="font-serif font-bold text-saffron-700 text-sm">{selectedSewa.title}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-terracotta-700 block">Preferred Date:</span>
                <span className="font-semibold text-mahogany-900">{preferredDate || 'To discuss'}</span>
              </div>
              <div>
                <span className="text-terracotta-700 block">People Count:</span>
                <span className="font-semibold text-mahogany-900">{peopleCount} Person(s)</span>
              </div>
              <div>
                <span className="text-terracotta-700 block">Customer Name:</span>
                <span className="font-semibold text-mahogany-900">{customerName || 'Not filled'}</span>
              </div>
              <div>
                <span className="text-terracotta-700 block">Mobile:</span>
                <span className="font-semibold text-mahogany-900">{mobile || 'Not filled'}</span>
              </div>
              <div>
                <span className="text-terracotta-700 block">City:</span>
                <span className="font-semibold text-mahogany-900">{city || 'Not specified'}</span>
              </div>
              <div>
                <span className="text-terracotta-700 block">Gotra:</span>
                <span className="font-semibold text-mahogany-900">{gotra || 'Not specified'}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gold-600/20">
              <span className="text-terracotta-700 block mb-1">Assistance Required:</span>
              <div className="flex flex-wrap gap-1.5">
                {assistanceOptions.map((a, i) => (
                  <span key={i} className="px-2.5 py-1 rounded bg-parchment-100 text-mahogany-800 border border-gold-600/20 text-[11px]">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <button
              onClick={() => setStep(5)}
              className="px-5 py-2.5 rounded-md bg-parchment-200 text-mahogany-900 font-semibold text-xs border border-gold-600/30 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Pichhe</span>
            </button>
            <button
              onClick={handleSubmitRequest}
              className="px-8 py-3.5 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider shadow-heritage"
            >
              SEWA REQUEST BHEJEIN
            </button>
          </div>
        </div>
      )}

      {/* STEP 07: SUBMISSION CONFIRMATION */}
      {step === 7 && submittedRequest && (
        <div className="bg-parchment-100 p-8 rounded-2xl border border-gold-600/40 shadow-heritage text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-500/40">
            <Check className="w-8 h-8" />
          </div>

          <div>
            <div className="text-xs font-serif font-bold text-gold-700 uppercase tracking-widest mb-1">
              Request Registered Successfully
            </div>
            <h2 className="font-serif text-3xl font-bold text-mahogany-900">
              Aapki Sewa Request Mil Gayi Hai
            </h2>
            <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-mahogany-900 text-gold-400 font-mono font-bold text-sm border border-gold-500">
              Request ID: {submittedRequest.id}
            </div>
          </div>

          <p className="text-xs text-terracotta-700 max-w-md mx-auto leading-relaxed">
            Hamari team aapse mobile/WhatsApp par contact karke aapki Sewa aur Gaya Ji visit details confirm karegi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/919876543210?text=Namaste,%20my%20Sewa%20Request%20ID%20is%20${submittedRequest.id}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-emerald-700 text-white font-bold text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Par Coordinator Se Baat Karein</span>
            </a>

            <Link
              href={`/sewa-status?id=${submittedRequest.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-saffron-600 text-white font-bold text-xs"
            >
              <span>Track Request Status</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default function SewaRequestPage() {
  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="text-xs font-serif font-bold text-saffron-700 uppercase tracking-widest mb-1">
            Gaya Ji Sewa Desk
          </div>
          <h1 className="font-serif text-3xl font-bold text-mahogany-900">
            Sewa Request
          </h1>
          <p className="text-xs text-terracotta-700 mt-1">
            Main apni requirement bata raha hoon; coordinator team mujhe confirm karegi.
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-xs text-terracotta-700">Loading sewa form...</div>}>
          <SewaRequestContent />
        </Suspense>
      </div>
    </div>
  );
}
