import Header from "./Header";
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer"

function Main() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="flex flex-col md:flex-row justify-around items-center mt-10 p-8">
                <div className="text-center md:text-left md:mt-16">
                    <p className="text-2xl text-gray-900 font-semibold">Hi,</p>
                    <p className="text-2xl text-gray-900 font-semibold">My name's Anab</p>
                    <h1 className="text-3xl font-bold mt-3 text-blue-600">I'm</h1>
                    <p className="text-lg mt-4 text-gray-700 max-w-sm mx-auto md:mx-0">
                        a junior full-stack web developer with a passion for creating visually stunning and user-friendly websites.
                    </p>
                    <a href="My CV.pdf" download>
                        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                            Download CV
                        </button>
                    </a>
                    <div className="mt-6 flex justify-center md:justify-start gap-6">
                        <a href="https://github.com/anaomar72" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="text-gray-700 hover:text-blue-600 transition-colors duration-200" />
                        </a>
                        <a href="https://www.instagram.com/anab_omar_mohamed" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} className="text-gray-700 hover:text-pink-600 transition-colors duration-200" />
                        </a>
                        <a href="https://wa.me/252613891172" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={30} className="text-gray-700 hover:text-green-600 transition-colors duration-200" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center mt-4 md:mt-0">
                    <img 
                        src="src/assets/images/My-pic.jpg" 
                        alt="Your Name"
                        className="rounded-full shadow-lg w-80 h-auto md:w-96 border-4 border-blue-300"
                    />
                </div>
            </div>
            <div className="mt-12">
            <About />

                <Projects />
                <Skills />
                
                <Contact />
                <Footer/>
            </div>
        </div>
    );
}

export default Main;
