import React from 'react';
// นำเข้าไอคอนจาก Material UI
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import LanguageIcon from '@mui/icons-material/Language';
import LayersIcon from '@mui/icons-material/Layers';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MemoryIcon from '@mui/icons-material/Memory';
import TerminalIcon from '@mui/icons-material/Terminal';

const Card_Project = () => {
  // ข้อมูลโปรเจกต์ตัวอย่าง
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "ระบบจัดการร้านค้าออนไลน์แบบครบวงจร รองรับการดูสถิติแบบ Real-time และการจัดการสต็อกสินค้า",
      tech: ["React", "Tailwind CSS", "Chart.js"],
      link: "#",
      github: "#",
      type: "Web Application",
      icon: <LayersIcon sx={{ fontSize: 32 }} />
    },
    {
      id: 2,
      title: "Health Tracking App",
      description: "แอปพลิเคชันติดตามสุขภาพและการออกกำลังกาย เน้นประสบการณ์ผู้ใช้ (UX) ที่ลื่นไหลบนมือถือ",
      tech: ["Next.js", "TypeScript", "Framer Motion"],
      link: "#",
      github: "#",
      type: "Mobile First",
      icon: <SmartphoneIcon sx={{ fontSize: 32 }} />
    },
    {
      id: 3,
      title: "AI Content Platform",
      description: "แพลตฟอร์มสร้างเนื้อหาด้วย AI ที่เชื่อมต่อกับ API ระดับโลก พร้อมระบบสมาชิก",
      tech: ["React", "Redux", "Node.js"],
      link: "#",
      github: "#",
      type: "Full Stack",
      icon: <MemoryIcon sx={{ fontSize: 32 }} />
    },
    {
      id: 4,
      title: "AI Content Platform",
      description: "แพลตฟอร์มสร้างเนื้อหาด้วย AI ที่เชื่อมต่อกับ API ระดับโลก พร้อมระบบสมาชิก",
      tech: ["React", "Redux", "Node.js"],
      link: "#",
      github: "#",
      type: "Full Stack",
      icon: <MemoryIcon sx={{ fontSize: 32 }} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">My Works</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            รวมผลงานการพัฒนาเว็บไซต์ที่เน้นความสวยงาม ประสิทธิภาพ และการใช้งานที่ตอบโจทย์ผู้ใช้ในทุกอุปกรณ์
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col"
            >
              {/* Card Preview Area (Mockup Image) */}
              <div className="h-48 bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-blue-50 transition-colors duration-300">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-600 flex items-center gap-1">
                  <TerminalIcon sx={{ fontSize: 14 }} />
                  {project.type}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-500 text-[11px] uppercase tracking-wider rounded-md font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
                  >
                    <GitHubIcon sx={{ fontSize: 18 }} />
                    Code
                  </a>
                  <a 
                    href={project.link}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm font-bold"
                  >
                    Live Demo
                    <LaunchIcon sx={{ fontSize: 18 }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card_Project
