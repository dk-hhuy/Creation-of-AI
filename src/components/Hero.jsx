import Button from './Button'
import Section from './Section'
import { Rings, SideLines } from './design/Header'
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero'
import { heroBackground } from '../assets'
import { curve } from '../assets'
import { heroIcons } from '../constants'
import { ScrollParallax } from 'react-just-parallax'
import { useRef } from 'react'
import Generating from './Generating'
import Notification from './Notification'
import CompanyLogo from './CompanyLogo'
import { motion } from "framer-motion"
import Talk from './Talk'
import React, { useState, useEffect } from 'react'
import { robot1, robot2, robot3 } from '../assets'
const Hero = () => {
  const parallaxRef = useRef(null)
  const [changeSrc, setChangeSrc] = useState(robot1) 
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
  
    }
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChangeSrc(robot1);
      } 
      else if (window.innerWidth >= 768) {
        setChangeSrc(robot2)
      }
    };

    
    window.addEventListener('resize', handleResize);
    
    
    handleResize();
    
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Section 
      className='pt-[12rem] -mt-[5.25]' 
      crosses 
      crossesOffset='lg:translate-y-[5.25rem]'
      id='hero'
    >
      <div className='container relative' ref={parallaxRef}>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-6 lg:mb:[6rem]'>
          <h1 className='h1 mb-6'>
            Explore the Possibilities of&nbsp;AI&nbsp; Chatting with {" "}
            <span className='inline-block relative'> Brainwave 
              <img src={curve}
                className='absolute top-full left-0 w-full xl:-mt-2' 
                width={624} height={28} 
                alt="Curve"
              />
            </span>
          </h1>
          <p className='z-1 body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
          <Button href='/pricing' black>
              Get started
          </Button>
          
          <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 py-12'>
            <div className='flex w-full md:items-center md:justify-center'>
              <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient md:max-w-lg md:m-5 xl:mt-5'>
                  <ScrollParallax isAbsolutelyPositioned>
                          <ul className='animate-moving hidden absolute -left-[21rem] bottom-[30rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex'>
                                {heroIcons.map((item, index) => (
                                  <li className='p-5' key={index}>
                                      <img src={item} alt={item} />
                                  </li>
                                ))}
                                 
                          </ul>
                  </ScrollParallax>
                 
                    <div className='relative bg-n-8 rounded-[1rem]'>
                      <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
                      <div className='flex flex-col items-center justify-center aspect-[31/40] md:aspect-[100/120] rounded-b-[0.9rem] overflow-hidden'>
                        <img 
                          src={changeSrc} 
                          className='w-full scale-[1.7] md:scale-[1]' 
                          alt='AI' 
                        />
                        <motion.div whileInView={{ y: [-100, 0], opacity: [0, 1] }} transition={{ duration: 2 }}>
                          <Talk className='relative flex items-center -mt-[176px] mx-auto boder border-neutral-500 bg-neutral-500 p-2 text-sm rounded-lg opacity-60' title='AI listens, learns, and evolves with us' />
                        </motion.div>
                      </div>
                    </div>
                  <Gradient />
              </div>
              <div className='hidden lg:block relative z-1 p-0.5 rounded-2xl bg-conic-gradient md:m-5 xl:mt-5'>
                    <div className='relative bg-n-8 rounded-[1rem]'>
                      <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
                      <div className='flex flex-col items-center justify-center aspect-[31/40] md:aspect-[100/120] rounded-b-[0.9rem] overflow-hidden'>
                        <img 
                          src={robot3}
                          className='w-full scale-[1.7] md:scale-[1]' 
                          alt='AI' 
                        />
                        <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} >
                          <Talk className='relative flex items-center -mt-[176px] mx-auto boder border-neutral-500 bg-neutral-500 p-2 text-sm rounded-lg opacity-60' title='AI speaks, but it’s our values that guide its voice' />
                        </motion.div>
                      </div>
                    </div>

                    <ScrollParallax isAbsolutelyPositioned>
                      <Notification className='animate-mo-ving hidden absolute -right-[25rem] bottom-[11rem] w-[21rem] xl:flex' title="Code generation" />
                    </ScrollParallax>
                    <Gradient />              
                  
              </div>
            </div>
            
              <div className='absolute -top-[2%] left-1/2  w-[200%] h-[200px] -translate-x-1/2 md:w-[150%]'>
                <img src={heroBackground} className='w-full pt-11' alt='hero' />
              </div>
              <Generating 
                className='z-1 animate-bounce relative mx-auto m-20 md:right-auto md:bottom-8 md:w-[26rem] md:-translate-x-1/2' title='AI is generating...' 
              />                  
              <BackgroundCircles />
          </div>

          <CompanyLogo className='hidden relative z-10 mt-5 lg:block' />
        </div>
      </div>
      <BottomLine />
    </Section>
  )
}

export default Hero