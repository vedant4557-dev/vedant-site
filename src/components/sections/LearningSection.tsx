import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const items = [
  {
    text: 'How direct tax in India actually works vs how it\'s described in textbooks — the gap is larger than expected',
    status: 'CA exams',
  },
  {
    text: 'What makes an investment thesis actually rigorous, not just convincing-sounding',
    status: 'CFA prep',
  },
  {
    text: 'How Indian mutual fund distribution works — the economics behind the advisor network',
    status: 'Self-study',
  },
  {
    text: 'AI and what it actually changes in financial analysis — specifically which parts',
    status: 'Ongoing',
  },
  {
    text: 'Cooking Odia food from scratch without calling my mother for every step',
    status: 'Ambitious',
  },
]

export function LearningSection() {
  return (
    <section id="learning" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Right now</SectionLabel>
        <SectionTitle>
          Things I&apos;m currently
          <br />
          trying to understand.
        </SectionTitle>
        <p className="text-[#8a8690] max-w-md">Not credentials. Just honest work-in-progress.</p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mt-10 flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 md:gap-8 py-5 border-b border-[rgba(255,255,255,0.06)]"
            >
              <div className="text-[0.95rem] text-[#8a8690] leading-relaxed flex-1">{item.text}</div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-[#c9a84c] shrink-0">
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
