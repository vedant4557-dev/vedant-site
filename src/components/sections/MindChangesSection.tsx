import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const changes = [
  {
    before: 'Finance careers = just earning money',
    after: 'Capital allocation is one of the most consequential things that happens in an economy',
  },
  {
    before: 'Startups are about great ideas',
    after: 'Startups are mostly about execution, timing, and who you\'re building with',
  },
  {
    before: 'Economic policy is mostly rational',
    after: 'Politics constrains economics constantly. The gap between good policy and doable policy is large.',
  },
  {
    before: 'More data = better decisions',
    after: 'Knowing which data matters is the actual skill. More data often creates more noise.',
  },
  {
    before: 'Small towns are where ambition goes to die',
    after: 'They teach you something that cities can\'t. I\'m still figuring out exactly what.',
  },
]

export function MindChangesSection() {
  return (
    <section id="mindchanges" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Intellectual honesty corner</SectionLabel>
        <SectionTitle>
          Things I changed
          <br />
          my mind about.
        </SectionTitle>
        <p className="text-[#8a8690] max-w-md">
          Being wrong and updating is fine. More people should publish their old beliefs.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mt-10 flex flex-col">
          {changes.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-baseline py-6 border-b border-[rgba(255,255,255,0.06)]"
            >
              <div
                className="text-[0.9rem] text-[#8a8690] line-through"
                style={{ textDecorationColor: 'rgba(255,107,107,0.35)' }}
              >
                {item.before}
              </div>
              <div className="text-[#c9a84c] text-lg hidden md:block">→</div>
              <div className="text-[0.9rem] text-[#f0ede8]">
                <span className="md:hidden text-[#c9a84c] mr-2">→</span>
                {item.after}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
