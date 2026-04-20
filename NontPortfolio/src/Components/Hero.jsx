import { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { GitHub, LinkedIn, Facebook, Menu, Close, Person, Code, Description, ContactPage } from '@mui/icons-material';

const Hero = () => {
    // ข้อมูล Social Media
    const socialLinks = [
        { icon: <GitHub />, href: 'https://github.com', color: 'hover:text-[#22c55e]' },
        { icon: <LinkedIn />, href: 'https://linkedin.com', color: 'hover:text-[#22c55e]' },
        { icon: <Facebook />, href: 'https://facebook.com', color: 'hover:text-[#22c55e]' },
    ];

    return (
        <div className="  pt-20 md:pt-0 lg:pt-0 dark:text-white dark:bg-[#1c1c22] font-sans selection:bg-indigo-100   absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[60px_60px]  ">

            <section className='relative   items-center justify-center  md:py-32  overflow-hidden'>


                <div className='max-w-7xl mx-auto  px-4 sm:px-6 flex flex-col md:flex-row  items-center transition-all duration-1000 transform'>

                    {/* Left Column: Text Content */}
                    <div className="flex-1  p-2 lg:text-left order-2  lg:order-1">

                        {/* Main Heading */}
                        <h1 className=" font-jetbrains   text-2xl text-gray-500 dark:text-white">
                            👋🏼 Hello, I'm
                        </h1>

                        <h1 className=" font-jetbrains  text-6xl md:text-7xl font-bold">
                            Arthit Chatusor
                        </h1>

                        <h1 className=" font-jetbrains  text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight lg:mb-6">
                            <span className="bg-linear-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent"> Front-End Developer</span>
                        </h1>

                        {/* Subheading */}
                        <p className="font-jetbrains  max-w-2xl mx-auto lg:mx-0 lg:text-lg text-sm  dark:text-white text-slate-600 mb-8 leading-relaxed">
                            Welcome to my personal website! I'm passionate about creating beautiful and functional web experiences. Feel free to explore my projects and get in touch!
                        </p>


                    </div>


                    {/* Right Column: Profile Image */}
                    <div className=" flex justify-end order-2 lg:order-2">
                        <div className="relative  group">

                            

                            {/* Image Container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80 bg-white rounded-lg overflow-hidden  ">
                                {/* Replace src with your image URL */}
                                <img
                                    src="src\assets\Image\profile-img.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
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