import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const obsessions = [
  {
    tag: 'Economics',
    title: 'Municipal finance in Indian cities',
    note: 'The gap between what cities need and what they can raise is fascinating. Why can\'t Mumbai issue bonds properly? There\'s a whole story here.',
  },
  {
    tag: 'Sports strategy',
    title: 'FC 4-3-3 pressing game',
    note: 'Spent two weeks building the perfect high-press team. It works brilliantly until someone exploits the space behind. Currently rebuilding. Again.',
  },
  {
    tag: 'Technology',
    title: 'AI in CA/audit workflows',
    note: 'Doing CA while thinking about what AI does to the profession is a strange position. The mundane tasks will go. The judgment calls won\'t. At least not yet.',
  },
  {
    tag: 'Cricket',
    title: 'Cricket analytics',
    note: 'The data that exists and how little it actually informs team selection decisions. The gap between what\'s measurable and what\'s measured is wide.',
  },
  {
    tag: 'Food',
    title: 'Why Odia cuisine is underrated',
    note: 'Trying to articulate this to non-Odia people. Pakhala. Dalma. Macha besara. These need national recognition. Working on my pitch.',
  },
  {
    tag: 'Startups',
    title: 'B2B software from India',
    note: 'The Indian B2B SaaS story is still early and still underreported. Reading everything I can find. Some very interesting things are being built quietly.',
  },
]

export function ObsessionsSection() {
  return (
    <section id="obsessions" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>This month</SectionLabel>
        <SectionTitle>
          Current obsessions.{' '}
          <em
            className="italic text-[#8a8690] not-italic"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.55em' }}
          >
            These change. Often.
          </em>
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] mt-8">
          {obsessions.map((item) => (
            <div
              key={item.title}
              className="bg-[#0a0a0a] hover:bg-[#111114] transition-colors duration-200 p-8"
            >
              <div className="text-[10px] tracking-[0.12em] uppercase text-[#c9a84c] mb-2">
                {item.tag}
              </div>
              <div className="font-semibold text-[#f0ede8] mb-3 leading-snug">{item.title}</div>
              <div className="text-sm text-[#8a8690] leading-relaxed">{item.note}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
