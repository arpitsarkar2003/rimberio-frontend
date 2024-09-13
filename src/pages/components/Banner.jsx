import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../auth/authModal";
import { assets } from '../../common/assets';
import { TiArrowRight } from "react-icons/ti";

const Banner = ({ isAuth }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const router = useNavigate();


    return (
        <div className="flex bg-lime-500 rounded-lg px-6 md:px-14 lg:px-12 my-20 md:mx-10">

            {/* left */}
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white">
                    <p>Book Appointment</p>
                    <p>With <span>100+</span> Trusted Doctors</p>
                </div>
                {/* {isAuth ? <button onClick={() => router('/myappointments')}>
                    <div className="btn-dark flex justify-center items-center gap-1 text-black font-semibold bg-white text-base px-4 py-2 rounded-lg hover:scale-105 transition-all duration-200">
                        <span className="pt-1">Go to my Appointments</span> <TiArrowRight className="text-2xl hover:text-white" />
                    </div>
                </button> : <button onClick={() => setIsAuthModalOpen(true)}><div className="btn-dark flex justify-center items-center gap-1 text-black font-semibold bg-white text-base px-4 py-2 rounded-lg hover:scale-105 transition-all duration-200">
                    <span className="pt-1">Create An Account</span> <TiArrowRight className="text-2xl hover:text-white" />
                </div></button>
                } */}
                <button onClick={() => router('/login')}><div className="btn-dark flex justify-center items-center gap-1 text-black font-semibold bg-white text-base px-4 py-2 rounded-lg hover:scale-105 transition-all duration-200">
                    <span className="pt-1">Create An Account</span> <TiArrowRight className="text-2xl hover:text-white" />
                </div></button>
            </div>
            {/* right */}
            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                <img className="w-full absolute bottom-0 right-0 max-w-md" src="/images/appointment_img.png" alt="" srcset="" />
            </div>









            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </div>
    );
}

export default Banner;