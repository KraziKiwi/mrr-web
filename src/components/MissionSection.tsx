'use client';

import React from 'react';
import SectionWrapper from './SectionWrapper';

interface MissionData {
  heading?: string;
  highlightText?: string;
  detailedDescription?: string;
}

export default function MissionSection({ data }: { data: MissionData }) {
  if (!data) return null;

  return (
    <SectionWrapper id="mission" className="bg-zinc-900/50 backdrop-blur-sm">
      <div className="max-w-4xl text-center space-y-8 px-4">
        {data.heading && (
          <h2 className="text-mrr-white uppercase tracking-[0.4em] text-sm font-logo font-bold">
            {data.heading}
          </h2>
        )}

        {data.highlightText && (
          <p className="text-3xl md:text-5xl font-logo font-semibold text-white leading-tight tracking-wide uppercase">
            {data.highlightText}
          </p>
        )}

        <div className="w-20 h-1 bg-mrr-white mx-auto" />

        {data.detailedDescription && (
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed whitespace-pre-line">
            {data.detailedDescription}
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
