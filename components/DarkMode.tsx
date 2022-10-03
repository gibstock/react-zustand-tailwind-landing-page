import {GiSun, GiMoonBats} from 'react-icons/gi'
import { useDarkModeStore } from '../store/store'

const DarkMode = () => {
  const dark = useDarkModeStore(state => state.dark)
  const darkModeToggle = useDarkModeStore(state => state.toggleDarkMode)
  return (
    <div className='cursor-pointer' title={dark? 'light mode' : 'dark mode'} onClick={darkModeToggle}>
      {!dark? (
        <>
          <svg width='0' height='0'>
            <linearGradient id='sun-gradient' x1='75%' y1='50%' x2='0%' y2='0%'>
              <stop stopColor='hsl(54, 100%, 58%)' offset="0%" />
              <stop stopColor='hsl(34,100%,58%)' offset="50%" />
              <stop stopColor='hsl(34,100%,29%)' offset="100%" />
            </linearGradient>
    
          </svg>
          <GiSun size={28} style={{ fill: "url(#sun-gradient)"}}/>
        </>
      ) : (
        <GiMoonBats size={28} color='hsl(57, 80%, 90%)' />
      )}
    </div>
  )
}

export default DarkMode