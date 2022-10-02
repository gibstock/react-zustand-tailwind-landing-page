import {GiSun} from 'react-icons/gi'

const DarkMode = () => {
  return (
    <div className='cursor-pointer'>
      <svg width='0' height='0'>
        <linearGradient id='sun-gradient' x1='75%' y1='50%' x2='0%' y2='0%'>
          <stop stopColor='hsl(54, 100%, 58%)' offset="0%" />
          <stop stopColor='hsl(34,100%,58%)' offset="50%" />
          <stop stopColor='hsl(34,100%,29%)' offset="100%" />
        </linearGradient>

      </svg>
      <GiSun size={28} style={{ fill: "url(#sun-gradient)"}}/>
    </div>
  )
}

export default DarkMode