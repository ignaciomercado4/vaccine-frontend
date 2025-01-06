import { useState, useEffect } from "react";
import axios from "axios";
import CreateVaccinationModal from "./CreateVaccinationModal";

function Vaccinations() {
    const [data, setData] = useState({});
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [selectedVacc, setSelectedVacc] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/vaccination', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("jwtToken")}`
                }
            });
            setData(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const openCreateModal = () => setIsCreateModalOpen(true);
    const closeCreateModal = () => setIsCreateModalOpen(false);

    const openDeleteModal = (vacc) => {
        setSelectedVacc(vacc);
        setIsDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setSelectedVacc(null);
        setIsDeleteModalOpen(false);
    };

    const openUpdateModal = (vacc) => {
        setSelectedVacc(vacc);
        setIsUpdateModalOpen(true);
    };
    const closeUpdateModal = () => {
        setSelectedVacc(null);
        setIsUpdateModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Vaccinations List</h1>
                <button
                    onClick={openCreateModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add New Vaccination
                </button>
            </div>

           {data.vaccinations ? (
             <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {data.vaccinations.map((vacc, index) => (
                 <li
                     key={index}
                     className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
                 >
                     <h2 className="text-xl font-semibold text-gray-700 mb-2">{vacc.name}</h2>
                     <p className="text-sm text-gray-600 mb-1">
                         <strong>Approved:</strong> {vacc.drugId}
                     </p>
                     <p className="text-sm text-gray-600 mb-1">
                         <strong>Min Dose:</strong> {vacc.dose}
                     </p>
                     <p className="text-sm text-gray-600 mb-1">
                         <strong>Max Dose:</strong> {vacc.date}
                     </p>
                     <p className="text-sm text-gray-600 mb-1">
                         <strong>Created at:</strong> {new Date(vacc.CreatedAt).toLocaleDateString()}
                     </p>
                     <p className="text-sm text-gray-600 mb-1">
                         <strong>Last update:</strong> {new Date(vacc.UpdatedAt).toLocaleDateString()}
                     </p>

                     <div className="mt-4 flex justify-between">
                         <button
                             onClick={() => openUpdateModal(vacc)}
                             className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                         >
                             Edit
                         </button>
                         <button
                             onClick={() => openDeleteModal(vacc)}
                             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                         >
                             Delete
                         </button>
                     </div>
                 </li>
             ))}
         </ul>
           ) : ( <p className="text-gray-500 text-lg text-center mt-10">Loading...</p>)}

            {/* create vacc modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 relative">
                        <button
                            onClick={closeCreateModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <CreateVaccinationModal closeModal={closeCreateModal} />
                    </div>
                </div>
            )}

            {/* delete vacc modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 relative">
                        <button
                            onClick={closeDeleteModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <DeleteVaccModal vacc={selectedVacc} closeModal={closeDeleteModal} />
                    </div>
                </div>
            )}

            {/* update drug modal */}
            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-1/2 p-6 relative">
                        <button
                            onClick={closeUpdateModal}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <UpdateDrugModal vacc={selectedVacc} closeModal={closeUpdateModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vaccinations;

