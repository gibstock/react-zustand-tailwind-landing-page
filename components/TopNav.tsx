import Logo from "./Logo"
import Nav from "./Nav"
import SearchBox from "./SearchBox"
import DarkMode from "./DarkMode"
import Button from "./Button"

const TopNav = () => {
  return (
    <div className="flex flex-row justify-around items-center w-full">
      <div className="left flex flex-row items-center gap-5">
        <div className="logo flex flex-row items-center">
          <Logo /> Tax<span className="text-blue-800">Pal</span>
        </div>
        <Nav />
      </div>
      <div className="right flex flex-row items-center gap-5">
        <SearchBox />
        <span className="cursor-pointer hover:underline">
          Sign in
        </span>
        <Button bg="#1c64f2">Get started today</Button>
        <DarkMode />
      </div>
      
      
    </div>
  )
}

export default TopNav