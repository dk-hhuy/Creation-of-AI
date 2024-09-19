import React from 'react'
import { loading } from '../assets'
const Generating = ({ className, title }) => {
  return (
    <div className={`flex items-center h-[2.5rem] px-5 bg-slate-600 rounded-[1.7rem] ${className || ''} text-base`}>
        <img className='w-5 h-5 mr-4 animate-round-in'
            src={loading} alt='Loading'
            
        />
        {title}
    </div>
  )
}

export default Generating