import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

const Header = () => {
    return ( 
        <div className="flex flex-col md:flex-row flex-wrap bg-lime-500 rounded-lg px-6 md:px-10 lg:px-20">
            {/* left */}
            <div className="flex flex-col justify-center items-center md:w-1/2 gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight text-center sm:text-left">
                Book Appointment <br /> With Trusted Doctors
                </p>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light text-center sm:text-left">
                    <img src="/images/group_profiles.png" alt="" className="w-28" />
                    <p>Simply browse through our extensive list of trusted doctors,<br className="hidden sm:block"/> schedule your appointment hassle-free.</p>
                </div> 
                <a href="#specialists" className="btn-dark flex justify-center items-center gap-1 text-black font-semibold bg-white text-base px-4 py-2 rounded-lg hover:scale-105 transition-all duration-200">
                    <span className="pt-1">Book Appoienmtent </span> <TiArrowRight className="text-2xl hover:text-white"/>
                </a>
            </div>

            {/* right */}
            <div className="md:w-1/2 relative">
                <img src="/images/header_img.png" alt="" className="w-full h-auto md:absolute bottom-0 " />
            </div>
        </div>
     );
}
 
export default Header;