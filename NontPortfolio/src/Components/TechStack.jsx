import React from 'react';

const TechStack = () => {
  // ข้อมูลเทคโนโลยีพร้อมสีประจำแบรนด์ที่ถูกต้อง
  const stacks = [
    {
      name: "HTML5",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
      brandColor: "#E34F26", // ส้ม HTML
      shadow: "hover:shadow-[0_10px_20px_-5px_rgba(227,79,38,0.3)]"
    },
    {
      name: "CSS3",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 8.715l.407 4.67h8.592l-.33 3.454-3.259.918-3.298-.93-.213-2.397h-2.97l.372 4.737L12 20.374l5.885-1.65.682-7.147H7.031l-.163-1.862h10.885l.23-2.623H6.59z" />
        </svg>
      ),
      brandColor: "#1572B6", // ฟ้า CSS
      shadow: "hover:shadow-[0_10px_20px_-5px_rgba(21,114,182,0.3)]"
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.734-.345-1.486-.585-1.486-1.14 0-.42.33-.644.99-.644.705 0 1.05.24 1.29.705.105.18.285.39.525.39.36 0 .54-.255.54-.51 0-.195-.06-.435-.15-.6-.735-1.56-2.415-1.92-3.27-1.92-1.335 0-2.43.555-2.43 2.025 0 1.575 1.26 2.1 2.37 2.595 1.155.51 1.605.795 1.605 1.44 0 .51-.39.885-1.245.885-.945 0-1.425-.435-1.845-1.11-.12-.195-.255-.375-.555-.375-.3 0-.525.21-.525.54 0 .165.06.315.15.525.525 1.05 1.47 1.83 3.195 1.83 1.545 0 2.85-.75 2.85-2.265zm-8.625-1.335h-1.605c0 2.205-1.335 2.625-2.445 2.625-1.155 0-1.995-.45-2.415-1.14-.12-.21-.24-.39-.54-.39-.315 0-.525.21-.525.54 0 .195.075.345.165.525.585 1.14 1.635 1.89 3.315 1.89 2.295 0 3.99-1.215 3.99-3.9v-5.22h-3.99c0 .12.015.285.015.435L9.57 14.1c0 1.11-.75 1.62-1.5 1.62-.765 0-1.29-.405-1.29-1.11 0-.615.345-1.125 1.065-1.305.135-.03.27-.045.42-.045.45 0 .885.195 1.14.495V10.11h3.003v6.831z" />
        </svg>
      ),
      brandColor: "#F7DF1E", // เหลือง JS
      shadow: "hover:shadow-[0_10px_20px_-5px_rgba(247,223,30,0.3)]"
    },
    {
      name: "React",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" transform="translate(12 12)" />
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <ellipse rx="11" ry="4.2" transform="translate(12 12)" />
            <ellipse rx="11" ry="4.2" transform="translate(12 12) rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="translate(12 12) rotate(120)" />
          </g>
        </svg>
      ),
      brandColor: "#61DAFB", // ฟ้าอ่อน React
      shadow: "hover:shadow-[0_10px_20px_-5px_rgba(97,218,251,0.3)]"
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
      brandColor: "#38B2AC", // เขียวอมฟ้า Tailwind
      shadow: "hover:shadow-[0_10px_20px_-5px_rgba(56,178,172,0.3)]"
    },
    {
      name: "Bootstrap",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.75 3.375C11.75 2.615 12.365 2 13.125 2h4.5c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75H13.5v3h3c2.07 0 3.75 1.68 3.75 3.75S18.57 20 16.5 20h-4.75c-.76 0-1.375-.615-1.375-1.375V3.375zm1.75 3.375h4.125c1.105 0 2-.895 2-2s-.895-2-2-2H13.5v4zm0 11.25H16.5c1.105 0 2-.895 2-2s-.895-2-2-2H13.5v4zM2.875 2h4.5C9.445 2 11.125 3.68 11.125 5.75S9.445 9.5 7.375 9.5h-3v11.125c0 .76-.615 1.375-1.375 1.375H1.375C.615 22 0 21.385 0 20.625V3.375C0 2.615.615 2 1.375 2h1.5z" />
        </svg>
      ),
      brandColor: "#7952B3", // ม่วง Bootstrap
      shadow: "hover:shadow-[0_10px_20px_-5px_rgba(121,82,179,0.3)]"
    }
  ];

  return (
    <div className=" bg-slate-50 py-20 px-4 font-sans mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
            My Tech Stack
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            รวบรวมเทคโนโลยีที่เลือกใช้เป็นหลักในการพัฒนาเว็บแอปพลิเคชัน
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stacks.map((stack, index) => (
            <div 
              key={index}
              className={`group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 transform hover:-translate-y-2 cursor-default ${stack.shadow}`}
            >
              <div className="flex flex-col items-center justify-center space-y-5">
                {/* Logo with Brand Color - ใช้งานตลอดเวลา */}
                <div 
                  className="opacity-80 group-hover:opacity-100 transition-all duration-300 scale-100 group-hover:scale-110"
                  style={{ color: stack.brandColor }}
                >
                  {stack.icon}
                </div>
                
                {/* Text Label */}
                <span 
                  className="font-bold text-xs uppercase tracking-widest text-slate-400 group-hover:text-slate-800 transition-colors duration-300"
                >
                  {stack.name}
                </span>
              </div>
              
              {/* Subtle background highlight on hover */}
              <div 
                className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: stack.brandColor }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;