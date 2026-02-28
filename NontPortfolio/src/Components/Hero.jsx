import { useState } from 'react';
import {
    GitHub,
    LinkedIn,
    Email,
    KeyboardArrowDown,
    Description,
    Code,
    RocketLaunch,
    Terminal,
    Verified
} from '@mui/icons-material';


const Hero = () => {
    const [isVisible] = useState(true);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
            {/* Main Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
                </div>

                <div className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-6 uppercase tracking-wider">
                            <RocketLaunch sx={{ fontSize: 14 }} />
                            Available for New Projects
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
                            สวัสดีครับ, ผม <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">วีรพล</span><br />
                            เป็น Full-stack Developer
                        </h1>

                        {/* Subheading */}
                        <p className="max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600 mb-8 leading-relaxed">
                            ผมชอบสร้างสรรค์ประสบการณ์บนเว็บไซต์ที่สวยงามและใช้งานง่าย
                            เชี่ยวชาญด้าน React, Node.js และ Cloud Solutions
                            มุ่งเน้นที่การเขียน Code ที่มีคุณภาพและประสิทธิภาพสูง
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg">
                                <Code />
                                ดูผลงานของผม
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all transform hover:-translate-y-1 shadow-sm">
                                <Description />
                                ดาวน์โหลด Resume
                            </button>
                        </div>
                    </div>


                    {/* Right Column: Profile Image */}
                    <div className="flex-1 flex justify-center order-1 lg:order-2">
                        <div className="relative group">
                            {/* Decorative Rings */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-[2.5rem] opacity-10 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image Container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                                {/* Replace src with your image URL */}
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                />

                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
};

export default Hero;