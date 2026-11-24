'use client';

import React, { useState } from 'react';
import { urlFor } from '../sanity/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import MissionSection from './MissionSection';
import PortfolioSection from './PortfolioSection';
import TeamSection from './TeamSection';
import SectionWrapper from './SectionWrapper';
import Navbar from './Navbar';
import ValueProps from './ValueProps';
import ServicesGrid from './ServicesGrid';
import CredentialsGrid from './CredentialsGrid';
import LocationsGrid from './LocationsGrid';
import FAQAccordion from './FAQAccordion';
import GlobalFooter from './GlobalFooter';
import WhyFutureProof from './WhyFutureProof';
import TextReveal from './TextReveal';

interface HomeClientProps {
  heroData: any;
  settings: any;
  missionData: any;
  projects: any[];
  teamMembers: any[];
  services?: any[];
  credentials?: any[];
  locations?: any[];
  faqs?: any[];
  isPreview?: boolean;
}

export default function HomeClient({ heroData, settings, missionData, projects, teamMembers, services, credentials, locations, faqs, isPreview = false }: HomeClientProps) {
  const [logoError, setLogoError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append('form-name', 'contact');

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        // Netlify forms handle FormData natively when submitted via AJAX without a specific Content-Type header
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use Sanity data if available, otherwise fallback to defaults
  const backgroundImage = heroData?.backgroundImage ? urlFor(heroData.backgroundImage, 1920, 1080).url() : "/prof logo.png";
  const logoUrl = "/FFP_Logo_Suite_orange-on-black.svg";

  const title = heroData?.title || "Future Proof";
  const subtitle = heroData?.subtitle;
  const tagline = heroData?.tagline;
  const description = heroData?.description;

  return (
    <div className="bg-black relative">
      <Navbar settings={settings} logoUrl={logoUrl} />

      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-ffp-orange z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* FIXED BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            filter: 'brightness(0.45)'
          }}
        />
        {/* Radial Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

        {/* Static Decorative Frame */}
        <div
          className="absolute inset-4 md:inset-10 border border-ffp-orange/30 pointer-events-none z-20 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1000ms' }}
        />
      </div>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden font-sans z-10">
        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center space-y-10">
          <div
            className="w-full max-w-[280px] md:max-w-xl mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            {!logoError ? (
              <img
                src={logoUrl}
                alt="Future Proof Projects Logo"
                className="w-full h-auto drop-shadow-[0_0_15px_rgba(243,146,0,0.3)]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col items-center space-y-3 group font-logo">
                <TextReveal delay={0.2}>
                  <div className="text-3xl md:text-5xl font-bold tracking-[0.4em] text-white uppercase leading-none">
                    {title}
                  </div>
                </TextReveal>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#f39200] to-transparent max-w-[95%]"></div>
                <TextReveal delay={0.3}>
                  <div className="text-lg md:text-xl font-light tracking-[0.7em] text-white uppercase opacity-80">
                    {settings?.businessName?.split(' ')[1] || "Projects"}
                  </div>
                </TextReveal>
              </div>
            )}
          </div>

          <div
            className="space-y-6 max-w-2xl px-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex flex-col space-y-2 uppercase tracking-[0.3em] font-logo">
              {subtitle && <p className="text-xl md:text-2xl font-semibold text-white">{subtitle}</p>}
              {tagline && <p className="text-[#f39200] text-sm md:text-base font-medium">{tagline}</p>}
            </div>
          </div>

        </div>
      </main>

      <ValueProps />

      <ServicesGrid services={services} settings={settings} isPreview={isPreview} />

      <PortfolioSection projects={projects} settings={settings} isPreview={isPreview} />

      <WhyFutureProof missionData={missionData} settings={settings} isPreview={isPreview} />

      <CredentialsGrid credentials={credentials} settings={settings} isPreview={isPreview} />

      <LocationsGrid locations={locations} settings={settings} isPreview={isPreview} />

      <FAQAccordion faqs={faqs} settings={settings} isPreview={isPreview} />

      <TeamSection members={teamMembers} settings={settings} isPreview={isPreview} />

      <SectionWrapper id="contact" className="bg-zinc-950 mx-5 md:mx-12">
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-12 px-6">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-[#f39200] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Contact</h2>
            <TextReveal>
              <p className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-widest">Get In Touch</p>
            </TextReveal>
            <p className="text-gray-400 font-light mt-4">Tell us a little about your project and we'll call you within one business day.</p>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">

            {/* Form Column */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-zinc-900/50 border border-white/10 p-12 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-3xl text-white font-light font-heading mb-4">Thank You</div>
                  <p className="text-gray-400 mb-8">Your message has been received. We'll be in touch shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#f39200] text-sm uppercase tracking-widest hover:text-white transition-colors">Send another message</button>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" encType="multipart/form-data" onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Full Name</label>
                    <input type="text" name="name" placeholder="Sam Taylor" required className="bg-transparent border border-white/20 focus:border-[#f39200] outline-none p-4 text-white placeholder-gray-600 transition-colors font-light text-sm" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Phone Number</label>
                    <input type="tel" name="phone" placeholder="0400 000 000" className="bg-transparent border border-white/20 focus:border-[#f39200] outline-none p-4 text-white placeholder-gray-600 transition-colors font-light text-sm" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Email Address</label>
                    <input type="email" name="email" placeholder="sam@example.com" required className="bg-transparent border border-white/20 focus:border-[#f39200] outline-none p-4 text-white placeholder-gray-600 transition-colors font-light text-sm" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Suburb or town of the build</label>
                    <input type="text" name="suburb" placeholder="Busselton" className="bg-transparent border border-white/20 focus:border-[#f39200] outline-none p-4 text-white placeholder-gray-600 transition-colors font-light text-sm" />
                  </div>

                  <div className="flex flex-col space-y-3 md:col-span-2 mt-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">What are you looking for?</label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer group border border-transparent has-[:checked]:border-[#f39200] has-[:checked]:bg-[#f39200]/5 px-4 py-2 transition-all">
                        <input type="radio" name="project_type" value="Renovations" className="accent-[#f39200] w-4 h-4 bg-zinc-900 border-white/20" />
                        <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">Renovations</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group border border-transparent has-[:checked]:border-[#f39200] has-[:checked]:bg-[#f39200]/5 px-4 py-2 transition-all">
                        <input type="radio" name="project_type" value="Additions" className="accent-[#f39200] w-4 h-4 bg-zinc-900 border-white/20" />
                        <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">Additions</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group border border-transparent has-[:checked]:border-[#f39200] has-[:checked]:bg-[#f39200]/5 px-4 py-2 transition-all">
                        <input type="radio" name="project_type" value="New Builds" className="accent-[#f39200] w-4 h-4 bg-zinc-900 border-white/20" defaultChecked />
                        <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">New Builds</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 mt-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Rough Budget</label>
                    <div className="relative">
                      <select name="budget" defaultValue="$500k - $1m" className="w-full bg-transparent border border-white/20 focus:border-[#f39200] outline-none p-4 text-gray-300 appearance-none cursor-pointer transition-colors font-light text-sm">
                        <option value="$500k - $1m" className="bg-zinc-900 text-white">$500k - $1m</option>
                        <option value="$1m - $2m" className="bg-zinc-900 text-white">$1m - $2m</option>
                        <option value="$2m+" className="bg-zinc-900 text-white">$2m+</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-xs">▼</div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 mt-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">When do you want to start?</label>
                    <div className="relative">
                      <select name="timeline" defaultValue="In 3-6 months" className="w-full bg-transparent border border-white/20 focus:border-[#f39200] outline-none p-4 text-gray-300 appearance-none cursor-pointer transition-colors font-light text-sm">
                        <option value="In 3-6 months" className="bg-zinc-900 text-white">In 3-6 months</option>
                        <option value="In 6-12 months" className="bg-zinc-900 text-white">In 6-12 months</option>
                        <option value="Just researching" className="bg-zinc-900 text-white">Just researching</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50 text-xs">▼</div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 md:col-span-2 mt-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Do you have plans?</label>
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group border border-transparent has-[:checked]:border-[#f39200] has-[:checked]:bg-[#f39200]/5 px-4 py-2 transition-all">
                        <input type="radio" name="has_plans" value="Yes" className="accent-[#f39200] w-4 h-4 bg-zinc-900 border-white/20" />
                        <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group border border-transparent has-[:checked]:border-[#f39200] has-[:checked]:bg-[#f39200]/5 px-4 py-2 transition-all">
                        <input type="radio" name="has_plans" value="Started" className="accent-[#f39200] w-4 h-4 bg-zinc-900 border-white/20" defaultChecked />
                        <span className="text-sm font-light text-white">Started</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group border border-transparent has-[:checked]:border-[#f39200] has-[:checked]:bg-[#f39200]/5 px-4 py-2 transition-all">
                        <input type="radio" name="has_plans" value="Not yet" className="accent-[#f39200] w-4 h-4 bg-zinc-900 border-white/20" />
                        <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">Not yet</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 md:col-span-2 mt-4">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Tell us about your project</label>
                    <textarea name="message" placeholder="We've got a block near the beach and want a 4 bed home that's cheap to run." rows={4} className="bg-transparent border border-white/20 focus:border-[#f39200] outline-none p-4 text-white placeholder-gray-600 transition-colors resize-none font-light text-sm" />
                  </div>

                  <div className="flex flex-col space-y-2 md:col-span-2 mt-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Plans or photos (optional)</label>
                    <div className="flex items-center w-full border border-white/20 p-2">
                       <input type="file" name="file" className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-light file:bg-white/10 file:text-white hover:file:bg-white/20 transition-colors cursor-pointer w-full" />
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="md:col-span-2 bg-[#f39200] disabled:bg-zinc-800 text-black font-bold py-5 mt-6 transition-colors hover:bg-amber-500 tracking-[0.2em] text-xs uppercase w-full">
                    {isSubmitting ? 'SENDING...' : 'GET A QUOTE'}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="lg:col-span-1 flex flex-col space-y-12 pt-4">
              <div className="flex flex-col space-y-2 border-b border-white/10 pb-8">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-2">Call</h4>
                <a href={`tel:${settings?.phone?.replace(/\s+/g, '')}`} className="text-[#f39200] font-heading text-2xl tracking-widest hover:text-white transition-colors">
                  {settings?.phone || '0499 100 711'}
                </a>
              </div>

              <div className="flex flex-col space-y-2 border-b border-white/10 pb-8">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-2">Email</h4>
                <a href={`mailto:${settings?.contactEmail}`} className="text-[#f39200] text-lg font-light tracking-wider hover:text-white transition-colors">
                  {settings?.contactEmail || 'daz@fpprojects.au'}
                </a>
              </div>

              <div className="flex flex-col space-y-4 border-b border-white/10 pb-8">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-2">What Happens Next</h4>
                <div className="flex gap-4">
                  <span className="text-[#f39200] font-heading font-bold">1.</span>
                  <p className="text-gray-300 font-light text-sm">We call you within one business day.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#f39200] font-heading font-bold">2.</span>
                  <p className="text-gray-300 font-light text-sm">We meet you on site, free of charge.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#f39200] font-heading font-bold">3.</span>
                  <p className="text-gray-300 font-light text-sm">You get your quote within <span className="text-[#f39200] font-bold">[x]</span> working days.</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#f39200] mb-2">Servicing</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  Perth's southern, western and eastern suburbs, and the South West from Mandurah to Augusta.
                </p>
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>

      <GlobalFooter settings={settings} logoUrl={logoUrl} />
    </div>
  );
}

