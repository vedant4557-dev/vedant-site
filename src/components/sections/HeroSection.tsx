'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 60%, rgba(201,168,76,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 80% 20%, rgba(78,205,196,0.04) 0%, transparent 60%)',
        }}
      />

      <div
        className="absolute right-[-10%] top-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(201,168,76,0.12), rgba(78,205,196,0.08), rgba(240,230,211,0.04), rgba(201,168,76,0.12))',
          animation: 'orbitSpin 28s linear infinite',
          filter: 'blur(1px)',
          transform: 'translateY(-50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-7 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[11px] tracking-[0.15em] uppercase">
            Titlagarh → Bhubaneswar → Delhi → not done yet
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-black text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.03em] mb-8"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Hi, I&apos;m
          <br />
          <em className="italic text-[#c9a84c]">Vedant.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-[540px] text-lg text-[#8a8690] leading-[1.85] mb-10"
        >
          I&apos;m 21, from a small town in Odisha, currently in Delhi trying to understand
          economics, figure out how businesses work, play too much FC, and cook things that
          occasionally turn out edible.
          <br />
          <br />
          This is my corner of the internet. Pull up a chair.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-3 text-[#8a8690] text-[11px] tracking-[0.1em] uppercase"
        >
          <span
            className="w-9 h-px bg-[#8a8690]"
            style={{ animation: 'scrollPulse 2s ease-in-out infinite' }}
          />
          Have a look around
        </motion.div>
      </div>
    </section>
  )
}
