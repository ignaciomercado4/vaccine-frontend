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

        return(
            <div>
            {data.drugs ? (
                <ul>
                    {data.drugs.map((drug, index) => (
                        <li key={index}>
                            <strong>Name:</strong> {drug.name} <br />
                            <strong>Approved:</strong> {drug.approved ? "Yes" : "No"} <br />
                            <strong>Min Dose:</strong> {drug.minDose} <br />
                            <strong>Max Dose:</strong> {drug.maxDose} <br />
                            <strong>Available At:</strong> {new Date(drug.availableAt).toLocaleDateString()}
                            <strong>Creation date:</strong> {new Date(drug.CreatedAt).toLocaleDateString()}
                            <strong>Last modification:</strong> {new Date(drug.UpdatedAt).toLocaleDateString()}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        )
}

export default Drugs;
