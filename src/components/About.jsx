function About() {
    return (
        <div className="mt-28 flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-[900px] text-center transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">About Me</h2>
                <p className="text-lg mt-4 text-gray-800 leading-relaxed">
                    I am a student at Jamhuriya University, where I started in 2023. 
                    I am currently learning Computer Science, especially Computer Applications, and focusing on developing my skills in various applications.
                </p>
                <p className="text-lg mt-4 text-gray-800 leading-relaxed">
                    My passion lies in creating innovative solutions that enhance user experience and streamline processes. 
                    I enjoy working with both front-end and back-end technologies, and I am constantly seeking opportunities to learn and grow in the field.
                </p>
                <p className="text-lg mt-4 text-gray-800 leading-relaxed">
                    In my free time, I love exploring new programming languages, contributing to open-source projects, and collaborating with others in the tech community.
                </p>
            </div>
        </div>
    );
}

export default About;
