import React, { useState } from 'react';
// Import icons from Material UI Icons
import AwardIcon from '@mui/icons-material/EmojiEvents';
import ExternalLinkIcon from '@mui/icons-material/OpenInNew';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import TagIcon from '@mui/icons-material/LocalOffer';

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
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      skills: ["Web Fundamentals", "UI Components", "Modern JS", "Debugging"],
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const variants = {
      blue: "bg-blue-50 text-blue-700 border-blue-100 group-hover:bg-blue-600 group-hover:text-white",
      purple: "bg-purple-50 text-purple-700 border-purple-100 group-hover:bg-purple-600 group-hover:text-white",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white",
      orange: "bg-amber-50 text-amber-700 border-amber-100 group-hover:bg-amber-500 group-hover:text-white"
    };
    return variants[color] || variants.blue;
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 italic uppercase tracking-tighter">
            Certification <span className="text-blue-600">&</span> Skillset
          </h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Continuously developing skills and gaining experience through professional certifications and hands-on learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className={`p-5 rounded-2xl transition-all duration-500 shrink-0 shadow-sm ${getColorClasses(cert.color)}`}>
                  <AwardIcon sx={{ fontSize: 36 }} />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 font-bold mt-1 flex items-center gap-2">
                        <TagIcon sx={{ fontSize: 16 }} />
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="inline-flex items-center text-xs font-black text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-4 py-1.5 rounded-full uppercase tracking-widest border border-gray-100 dark:border-gray-700">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="mt-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-gray-50 dark:border-gray-800 pt-5">
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="flex items-center text-sm font-black text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-tight"
                    >
                      <SearchIcon sx={{ fontSize: 20, mr: 1 }} />
                      View Certificate
                    </button>
                    <div className="flex gap-2">
                       {cert.skills.slice(0, 2).map((s, i) => (
                         <span key={i} className="hidden lg:block text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase border border-gray-200 dark:border-gray-800 px-2 py-0.5 rounded">
                           {s}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Optimized for Landscape Images */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-gray-950/90 backdrop-blur-xl transition-all duration-300">
            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] max-w-6xl w-full overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[95vh]">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none flex items-center justify-center">
                    <AwardIcon sx={{ fontSize: 24 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white leading-none">
                      {selectedCert.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-bold mt-1.5 uppercase tracking-widest">
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
                <div className="p-8 sm:p-12 bg-white dark:bg-gray-900">
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-10">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-6 mb-8">
                        <div className="flex items-center text-sm font-bold text-gray-500 dark:text-gray-400">
                          <CalendarIcon sx={{ fontSize: 20, mr: 1, color: '#2563eb' }} />
                          <span className="text-gray-400 dark:text-gray-500 mr-2 uppercase tracking-tighter">Issue Date:</span> 
                          {selectedCert.date}
                        </div>
                        <div className="flex items-center text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircleIcon sx={{ fontSize: 20, mr: 1 }} />
                          <span className="uppercase tracking-[0.2em]">Verified Achievement</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase italic">Overview</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base max-w-4xl">
                          {selectedCert.description} This certification validates that the holder has demonstrated high-level proficiency and skills according to the standards set by {selectedCert.issuer}.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em]">Mastered Technologies</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedCert.skills.map((skill, idx) => (
                            <span key={idx} className="px-5 py-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-black rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="shrink-0">
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-4xl border border-gray-100 dark:border-gray-700">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 text-center">Credential Actions</h4>
                        <div className="flex flex-col gap-3">
                          <a 
                            href={selectedCert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-10 py-4 bg-gray-900 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group"
                          >
                            <ExternalLinkIcon sx={{ fontSize: 20 }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            Verify Online
                          </a>
                          <button 
                            className="w-full px-10 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-all"
                            onClick={() => setSelectedCert(null)}
                          >
                            Close Preview
                          </button>
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