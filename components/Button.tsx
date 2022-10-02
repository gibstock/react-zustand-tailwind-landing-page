import React from 'react'

type AppProps = {
  children: string | unknown;
  bg: string;
  color?: string;
  outline?: string;
}

const Button = ({children, bg, color, outline}: AppProps) => {
  return (
    <button className='flex flex-row justify-center items-center px-4 py-3 rounded-[50px] text-white' style={{background: `${bg}`, color: `${color}`, outline: `${outline}`}}>{children}</button>
  )
}

export default Button