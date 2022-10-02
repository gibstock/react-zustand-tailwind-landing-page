import type { NextPage } from 'next'
import TopNav from '../components/TopNav'
import HeroText from '../components/HeroText'
import CTA from '../components/CTA'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-2">
      <TopNav />
      <HeroText />
      <CTA />
    </div>
  )
}

export default Home
