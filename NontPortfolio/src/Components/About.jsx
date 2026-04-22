import React from 'react'
import { motion } from 'framer-motion';











const About = () => {

    const skills = [
        {
            name: 'HTML5',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
            name: 'CSS3',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
            name: 'TypeScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
            name: 'React',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'TailwindCSS',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            name: 'MUI',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
        },
        {
            name: 'Vite',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };











    return (
        <div className="  dark:bg-[#1c1c22] bg-slate-50 py-16 px-4 sm:px-6 lg:px-8  dark:text-white font-jetbrains">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header Section - Styled based on the provided image */}
                <div className="mb-20 text-left">
                    <h2 className="text-3xl font-bold dark:text-white relative inline-block pb-4 mb-10 font-jetbrains">
                        About Me
                        <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#22c55e] rounded-full"></span>
                    </h2>

                    <div className="max-w-4xl space-y-8">
                        <p className="text-xl leading-relaxed dark:text-white text-gray-500">
                            I have spent my time intensively studying Web Development and building my technical skills. Now, I am ready to bring my dedication, along with my English proficiency and coding
                            knowledge, to work for your company. I am very eager to learn and grow as a professional developer here.
                        </p>

                        <p className="text-lg dark:text-white text-gray-500">
                            Currently unemployed and actively seeking opportunities at forward-thinking companies. I'm eager to bring my skills and passion for front-end development to a dynamic team.
                        </p>
                    </div>
                </div>

                <div className="dark:bg-[#1c1c22]  ">
                    {/* หัวข้อเล็กๆ ด้านบน */}
                    <div className="flex items-center gap-3 mb-6 px-2">
                        <span className="text-sm  font-jetbrains font-bold text-gray-400 uppercase tracking-widest">Tech Stack</span>
                       
                    </div>

                    {/* แถวแนวนอนของ Skills */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap  gap-4 md:gap-8"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className="flex flex-col items-center gap-2 group cursor-default"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center  group-hover:grayscale-0 transition-all duration-300">
                                    <img
                                        src={skill.logo}
                                        alt={`${skill.name} logo`}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                
                                    />
                                </div>
                                {/* ชื่อภาษาจะปรากฏเด่นขึ้นเมื่อ hover */}
                                <span className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default About