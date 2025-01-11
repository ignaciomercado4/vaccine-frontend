import axios from "axios";
import { useState, useEffect } from "react";

function handleSubmit() {
    const $CREATE_VACCINATION_FORM = document.querySelector("#create-vaccination-form");

    let data = {
        "name": $CREATE_VACCINATION_FORM.name.value,
        "drugId": parseInt($CREATE_VACCINATION_FORM.drugId.value),
        "dose": parseInt($CREATE_VACCINATION_FORM.dose.value),
        "date": new Date($CREATE_VACCINATION_FORM.date.value).toISOString()
    };


    try {
        axios.post('http://localhost:8080/api/vaccination', data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("jwtToken")}`
            }
        })
        .then(location.reload());
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

function CreateVaccinationModal() {
    
    const [drugsData, setDrugsData] = useState({}); 
    
    useEffect(() => {
        fetchDrugsData();
    }, []);

    const fetchDrugsData = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/drugs', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("jwtToken")}`
                }
            });

            setDrugsData(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New Vaccination</h2>
            <form id="create-vaccination-form" className="space-y-4">
                {/* vacc name */}
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Vaccination Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required placeholder="Enter vaccination name"
                    />
                </div>

                {/* dose */}
                <div>
                    <label htmlFor="dose" className="block text-gray-700 font-semibold mb-2">
                        Dose
                    </label>
                    <input
                        type="number"
                        name="dose"
                        id="dose"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required placeholder="Enter dose"
                    />
                </div>

                {/* drug id */}
                <div>
                    <label htmlFor="dose" className="block text-gray-700 font-semibold mb-2">
                        Drug Id
                    </label>
                    <select name="drugId" 
                    id="drugId" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                        {drugsData.drugs && drugsData.drugs.map((drug, index) => {
                            return(
                                <option value={drug.ID} key={index}>{drug.name} - ID {drug.ID}</option>
                            )
                            })}
                    </select>
                </div>
               
                {/* date */}
                <div>
                    <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                        Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* submit button */}
                <div className="text-right">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={handleSubmit}
                    >
                        Save vaccination
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateVaccinationModal;
