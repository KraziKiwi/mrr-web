'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FAQAccordion({ faqs = [], settings }: { faqs?: any[], settings?: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const defaultFaqs = [
    { question: 'Do I need a designer or architect?', answer: 'You\'ll need plans before we build. If you don\'t have a designer yet, we can put you in touch with trusted local designers and architects we work with. We\'re also happy to build from plans you\'ve already had drawn.' },
    { question: 'Do I need council approval?', answer: 'Yes, for most structural work. We handle the entire approval process through the local shire on your behalf.' },
    { question: 'Do you use subcontractors?', answer: 'We have our own in-house carpentry and bricklaying teams to ensure quality. For specialized trades like plumbing and electrical, we use trusted local partners.' },
    { question: 'How much does it cost?', answer: 'Every project is unique. We provide detailed, transparent quotes upfront so there are no surprises during the build.' },
    { question: 'Which areas do you cover?', answer: 'We build across the Perth Metro area (focusing on Southern and Western suburbs) and down through the South West to Augusta.' }
  ]

  const displayData = faqs?.length > 0 ? faqs : defaultFaqs
  const faqSubheading = settings?.faqSubheading || "Questions"
  const faqHeading = settings?.faqHeading || "Common Questions"

  return (
    <section className="py-24 text-white relative z-10">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-[#f39200] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">{faqSubheading}</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest">
            {faqHeading}
          </h2>
          <div className="w-20 h-1 bg-[#f39200] mt-6"></div>
        </motion.div>

        <div className="space-y-2 border-t border-white/10 pt-4">
          {displayData.map((faq: any, idx: number) => {
            const isOpen = openIndex === idx

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-[#f39200] transition-colors group"
                >
                  <span className="text-lg md:text-xl font-light pr-8">{faq.question}</span>
                  <span className="text-[#f39200] flex-shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 font-light leading-relaxed pb-8 pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
