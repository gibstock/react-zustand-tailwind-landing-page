import { useEffect } from 'react'
import type { NextPage } from 'next'
import TopNav from '../components/TopNav'
import HeroText from '../components/HeroText'
import CTA from '../components/CTA'
import TrustedBy from '../components/TrustedBy'
import { useDarkModeStore} from '../store/store'

const Home: NextPage = () => {
  const dark = useDarkModeStore(state => state.dark)

  useEffect(() => {
    const modalEvent = (e: any) => {
      e.preventDefault()
      if(e.ctrlKey && e.code === 'KeyK') {
        // Code to launch modal here
        alert('MODAL!')
      }
    }
    document.addEventListener('keydown', modalEvent)

    return () => document.removeEventListener('keydown', modalEvent)
  }, [])

  useEffect(() => {
    if(dark) {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-2">
      <TopNav />
      <HeroText />
      <CTA />
      <TrustedBy />
    </div>
  )
}

export default Home
