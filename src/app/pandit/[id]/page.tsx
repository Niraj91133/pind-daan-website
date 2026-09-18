'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { VERIFIED_PANDITS } from '@/lib/data/panditsData';
import { ShieldCheck, Phone, Award, Languages, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PanditProfilePage() {
  const params = useParams();
  const id = params.id as string;

  const pandit = VERIFIED_PANDITS.find(p => p.id === id) || VERIFIED_PANDITS[0];

  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Profile Card Header */}
        <div className="bg-parchment-200/80 rounded-2xl overflow-hidden border border-gold-600/40 shadow-heritage">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            <div className="md:col-span-5 relative h-72 md:h-full bg-mahogany-950">
              <img
                src={pandit.image}
                alt={pandit.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-500/30 text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Teerth Pandit</span>
              </div>

              <div>
                <h1 className="font-serif text-3xl font-bold text-mahogany-900">
                  {pandit.name}
                </h1>
                <p className="text-xs text-gold-700 font-semibold mt-1">
                  {pandit.title}
                </p>
              </div>

              <div className="space-y-2 text-xs text-terracotta-700 border-t border-gold-600/20 pt-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-700 flex-shrink-0" />
                  <span><strong>Lineage:</strong> {pandit.lineage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-saffron-600 flex-shrink-0" />
                  <span><strong>Languages Spoken:</strong> {pandit.languages.join(', ')}</span>
                </div>
                <div>
                  <strong>Experience:</strong> {pandit.experienceYears}+ Varsh Shastriya Sewa Anubhav
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Pandit Se Baat Karein</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* About Section */}
        <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-3">
          <h2 className="font-serif text-xl font-bold text-mahogany-900">
            About Pandit Ji
          </h2>
          <p className="text-xs text-terracotta-700 leading-relaxed">
            {pandit.about}
          </p>
        </div>

        {/* How They Guide Families */}
        <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-3">
          <h2 className="font-serif text-xl font-bold text-mahogany-900">
            How They Guide Families
          </h2>
          <p className="text-xs text-terracotta-700 leading-relaxed">
            {pandit.howTheyGuide}
          </p>
        </div>

        {/* Specializations */}
        <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-3">
          <h2 className="font-serif text-xl font-bold text-mahogany-900">
            Ritual & Vidhi Specializations
          </h2>
          <div className="flex flex-wrap gap-2">
            {pandit.specializations.map((s, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-parchment-200 text-mahogany-900 text-xs font-semibold border border-gold-600/20">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Request this Pandit */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            Request {pandit.name} For Your Visit
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            Gaya Ji aane par Pandit ji ka guidance evam sankalp receive karne ke liye Sewa Request bhejein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href={`/sewa-request?pandit=${pandit.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs tracking-wider"
            >
              <span>REQUEST THIS PANDIT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
