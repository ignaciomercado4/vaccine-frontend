import { useState, useEffect } from "react";
import axios from "axios";

function Drugs() {
    const [data, setData] = useState({}); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/drugs', {
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

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Drugs List</h1>
            {data.drugs ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.drugs.map((drug, index) => (
                        <li 
                            key={index} 
                            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">{drug.name}</h2>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Approved:</strong> {drug.approved ? "Yes" : "No"}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Min Dose:</strong> {drug.minDose}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Max Dose:</strong> {drug.maxDose}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Available At:</strong> {new Date(drug.availableAt).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Creation date:</strong> {new Date(drug.CreatedAt).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>Last modification:</strong> {new Date(drug.UpdatedAt).toLocaleDateString()}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-lg text-center mt-10">Loading...</p>
            )}
        </div>
    );
}

export default Drugs;
