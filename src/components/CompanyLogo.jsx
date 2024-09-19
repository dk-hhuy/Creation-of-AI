import React from 'react'
import { yourlogo } from '../assets'
import { newLogo } from '../constants'
const CompanyLogo = ({ className }) => {
    const numberOfDuplicates = 4
  return (
    <div className={className}>
        <h5 className='tagline mb-24 text-center tex-n-1/50'>Helping people create beautiful content at </h5>
        <ul className='flex'>
            {newLogo.map((item, index) => (

                <li className='flex items-center justify-center flex-1 h-[5.5rem]' key={index}>
                    <img className='rounded-full' src={item} width={134} height={28} alt={item} />
                </li>

            ))}
            
        </ul>
    </div>
  )
}

export default CompanyLogo