import React from 'react'
import Statickit from './company-svgs/Statickit'
import Transistor from './company-svgs/Transistor'
import Statamic from './company-svgs/Statamic'
import Mirage from './company-svgs/Mirage'
import Tuple from './company-svgs/Tuple'
import Laravel from './company-svgs/Laravel'

const TrustedBy = () => {
  return (
    <div className='flex flex-col items-center justify-around gap-5'>
      <h2>Trusted by these six companies so far</h2>
      <div className="company-list flex flex-row gap-3">
        <Transistor />
        <Statickit />
        <Statamic />
        <Mirage />
        <Tuple />
        <Laravel />
      </div>
    </div>
  )
}

export default TrustedBy