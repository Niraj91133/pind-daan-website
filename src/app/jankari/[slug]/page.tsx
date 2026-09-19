'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ARTICLES } from '@/lib/data/jankariData';
import { BookOpen, Clock, CheckCircle2, Phone, ArrowRight, HelpCircle } from 'lucide-react';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const article = ARTICLES.find(a => a.slug === slug) || ARTICLES[0];

  return (
    <div className="min-h-screen bg-parchment-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Article Title */}
        <div className="bg-parchment-200/80 p-8 rounded-2xl border border-gold-600/40 shadow-paper space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-saffron-50 text-saffron-800 border border-saffron-600/20">
              {article.category}
            </span>
            <span className="text-xs text-terracotta-700 font-medium">{article.readTime}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-mahogany-900 leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Short Answer */}
        <div className="bg-gold-50 p-6 rounded-xl border border-gold-600/30 space-y-2">
          <div className="text-xs font-serif font-bold text-gold-800 uppercase tracking-widest">
            Short Answer:
          </div>
          <p className="text-xs font-medium text-mahogany-900 leading-relaxed">
            {article.shortAnswer}
          </p>
        </div>

        {/* Quick Facts */}
        <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-3">
          <h2 className="font-serif text-lg font-bold text-mahogany-900">
            Quick Facts
          </h2>
          <div className="space-y-2">
            {article.quickFacts.map((fact, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-mahogany-900">
                <CheckCircle2 className="w-4 h-4 text-saffron-600 flex-shrink-0 mt-0.5" />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-3">
          <h2 className="font-serif text-xl font-bold text-mahogany-900">
            Detailed Explanation
          </h2>
          <div className="text-xs text-terracotta-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>

        {/* Traditional Context */}
        <div className="bg-parchment-200/50 p-6 rounded-xl border border-gold-600/30 space-y-2">
          <h2 className="font-serif text-lg font-bold text-mahogany-900">
            Traditional Context & Scriptures
          </h2>
          <p className="text-xs text-terracotta-700 italic">
            {article.traditionalContext}
          </p>
        </div>

        {/* Common Questions */}
        <div className="bg-parchment-50 p-6 rounded-xl border border-gold-600/30 space-y-4">
          <h2 className="font-serif text-lg font-bold text-mahogany-900">
            What Families Usually Ask
          </h2>
          {article.commonQuestions.map((q, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xs font-bold text-mahogany-900 flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-saffron-600" />
                <span>{q.q}</span>
              </div>
              <div className="text-xs text-terracotta-700 pl-5 leading-relaxed">
                {q.a}
              </div>
            </div>
          ))}
        </div>

        {/* Talk to Pandit CTA */}
        <div className="p-8 rounded-2xl bg-mahogany-950 text-parchment-100 border border-gold-600/40 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-parchment-50">
            Have Questions? Talk To Teerth Pandit
          </h3>
          <p className="text-xs text-parchment-300 max-w-lg mx-auto">
            Vidhi ya Pind Daan se juda koi bhi sawaal ho toh verified Pandit ji se baat karein.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+919199342604"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>PANDIT SE BAAT KAREIN</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
