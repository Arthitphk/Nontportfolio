import React, { useEffect, useState } from 'react';



import {
    GitHub, LinkedIn, Facebook, Menu, Close, Person, Code, Description, ContactPage
} from '@mui/icons-material';
import Theme from './Theme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    // ข้อมูลเมนูนำทาง
    const navLinks = [
        { name: 'Home', href: '#home', icon: <Person fontSize="small" /> },
        { name: 'Project', href: '#projects', icon: <Code fontSize="small" /> },
        { name: 'Blog', href: '#resume', icon: <Description fontSize="small" /> },
        { name: 'Contact', href: '#contact', icon: <ContactPage fontSize="small" /> },
    ];

    // ข้อมูล Social Media
    const socialLinks = [
        { icon: <GitHub />, href: 'https://github.com', color: 'hover:text-gray-400' },
        { icon: <LinkedIn />, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
        { icon: <Facebook />, href: 'https://facebook.com', color: 'hover:text-blue-500' },
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
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-slate-900/80' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo Section */}
                        <div className="shrink-0 flex items-center">
                            <span className="text-2xl uppercase font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
                                Nont Arthit
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex space-x-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="px-3 dark:text-slate-200 py-2 rounded-md text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                                    >
                                        {link.icon}
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            {/* Social Icons (Desktop) */}
                            <div className="flex items-center dark:text-slate-200 space-x-4 border-l pl-6 border-gray-200 dark:border-gray-700">
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
                            <Theme />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 outline-none"
                            >
                                {isOpen ? <Close /> : <Menu />}

                            </button>

                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-4 pt-2 pb-6 space-y-1 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 shadow-lg">
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

                        {/* Social Icons (Mobile) */}
                        <div className="flex justify-center space-x-8 pt-6 border-t border-gray-100 dark:border-gray-800 mt-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={`text-gray-600 dark:text-gray-300 ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                            <Theme />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar