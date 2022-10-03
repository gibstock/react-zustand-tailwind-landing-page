import React from 'react'
import SearchBox from './SearchBox'
import { useModalStore } from '../store/store'
const Modal = () => {
  const toggleModalState = useModalStore(state => state.toggleModalState)
  return (
    <>
      <div className='absolute h-screen w-full bg-white opacity-60' onClick={toggleModalState}>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[480px] h-[72px] bg-black text-white rounded-lg shadow-[8px_16px_64px_rgba(0,0,0,0.24)]'>
        <SearchBox placeholder='Email' />
      </div>
    </>
  )
}

export default Modal