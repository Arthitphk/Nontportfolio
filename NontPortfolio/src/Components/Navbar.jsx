import React, { useEffect, useState } from 'react';



import {
   Menu, Close, Person, Code, Description, ContactPage
} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Theme from './Theme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    // ข้อมูลเมนูนำทาง
    const navLinks = [
        { name: 'Home', href: '/Home', },
        { name: 'Project', href: '/Project'  },
        { name: 'Blog', href: '#resume',   },
        { name: 'Contact', href: '#contact'  },
    ];

    

    const toggleMenu = () => setIsOpen(!isOpen);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-[#1c1c22]/80' : 'bg-white dark:bg-[#1c1c22] border-t border-gray-100 dark:border-gray-800 shadow-lg'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo Section */}
                        <div className="shrink-0 flex items-center">
                            <span className="text-2xl font-jetbrains  font-bold  cursor-pointer dark:text-white">
                                <ChevronLeftIcon />NontArthit/<ChevronRightIcon/>
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex space-x-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="px-3 font-jetbrains dark:text-slate-200 py-2 rounded-md text-[1.1rem] font-medium hover:text-[#22c55e] transition-colors flex items-center gap-1"
                                    >
                                        {link.icon}
                                        {link.name} 
                                    </a>
                                ))}
                            </div>

                            
                            <Theme />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center  ">
                             <Theme />
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-[0.8rem] text-gray-600 dark:text-gray-300  hover:bg-[#27272c] outline-none"
                            >
                                {isOpen ? <Close /> : <Menu />}

                            </button>

                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`font-jetbrains md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className= {`px-4 pt-2 pb-6 space-y-1  ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-[#1c1c22]/80' : 'bg-transparent'}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 rounded-md text-base font-medium dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-3"
                            >
                                <span className="text-blue-600">{link.icon}</span>
                                {link.name}
                            </a>
                        ))}

                        
                    </div>
                    
                </div>
            </nav>
        </div>
    );
};

export default Navbar

