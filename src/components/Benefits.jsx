import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { bgrocket } from '../assets'
const Benefits = () => {
  const [col, changeCol] = useState('grid grid-cols-2')
  const [contai, setContai] = useState('container')
  useEffect(() => {
    const handleCol = () => {
      if (window.innerWidth < 768) {
        changeCol('flex flex-wrap');
        setContai('container')
      } 
      else if (window.innerWidth >= 768) {
        changeCol('grid grid-cols-2')
        setContai('')
      }
    };

    
    window.addEventListener('resize', handleCol);
    
    
    handleCol();
    
    
    return () => window.removeEventListener('resize', handleCol);
  }, []);

  const hideItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3 },
  }
  return (
    <Section id='features'>
        <div className={`${contai} relative z-2`}>
            <Heading className='md:max-w-md lg:max-w-2xl text-center' title='Chat Smarter, Not Harder with Brainwave' />
            <div className={`${col} z-3 justify-between items-center gap-10 mb-10`}>
                {benefits.map((item) => (
                    <div className='block m-auto relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] border border-neutral-950 rounded-[110px] shadow-lg shadow-n-1' key={item.id}>
                        <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                          <h5 className='h4 mb-5 text-center'>{item.title}</h5>
                          <p className='body-2 mb-6 text-n-3 text-center'>{item.text}</p>
                          <div className='flex items-center mt-[15px]'>
                                <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                                <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Explore more</p>
                                <Arrow />
                          </div>                      
                        </div>
                        {item.light && <GradientLight />}
                        
                        <div className=' rounded-[110px] absolute inset-0.5 bg-n-8' style={{ clipPath: 'url(#benefits)'}}>
                          <div className='absolute inset-9 bottom-0 opacity-0 transition-opacity hover:opacity-20'>
                            {item.imageUrl && (
                              <img src={item.imageUrl} alt={item.title} className='w-full h-full object-cover' />
                            )}
                          </div>
                        </div>
                        <ClipPath />
                    </div>
                ))}
            </div>
            
        
        </div>
        <motion.div variants={hideItem} initial='hidden' whileInView='visible' transition={{ duration: 3 }} className='absolute z-1 top-[12%] left-1/2  w-[100%] -translate-x-1/2 md:w-[70%] opacity-20  '>
                <img src={bgrocket} className='object-cover w-full pt-11 rounded-2xl' alt='rocket' />
        </motion.div>
    </Section>
  )
}

export default Benefits