import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/Bread Crumb";
import Footer from "../../components/footer";


function SpecialistDetail () {
    const {id} = useParams();
    const [specialist, setSpecialist] = useState([]);

    const getSpecialist = () => {
        axios
        .get(`https://reqres.in/api/users/${id}`)
        .then(res => {
            console.log(res);
            setSpecialist(res.data.data);
        })
        .catch(err => {
            console.log("error data", err);
        })
    }

    useEffect(() => {
        getSpecialist();
    }, []);

    return (
        <div className="bg-[#E6F6FE] mt-0 h-[600px]">
            <Navbar/>
            <Breadcrumb/>
            <div className=" flex flex-wrap md:mx-20 mt-10 mb-12 py-12 px-10 bg-white shadow-lg rounded-xl">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    <img className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg" src={specialist.avatar} alt="personal-photo"/>
                    <div className="text-center md:text-left">
                        <p className="text-2xl font-bold text-blue-600 w-40">{specialist.first_name + ' ' + specialist.last_name}</p>
                        <p className="text-gray-600 text-lg">Profession</p>
                        <p className="text-yellow-400 text-lg mt-2">⭐⭐⭐⭐⭐</p>
                    </div>
                    <div>
                    <p className="text-gray-700 text-justify">At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness 
                        and health by using a whole body approach to oral health. This means not just focusing on cavities, but 
                        focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, 
                        and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote 
                        overall health and well being. We work hard to stay up to date with the most advanced techniques and 
                        technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT 
                        radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to 
                        performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is 
                        utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for 
                        all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using 
                        microsurgical techniques, this means less discomfort and faster healing times.</p>
                </div>
                </div>    
            </div>
            <Footer/>
        </div>
    )
}

export default SpecialistDetail;