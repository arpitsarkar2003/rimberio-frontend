import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";


const NavItem = ({ to, children, onClick }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        isActive 
          ? 'group-hover:text-white transition-all duration-200 px-2 py-2 border-t border-lime-700 rounded-md ' 
          : 'text-gray-800 group-hover:text-white transition-all duration-200 px-2 py-1'
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );

const Navbar = ({ isDarkMode, isAuth, toggleAuth }) => {

    const [isScrolled, setIsScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={` fixed top-0 left-0 right-0 px-32 z-50 border-gray-300 flex justify-between items-center ${isScrolled ? 'border-b shadow-[rgba(145,193,94,0.1)_0px_5px_4px_0px] border-gray-200  backdrop-blur-2xl bg-white' : 'bg-white backdrop-blur-2xl shadow-none border-none'}`}>
            <Link to="/">
                <img src={`${isDarkMode ? '/images/logos/logo_home_header_dark.png' : '/images/logos/logo_home_header_white.png'}`} alt="header_logo" className="w-56" />
            </Link>
            <div>
                <ul className="flex justify-between items-center space-x-5">
                    <Link to="/" className="flex justify-center items-center flex-col group"><li className="border border-transparent items-center justify-center w-full px-5 py-1 mb-4 text-md font-bold hover:border-green-300 hover:bg-lime-500 capitalize transform rounded-md  cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                    <NavItem to="/">Home</NavItem>
                    </li><hr className="border-lime-700 hover:border-lime-700 w-[70%] group-hover:w-[90%]" /></Link>

                    <Link to="/doctors" className="flex justify-center items-center flex-col group"><li className="border border-transparent items-center justify-center w-full px-5 py-1 mb-4 text-md font-bold hover:border-green-300 hover:bg-lime-500 leading-6 capitalize  transform rounded-md  cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                        <NavItem to="/doctors">Doctors</NavItem>
                    </li><hr className="border-lime-700 hover:border-lime-700 w-[70%] group-hover:w-[90%]" /></Link>


                    <Link to="/about" className="flex justify-center items-center flex-col group"><li className="border border-transparent items-center justify-center w-full px-5 py-1 mb-4 text-md font-bold hover:border-green-300 hover:bg-lime-500 leading-6 capitalize transform rounded-md  cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                       <NavItem to="/about"> about</NavItem>

                    </li> <hr className="border-lime-700 hover:border-lime-700 w-[70%] group-hover:w-[90%]" /></Link>


                    <Link to="/contact" className="flex justify-center items-center flex-col group"><li className="border border-transparent items-center justify-center w-full px-5 py-1 mb-4 text-md font-bold hover:border-green-300 hover:bg-lime-500 leading-6 capitalize transform rounded-md  cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                        <NavItem to="/contact">contact</NavItem>
                    </li><hr className="border-lime-700 hover:border-lime-700 w-[70%] group-hover:w-[90%]" /></Link>
                </ul>
            </div>
            <div className="relative">
                {isAuth ? (
                    <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleDropdown}>
                        <img src="/images/profile_pic.png" alt="user" className="w-10 h-10 rounded-full" />
                        <RiArrowDropDownLine className="w-8 h-8" />
                    </div>
                ) : (
                    <button
                        onClick={() => {}}
                        className="flex items-center justify-center px-4 py-2 text-md font-bold bg-lime-500 rounded-sm  hover:-translate-y-1 transition-all duration-200"
                    >
                        Login / Register
                    </button>
                )}

                {isOpen && (
                    <div className="absolute right-0 mt-2 min-w-48 bg-stone-100 rounded-md shadow-lg">
                        <Link to="/my-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</Link>
                        <Link to="/my-appointments" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Appointments</Link>
                        <button className="block w-full text-left px-4 py-2 text-black bg-red-600/60 hover:bg-red-600" onClick={toggleAuth}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;