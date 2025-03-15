import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../navbar/assets/icon-logo.png";

const Navbar = () => {
    console.log(localStorage);
    const token = localStorage.getItem("accessToken");
    const username = localStorage.getItem("email");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    }

    const handleLogin = () => {
        navigate("/login");
    }


    return (
        <div className="flex justify-between items-center lg:mt-10 lg:mx-20 bg-[#E6F6FE] p-5 rounded-lg">
            <Link to="/">
                <div className="flex flex-row">
                    <img src={Logo} alt="Logo" className=""/>
                    <p className="font-bold text-3xl ml-3">ArDental</p>
                </div>
                
            </Link>
            
            <div className="flex gap-9">
                {/* <p className="font-medium text-base"><Link to="/">Home</Link></p> */}
                {/* <p className="font-medium text-base"><Link to="/specialist">Services</Link></p>
                <p className="font-medium text-base">Contact</p> */}
            </div>
            <div className="flex gap-5 items-center">
                {username ? <p className="font-bold text-xl font-mono hidden md:block">Welcome, {username.split(".")[0]}!</p> : <p></p>}
                {token ? <button className="font-medium text-base text-white bg-[#1376F8] px-5 py-2 rounded-lg" onClick = {handleLogout}>Logout</button> : <button className="font-medium text-base text-white bg-[#1376F8] px-5 py-2 rounded-lg" onClick = {handleLogin}>LogIn</button>}
            </div>
        </div>
    )
}

export default Navbar;