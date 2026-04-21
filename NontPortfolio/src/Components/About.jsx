import React from 'react'

const About = () => {
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
            </div>
        </div>
    )
}

export default About