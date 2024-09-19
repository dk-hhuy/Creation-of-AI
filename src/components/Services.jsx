import Section from './Section'
import Heading from './Heading'
import { service1, service2, service3, check } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import Generating from './Generating'
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from './design/Services'
import { motion } from 'framer-motion'

const Services = () => {
    const itemVariants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
      }
    const moveVariants = {
        hidden: { opacity: 0, scale: 2, rotate: 360, x: -60},
        visible: { opacity: 1, scale: 1, rotate: 0, x: 0 },
    }
    const listVariants = {
        hidden: { scale: 0, y: 0 },
        visible: { scale: 1, y: 0 },
    }
      
    const itemLeft = {
        hidden: { opacity: 0, x: -70 },
        visible: { opacity: 1, x: 0 }
    }
  return (
    <Section id='how-to-use'>
        <div className='container'>
            <Heading className='text-center' title='Generative AI made for creators' text='Brainwave unlocks the potential of AI-powered applications' />

            <div className='relative'>
                <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 
                    border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                    <div className='absolute top-0 left-0 w-full h-full 
                        pointer-events-none md:w-3/5 xl:w-auto'>
                        <img className='w-full h-full object-cover md:object-right opacity-60' 
                            width={800} height={730} src={service1} alt='Smart AI' />
                    </div>
                    
                    <div className='relative z-1 max-w-[17rem] ml-auto'>
                        <motion.h4 variants={listVariants} initial='hidden' whileInView='visible' transition={{ duration: 2 }} className='h4 mb-4'>Smartest AI</motion.h4>
                        <p className='body-2 mb-[3rem] text-n-3'>Brainwave unlocks the potential of AI-powered applications</p>
                        <motion.ul className='body-2'>
                            {brainwaveServices.map((item, index) => (
                                <motion.li variants={itemVariants} initial="hidden" whileInView="visible" transition={{ delay: index * 0.7 }} key={index} className='flex items-start py-4 border-t border-n-6'>
                                    <img src={check} width={24} height={24} />
                                    <p className='ml-4'>{item}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                    <Generating className='absolute left-4 bottom-4 w-[20rem] border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2' title='AI is generating...' />
                </div>

                <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
                        
                        <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
                            <div className='absolute inset-0'>
                                <motion.img variants={listVariants} initial='hidden' whileInView='visible' transition={{ ease: 'easeOut', duration: 2}} src={service2} className='h-full w-full object-cover' 
                                    width={630} height={750} alt='robot' />
                            </div>

                            <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b 
                                from-n-8/0 to-n-8/90 lg:p-15'>
                                <motion.h4 variants={itemLeft} initial='hidden' whileInView='visible' transition={{ duration: 2 }} className='h4 mb-4'>Photo editing</motion.h4>
                                <motion.p variants={itemLeft} initial='hidden' whileInView='visible' transition={{ duration: 2, delay: 0.5 }} className='body-2 mb-[5rem] text-n-3'>Automatically enhance your photos 
                                    using our AI app's photo editing feature. Try it now!

                                </motion.p>
                                
                            </div>
                            <PhotoChatMessage />
                        </div>

                        <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]'>
                            <div className='py-12 px-4 xl:px-8'>
                                <h4 className='h4 mb-4'>
                                    Video generation
                                </h4>
                                <p className='body-2 mb-[2rem] text-n-3'>
                                    The world’s most powerful AI photo and video art generation engine. What will you create?
                                </p>
                                <ul className='flex items-center justify-between'>
                                    {brainwaveServicesIcons.map((item, index) => (
                                        <motion.li variants={moveVariants} initial='hidden' whileInView='visible' transition={{  delay: index * 0.5 }} key={index} className={`rounded-2xl flex items-center justify-center 
                                            ${index === 2 ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]' 
                                            : 'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'}`}>
                                            
                                            <div className={index === 2 ? 
                                                'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]' : 
                                                '' }>
                                                <img src={item} width={24} height={24} alt={item} />
                                            </div>

                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
                                    <motion.img variants={itemVariants} initial='hidden' whileInView='visible' transition={{ duration: 2 }} src={service3} className='w-full h-full object-cover' width={520} height={400} alt='Srobot' />
                                    <VideoChatMessage className='absolute' />
                                    <VideoBar className='absolute' />
                            </div>

                        </div>

                </div>

                <Gradient />
            </div>
        </div>

    </Section>
  )
}

export default Services