import { Hero } from '@/components/home/Hero'
import { Location } from '@/components/home/Location'
import { InstagramGallery } from '@/components/home/InstagramGallery'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Location />
      <InstagramGallery />
    </div>
  )
}
