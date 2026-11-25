'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { urlFor, urlForUncropped } from '../sanity/client'
import EditBadge from './EditBadge'

export default function CredentialsGrid({ credentials = [], settings, isPreview }: { credentials?: any[], settings?: any, isPreview?: boolean }) {
  const defaultCreds = [
    { title: 'APPROVED AA', description: 'Roadservice & Recovery Contractor' },
    { title: 'NZTA', description: 'Authorised WoF Inspector' },
    { title: 'PUBLIC LIABILITY', description: '$[x]m cover on every site.' },
    { title: 'MTA', description: 'Assured Repairer' },
    { title: 'NZBN', description: 'Registered Business in New Zealand' },
    { title: '', description: '' }
  ]

  const displayData = credentials?.length > 0 ? credentials : defaultCreds
  const credentialsHeading = settings?.credentialsHeading || "Licensed, Insured, Accountable"

  return (
    <section className="py-20 text-white relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-widest">
            {credentialsHeading}
          </h2>
          <div className="w-20 h-1 bg-mrr-white mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
          {displayData.map((cred: any, idx: number) => (
            <motion.div
              key={cred._id || idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border-b border-r border-white/10 hover:bg-white/[0.02] transition-colors relative group"
            >
              <EditBadge id={cred._id} type="credential" isPreview={isPreview} />

              <h3 className="text-sm font-heading font-semibold mb-6 tracking-[0.2em] uppercase text-gray-200">
                {cred.title}
              </h3>

              {cred.image && (
                <div className="mb-4">
                  <img
                    src={urlForUncropped(cred.image).url()}
                    alt={`${cred.title} Logo`}
                    className="max-h-20 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity rounded-lg overflow-hidden"
                  />
                </div>
              )}

              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {cred.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
