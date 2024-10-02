import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../auth/authModal";
import { TiArrowRight } from "react-icons/ti";

const Banner = ({ isAuth }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const router = useNavigate();

    return (
        <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-tl-[100px] rounded-br-[100px] px-6 md:px-14 lg:px-20 my-20 shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
                {/* left */}
                <div className="flex-1 py-12 md:py-20 lg:py-24">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Book Appointment<br />With <span className="text-lime-200">100+</span> Trusted Doctors
                    </h2>
                    <button 
                        onClick={() => setIsAuthModalOpen(true)}
                        className="inline-flex items-center px-6 py-3 text-lime-700 font-semibold bg-white text-lg rounded-full hover:bg-lime-100 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <span>Create An Account</span>
                        <TiArrowRight className="ml-2 text-2xl" />
                    </button>
                </div>
                {/* right */}
                <div className="hidden md:block md:w-1/2 lg:w-[370px]">
                    <img className="w-full max-w-md" src="/images/appointment_img.png" alt="Doctor appointment" />
                </div>
            </div>

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </div>
    );
}

export default Banner;