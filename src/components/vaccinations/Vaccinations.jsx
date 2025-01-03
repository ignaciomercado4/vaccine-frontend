import { useState, useEffect } from "react";
import axios from "axios";

function Vaccinations() {
    const [data, setData] = useState({}); 

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

    return (
        <div>
            {data.vaccinations ? (
                data.vaccinations.map((vacc, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {vacc.name} <br />
                        <strong>Drug ID:</strong> {vacc.drugId} <br />
                        <strong>Dose:</strong> {vacc.dose} <br />
                        <strong>Date:</strong> {new Date(vacc.date).toLocaleDateString()} <br />
                        <strong>Creation date:</strong> {new Date(vacc.CreatedAt).toLocaleDateString()} <br />
                        <strong>Last modification:</strong> {new Date(vacc.UpdatedAt).toLocaleDateString()}
                    </li>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Vaccinations;
