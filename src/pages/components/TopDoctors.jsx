import { TiArrowRight } from "react-icons/ti";
import { doctors } from "../../common/assets";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const TopDoctors = () => {

    const router = useNavigate();

    // const { doctors } = useContext();
    

    return ( 
        <div className="flex flex-col items-center justify-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="sm:w-1/3 text-center text-3xl sm:text-5xl font-black uppercase">Top Doctors</h1>
            <p className="sm:w-1/3 text-center text-lg">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {doctors.slice(0, 12).map((item, index) => (
                    <div onClick={() => router(`/appointment/${item._id}`)}
                    key={index} className="border-[0.1px] group border-lime-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-400 hover:shadow-md group">
                        <img className="bg-lime-500 group-hover:bg-lime-700 transition-all duration-300" src={item.image} alt={item.name} />
                        <div className="pb-4 pt-3 px-4">
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 rounded-full bg-green-500"></p><p className="pt-1">Available</p>
                            </div>
                            <p className="text-lg text-gray-900 font-bold group-hover:text-lime-800">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() =>{ router('/doctors')}} className="btn px-10 py-3 mt-5 bg-lime-200 rounded-full flex justify-center items-center space-x-3">
                <span className="text-xl font-medium pt-2">View More</span> 
                <TiArrowRight className="text-2xl hover:text-white"/>
                </button>
        </div>
     );
}
 
export default TopDoctors;