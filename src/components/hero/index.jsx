import Foto from "../hero/assets/heroPic.png"
import { useNavigate } from "react-router-dom";

function HeroSection () {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const handleSpecialist = () => {
        token ? navigate("/specialist") : navigate("/login");
    }


    return (
        <div className="flex flex-col-reverse lg:flex-row mt-10 md:mx-20 gap-4 px-12 items-center mb-0">
            <div className="p-4 flex-1">
                <p className="font-semibold text-4xl">Get ready for your best ever Dental Experience!</p>
                <p className="text-base pt-6">We use only the best quality materials on the market in order to 
                    provide the best products to our patients, So don't worry about anything and book yourself.</p>
                <div className="flex my-10 py-2">
                    <button onClick={handleSpecialist} className="font-medium text-base text-white bg-[#1376F8] px-5 py-2 rounded-lg my-10">
                        Meet our specialists
                    </button>
                    <div className="flex items-center gap-2 px-5 my-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1376F8" className="size-6">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 
                            4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 
                            0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 
                            1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" 
                            clipRule="evenodd" />
                        </svg>
                        <div>
                            <p className="text-[#1376F8] font-semibold">Dental 24H Emergency</p>
                            <p className="text-base">0900-78601</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='p-4 flex-1 relative'>
                <img src={Foto} alt="Hero-Pict" />
            </div>
        </div>
    )
}

export default HeroSection;