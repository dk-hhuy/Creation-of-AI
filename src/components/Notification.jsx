import React from 'react'
import { notification1, notification2, notification3, notification4 } from '../assets'
const Notification = ({ className, title }) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border boder-n-1/10 rounded-2xl gap-5`}>
        
        <img src={notification1} width={62} height={62} alt='new_image' className='rounded-xl' />
        <div className='flex-1'>
            <h6 className='mb-1 font-extralight text-base text-left'>{title}</h6>
        

            <div className='flex items-center justify-between'>
                <ul className='flex -m-0.5'>
                
                    <li className='flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden '>
                        <img src={notification2} width={20} height={20} className='w-full' alt="new-image"  />
                    </li>
                    <li className='flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden '>
                        <img src={notification3} width={20} height={20} className='w-full' alt="new-image"  />
                    </li>
                    <li className='flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden '>
                        <img src={notification4} width={20} height={20} className='w-full' alt="new-image"  />
                    </li>
                </ul>
                <div className='body-2 text-n-13'>
                    1m ago
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Notification