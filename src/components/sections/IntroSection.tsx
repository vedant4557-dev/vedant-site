import { FadeIn, SectionLabel, SectionTitle } from '@/components/ui/Divider'

const facts = [
  'Will challenge you to table tennis. Has lost to people he definitely shouldn\'t have.',
  'Has more startup ideas than free time. Many of them are questionable.',
  'Takes food recommendations very seriously. Doesn\'t forget a bad tip.',
  'Can spend hours discussing cricket tactics, then immediately switch to municipal bonds.',
  'Gets genuinely distracted by interesting questions. Has been late to things because of Wikipedia.',
  'FC/FIFA is not a hobby. It is a second education in decision-making under pressure.',
  'Grew up a backbencher. Still asks more questions than most front-benchers.',
]

export function IntroSection() {
  return (
    <section id="about" className="px-8 md:px-16 py-28 bg-[#111114]">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <SectionLabel>Who&apos;s this person</SectionLabel>
          <SectionTitle>A few true things about me.</SectionTitle>
          <div className="space-y-5 text-[0.97rem] text-[#8a8690] leading-[1.9]">
            <p>
              I grew up in Titlagarh, which is a small town in Odisha that most people haven&apos;t
              heard of. Moved to Bhubaneswar at 9, then boarding school, then back to Bhubaneswar
              for Class 11, and now Delhi. Each move made the world a little bigger.
            </p>
            <p>
              At Hansraj College (Delhi University), doing Commerce. Also doing CA and CFA on the
              side, because apparently one set of exams isn&apos;t enough stress. I&apos;m not entirely
              sure what I&apos;ll end up doing — and I&apos;ve made peace with that.
            </p>
            <p>
              I like long conversations more than most things. The kind that start with one topic
              and end up somewhere completely unexpected. I talk a lot. I ask a lot of questions.
              People who know me have learned to expect both.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#1e1e24]">
            <div className="text-[10px] tracking-[0.15em] uppercase text-[#c9a84c] mb-4">
              Miscellaneous true facts
            </div>
            <div className="flex flex-col divide-y divide-[rgba(255,255,255,0.06)]">
              {facts.map((fact, i) => (
                <div key={i} className="py-3 text-sm text-[#8a8690] leading-relaxed">
                  <span className="text-[#c9a84c] mr-2">→</span>
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
