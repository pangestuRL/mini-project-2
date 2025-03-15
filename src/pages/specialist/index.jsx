import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar";

function Specialist () {
    const [user, setUser] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [specialistData, setSpecialistData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState ("");
    const [pagination, setPagination] = useState ({
        per_page : 6,
        page :1,
        currentPage : null,
        previousPage : null,
        nextPage : null,
        total : null
      });
    

    const openModal = async (userId) => {
        setIsModalOpen(true);
        setLoading(true);
        console.log(userId);

        try {
            const url = `https://reqres.in/api/users/${userId}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.data);
            console.log(data.support);
            setSpecialistData(data);
        } catch (error) {
            console.error("Error fetching specialist data:", error);
        } finally {
            setLoading(false);
        }
    };
    
    const getUser = () => {
        axios
        .get(`https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`)
        .then(res => {
            
            const dataUser = res.data.data;
            console.log("res", dataUser);
            setUser(dataUser);

            const { total, per_page } = res.data;
            setPagination(prev => ({
                ...prev,
                totalPages: Math.ceil(total / per_page),
              }));
        })
        .catch(err => {
            console.log("ini data gagal", err);
        })
    
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSpecialistData(null);
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getUser();
      }, [search, pagination.page]);

    
    return (
        <div>
            <Navbar/>
            <div className="m-12 flex flex-col items-center min-h-screen text-center">
            <div>
                <h2 className="font-bold text-5xl items-center mb-3">Meet our specialists</h2>
                <p className="mb-5">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                <input type="text" name="" id="" onChange={(e) => setSearch(e.target.value)}/>
            </div>

            {/* div seluruh card */}
            <div className="flex flex wrap gap-3">
                {user?.map((user) => (
                    // div setiap card
                <div className="flex gap-2"
                    key = {user.id}>
                    <img
                    src={user.avatar} alt="doctor-photo" className="w-12 h-12 rounded-full border-2 border-indigo-800 dark:border-blue-900"/>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-indigo-800 dark:text-white">{user.first_name + ' ' + user.last_name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Profession</p>
                        <button className="bg-cyan-500 text-white rounded-md px-2 py-2" onClick={() => openModal(user.id)}>
                            Details
                        </button>
                    </div>
                </div>
            ))}
            </div>

            <div className="flex mt-7">
                <button 
                    disabled={pagination.page === 1}
                    onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                    className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    &lt; Previous
                </button> 
          
                {pagination.total && Array.from({ length: pagination.total - pagination.perPage - 1 },(_, i) => i + 1).map((pageNum) => (
                <button
                    key={pageNum}
                    onClick={() => setPagination((prev) => ({ ...prev, currentPage: pageNum }))}>
                    {pageNum}
                </button>
                ))}

                <button 
                    disabled={pagination.page === pagination.totalPages}
                    onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                    className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Next &gt;
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] text-center">
                        {loading ? (
                            <p>Loading...</p>
                        ) : specialistData ? (
                            <>
                                <img src={specialistData.data.avatar} alt="doctor-photo" className="w-24 h-24 object-cover mx-auto my-4 rounded-full"/>
                                <h3 className="text-xl font-bold">{specialistData.data.first_name} {specialistData.data.last_name}</h3>
                                <p className="text-gray-600"></p>
                                <p className="text-gray-600">📧 {specialistData.data.email}</p>
                                <p className="text-sm text-gray-500">{specialistData.data.description}</p>
                                <p>🌐 : {specialistData.support.url}</p>
                                <button 
                                    className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </>
                        ) : (
                            <p>Error loading data</p>
                        )}
                    </div>
                </div>
            )}
        </div> 
        </div>
        
    );
};

export default Specialist;