import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {
   return (
      <motion.div initial={{ opacity: 0.5, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.5 }} className='fixed top-0 left-0 w-full z-50 border-b backdrop-blur-3xl bg-[#f4f3ef86]'>
         <div className="pr-5 max-w-screen-xl mx-auto h-16 flex items-center justify-between ">
            <Image 
              src="/logo.svg"
              width={150}
              height={60}
              alt="Logo"
            />
            <div className='flex items-center gap-3 md:gap-7 lg:gap-10'>
               <a href='#our-story' className='text-base   lg:text-lg font-questrial font-medium'>About</a>
               <a href='#what-we-do' className='text-base   lg:text-lg font-questrial font-medium'>Services</a>
               <a href='#connect' className='text-base  lg:text-lg font-questrial font-medium'>Connect</a>
            </div>
         </div>
      </motion.div>
   )
}

export default Navbar