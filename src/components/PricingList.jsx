import React from 'react'
import { pricing } from '../constants'
import  Button  from './Button'
import { check } from '../assets'
import { arrow } from '../assets'
import { motion } from 'framer-motion'
const PricingList = () => {

    const moveUp = {
        hidden: { opacity: 0, y: 150 },
        visible: { opacity: 1, y: 0 }
    }
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
        {pricing.map((item) => (
            <motion.div variants={moveUp} initial='hidden' whileInView='visible' transition={{ duration: 3 }} key={item.id} className="bg-[url('../src/assets/arrow.png')] bg-cover bg-center w-[19rem] max-lg:w-full h-auto px-6 bg-n-8 border 
                border-n-6 rounded-[2rem] lg:w-auto flex flex-col items-center justify-center [&>div>h4]:first:text-color-2 [&>div>h4]:last:text-color-3">
                <div className="flex flex-col items-center justify-center ">
                    <h4 className='h4 my-4'>
                        {item.title}
                    </h4>

                    <p className='text-center body-2 min-h-[4rem] mb-3 text-black'>{item.description}</p>
                </div>
                <div className={`flex items-center ${item.price ? 'bg-indigo-400' : ''} p-3 h-[5.5rem] mt-24 ${item.price ? 'border rounded-full' : ''}`}>
                    {item.price && (
                        <>
                            <div className='h4'>$</div>
                            <div className='text-[2.5rem] leading-none font-bold'>{item.price}</div>
                        </>
                    )}
                </div>

                
                <ul className='mt-9'>
                    {item.features.map((feature, index) => (
                        <li key={index} className='flex items-start py-5 border-t border-n-6'>
                            <img src={check} width={24} height={24} alt='check' />
                            <p className='body-2 ml-4'>{feature}</p>
                        </li>
                    ))}
                </ul>

                <Button className='w-full mb-6' 
                    href={item.price ? '/pricing' : 'mailto:huy.le1297@gmail.com'}
                    white={!!item.price}
                >
                    {item.price ? 'Get started' : 'Contact us'}
                </Button>
            </motion.div>
        ))}
    </div>
  )
}

export default PricingList