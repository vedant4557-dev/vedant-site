import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const ideas = [
  {
    tag: 'Sports + Data',
    title: 'A cricket stats platform that actually explains what the numbers mean',
    body: 'Most cricket analytics is for people who already understand cricket deeply. There\'s a product for the middle layer — engaged fans who aren\'t analysts. Probably harder to monetise than it sounds.',
  },
  {
    tag: 'Media',
    title: 'A "what\'s actually happening in the Indian economy" newsletter for normal people',
    body: 'The gap between what\'s happening in macro and what most people understand about it is wide. Someone should close it with good writing. Not sure that someone is me yet, but maybe eventually.',
  },
  {
    tag: 'EdTech',
    title: 'Something in the CA/CFA study tools space — the existing options are bad',
    body: 'Am living this problem daily. The tools are genuinely not great. Not sure what the right solution is. But the problem is real — I can confirm from personal suffering.',
  },
  {
    tag: 'Clearly personal',
    title: 'A restaurant that serves only really good Odia food in Delhi',
    body: 'This is less of a startup idea and more of a personal wish. The cuisine deserves better representation in the capital. Would absolutely be a customer for life.',
  },
]

export function IdeasSection() {
  return (
    <section id="ideas" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>Don&apos;t take these too seriously</SectionLabel>
        <SectionTitle>
          Half-baked ideas.{' '}
          <em
            className="italic"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.55em', color: '#8a8690' }}
          >
            Some okay, some questionable.
          </em>
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="mt-8 flex flex-col">
          {ideas.map((idea, i) => (
            <div
              key={i}
              className="py-6 border-b border-[rgba(255,255,255,0.06)] group"
            >
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="text-[#f0ede8] text-[1rem] font-medium">{idea.title}</span>
                <span className="text-[10px] tracking-[0.1em] uppercase text-[#8a8690] border border-[rgba(255,255,255,0.08)] rounded-full px-2.5 py-1">
                  {idea.tag}
                </span>
              </div>
              <p className="text-[0.88rem] text-[#8a8690] leading-[1.8]">{idea.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
