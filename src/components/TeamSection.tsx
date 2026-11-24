'use client';

import React from 'react';
import { urlFor } from '../sanity/client';
import EditBadge from './EditBadge';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  photo?: any;
  bio?: string;
}

export default function TeamSection({ members, settings, isPreview }: { members: TeamMember[], settings?: any, isPreview?: boolean }) {
  if (!members || members.length === 0) return null;

  const teamSubheading = settings?.teamSubheading || "Our Experts"
  const teamHeading = settings?.teamHeading || "Meet The Team"
  const teamImage = settings?.teamImage

  return (
    <section id="team" className="w-full max-w-6xl mx-auto px-4 py-20 space-y-16 relative z-10">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h2 className="text-[#f39200] text-sm tracking-[0.3em] font-bold uppercase mb-4 relative inline-block">
          <EditBadge id="settings" type="settings" isPreview={isPreview} />
          {teamSubheading}
        </h2>
        <p className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-widest leading-tight relative inline-block">
          {teamHeading}
        </p>
      </div>

      {/* Group Photo */}
      <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 group">
        <EditBadge id="settings" type="settings" isPreview={isPreview} />
        {teamImage ? (
          <img
            src={urlFor(teamImage, 1920, 1080).url()}
            alt="The Directors"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-logo uppercase tracking-widest text-sm bg-gradient-to-br from-zinc-800 to-zinc-950">
            TEAM GROUP PHOTO PLACEHOLDER
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Bios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8">
        {members.map((member) => (
          <div key={member._id} className="flex flex-col space-y-4 relative group">
            <EditBadge id={member._id} type="teamMember" isPreview={isPreview} />
            <div className="space-y-1">
              <h3 className="text-xl font-logo font-bold text-white uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="text-ffp-orange text-xs uppercase tracking-[0.2em] font-medium font-logo">
                {member.role}
              </p>
            </div>

            {member.bio && (
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {member.bio}
              </p>
            )}

            <div className="w-8 h-[1px] bg-ffp-orange/50 group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
