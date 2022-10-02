import {BiSearch, BiCommand} from 'react-icons/bi'

const SearchBox = () => {
  return (
    <div className="flex flex-row justify-center items-center relative">
      <input className="bg-[rgba(35,31,32,0.5)]  rounded-lg" type="text" name="search-box" id="search-box" />
      <div className="icon absolute left-2">
        <BiSearch color='rgba(255,255,255,0.6)' />
      </div>
      <div className="search-keys absolute flex flex-row items-center right-2 text-[rgba(255,255,255,0.6)] text-xs">
        <BiCommand size='12' /> + k
      </div>
    </div>
  )
}

export default SearchBox