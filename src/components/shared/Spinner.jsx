import React from 'react'
// import {Audio} from 'react-loader-spinner'
import {SpinnerDotted} from 'spinners-react'

const Spinner = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-800'>
      <SpinnerDotted size={90} thickness={100} speed={100} color='yellow' />
    </div>
  )
}

export default Spinner
