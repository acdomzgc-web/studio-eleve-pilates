import Hero from '@/components/home/Hero'
import History from '@/components/home/History'
import Services from '@/components/home/Services'
import Benefits from '@/components/home/Benefits'
import Location from '@/components/home/Location'
import Plans from '@/components/home/Plans'
import Founder from '@/components/home/Founder'
import FAQ from '@/components/home/FAQ'
import Metrics from '@/components/home/Metrics'

export default function Index() {
  return (
    <div className="flex flex-col gap-24 pb-12">
      <Hero />
      <History />
      <Metrics />
      <Services />
      <Benefits />
      <Location />
      <Plans />
      <Founder />
      <FAQ />
    </div>
  )
}
