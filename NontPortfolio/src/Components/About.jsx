import React from 'react'

const About = () => {
    return (
        <div className="  dark:bg-[#1c1c22] py-16 px-4 sm:px-6 lg:px-8  dark:text-white font-jetbrains">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header Section - Styled based on the provided image */}
                <div className="mb-20 text-left">
                    <div className="inline-block text-3xl font-display font-bold mb-10 relative before:content-[''] before:absolute before:-bottom-1.25 before:left-0 before:h-1 before:rounded-full before:w-17.5 before:bg-white/20">
                        <h2 className="text-4xl font-bold dark:text-white">About Me</h2>
                    </div>

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