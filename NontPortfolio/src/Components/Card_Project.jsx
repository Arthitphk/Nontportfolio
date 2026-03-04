import LayersIcon from '@mui/icons-material/Layers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const projects = [
  {
    id: 1,
    title: "Modern E-Commerce Experience",
    description: "แพลตฟอร์มอีคอมเมิร์ซระดับไฮเอนด์ที่เน้นความเร็วและการใช้งานที่ลื่นไหล พัฒนาด้วย Next.js และเชื่อมต่อระบบตะกร้าสินค้าแบบ Real-time พร้อมระบบจัดการสต็อกสินค้าที่ซับซ้อน",
    tags: [
      { name: "Next.js", color: "bg-black text-white" },
      { name: "TypeScript", color: "bg-[#3178C6] text-white" },
      { name: "Tailwind CSS", color: "bg-[#38BDF8] text-white" },
      { name: "Redux", color: "bg-[#764ABC] text-white" }
    ],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
    stats: {
      performance: "98/100",
      stack: "Full Stack"
    }
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
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1600",
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
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
    stats: {
      performance: "Secured",
      stack: "Web3"
    }
  }
];

const ProjectSection = () => {
  return (
    <div className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <LayersIcon sx={{ fontSize: 18 }} />
          <span>Selected Works</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          ผลงานที่คัดสรรมาเพื่อแสดง <br />
          <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">ทักษะด้าน Frontend</span>
        </h2>
      </div>

      {/* Project List */}
      <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center`}
          >
            {/* Project Image Container */}
            <div className="w-full md:w-3/5 group relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl group-hover:opacity-100 transition duration-500 opacity-0"></div>
              
              <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-slate-100 bg-slate-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-auto object-cover transform transition duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay stats */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-xl border border-white/20">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Performance</p>
                    <p className="text-sm font-black text-blue-600">{project.stats.performance}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Number */}
              <span className={`hidden lg:block absolute -top-16 ${index % 2 !== 0 ? '-right-16' : '-left-16'} text-[160px] font-black text-slate-100 select-none pointer-events-none z-[-1]`}>
                0{index + 1}
              </span>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-2/5 space-y-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag.name} 
                    className={`${tag.color} text-[10px] font-bold px-3 py-1 rounded-md shadow-sm transform transition hover:-translate-y-0.5`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <a 
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-all group/link relative"
                >
                  <span className="flex items-center gap-2">
                    See More 
                    <ArrowForwardIcon sx={{ fontSize: 20 }} className="group-hover/link:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover/link:w-full"></span>
                </a>
                
                <div className="h-8 w-[1px] bg-slate-200"></div>

                <a 
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GitHubIcon sx={{ fontSize: 24 }} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;