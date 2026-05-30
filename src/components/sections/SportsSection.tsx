import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const sports = [
  { icon: '🏏', name: 'Cricket', note: 'Favourite sport to watch and play. Has taught me more about patience than anything else.' },
  { icon: '🏓', name: 'Table Tennis', note: 'Very fast, very fun. Will challenge basically anyone. Have lost to people much shorter than me.' },
  { icon: '🏀', name: 'Basketball', note: 'Best team sport for understanding how five people either flow together or completely fall apart.' },
  { icon: '🎾', name: 'Lawn Tennis', note: 'Started playing more recently. It\'s basically a game of managing your own frustration.' },
  { icon: '⚽', name: 'Football / FC', note: 'Both on a real pitch and on PlayStation. The PlayStation version gets more hours, honestly.' },
  { icon: '🏸', name: 'Pickleball', note: 'Newest addition. People think it\'s not serious. They\'re wrong. The strategy is real.' },
]

const obsessions = [
  { word: 'Competition', desc: 'Losing taught me more than winning ever did' },
  { word: 'Resilience', desc: 'The game isn\'t over until it\'s actually over' },
  { word: 'Teamwork', desc: 'Your ceiling rises when others rise with you' },
  { word: 'Humility', desc: 'Sport dishes it out whether you want it or not' },
]

export function SportsSection() {
  return (
    <section id="sports" className="px-8 md:px-16 py-28 bg-[#0a0a0a]">
      <FadeIn>
        <SectionLabel>Sports</SectionLabel>
        <SectionTitle>
          I play a lot
          <br />
          of sports.
        </SectionTitle>
        <p className="text-[#8a8690] max-w-xl mb-10">
          Competition teaches things that books don&apos;t. Also I just enjoy it a lot. The results are mixed.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
          {sports.map((s) => (
            <div
              key={s.name}
              className="bg-[#0a0a0a] hover:bg-[#111114] transition-colors duration-300 p-8"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="font-semibold text-[#f0ede8] mb-2">{s.name}</div>
              <div className="text-sm text-[#8a8690] leading-relaxed">{s.note}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Honest confession box */}
      <FadeIn delay={180}>
        <div className="mt-8 p-6 border border-[rgba(255,107,107,0.18)] rounded-xl bg-[rgba(255,107,107,0.03)]">
          <div className="text-[10px] tracking-[0.15em] uppercase text-[#ff6b6b] mb-3">
            Honest confession
          </div>
          <p className="text-[#8a8690] text-[0.9rem] leading-[1.85]">
            I have lost at table tennis to people I definitely should have beaten. I have raged
            (quietly) at FC when my 4-3-3 fell apart in the 89th minute to a counter I absolutely
            saw coming. I have been dismissed for a single in cricket after convincing myself I was
            set. Sport is humbling. I keep coming back.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={240}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {obsessions.map((item) => (
            <div
              key={item.word}
              className="p-5 border border-[rgba(255,255,255,0.06)] rounded-lg text-center hover:border-[rgba(201,168,76,0.2)] transition-colors duration-300"
            >
              <div
                className="font-serif font-bold text-xl text-[#c9a84c] mb-2"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {item.word}
              </div>
              <div className="text-xs text-[#8a8690] leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
