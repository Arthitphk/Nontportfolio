import React, { useState } from 'react';
// Import icons from Material UI Icons
import AwardIcon from '@mui/icons-material/EmojiEvents';
import ExternalLinkIcon from '@mui/icons-material/OpenInNew';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import TagIcon from '@mui/icons-material/LocalOffer';
import { motion, AnimatePresence } from 'framer-motion';


const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Certificate data updated to English
  const certificates = [
    {
      id: 1,
      title: "ROAD TO FRONT-END DEVELOPER Bootcamp",
      issuer: "borntodev Co., Ltd.",
      date: "February 27, 2024",
      description: "An intensive program for becoming a professional Front-End Developer, covering fundamentals to the application of modern tools and industry best practices.",
      credentialUrl: "#",
      imageUrl: "src/assets/Image/Certification/certificate_1.png",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "blue"
    },
    {
      id: 2,
      title: "DevInit #2 (Front-end Developer)",
      issuer: "borntodev Co., Ltd.",
      date: "June 11, 2024",
      description: "A project-based development program focusing on building real-world UI components and systematic problem-solving for front-end engineers.",
      credentialUrl: "#",
      imageUrl: "src/assets/Image/Certification/certificate2.png",
      skills: ["Web Fundamentals", "UI Components", "Modern JS", "Debugging"],
      color: "purple"
    }
  ];

  

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#1c1c22]  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-20">
        
        <motion.header initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-12">
          <h2 className="text-3xl font-bold dark:text-white relative inline-block pb-4 font-jetbrains">
             Certification
            <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#22c55e] rounded-full"></span>
          </h2>
        </motion.header>

        
      </div>

        {/* Certificates Grid */}
        <motion.div initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="group relative bg-white dark:bg-[#27272c] rounded-lg p-8  dark:border dark:border-[#27272c]  hover:shadow-2xl hover:-translate-y-1 dark: hover:border-[#ADFF2F] dark:hover:border-[#ADFF2F] transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className={`p-5 rounded-2xl transition-all duration-500 shrink-0 shadow-sm bg-[#22c55e]/10 dark:bg-[#ADFF2F]/10`}>
                  <AwardIcon sx={{ fontSize: 36 }} className='text-[#22c55e] dark:text-[#ADFF2F]' />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3">
                    <div>
                      <h3 className="font-jetbrains text-2xl font-bold text-gray-900 dark:text-white transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <p className="font-jetbrains text-[#22c55e] font-bold mt-1 flex items-center gap-2">
                        <TagIcon sx={{ fontSize: 16 }} />
                        {cert.issuer}
                      </p>
                    </div>
                    
                  </div>
                  
                  <p className="font-jetbrains mt-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-gray-50 dark:border-gray-800 pt-5">
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="font-jetbrains cursor-pointer flex items-center text-sm font-black text-gray-800 dark:text-gray-200 hover:text-[#22c55e] dark:hover:text-[#22c55e] transition-colors uppercase tracking-tight"
                    >
                      <SearchIcon sx={{ fontSize: 20, mr: 1 }} />
                      View Certificate
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Modal Optimized for Landscape Images */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-gray-950/90 backdrop-blur-xl transition-all duration-300">
            <div className="bg-white dark:bg-[#1c1c22] rounded-[2.5rem] max-w-6xl w-full overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[95vh]">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-4">
                  <div className="p-3 text-[#22c55e] dark:text-[#ADFF2F] dark:bg-[#ADFF2F]/20 bg-blue-600  rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none flex items-center justify-center">
                    <AwardIcon sx={{ fontSize: 24 }}  />
                  </div>
                  <div>
                    <h3 className="text-xl  font-jetbrains font-black text-gray-900 dark:text-white leading-none">
                      {selectedCert.title}
                    </h3>
                    <p className="text-sm font-jetbrains text-[#22c55e] dark:text-[#ADFF2F] font-bold mt-1.5 uppercase tracking-widest">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-600 rounded-2xl transition-all flex items-center justify-center"
                >
                  <CloseIcon sx={{ fontSize: 28 }} />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto flex-1">
                {/* Image Section */}
                <div className="w-full bg-gray-50 dark:bg-gray-800/50 p-4 sm:p-12 flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
                  <div className="relative group max-w-5xl w-full">
                    <img 
                      src={selectedCert.imageUrl} 
                      alt={selectedCert.title} 
                      className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-gray-200 dark:ring-gray-700 object-contain"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x848?text=Certificate+Preview'; }}
                    />
                    <div className="absolute inset-0 rounded-xl ring-inset ring-1 ring-white/20 pointer-events-none"></div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-8 sm:p-12 bg-white dark:bg-[#1c1c22]">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-10">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center text-sm font-bold text-gray-500 dark:text-gray-400">
                          <CalendarIcon sx={{ fontSize: 20, mr: 1, color: '#ADFF2F' }} />
                          <span className="text-gray-400 font-jetbrains dark:text-gray-500 mr-2 uppercase tracking-tighter ">Issue Date:</span> 
                          {selectedCert.date}
                        </div>
                        <div className="flex items-center text-sm font-bold text-[#22c55e] dark:text-[#ADFF2F]">
                          <CheckCircleIcon sx={{ fontSize: 20, mr: 1 }} />
                          <span className="font-jetbrains uppercase tracking-[0.2em]">Verified Achievement</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase italic font-jetbrains">Overview</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base max-w-4xl font-jetbrains">
                          {selectedCert.description} This certification validates that the holder has demonstrated high-level proficiency and skills according to the standards set by {selectedCert.issuer}.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-black font-jetbrains  text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em]">Mastered Technologies</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedCert.skills.map((skill, idx) => (
                            <span key={idx} className="font-jetbrains  px-5 py-2 bg-[#22c55e]/10 dark:bg-[#ADFF2F]/10  text-[#22c55e] dark:text-[#ADFF2F] text-xs font-black rounded-xl  shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateSection;