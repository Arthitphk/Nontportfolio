import React from 'react'
import { GitHub, LinkedIn, Facebook, Mail, Phone } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Footer = () => {

    // ข้อมูล Social Media
    const socialLinks = [
        { icon: <GitHub />, href: 'https://github.com', color: 'hover:text-[#22c55e]' },
        { icon: <LinkedIn />, href: 'https://linkedin.com', color: 'hover:text-[#22c55e]' },
        { icon: <Facebook />, href: 'https://facebook.com', color: 'hover:text-[#22c55e]' },
    ];

    return (
        <div className='dark:bg-[#1c1c22]  dark:text-white  font-jetbrains p-10 '>

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8  px-4 sm:px-6 lg:px-8 pt-16'>
                    <div className="flex flex-col gap-2">
                        <a className='items-center justify-center md:justify-start lg:justify-start dark:text-gray-300'> © 2026 | <span  className='dark:text-white'>Arthit Chatusor</span>  | All rights reserved.</a>

                        <a
                            href="mailto:dipakmourya1508@gmail.com"
                            className="flex items-center justify-center md:justify-start   lg:justify-start  gap-3 text-sm hover:text-white transition-colors group"
                        >
                            <Mail size={16} className="text-white" />
                            <span className="group-hover:underline">arthit.chatusor@gmail.com</span>
                        </a>

                        <a
                            className="flex items-center justify-center md:justify-start lg:justify-start gap-3 text-sm hover:text-white transition-colors group"
                        >
                            <Phone size={16} className="text-white fill-current" />
                            <span className="group-hover:underline">+66 646542170</span>
                        </a>
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
    )
}

export default Footer