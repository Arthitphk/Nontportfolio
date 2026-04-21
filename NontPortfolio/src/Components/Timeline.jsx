import React from 'react';
import { motion } from 'framer-motion';
import {
    School,
    Work,
    LocationOn,
    CalendarMonth,
    KeyboardArrowRight,
    Business,
    Timeline
} from '@mui/icons-material';

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

const TimelineCard = ({ data, isWork }) => (
    <motion.div
        variants={itemVariants}
        className="group relative pl-8 pb-10 last:pb-0"
    >
        {/* Vertical Line Connector */}
        <div className="absolute left-0 top-0 h-full w-px   group-last:h-12">
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                className={`mt-9 w-full ${isWork ? 'bg-[#22c55e] dark:bg-[#ADFF2F]/50' : 'bg-[#22c55e] dark:bg-[#ADFF2F]/50'}`}
            />
        </div>

        {/* Icon Node */}
        <div className={`absolute -left-4.5 top-0 flex h-9 w-9 items-center justify-center rounded   transition-transform group-hover:scale-110 ${isWork ? 'bg-[#22c55e]/10 dark:bg-[#ADFF2F]/10 text-[#22c55e]' : 'bg-[#22c55e]/10 dark:bg-[#ADFF2F]/10 text-[#22c55e]'
            }`}>
            {isWork ? <Work sx={{ fontSize: 18 }} /> : <School sx={{ fontSize: 18 }} />}
        </div>

        {/* Card Content */}
        <div className="rounded-2xl   bg-white dark:bg-[#1c1c22] p-5  transition-all ">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-[#ADFF2F]  transition-colors">
                    {data.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#22c55e]/10 dark:bg-[#ADFF2F]/10 text-[#22c55e] px-3 py-1 text-xs font-semibold ">
                    <CalendarMonth sx={{ fontSize: 14 }} />
                    {data.period}
                </span>
            </div>

            <div className="mb-3 flex flex-col gap-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                    <Business sx={{ fontSize: 16 }} />
                    {data.subTitle}
                </div>
                <div className="flex items-center gap-1 text-xs opacity-75">
                    <LocationOn sx={{ fontSize: 14 }} />
                    {data.location}
                </div>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {data.description}
            </p>


        </div>
    </motion.div>
);

const timeline = () => {
    const educationData = [
        {
            title: 'Master of Computer Science',
            subTitle: 'Stanford University',
            period: '2018 - 2020',
            location: 'Palo Alto, CA',
            description: 'ศึกษาด้าน AI และ Machine Learning โดยเน้นการประยุกต์ใช้ในอุตสาหกรรมซอฟต์แวร์สมัยใหม่',
        },
        {
            title: 'Bachelor of Engineering',
            subTitle: 'Chulalongkorn University',
            period: '2014 - 2018',
            location: 'Bangkok, TH',
            description: 'วิศวกรรมคอมพิวเตอร์ พื้นฐานอัลกอริทึม และระบบเครือข่าย',
        }
    ];

    const workData = [
        {
            title: 'Senior Software Engineer',
            subTitle: 'Tech Innovations Lab',
            period: '2022 - Present',
            location: 'Bangkok, TH',
            description: 'ออกแบบระบบ Cloud Infrastructure และจัดการทีมพัฒนา Frontend ในการทำ Design System',
        },
        {
            title: 'Frontend Developer',
            subTitle: 'Digital Agency X',
            period: '2020 - 2022',
            location: 'Bangkok, TH',
            description: 'พัฒนา Responsive Web Applications โดยใช้ Next.js และ Framer Motion',
        }
    ];

    return (
        <div className=" dark:bg-[#1c1c22] bg-slate-50 py-16 px-4 selection:bg-indigo-500 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ">

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left Column: Education */}
                    <section>
                        <div className="mb-10 flex items-center gap-3">
                            <h2 className="text-3xl font-bold dark:text-white relative inline-block pb-4 font-jetbrains">
                                Education
                                <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#22c55e] rounded-full"></span>
                            </h2>
                        </div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-2 font-jetbrains"
                        >
                            {educationData.map((item, idx) => (
                                <TimelineCard key={idx} data={item} isWork={false} />
                            ))}
                        </motion.div>
                    </section>

                    {/* Right Column: Experience */}
                    <section>
                        <div className="mb-10 flex items-center gap-3">
                            <h2 className="text-3xl font-bold dark:text-white relative inline-block pb-4 font-jetbrains">
                                Experience
                                <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#22c55e] rounded-full"></span>
                            </h2>
                        </div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-2 font-jetbrains"
                        >
                            {workData.map((item, idx) => (
                                <TimelineCard key={idx} data={item} isWork={true} />
                            ))}
                        </motion.div>
                    </section>

                </div>
            </div>



        </div>
    );
};

export default timeline;