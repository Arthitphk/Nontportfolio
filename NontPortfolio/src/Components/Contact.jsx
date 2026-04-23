import React from 'react'
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-9 font-jetbrains  px-4 sm:px-6 lg:px-8 py-16 dark:bg-[#1c1c22] bg-slate-50  '>
        <motion.h2 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }} className='inline-block  font-bold relative text-2xl md:text-6xl mb-0 lg:text-4xl dark:text-white '>
          Let's Keep in
          <span className='dark:text-[#22c55e] ml-5'>Touch</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }} className='text-center  dark:text-white'>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</motion.p>
        <motion.div initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }} className='flex flex-col sm:flex-row gap-5'>
          <a href="" target="_blank" className='bg-[#22c55e] text-white px-6 py-3 rounded-full hover:bg-[#1da154] transition-colors'>Contact Me</a>
          <a href="" target="_blank" className='bg-gray-300 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-400 transition-colors'>Download Resume</a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact