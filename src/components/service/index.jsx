import service1 from "../service/assets/service1.png";
import service2 from "../service/assets/service2.png";
import service3 from "../service/assets/service3.png";
import service4 from "../service/assets/service4.png";
import service5 from "../service/assets/service5.png";
import service6 from "../service/assets/service6.png";


function Services () {

    return (
        <div className="mx-20 bg-[#E6F6FE]">
            <div className="pt-10">
                <h2 className="font-bold text-5xl mb-3 text-center">Services</h2>
                <p className="mb-5 text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center pb-10">
                <img src={service1} alt="Root-Canal-Treatment" className="w-1/4 h-1/3" />
                <img src={service2} alt="Cosmetic-Dentist" className="w-1/4 h-1/3" />
                <img src={service3} alt="Dental-Implants" className="w-1/4 h-1/3" />
                <img src={service4} alt="Teeth-Whitening" className="w-1/4 h-1/3" />
                <img src={service5} alt="Emergency-Dentistry" className="w-1/4 h-1/3" />
                <img src={service6} alt="Prevention" className="w-1/4 h-1/3" />
            </div>
                
        </div>
    )
}

export default Services;