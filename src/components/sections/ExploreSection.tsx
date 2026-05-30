import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const cells = [
  {
    title: '🍳 Cooking',
    text: "I grew up eating Odia food — pakhala, dalma, macha besara — and I've been slowly learning to actually cook it rather than just eat it. Travelling changes what I try to make. Every city has something worth bringing home. I once spent three days reconstructing a dish from a street stall in Ahmedabad. Mostly got it right. Probably.",
  },
  {
    title: '🗺️ Finding places',
    text: "I'm interested in the places that don't show up on itineraries. The chai stall that locals actually go to. The lane without a sign. Delhi has about forty layers of this and I'm still finding them. I've also gotten very good at the specific art of asking rickshaw drivers where they eat lunch.",
  },
  {
    title: '🎮 FC / FIFA confession',
    text: "I play a lot of FC. More than I probably should admit here. I genuinely analyse my squad, think about formation theory, track player form across seasons. The same part of my brain that finds economics interesting finds squad-building interesting. Whether this is a feature or a bug, I'm not sure.",
  },
  {
    title: '💬 Conversations I like',
    text: "My ideal evening: strong chai, a few people, and a conversation that starts with one thing and ends up somewhere no one expected. I like conversations that move. Economics to cricket to city planning to food recommendations. The best ones always end with someone saying \"wait, how is it midnight already.\"",
  },
]

export function ExploreSection() {
  return (
    <section id="explore" className="px-8 md:px-16 py-28 bg-[#111114]">
      <FadeIn>
        <SectionLabel>Other things I care about</SectionLabel>
        <SectionTitle>
          Food, travel,
          <br />
          and long conversations.
        </SectionTitle>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="mt-8 grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
          {cells.map((cell) => (
            <div
              key={cell.title}
              className="bg-[#111114] hover:bg-[#1a1a1f] transition-colors duration-300 p-8 md:p-10"
            >
              <h3
                className="font-serif text-2xl mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {cell.title}
              </h3>
              <p className="text-[0.9rem] text-[#8a8690] leading-[1.85]">{cell.text}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
