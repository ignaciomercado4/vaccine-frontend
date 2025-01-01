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

    return(
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

export default Vaccinations