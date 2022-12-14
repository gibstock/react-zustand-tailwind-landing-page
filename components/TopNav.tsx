import Logo from "./Logo"
import Nav from "./Nav"
import SearchBox from "./SearchBox"
import DarkMode from "./DarkMode"
import Button from "./Button"
import { useModalStore } from '../store/store'


const TopNav = () => {
  const isModalOpen = useModalStore(state => state.isModalOpen)
  const toggleModalState = useModalStore(state => state.toggleModalState)

  return (
    <div className="flex flex-row justify-around items-center w-full dark:text-white">
      <div className="left flex flex-row items-center gap-5">
        <div className="logo flex flex-row items-center text-black dark:text-dm-accent">
          <Logo /> Tax<span className="text-blue-800 dark:text-white">Pal</span>
        </div>
        <Nav />
      </div>
      <div className="right flex flex-row items-center gap-5">
        {!isModalOpen && (
          <div  onClick={toggleModalState}>
            <SearchBox />
          </div>
        )}
        <span className="cursor-pointer hover:underline dark:text-dm-accent">
          Sign in
        </span>
        <Button version="one">Get started today</Button>
        <DarkMode />
      </div>
      
      
    </div>
  )
}

export default TopNav