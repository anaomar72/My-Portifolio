import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';


function Skills() {
    return (
        <div className="mt-10 flex flex-col ">
            <h1 className="text-3xl font-bold mb-6 text-center">I have the following skills:</h1>
            <div className="flex flex-col md:ml-28 md:flex-row justify-around gap-6">
                
                {/* Frontend Skills */}
                <div className="bg-white p-6 rounded-lg shadow-lg md:w-[500px] h-[460px] transition-transform transform hover:scale-105">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">Frontend Skills</h2>
                    <div className="flex flex-col gap-4">
                        <SkillItem icon={<FaHtml5 />} name="HTML" percentage={90} bgColor="bg-red-500" />
                        <SkillItem icon={<FaCss3Alt />} name="CSS" percentage={85} bgColor="bg-blue-600" />
                        <SkillItem icon={<FaJs />} name="JavaScript" percentage={80} bgColor="bg-yellow-400" />
                        <SkillItem icon={<SiTailwindcss />} name="Tailwind CSS" percentage={75} bgColor="bg-cyan-400" />
                        <SkillItem icon={<FaReact />} name="ReactJS" percentage={80} bgColor="bg-blue-500" />
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-white p-6 rounded-lg shadow-lg md:mr-10 md:w-[500px] h-[460px] transition-transform transform hover:scale-105">
                    <h2 className="text-2xl font-bold mb-4 text-green-600">Backend Skills</h2>
                    <div className="flex flex-col gap-4">
                        <SkillItem icon={<FaNodeJs />} name="Node.js" percentage={80} bgColor="bg-green-600" />
                        <SkillItem icon={<SiExpress />} name="Express" percentage={70} bgColor="bg-gray-600" />
                        <SkillItem icon={<SiMongodb />} name="MongoDB" percentage={75} bgColor="bg-green-700" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const SkillItem = ({ icon, name, percentage, bgColor }) => {
    return (
        <div className={`flex items-center p-4 rounded-lg shadow-md ${bgColor} transition-all duration-300`}>
            <div className="flex items-center text-white">
                <div className="text-2xl">{icon}</div>
                <span className="ml-3 font-medium">{name}</span>
            </div>
            <div className="ml-auto text-white font-semibold">{percentage}%</div>
            <div className="w-20 h-2 bg-gray-300 rounded-full ml-4">
                <div className={`h-full ${bgColor} rounded-full`} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
}

export default Skills;
