'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const chapters = [
  {
    num: '01',
    location: 'Titlagarh, Odisha',
    title: 'A small town and a lot of free time',
    body: "Titlagarh is small. The kind of small where everyone knows everyone, where you make your own entertainment, and where the sky is genuinely very big. I didn't think of it as a \"humble beginning\" or whatever — it was just home. Looking back, growing up somewhere unhurried probably did something good to my brain. Or at least that's what I tell myself.",
  },
  {
    num: '02',
    location: 'Bhubaneswar',
    title: 'The city, and Sai International School',
    body: "Moving to Bhubaneswar at 9 was the first time I realised the world was much bigger than I thought. More people, more things happening, more to be curious about. I joined Sai International School. I was not the star student. I was the one at the back who had questions that the textbook hadn't covered.",
  },
  {
    num: '03',
    location: 'Boarding School',
    title: 'Where I learned things school doesn\'t teach',
    body: "Boarding school is its own education. Not in a motivational-poster way — in a genuinely practical way. You learn to share space, handle losing (at sports, at arguments, at card games), figure out how to get along with people you didn't choose to live with. Some of my best memories are from here. Some of my most embarrassing ones too.",
  },
  {
    num: '04',
    location: 'Class XI, back in Bhubaneswar',
    title: 'When economics started making sense',
    body: "Something clicked in Class 11 when I started actually reading about economics — not the textbook version, but the how-does-the-world-actually-work version. Why do prices move? What are incentives really doing? Why did some countries get rich and others didn't? I started reading a lot more than was required. It didn't feel like studying. It felt like finding an interesting rabbit hole.",
  },
  {
    num: '05',
    location: 'Delhi University',
    title: 'Hansraj, CA, CFA, and figuring things out',
    body: "Delhi is a lot. The city itself is an education — in ambition, noise, scale, and street food. Hansraj is good. CA is hard (anyone who says otherwise is lying or exceptional). CFA is also hard. I am doing both simultaneously, which was either brave or badly planned. Possibly both. Delhi has also introduced me to some extremely good chaat places.",
  },
  {
    num: '06',
    location: 'Somewhere between here and there',
    title: 'Currently figuring it out',
    body: "I don't have a clean five-year plan. I have a lot of interests, some questions I can't stop thinking about, and a growing conviction that the most interesting things happen at the intersection of fields. I want to understand Indian capital markets properly, think about what AI does to financial services, and probably start something at some point. Or not. We'll see. This page will update.",
  },
]

export function StorySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="story" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>How I got here</SectionLabel>
        <SectionTitle>
          Six chapters.
          <br />
          Click to read.
        </SectionTitle>
      </FadeIn>

      <div className="mt-10 flex flex-col">
        {chapters.map((ch, i) => (
          <FadeIn key={ch.num} delay={i * 50}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left grid grid-cols-[72px_1fr] gap-8 py-8 border-b border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.1)] group transition-all duration-300"
              aria-expanded={openIndex === i}
            >
              <span
                className={`font-serif font-black text-[3.5rem] leading-none transition-colors duration-300 ${
                  openIndex === i
                    ? 'text-[#c9a84c]'
                    : 'text-[rgba(255,255,255,0.07)] group-hover:text-[rgba(255,255,255,0.14)]'
                }`}
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {ch.num}
              </span>
              <div className="flex flex-col justify-center">
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#c9a84c] mb-1.5">
                  {ch.location}
                </div>
                <div className="text-xl font-semibold text-[#f0ede8] mb-3">{ch.title}</div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#8a8690] text-[0.92rem] leading-[1.85] pb-2">{ch.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div
                  className={`h-px mt-4 transition-all duration-300 ${
                    openIndex === i
                      ? 'w-9 bg-[#c9a84c]'
                      : 'w-4 bg-[rgba(255,255,255,0.1)] group-hover:w-7'
                  }`}
                />
              </div>
            </button>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
