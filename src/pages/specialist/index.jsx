import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/Bread Crumb";


function Specialist () {
    const [specialist, setSpecialist] = useState([]);
    const [search, setSearch] = useState ("");
    const [pagination, setPagination] = useState ({
        per_page : 6,
        page :1,
        currentPage : null,
        previousPage : null,
        nextPage : null,
        total : null
      });
    
    
    const getSpecialist = () => {
        axios
        .get(`https://reqres.in/api/users?page=${pagination.page}&per_page=${pagination.per_page}`)
        .then(res => {
            
            const dataSpecialist = res.data.data;
            console.log("res", dataSpecialist);
            setSpecialist(dataSpecialist);

            const { total, per_page } = res.data;
            setPagination(prev => ({
                ...prev,
                totalPages: Math.ceil(total / per_page),
              }));
        })
        .catch(err => {
            console.log("Gagal mengambil data", err);
        })
    
    };
    

    useEffect(() => {
        getSpecialist();
    }, []);

    useEffect(() => {
        getSpecialist();
      }, [pagination.page]);

    const filteredSpecialist = specialist.filter((user) => 
        `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
    );

    
    return (
        <div className="bg-[#E6F6FE] h-[1100px]">
            <Navbar/>
            <Breadcrumb/>
            <div className="flex flex-col mx-20 items-center h-screen pt-10 text-center rounded-md">
            <div>
                <h2 className="font-bold text-5xl items-center mb-3 pt-5">Meet our specialists</h2>
                <p className="mb-5">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                <input className="border-2 p-1 rounded-md w-80 text-center my-10" type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>

            {/* div seluruh card */}
            <div className="flex flex-wrap justify-center gap-3 lg:mx-20">
                {filteredSpecialist.length > 0? (
                    filteredSpecialist.map((user) => (
                        <Link to={`/specialist/${user.id}`} className="flex items-center justify-center space-x-7 p-3 bg-white dark:bg-gray-700 rounded-lg duration-300 hover:bg-indigo-100 dark:hover:bg-gray-600 w-80"
                            key = {user.id}>
                            <img
                            src={user.avatar} alt="doctor-photo" className="w-12 h-12 rounded-full border-2 border-[#1376F8] dark:border-blue-900"/>
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold text-[#1376F8] dark:text-white">{user.first_name + ' ' + user.last_name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Profession</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No specialist found</p>
                )}
            </div>

            <div className="flex mt-10 pb-8">
                <button 
                    disabled={pagination.page === 1}
                    onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                    className="flex items-center justify-center px-3 h-8 w-24 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                    className="flex items-center justify-center px-3 h-8 w-24 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    Next &gt;
                </button>
            </div>
        </div> 
        </div>
        
    );
};

export default Specialist;