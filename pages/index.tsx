import type { NextPage } from 'next'
import TopNav from '../components/TopNav'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-2">
      <TopNav />
    </div>
  )
}

export default Home
