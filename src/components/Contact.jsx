import { FaEnvelope, FaPhoneAlt,  FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
    return (
        <div className="flex flex-col md:flex-row justify-around mt-10 p-6 bg-gray-100">
            {/* Contact Information */}
            <div className="md:w-1/4 mb-8 md:mb-0 bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between">
                <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
                <div className="flex-grow">
                    <div className="flex items-center mb-2 hover:bg-blue-50 p-2 rounded-lg transition duration-200">
                        <FaEnvelope className="text-blue-600 mr-2" size={24} />
                        <span className="text-lg">anabomer541@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-2 hover:bg-blue-50 p-2 rounded-lg transition duration-200">
                        <FaPhoneAlt className="text-blue-600 mr-2" size={24} />
                        <span className="text-lg">+252613891172</span>
                    </div>
                    <h3 className="text-lg font-bold mt-14">Follow Me:</h3>
                    <div className="flex gap-4 mt-2">
                        
                        
                        <a href="https://www.linkedin.com/in/anab-omer-56b728288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaLinkedin size={24} />
                        </a>
                        
                        <a href="https://twitter.com/Anan1172" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <form className="flex-grow">
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
