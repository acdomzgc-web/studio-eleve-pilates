import { Hero } from '@/components/home/Hero'
import { History } from '@/components/home/History'
import { Founder } from '@/components/home/Founder'
import { Methodology } from '@/components/home/Methodology'
import { InstagramGallery } from '@/components/home/InstagramGallery'
import { Location } from '@/components/home/Location'

export default function Index() {
  return (
    <div className="w-full bg-background">
      <Hero />
      <History />
      <Founder />
      <Methodology />
      <InstagramGallery />
      <Location />
    </div>
  )
}
