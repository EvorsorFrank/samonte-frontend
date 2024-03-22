import { useState } from "react";

const PlantDiseaseIdentifier = () => {

    const [predictedClass, setPredictedClass] = useState<string>('');

    const handleDrop = async (event:any) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('http://localhost:5000/upload_image', {
                method: 'POST',
                body: formData,
                mode: "no-cors"
            })

            const data = await response.json()

            if (response.status === 200) {
                setPredictedClass(data.class);
              }
              
        } catch (error:any) {
            console.error(error.message)
        }

    };
console.log(predictedClass)
    return (
        <>
            <div className='text-base text-center'>
                Please insert an image below then select a crop to identify
            </div>
            <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                Drag and Drop Image Here
            </div>
            {predictedClass && (
                <div className='text-base text-center'>
                    Predicted Class: {predictedClass}
                </div>
            )}
        </>
    );
};

export default PlantDiseaseIdentifier;