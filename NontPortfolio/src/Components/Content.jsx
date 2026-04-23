import React from 'react';
// นำเข้า MUI Icons
import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
/**
 * ServiceCard Component
 */
const ServiceCard = ({ icon: Icon, title, description, iconColor }) => {
  return (
    <div className="relative group overflow-hidden p-8 rounded-2xl dark:bg-[#27272c] bg-white transition-all">
      <div className="flex items-start gap-6">
        {/* Icon Container */}
        <div className={`mt-1 shrink-0 ${iconColor}`}>
          {/* ปรับขนาด Icon ผ่าน sx prop ของ MUI */}
          <Icon sx={{ fontSize: 40 }} />
        </div>
        
        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
      
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

const Content = () => {
  const services = [
    {
      icon: CodeIcon,
      title: "Web Development",
      description: "Building fast, responsive, and scalable websites using modern frameworks and best practices.",
      iconColor: " text-[#22c55e]"
    },
    {
      icon: SportsEsportsIcon,
      title: "Game Development",
      description: "Soon....",
      iconColor: " text-[#22c55e]"
    },
    {
      icon: DesktopWindowsIcon,
      title: "Desktop Development",
      description: "Creating powerful desktop applications for Windows, macOS, and Linux using web technologies.",
      iconColor: "text-[#22c55e] "
    },
    {
      icon: ColorLensIcon,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces focused on user experience and usability.",
      iconColor: "text-[#22c55e] "
    }
  ];



  








  return (
    <div className=" dark:bg-[#1c1c22] bg-slate-50 py-12 px-6 md:py-20 md:px-16 ">
      <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }} className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <header className="mb-12">
          <h2 className="text-3xl font-bold dark:text-white relative inline-block pb-4 font-jetbrains">
            What I'm Focusing On
            <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#22c55e] rounded-full"></span>
          </h2>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-jetbrains">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
            />
          ))}
        </div>

        
        
      </motion.div>
    </div>
  );
};

export default Content;