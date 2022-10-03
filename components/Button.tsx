import React from 'react'

type AppProps = {
  children: any;
  version: string;
}

const Button = ({children, version}: AppProps) => {
  const buttonCheck = () => {
    switch(version) {
      case 'one':
      return <button className='flex flex-row justify-center items-center px-4 py-3 rounded-[50px] text-white bg-primaryAccent dark:bg-dm-accent dark:text-black'>{children}</button>
      case 'two':
      return <button className='flex flex-row justify-center items-center px-4 py-3 rounded-[50px] text-white bg-[#111928] dark:bg-white dark:text-black'>{children}</button>
      case 'three':
      return <button className='flex flex-row justify-center items-center px-4 py-3 rounded-[50px] text-black bg-white outline outline-1 outline-black dark:bg-dm-accent'>{children}</button>
    }
  }
  return (
    <>
      {buttonCheck()}
    </>
  )
}

export default Button