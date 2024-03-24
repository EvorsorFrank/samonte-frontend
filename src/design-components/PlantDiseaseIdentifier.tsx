import React, { useEffect, useState } from "react";

const PlantDiseaseIdentifier = () => {
    const [testData, setTestData] = useState<string>('');

    const testingData = async () => {
        try {
            const response = await fetch('http://localhost:8000/getData', {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setTestData(data.message); // Update state with the fetched message
        } catch (error:any) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        testingData();
    }, []);

    return (
        <>
            {testData}
        </>
    );
};

export default PlantDiseaseIdentifier;