import React from 'react'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center justify-around gap-5'>
      <h2>Trusted by these six companies so far</h2>
      <div className="company-list flex flex-row gap-3">
        <img className='w-20' src="/images/transistor.svg" alt="" />
        <img className='w-20'src="/images/tuple.svg" alt="" />
        <img className='w-20'src="/images/statickit.svg" alt="" />
        <img className='w-20'src="/images/mirage.svg" alt="" />
        <img className='w-20'src="/images/laravel.svg" alt="" />
        <img className='w-20'src="/images/statamic.svg" alt="" />
      </div>
    </div>
  )
}

export default TrustedBy