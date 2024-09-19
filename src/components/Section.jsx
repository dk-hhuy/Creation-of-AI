import SectionSvg from '../assets/svg/SectionSvg'
import React from 'react'
const Section = ({ className, id, crosses, crossesOffset, customPaddings, children }) => {
  return (
    <div 
        id={id}
        className={`relative ${customPaddings || 
            `py-10  ${crosses ? 'lg:py-32 xl:py-30' : '' } 
            ${className || ''}`}`}
    
    >
        {children}
        
        <div className='hidden absolute top-0 left-5 w-0.25 h-full pointer-events-none md:block lg:left-7.5 xl:left-10' />
        <div className='hidden absolute top-0 left-5 w-0.25 h-full pointer-events-none md:block lg:right-7.5 xl:right-10' />

        {crosses && (
            <>
                <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 
                    ${crossesOffset && crossesOffset} 
                    pointer-events-none lg:block xl:left-10 right-10`} />

                
                <SectionSvg crossesOffset={crossesOffset}/>
            </>
        )}

        
    </div>
  )
}

export default Section