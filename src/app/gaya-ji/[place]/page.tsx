'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { SACRED_PLACES } from '@/lib/data/gayaJiData';
import { MapPin, Clock, ArrowRight, Phone } from 'lucide-react';

export default function SacredPlaceDetailPage() {
  const params = useParams();
  const placeSlug = params.place as string;

  const place = SACRED_PLACES.find(p => p.slug === placeSlug) || SACRED_PLACES[0];

  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Place Hero */}
        <div className="bg-parchment-200/80 rounded-2xl overflow-hidden border border-gold-600/40 shadow-heritage">
          <div className="h-64 sm:h-80 relative bg-mahogany-950">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mahogany-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs text-gold-400 font-bold block uppercase tracking-widest">{place.hindiName}</span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold">{place.name}</h1>
              <p className="text-xs text-parchment-300 font-light">{place.significance}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-mahogany-900 pb-4 border-b border-gold-600/20">
              <div>
                <span className="text-terracotta-700 block">Ritual Type:</span>
                <span>{place.ritualType}</span>
              </div>
              <div>
                <span className="text-terracotta-700 block">Opening Hours:</span>
                <span>{place.timing}</span>
              </div>
              <div>
                <span className="text-terracotta-700 block">Location:</span>
                <span>{place.locationDetails}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-mahogany-900">
                Pavan Stotra & Religious Significance
              </h2>
              <p className="text-xs text-terracotta-700 leading-relaxed">
                {place.description}
              </p>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <Link
                href="/gaya-ji"
                className="text-xs font-bold text-saffron-700 hover:underline"
              >
                ← Return to Gaya Ji Guide
              </Link>
              <Link
                href={`/sewa-request?place=${place.id}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs"
              >
                <span>Plan Visit Here</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
