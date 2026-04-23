import { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { GitHub, LinkedIn, Facebook, Menu, Close, Person, Code, Description, ContactPage } from '@mui/icons-material';
import { motion} from 'framer-motion';
const Hero = () => {
    // ข้อมูล Social Media
    const socialLinks = [
        { icon: <GitHub />, href: 'https://github.com', color: 'hover:text-[#22c55e]' },
        { icon: <LinkedIn />, href: 'https://linkedin.com', color: 'hover:text-[#22c55e]' },
        { icon: <Facebook />, href: 'https://facebook.com', color: 'hover:text-[#22c55e]' },
    ];

    return (
        <div className="  pt-20 md:pt-0 lg:pt-0 dark:text-white dark:bg-[#1c1c22] bg-slate-50    ">

            <section className='relative   items-center justify-center  md:py-32  overflow-hidden '>


                <div className='max-w-7xl mx-auto  px-4 sm:px-6 flex flex-col md:flex-row  items-center transition-all duration-1000 transform'>

                    {/* Left Column: Text Content */}
                    <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="flex-1  p-2 lg:text-left order-2  lg:order-1">

            

                        {/* Main Heading */}
                        <h1 className=" font-jetbrains mb-3  text-3xl text-gray-500 dark:text-white">
                            👋🏼 Hello, I'm
                        </h1>

                        <h1 className=" font-jetbrains  text-6xl md:text-7xl font-bold mb-3">
                            Arthit Chatusor
                        </h1>

                        <h1 className=" font-jetbrains  text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-3">
                            <span className="bg-linear-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent"> Front-End Developer</span>
                        </h1>

                        {/* Subheading */}
                        <p className="font-jetbrains  max-w-2xl mx-auto lg:mx-0 lg:text-lg text-sm  dark:text-white text-slate-600 mb-8 leading-relaxed">
                            Welcome to my personal website! I'm passionate about creating beautiful and functional web experiences. Feel free to explore my projects and get in touch!
                        </p>

                        <div className='inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[#22c55e]/10 dark:bg-[#ADFF2F]/10 border border-[#22c55e]/20 dark:border-[#ADFF2F]/20'>
                            <span className='relative flex h-2.5 w-2.5'>
                                <span className='animate-ping md:hidden absolute inline-flex h-full w-full rounded-full bg-[#22c55e] dark:bg-[#ADFF2F] opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e] dark:bg-[#ADFF2F]'></span>
                            </span>
                            <span className='text-xs font-semibold bg-linear-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent tracking-wide'>
                                Available for Freelance & Full-time
                            </span>
                        </div>


                    </motion.div>


                    {/* Right Column: Profile Image */}
                    <div className=" flex justify-end order-2 lg:order-2">
                        <div className="relative flex flex-col items-center justify-center flex-1 gap-4">
                            
                            {/* Image Container */}
                            <div className="relative w-64 h-64 md:w-70 md:h-70 lg:w-70 lg:h-70 bg-white rounded-lg overflow-hidden  ">
                                {/* Replace src with your image URL */}
                                <img
                                    src="src\assets\Image\profile-img.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                />

                            </div>

                            <div className="flex justify-center mt-4 space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`transition-colors duration-200 ${social.color}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>





                </div>


            </section>

        </div>
    );
};

export default Hero;