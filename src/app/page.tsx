import { HeroSection } from '@/components/sections/HeroSection'
import { IntroSection } from '@/components/sections/IntroSection'
import { StorySection } from '@/components/sections/StorySection'
import { InterestsSection } from '@/components/sections/InterestsSection'
import { ObsessionsSection } from '@/components/sections/ObsessionsSection'
import { MindChangesSection } from '@/components/sections/MindChangesSection'
import { SportsSection } from '@/components/sections/SportsSection'
import { LearningSection } from '@/components/sections/LearningSection'
import { IdeasSection } from '@/components/sections/IdeasSection'
import { NowSection } from '@/components/sections/NowSection'
import { ExploreSection } from '@/components/sections/ExploreSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Divider } from '@/components/ui/Divider'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <IntroSection />
      <Divider />
      <StorySection />
      <Divider />
      <InterestsSection />
      <Divider />
      <ObsessionsSection />
      <Divider />
      <MindChangesSection />
      <Divider />
      <SportsSection />
      <Divider />
      <LearningSection />
      <Divider />
      <IdeasSection />
      <Divider />
      <NowSection />
      <Divider />
      <ExploreSection />
      <Divider />
      <ContactSection />
    </>
  )
}
