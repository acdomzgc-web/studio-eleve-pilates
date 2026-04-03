import { Hero } from '@/components/home/Hero'
import { History } from '@/components/home/History'
import { Methodology } from '@/components/home/Methodology'
import { Benefits } from '@/components/home/Benefits'
import { Services } from '@/components/home/Services'
import { Founder } from '@/components/home/Founder'
import { Plans } from '@/components/home/Plans'
import { Location } from '@/components/home/Location'
import { InstagramGallery } from '@/components/home/InstagramGallery'
import { FAQ } from '@/components/home/FAQ'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <History />
      <Methodology />
      <Benefits />
      <Services />
      <Founder />
      <Plans />
      <Location />
      <InstagramGallery />
      <FAQ />
    </div>
  )
}
