import { Link } from "react-router-dom";
import { specialityData } from "../../common/assets";

const SpecialityMenu = () => {
    return (
        <div id="specialists" className="flex flex-col items-center gap-4 pt-32 pb-36 text-gray-800">
            <h1 className="sm:w-1/3 text-center text-3xl sm:text-5xl font-black uppercase">Find by Speciality</h1>
            <hr  className="border-lime-700 w-1/3"/>
            <p className="sm:w-1/3 text-center text-base">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

            <div className="flex sm:justify-evenly sm:max-w-4xl items-center gap-4 pt-5 w-full overflow-scroll">
                {specialityData.map((item, index) => (
                    <Link onClick={() => window.scrollTo(0, 0)} key={index} to={`/doctors/${item.speciality}`} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-200 group">
                        <img src={item.image} alt={item.speciality} className="w-16 sm:w-24 mb-2"/>
                        <p className="text-sm font-semibold group-hover:text-lime-700">{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SpecialityMenu;