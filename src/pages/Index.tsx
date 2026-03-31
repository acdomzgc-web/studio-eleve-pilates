import { Hero } from '@/components/home/Hero'
import { History } from '@/components/home/History'
import { Methodology } from '@/components/home/Methodology'
import { Founder } from '@/components/home/Founder'
import { Location } from '@/components/home/Location'
import { InstagramGallery } from '@/components/home/InstagramGallery'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <History />
      <Methodology />
      <Founder />
      <Location />
      <InstagramGallery />
    </div>
  )
}
