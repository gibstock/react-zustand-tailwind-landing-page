import Logo from "./Logo"
import Nav from "./Nav"
import SearchBox from "./SearchBox"

const TopNav = () => {
  return (
    <div className="flex flex-row justify-around items-center w-full">
      <div className="logo flex flex-row items-center">
        <Logo /> Tax<span className="text-blue-800">Pal</span>
      </div>
      <Nav />
      <SearchBox />
    </div>
  )
}

export default TopNav