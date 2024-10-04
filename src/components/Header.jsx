import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="bg-white shadow-md">
            <div className="flex justify-between items-center px-6 py-4">
                <h1 className="text-3xl font-bold text-blue-600">My Portfolio</h1>
                <ul className="flex gap-8">
                    <li
                        className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Home
                    </li>
                    <li
                        className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                        onClick={() => navigate('/about')}
                    >
                        About
                    </li>
                    <li
                        className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                        onClick={() => navigate('/projects')}
                    >
                        Projects
                    </li>
                    <li
                        className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                        onClick={() => navigate('/contact')}
                    >
                        Contact
                    </li>
                    <li
                        className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                        onClick={() => navigate('/skills')}
                    >
                        Skills
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
