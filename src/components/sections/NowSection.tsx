import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const nowItems = [
  { icon: '📚', label: 'Grinding through', text: 'CA exams + CFA. Simultaneously. Please send thoughts and prayers.' },
  { icon: '📖', label: 'Reading', text: 'Economic history, startup post-mortems, and whatever interesting Substack I find' },
  { icon: '🎮', label: 'Playing', text: 'FC. Building a 4-3-3 that doesn\'t collapse under a counter. Ongoing project.' },
  { icon: '🤔', label: 'Thinking about', text: 'What AI actually changes in financial services. Specifically, the boring parts.' },
  { icon: '🍳', label: 'Attempting to cook', text: 'Odia recipes without calling home for instructions. Results: variable.' },
  { icon: '🗺️', label: 'Exploring', text: 'Delhi\'s food lanes. There are always new ones. The chai is getting better.' },
  { icon: '💭', label: 'Confused about', text: 'What I want to build eventually. Have a list of things. Still sorting.' },
  { icon: '🏏', label: 'Following', text: 'Whatever cricket series is happening. Always at least one is.' },
]

export function NowSection() {
  return (
    <section id="now" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>As of now</SectionLabel>
        <SectionTitle>
          What&apos;s on
          <br />
          right now.
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {nowItems.map((item) => (
            <div
              key={item.label}
              className="bg-[#1e1e24] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-[#c9a84c] mb-1.5">
                {item.label}
              </div>
              <div className="text-sm text-[#8a8690] leading-relaxed">{item.text}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
