import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// นำเข้าไอคอนจาก Material UI
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Navbar from "../Components/Navbar"


const projects = [
  {
    id: 1,
    title: "CodingTech Website",
    description: "Project ที่ใช้ React และ TypeScript ในการพัฒนา โดยเน้นไปที่การรับข้อมูลจาก API เพื่อมาประมวลผลและแสดงผลบนอินเทอร์เฟซที่เราออกแบบมาครับ",
    tags: [
      { name: "React.js", color: "bg-[#3178C6] text-white" },
      { name: "TypeScript", color: "bg-[#3178C6] text-white" },
      { name: "Tailwind CSS", color: "bg-[#38BDF8] text-white" },
      { name: "Axios", color: "bg-[#764ABC] text-white" }
    ],
    githubUrl: "https://github.com/Arthitphk/FEDBC-FinalProject",
    liveUrl: "#",
    images: [
      "src/assets/Image/PJ_1/Project1img.png",
      "src/assets/Image/PJ_1/fedbcimage2.png",
      "src/assets/Image/PJ_1/FEDBCIMGE3.png",
      "src/assets/Image/PJ_1/FEDBCIMG4.png"
    ],

  },
  {
    id: 2,
    title: "AI Creative Dashboard",
    description: "เครื่องมือวิเคราะห์ข้อมูลสำหรับทีมสร้างสรรค์งานโฆษณา โดยใช้ AI ในการวิเคราะห์แนวโน้มตลาดและแสดงผลผ่านกราฟิกที่ตอบโต้ได้ (Interactive Data Visualization)",
    tags: [
      { name: "React", color: "bg-[#61DAFB] text-slate-900" },
      { name: "Framer Motion", color: "bg-[#E902B5] text-white" },
      { name: "D3.js", color: "bg-[#F9A03F] text-white" },
      { name: "OpenAI", color: "bg-[#10a37f] text-white" }
    ],
    githubUrl: "#",
    liveUrl: "#",
    images: [
      "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"
    ],
    stats: {
      performance: "Interactive",
      stack: "AI Integrated"
    }
  },
  {
    id: 3,
    title: "Crypto Wallet Interface",
    description: "การออกแบบและพัฒนาระบบกระเป๋าเงินดิจิทัลที่เน้นความปลอดภัยสูงสุด รองรับการโอนเหรียญหลายสกุลและการแสดงผลประวัติธุรกรรมแบบละเอียด",
    tags: [
      { name: "React Native", color: "bg-[#61DAFB] text-slate-900" },
      { name: "Web3.js", color: "bg-[#F16822] text-white" },
      { name: "Styled Components", color: "bg-[#DB7093] text-white" },
      { name: "Firebase", color: "bg-[#FFCA28] text-slate-900" }
    ],
    githubUrl: "#",
    liveUrl: "#",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1633155545042-47adc47446e2?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1642104704074-907c0698bcd9?auto=format&fit=crop&q=80&w=1600"
    ],
    stats: {
      performance: "Secured",
      stack: "Web3"
    }
  }
];

// คอมโพเนนต์เลื่อนรูปภาพ (Image Carousel)
const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative group w-full h-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(8,112,184,0.1)] border border-slate-100 bg-slate-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - slide ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover aspect-video"
        />
      </AnimatePresence>

      {/* ปุ่มนำทาง (Navigation Buttons) */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/80 backdrop-blur text-slate-900 hover:bg-white transition-colors shadow-lg flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/80 backdrop-blur text-slate-900 hover:bg-white transition-colors shadow-lg flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* จุดแสดงสถานะ (Indicators) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "w-6 bg-[#22c55e]" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="py-16 md:py-20 px-4 md:px-8 bg-gray-50 dark:bg-[#1c1c22] lg:px-24 overflow-hidden">
        {/* ส่วนหัว (Header) */}
        <div className="max-w-7xl mx-auto mb-20 pt-20">

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className='text-[11px] font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent'>
              Portfolio
            </span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 tracking-tight leading-tight font-jetbrains"
          >

            <span className="bg-linear-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent ">Selected Work</span>
          </motion.h2>
        </div>

        {/* รายการโปรเจกต์ (Project List) */}
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center`}
            >
              {/* พื้นที่แสดงรูปภาพแบบ Carousel */}
              <div className="w-full md:w-3/5 group relative">
                <div className="absolute -inset-4 bg-linear-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl group-hover:opacity-100 transition duration-500 opacity-0"></div>

                <ImageCarousel images={project.images} title={project.title} />



                {/* ตัวเลขประดับ (Decorative Number) */}
                <span className={`hidden lg:block absolute -top-16 ${index % 2 !== 0 ? '-left-16' : '-right-16'} text-[160px] font-black text-slate-100 dark:text-slate-800/50 select-none pointer-events-none z-[-1]`}>
                  0{index + 1}
                </span>
              </div>

              {/* ข้อมูลโปรเจกต์ (Project Info) */}
              <div className="w-full md:w-2/5 space-y-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag.name}
                      className={`${tag.color} font-jetbrains text-[10px] font-bold px-3 py-1 rounded-md shadow-sm transform transition hover:-translate-y-0.5`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-jetbrains text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-jetbrains text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-6">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:text-blue-600 transition-all group/link relative"
                  >
                    <span className="flex items-center gap-2">
                      See More
                      <ArrowForwardIcon fontSize="small" className="group-hover/link:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover/link:w-full"></span>
                  </a>

                  <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>

                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GitHubIcon fontSize="medium" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;


