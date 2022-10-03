import {BiSearch, BiCommand} from 'react-icons/bi'

const SearchBox = () => {
  return (
    <div className="flex flex-row justify-center items-center relative">
      <input className="bg-[rgba(35,31,32,0.5)] dark:bg-[rgba(120,255,247,0.5)]  rounded-lg" type="text" name="search-box" id="search-box" />
      <div className="icon absolute left-2">
        <BiSearch className='text-[rgba(255,255,255,0.6)] dark:text-dm-icons' />
      </div>
      <div className="search-keys absolute flex flex-row items-center right-2 text-[rgba(255,255,255,0.6)] text-xs">
        <BiCommand className='text-icons dark:text-dm-icons' size='12' /><span className='text-icons dark:text-dm-icons'> + k</span>
      </div>
    </div>
  )
}

export default SearchBox