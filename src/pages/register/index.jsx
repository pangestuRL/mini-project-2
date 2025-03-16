import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const isValidForm = () => {
        let isValid = true;
        
        if (!email) {
            setErrorEmail("email is required!");
            isValid = false;
        } else {
            setErrorEmail("");
        }

        if (!password) {
            setErrorPassword("password is required!");
            isValid = false;
        } else {
            setErrorPassword("");
        }
        return isValid;
    }

    const handleChangeEmail = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handleChangePassword = e => {
        console.log(e);
        setPassword(e.target.value);
    }

    const handleRegister = () => {
        setLoading(true);

        let isValid = isValidForm();
        if (!isValid) {
            setTimeout(() => {
                setErrorPassword("");
                setErrorEmail("");
              }, 500);
              return;
        }
        

        console.log("email = "+email);
        const payload = {
            email : email,
            password : password,
        }

        axios
        .post("https://reqres.in/api/register", payload)
        .then(res => {
            console.log("berhasil", res);
            setShowSuccess(true);
            setMessage("Register berhasil!");

            setTimeout(()=> {
                setShowSuccess(false);
                navigate("/login");
            }, 500)
        })
        .catch(err => {
            console.log("Register gagal", err.response);
            setMessage(true);
            setTimeout(() => {
                setMessage(false);
            },1000)
        })
        .finally(() => {
            setLoading(false);
        })
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold">SignUp</h1>
                    </div>
                    {showSuccess && (
                        <div className="mt-2 p-3 bg-green-500 text-white flex justify-center rounded-md">
                        Register Berhasil
                        </div>
                    )}
                    {message && (
                        <div className="mt-2 p-3 bg-red-800 text-white flex justify-center rounded-md">
                        Register gagal
                        </div>
                    )}
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Your Name
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Email address"
                                    onChange={handleChangeEmail}
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Your Email
                                </label>
                                {errorEmail && <p className="text-red-500 text-sm mt-2">{errorEmail}</p>}
                            </div>
                            <div className="relative">
                                <input
                                    autoComplete="off"
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Password"
                                    onChange={handleChangePassword}
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                >
                                    Password
                                </label>
                                {errorPassword && <p className="text-red-500 text-sm mt-2">{errorPassword}</p>}
                            </div>
                            <div className="relative">
                                <button DISABLED={loading} className="bg-cyan-500 text-white rounded-md px-2 py-1" onClick={handleRegister}>
                                    {loading? "Loading..." : "Register"}
                                </button>
                            </div>
                            <div>
                                <p className="text-center text-sm text-gray-500">Already have an account ? 
                                    <span 
                                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                                        onClick={() => navigate("/login")}>
                                         Sign in
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default Register;