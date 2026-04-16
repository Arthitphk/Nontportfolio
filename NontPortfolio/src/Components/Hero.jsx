import { useState } from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import FileCopyIcon from '@mui/icons-material/FileCopy';


const Hero = () => {
    const [isVisible] = useState(true);

    return (
        <div className=" h-lvh bg-gray-50 dark:text-white dark:bg-[#1c1c22] font-sans selection:bg-indigo-100  bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none">
           
            <section className='relative min-h-screen flex items-center justify-center pt-28 pb-20 md:py-32  overflow-hidden'>
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
                </div>

                <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row  items-center gap-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center p-5 lg:text-left order-2  lg:order-1">

                        {/* Main Heading */}
                        <h1 className=" font-jetbrains   text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight lg:mb-6">
                           Hello, I'm
                        </h1>

                        <h1 className=" font-jetbrains  text-2xl md:text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight lg:mb-6">
                            Arthit Chatusor
                        </h1>

                        <h1 className=" font-jetbrains  text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight lg:mb-6">
                           <span className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent"> Front-End Developer</span>
                        </h1>

                        {/* Subheading */}
                        <p className="font-jetbrains  max-w-2xl mx-auto lg:mx-0 lg:text-lg text-sm  dark:text-white text-slate-600 mb-8 leading-relaxed">
                            Welcome to my personal website! I'm passionate about creating beautiful and functional web experiences. Feel free to explore my projects and get in touch!
                        </p>
                                
                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3">
                            <button className="font-jetbrains cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-full text-base ring-offset-white transition-colors bg-accent hover:bg-accent-hover y h-[44px] px-6 py-2 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] dark:text-black/70 text-white font-bold">
                               <FileCopyIcon/>
                                Projects
                            </button>
                            <button className="font-jetbrains cursor-pointer group px-6 py-3 border-2 border-black/20 dark:border-white/20 rounded-full font-semibold dark:text-white text-black/80 transition-all duration-300 hover:border-[#22c55e] dark:hover:border-[#ADFF2F] hover:text-[#22c55e] dark:hover:text-[#ADFF2F] hover:scale-105 text-sm">
                               <ArrowCircleDownIcon />
                                My Resume
                            </button>
                        </div>
                    </div>


                    {/* Right Column: Profile Image */}
                    <div className="flex-1 flex justify-center order-1 lg:order-2">
                        <div className="relative group">
                            {/* Decorative Rings */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#22c55e] to-[#16a34a] rounded-[15rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#22c55e] to-[#16a34a] rounded-[15rem] opacity-10 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image Container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-100 lg:h-100 bg-white rounded-[20rem] overflow-hidden border-4 border-white shadow-2xl">
                                {/* Replace src with your image URL */}
                                <img
                                    src="src\assets\Image\profile-img.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                />

                            </div>
                        </div>
                    </div>



                </div>

                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2'>
                    <span className='text-sm text-gray-500 dark:text-gray-400 font-jetbrains'>Scroll Down</span>
                    <svg className='animate-bounce' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
            </section>
             
        </div>
    );
};

export default Hero;