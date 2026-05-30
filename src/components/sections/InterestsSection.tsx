'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const holes = [
  {
    key: 'economics',
    label: 'Economics',
    note: 'Started with "why doesn\'t India have deeper capital markets" and somehow ended up reading about 19th century railway financing and Dutch East India Company bonds. Standard rabbit hole trajectory.',
    detail: 'Current fixation: municipal finance in Indian cities. The gap between what cities need and what they can actually raise is genuinely wild. Also: how retail investors in India are slowly changing everything.',
    threads: ['Municipal bonds in India', 'Retail investor behaviour', 'Historical financial crises', 'Public sector economics'],
  },
  {
    key: 'startups',
    label: 'Startups',
    note: 'Obsessed lately with why some startups from India become global and most don\'t. Also: business model archaeology — reading old founder interviews to understand how companies actually got built.',
    detail: 'Recent fixation: distribution as a moat. Why do some products with worse tech win? Also spending time on Indian B2B software — a massively underreported story.',
    threads: ['Startup post-mortems', 'Distribution moats', 'Indian B2B software', 'Founder decisions'],
  },
  {
    key: 'sports',
    label: 'Sports',
    note: 'Cricket analytics is genuinely underexplored — the gap between what stats exist and how decisions are actually made is interesting. Also getting deep into football tactics, accelerated by too much FC.',
    detail: 'Why some teams punch above their weight consistently. What makes a good captain. Whether pickleball is a real sport (I think yes, most people disagree).',
    threads: ['Cricket analytics', 'Football tactics', 'Team dynamics', 'Pickleball legitimacy'],
  },
  {
    key: 'technology',
    label: 'Technology',
    note: 'AI and financial services is the thing I can\'t stop thinking about. Not in a breathless "everything will change" way — more in a "what specifically changes, in what order, and who benefits" way.',
    detail: 'Also: why some tech ecosystems produce interesting companies and others don\'t. India\'s SaaS moment is genuinely interesting and still underappreciated internationally.',
    threads: ['AI in finance', 'India SaaS', 'Fintech regulation', 'Platform economics'],
  },
  {
    key: 'history',
    label: 'History',
    note: 'History is the best database. Reading about how the British Raj actually worked economically — not the political story, the economic mechanics — is extraordinary.',
    detail: 'Current thread: Asian economic history and the policy choices that explain different development trajectories. Also: financial crises, which follow surprisingly similar patterns each time.',
    threads: ['Colonial economic history', 'Asian tigers', 'Financial crises', 'Trade history'],
  },
  {
    key: 'food',
    label: 'Food',
    note: 'Odia food is criminally underrepresented in the national conversation about Indian cuisine. Pakhala, dalma, macha besara — these deserve more recognition than they currently get.',
    detail: 'Also: street food economics. The margins on good chaat are interesting. And why certain food streets survive for decades while others disappear. Delhi has both kinds.',
    threads: ['Odia cuisine', 'Street food economics', 'Regional Indian food', 'Food and travel'],
  },
  {
    key: 'cities',
    label: 'Cities',
    note: 'Why do some cities work and others don\'t? Not in a textbook way — in a "what makes a city actually feel alive and functional" way. Delhi, Bhubaneswar, and Mumbai feel completely different.',
    detail: 'Municipal finance is the unsexy answer to most urban problems. Also: why India\'s tier-2 cities are more interesting than people give them credit for.',
    threads: ['Urban economics', 'Municipal finance', 'Tier-2 India', 'City planning'],
  },
]

export function InterestsSection() {
  const [active, setActive] = useState<string>('economics')
  const activeHole = holes.find((h) => h.key === active)!

  return (
    <section id="rabbitholes" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Things that distract me</SectionLabel>
        <SectionTitle>Current rabbit holes.</SectionTitle>
        <p className="text-[#8a8690] max-w-lg mb-8">
          Topics I&apos;ve fallen into lately. Click one and see where it goes.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="flex flex-wrap gap-2.5 mb-6">
          {holes.map((hole) => (
            <button
              key={hole.key}
              onClick={() => setActive(hole.key)}
              className="px-4 py-2 rounded-full text-sm border transition-all duration-200"
              style={{
                borderColor: active === hole.key ? '#c9a84c' : 'rgba(255,255,255,0.08)',
                color: active === hole.key ? '#c9a84c' : '#8a8690',
                background: active === hole.key ? 'rgba(201,168,76,0.07)' : 'transparent',
              }}
            >
              {hole.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#1e1e24]"
          >
            <p className="text-[#8a8690] text-[0.92rem] leading-[1.85] mb-4">{activeHole.note}</p>
            <p className="text-[#8a8690] text-[0.92rem] leading-[1.85] mb-5">{activeHole.detail}</p>
            <div className="flex flex-wrap gap-2">
              {activeHole.threads.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full border border-[rgba(201,168,76,0.2)] text-[#c9a84c]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </FadeIn>
    </section>
  )
}
