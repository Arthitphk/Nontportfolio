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
    <div className="absolute left-0 top-0 h-full w-px bg-slate-200 dark:bg-slate-800 group-last:h-12">
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        className={`w-full ${isWork ? 'bg-indigo-500' : 'bg-emerald-500'}`}
      />
    </div>

    {/* Icon Node */}
    <div className={`absolute -left-4.5 top-0 flex h-9 w-9 items-center justify-center rounded-xl border-4 border-white dark:border-slate-950 shadow-sm transition-transform group-hover:scale-110 ${
      isWork ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'
    }`}>
      {isWork ? <Work sx={{ fontSize: 18 }} /> : <School sx={{ fontSize: 18 }} />}
    </div>

    {/* Card Content */}
    <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-[#27272c] p-5 shadow-sm transition-all hover:shadow-md dark:hover:border-slate-700">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {data.title}
        </h3>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
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
    <div className=" bg-slate-50 dark:bg-[#1c1c22] py-16 px-4 selection:bg-indigo-500 selection:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 "> 
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Education */}
          <section>
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
                <School />
              </div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Education</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {educationData.map((item, idx) => (
                <TimelineCard key={idx} data={item} isWork={false} />
              ))}
            </motion.div>
          </section>

          {/* Right Column: Experience */}
          <section>
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600">
                <Work />
              </div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Experience</h2>
            </div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {workData.map((item, idx) => (
                <TimelineCard key={idx} data={item} isWork={true} />
              ))}
            </motion.div>
          </section>

        </div>
      </div>
      
      {/* Background Ornaments */}
      <div className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full overflow-hidden opacity-20">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-indigo-500 blur-[120px]" />
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-emerald-500 blur-[120px]" />
      </div>
    </div>
  );
};

export default timeline ;