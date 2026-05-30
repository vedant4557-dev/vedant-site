import { FadeIn, SectionLabel } from '@/components/ui/Divider'

export function ContactSection() {
  return (
    <section id="contact" className="px-8 md:px-16 py-32 bg-[#0a0a0a] text-center">
      <FadeIn>
        <SectionLabel>Say hi</SectionLabel>
        <h2
          className="font-serif font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-5"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          I like interesting
          <br />
          conversations.
        </h2>
        <p className="text-[#8a8690] text-[0.95rem] max-w-[420px] mx-auto mb-10 leading-[1.85]">
          About economics, startups, cricket, food, ideas, cities, or anything else worth
          discussing. Low bar for reaching out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:vedant@example.com"
            className="px-6 py-3.5 bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm tracking-wide rounded-md hover:bg-[#e8d5b0] transition-colors duration-200"
          >
            Send an email →
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 border border-[rgba(255,255,255,0.08)] text-[#f0ede8] text-sm rounded-md hover:border-[rgba(255,255,255,0.2)] hover:text-[#c9a84c] transition-all duration-200"
          >
            Twitter / X
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 border border-[rgba(255,255,255,0.08)] text-[#f0ede8] text-sm rounded-md hover:border-[rgba(255,255,255,0.2)] hover:text-[#c9a84c] transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://read.cv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 border border-[rgba(255,255,255,0.08)] text-[#f0ede8] text-sm rounded-md hover:border-[rgba(255,255,255,0.2)] hover:text-[#c9a84c] transition-all duration-200"
          >
            Read.cv
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
